# Fast JSON Viewer

Fast JSON Viewer is a JSON tree-based viewer that is inspired by Chrome DevTools' Object Preview and object property tree. From [investigation](benchmarks/browser-json-parse-baseline.js), browser took around ~100ms to both parse & stringify 19MB of JSON. It means parsing large JSON is usually not the bottleneck; rendering too many nodes into the DOM is.

| Phase | Time |
| --- | ---: |
| Headers | 458.6 ms |
| Body download + decode | 238.1 ms |
| `JSON.parse` | 45.5 ms |
| `JSON.stringify` pretty | 73.7 ms |

## Target

This project is focused on making large JSON files inspectable in the browser with minimal CPU cost. Fast JSON Viewer targets developers, support engineers, data engineers, API debuggers, and anyone who needs to quickly inspect large JSON payloads on their own machine. The primary target is JSON files that are too large for typical JSON viewers to render comfortably. The app should make these files usable by rendering a tree view lazily and letting users inspect nested objects without paying the cost of rendering the entire document.

## Out of Scope

❌ A general-purpose text editor.<br>
❌ Full-document syntax highlighting.<br>
❌ Eager rendering of every JSON node.<br>
❌ Formatting or rewriting the original file.

## Feature Direction

Product development should focus on making large valid JSON pleasant and reliable:

- Faster first paint after parsing.
- Better row virtualization for very large expanded surfaces.
- More precise performance instrumentation.
- Better keyboard navigation.
- Free selection and copying of formatted JSON text rendered on screen, excluding UI-only metadata such as computed property or item counts.
- Better search behavior with progress and cancellation.
- Copy path, copy key, copy value, and copy subtree actions.
- Expand/collapse all under a selected node with bounded work.
- More robust object and array previews.
