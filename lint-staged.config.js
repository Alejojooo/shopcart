export default {
  "*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}": ["oxlint --fix", "prettier --write"],
  "!(*.{js,jsx,mjs,cjs,ts,tsx,mts,cts})": "prettier --write --ignore-unknown",
};
