# AGENTS.md

Instructions for LLM agents working on this repo.

## Product Intent

Fast JSON Viewer is a performance-first browser JSON inspector. Preserve the central premise: parsing large JSON with native `JSON.parse` is usually fast enough; rendering the full object graph into the DOM is the real bottleneck.

The target use case is opening real-world JSON files larger than 10 MB in a web UI without freezing the browser. This project should therefore optimize primarily for CPU time and UI responsiveness. Memory usage is a secondary concern at this stage.

This repo is still an early POC. Favor changes that clarify or validate the performance model over broad architecture work.

## Key Focus

- Treat this as a large-file JSON inspection tool, not a general-purpose code editor.
- Optimize for CPU time and interaction responsiveness first.
- Memory usage is secondary for now unless a change creates obvious waste.
- Keep behavior local-first. User JSON should stay in the browser.
- Render only the visible or intentionally expanded portion of the tree.
- Make expensive work explicit through timing, row counts, caps, progress, or status text.
- Preserve a professional developer-tool feel: dense, practical, predictable, and fast.

## Target

Build for users who need to inspect large local JSON payloads quickly: developers, support engineers, data engineers, API debuggers, and similar technical users.

The main target is valid JSON that is large enough for normal browser-based viewers to struggle with because they render too much DOM. The core path is: open local file, parse with native JSON APIs, render the root/visible tree quickly, then let the user expand only what they need.

## Out of Scope

Keep these out of early work unless the user explicitly asks to reprioritize:

- General-purpose text editing.
- Full-document syntax highlighting.
- Formatting or rewriting the original file.
- Cloud upload, storage, sync, or collaboration.
- Schema validation as a primary product goal.
- Dashboards, charts, or rich data visualization.
- Non-JSON formats before the valid JSON path is strong.
- Streaming JSON or language-parser work before the valid JSON path is strong.
- Any common interaction that requires unbounded full-tree traversal.

## Implementation Guidance

- Prefer lazy rendering, lazy traversal, and lazy computation.
- Avoid eagerly walking or materializing the entire object graph for common interactions.
- Prefer native browser APIs and plain JavaScript when they are simpler and faster.
- Keep row rendering simple and allocation-conscious.
- Use direct DOM APIs when they fit the problem: `document.createElement`, `DocumentFragment`, and `replaceChildren`.
- Use `performance.now()` around read, parse, render, search, and major interaction paths.
- If a feature can be computed on expansion, compute it on expansion.
- If a feature can be computed for visible rows only, compute it for visible rows only.
- Keep limits explicit and user-visible when work is capped.

## Avoid

- Do not introduce a frontend framework unless there is a measured reason.
- Do not eagerly syntax-highlight the entire file.
- Do not build a full text editor before the tree viewer is fast.
- Do not perform unbounded recursive traversal in response to common UI actions.
- Do not add expensive observers, animations, or layout effects to rows.
- Do not add decorative UI that competes with performance or clarity.
- Do not hide full-tree costs behind simple-looking controls.
