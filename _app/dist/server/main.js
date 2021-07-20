"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var pinia = require("pinia");
var head = require("@vueuse/head");
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var vueRouter = require("vue-router");
var devalue = require("@nuxt/devalue");
var axios = require("axios");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var devalue__default = /* @__PURE__ */ _interopDefaultLegacy(devalue);
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
var windi = `/* windicss layer base */
*, ::before, ::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}
* {
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
}
:root {
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}
:-moz-focusring {
  outline: 1px dotted ButtonText;
}
:-moz-ui-invalid {
  box-shadow: none;
}
::moz-focus-inner {
  border-style: none;
  padding: 0;
}
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
a {
  color: inherit;
  text-decoration: inherit;
}
body {
  margin: 0;
  font-family: inherit;
  line-height: inherit;
}
html {
  -webkit-text-size-adjust: 100%;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  line-height: 1.5;
}
h4, h3 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}
img {
  border-style: solid;
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}
small {
  font-size: 80%;
}
/* windicss layer components */

/* windicss layer utilities */
.bg-light-200 {
  --tw-bg-opacity: 1;
  background-color: rgba(250, 250, 250, var(--tw-bg-opacity));
}
.bg-gradient-2 {
  background-image: linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%);
}
.border-light-600 {
  --tw-border-opacity: 1;
  border-color: rgba(241, 243, 245, var(--tw-border-opacity));
}
.rounded-15px {
  border-radius: 15px;
}
.cursor-pointer {
  cursor: pointer;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.flex-row {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.flex-col {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.flex-wrap {
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.justify-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.flex-shrink-0 {
  -ms-flex-negative: 0;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}
.font-bold {
  font-weight: 700;
}
.h-full {
  height: 100%;
}
.h-50px {
  height: 50px;
}
.h-150px {
  height: 150px;
}
.m-3 {
  margin: 0.75rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.object-center {
  -o-object-position: center;
  object-position: center;
}
.overflow-hidden {
  overflow: hidden;
}
.p-2 {
  padding: 0.5rem;
}
.p-1 {
  padding: 0.25rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.pb-2 {
  padding-bottom: 0.5rem;
}
.text-center {
  text-align: center;
}
.text-dark-500 {
  --tw-text-opacity: 1;
  color: rgba(31, 31, 31, var(--tw-text-opacity));
}
.w-full {
  width: 100%;
}
.w-350px {
  width: 350px;
}
.hover\\:z-40:hover {
  z-index: 40;
}
.transform {
  --tw-rotate: 0;
  --tw-rotate-x: 0;
  --tw-rotate-y: 0;
  --tw-rotate-z: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scale-z: 1;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-translate-z: 0;
  -webkit-transform: rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z));
  -ms-transform: rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z));
  transform: rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z));
}
.hover\\:scale-105:hover {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  --tw-scale-z: 1.05;
}
.transition-all {
  -webkit-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition-duration: 150ms;
  -o-transition-duration: 150ms;
  transition-duration: 150ms;
}`;
const S = "/";
function withPrefix(string, prefix) {
  return string.startsWith(prefix) ? string : prefix + string;
}
function withoutPrefix(string, prefix) {
  return string.startsWith(prefix) ? string.slice(prefix.length) : string;
}
function withoutSuffix(string, suffix) {
  return string.endsWith(suffix) ? string.slice(0, -1 * suffix.length) : string + suffix;
}
function createUrl(urlLike) {
  if (urlLike instanceof URL) {
    return urlLike;
  }
  if (!(urlLike || "").includes("://")) {
    urlLike = "http://e.g" + withPrefix(urlLike, S);
  }
  return new URL(urlLike);
}
function getFullPath(url, routeBase) {
  url = typeof url === "string" ? createUrl(url) : url;
  let fullPath = withoutPrefix(url.href, url.origin);
  if (routeBase) {
    const parts = fullPath.split(S);
    if (parts[1] === routeBase.replace(/\//g, "")) {
      parts.splice(1, 1);
    }
    fullPath = parts.join(S);
  }
  return fullPath;
}
function findDependencies(modules, manifest) {
  const files = new Set();
  for (const id of modules || []) {
    for (const file of manifest[id] || []) {
      files.add(file);
    }
  }
  return [...files];
}
function renderPreloadLinks(files) {
  let link = "";
  for (const file of files || []) {
    if (file.endsWith(".js")) {
      link += `<link rel="modulepreload" crossorigin href="${file}">`;
    } else if (file.endsWith(".css")) {
      link += `<link rel="stylesheet" href="${file}">`;
    }
  }
  return link;
}
function defer() {
  const deferred = { status: "pending" };
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = (value) => {
      deferred.status = "resolved";
      return resolve(value);
    };
    deferred.reject = (error) => {
      deferred.status = "rejected";
      return reject(error);
    };
  });
  return deferred;
}
const isRedirect = ({ status = 0 }) => status >= 300 && status < 400;
function useSsrResponse() {
  const deferred = defer();
  let response = {};
  const writeResponse = (params) => {
    Object.assign(response, params);
    if (isRedirect(params)) {
      deferred.resolve("");
    }
  };
  return {
    deferred,
    response,
    writeResponse,
    isRedirect: () => isRedirect(response),
    redirect: (location, status = 302) => writeResponse({ headers: { location }, status })
  };
}
const UNSAFE_CHARS_REGEXP = /[<>\/\u2028\u2029]/g;
const ESCAPED_CHARS = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escapeUnsafeChars(unsafeChar) {
  return ESCAPED_CHARS[unsafeChar];
}
function serializeState(state) {
  try {
    return JSON.stringify(JSON.stringify(state || {})).replace(UNSAFE_CHARS_REGEXP, escapeUnsafeChars);
  } catch (error) {
    console.error("[SSR] On state serialization -", error, state);
    return "{}";
  }
}
function addPagePropsGetterToRoutes(routes2) {
  routes2.forEach((staticRoute) => {
    const originalProps = staticRoute.props;
    staticRoute.props = (route) => {
      const resolvedProps = originalProps === true ? route.params : typeof originalProps === "function" ? originalProps(route) : originalProps;
      return __spreadValues(__spreadValues(__spreadValues({}, (route.meta.hmr || {}).value), route.meta.state || {}), resolvedProps || {});
    };
  });
}
vue.defineComponent({
  name: "ClientOnly",
  setup(_, { slots }) {
    const show = vue.ref(false);
    vue.onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
const CONTEXT_SYMBOL = Symbol();
function provideContext(app, context) {
  app.provide(CONTEXT_SYMBOL, context);
}
function useContext() {
  return vue.inject(CONTEXT_SYMBOL);
}
const viteSSR = function viteSSR2(App, { routes: routes2, base, routerOptions = {}, pageProps = { passToPage: true }, transformState = serializeState }, hook) {
  if (pageProps && pageProps.passToPage) {
    addPagePropsGetterToRoutes(routes2);
  }
  return function(_0) {
    return __async(this, arguments, function* (url, _a = {}) {
      var _b = _a, { manifest, preload = false } = _b, extra = __objRest(_b, ["manifest", "preload"]);
      const app = vue.createSSRApp(App);
      url = createUrl(url);
      const routeBase = base && withoutSuffix(base({ url }), "/");
      const router = vueRouter.createRouter(__spreadProps(__spreadValues({}, routerOptions), {
        history: vueRouter.createMemoryHistory(routeBase),
        routes: routes2
      }));
      const { deferred, response, writeResponse, redirect, isRedirect: isRedirect2 } = useSsrResponse();
      const context = __spreadValues({
        url,
        isClient: false,
        initialState: {},
        redirect,
        writeResponse
      }, extra);
      provideContext(app, context);
      const fullPath = getFullPath(url, routeBase);
      const { head: head$1 } = hook && (yield hook(__spreadValues({
        app,
        router,
        initialRoute: router.resolve(fullPath)
      }, context))) || {};
      app.use(router);
      router.push(fullPath);
      yield router.isReady();
      if (isRedirect2())
        return response;
      Object.assign(context.initialState || {}, (router.currentRoute.value.meta || {}).state || {});
      serverRenderer.renderToString(app, context).then(deferred.resolve).catch(deferred.reject);
      const body = yield deferred.promise;
      if (isRedirect2())
        return response;
      let { headTags = "", htmlAttrs = "", bodyAttrs = "" } = head$1 ? head.renderHeadToString(head$1) : {};
      const dependencies = manifest ? findDependencies(context.modules, manifest) : [];
      if (preload && dependencies.length > 0) {
        headTags += renderPreloadLinks(dependencies);
      }
      const initialState = yield transformState(context.initialState || {}, serializeState);
      return __spreadValues({
        html: `<!DOCTYPE html>
<html ${htmlAttrs}  lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  <script type="module" crossorigin src="/assets/index.0cf4e35f.js"><\/script>
  <link rel="modulepreload" href="/assets/vendor.4b985b3d.js">
  <link rel="stylesheet" href="/assets/index.927d3afd.css">
${headTags}
</head>
  <body ${bodyAttrs} >
    <div id="app" data-server-rendered="true">${body}</div>

<script>window.__INITIAL_STATE__=${initialState}<\/script>
    
  </body>
</html>
`,
        htmlAttrs,
        headTags,
        body,
        bodyAttrs,
        initialState,
        dependencies
      }, response);
    });
  };
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => Promise.resolve().then(function() {
      return Home;
    })
  },
  {
    path: "/products",
    name: "Products",
    component: () => Promise.resolve().then(function() {
      return Products;
    })
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => Promise.resolve().then(function() {
      return Product;
    })
  }
];
var _sfc_main$4 = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      meta: [{ name: "og:site_name", content: "Vite SSR Example Project" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_RouterView = vue.resolveComponent("RouterView");
      _push(`<!--[--><div id="navbar">`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
        class: "link",
        to: { name: "Home" }
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              vue.createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
        class: "link",
        to: { name: "Products" }
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Products`);
          } else {
            return [
              vue.createTextVNode("Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div id="app-body">`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterView, null, {
        default: vue.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSuspense(_push2, {
              default: () => {
                serverRenderer.ssrRenderVNode(_push2, vue.createVNode(vue.resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
              },
              _: 2
            });
          } else {
            return [
              (vue.openBlock(), vue.createBlock(vue.Suspense, null, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
var App_vue_vue_type_style_index_0_lang = "#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n#app #navbar {\n  background-image: linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  height: 50px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  --tw-shadow-color: 0, 0, 0;\n  --tw-shadow: 0 1px 3px 0 rgba(var(--tw-shadow-color), 0.1), 0 1px 2px 0 rgba(var(--tw-shadow-color), 0.06);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  width: 100%;\n}\n#app #app-body {\n  padding: 0.75rem;\n}\n.link {\n  padding: 0.5rem;\n  --tw-text-opacity: 1;\n  color: rgba(31, 31, 31, var(--tw-text-opacity));\n}\n.link:hover {\n  --tw-text-opacity: 1;\n  color: rgba(91, 33, 182, var(--tw-text-opacity));\n}\n.link.router-link-active {\n  font-weight: 700;\n}";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Options = {
  routes,
  pageProps: {
    passToPage: false
  },
  transformState(state) {
    return devalue__default["default"](state);
  }
};
var main = viteSSR(_sfc_main$4, Options, (params) => __async(this, null, function* () {
  const { app, initialState, isClient, router } = params;
  const head$1 = head.createHead();
  const pinia$1 = pinia.createPinia();
  app.use(pinia$1).use(head$1);
  if (isClient) {
    pinia$1.state.value = initialState.pinia;
  } else {
    initialState.pinia = pinia$1.state.value;
  }
  return {
    head: head$1
  };
}));
const useAppStore = pinia.defineStore({
  id: "appStore",
  state: () => ({
    dataFrom: "client"
  })
});
var _sfc_main$3 = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    head.useHead({
      title: "Home"
    });
    vue.onServerPrefetch(() => {
      appStore.dataFrom = "server";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-center">Vite SSR Example Project</div><div>Message From: ${serverRenderer.ssrInterpolate(vue.unref(appStore).dataFrom)}</div><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$3
});
function useAsyncData(key, location, config) {
  return __async(this, null, function* () {
    const { isClient, initialState } = useContext();
    const responseValue = vue.ref(initialState[key] || null);
    const request = () => axios__default["default"].get(location, config == null ? void 0 : config.axiosConfig);
    const handler = (type) => __async(this, null, function* () {
      try {
        const { data } = yield request();
        responseValue.value = data;
        if (type === "server")
          initialState[key] = data;
      } catch (error) {
        throw error;
      }
    });
    const removeState = () => {
      if (isClient)
        initialState[key] = null;
    };
    vue.onUnmounted(removeState);
    vue.onDeactivated(removeState);
    if (!isClient) {
      yield handler("server");
    } else {
      if (initialState[key])
        responseValue.value = initialState[key];
      else {
        const fn = () => __async(this, null, function* () {
          return yield handler("client");
        });
        if (config == null ? void 0 : config.awaitSetup)
          yield fn();
        else
          vue.onMounted(fn);
      }
    }
    return responseValue;
  });
}
const _withId = /* @__PURE__ */ vue.withScopeId("data-v-b84d0176");
var _sfc_main$2 = vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    product: { type: Object, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
        to: { name: "Product", params: { id: __props.product.id } },
        class: "card"
      }, _attrs), {
        default: _withId((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-img" data-v-b84d0176${_scopeId}><img loading="lazy"${serverRenderer.ssrRenderAttr("src", __props.product.image)} alt="image of card" data-v-b84d0176${_scopeId}></div><div class="card-body" data-v-b84d0176${_scopeId}><h4 class="card-title text-center" data-v-b84d0176${_scopeId}>${serverRenderer.ssrInterpolate(__props.product.title)}</h4><small class="card-detail" data-v-b84d0176${_scopeId}>${serverRenderer.ssrInterpolate(__props.product.description)}</small><div class="card-price" data-v-b84d0176${_scopeId}>${serverRenderer.ssrInterpolate(__props.product.price)}$</div></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "card-img" }, [
                vue.createVNode("img", {
                  loading: "lazy",
                  src: __props.product.image,
                  alt: "image of card"
                }, null, 8, ["src"])
              ]),
              vue.createVNode("div", { class: "card-body" }, [
                vue.createVNode("h4", { class: "card-title text-center" }, vue.toDisplayString(__props.product.title), 1),
                vue.createVNode("small", { class: "card-detail" }, vue.toDisplayString(__props.product.description), 1),
                vue.createVNode("div", { class: "card-price" }, vue.toDisplayString(__props.product.price) + "$", 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
var Card_vue_vue_type_style_index_0_scoped_true_lang = ".card[data-v-b84d0176] {\n  --tw-border-opacity: 1;\n  border-color: rgba(241, 243, 245, var(--tw-border-opacity));\n  border-radius: 15px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  margin: 0.75rem;\n  overflow: hidden;\n  text-align: left;\n  width: 350px;\n  --tw-rotate: 0;\n  --tw-rotate-x: 0;\n  --tw-rotate-y: 0;\n  --tw-rotate-z: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-scale-z: 1;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-translate-z: 0;\n  -webkit-transform: rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z));\n  -ms-transform: rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z));\n  transform: rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z));\n  -webkit-transition-property: all;\n  -o-transition-property: all;\n  transition-property: all;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 150ms;\n  -o-transition-duration: 150ms;\n  transition-duration: 150ms;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);\n}\n.card[data-v-b84d0176]:hover {\n  z-index: 40;\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  --tw-scale-z: 1.05;\n}\n.card .card-img[data-v-b84d0176] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n  height: 150px;\n  overflow: hidden;\n  padding: 0.25rem;\n}\n.card .card-img img[data-v-b84d0176] {\n  height: 100%;\n  -o-object-fit: fill;\n  object-fit: fill;\n  -o-object-position: center;\n  object-position: center;\n}\n.card .card-body[data-v-b84d0176] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(250, 250, 250, var(--tw-bg-opacity));\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  height: 100%;\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  box-shadow: 0px -3px 3px -3px rgba(0, 0, 0, 0.2);\n}\n.card .card-body .card-title[data-v-b84d0176] {\n  font-weight: 700;\n  padding-bottom: 0.5rem;\n}\n.card .card-body .card-detail[data-v-b84d0176] {\n  height: 100%;\n}\n.card .card-body .card-price[data-v-b84d0176] {\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgba(96, 165, 250, var(--tw-text-opacity));\n}";
_sfc_main$2.__scopeId = "data-v-b84d0176";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var _sfc_main$1 = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return __async(this, null, function* () {
      let __temp, __restore;
      head.useHead({
        title: "Products"
      });
      const productData = ([__temp, __restore] = vue.withAsyncContext(() => useAsyncData("productsData", "https://fakestoreapi.com/products/", {
        axiosConfig: {},
        awaitSetup: false
      })), __temp = yield __temp, __restore(), __temp);
      return (_ctx, _push, _parent, _attrs) => {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "flex flex-row flex-wrap px-10 justify-center" }, _attrs))}>`);
        if (vue.unref(productData)) {
          _push(`<!--[-->`);
          serverRenderer.ssrRenderList(vue.unref(productData), (product) => {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$2, {
              key: product.id,
              product
            }, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<h3>Loading...</h3>`);
        }
        _push(`</div>`);
      };
    });
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/Products.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Products = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
var _sfc_main = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return __async(this, null, function* () {
      var _a, _b, _c;
      let __temp, __restore;
      const route = vueRouter.useRoute();
      const productData = ([__temp, __restore] = vue.withAsyncContext(() => useAsyncData(`product-${route.params.id || "data"}`, `https://fakestoreapi.com/products/${route.params.id}`)), __temp = yield __temp, __restore(), __temp);
      head.useHead({
        meta: [
          { name: "og:description", content: (_a = productData.value) == null ? void 0 : _a.description },
          { name: "og:image", content: (_b = productData.value) == null ? void 0 : _b.image },
          { name: "og:title", content: (_c = productData.value) == null ? void 0 : _c.title }
        ]
      });
      return (_ctx, _push, _parent, _attrs) => {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "flex flex-row flex-wrap px-10 justify-center" }, _attrs))}>`);
        if (vue.unref(productData)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$2, {
            style: { "width": "100%" },
            key: vue.unref(productData).id,
            product: vue.unref(productData)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      };
    });
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Product = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.default = main;
