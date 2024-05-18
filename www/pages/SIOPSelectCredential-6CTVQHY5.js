import {
  renderLEARCredentialCard
} from "../chunks/chunk-HVCYOWSM.js";
import {
  decodeJWT
} from "../chunks/chunk-USIZI2P5.js";
import "../chunks/chunk-W7NC74ZX.js";

// front/node_modules/js-base64/base64.mjs
var version = "3.7.5";
var VERSION = version;
var _hasatob = typeof atob === "function";
var _hasbtoa = typeof btoa === "function";
var _hasBuffer = typeof Buffer === "function";
var _TD = typeof TextDecoder === "function" ? new TextDecoder() : void 0;
var _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
var b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var b64chs = Array.prototype.slice.call(b64ch);
var b64tab = ((a) => {
  let tab = {};
  a.forEach((c, i) => tab[c] = i);
  return tab;
})(b64chs);
var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
var _fromCC = String.fromCharCode.bind(String);
var _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
var _mkUriSafe = (src) => src.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
var _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, "");
var btoaPolyfill = (bin) => {
  let u32, c0, c1, c2, asc = "";
  const pad = bin.length % 3;
  for (let i = 0; i < bin.length; ) {
    if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255)
      throw new TypeError("invalid character found");
    u32 = c0 << 16 | c1 << 8 | c2;
    asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
  }
  return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
