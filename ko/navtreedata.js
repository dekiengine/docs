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
    [ "언어", "guide-localization.html", [
      [ "테이블 번역하기", "guide-localization.html#guide-localization-translating-a-table", null ],
      [ "코드에서 텍스트 표시하기", "guide-localization.html#guide-localization-showing-text-in-code", null ],
      [ "패키지 고유의 이름", "guide-localization.html#guide-localization-a-packages-own-names", null ],
      [ "폰트", "guide-localization.html#guide-localization-fonts", null ]
    ] ],
    [ "메모리", "guide-memory.html", [
      [ "규칙", "guide-memory.html#guide-memory-the-rule", null ],
      [ "<span class=\"tt\">Deki::Buffer&lt;T&gt;</span> - 이것을 사용하십시오", "guide-memory.html#guide-memory-dekibuffert---use-this", [
        [ "아레나를 쓰지 않는 이유", "guide-memory.html#guide-memory-why-not-an-arena", null ]
      ] ],
      [ "영역 - 매번 직접 고릅니다", "guide-memory.html#guide-memory-regions---you-choose-every-time", [
        [ "영역은 이름이므로 패키지가 직접 추가할 수 있습니다", "guide-memory.html#guide-memory-a-region-is-a-name-so-packages-can-add-their-own", null ],
        [ "영역을 제공하는 것은 보드의 일입니다", "guide-memory.html#guide-memory-serving-one-is-the-boards-job", null ],
        [ "영역 이름은 케이퍼빌리티 이름입니다", "guide-memory.html#guide-memory-the-region-name-is-the-capability-name", null ],
        [ "배치는 한 번에 결정됩니다. 대체는 없습니다.", "guide-memory.html#guide-memory-placement-resolves-once-there-is-no-fallback", null ]
      ] ],
      [ "나머지 API", "guide-memory.html#guide-memory-the-rest-of-the-api", [
        [ "메모리가 어디에 쓰였는지 알아내기", "guide-memory.html#guide-memory-finding-out-where-the-memory-went", null ]
      ] ],
      [ "<span class=\"tt\">AllocContext</span> - 레이블은 저절로 작성됩니다", "guide-memory.html#guide-memory-alloccontext---the-label-writes-itself", [
        [ "제거하기", "guide-memory.html#guide-memory-stripping-it", null ]
      ] ],
      [ "<span class=\"tt\">Deki::Vector&lt;T&gt;</span> - 런타임에 개수가 바뀔 때", "guide-memory.html#guide-memory-dekivectort---when-the-count-changes-at-runtime", [
        [ "<span class=\"tt\">std::vector</span>, <span class=\"tt\">std::string</span>, 일반 <span class=\"tt\">new</span>", "guide-memory.html#guide-memory-stdvector-stdstring-and-plain-new", null ]
      ] ],
      [ "플랫폼 계층: <span class=\"tt\">IMemoryProvider</span>", "guide-memory.html#guide-memory-platform-layer-imemoryprovider", null ],
      [ "린트", "guide-memory.html#guide-memory-the-lint", null ]
    ] ],
    [ "플랫폼", "guide-platforms.html", [
      [ "플랫폼이란", "guide-platforms.html#guide-platforms-what-a-platform-is", null ],
      [ "에셋이 놓이는 곳", "guide-platforms.html#guide-platforms-where-the-assets-go", null ],
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
    [ "화면", "guide-screens.html", [
      [ "카메라", "guide-screens.html#guide-screens-the-camera", null ],
      [ "각 화면에 보이는 것", "guide-screens.html#guide-screens-what-each-screen-sees", null ],
      [ "화면에 고정하기", "guide-screens.html#guide-screens-pinning-to-the-screen", null ],
      [ "레시피", "guide-screens.html#guide-screens-recipes", null ],
      [ "미리보기", "guide-screens.html#guide-screens-previewing", null ],
      [ "색상 포맷", "guide-screens.html#guide-screens-colour-formats", null ],
      [ "장치에서", "guide-screens.html#guide-screens-on-the-device", null ]
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