import {
  storage
} from "./chunks/chunk-IVUOQINV.js";
import "./chunks/chunk-QZOHZZHT.js";
import "./chunks/chunk-W7NC74ZX.js";

// front/node_modules/@webreflection/mapset/esm/index.js
var MapSet = class extends Map {
  set(key, value) {
    super.set(key, value);
    return value;
  }
};
var WeakMapSet = class extends WeakMap {
  set(key, value) {
    super.set(key, value);
    return value;
  }
};

// front/node_modules/@webreflection/uparser/esm/index.js
var empty = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
var elements = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/?)>/g;
var attributes = /([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g;
var holes = /[\x01\x02]/g;
var esm_default = (template, prefix2, svg2) => {
  let i = 0;
  return template.join("").trim().replace(
    elements,
    (_, name, attrs, selfClosing) => {
      let ml = name + attrs.replace(attributes, "=$2$1").trimEnd();
      if (selfClosing.length)
        ml += svg2 || empty.test(name) ? " /" : "></" + name;
      return "<" + ml + ">";
    }
  ).replace(
    holes,
    (hole) => hole === "" ? "<!--" + prefix2 + i++ + "-->" : prefix2 + i++
  );
};

// front/node_modules/@webreflection/uwire/esm/index.js
var ELEMENT_NODE = 1;
var nodeType = 111;
var remove = ({ firstChild, lastChild }) => {
  const range = document.createRange();
  range.setStartAfter(firstChild);
  range.setEndAfter(lastChild);
  range.deleteContents();
  return firstChild;
};
var diffable = (node, operation) => node.nodeType === nodeType ? 1 / operation < 0 ? operation ? remove(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node;
var persistent = (fragment) => {
  const { firstChild, lastChild } = fragment;
  if (firstChild === lastChild)
    return lastChild || fragment;
  const { childNodes } = fragment;
  const nodes = [...childNodes];
  return {
    ELEMENT_NODE,
    nodeType,
    firstChild,
    lastChild,
    valueOf() {
      if (childNodes.length !== nodes.length)
        fragment.append(...nodes);
      return fragment;
    }
  };
};

// front/node_modules/uarray/esm/index.js
var { isArray } = Array;
var { indexOf, slice } = [];

// front/node_modules/uhandlers/esm/index.js
var useForeign = false;
var Foreign = class {
  constructor(handler, value) {
    useForeign = true;
    this._ = (...args) => handler(...args, value);
  }
};
var aria = (node) => (values) => {
  for (const key in values) {
    const name = key === "role" ? key : `aria-${key}`;
    const value = values[key];
    if (value == null)
      node.removeAttribute(name);
    else
      node.setAttribute(name, value);
  }
};
var getValue = (value) => value == null ? value : value.valueOf();
var attribute = (node, name) => {
  let oldValue, orphan = true;
  const attributeNode = document.createAttributeNS(null, name);
  return (newValue) => {
    const value = useForeign && newValue instanceof Foreign ? newValue._(node, name) : getValue(newValue);
    if (oldValue !== value) {
      if ((oldValue = value) == null) {
        if (!orphan) {
          node.removeAttributeNode(attributeNode);
          orphan = true;
        }
      } else {
        attributeNode.value = value;
        if (orphan) {
          node.setAttributeNodeNS(attributeNode);
          orphan = false;
        }
      }
    }
  };
};
var boolean = (node, key, oldValue) => (newValue) => {
  const value = !!getValue(newValue);
  if (oldValue !== value) {
    if (oldValue = value)
      node.setAttribute(key, "");
    else
      node.removeAttribute(key);
  }
};
var data = ({ dataset }) => (values) => {
  for (const key in values) {
    const value = values[key];
    if (value == null)
      delete dataset[key];
    else
      dataset[key] = value;
  }
};
var event = (node, name) => {
  let oldValue, lower, type = name.slice(2);
  if (!(name in node) && (lower = name.toLowerCase()) in node)
    type = lower.slice(2);
  return (newValue) => {
    const info = isArray(newValue) ? newValue : [newValue, false];
    if (oldValue !== info[0]) {
      if (oldValue)
        node.removeEventListener(type, oldValue, info[1]);
      if (oldValue = info[0])
        node.addEventListener(type, oldValue, info[1]);
    }
  };
};
var ref = (node) => {
  let oldValue;
  return (value) => {
    if (oldValue !== value) {
      oldValue = value;
      if (typeof value === "function")
        value(node);
      else
        value.current = node;
    }
  };
};
var setter = (node, key) => key === "dataset" ? data(node) : (value) => {
  node[key] = value;
};
var text = (node) => {
  let oldValue;
  return (newValue) => {
    const value = getValue(newValue);
    if (oldValue != value) {
      oldValue = value;
      node.textContent = value == null ? "" : value;
    }
  };
};

// front/node_modules/udomdiff/esm/index.js
var esm_default2 = (parentNode, a, b, get, before) => {
  const bLength = b.length;
  let aEnd = a.length;
  let bEnd = bLength;
  let aStart = 0;
  let bStart = 0;
  let map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;
      while (bStart < bEnd)
        parentNode.insertBefore(get(b[bStart++], 1), node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart]))
          parentNode.removeChild(get(a[aStart], -1));
        aStart++;
      }
    } else if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
    } else if (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = get(a[--aEnd], -1).nextSibling;
      parentNode.insertBefore(
        get(b[bStart++], 1),
        get(a[aStart++], -1).nextSibling
      );
      parentNode.insertBefore(get(b[--bEnd], 1), node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = /* @__PURE__ */ new Map();
        let i = bStart;
        while (i < bEnd)
          map.set(b[i], i++);
      }
      if (map.has(a[aStart])) {
        const index = map.get(a[aStart]);
        if (bStart < index && index < bEnd) {
          let i = aStart;
          let sequence = 1;
          while (++i < aEnd && i < bEnd && map.get(a[i]) === index + sequence)
            sequence++;
          if (sequence > index - bStart) {
            const node = get(a[aStart], 0);
            while (bStart < index)
              parentNode.insertBefore(get(b[bStart++], 1), node);
          } else {
            parentNode.replaceChild(
              get(b[bStart++], 1),
              get(a[aStart++], -1)
            );
          }
        } else
          aStart++;
      } else
        parentNode.removeChild(get(a[aStart++], -1));
    }
  }
  return b;
};

