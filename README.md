# Fast JSON Viewer

Fast JSON Viewer is a browser-based JSON tree viewer inspired by Chrome DevTools' `RemoteObjectPreviewFormatter` and object property tree. It is built around one measured idea: parsing large JSON is usually not the bottleneck; rendering too many nodes into the DOM is.

In [an initial Chrome test](benchmarks/browser-json-parse-baseline.js) using MDN Browser Compat Data's 19 MB [`data.json`](https://unpkg.com/@mdn/browser-compat-data@8.0.1/data.json), `JSON.parse` took 45.5 ms and pretty `JSON.stringify` took 73.7 ms, while typical JSON viewers slow down because they eagerly render the full object graph.

Initial benchmark:

| Phase | Time |
| --- | ---: |
| Headers | 458.6 ms |
| Body download + decode | 238.1 ms |
| `JSON.parse` | 45.5 ms |
| `JSON.stringify` pretty | 73.7 ms |

## Project Focus

This project is focused on making large JSON files inspectable in the browser with minimal CPU cost.

Key priorities:

- Open large JSON files quickly, especially files larger than 10 MB.
- Keep first render nearly instant by rendering only the nodes necessary for the active user preference.
- Treat DOM rendering as the main bottleneck and avoid rendering hidden nodes.
- Make every expensive operation visible through performance data.
- Keep the interaction model close to a fast tree-aware text inspector.
- Use browser-native parsing, file reading, DOM, and performance APIs wherever they are the fastest practical choice.
- Build a professional developer-tool interface with dense rows, clear tree controls, and minimal visual overhead.

## Target

Fast JSON Viewer targets developers, support engineers, data engineers, API debuggers, and anyone who needs to quickly inspect large JSON payloads on their own machine.

The primary target is JSON files that are too large for typical JSON viewers to render comfortably. The app should make these files usable by rendering a tree view lazily, showing performance data, and letting users inspect nested objects without paying the cost of rendering the entire document.

Target workflows:

- Open a large local JSON file.
- See root-level shape immediately.
- Expand only the objects or arrays that matter.
- Search bounded portions of the data without freezing the page.
- Copy useful paths, keys, values, or subtrees as the tool matures.
- Understand the CPU cost of read, parse, render, and search operations.

## Out of Scope

The scope is intentionally narrow.

Out of scope:

- A general-purpose text editor.
- Full-document syntax highlighting.
- Eager rendering of every JSON node.
- Cloud upload, storage, sync, or collaboration.
- Schema validation as a primary workflow.
- JSON editing and save-back behavior.
- Formatting or rewriting the original file.
- Multi-format support beyond valid JSON.
- Rich charts, dashboards, or data visualization layers.
- Features that require unbounded full-tree traversal during common interactions.

Some of these may become useful later, but they should not compete with the core large-file inspection path.

## Core Capabilities

The viewer supports:

- Opening a local `.json` file through a file picker.
- Dragging and dropping a JSON file into the viewport.
- Reading file text with the browser `File` API.
- Parsing with native `JSON.parse`.
- Rendering the root and expanded descendants as a nested tree.
- Expanding and collapsing object and array nodes.
- Resetting to first-level rendering.
- Expanding one additional level from the root.
- Searching for the first matching key or primitive value with a hard visit cap.
- Displaying read, parse, render, file size, and row count status.

The implementation should favor direct DOM creation through APIs such as `document.createElement`, `DocumentFragment`, and `replaceChildren` when that keeps rendering simple and fast.

## Core Rendering Model

The main UI should feel like a very plain, very fast text editor with tree structure.

Conceptually:

1. JSON is parsed once into a native JavaScript value.
2. Expanded paths are tracked separately.
3. Rendering walks only the expanded tree surface.
4. Each visible item becomes one row.
5. Container rows show a preview plus metadata such as child count.
6. Primitive rows show compact value text.
7. Expanding a node rerenders the visible tree from current expansion state.

Path identity can be represented as a serialized path array, such as `JSON.stringify(path)`, where `path` is an array of property names and array indexes. If path serialization becomes a measured bottleneck, replace it with a cheaper internal representation.

## Performance Priorities

Optimize in this order:

1. Avoid DOM node creation for data the user has not expanded.
2. Keep render work proportional to visible rows, not total JSON nodes.
3. Keep search and global operations bounded, cancellable, or visibly metered.
4. Prefer incremental or virtualized rendering when visible row counts grow.
5. Measure before adding complexity.

Important limits:

- `MAX_ROWS_PER_LEVEL` caps child rows rendered for each expanded object or array level.
- `MAX_SEARCH_VISITS` caps search traversal.
- String and child previews are truncated.

Future work should keep limits explicit and visible to the user. Silent full-tree work is against the design of this project.

## UI Direction

The UI should be professional-grade and optimized for repeated developer use:

- Dense, readable rows.
- Clear disclosure controls.
- Strong primitive value scanning.
- Stable row height.
- Minimal layout shift.
- Useful status and performance text.
- Keyboard-friendly interactions over time.
- No decorative UI that costs performance or reduces clarity.

Avoid large hero sections, ornamental cards, animated decoration, and UI copy that explains obvious controls. This should feel closer to a DevTools panel than a landing page.

## Feature Direction

Product development should focus on making large valid JSON pleasant and reliable:

- Faster first paint after parsing.
- Better row virtualization for very large expanded surfaces.
- More precise performance instrumentation.
- Better keyboard navigation.
- Better search behavior with progress and cancellation.
- Copy path, copy key, copy value, and copy subtree actions.
- Expand/collapse all under a selected node with bounded work.
- More robust object and array previews.

Future expansion areas:

- Broken or partial JSON support.
- JSON with comments.
- Streaming JSON parsing for very large or incrementally loaded files.
- Language-parser support for formats beyond strict JSON.
- Other data languages and formats.
