// Initial browser performance baseline for Fast JSON Viewer.
// Run this in Chrome DevTools Console or as a DevTools Snippet.
// Tested source file:
// https://unpkg.com/@mdn/browser-compat-data@8.0.1/data.json

const url = 'https://unpkg.com/@mdn/browser-compat-data@8.0.1/data.json?' + Date.now();

performance.mark("fetch:start");
const res = await fetch(url);
performance.mark("headers:received");

const text = await res.text();
performance.mark("body:received");

const data = JSON.parse(text);
performance.mark("json:parsed");

const pretty = JSON.stringify(data, null, 2);
performance.mark("json:stringified");

console.table([
  {
    phase: "headers",
    ms: performance.measure("headers", "fetch:start", "headers:received").duration,
  },
  {
    phase: "body download + decode",
    ms: performance.measure("body", "headers:received", "body:received").duration,
  },
  {
    phase: "JSON.parse",
    ms: performance.measure("parse", "body:received", "json:parsed").duration,
  },
  {
    phase: "JSON.stringify pretty",
    ms: performance.measure("stringify", "json:parsed", "json:stringified").duration,
  },
]);