// front/node_modules/uhtml/esm/utils.js
var { isArray: isArray2, prototype } = Array;
var { indexOf: indexOf2 } = prototype;
var {
  createDocumentFragment,
  createElement,
  createElementNS,
  createTextNode,
  createTreeWalker,
  importNode
} = new Proxy({}, {
  get: (_, method) => document[method].bind(document)
});
var createHTML = (html2) => {
  const template = createElement("template");
  template.innerHTML = html2;
  return template.content;
};
var xml;
var createSVG = (svg2) => {
  if (!xml) xml = createElementNS("http://www.w3.org/2000/svg", "svg");
  xml.innerHTML = svg2;
  const content = createDocumentFragment();
  content.append(...xml.childNodes);
  return content;
};
var createContent = (text2, svg2) => svg2 ? createSVG(text2) : createHTML(text2);

// front/node_modules/uhtml/esm/handlers.js
var reducePath = ({ childNodes }, i) => childNodes[i];
var diff = (comment, oldNodes, newNodes) => esm_default2(
  comment.parentNode,
  // TODO: there is a possible edge case where a node has been
  //       removed manually, or it was a keyed one, attached
  //       to a shared reference between renders.
  //       In this case udomdiff might fail at removing such node
  //       as its parent won't be the expected one.
  //       The best way to avoid this issue is to filter oldNodes
  //       in search of those not live, or not in the current parent
  //       anymore, but this would require both a change to uwire,
  //       exposing a parentNode from the firstChild, as example,
  //       but also a filter per each diff that should exclude nodes
  //       that are not in there, penalizing performance quite a lot.
  //       As this has been also a potential issue with domdiff,
  //       and both lighterhtml and hyperHTML might fail with this
  //       very specific edge case, I might as well document this possible
  //       "diffing shenanigan" and call it a day.
  oldNodes,
  newNodes,
  diffable,
  comment
);
var handleAnything = (comment) => {
  let oldValue, text2, nodes = [];
  const anyContent = (newValue) => {
    switch (typeof newValue) {
      case "string":
      case "number":
      case "boolean":
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (!text2)
            text2 = createTextNode("");
          text2.data = newValue;
          nodes = diff(comment, nodes, [text2]);
        }
        break;
      case "object":
      case "undefined":
        if (newValue == null) {
          if (oldValue != newValue) {
            oldValue = newValue;
            nodes = diff(comment, nodes, []);
          }
          break;
        }
        if (isArray2(newValue)) {
          oldValue = newValue;
          if (newValue.length === 0)
            nodes = diff(comment, nodes, []);
          else if (typeof newValue[0] === "object")
            nodes = diff(comment, nodes, newValue);
          else
            anyContent(String(newValue));
          break;
        }
        if (oldValue !== newValue) {
          if ("ELEMENT_NODE" in newValue) {
            oldValue = newValue;
            nodes = diff(
              comment,
              nodes,
              newValue.nodeType === 11 ? [...newValue.childNodes] : [newValue]
            );
          } else {
            const value = newValue.valueOf();
            if (value !== newValue)
              anyContent(value);
          }
        }
        break;
      case "function":
        anyContent(newValue(comment));
        break;
    }
  };
  return anyContent;
};
var handleAttribute = (node, name) => {
  switch (name[0]) {
    case "?":
      return boolean(node, name.slice(1), false);
    case ".":
      return setter(node, name.slice(1));
    case "@":
      return event(node, "on" + name.slice(1));
    case "o":
      if (name[1] === "n") return event(node, name);
  }
  switch (name) {
    case "ref":
      return ref(node);
    case "aria":
      return aria(node);
  }
  return attribute(
    node,
    name
    /*, svg*/
  );
};
function handlers(options) {
  const { type, path } = options;
  const node = path.reduceRight(reducePath, this);
  return type === "node" ? handleAnything(node) : type === "attr" ? handleAttribute(
    node,
    options.name
    /*, options.svg*/
  ) : text(node);
}

