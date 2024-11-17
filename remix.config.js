/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverPlatform: "node",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  tailwind: true,
};
