var section_working_on_deki =
[
    [ "Memory", "guide-memory.html", [
      [ "The rule", "guide-memory.html#guide-memory-the-rule", null ],
      [ "<span class=\"tt\">Deki::Buffer&lt;T&gt;</span> - use this", "guide-memory.html#guide-memory-dekibuffert---use-this", [
        [ "Why not an arena", "guide-memory.html#guide-memory-why-not-an-arena", null ]
      ] ],
      [ "Regions - you choose, every time", "guide-memory.html#guide-memory-regions---you-choose-every-time", [
        [ "A region is a name, so packages can add their own", "guide-memory.html#guide-memory-a-region-is-a-name-so-packages-can-add-their-own", null ],
        [ "Serving one is the device's job", "guide-memory.html#guide-memory-serving-one-is-the-devices-job", null ],
        [ "The region name is the capability name", "guide-memory.html#guide-memory-the-region-name-is-the-capability-name", null ],
        [ "Placement resolves once. There is no fallback.", "guide-memory.html#guide-memory-placement-resolves-once-there-is-no-fallback", null ]
      ] ],
      [ "The rest of the API", "guide-memory.html#guide-memory-the-rest-of-the-api", [
        [ "Finding out where the memory went", "guide-memory.html#guide-memory-finding-out-where-the-memory-went", null ],
        [ "What takes it: call sites, and the Memory panel", "guide-memory.html#guide-memory-what-takes-it-call-sites-and-the-memory-panel", null ],
        [ "Changing scenes", "guide-memory.html#guide-memory-changing-scenes", null ]
      ] ],
      [ "<span class=\"tt\">AllocContext</span> - the label writes itself", "guide-memory.html#guide-memory-alloccontext---the-label-writes-itself", [
        [ "Stripping it", "guide-memory.html#guide-memory-stripping-it", null ]
      ] ],
      [ "<span class=\"tt\">Deki::Vector&lt;T&gt;</span> - when the count changes at runtime", "guide-memory.html#guide-memory-dekivectort---when-the-count-changes-at-runtime", [
        [ "<span class=\"tt\">std::vector</span>, <span class=\"tt\">std::string</span> and plain <span class=\"tt\">new</span>", "guide-memory.html#guide-memory-stdvector-stdstring-and-plain-new", null ]
      ] ],
      [ "Platform layer: <span class=\"tt\">IMemoryProvider</span>", "guide-memory.html#guide-memory-platform-layer-imemoryprovider", null ],
      [ "The lint", "guide-memory.html#guide-memory-the-lint", null ]
    ] ],
    [ "Asset System", "guide-asset-system.html", [
      [ "AssetRef&lt;T&gt; Template", "guide-asset-system.html#guide-asset-system-assetreft-template", [
        [ "Lazy Loading", "guide-asset-system.html#guide-asset-system-lazy-loading", null ]
      ] ],
      [ "Dual-Field Pattern (guid vs source)", "guide-asset-system.html#guide-asset-system-dual-field-pattern-guid-vs-source", [
        [ "Rule: <span class=\"tt\">guid</span> always = \"the file to load from disk\"", "guide-asset-system.html#guide-asset-system-rule-guid-always--the-file-to-load-from-disk", null ],
        [ "Why sprites and fonts differ", "guide-asset-system.html#guide-asset-system-why-sprites-and-fonts-differ", null ],
        [ "Generated code pattern", "guide-asset-system.html#guide-asset-system-generated-code-pattern", null ]
      ] ],
      [ "Deterministic GUID Generation", "guide-asset-system.html#guide-asset-system-deterministic-guid-generation", [
        [ "Seed Formats (NEVER CHANGE THESE)", "guide-asset-system.html#guide-asset-system-seed-formats-never-change-these", null ],
        [ "Where deterministic GUIDs are generated", "guide-asset-system.html#guide-asset-system-where-deterministic-guids-are-generated", null ]
      ] ],
      [ "Asset Lookup Table (asset_table.bin)", "guide-asset-system.html#guide-asset-system-asset-lookup-table-asset_tablebin", [
        [ "Hash function (FNV-1a 32-bit)", "guide-asset-system.html#guide-asset-system-hash-function-fnv-1a-32-bit", null ],
        [ "Key types in the table", "guide-asset-system.html#guide-asset-system-key-types-in-the-table", null ],
        [ "Two versions of the table", "guide-asset-system.html#guide-asset-system-two-versions-of-the-table", null ]
      ] ],
      [ "Asset Loading Flow", "guide-asset-system.html#guide-asset-system-asset-loading-flow", null ],
      [ "Key Files", "guide-asset-system.html#guide-asset-system-key-files", null ]
    ] ],
    [ "Sprite System", "guide-sprite-system.html", [
      [ "Overview", "guide-sprite-system.html#guide-sprite-system-overview", null ],
      [ "GUID Generation", "guide-sprite-system.html#guide-sprite-system-guid-generation", null ],
      [ ".tex File Format (2DTX)", "guide-sprite-system.html#guide-sprite-system-tex-file-format-2dtx", [
        [ "Sprite Chunk (type 1)", "guide-sprite-system.html#guide-sprite-system-sprite-chunk-type-1", null ],
        [ "FrameList Chunk (type 2)", "guide-sprite-system.html#guide-sprite-system-framelist-chunk-type-2", null ],
        [ "SourceSize Chunk (type 4)", "guide-sprite-system.html#guide-sprite-system-sourcesize-chunk-type-4", null ]
      ] ],
      [ ".data Sidecar File", "guide-sprite-system.html#guide-sprite-system-data-sidecar-file", null ],
      [ "Import Pipeline: TextureImporter", "guide-sprite-system.html#guide-sprite-system-import-pipeline-textureimporter", [
        [ "Two-Pass Import", "guide-sprite-system.html#guide-sprite-system-two-pass-import", null ],
        [ "SubAsset Generation", "guide-sprite-system.html#guide-sprite-system-subasset-generation", null ],
        [ "Frame Data Registry", "guide-sprite-system.html#guide-sprite-system-frame-data-registry", null ]
      ] ],
      [ "AssetRef Fields for Sprites", "guide-sprite-system.html#guide-sprite-system-assetref-fields-for-sprites", [
        [ "Why guid = parent, source = frame", "guide-sprite-system.html#guide-sprite-system-why-guid--parent-source--frame", null ],
        [ "For plain sprites (no frames)", "guide-sprite-system.html#guide-sprite-system-for-plain-sprites-no-frames", null ]
      ] ],
      [ "Frame Resolution Flow", "guide-sprite-system.html#guide-sprite-system-frame-resolution-flow", [
        [ "Generated ResolveObjectRefs", "guide-sprite-system.html#guide-sprite-system-generated-resolveobjectrefs", null ],
        [ "FindFrame", "guide-sprite-system.html#guide-sprite-system-findframe", null ]
      ] ],
      [ "Assignment in Editor", "guide-sprite-system.html#guide-sprite-system-assignment-in-editor", null ],
      [ "GUID Registration (Editor)", "guide-sprite-system.html#guide-sprite-system-guid-registration-editor", null ],
      [ "Export Pipeline", "guide-sprite-system.html#guide-sprite-system-export-pipeline", null ],
      [ "Comparison: Fonts vs Sprites", "guide-sprite-system.html#guide-sprite-system-comparison-fonts-vs-sprites", null ],
      [ "Key Files", "guide-sprite-system.html#guide-sprite-system-key-files", null ]
    ] ],
    [ "Font System", "guide-font-system.html", [
      [ "Overview", "guide-font-system.html#guide-font-system-overview", null ],
      [ "GUID Generation", "guide-font-system.html#guide-font-system-guid-generation", null ],
      [ ".data Sidecar File", "guide-font-system.html#guide-font-system-data-sidecar-file", null ],
      [ "Baking Authority: FontSyncHandler", "guide-font-system.html#guide-font-system-baking-authority-fontsynchandler", [
        [ "Who calls EnsureFontSizeBaked:", "guide-font-system.html#guide-font-system-who-calls-ensurefontsizebaked", null ],
        [ "Registration", "guide-font-system.html#guide-font-system-registration", null ]
      ] ],
      [ "AssetRef Fields for Fonts", "guide-font-system.html#guide-font-system-assetref-fields-for-fonts", [
        [ "How font.guid stays in sync", "guide-font-system.html#guide-font-system-how-fontguid-stays-in-sync", null ]
      ] ],
      [ "Preview Mode (Editor Only)", "guide-font-system.html#guide-font-system-preview-mode-editor-only", null ],
      [ "Export Pipeline", "guide-font-system.html#guide-font-system-export-pipeline", null ],
      [ "BitmapFont File Format (.dfont)", "guide-font-system.html#guide-font-system-bitmapfont-file-format-dfont", null ],
      [ "Key Files", "guide-font-system.html#guide-font-system-key-files", null ]
    ] ],
    [ "Hardware checklist", "guide-hardware-checklist.html", [
      [ "Before you start", "guide-hardware-checklist.html#guide-hardware-checklist-before-you-start", null ],
      [ "1. Build and flash", "guide-hardware-checklist.html#guide-hardware-checklist-1-build-and-flash", null ],
      [ "2. Every scene draws", "guide-hardware-checklist.html#guide-hardware-checklist-2-every-scene-draws", null ],
      [ "3. Frame time", "guide-hardware-checklist.html#guide-hardware-checklist-3-frame-time", null ],
      [ "4. Redrawing only what changed", "guide-hardware-checklist.html#guide-hardware-checklist-4-redrawing-only-what-changed", null ],
      [ "5. Input", "guide-hardware-checklist.html#guide-hardware-checklist-5-input", null ],
      [ "6. Storage", "guide-hardware-checklist.html#guide-hardware-checklist-6-storage", null ],
      [ "7. Radios and sensors", "guide-hardware-checklist.html#guide-hardware-checklist-7-radios-and-sensors", null ],
      [ "8. Record the numbers", "guide-hardware-checklist.html#guide-hardware-checklist-8-record-the-numbers", null ],
      [ "Past releases", "guide-hardware-checklist.html#guide-hardware-checklist-past-releases", null ]
    ] ],
    [ "Releasing", "guide-releasing.html", [
      [ "The promise to current users", "guide-releasing.html#guide-releasing-the-promise-to-current-users", null ],
      [ "1. Choose the version", "guide-releasing.html#guide-releasing-1-choose-the-version", null ],
      [ "2. Get every branch ready", "guide-releasing.html#guide-releasing-2-get-every-branch-ready", null ],
      [ "3. Check it", "guide-releasing.html#guide-releasing-3-check-it", null ],
      [ "4. Release, in this order", "guide-releasing.html#guide-releasing-4-release-in-this-order", [
        [ "4.1 Each repo's branch onto master", "guide-releasing.html#guide-releasing-41-each-repos-branch-onto-master", null ],
        [ "4.2 The engine", "guide-releasing.html#guide-releasing-42-the-engine", null ],
        [ "4.3 The editor", "guide-releasing.html#guide-releasing-43-the-editor", null ],
        [ "4.4 The packages", "guide-releasing.html#guide-releasing-44-the-packages", null ],
        [ "4.5 The registry", "guide-releasing.html#guide-releasing-45-the-registry", null ],
        [ "4.6 The demo", "guide-releasing.html#guide-releasing-46-the-demo", null ],
        [ "4.7 The docs and the site", "guide-releasing.html#guide-releasing-47-the-docs-and-the-site", null ],
        [ "4.8 Clean up", "guide-releasing.html#guide-releasing-48-clean-up", null ]
      ] ],
      [ "5. Right after", "guide-releasing.html#guide-releasing-5-right-after", null ],
      [ "If something is wrong", "guide-releasing.html#guide-releasing-if-something-is-wrong", null ]
    ] ]
];