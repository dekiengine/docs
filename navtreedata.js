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
    [ "Coming from LVGL", "guide-coming-from-lvgl.html", [
      [ "The same ideas, other names", "guide-coming-from-lvgl.html#guide-coming-from-lvgl-the-same-ideas-other-names", null ],
      [ "Widgets", "guide-coming-from-lvgl.html#guide-coming-from-lvgl-widgets", null ],
      [ "What changes in practice", "guide-coming-from-lvgl.html#guide-coming-from-lvgl-what-changes-in-practice", null ],
      [ "Using both", "guide-coming-from-lvgl.html#guide-coming-from-lvgl-using-both", null ]
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
    [ "Making it fast", "guide-performance.html", [
      [ "Start from a board", "guide-performance.html#guide-performance-start-from-a-board", null ],
      [ "What chooses itself", "guide-performance.html#guide-performance-what-chooses-itself", null ],
      [ "What a board sets", "guide-performance.html#guide-performance-what-a-board-sets", null ],
      [ "Project settings worth knowing", "guide-performance.html#guide-performance-project-settings-worth-knowing", null ],
      [ "Reading the numbers", "guide-performance.html#guide-performance-reading-the-numbers", null ]
    ] ],
    [ "Platforms", "guide-platforms.html", [
      [ "What a platform is", "guide-platforms.html#guide-platforms-what-a-platform-is", null ],
      [ "Where the assets go", "guide-platforms.html#guide-platforms-where-the-assets-go", [
        [ "Files the game writes", "guide-platforms.html#guide-platforms-files-the-game-writes", null ]
      ] ],
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
    [ "UI widgets", "guide-ui-widgets.html", [
      [ "The widgets", "guide-ui-widgets.html#guide-ui-widgets-the-widgets", null ],
      [ "Adding one", "guide-ui-widgets.html#guide-ui-widgets-adding-one", null ],
      [ "Changing how it looks", "guide-ui-widgets.html#guide-ui-widgets-changing-how-it-looks", null ],
      [ "Reacting in code", "guide-ui-widgets.html#guide-ui-widgets-reacting-in-code", null ],
      [ "Keys and focus", "guide-ui-widgets.html#guide-ui-widgets-keys-and-focus", null ],
      [ "Only what you use ships", "guide-ui-widgets.html#guide-ui-widgets-only-what-you-use-ships", null ],
      [ "On the device", "guide-ui-widgets.html#guide-ui-widgets-on-the-device", null ]
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
"_icons_tabler_8h.html#a06b66ba2713e50530dcb61de8d71ca24",
"_icons_tabler_8h.html#a118635f5865b919a0fc346de01ff7955",
"_icons_tabler_8h.html#a1bbfdff65dd793eef30bcf09ceff906b",
"_icons_tabler_8h.html#a277922e2559ddb930f43e8d63e2bca83",
"_icons_tabler_8h.html#a32ac3fa6c8fda967939e65358c516db7",
"_icons_tabler_8h.html#a3e640fb3a055e4a9ee21b3a0dd3e4bf7",
"_icons_tabler_8h.html#a491a59d325e4c6c9c827d22de11868b8",
"_icons_tabler_8h.html#a548d28402c4a21022c1a85ba59a5ce2c",
"_icons_tabler_8h.html#a5ff1ad2b13dbf4af6d66677e0cda5810",
"_icons_tabler_8h.html#a6a176ec7d00131547187e6e4483245b5",
"_icons_tabler_8h.html#a746cfb4112be8498a1058c5a821a0e61",
"_icons_tabler_8h.html#a7fafe4c6d22d95ff863dc0c3bdabf4e0",
"_icons_tabler_8h.html#a89f774dc5f84b1609f30f87941552108",
"_icons_tabler_8h.html#a94b9f5b02b9cea80230d6dff31b2c276",
"_icons_tabler_8h.html#aa0bc33c97829fadb5f6d764ebada9885",
"_icons_tabler_8h.html#aac2507a561c7f1bcb955a7b6f40b6166",
"_icons_tabler_8h.html#ab7912f653942cb4d9639ae6d4620ab32",
"_icons_tabler_8h.html#ac1eedc24938d9f07cb9d378cf0225578",
"_icons_tabler_8h.html#ace15c77647a5a7b051ae31948d6520d0",
"_icons_tabler_8h.html#ad899aeb18d50be670584e7735e99042b",
"_icons_tabler_8h.html#ae4c8b046d9b67c1ac7c42d35ef4dff13",
"_icons_tabler_8h.html#aef88331f61b520b0e586b760a885bc59",
"_icons_tabler_8h.html#afb04f2cc8a5dcf7095df50f0cd5bc6f5",
"annotated.html",
"class_deki_1_1_component.html#a28ce26bbe235f2fd1766fb509bf801aa",
"class_deki_1_1_f_p_s_counter.html#adf89797ea7c373d1ccaf13b925ea4489",
"class_deki_1_1_i_memory_provider.html#a89385c115474ccb72142b13d7fa58eca",
"class_deki_1_1_object.html#a9e38d1f2d1f74cfbc2846d337cf24534",
"class_deki_1_1_settings_registry.html#a1959845bc09c693a077c6cee370057ca",
"class_deki_editor_1_1_asset_pipeline.html#a0083678f94d4adfb484f1d9347be4c03",
"class_deki_editor_1_1_command_history.html#a2fbd1ca308ce678ed8a851d8103e3949",
"class_deki_editor_1_1_editor_http_utils.html#a481b0832699e74e1d1933af9fac1ee3f",
"class_deki_editor_1_1_editor_u_i.html#a5320f9b38a05d6dcfb036a721fb372ac",
"class_deki_editor_1_1_editor_u_i.html#ac757bb132b215f805f40455d96cabf1f",
"class_deki_editor_1_1_guid_cache.html#aaf566f75e4bbaf9955851ceec3a59807",
"class_deki_editor_1_1_texture_importer.html#a9a1db32439a7a09d0a287360b64e7293",
"guide-localization.html",
"namespace_deki.html#ad6aaef028fc14afac69c3294f9da6c76",
"namespace_deki_editor.html#a82041bde257fa25a84e62a72635b0d4a",
"namespace_deki_editor_1_1_safe_names.html",
"struct_deki_1_1_detail_1_1_type_name_probe.html#a99a83179a0e84e14b7c72b9967c7546a",
"struct_deki_1_1_property_info.html#a04be1771750d9e560c4902040cdc5097",
"struct_deki_1_1_vector3.html#ad735c15458f4ab72e72d104c0d8f3cd5",
"struct_deki_editor_1_1_cli_tool_context.html#a1a2a78fc1a8195037665bf94955ad4d7",
"struct_deki_editor_1_1_editor_u_i_1_1_widget_backend.html#a7a11e847fd8a161647c117846638ae31",
"struct_deki_editor_1_1_picker_item.html#a1070a469bd64c8fc48e847bb10aa9a03",
"struct_deki_editor_1_1_target_content_conflict.html#af2b3530cf351ad64782172a17b1bccc8"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';