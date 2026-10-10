const {
  chromium,
} = require("C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const base = process.env.QA_BASE || "http://127.0.0.1:4174";
const output = path.resolve(__dirname, "../../../");
const routes = [
  "/",
  "/about/",
  "/work/",
  "/impact/",
  "/blog/",
  "/contact/",
  "/donate/",
  "/volunteer/",
  "/faq/",
  "/privacy/",
  "/terms/",
  "/blog/a-new-chapter-for-denver-theatre/",
  "/blog/2025-giving-at-a-glance/",
  "/blog/why-colorados-creative-life-matters/",
];
(async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  const errors = [],
    failed = [],
    posts = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("response", (r) => {
    if (r.status() >= 400 && r.url().startsWith(base))
      failed.push(`${r.status()} ${r.url()}`);
  });
  page.on("request", (r) => {
    if (r.method() === "POST") posts.push(r.url());
  });
  for (const width of process.env.QA_PHASE === "interactions"
    ? []
    : [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      const response = await page.goto(base + route, {
        waitUntil: "networkidle",
      });
      assert.equal(response.status(), 200, route);
      assert.equal(await page.locator("main h1").count(), 1, route + " h1");
      await page.evaluate(async () => {
        await Promise.all(
          [...document.images].map(async (i) => {
            i.loading = "eager";
            try {
              await i.decode();
            } catch {}
          }),
        );
      });
      const layout = await page.evaluate(() => ({
        width: innerWidth,
        scroll: document.documentElement.scrollWidth,
        broken: [...document.images]
          .filter((i) => !i.complete || i.naturalWidth === 0)
          .map((i) => i.src),
        outside: [...document.querySelectorAll("main *")]
          .filter((el) => {
            const r = el.getBoundingClientRect();
            return r.width && r.right > innerWidth + 2;
          })
          .slice(0, 5)
          .map((el) => el.className),
      }));
      assert(
        layout.scroll <= width + 1,
        `${route} @${width}: overflow ${JSON.stringify(layout)}`,
      );
      assert.deepEqual(layout.broken, [], `${route} broken images`);
    }
    console.log(`PASS ${routes.length} routes at ${width}px`);
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base + "/");
  await page.screenshot({
    path: path.join(output, "spiragiving-nonprofit-desktop.png"),
    fullPage: true,
  });
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Our story" })
    .click();
  await page.waitForURL("**/about/");
  assert.match(await page.locator("h1").innerText(), /Giving culture/);
  await page.goto(base + "/work/");
  await page.getByLabel("Fiscal year", { exact: true }).selectOption("2024");
  await page.getByLabel("Focus area").selectOption("Community radio");
  assert.equal(await page.locator(".grant-row").count(), 1);
  assert.match(await page.locator(".grant-row").innerText(), /KGNU/);
  assert.match(await page.locator(".grant-total").innerText(), /\$30,000/);
  await page.goto(base + "/impact/");
  await page.getByLabel("Fiscal year", { exact: true }).selectOption("2022");
  assert.match(
    await page.locator(".financial-grid").innerText(),
    /\$3,005,049/,
  );
  await page.getByLabel("Fiscal year", { exact: true }).selectOption("2025");
  assert.match(await page.locator(".financial-grid").innerText(), /\$675,984/);
  await page.screenshot({
    path: path.join(output, "spiragiving-nonprofit-transparency.png"),
    fullPage: true,
  });
  for (const route of ["/contact/", "/donate/", "/volunteer/"]) {
    await page.goto(base + route);
    await page.getByRole("button", { name: "Prepare email draft" }).click();
    assert.equal(
      await page.locator(".draft-result").count(),
      0,
      "empty form must not prepare",
    );
    if (route === "/donate/") {
      await page.getByRole("radio", { name: "Other", exact: true }).check();
      await page.getByLabel("Amount (USD)", { exact: true }).fill("75.50");
      await page
        .getByLabel("Giving preference")
        .selectOption("Recurring giving inquiry");
    }
    await page.getByLabel("Full name", { exact: true }).fill("Website QA");
    await page
      .getByLabel("Email address", { exact: true })
      .fill("qa@example.com");
    await page
      .locator("textarea")
      .fill("Checking an email draft. No message will be sent.");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Prepare email draft" }).click();
    assert.match(
      await page.locator(".draft-result").innerText(),
      /It has not been sent/,
    );
    const href = await page
      .getByRole("link", { name: "Open email app" })
      .getAttribute("href");
    assert.match(href, /^mailto:contact@spiragiving\.dev\?/);
    const body = new URL(href).searchParams.get("body");
    assert.match(body, /Website QA/);
    if (route === "/donate/") {
      assert.match(body, /\$75\.50/);
      assert.match(body, /Recurring giving inquiry/);
    }
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", { name: "Download draft" }).click();
    const download = await downloadPromise;
    assert.match(
      fs.readFileSync(await download.path(), "utf8"),
      /To: contact@spiragiving\.dev/,
    );
    await page.getByLabel("Full name", { exact: true }).fill("Edited name");
    assert.equal(
      await page.locator(".draft-result").count(),
      0,
      "editing invalidates draft",
    );
  }
  await page.goto(base + "/faq/");
  await page
    .locator("summary")
    .filter({ hasText: "Can my organization apply for a grant?" })
    .click();
  assert.equal(await page.locator("details[open]").count(), 1);
  await page.goto(base + "/platform/");
  await page.waitForURL("**/about/");
  await page.goto(base + "/donate.html");
  await page.waitForURL("**/donate/");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/");
  await page.screenshot({
    path: path.join(output, "spiragiving-nonprofit-mobile.png"),
    fullPage: true,
  });
  await page.getByRole("button", { name: "Open navigation" }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Close navigation" })
      .getAttribute("aria-expanded"),
    "true",
  );
  await page.keyboard.press("Escape");
  assert.equal(
    await page
      .getByRole("button", { name: "Open navigation" })
      .getAttribute("aria-expanded"),
    "false",
  );
  assert.deepEqual(errors, [], "runtime errors");
  assert.deepEqual(failed, [], "failed local assets or prefetch requests");
  assert.deepEqual(posts, [], "forms must not silently submit");
  console.log(
    "PASS navigation, grant filters, financial year selection, all three forms, draft downloads, validation, FAQ, redirects and mobile menu. No runtime errors, failed requests or form POSTs.",
  );
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
