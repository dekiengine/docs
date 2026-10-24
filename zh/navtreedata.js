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
    [ "指南", "index.html#guides", null ],
    [ "包", "index.html#packages", null ],
    [ "引擎核心", "engine-core.html", [
      [ "组件", "engine-core.html#engine-components", null ],
      [ "组件参考", "engine-core.html#engine-component-reference", [
        [ "PlatformSetupComponent", "engine-core.html#engine-platformsetupcomponent", null ],
        [ "RendererComponent", "engine-core.html#engine-renderercomponent", null ],
        [ "ScreenAnchor", "engine-core.html#engine-screenanchor", null ],
        [ "SetupComponent", "engine-core.html#engine-setupcomponent", null ]
      ] ],
      [ "项目设置", "engine-core.html#engine-project-settings", [
        [ "核心 设置", "engine-core.html#engine-core-settings", null ],
        [ "单位 设置", "engine-core.html#engine-units-settings", null ]
      ] ]
    ] ],
    [ "资源系统", "guide-asset-system.html", [
      [ "AssetRef&lt;T&gt; 模板", "guide-asset-system.html#guide-asset-system-assetreft-template", [
        [ "延迟加载", "guide-asset-system.html#guide-asset-system-lazy-loading", null ]
      ] ],
      [ "双字段模式（guid 与 source）", "guide-asset-system.html#guide-asset-system-dual-field-pattern-guid-vs-source", [
        [ "规则：<span class=\"tt\">guid</span> 始终表示“要从磁盘加载的文件”", "guide-asset-system.html#guide-asset-system-rule-guid-always--the-file-to-load-from-disk", null ],
        [ "精灵和字体为何不同", "guide-asset-system.html#guide-asset-system-why-sprites-and-fonts-differ", null ],
        [ "生成代码的模式", "guide-asset-system.html#guide-asset-system-generated-code-pattern", null ]
      ] ],
      [ "确定性 GUID 生成", "guide-asset-system.html#guide-asset-system-deterministic-guid-generation", [
        [ "种子格式（绝对不要更改）", "guide-asset-system.html#guide-asset-system-seed-formats-never-change-these", null ],
        [ "生成确定性 GUID 的位置", "guide-asset-system.html#guide-asset-system-where-deterministic-guids-are-generated", null ]
      ] ],
      [ "资源查找表（asset_table.bin）", "guide-asset-system.html#guide-asset-system-asset-lookup-table-asset_tablebin", [
        [ "哈希函数（FNV-1a 32 位）", "guide-asset-system.html#guide-asset-system-hash-function-fnv-1a-32-bit", null ],
        [ "表中的键类型", "guide-asset-system.html#guide-asset-system-key-types-in-the-table", null ],
        [ "表的两个版本", "guide-asset-system.html#guide-asset-system-two-versions-of-the-table", null ]
      ] ],
      [ "资源加载流程", "guide-asset-system.html#guide-asset-system-asset-loading-flow", null ],
      [ "关键文件", "guide-asset-system.html#guide-asset-system-key-files", null ]
    ] ],
    [ "字体系统", "guide-font-system.html", [
      [ "概述", "guide-font-system.html#guide-font-system-overview", null ],
      [ "GUID 生成", "guide-font-system.html#guide-font-system-guid-generation", null ],
      [ ".data 附属文件", "guide-font-system.html#guide-font-system-data-sidecar-file", null ],
      [ "烘焙的唯一负责者：FontSyncHandler", "guide-font-system.html#guide-font-system-baking-authority-fontsynchandler", [
        [ "调用 EnsureFontSizeBaked 的位置：", "guide-font-system.html#guide-font-system-who-calls-ensurefontsizebaked", null ],
        [ "注册", "guide-font-system.html#guide-font-system-registration", null ]
      ] ],
      [ "字体的 AssetRef 字段", "guide-font-system.html#guide-font-system-assetref-fields-for-fonts", [
        [ "font.guid 如何保持同步", "guide-font-system.html#guide-font-system-how-fontguid-stays-in-sync", null ]
      ] ],
      [ "预览模式（仅限编辑器）", "guide-font-system.html#guide-font-system-preview-mode-editor-only", null ],
      [ "导出管线", "guide-font-system.html#guide-font-system-export-pipeline", null ],
      [ "BitmapFont 文件格式（.dfont）", "guide-font-system.html#guide-font-system-bitmapfont-file-format-dfont", null ],
      [ "关键文件", "guide-font-system.html#guide-font-system-key-files", null ]
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
    [ "语言", "guide-localization.html", [
      [ "翻译对照表", "guide-localization.html#guide-localization-translating-a-table", null ],
      [ "在代码中显示文本", "guide-localization.html#guide-localization-showing-text-in-code", null ],
      [ "包自身的名称", "guide-localization.html#guide-localization-a-packages-own-names", null ],
      [ "字体", "guide-localization.html#guide-localization-fonts", null ]
    ] ],
    [ "内存", "guide-memory.html", [
      [ "规则", "guide-memory.html#guide-memory-the-rule", null ],
      [ "<span class=\"tt\">Deki::Buffer&lt;T&gt;</span> - 请使用它", "guide-memory.html#guide-memory-dekibuffert---use-this", [
        [ "为什么不用 arena", "guide-memory.html#guide-memory-why-not-an-arena", null ]
      ] ],
      [ "区域 - 每次都由你选择", "guide-memory.html#guide-memory-regions---you-choose-every-time", [
        [ "区域就是一个名称，所以包可以添加自己的区域", "guide-memory.html#guide-memory-a-region-is-a-name-so-packages-can-add-their-own", null ],
        [ "提供区域是开发板的职责", "guide-memory.html#guide-memory-serving-one-is-the-boards-job", null ],
        [ "区域名称就是能力名称", "guide-memory.html#guide-memory-the-region-name-is-the-capability-name", null ],
        [ "放置只解析一次。没有回退。", "guide-memory.html#guide-memory-placement-resolves-once-there-is-no-fallback", null ]
      ] ],
      [ "API 的其余部分", "guide-memory.html#guide-memory-the-rest-of-the-api", [
        [ "查明内存去了哪里", "guide-memory.html#guide-memory-finding-out-where-the-memory-went", null ]
      ] ],
      [ "<span class=\"tt\">AllocContext</span> - 标签自动生成", "guide-memory.html#guide-memory-alloccontext---the-label-writes-itself", [
        [ "去除它", "guide-memory.html#guide-memory-stripping-it", null ]
      ] ],
      [ "<span class=\"tt\">Deki::Vector&lt;T&gt;</span> - 数量在运行时变化时", "guide-memory.html#guide-memory-dekivectort---when-the-count-changes-at-runtime", [
        [ "<span class=\"tt\">std::vector</span>、<span class=\"tt\">std::string</span> 和普通的 <span class=\"tt\">new</span>", "guide-memory.html#guide-memory-stdvector-stdstring-and-plain-new", null ]
      ] ],
      [ "平台层：<span class=\"tt\">IMemoryProvider</span>", "guide-memory.html#guide-memory-platform-layer-imemoryprovider", null ],
      [ "lint 检查", "guide-memory.html#guide-memory-the-lint", null ]
    ] ],
    [ "提升速度", "guide-performance.html", [
      [ "从开发板开始", "guide-performance.html#guide-performance-start-from-a-board", null ],
      [ "自动选择的内容", "guide-performance.html#guide-performance-what-chooses-itself", null ],
      [ "开发板需要设置的内容", "guide-performance.html#guide-performance-what-a-board-sets", null ],
      [ "值得了解的项目设置", "guide-performance.html#guide-performance-project-settings-worth-knowing", null ],
      [ "看懂数字", "guide-performance.html#guide-performance-reading-the-numbers", null ]
    ] ],
    [ "平台", "guide-platforms.html", [
      [ "平台是什么", "guide-platforms.html#guide-platforms-what-a-platform-is", null ],
      [ "资源放在哪里", "guide-platforms.html#guide-platforms-where-the-assets-go", null ],
      [ "模拟开发板", "guide-platforms.html#guide-platforms-simulating-a-board", null ],
      [ "平台从哪里来", "guide-platforms.html#guide-platforms-where-platforms-come-from", null ],
      [ "在包中附带开发板", "guide-platforms.html#guide-platforms-shipping-boards-in-a-package", [
        [ "需要其他包的功能", "guide-platforms.html#guide-platforms-features-that-need-other-packages", null ]
      ] ],
      [ "采用：项目获得一份副本", "guide-platforms.html#guide-platforms-adopting-the-project-gets-a-copy", null ],
      [ "来源：编辑、更新、恢复", "guide-platforms.html#guide-platforms-origin-edit-update-restore", null ],
      [ "从命令行使用", "guide-platforms.html#guide-platforms-from-the-command-line", null ],
      [ "在代码中", "guide-platforms.html#guide-platforms-in-the-code", null ]
    ] ],
    [ "项目结构", "guide-project-layout.html", [
      [ "结构", "guide-project-layout.html#guide-project-layout-layout", null ],
      [ "可移植性", "guide-project-layout.html#guide-project-layout-portability", null ],
      [ "恢复", "guide-project-layout.html#guide-project-layout-recovery", null ],
      [ "为什么 shadow/ 与 runtime/ 并列", "guide-project-layout.html#guide-project-layout-why-shadow-is-a-sibling-of-runtime", null ],
      [ "结构版本", "guide-project-layout.html#guide-project-layout-structure-version", null ]
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
    [ "屏幕", "guide-screens.html", [
      [ "相机", "guide-screens.html#autotoc_md0", null ],
      [ "每种屏幕看到什么", "guide-screens.html#autotoc_md1", null ],
      [ "固定到屏幕", "guide-screens.html#autotoc_md2", null ],
      [ "用法示例", "guide-screens.html#autotoc_md3", null ],
      [ "预览", "guide-screens.html#autotoc_md4", null ],
      [ "颜色格式", "guide-screens.html#autotoc_md5", null ],
      [ "在设备上", "guide-screens.html#autotoc_md6", null ]
    ] ],
    [ "精灵系统", "guide-sprite-system.html", [
      [ "概述", "guide-sprite-system.html#guide-sprite-system-overview", null ],
      [ "GUID 生成", "guide-sprite-system.html#guide-sprite-system-guid-generation", null ],
      [ ".tex 文件格式（2DTX）", "guide-sprite-system.html#guide-sprite-system-tex-file-format-2dtx", [
        [ "Sprite 块（类型 1）", "guide-sprite-system.html#guide-sprite-system-sprite-chunk-type-1", null ],
        [ "FrameList 块（类型 2）", "guide-sprite-system.html#guide-sprite-system-framelist-chunk-type-2", null ],
        [ "SourceSize 块（类型 4）", "guide-sprite-system.html#guide-sprite-system-sourcesize-chunk-type-4", null ]
      ] ],
      [ ".data 附属文件", "guide-sprite-system.html#guide-sprite-system-data-sidecar-file", null ],
      [ "导入管线：TextureImporter", "guide-sprite-system.html#guide-sprite-system-import-pipeline-textureimporter", [
        [ "两遍导入", "guide-sprite-system.html#guide-sprite-system-two-pass-import", null ],
        [ "SubAsset 生成", "guide-sprite-system.html#guide-sprite-system-subasset-generation", null ],
        [ "帧数据注册表", "guide-sprite-system.html#guide-sprite-system-frame-data-registry", null ]
      ] ],
      [ "精灵的 AssetRef 字段", "guide-sprite-system.html#guide-sprite-system-assetref-fields-for-sprites", [
        [ "为什么 guid = 父资源，source = 帧", "guide-sprite-system.html#guide-sprite-system-why-guid--parent-source--frame", null ],
        [ "普通精灵（没有帧）", "guide-sprite-system.html#guide-sprite-system-for-plain-sprites-no-frames", null ]
      ] ],
      [ "帧解析流程", "guide-sprite-system.html#guide-sprite-system-frame-resolution-flow", [
        [ "生成的 ResolveObjectRefs", "guide-sprite-system.html#guide-sprite-system-generated-resolveobjectrefs", null ],
        [ "FindFrame", "guide-sprite-system.html#guide-sprite-system-findframe", null ]
      ] ],
      [ "在编辑器中指定", "guide-sprite-system.html#guide-sprite-system-assignment-in-editor", null ],
      [ "GUID 注册（编辑器）", "guide-sprite-system.html#guide-sprite-system-guid-registration-editor", null ],
      [ "导出管线", "guide-sprite-system.html#guide-sprite-system-export-pipeline", null ],
      [ "比较：字体与精灵", "guide-sprite-system.html#guide-sprite-system-comparison-fonts-vs-sprites", null ],
      [ "关键文件", "guide-sprite-system.html#guide-sprite-system-key-files", null ]
    ] ],
    [ "单位", "guide-units.html", [
      [ "规则", "guide-units.html#guide-units-the-rule", null ],
      [ "存储的内容", "guide-units.html#guide-units-what-is-stored", [
        [ "为什么时间有两种约定", "guide-units.html#guide-units-why-time-has-two-conventions", null ]
      ] ],
      [ "数据手册不使用 SI，这没有问题", "guide-units.html#guide-units-datasheets-do-not-use-si-and-that-is-fine", null ],
      [ "显示换算", "guide-units.html#guide-units-display-conversion", null ],
      [ "为属性添加单位", "guide-units.html#guide-units-adding-a-unit-to-a-property", null ]
    ] ],
    [ "项目设置", "settings.html", [
      [ "引擎的分区", "settings.html#engine-sections", [
        [ "核心 设置", "settings.html#settings-core-settings", null ],
        [ "单位 设置", "settings.html#settings-units-settings", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"engine-core.html"
];

const SYNCONMSG = '点击 关闭 面板同步';
const SYNCOFFMSG = '点击 开启 面板同步';
const LISTOFALLMEMBERS = '所有成员列表';