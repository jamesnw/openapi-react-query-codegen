#!/usr/bin/env node
import { generate } from "../src/generate";
import { Command } from "commander";
import packageJson from "../package.json";

export type CLIOptions = {
  outputDir: string;
  path: string;
};

const program = new Command();

program
  .name('openapi-rq')
  .version(packageJson.version)
  .description("Generate React Query code based on OpenAPI")
  .requiredOption("-p, --path <path>", "Path to OpenAPI file")
  .option(
    "-o, --output-dir [directory]",
    "Directory to output the generated package",
    "openapi"
  )
  .parse();

const options = program.opts<CLIOptions>();

console.log(`Generating React Query code using OpenApi file ${options.path}`);
generate(options);