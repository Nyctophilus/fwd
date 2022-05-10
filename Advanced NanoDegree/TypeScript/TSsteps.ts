// Move index.js to src/index.ts
// Initialize npm and add your details
// npm init -y
// Add typescript, ts-node and @types/node definitions to dev dependencies.
// npm i --save-dev typescript
// npm i --save-dev ts-node
// npm i --save-dev @types/node
// Add the default TypeScript configuration file.
// npx tsc --init
// Add a build script to your package.json file
// "build": "npx tsc"
// Check the configuration file tsconfig.json and apply the following settings:

// "target": "es5",
// "lib": ["ES6"],
// "outDir": "./build",
// "strict": true,
// "noImplicitAny": true
// and exclude checking of node modules by adding an "exclude" parameter after the "compilerOptions"

// "exclude": ["node_modules"]
// Run the build script

// npm run build
// Run the completed index file
// node build/.