// front/node_modules/uhtml/esm/rabbit.js
var createPath = (node) => {
  const path = [];
  let { parentNode } = node;
  while (parentNode) {
    path.push(indexOf2.call(parentNode.childNodes, node));
    node = parentNode;
    ({ parentNode } = node);
  }
  return path;
};
var prefix = "isµ";
var cache = new WeakMapSet();
var textOnly = /^(?:textarea|script|style|title|plaintext|xmp)$/;
var createCache = () => ({
  stack: [],
  // each template gets a stack for each interpolation "hole"
  entry: null,
  // each entry contains details, such as:
  //  * the template that is representing
  //  * the type of node it represents (html or svg)
  //  * the content fragment with all nodes
  //  * the list of updates per each node (template holes)
  //  * the "wired" node or fragment that will get updates
  // if the template or type are different from the previous one
  // the entry gets re-created each time
  wire: null
  // each rendered node represent some wired content and
  // this reference to the latest one. If different, the node
  // will be cleaned up and the new "wire" will be appended
});
var createEntry = (type, template) => {
  const { content, updates } = mapUpdates(type, template);
  return { type, template, content, updates, wire: null };
};
var mapTemplate = (type, template) => {
  const svg2 = type === "svg";
  const text2 = esm_default(template, prefix, svg2);
  const content = createContent(text2, svg2);
  const tw = createTreeWalker(content, 1 | 128);
  const nodes = [];
  const length = template.length - 1;
  let i = 0;
  let search = `${prefix}${i}`;
  while (i < length) {
    const node = tw.nextNode();
    if (!node)
      throw `bad template: ${text2}`;
    if (node.nodeType === 8) {
      if (node.data === search) {
        nodes.push({ type: "node", path: createPath(node) });
        search = `${prefix}${++i}`;
      }
    } else {
      while (node.hasAttribute(search)) {
        nodes.push({
          type: "attr",
          path: createPath(node),
          name: node.getAttribute(search)
        });
        node.removeAttribute(search);
        search = `${prefix}${++i}`;
      }
      if (textOnly.test(node.localName) && node.textContent.trim() === `<!--${search}-->`) {
        node.textContent = "";
        nodes.push({ type: "text", path: createPath(node) });
        search = `${prefix}${++i}`;
      }
    }
  }
  return { content, nodes };
};
var mapUpdates = (type, template) => {
  const { content, nodes } = cache.get(template) || cache.set(template, mapTemplate(type, template));
  const fragment = importNode(content, true);
  const updates = nodes.map(handlers, fragment);
  return { content: fragment, updates };
};
var unroll = (info, { type, template, values }) => {
  const length = unrollValues(info, values);
  let { entry } = info;
  if (!entry || (entry.template !== template || entry.type !== type))
    info.entry = entry = createEntry(type, template);
  const { content, updates, wire } = entry;
  for (let i = 0; i < length; i++)
    updates[i](values[i]);
  return wire || (entry.wire = persistent(content));
};
var unrollValues = ({ stack }, values) => {
  const { length } = values;
  for (let i = 0; i < length; i++) {
    const hole = values[i];
    if (hole instanceof Hole)
      values[i] = unroll(
        stack[i] || (stack[i] = createCache()),
        hole
      );
    else if (isArray2(hole))
      unrollValues(stack[i] || (stack[i] = createCache()), hole);
    else
      stack[i] = null;
  }
  if (length < stack.length)
    stack.splice(length);
  return length;
};
var Hole = class {
  constructor(type, template, values) {
    this.type = type;
    this.template = template;
    this.values = values;
  }
};

