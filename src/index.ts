import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { ContentDirector } from "./content/ContentDirector";
import { createCliDemoOptions } from "./demo/builderDemoCatalog";

type DemoOption = {
  key: string;
  label: string;
  run: () => unknown;
};

const director = new ContentDirector();
const demos: DemoOption[] = createCliDemoOptions(director);

function printHeader(): void {
  console.log("\nTypeScript Design Patterns Playground");
  console.log("Pattern: Builder\n");
}

function printMenu(): void {
  for (const demo of demos) {
    console.log(`${demo.key}. ${demo.label}`);
  }

  console.log("q. Quit\n");
}

function printResult(result: unknown): void {
  console.log("\nResult:");
  console.dir(result, { depth: null, colors: true });
  console.log();
}

async function main(): Promise<void> {
  if (!input.isTTY || !output.isTTY) {
    printHeader();
    printMenu();
    console.log("Run `npm run dev` in a terminal to use the interactive menu.");
    return;
  }

  const rl = createInterface({ input, output });

  try {
    while (true) {
      printHeader();
      printMenu();

      const answer = (await rl.question("Choose a demo: "))
        .trim()
        .toLowerCase();

      if (answer === "q") {
        console.log("\nGoodbye.");
        break;
      }

      const selectedDemo = demos.find((demo) => demo.key === answer);

      if (!selectedDemo) {
        console.log("\nUnknown option. Try again.\n");
        continue;
      }

      try {
        const result = selectedDemo.run();
        printResult(result);
      } catch (error) {
        console.log("\nError:");
        console.error(error instanceof Error ? error.message : error);
        console.log();
      }

      await rl.question("Press Enter to continue...");
      console.clear();
    }
  } finally {
    rl.close();
  }
}

void main();
