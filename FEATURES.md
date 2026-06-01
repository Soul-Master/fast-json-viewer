# Feature List

Fast JSON Viewer helps users open and inspect large JSON files in the browser without freezing the page or rendering more data than needed.

## Status Legend

✅ Supported / fully implemented feature<br>
🚧 Ongoing / incomplete feature<br>
❌ Not supported<br>

## Current Features

### File Input

✅ Open local `.json` files with the file picker.<br>
✅ Drag and drop a JSON file into the viewer.<br>

### Loading and Feedback

✅ Load and parse large valid JSON files quickly using browser-native parsing.<br>
✅ Show clear errors when a file cannot be parsed as JSON.<br>
✅ Show useful file details such as file name and file size.<br>

### Large-File Tree Viewing

✅ View JSON as an expandable object and array tree.<br>
✅ Start with a compact view instead of showing the entire file at once.<br>
✅ Expand and collapse sections on demand.<br>
✅ Keep expanded level headers sticky in a stacked header area while scrolling nested data, then release them after their expanded section is passed and restore them when scrolling back up.<br>
✅ Show compact previews for objects, arrays, strings, booleans, numbers, and null values.<br>
✅ Shorten very long text and previews so the interface stays readable.<br>
✅ Limit how many child rows appear at once to keep very large sections responsive.<br>

### Tree Controls

✅ Reset the tree back to the first-level view.<br>
✅ Expand one additional level from the root.<br>
✅ Select rows while inspecting data.<br>
✅ Use dense, stable rows suited for developer and data-inspection workflows.<br>

### Search

✅ Search for the first matching key or value.<br>
✅ Keep searches bounded so very large files do not freeze the page.<br>
✅ Open the tree path to the first match when one is found.<br>
✅ Explain when a search stops because no match was found or the search limit was reached.<br>

### Performance Visibility

✅ Show file size, visible row count, and time spent reading, parsing, and rendering.<br>
✅ Make expensive or capped work visible through status text.<br>

## Planned Features

### Rendering and Responsiveness

🚧 Faster first view after opening a file.<br>
🚧 Smoother viewing when many rows are expanded.<br>
🚧 More consistent responsiveness while opening large sections.<br>

### Search Improvements

🚧 Search progress for large searches.<br>
🚧 Cancel button for long-running searches.<br>
🚧 Navigation between multiple search results.<br>

### Navigation and Interaction

🚧 Free selection and copying of formatted JSON text that is rendered on screen, excluding UI-only metadata such as computed property or item counts.<br>
🚧 Keyboard navigation for moving between rows and expanding or collapsing sections.<br>
🚧 Copy actions for path, key, value, and subtree.<br>
🚧 Bounded expand/collapse-all actions under a selected section.<br>
🚧 Clearer selected-row context and path visibility.<br>

### Inspection Quality

🚧 Better previews for large and mixed-shape objects and arrays.<br>
🚧 Clearer messages when limits or caps affect what is shown.<br>
🚧 More detailed timing for important user actions.<br>

## Future Expansion Ideas

These may be considered later, but they are not currently supported:

- Broken or partial JSON support.
- JSON with comments.
- Streaming or progressively loaded JSON files.
- Data languages beyond strict JSON.
- Other data formats after the strict JSON experience is strong.