// front/node_modules/uhtml/esm/index.js
var tag = (type) => {
  const keyed = new WeakMapSet();
  const fixed = (cache3) => (template, ...values) => unroll(
    cache3,
    { type, template, values }
  );
  return Object.assign(
    // non keyed operations are recognized as instance of Hole
    // during the "unroll", recursively resolved and updated
    (template, ...values) => new Hole(type, template, values),
    {
      // keyed operations need a reference object, usually the parent node
      // which is showing keyed results, and optionally a unique id per each
      // related node, handy with JSON results and mutable list of objects
      // that usually carry a unique identifier
      for(ref2, id) {
        const memo = keyed.get(ref2) || keyed.set(ref2, new MapSet());
        return memo.get(id) || memo.set(id, fixed(createCache()));
      },
      // it is possible to create one-off content out of the box via node tag
      // this might return the single created node, or a fragment with all
      // nodes present at the root level and, of course, their child nodes
      node: (template, ...values) => unroll(createCache(), new Hole(type, template, values)).valueOf()
    }
  );
};
var cache2 = new WeakMapSet();
var render = (where, what) => {
  const hole = typeof what === "function" ? what() : what;
  const info = cache2.get(where) || cache2.set(where, createCache());
  const wire = hole instanceof Hole ? unroll(info, hole) : hole;
  if (wire !== info.wire) {
    info.wire = wire;
    where.replaceChildren(wire.valueOf());
  }
  return where;
};
var html = tag("html");
var svg = tag("svg");

// front/src/i18n/translations.js
var translations = {
  "$intro01": {
    "en": "This application allows the verification of COVID certificates issued by EU Member States and also certificates issued by the UK Government with the same format as the EU Digital COVID Certificate",
    "es": "Esta aplicación permite la verificación de certificados COVID emitidos por los Estados Miembro de la UE y también los certificados emitidos por el Reino Unido con el mismo formato que el Certificado COVID Digital de la UE",
    "ca": "Aquesta aplicació permet la verificació dels certificats COVID emesos pels Estats membres de la UE i també els certificats emesos pel Regne Unit en el mateix format que el Certificat COVID digital de la UE",
    "fr": "Cette application permet de vérifier les certificats COVID émis par les États membres de l'UE, ainsi que les certificats émis par le gouvernement britannique sous le même format que le certificat COVID numérique de l'UE.",
    "de": "Diese Anwendung ermöglicht die Überprüfung von COVID-Zertifikaten, die von EU-Mitgliedstaaten ausgestellt wurden, sowie von Zertifikaten, die von der britischen Regierung ausgestellt wurden und dasselbe Format wie das digitale COVID-Zertifikat der EU haben.",
    "it": "Questa applicazione consente di verificare i certificati COVID rilasciati dagli stati membri dell'UE nonché i certificati rilasciati dal governo del Regno Unito con lo stesso formato del certificato digitale COVID UE"
  },
  "EU Digital COVID Credential Verifier": {
    "es": "Verificador de Credenciales COVID",
    "ca": "Verificador de Credencials COVID",
    "fr": "Outil de vérification numérique des justificatifs COVID de l'UE",
    "de": "Digitale COVID-Anmeldeinformationsüberprüfung in der EU",
    "it": "Strumento di verifica del certificato digitale COVID UE"
  }
};