var _btoa = _hasbtoa ? (bin) => btoa(bin) : _hasBuffer ? (bin) => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
var _fromUint8Array = _hasBuffer ? (u8a) => Buffer.from(u8a).toString("base64") : (u8a) => {
  const maxargs = 4096;
  let strs = [];
  for (let i = 0, l = u8a.length; i < l; i += maxargs) {
    strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
  }
  return _btoa(strs.join(""));
};
var fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
var cb_utob = (c) => {
  if (c.length < 2) {
    var cc = c.charCodeAt(0);
    return cc < 128 ? c : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | cc & 63) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
  } else {
    var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
    return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
  }
};
var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
var utob = (u) => u.replace(re_utob, cb_utob);
var _encode = _hasBuffer ? (s) => Buffer.from(s, "utf8").toString("base64") : _TE ? (s) => _fromUint8Array(_TE.encode(s)) : (s) => _btoa(utob(s));
var encode = (src, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
var encodeURI = (src) => encode(src, true);
var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
var cb_btou = (cccc) => {
  switch (cccc.length) {
    case 4:
      var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
      return _fromCC((offset >>> 10) + 55296) + _fromCC((offset & 1023) + 56320);
    case 3:
      return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
    default:
      return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
  }
};
var btou = (b) => b.replace(re_btou, cb_btou);
var atobPolyfill = (asc) => {
  asc = asc.replace(/\s+/g, "");
  if (!b64re.test(asc))
    throw new TypeError("malformed base64.");
  asc += "==".slice(2 - (asc.length & 3));
  let u24, bin = "", r1, r2;
  for (let i = 0; i < asc.length; ) {
    u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
    bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
  }
  return bin;
};
var _atob = _hasatob ? (asc) => atob(_tidyB64(asc)) : _hasBuffer ? (asc) => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
var _toUint8Array = _hasBuffer ? (a) => _U8Afrom(Buffer.from(a, "base64")) : (a) => _U8Afrom(_atob(a).split("").map((c) => c.charCodeAt(0)));
var toUint8Array = (a) => _toUint8Array(_unURI(a));
var _decode = _hasBuffer ? (a) => Buffer.from(a, "base64").toString("utf8") : _TD ? (a) => _TD.decode(_toUint8Array(a)) : (a) => btou(_atob(a));
var _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));
var decode = (src) => _decode(_unURI(src));
var isValid = (src) => {
  if (typeof src !== "string")
    return false;
  const s = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
  return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
var _noEnum = (v) => {
  return {
    value: v,
    enumerable: false,
    writable: true,
    configurable: true
  };
};
var extendString = function() {
  const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
  _add("fromBase64", function() {
    return decode(this);
  });
  _add("toBase64", function(urlsafe) {
    return encode(this, urlsafe);
  });
  _add("toBase64URI", function() {
    return encode(this, true);
  });
  _add("toBase64URL", function() {
    return encode(this, true);
  });
  _add("toUint8Array", function() {
    return toUint8Array(this);
  });
};
var extendUint8Array = function() {
  const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
  _add("toBase64", function(urlsafe) {
    return fromUint8Array(this, urlsafe);
  });
  _add("toBase64URI", function() {
    return fromUint8Array(this, true);
  });
  _add("toBase64URL", function() {
    return fromUint8Array(this, true);
  });
};
var extendBuiltins = () => {
  extendString();
  extendUint8Array();
};
var gBase64 = {
  version,
  VERSION,
  atob: _atob,
  atobPolyfill,
  btoa: _btoa,
  btoaPolyfill,
  fromBase64: decode,
  toBase64: encode,
  encode,
  encodeURI,
  encodeURL: encodeURI,
  utob,
  btou,
  decode,
  isValid,
  fromUint8Array,
  toUint8Array,
  extendString,
  extendUint8Array,
  extendBuiltins
};

// front/src/pages/SIOPSelectCredential.js
var MHR = window.MHR;
var gotoPage = MHR.gotoPage;
var goHome = MHR.goHome;
var storage = MHR.storage;
var myerror = window.MHR.storage.myerror;
var mylog = window.MHR.storage.mylog;
var html = MHR.html;
MHR.register("SIOPSelectCredential", class extends MHR.AbstractPage {
  WebAuthnSupported = false;
  PlatformAuthenticatorSupported = false;
  constructor(id) {
    super(id);
  }
  /**
   * @param {string} openIdUrl
   */
  async enter(openIdUrl) {
    let html2 = this.html;
    mylog("Inside SIOPSelectCredential:", openIdUrl);
    if (openIdUrl == null) {
      myerror("No URL has been specified");
      this.showError("Error", "No URL has been specified");
      return;
    }
    if (window.PublicKeyCredential) {
      this.WebAuthnSupported = true;
      let available = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
      if (available) {
        this.PlatformAuthenticatorSupported = true;
      }
    }
    openIdUrl = openIdUrl.replace("openid4vp://?", "https://wallet.mycredential.eu//?");
    const inputURL = new URL(openIdUrl);
    const params = new URLSearchParams(inputURL.search);
    var request_uri = params.get("request_uri");
    if (!request_uri) {
      gotoPage("ErrorPage", {
        title: "Error",
        msg: "'request_uri' parameter not found in URL"
      });
      return;
    }
    request_uri = decodeURIComponent(request_uri);
    const authRequestJWT = await getAuthRequest(request_uri);
    console.log(authRequestJWT);
    if (authRequestJWT == "error") {
      this.showError("Error", "Error fetching Authorization Request");
      return;
    }
    const authRequest = decodeJWT(authRequestJWT);
    console.log("Decoded authRequest", authRequest);
    const scope = authRequest.body.scope;
    const response_uri = authRequest.body.response_uri;
    const state = authRequest.body.state;
    mylog("state", state);
    mylog("request_uri", request_uri);
    mylog("scope", scope);
    const scopeParts = scope.split(".");
    if (scopeParts.length == 0) {
      myerror("Invalid scope specified");
      this.showError("Error", "Invalid scope specified");
      return;
    }
    const displayCredType = scopeParts[scopeParts.length - 1];
    var rpURL = new URL(response_uri);
    var rpDomain = rpURL.hostname;
    var credStructs = await storage.credentialsGetAllRecent();
    if (!credStructs) {
      let theHtml2 = html2`
                <div class="w3-panel w3-margin w3-card w3-center w3-round color-error">
                <p>You do not have a Verifiable Credential.</p>
                <p>Please go to an Issuer to obtain one.</p>
                </div>
            `;
      this.render(theHtml2);
      return;
    }
    var credentials = [];
    for (const cc of credStructs) {
      const vc = cc.decoded;
      const vctype = vc.type;
      if (vctype.includes(scope)) {
        console.log("found", cc.encoded);
        credentials.push(vc);
      }
    }
    if (credentials.length == 0) {
      var msg = html2`
                <p><b>${rpDomain}</b> has requested a Verifiable Credential of type ${displayCredType} to perform authentication,
                but you do not have any credential of that type.</p>
                <p>Please go to an Issuer to obtain one.</p>
            `;
      this.showError("Error", msg);
      return;
    }
    let theHtml = html2`
        <ion-card color="warning">
                
            <ion-card-content>
            <div style="line-height:1.2"><b>${rpDomain}</b> <span class="text-small">has requested a Verifiable Credential of type ${displayCredType} to perform authentication.</span></div>
            </ion-card-content>
            
        </ion-card>

        ${credentials.map((cred) => html2`${vcToHtml(cred, response_uri, state, this.WebAuthnSupported)}`)}
        
        `;
    this.render(theHtml);
  }
});
function vcToHtml(vc, response_uri, state, webAuthnSupported) {
  const holder = vc.credentialSubject.id;
  var credentials = [vc];
  const div = html`
    <ion-card>
        ${renderLEARCredentialCard(vc)}

        <div class="ion-margin-start ion-margin-bottom">
            <ion-button @click=${() => MHR.cleanReload()}>
                <ion-icon slot="start" name="chevron-back"></ion-icon>
                ${T("Cancel")}
            </ion-button>

            <ion-button @click=${(e) => sendAuthenticationResponse(e, holder, response_uri, credentials, state, webAuthnSupported)}>
                <ion-icon slot="start" name="paper-plane"></ion-icon>
                ${T("Send Credential")}
            </ion-button>
        </div>
    </ion-card>
    `;
  return div;
}
async function sendAuthenticationResponse(e, holder, backEndpoint, credentials, state, authSupported) {
  e.preventDefault();
  const endpointURL = new URL(backEndpoint);
  const origin = endpointURL.origin;
  mylog("sending AuthenticationResponse to:", backEndpoint + "?state=" + state);
  const uuid = self.crypto.randomUUID();
  var vpToken = {
    context: ["https://www.w3.org/ns/credentials/v2"],
    type: ["VerifiablePresentation"],
    id: uuid,
    verifiableCredential: credentials,
    holder
  };
  mylog("The encoded vpToken ", gBase64.encodeURI(JSON.stringify(vpToken)));
  var formAttributes = {
    "vp_token": gBase64.encodeURI(JSON.stringify(vpToken)),
    "presentation_submission": gBase64.encodeURI(JSON.stringify(presentationSubmissionJWT()))
  };
  var formBody = JSON.stringify(formAttributes);
  mylog("The body: " + formBody);
  try {
    let response = await fetch(backEndpoint + "?state=" + state, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody
    });
    if (!authSupported) {
      gotoPage("ErrorPage", {
        title: "Error",
        msg: "Authenticator not supported in this device"
      });
      return;
    }
    if (response.status == 200) {
      const res2 = await response.json();
      mylog(res2);
      if (res2.authenticatorRequired == "yes") {
        res2["origin"] = origin;
        res2["state"] = state;
        mylog("Authenticator required");
        gotoPage("AuthenticatorPage", res2);
        return;
      } else {
        gotoPage("AuthenticatorSuccessPage");
        return;
      }
    }
    myerror("error sending credential", response.status);
    const res = await response.text();
    mylog("response:", res);
    gotoPage("ErrorPage", {
      title: "Error",
      msg: "Error sending the credential"
    });
    return;
  } catch (error) {
    myerror(error);
    gotoPage("ErrorPage", {
      title: "Error",
      msg: "Error sending the credential"
    });
    return;
  }
}
function presentationSubmissionJWT() {
  return {
    "definition_id": "SingleCredentialPresentation",
    "id": "SingleCredentialSubmission",
    "descriptor_map": [{
      "id": "single_credential",
      "path": "$",
      "format": "jwt_vp_json",
      "path_nested": {
        "format": "jwt_vc_json",
        "path": "$.verifiableCredential[0]"
      }
    }]
  };
}
async function getAuthRequest(uri) {
  var response = await fetch(
    uri,
    {
      mode: "cors"
    }
  );
  if (!response.ok) {
    var errorText = await response.text();
    mylog(errorText);
    return "error";
  }
  var responseText = await response.text();
  return responseText;
}
//# sourceMappingURL=SIOPSelectCredential-6CTVQHY5.js.map
