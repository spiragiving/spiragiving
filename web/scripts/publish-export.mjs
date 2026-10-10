import { cp, mkdir, writeFile, rm, realpath, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, dirname, basename, join, relative } from "node:path";
const output = fileURLToPath(new URL("../out/", import.meta.url));
const destination = fileURLToPath(new URL("../../docs/", import.meta.url));
const repository = await realpath(
  fileURLToPath(new URL("../../", import.meta.url)),
);
if (
  dirname(resolve(destination)) !== repository ||
  basename(resolve(destination)) !== "docs"
) {
  throw new Error(
    "Refusing to replace an export outside the repository docs directory.",
  );
}
await mkdir(destination, { recursive: true });
// Preserve the root directory so a Windows preview server can keep it open.
// The safety check above ensures only this repository's docs contents change.
for (const entry of await readdir(destination)) {
  await rm(join(destination, entry), { recursive: true, force: true });
}
await cp(output, destination, { recursive: true });
// Next's static segment requests use dotted filenames. GitHub Pages cannot
// rewrite these requests to the nested segment files emitted by this build.
// Keep the originals and expose equivalent files at the requested URLs.
async function addSegmentAliases(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) {
      await addSegmentAliases(file);
      continue;
    }
    const path = relative(destination, file).replaceAll("\\", "/");
    const marker = path.indexOf("__next.");
    if (marker === -1 || !path.endsWith(".txt")) continue;
    const segmentPath = path.slice(marker);
    if (!segmentPath.includes("/")) continue;
    const alias = path.slice(0, marker) + segmentPath.replaceAll("/", ".");
    await cp(file, join(destination, alias));
  }
}
await addSegmentAliases(destination);
// Preserve the original nonprofit template's public .html links.
const legacyPages = {
  "about.html": "about",
  "causes.html": "work",
  "service.html": "work",
  "team.html": "about",
  "event.html": "blog",
  "blog.html": "blog",
  "single.html": "blog",
  "contact.html": "contact",
  "donate.html": "donate",
  "volunteer.html": "volunteer",
};
for (const [name, page] of Object.entries(legacyPages)) {
  await writeFile(
    join(destination, name),
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Spira Giving Colorado — page moved</title><link rel="canonical" href="https://spiragiving.dev/${page}/"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0;url=/${page}/"></head><body><p>This page has moved. <a href="/${page}/">Visit Spira Giving Colorado</a>.</p></body></html>`,
  );
}
await writeFile(new URL("../../docs/.nojekyll", import.meta.url), "");
await writeFile(
  new URL("../../docs/CNAME", import.meta.url),
  "spiragiving.dev\n",
);
console.log("Static export copied to docs for GitHub Pages.");