// front/src/i18n/tr.js
var preferredLanguage = "ca";
var l = localStorage.getItem("preferredLanguage");
if (l) {
  preferredLanguage = l;
}
window.preferredLanguage = preferredLanguage;
function T(key) {
  if (window.preferredLanguage === "en" && key.charAt(0) != "$") {
    return key;
  }
  let entry = translations[key];
  if (entry === void 0) {
    return key;
  }
  let translated = entry[window.preferredLanguage];
  if (translated === void 0) {
    return key;
  }
  return translated;
}
window.T = T;

// front/src/app.js
var myerror = storage.myerror;
var mylog = storage.mylog;
var pageModulesMap = window.pageModules;
var parsedUrl = new URL(import.meta.url);
var fullPath = parsedUrl.pathname;
console.log("Fullpath of app:", fullPath);
var basePath = fullPath.substring(0, fullPath.lastIndexOf("/"));
console.log("Base path:", basePath);
if (basePath.length > 1) {
  for (const path in pageModulesMap) {
    pageModulesMap[path] = basePath + pageModulesMap[path];
  }
}
var homePage = window.homePage;
var myAppTitle = window.myAppTitle;
if (!homePage) {
  throw "No homePage was set.";
}
var name404 = "Page404";
var pageNameToClass = /* @__PURE__ */ new Map();
function route(pageName, classInstance) {
  pageNameToClass.set(pageName, classInstance);
}
async function goHome() {
  if (homePage != void 0) {
    await gotoPage(homePage, null);
  }
}
async function gotoPage(pageName, pageData) {
  mylog("Inside gotoPage:", pageName);
  try {
    var pageClass = pageNameToClass.get(pageName);
    if (!pageClass) {
      await import(pageModulesMap[pageName]);
      if (!pageNameToClass.get(pageName)) {
        myerror("Target page does not exist: ", pageName);
        pageData = pageName;
        pageName = name404;
      }
    }
    window.history.pushState(
      { pageName, pageData },
      `${pageName}`
    );
    await processPageEntered(pageNameToClass, pageName, pageData, false);
  } catch (error) {
    myerror(error);
    await processPageEntered(pageNameToClass, "ErrorPage", { title: error.name, msg: error.message }, false);
  }
}
async function processPageEntered(pageNameToClass2, pageName, pageData, historyData) {
  for (let [name, classInstance] of pageNameToClass2) {
    classInstance.domElem.style.display = "none";
    if (name !== pageName && classInstance.exit) {
      try {
        await classInstance.exit();
      } catch (error) {
        myerror(`error calling exit() on ${name}: ${error.name}`);
      }
    }
  }
  let targetPage = pageNameToClass2.get(pageName);
  if (targetPage === void 0) {
    pageData = pageName;
    targetPage = pageNameToClass2.get(name404);
  }
  const content = document.querySelector("ion-content");
  if (content) {
    content.scrollToTop(500);
  } else {
    window.scrollTo(0, 0);
  }
  if (targetPage.enter) {
    await targetPage.enter(pageData, historyData);
  } else {
    targetPage.style.display = "block";
  }
}
window.addEventListener("popstate", async function(event2) {
  var state = event2.state;
  if (state == null) {
    return;
  }
  console.log(event2);
  var pageName = state.pageName;
  var pageData = state.pageData;
  try {
    await processPageEntered(pageNameToClass, pageName, pageData, true);
  } catch (error) {
    myerror(error);
    await processPageEntered(pageNameToClass, "ErrorPage", { title: error.name, msg: error.message }, false);
  }
});
async function getAndUpdateVersion() {
  let version = "1.1.2";
  window.appVersion = version;
  window.localStorage.setItem("VERSION", version);
  console.log("Version:", version);
  return;
}
window.addEventListener("DOMContentLoaded", async (event2) => {
  console.log("window.DOMContentLoaded event fired");
  getAndUpdateVersion();
  await goHome();
  var preloadPages = window.preloadPages;
  console.log("preloadPages", preloadPages.length);
  if (preloadPages && preloadPages.length >= 0) {
    for (let index = 0; index < preloadPages.length; index++) {
      console.log("======>Preload", preloadPages[index]);
      import(pageModulesMap[preloadPages[index]]);
    }
  } else {
    console.log("!!!!!!!!!!!!!!!!!!!!!!Preload ALL ppages");
    for (const path in pageModulesMap) {
      import(pageModulesMap[path]);
    }
  }
});
var INSTALL_SERVICE_WORKER = true;
window.addEventListener("load", async (event2) => {
  console.log("window.load event fired");
  if (true) {
    console.log("In development");
    INSTALL_SERVICE_WORKER = false;
  } else {
    console.log("In production");
  }
  if (INSTALL_SERVICE_WORKER && "serviceWorker" in navigator) {
    const { Workbox } = await import("./chunks/workbox-window.prod.es5-3ITFGLJS.js");
    const wb = new Workbox("./sw.js");
    wb.addEventListener("message", (event3) => {
      if (event3.data.type === "CACHE_UPDATED") {
        const { updatedURL } = event3.data.payload;
        console.log(`A newer version of ${updatedURL} is available!`);
      }
    });
    wb.addEventListener("activated", async (event3) => {
      if (event3.isUpdate) {
        console.log("Service worker has been updated.", event3);
        await performAppUpgrade(true);
      } else {
        console.log("Service worker has been installed for the first time.", event3);
        await performAppUpgrade(false);
      }
    });
    wb.addEventListener("waiting", (event3) => {
      console.log(
        `A new service worker has installed, but it can't activateuntil all tabs running the current version have fully unloaded.`
      );
    });
    wb.register();
  }
});
async function performAppUpgrade(isUpdate) {
  console.log("Performing Upgrade");
  gotoPage("SWNotify", { isUpdate });
}
function T2(e) {
  if (window.T) {
    return window.T(e);
  }
  return e;
}
function HeaderBar(backButton = true) {
  var menuB = html`
        <ion-buttons slot="end">
        </ion-buttons>
    `;
  if (!backButton) {
    menuB = html`
        <ion-buttons slot="end">
            <ion-button @click=${() => gotoPage("MenuPage", "")}>
                <ion-icon name="menu"></ion-icon>
            </ion-button>
        </ion-buttons>`;
  }
  if (backButton) {
    return html`
        <ion-toolbar color="primary">
        <ion-buttons slot="start">
            <ion-button @click=${() => history.back()}>
                <ion-icon slot="start" name="chevron-back"></ion-icon>
                Back
            </ion-button>
        </ion-buttons>
        <ion-title>${myAppTitle}</ion-title>
        ${menuB}
        </ion-toolbar>
        `;
  } else {
    return html`
        <ion-toolbar color="primary">
        <ion-title>${myAppTitle}</ion-title>
        ${menuB}
        </ion-toolbar>
    `;
  }
}
function ErrorPanel(title, message) {
  let theHtml = html`

    <ion-card>
        <ion-card-header>
            <ion-card-title>${title}</ion-card-title>
        </ion-card-header>

        <ion-card-content class="ion-padding-bottom">
            <div class="text-larger">${message}</div>
        </ion-card-content>

        <div class="ion-margin-start ion-margin-bottom">

            <ion-button color="danger" @click=${() => cleanReload()}>
                <ion-icon slot="start" name="home"></ion-icon>
                ${T2("Home")}
            </ion-button>

        </div>
    </ion-card>
    `;
  return theHtml;
}
var AbstractPage = class {
  html;
  // The uhtml html function, for subclasses
  domElem;
  // The DOM Element that holds the page
  pageName;
  // The name of the page for routing
  headerBar = HeaderBar;
  /**
   * @param {string} id - The name of the page to be registered. This will be used for page routing
   */
  constructor(id) {
    if (!id) {
      throw "A page name is needed";
    }
    this.html = html;
    this.svg = svg;
    this.domElem = document.createElement("page");
    this.pageName = id;
    this.domElem.id = id;
    route(this.pageName, this);
    this.domElem.style.display = "none";
    var mainElem = document.querySelector("main");
    if (mainElem) {
      mainElem.appendChild(this.domElem);
    }
  }
  /**
   * @param {(() => import("uhtml").Renderable) | import("uhtml").Renderable} theHtml
   * @param {boolean} [backButton=true] 
   */
  render(theHtml, backButton = true) {
    let elem = document.getElementById("SplashScreen");
    if (elem) {
      elem.style.display = "none";
    }
    this.domElem.style.display = "block";
    let header = document.getElementById("the_header");
    if (header) {
      render(header, HeaderBar(backButton));
    }
    render(this.domElem, theHtml);
  }
  /**
   * @param {string} title
   * @param {string} message
   */
  showError(title, message) {
    this.render(ErrorPanel(title, message));
  }
};
function register(pageName, classDefinition) {
  new classDefinition(pageName);
}
function cleanReload() {
  window.location = window.location.origin + window.location.pathname;
  return;
}
register("Page404", class extends AbstractPage {
  /**
   * @param {string} id
   */
  constructor(id) {
    super(id);
  }
  /**
   * @param {string} pageData
   */
  enter(pageData) {
    this.showError("Page not found", `The requested page does not exist: ${pageData}`);
  }
});
register("ErrorPage", class extends AbstractPage {
  /**
   * @param {string} id
   */
  constructor(id) {
    super(id);
  }
  /**
   * @param {{title: string;msg: string;back:boolean}} pageData
   */
  enter(pageData) {
    let html2 = this.html;
    let title = T2("Error");
    if (pageData && pageData.title) {
      title = T2(pageData.title);
    }
    let msg = T2("An error has happened.");
    if (pageData && pageData.msg) {
      msg = T2(pageData.msg);
    }
    let theHtml = html2`

        <ion-card>

            <ion-card-header>
                <ion-card-title>${title}</ion-card-title>
            </ion-card-header>

            <ion-card-content class="ion-padding-bottom">
                <div class="text-larger">${msg}</div>
                ${pageData && pageData.back == true ? null : html2`<div>${T2("Please click Accept to refresh the page.")}</div>`}
            </ion-card-content>

            <div class="ion-margin-start ion-margin-bottom">

                ${pageData && pageData.back == true ? html2`
                <ion-button @click=${() => history.back()}>
                    <ion-icon slot="start" name="chevron-back"></ion-icon>${T2("Back")}
                </ion-button>` : html2`
                <ion-button color="danger" @click=${() => cleanReload()}>${T2("Accept")}
                </ion-button>`}

            </div>
        </ion-card>
        `;
    this.render(theHtml);
  }
});
function btoaUrl(input) {
  let astr = btoa(input);
  astr = astr.replace(/\+/g, "-").replace(/\//g, "_");
  return astr;
}
function atobUrl(input) {
  input = input.replace(/-/g, "+").replace(/_/g, "/");
  let bstr = decodeURIComponent(escape(atob(input)));
  return bstr;
}
window.MHR = {
  mylog: storage.mylog,
  storage,
  route,
  goHome,
  gotoPage,
  processPageEntered,
  AbstractPage,
  register,
  ErrorPanel,
  cleanReload,
  html,
  render,
  btoaUrl,
  atobUrl,
  pageNameToClass
};
/*! Bundled license information:

@webreflection/uparser/esm/index.js:
  (*! (c) Andrea Giammarchi - ISC *)
*/
//# sourceMappingURL=app-UH6LV4PK.js.map
