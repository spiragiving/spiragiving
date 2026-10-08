import { cp, mkdir, writeFile, rm, realpath } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, dirname, basename } from "node:path";
const output = fileURLToPath(new URL("../out/", import.meta.url));
const destination = fileURLToPath(new URL("../../docs/", import.meta.url));
const repository = await realpath(fileURLToPath(new URL("../../", import.meta.url)));
if (dirname(resolve(destination)) !== repository || basename(resolve(destination)) !== "docs") {
  throw new Error("Refusing to replace an export outside the repository docs directory.");
}
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(output, destination, { recursive: true });
await writeFile(new URL("../../docs/.nojekyll", import.meta.url), "");
await writeFile(
  new URL("../../docs/CNAME", import.meta.url),
  "spiragiving.dev\n",
);
console.log("Static export copied to docs for GitHub Pages.");
