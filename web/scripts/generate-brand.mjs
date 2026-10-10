import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import sharp from "sharp";

const publicDirectory = new URL("../public/", import.meta.url);
const brand = JSON.parse(
  await readFile(new URL("../lib/brand.json", import.meta.url), "utf8"),
);
function flower(color, centerColor) {
  return (
    Array.from(
      { length: brand.petals },
      (_, index) =>
        `<ellipse cx="${brand.center}" cy="${brand.petalY}" rx="${brand.petalRadiusX}" ry="${brand.petalRadiusY}" transform="rotate(${(index * 360) / brand.petals} ${brand.center} ${brand.center})" fill="${color}"/>`,
    ).join("") +
    `<circle cx="${brand.center}" cy="${brand.center}" r="${brand.centerRadius}" fill="${centerColor}"/>`
  );
}
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112"><title>SpiraGiving Colorado flower</title><rect width="112" height="112" rx="22" fill="${brand.paper}"/><g transform="translate(6 6)">${flower(brand.flower, brand.paper)}</g></svg>`;
const revision = createHash("sha256").update(icon).digest("hex").slice(0, 10);
const filename = `spira-bloom-${revision}`;
for (const name of [
  "favicon.svg",
  "app-icon.svg",
  "brand-icon.svg",
  `${filename}.svg`,
]) {
  await writeFile(new URL(name, publicDirectory), icon);
}
const png = async (size) =>
  sharp(Buffer.from(icon)).resize(size, size).png().toBuffer();
const icon32 = await png(32);
const apple180 = await png(180);
await writeFile(new URL("favicon.png", publicDirectory), icon32);
await writeFile(new URL(`${filename}-32.png`, publicDirectory), icon32);
await writeFile(new URL("apple-touch-icon.png", publicDirectory), apple180);
await writeFile(new URL(`${filename}-180.png`, publicDirectory), apple180);
await writeFile(new URL("app-icon.png", publicDirectory), await png(512));

// ICO supports embedded PNG images; supply common sizes for browser fallbacks.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const start = 6 + index * 16;
  header[start] = sizes[index];
  header[start + 1] = sizes[index];
  header.writeUInt16LE(1, start + 4);
  header.writeUInt16LE(32, start + 6);
  header.writeUInt32LE(image.length, start + 8);
  header.writeUInt32LE(offset, start + 12);
  offset += image.length;
});
const ico = Buffer.concat([header, ...images]);
await writeFile(new URL("favicon.ico", publicDirectory), ico);
await writeFile(new URL(`${filename}.ico`, publicDirectory), ico);

function wordmark(textColor, petalColor, backgroundColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 84"><title>SpiraGiving Colorado</title><g transform="translate(5 11) scale(.62)">${flower(petalColor, backgroundColor)}</g><text x="84" y="43" fill="${textColor}" font-family="Inter,Arial,sans-serif" font-size="34" letter-spacing="-2"><tspan font-weight="600">Spira</tspan><tspan font-weight="400">Giving</tspan></text><text x="85" y="66" fill="${textColor}" font-family="Inter,Arial,sans-serif" font-size="13" letter-spacing="3">COLORADO</text></svg>`;
}
const logos = {
  "logo-dark.svg": wordmark(brand.ink, brand.flower, brand.paper),
  "logo-light.svg": wordmark(brand.paper, brand.lightFlower, brand.ink),
  "logo-monochrome.svg": wordmark(brand.ink, brand.ink, brand.paper),
};
await mkdir(new URL("logos/", publicDirectory), { recursive: true });
for (const [name, content] of Object.entries(logos)) {
  await writeFile(new URL(name, publicDirectory), content);
  await writeFile(new URL(`logos/${name}`, publicDirectory), content);
}
await writeFile(
  new URL("../lib/brand-assets.json", import.meta.url),
  JSON.stringify(
    {
      svg: `/${filename}.svg`,
      png: `/${filename}-32.png`,
      ico: `/${filename}.ico`,
      apple: `/${filename}-180.png`,
    },
    null,
    2,
  ) + "\n",
);
console.log(`Generated consistent flower brand assets (${revision}).`);
