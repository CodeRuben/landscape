import { globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  globalIgnores([".next/**", "node_modules/**", "backup-*/**", "khwhite-rebuild-source/**"]),
  ...nextVitals,
  ...nextTypescript,
];

export default eslintConfig;
