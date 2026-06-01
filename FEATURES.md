# Feature List

Fast JSON Viewer helps users open and inspect large JSON files in the browser without freezing the page or rendering more data than needed.

## Status Legend

- ✅ Supported / fully implemented feature
- 🚧 Ongoing / incomplete feature
- ❌ Not supported

## Current Features

### File Input

- ✅ Open local `.json` files with the file picker.
- ✅ Drag and drop a JSON file into the viewer.

### Loading and Feedback

- ✅ Load and parse large valid JSON files quickly using browser-native parsing.
- ✅ Show clear errors when a file cannot be parsed as JSON.
- ✅ Show useful file details such as file name and file size.

### Large-File Tree Viewing

- ✅ View JSON as an expandable object and array tree.
- ✅ Start with a compact view instead of showing the entire file at once.
- ✅ Expand and collapse sections on demand.
- ✅ Show compact previews for objects, arrays, strings, booleans, numbers, and null values.
- ✅ Shorten very long text and previews so the interface stays readable.
- ✅ Limit how many child rows appear at once to keep very large sections responsive.

### Tree Controls

- ✅ Reset the tree back to the first-level view.
- ✅ Expand one additional level from the root.
- ✅ Select rows while inspecting data.
- ✅ Use dense, stable rows suited for developer and data-inspection workflows.

### Search

- ✅ Search for the first matching key or value.
- ✅ Keep searches bounded so very large files do not freeze the page.
- ✅ Open the tree path to the first match when one is found.
- ✅ Explain when a search stops because no match was found or the search limit was reached.

### Performance Visibility

- ✅ Show file size, visible row count, and time spent reading, parsing, and rendering.
- ✅ Make expensive or capped work visible through status text.

## Planned Features

### Rendering and Responsiveness

- 🚧 Faster first view after opening a file.
- 🚧 Smoother viewing when many rows are expanded.
- 🚧 More consistent responsiveness while opening large sections.

### Search Improvements

- 🚧 Search progress for large searches.
- 🚧 Cancel button for long-running searches.
- 🚧 Navigation between multiple search results.

### Navigation and Interaction

- 🚧 Keyboard navigation for moving between rows and expanding or collapsing sections.
- 🚧 Copy actions for path, key, value, and subtree.
- 🚧 Bounded expand/collapse-all actions under a selected section.
- 🚧 Clearer selected-row context and path visibility.

### Inspection Quality

- 🚧 Better previews for large and mixed-shape objects and arrays.
- 🚧 Clearer messages when limits or caps affect what is shown.
- 🚧 More detailed timing for important user actions.

## Future Expansion Ideas

These may be considered later, but they are not currently supported:

- Broken or partial JSON support.
- JSON with comments.
- Streaming or progressively loaded JSON files.
- Data languages beyond strict JSON.
- Other data formats after the strict JSON experience is strong.

## Not Supported

- ❌ General-purpose text editing.
- ❌ Full-document syntax highlighting.
- ❌ Formatting or rewriting the original file.
- ❌ JSON editing and save-back behavior.
- ❌ Cloud upload, sync, storage, or collaboration.
- ❌ Schema validation as the primary workflow.
- ❌ Dashboards, charts, and rich visualization layers.
- ❌ Actions that must scan the entire file without visible limits or progress.
