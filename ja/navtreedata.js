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
    [ "ガイド", "index.html#guides", null ],
    [ "パッケージ", "index.html#packages", null ],
    [ "エンジンコア", "engine-core.html", [
      [ "コンポーネント", "engine-core.html#engine-components", null ],
      [ "コンポーネントリファレンス", "engine-core.html#engine-component-reference", [
        [ "PlatformSetupComponent", "engine-core.html#engine-platformsetupcomponent", null ],
        [ "RendererComponent", "engine-core.html#engine-renderercomponent", null ],
        [ "ScreenAnchor", "engine-core.html#engine-screenanchor", null ],
        [ "SetupComponent", "engine-core.html#engine-setupcomponent", null ]
      ] ],
      [ "プロジェクト設定", "engine-core.html#engine-project-settings", [
        [ "コア 設定", "engine-core.html#engine-core-settings", null ],
        [ "単位 設定", "engine-core.html#engine-units-settings", null ]
      ] ]
    ] ],
    [ "アセットシステム", "guide-asset-system.html", [
      [ "AssetRef&lt;T&gt; テンプレート", "guide-asset-system.html#guide-asset-system-assetreft-template", [
        [ "遅延読み込み", "guide-asset-system.html#guide-asset-system-lazy-loading", null ]
      ] ],
      [ "二重フィールドのパターン (guid と source)", "guide-asset-system.html#guide-asset-system-dual-field-pattern-guid-vs-source", [
        [ "ルール: <span class=\"tt\">guid</span> は常に「ディスクから読み込むファイル」", "guide-asset-system.html#guide-asset-system-rule-guid-always--the-file-to-load-from-disk", null ],
        [ "スプライトとフォントが異なる理由", "guide-asset-system.html#guide-asset-system-why-sprites-and-fonts-differ", null ],
        [ "生成されるコードのパターン", "guide-asset-system.html#guide-asset-system-generated-code-pattern", null ]
      ] ],
      [ "決定的な GUID の生成", "guide-asset-system.html#guide-asset-system-deterministic-guid-generation", [
        [ "シードの形式 (絶対に変更しないでください)", "guide-asset-system.html#guide-asset-system-seed-formats-never-change-these", null ],
        [ "決定的な GUID が生成される場所", "guide-asset-system.html#guide-asset-system-where-deterministic-guids-are-generated", null ]
      ] ],
      [ "アセット検索テーブル (asset_table.bin)", "guide-asset-system.html#guide-asset-system-asset-lookup-table-asset_tablebin", [
        [ "ハッシュ関数 (FNV-1a 32 ビット)", "guide-asset-system.html#guide-asset-system-hash-function-fnv-1a-32-bit", null ],
        [ "テーブル内のキーの種類", "guide-asset-system.html#guide-asset-system-key-types-in-the-table", null ],
        [ "テーブルの 2 つのバージョン", "guide-asset-system.html#guide-asset-system-two-versions-of-the-table", null ]
      ] ],
      [ "アセットの読み込みの流れ", "guide-asset-system.html#guide-asset-system-asset-loading-flow", null ],
      [ "主なファイル", "guide-asset-system.html#guide-asset-system-key-files", null ]
    ] ],
    [ "フォントシステム", "guide-font-system.html", [
      [ "概要", "guide-font-system.html#guide-font-system-overview", null ],
      [ "GUID の生成", "guide-font-system.html#guide-font-system-guid-generation", null ],
      [ ".data サイドカーファイル", "guide-font-system.html#guide-font-system-data-sidecar-file", null ],
      [ "ベイクの担当: FontSyncHandler", "guide-font-system.html#guide-font-system-baking-authority-fontsynchandler", [
        [ "EnsureFontSizeBaked を呼び出すもの:", "guide-font-system.html#guide-font-system-who-calls-ensurefontsizebaked", null ],
        [ "登録", "guide-font-system.html#guide-font-system-registration", null ]
      ] ],
      [ "フォントの AssetRef フィールド", "guide-font-system.html#guide-font-system-assetref-fields-for-fonts", [
        [ "font.guid が同期される仕組み", "guide-font-system.html#guide-font-system-how-fontguid-stays-in-sync", null ]
      ] ],
      [ "プレビューモード (エディターのみ)", "guide-font-system.html#guide-font-system-preview-mode-editor-only", null ],
      [ "エクスポートのパイプライン", "guide-font-system.html#guide-font-system-export-pipeline", null ],
      [ "BitmapFont のファイル形式 (.dfont)", "guide-font-system.html#guide-font-system-bitmapfont-file-format-dfont", null ],
      [ "主なファイル", "guide-font-system.html#guide-font-system-key-files", null ]
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
    [ "言語", "guide-localization.html", [
      [ "表を翻訳する", "guide-localization.html#guide-localization-translating-a-table", null ],
      [ "コードでテキストを表示する", "guide-localization.html#guide-localization-showing-text-in-code", null ],
      [ "パッケージ自身の名前", "guide-localization.html#guide-localization-a-packages-own-names", null ],
      [ "フォント", "guide-localization.html#guide-localization-fonts", null ]
    ] ],
    [ "メモリ", "guide-memory.html", [
      [ "ルール", "guide-memory.html#guide-memory-the-rule", null ],
      [ "<span class=\"tt\">Deki::Buffer&lt;T&gt;</span> - これを使う", "guide-memory.html#guide-memory-dekibuffert---use-this", [
        [ "アリーナを使わない理由", "guide-memory.html#guide-memory-why-not-an-arena", null ]
      ] ],
      [ "領域 - 毎回あなたが選ぶ", "guide-memory.html#guide-memory-regions---you-choose-every-time", [
        [ "領域は名前なので、パッケージが独自に追加できる", "guide-memory.html#guide-memory-a-region-is-a-name-so-packages-can-add-their-own", null ],
        [ "領域を提供するのはボードの仕事", "guide-memory.html#guide-memory-serving-one-is-the-boards-job", null ],
        [ "領域名はケーパビリティ名でもある", "guide-memory.html#guide-memory-the-region-name-is-the-capability-name", null ],
        [ "配置は 1 回で決まる。フォールバックはない", "guide-memory.html#guide-memory-placement-resolves-once-there-is-no-fallback", null ]
      ] ],
      [ "API のその他の部分", "guide-memory.html#guide-memory-the-rest-of-the-api", [
        [ "メモリの行き先を調べる", "guide-memory.html#guide-memory-finding-out-where-the-memory-went", null ],
        [ "シーンの切り替え", "guide-memory.html#guide-memory-changing-scenes", null ]
      ] ],
      [ "<span class=\"tt\">AllocContext</span> - ラベルは自動で書かれる", "guide-memory.html#guide-memory-alloccontext---the-label-writes-itself", [
        [ "取り除く", "guide-memory.html#guide-memory-stripping-it", null ]
      ] ],
      [ "<span class=\"tt\">Deki::Vector&lt;T&gt;</span> - 実行時に個数が変わる場合", "guide-memory.html#guide-memory-dekivectort---when-the-count-changes-at-runtime", [
        [ "<span class=\"tt\">std::vector</span>、<span class=\"tt\">std::string</span>、通常の <span class=\"tt\">new</span>", "guide-memory.html#guide-memory-stdvector-stdstring-and-plain-new", null ]
      ] ],
      [ "プラットフォームレイヤー: <span class=\"tt\">IMemoryProvider</span>", "guide-memory.html#guide-memory-platform-layer-imemoryprovider", null ],
      [ "lint", "guide-memory.html#guide-memory-the-lint", null ]
    ] ],
    [ "高速化", "guide-performance.html", [
      [ "ボードから始める", "guide-performance.html#guide-performance-start-from-a-board", null ],
      [ "自動で選ばれるもの", "guide-performance.html#guide-performance-what-chooses-itself", null ],
      [ "ボードで設定するもの", "guide-performance.html#guide-performance-what-a-board-sets", null ],
      [ "知っておくとよいプロジェクト設定", "guide-performance.html#guide-performance-project-settings-worth-knowing", null ],
      [ "数値の読み方", "guide-performance.html#guide-performance-reading-the-numbers", null ]
    ] ],
    [ "プラットフォーム", "guide-platforms.html", [
      [ "プラットフォームとは", "guide-platforms.html#guide-platforms-what-a-platform-is", null ],
      [ "アセットの置き場所", "guide-platforms.html#guide-platforms-where-the-assets-go", [
        [ "ゲームが書き込むファイル", "guide-platforms.html#guide-platforms-files-the-game-writes", null ]
      ] ],
      [ "ボードをシミュレートする", "guide-platforms.html#guide-platforms-simulating-a-board", null ],
      [ "プラットフォームの提供元", "guide-platforms.html#guide-platforms-where-platforms-come-from", null ],
      [ "パッケージでボードを提供する", "guide-platforms.html#guide-platforms-shipping-boards-in-a-package", [
        [ "他のパッケージを必要とする機能", "guide-platforms.html#guide-platforms-features-that-need-other-packages", null ]
      ] ],
      [ "採用: プロジェクトはコピーを受け取る", "guide-platforms.html#guide-platforms-adopting-the-project-gets-a-copy", null ],
      [ "提供元: 編集、アップデート、復元", "guide-platforms.html#guide-platforms-origin-edit-update-restore", null ],
      [ "コマンドラインから", "guide-platforms.html#guide-platforms-from-the-command-line", null ],
      [ "コードでは", "guide-platforms.html#guide-platforms-in-the-code", null ]
    ] ],
    [ "プロジェクトの構成", "guide-project-layout.html", [
      [ "構成", "guide-project-layout.html#guide-project-layout-layout", null ],
      [ "移植性", "guide-project-layout.html#guide-project-layout-portability", null ],
      [ "復旧", "guide-project-layout.html#guide-project-layout-recovery", null ],
      [ "shadow/ が runtime/ と同じ階層にある理由", "guide-project-layout.html#guide-project-layout-why-shadow-is-a-sibling-of-runtime", null ],
      [ "構造のバージョン", "guide-project-layout.html#guide-project-layout-structure-version", null ]
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
    [ "画面", "guide-screens.html", [
      [ "カメラ", "guide-screens.html#autotoc_md0", null ],
      [ "各画面に映る範囲", "guide-screens.html#autotoc_md1", null ],
      [ "画面に固定する", "guide-screens.html#autotoc_md2", null ],
      [ "レシピ", "guide-screens.html#autotoc_md3", null ],
      [ "プレビュー", "guide-screens.html#autotoc_md4", null ],
      [ "カラーフォーマット", "guide-screens.html#autotoc_md5", null ],
      [ "デバイス上では", "guide-screens.html#autotoc_md6", null ]
    ] ],
    [ "スプライトシステム", "guide-sprite-system.html", [
      [ "概要", "guide-sprite-system.html#guide-sprite-system-overview", null ],
      [ "GUID の生成", "guide-sprite-system.html#guide-sprite-system-guid-generation", null ],
      [ ".tex ファイルの形式 (2DTX)", "guide-sprite-system.html#guide-sprite-system-tex-file-format-2dtx", [
        [ "Sprite チャンク (type 1)", "guide-sprite-system.html#guide-sprite-system-sprite-chunk-type-1", null ],
        [ "FrameList チャンク (type 2)", "guide-sprite-system.html#guide-sprite-system-framelist-chunk-type-2", null ],
        [ "SourceSize チャンク (type 4)", "guide-sprite-system.html#guide-sprite-system-sourcesize-chunk-type-4", null ]
      ] ],
      [ ".data サイドカーファイル", "guide-sprite-system.html#guide-sprite-system-data-sidecar-file", null ],
      [ "インポートのパイプライン: TextureImporter", "guide-sprite-system.html#guide-sprite-system-import-pipeline-textureimporter", [
        [ "2 パスのインポート", "guide-sprite-system.html#guide-sprite-system-two-pass-import", null ],
        [ "SubAsset の生成", "guide-sprite-system.html#guide-sprite-system-subasset-generation", null ],
        [ "フレームデータのレジストリ", "guide-sprite-system.html#guide-sprite-system-frame-data-registry", null ]
      ] ],
      [ "スプライトの AssetRef フィールド", "guide-sprite-system.html#guide-sprite-system-assetref-fields-for-sprites", [
        [ "guid = 親、source = フレームである理由", "guide-sprite-system.html#guide-sprite-system-why-guid--parent-source--frame", null ],
        [ "単体のスプライト (フレームなし) の場合", "guide-sprite-system.html#guide-sprite-system-for-plain-sprites-no-frames", null ]
      ] ],
      [ "フレームの解決の流れ", "guide-sprite-system.html#guide-sprite-system-frame-resolution-flow", [
        [ "生成される ResolveObjectRefs", "guide-sprite-system.html#guide-sprite-system-generated-resolveobjectrefs", null ],
        [ "FindFrame", "guide-sprite-system.html#guide-sprite-system-findframe", null ]
      ] ],
      [ "エディターでの割り当て", "guide-sprite-system.html#guide-sprite-system-assignment-in-editor", null ],
      [ "GUID の登録 (エディター)", "guide-sprite-system.html#guide-sprite-system-guid-registration-editor", null ],
      [ "エクスポートのパイプライン", "guide-sprite-system.html#guide-sprite-system-export-pipeline", null ],
      [ "比較: フォントとスプライト", "guide-sprite-system.html#guide-sprite-system-comparison-fonts-vs-sprites", null ],
      [ "主なファイル", "guide-sprite-system.html#guide-sprite-system-key-files", null ]
    ] ],
    [ "単位", "guide-units.html", [
      [ "ルール", "guide-units.html#guide-units-the-rule", null ],
      [ "保存されるもの", "guide-units.html#guide-units-what-is-stored", [
        [ "時間に 2 つの決まりがある理由", "guide-units.html#guide-units-why-time-has-two-conventions", null ]
      ] ],
      [ "データシートは SI を使わないが、それで問題ない", "guide-units.html#guide-units-datasheets-do-not-use-si-and-that-is-fine", null ],
      [ "表示の変換", "guide-units.html#guide-units-display-conversion", null ],
      [ "プロパティに単位を付ける", "guide-units.html#guide-units-adding-a-unit-to-a-property", null ]
    ] ],
    [ "プロジェクト設定", "settings.html", [
      [ "エンジンのセクション", "settings.html#engine-sections", [
        [ "コア 設定", "settings.html#settings-core-settings", null ],
        [ "単位 設定", "settings.html#settings-units-settings", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"engine-core.html"
];

const SYNCONMSG = 'クリックで同期表示が無効になります';
const SYNCOFFMSG = 'クリックで同期表示が有効になります';
const LISTOFALLMEMBERS = '全メンバ一覧';