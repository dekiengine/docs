/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Deki", "index.html", [
    [ "Guides", "index.html#guides", null ],
    [ "Packages", "index.html#packages", null ],
    [ "Engine core", "engine-core.html", [
      [ "Components", "engine-core.html#engine-components", null ],
      [ "Component reference", "engine-core.html#engine-component-reference", [
        [ "PlatformSetupComponent", "engine-core.html#engine-platformsetupcomponent", null ],
        [ "RendererComponent", "engine-core.html#engine-renderercomponent", null ],
        [ "ScreenAnchor", "engine-core.html#engine-screenanchor", null ],
        [ "SetupComponent", "engine-core.html#engine-setupcomponent", null ]
      ] ],
      [ "Project settings", "engine-core.html#engine-project-settings", [
        [ "Core settings", "engine-core.html#engine-core-settings", null ],
        [ "Units settings", "engine-core.html#engine-units-settings", null ]
      ] ]
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
      [ "4. Partial present", "guide-hardware-checklist.html#guide-hardware-checklist-4-partial-present", null ],
      [ "5. Input", "guide-hardware-checklist.html#guide-hardware-checklist-5-input", null ],
      [ "6. Storage", "guide-hardware-checklist.html#guide-hardware-checklist-6-storage", null ],
      [ "7. Radios and sensors", "guide-hardware-checklist.html#guide-hardware-checklist-7-radios-and-sensors", null ],
      [ "8. Record the numbers", "guide-hardware-checklist.html#guide-hardware-checklist-8-record-the-numbers", null ],
      [ "Past releases", "guide-hardware-checklist.html#guide-hardware-checklist-past-releases", null ]
    ] ],
    [ "Languages", "guide-localization.html", [
      [ "Translating a table", "guide-localization.html#guide-localization-translating-a-table", null ],
      [ "Showing text in code", "guide-localization.html#guide-localization-showing-text-in-code", null ],
      [ "A package's own names", "guide-localization.html#guide-localization-a-packages-own-names", null ],
      [ "Fonts", "guide-localization.html#guide-localization-fonts", null ]
    ] ],
    [ "Memory", "guide-memory.html", [
      [ "The rule", "guide-memory.html#guide-memory-the-rule", null ],
      [ "<span class=\"tt\">Deki::Buffer&lt;T&gt;</span> - use this", "guide-memory.html#guide-memory-dekibuffert---use-this", [
        [ "Why not an arena", "guide-memory.html#guide-memory-why-not-an-arena", null ]
      ] ],
      [ "Regions - you choose, every time", "guide-memory.html#guide-memory-regions---you-choose-every-time", [
        [ "A region is a name, so packages can add their own", "guide-memory.html#guide-memory-a-region-is-a-name-so-packages-can-add-their-own", null ],
        [ "Serving one is the board's job", "guide-memory.html#guide-memory-serving-one-is-the-boards-job", null ],
        [ "The region name is the capability name", "guide-memory.html#guide-memory-the-region-name-is-the-capability-name", null ],
        [ "Placement resolves once. There is no fallback.", "guide-memory.html#guide-memory-placement-resolves-once-there-is-no-fallback", null ]
      ] ],
      [ "The rest of the API", "guide-memory.html#guide-memory-the-rest-of-the-api", [
        [ "Finding out where the memory went", "guide-memory.html#guide-memory-finding-out-where-the-memory-went", null ]
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
    [ "Making it fast", "guide-performance.html", [
      [ "Start from a board", "guide-performance.html#guide-performance-start-from-a-board", null ],
      [ "What chooses itself", "guide-performance.html#guide-performance-what-chooses-itself", null ],
      [ "What a board sets", "guide-performance.html#guide-performance-what-a-board-sets", null ],
      [ "Project settings worth knowing", "guide-performance.html#guide-performance-project-settings-worth-knowing", null ],
      [ "Reading the numbers", "guide-performance.html#guide-performance-reading-the-numbers", null ]
    ] ],
    [ "Platforms", "guide-platforms.html", [
      [ "What a platform is", "guide-platforms.html#guide-platforms-what-a-platform-is", null ],
      [ "Where the assets go", "guide-platforms.html#guide-platforms-where-the-assets-go", null ],
      [ "Simulating a board", "guide-platforms.html#guide-platforms-simulating-a-board", null ],
      [ "Where platforms come from", "guide-platforms.html#guide-platforms-where-platforms-come-from", null ],
      [ "Shipping boards in a package", "guide-platforms.html#guide-platforms-shipping-boards-in-a-package", [
        [ "Features that need other packages", "guide-platforms.html#guide-platforms-features-that-need-other-packages", null ]
      ] ],
      [ "Adopting: the project gets a copy", "guide-platforms.html#guide-platforms-adopting-the-project-gets-a-copy", null ],
      [ "Origin: edit, update, restore", "guide-platforms.html#guide-platforms-origin-edit-update-restore", null ],
      [ "From the command line", "guide-platforms.html#guide-platforms-from-the-command-line", null ],
      [ "In the code", "guide-platforms.html#guide-platforms-in-the-code", null ]
    ] ],
    [ "Project layout", "guide-project-layout.html", [
      [ "Layout", "guide-project-layout.html#guide-project-layout-layout", null ],
      [ "Portability", "guide-project-layout.html#guide-project-layout-portability", null ],
      [ "Recovery", "guide-project-layout.html#guide-project-layout-recovery", null ],
      [ "Why shadow/ is a sibling of runtime/", "guide-project-layout.html#guide-project-layout-why-shadow-is-a-sibling-of-runtime", null ],
      [ "Structure version", "guide-project-layout.html#guide-project-layout-structure-version", null ]
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
    ] ],
    [ "Screens", "guide-screens.html", [
      [ "The camera", "guide-screens.html#guide-screens-the-camera", null ],
      [ "What each screen sees", "guide-screens.html#guide-screens-what-each-screen-sees", null ],
      [ "Pinning to the screen", "guide-screens.html#guide-screens-pinning-to-the-screen", null ],
      [ "Recipes", "guide-screens.html#guide-screens-recipes", null ],
      [ "Previewing", "guide-screens.html#guide-screens-previewing", null ],
      [ "Colour formats", "guide-screens.html#guide-screens-colour-formats", null ],
      [ "Size on the glass", "guide-screens.html#guide-screens-size-on-the-glass", null ],
      [ "On the device", "guide-screens.html#guide-screens-on-the-device", null ]
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
    [ "Units", "guide-units.html", [
      [ "The rule", "guide-units.html#guide-units-the-rule", null ],
      [ "What is stored", "guide-units.html#guide-units-what-is-stored", [
        [ "Why time has two conventions", "guide-units.html#guide-units-why-time-has-two-conventions", null ]
      ] ],
      [ "Datasheets do not use SI, and that is fine", "guide-units.html#guide-units-datasheets-do-not-use-si-and-that-is-fine", null ],
      [ "Display conversion", "guide-units.html#guide-units-display-conversion", null ],
      [ "Adding a unit to a property", "guide-units.html#guide-units-adding-a-unit-to-a-property", null ]
    ] ],
    [ "Project settings", "settings.html", [
      [ "Engine sections", "settings.html#engine-sections", [
        [ "Core settings", "settings.html#settings-core-settings", null ],
        [ "Units settings", "settings.html#settings-units-settings", null ]
      ] ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_asset_data_8h.html",
"_icons_tabler_8h.html#a06caa00b375b1019de00cfd1470391a8",
"_icons_tabler_8h.html#a11b1237ce4b3b5ce59401e8a5e35f1e3",
"_icons_tabler_8h.html#a1bdea3e1276f7f799bb72a847ef8775b",
"_icons_tabler_8h.html#a278c681217df7c486b4ecf67633a77b3",
"_icons_tabler_8h.html#a32da2595737ef92a9f3b04e2dcc95347",
"_icons_tabler_8h.html#a3e7490177b439fa1534b745c7aef69e0",
"_icons_tabler_8h.html#a49450db7fc2af7dab77e06b4001f6aad",
"_icons_tabler_8h.html#a54d28c9d7bee75c6d788d93943a573d7",
"_icons_tabler_8h.html#a600af463cec37c81193164bf12fddda9",
"_icons_tabler_8h.html#a6a2b4cb509464e3d3ea620fea6c50bc0",
"_icons_tabler_8h.html#a7477855673d0246d19c34990503915e0",
"_icons_tabler_8h.html#a7feb0145f8ce1c1ce37646c0e897abfd",
"_icons_tabler_8h.html#a8a11623bbeaaf98ce17f6b96d1853cb6",
"_icons_tabler_8h.html#a94c9e74e266e12396d2a5523b71636b0",
"_icons_tabler_8h.html#aa0f04dfa27cb09ec4010c55bfca250b7",
"_icons_tabler_8h.html#aac51629d7b79a9676d0a1495f480ce59",
"_icons_tabler_8h.html#ab7a04410743ee33ee515fb150be4abdb",
"_icons_tabler_8h.html#ac1fb85d20f5d840c98dd963294956322",
"_icons_tabler_8h.html#ace2bb4c8ab3f63815c5a79cc735ce0bc",
"_icons_tabler_8h.html#ad8c8f011b779392f83c069fc9a27dc6a",
"_icons_tabler_8h.html#ae4dce8f305d46371109353ea98799d2e",
"_icons_tabler_8h.html#aefcb6dbca4be9fa3c948a48b3b8f084d",
"_icons_tabler_8h.html#afb530605096f6ac0f03890f14c3a13a4",
"class_deki_1_1_asset_lookup_table.html#a1c6a95c9119d341dbfd74feda9f7b736",
"class_deki_1_1_component.html#a3e623a7b09cfcf41ece1a0dcdaa3e05b",
"class_deki_1_1_file_system.html",
"class_deki_1_1_i_power.html#a242d0a8e614b52503115701fc5ceaa1f",
"class_deki_1_1_platform_setup_component.html#a6a462f5ac38306e9c6e6aba8cb29397e",
"class_deki_1_1_texture2_d.html#a4da6db9785c584a65272f71aeeaf7563",
"class_deki_editor_1_1_asset_pipeline.html#a871ed5262974a8251915f2bd72eae866",
"class_deki_editor_1_1_create_menu_registry.html#a6dc38de555e71007064c3da4567f6a15",
"class_deki_editor_1_1_editor_settings.html#ab549b881ebb155b2aab86103dcf0ed79",
"class_deki_editor_1_1_editor_u_i.html#a7026e84fab6d53d922b5ffe9d51cde25",
"class_deki_editor_1_1_editor_u_i.html#af4e74a6ca78cd5982de8d23539f9865a",
"class_deki_editor_1_1_i_target_builder.html#a546f3da237de043e0434338005d8ea72",
"class_i_package_installer.html#aeb7aae4a203fc31c22a1b970b46d85e1",
"guide-sprite-system.html#guide-sprite-system-assignment-in-editor",
"namespace_deki_1_1_scene_format.html#a759c33f8cda3706bb62b953f458489a6a8bd950a9d7779b83f5c30046c9aaf1cf",
"namespace_deki_editor.html#ac6b7b960db42b2bfb7d256056d169705",
"struct_deki_1_1_asset_ref.html#a724d2cc06e8ced268a5a2b51b2a5aef6",
"struct_deki_1_1_memory_1_1_region.html#a9ef9a238cc10fb28377e43e4c128408c",
"struct_deki_1_1_vector2.html#a299ee3accab5dc6b6afbc79ac9ab03c0",
"struct_deki_editor_1_1_asset_type_handler.html#a693205cbda792688b3946ef77600801f",
"struct_deki_editor_1_1_editor_u_i_1_1_enum_callbacks.html#a2d127176603c22203fd7b94742242ba2",
"struct_deki_editor_1_1_node_canvas_events.html#a35e505f038b54fe7a7b9d83796172eba",
"struct_deki_editor_1_1_scene_view_context.html#aa2bf0e5a1eb73081b858435004d17147",
"struct_package_entry.html#ab27b5790a6d69efececf44ab97741157"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';