import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { createBuilderPatternData } from "../demo/builderDemoCatalog";

const outputPath = resolve(process.cwd(), "ui", "builder-demo-data.js");
const patternData = createBuilderPatternData();

const fileContents = `${[
  "// Auto-generated from src/demo/builderDemoCatalog.ts",
  `window.builderPatternData = ${JSON.stringify(patternData, null, 2)};`,
].join("\n")}
`;

writeFileSync(outputPath, fileContents, "utf8");

console.log(`Updated ${outputPath}`);
