
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/masakazu/Development/Project/OnsenIkitai/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/masakazu/Development/Project/OnsenIkitai/src/pages/index.js"))
}

