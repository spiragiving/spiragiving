import { cp, mkdir, writeFile, rm, realpath, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, dirname, basename, join, relative } from "node:path";
const output = fileURLToPath(new URL("../out/", import.meta.url));
const destination = fileURLToPath(new URL("../../docs/", import.meta.url));
const repository = await realpath(fileURLToPath(new URL("../../", import.meta.url)));
if (dirname(resolve(destination)) !== repository || basename(resolve(destination)) !== "docs") {
  throw new Error("Refusing to replace an export outside the repository docs directory.");
}
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
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
await writeFile(new URL("../../docs/.nojekyll", import.meta.url), "");
await writeFile(
  new URL("../../docs/CNAME", import.meta.url),
  "spiragiving.dev\n",
);
console.log("Static export copied to docs for GitHub Pages.");
