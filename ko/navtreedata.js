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
    [ "가이드", "index.html#guides", null ],
    [ "패키지", "index.html#packages", null ],
    [ "엔진 코어", "engine-core.html", [
      [ "컴포넌트", "engine-core.html#engine-components", null ],
      [ "컴포넌트 레퍼런스", "engine-core.html#engine-component-reference", [
        [ "PlatformSetupComponent", "engine-core.html#engine-platformsetupcomponent", null ],
        [ "RendererComponent", "engine-core.html#engine-renderercomponent", null ],
        [ "ScreenAnchor", "engine-core.html#engine-screenanchor", null ],
        [ "SetupComponent", "engine-core.html#engine-setupcomponent", null ]
      ] ],
      [ "프로젝트 설정", "engine-core.html#engine-project-settings", [
        [ "코어 설정", "engine-core.html#engine-core-settings", null ],
        [ "단위 설정", "engine-core.html#engine-units-settings", null ]
      ] ]
    ] ],
    [ "에셋 시스템", "guide-asset-system.html", [
      [ "AssetRef&lt;T&gt; 템플릿", "guide-asset-system.html#guide-asset-system-assetreft-template", [
        [ "지연 로딩", "guide-asset-system.html#guide-asset-system-lazy-loading", null ]
      ] ],
      [ "이중 필드 패턴 (guid와 source)", "guide-asset-system.html#guide-asset-system-dual-field-pattern-guid-vs-source", [
        [ "규칙: <span class=\"tt\">guid</span>는 항상 \"디스크에서 로드할 파일\"", "guide-asset-system.html#guide-asset-system-rule-guid-always--the-file-to-load-from-disk", null ],
        [ "스프라이트와 폰트가 다른 이유", "guide-asset-system.html#guide-asset-system-why-sprites-and-fonts-differ", null ],
        [ "생성 코드 패턴", "guide-asset-system.html#guide-asset-system-generated-code-pattern", null ]
      ] ],
      [ "결정적 GUID 생성", "guide-asset-system.html#guide-asset-system-deterministic-guid-generation", [
        [ "시드 형식 (절대 변경하지 마십시오)", "guide-asset-system.html#guide-asset-system-seed-formats-never-change-these", null ],
        [ "결정적 GUID를 생성하는 곳", "guide-asset-system.html#guide-asset-system-where-deterministic-guids-are-generated", null ]
      ] ],
      [ "에셋 조회 테이블 (asset_table.bin)", "guide-asset-system.html#guide-asset-system-asset-lookup-table-asset_tablebin", [
        [ "해시 함수 (FNV-1a 32비트)", "guide-asset-system.html#guide-asset-system-hash-function-fnv-1a-32-bit", null ],
        [ "테이블의 키 종류", "guide-asset-system.html#guide-asset-system-key-types-in-the-table", null ],
        [ "테이블의 두 가지 버전", "guide-asset-system.html#guide-asset-system-two-versions-of-the-table", null ]
      ] ],
      [ "에셋 로딩 흐름", "guide-asset-system.html#guide-asset-system-asset-loading-flow", null ],
      [ "주요 파일", "guide-asset-system.html#guide-asset-system-key-files", null ]
    ] ],
    [ "Coming from LVGL", "guide-coming-from-lvgl.html", [
      [ "The same ideas, other names", "guide-coming-from-lvgl.html#guide-coming-from-lvgl-the-same-ideas-other-names", null ],
      [ "Widgets", "guide-coming-from-lvgl.html#guide-coming-from-lvgl-widgets", null ],
      [ "What changes in practice", "guide-coming-from-lvgl.html#guide-coming-from-lvgl-what-changes-in-practice", null ],
      [ "Using both", "guide-coming-from-lvgl.html#guide-coming-from-lvgl-using-both", null ]
    ] ],
    [ "폰트 시스템", "guide-font-system.html", [
      [ "개요", "guide-font-system.html#guide-font-system-overview", null ],
      [ "GUID 생성", "guide-font-system.html#guide-font-system-guid-generation", null ],
      [ ".data 사이드카 파일", "guide-font-system.html#guide-font-system-data-sidecar-file", null ],
      [ "베이크 권한: FontSyncHandler", "guide-font-system.html#guide-font-system-baking-authority-fontsynchandler", [
        [ "EnsureFontSizeBaked를 호출하는 곳:", "guide-font-system.html#guide-font-system-who-calls-ensurefontsizebaked", null ],
        [ "등록", "guide-font-system.html#guide-font-system-registration", null ]
      ] ],
      [ "폰트의 AssetRef 필드", "guide-font-system.html#guide-font-system-assetref-fields-for-fonts", [
        [ "font.guid가 동기화되는 방식", "guide-font-system.html#guide-font-system-how-fontguid-stays-in-sync", null ]
      ] ],
      [ "미리보기 모드 (에디터 전용)", "guide-font-system.html#guide-font-system-preview-mode-editor-only", null ],
      [ "익스포트 파이프라인", "guide-font-system.html#guide-font-system-export-pipeline", null ],
      [ "BitmapFont 파일 형식 (.dfont)", "guide-font-system.html#guide-font-system-bitmapfont-file-format-dfont", null ],
      [ "주요 파일", "guide-font-system.html#guide-font-system-key-files", null ]
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
    [ "언어", "guide-localization.html", [
      [ "테이블 번역하기", "guide-localization.html#guide-localization-translating-a-table", null ],
      [ "코드에서 텍스트 표시하기", "guide-localization.html#guide-localization-showing-text-in-code", null ],
      [ "패키지 고유의 이름", "guide-localization.html#guide-localization-a-packages-own-names", null ],
      [ "폰트", "guide-localization.html#guide-localization-fonts", null ]
    ] ],
    [ "메모리", "guide-memory.html", [
      [ "규칙", "guide-memory.html#autotoc_md0", null ],
      [ "<span class=\"tt\">Deki::Buffer&lt;T&gt;</span> - 이것을 사용하십시오", "guide-memory.html#autotoc_md1", [
        [ "아레나를 쓰지 않는 이유", "guide-memory.html#autotoc_md2", null ]
      ] ],
      [ "영역 - 매번 직접 고릅니다", "guide-memory.html#autotoc_md3", [
        [ "영역은 이름이므로 패키지가 직접 추가할 수 있습니다", "guide-memory.html#autotoc_md4", null ],
        [ "영역을 제공하는 것은 보드의 일입니다", "guide-memory.html#autotoc_md5", null ],
        [ "영역 이름은 케이퍼빌리티 이름입니다", "guide-memory.html#autotoc_md6", null ],
        [ "배치는 한 번에 결정됩니다. 대체는 없습니다.", "guide-memory.html#autotoc_md7", null ]
      ] ],
      [ "나머지 API", "guide-memory.html#autotoc_md8", [
        [ "메모리가 어디에 쓰였는지 알아내기", "guide-memory.html#autotoc_md9", null ],
        [ "씬 바꾸기", "guide-memory.html#autotoc_md10", null ]
      ] ],
      [ "<span class=\"tt\">AllocContext</span> - 레이블은 저절로 작성됩니다", "guide-memory.html#autotoc_md11", [
        [ "제거하기", "guide-memory.html#autotoc_md12", null ]
      ] ],
      [ "<span class=\"tt\">Deki::Vector&lt;T&gt;</span> - 런타임에 개수가 바뀔 때", "guide-memory.html#autotoc_md13", [
        [ "<span class=\"tt\">std::vector</span>, <span class=\"tt\">std::string</span>, 일반 <span class=\"tt\">new</span>", "guide-memory.html#autotoc_md14", null ]
      ] ],
      [ "플랫폼 계층: <span class=\"tt\">IMemoryProvider</span>", "guide-memory.html#autotoc_md15", null ],
      [ "린트", "guide-memory.html#autotoc_md16", null ]
    ] ],
    [ "빠르게 만들기", "guide-performance.html", [
      [ "보드에서 시작하기", "guide-performance.html#guide-performance-start-from-a-board", null ],
      [ "자동으로 정해지는 것", "guide-performance.html#guide-performance-what-chooses-itself", null ],
      [ "보드에서 설정하는 것", "guide-performance.html#guide-performance-what-a-board-sets", null ],
      [ "알아 두면 좋은 프로젝트 설정", "guide-performance.html#guide-performance-project-settings-worth-knowing", null ],
      [ "숫자 읽기", "guide-performance.html#guide-performance-reading-the-numbers", null ]
    ] ],
    [ "플랫폼", "guide-platforms.html", [
      [ "플랫폼이란", "guide-platforms.html#guide-platforms-what-a-platform-is", null ],
      [ "에셋이 놓이는 곳", "guide-platforms.html#guide-platforms-where-the-assets-go", [
        [ "게임이 쓰는 파일", "guide-platforms.html#guide-platforms-files-the-game-writes", null ]
      ] ],
      [ "보드 시뮬레이션", "guide-platforms.html#guide-platforms-simulating-a-board", null ],
      [ "플랫폼은 어디에서 오는가", "guide-platforms.html#guide-platforms-where-platforms-come-from", null ],
      [ "패키지로 보드 제공하기", "guide-platforms.html#guide-platforms-shipping-boards-in-a-package", [
        [ "다른 패키지가 필요한 기능", "guide-platforms.html#guide-platforms-features-that-need-other-packages", null ]
      ] ],
      [ "채택: 프로젝트가 사본을 받습니다", "guide-platforms.html#guide-platforms-adopting-the-project-gets-a-copy", null ],
      [ "출처: 편집, 업데이트, 복원", "guide-platforms.html#guide-platforms-origin-edit-update-restore", null ],
      [ "명령줄에서", "guide-platforms.html#guide-platforms-from-the-command-line", null ],
      [ "코드에서", "guide-platforms.html#guide-platforms-in-the-code", null ]
    ] ],
    [ "프로젝트 구조", "guide-project-layout.html", [
      [ "구조", "guide-project-layout.html#guide-project-layout-layout", null ],
      [ "이식성", "guide-project-layout.html#guide-project-layout-portability", null ],
      [ "복구", "guide-project-layout.html#guide-project-layout-recovery", null ],
      [ "shadow/가 runtime/과 나란히 있는 이유", "guide-project-layout.html#guide-project-layout-why-shadow-is-a-sibling-of-runtime", null ],
      [ "구조 버전", "guide-project-layout.html#guide-project-layout-structure-version", null ]
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
    [ "화면", "guide-screens.html", [
      [ "카메라", "guide-screens.html#autotoc_md17", null ],
      [ "각 화면에 보이는 것", "guide-screens.html#autotoc_md18", null ],
      [ "화면에 고정하기", "guide-screens.html#autotoc_md19", null ],
      [ "레시피", "guide-screens.html#autotoc_md20", null ],
      [ "미리보기", "guide-screens.html#autotoc_md21", null ],
      [ "색상 포맷", "guide-screens.html#autotoc_md22", null ],
      [ "장치에서", "guide-screens.html#autotoc_md23", null ]
    ] ],
    [ "스프라이트 시스템", "guide-sprite-system.html", [
      [ "개요", "guide-sprite-system.html#guide-sprite-system-overview", null ],
      [ "GUID 생성", "guide-sprite-system.html#guide-sprite-system-guid-generation", null ],
      [ ".tex 파일 형식 (2DTX)", "guide-sprite-system.html#guide-sprite-system-tex-file-format-2dtx", [
        [ "Sprite 청크 (타입 1)", "guide-sprite-system.html#guide-sprite-system-sprite-chunk-type-1", null ],
        [ "FrameList 청크 (타입 2)", "guide-sprite-system.html#guide-sprite-system-framelist-chunk-type-2", null ],
        [ "SourceSize 청크 (타입 4)", "guide-sprite-system.html#guide-sprite-system-sourcesize-chunk-type-4", null ]
      ] ],
      [ ".data 사이드카 파일", "guide-sprite-system.html#guide-sprite-system-data-sidecar-file", null ],
      [ "임포트 파이프라인: TextureImporter", "guide-sprite-system.html#guide-sprite-system-import-pipeline-textureimporter", [
        [ "2단계 임포트", "guide-sprite-system.html#guide-sprite-system-two-pass-import", null ],
        [ "SubAsset 생성", "guide-sprite-system.html#guide-sprite-system-subasset-generation", null ],
        [ "프레임 데이터 레지스트리", "guide-sprite-system.html#guide-sprite-system-frame-data-registry", null ]
      ] ],
      [ "스프라이트의 AssetRef 필드", "guide-sprite-system.html#guide-sprite-system-assetref-fields-for-sprites", [
        [ "guid = 부모, source = 프레임인 이유", "guide-sprite-system.html#guide-sprite-system-why-guid--parent-source--frame", null ],
        [ "일반 스프라이트(프레임 없음)의 경우", "guide-sprite-system.html#guide-sprite-system-for-plain-sprites-no-frames", null ]
      ] ],
      [ "프레임 결정 흐름", "guide-sprite-system.html#guide-sprite-system-frame-resolution-flow", [
        [ "생성된 ResolveObjectRefs", "guide-sprite-system.html#guide-sprite-system-generated-resolveobjectrefs", null ],
        [ "FindFrame", "guide-sprite-system.html#guide-sprite-system-findframe", null ]
      ] ],
      [ "에디터에서의 지정", "guide-sprite-system.html#guide-sprite-system-assignment-in-editor", null ],
      [ "GUID 등록 (에디터)", "guide-sprite-system.html#guide-sprite-system-guid-registration-editor", null ],
      [ "익스포트 파이프라인", "guide-sprite-system.html#guide-sprite-system-export-pipeline", null ],
      [ "비교: 폰트와 스프라이트", "guide-sprite-system.html#guide-sprite-system-comparison-fonts-vs-sprites", null ],
      [ "주요 파일", "guide-sprite-system.html#guide-sprite-system-key-files", null ]
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
    [ "단위", "guide-units.html", [
      [ "규칙", "guide-units.html#guide-units-the-rule", null ],
      [ "저장되는 것", "guide-units.html#guide-units-what-is-stored", [
        [ "시간에 두 가지 규약이 있는 이유", "guide-units.html#guide-units-why-time-has-two-conventions", null ]
      ] ],
      [ "데이터시트는 SI를 쓰지 않으며, 그래도 괜찮습니다", "guide-units.html#guide-units-datasheets-do-not-use-si-and-that-is-fine", null ],
      [ "표시 변환", "guide-units.html#guide-units-display-conversion", null ],
      [ "프로퍼티에 단위 추가하기", "guide-units.html#guide-units-adding-a-unit-to-a-property", null ]
    ] ],
    [ "프로젝트 설정", "settings.html", [
      [ "엔진 섹션", "settings.html#engine-sections", [
        [ "코어 설정", "settings.html#settings-core-settings", null ],
        [ "단위 설정", "settings.html#settings-units-settings", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"engine-core.html"
];

const SYNCONMSG = '패널 동기화를 비활성화하기 위해 클릭하십시오';
const SYNCOFFMSG = '패널 동기화를 활성화하기 위해 클릭하십시오';
const LISTOFALLMEMBERS = '모든 멤버 목록';