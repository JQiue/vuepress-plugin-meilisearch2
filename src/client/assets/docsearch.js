"use strict";
export var __docsearch_meilisearch__ = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) =>
    function __require() {
      return (
        mod ||
          (0, cb[__getOwnPropNames(cb)[0]])(
            (mod = { exports: {} }).exports,
            mod
          ),
        mod.exports
      );
    };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable:
              !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule
        ? __defProp(target, "default", { value: mod, enumerable: true })
        : target,
      mod
    )
  );
  var __toCommonJS = (mod) =>
    __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/.pnpm/cross-fetch@3.1.8/node_modules/cross-fetch/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS({
    "node_modules/.pnpm/cross-fetch@3.1.8/node_modules/cross-fetch/dist/browser-polyfill.js"(
      exports
    ) {
      "use strict";
      (function (self2) {
        var irrelevant = (function (exports2) {
          var support = {
            searchParams: "URLSearchParams" in self2,
            iterable: "Symbol" in self2 && "iterator" in Symbol,
            blob:
              "FileReader" in self2 &&
              "Blob" in self2 &&
              (function () {
                try {
                  new Blob();
                  return true;
                } catch (e) {
                  return false;
                }
              })(),
            formData: "FormData" in self2,
            arrayBuffer: "ArrayBuffer" in self2,
          };
          function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
          }
          if (support.arrayBuffer) {
            var viewClasses = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ];
            var isArrayBufferView =
              ArrayBuffer.isView ||
              function (obj) {
                return (
                  obj &&
                  viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
                );
              };
          }
          function normalizeName(name) {
            if (typeof name !== "string") {
              name = String(name);
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
              throw new TypeError("Invalid character in header field name");
            }
            return name.toLowerCase();
          }
          function normalizeValue(value) {
            if (typeof value !== "string") {
              value = String(value);
            }
            return value;
          }
          function iteratorFor(items) {
            var iterator = {
              next: function () {
                var value = items.shift();
                return { done: value === void 0, value };
              },
            };
            if (support.iterable) {
              iterator[Symbol.iterator] = function () {
                return iterator;
              };
            }
            return iterator;
          }
          function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) {
              headers.forEach(function (value, name) {
                this.append(name, value);
              }, this);
            } else if (Array.isArray(headers)) {
              headers.forEach(function (header) {
                this.append(header[0], header[1]);
              }, this);
            } else if (headers) {
              Object.getOwnPropertyNames(headers).forEach(function (name) {
                this.append(name, headers[name]);
              }, this);
            }
          }
          Headers.prototype.append = function (name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ", " + value : value;
          };
          Headers.prototype["delete"] = function (name) {
            delete this.map[normalizeName(name)];
          };
          Headers.prototype.get = function (name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
          };
          Headers.prototype.has = function (name) {
            return this.map.hasOwnProperty(normalizeName(name));
          };
          Headers.prototype.set = function (name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
          };
          Headers.prototype.forEach = function (callback, thisArg) {
            for (var name in this.map) {
              if (this.map.hasOwnProperty(name)) {
                callback.call(thisArg, this.map[name], name, this);
              }
            }
          };
          Headers.prototype.keys = function () {
            var items = [];
            this.forEach(function (value, name) {
              items.push(name);
            });
            return iteratorFor(items);
          };
          Headers.prototype.values = function () {
            var items = [];
            this.forEach(function (value) {
              items.push(value);
            });
            return iteratorFor(items);
          };
          Headers.prototype.entries = function () {
            var items = [];
            this.forEach(function (value, name) {
              items.push([name, value]);
            });
            return iteratorFor(items);
          };
          if (support.iterable) {
            Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
          }
          function consumed(body) {
            if (body.bodyUsed) {
              return Promise.reject(new TypeError("Already read"));
            }
            body.bodyUsed = true;
          }
          function fileReaderReady(reader) {
            return new Promise(function (resolve, reject) {
              reader.onload = function () {
                resolve(reader.result);
              };
              reader.onerror = function () {
                reject(reader.error);
              };
            });
          }
          function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
          }
          function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
          }
          function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for (var i = 0; i < view.length; i++) {
              chars[i] = String.fromCharCode(view[i]);
            }
            return chars.join("");
          }
          function bufferClone(buf) {
            if (buf.slice) {
              return buf.slice(0);
            } else {
              var view = new Uint8Array(buf.byteLength);
              view.set(new Uint8Array(buf));
              return view.buffer;
            }
          }
          function Body() {
            this.bodyUsed = false;
            this._initBody = function (body) {
              this._bodyInit = body;
              if (!body) {
                this._bodyText = "";
              } else if (typeof body === "string") {
                this._bodyText = body;
              } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
              } else if (
                support.formData &&
                FormData.prototype.isPrototypeOf(body)
              ) {
                this._bodyFormData = body;
              } else if (
                support.searchParams &&
                URLSearchParams.prototype.isPrototypeOf(body)
              ) {
                this._bodyText = body.toString();
              } else if (
                support.arrayBuffer &&
                support.blob &&
                isDataView(body)
              ) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
              } else if (
                support.arrayBuffer &&
                (ArrayBuffer.prototype.isPrototypeOf(body) ||
                  isArrayBufferView(body))
              ) {
                this._bodyArrayBuffer = bufferClone(body);
              } else {
                this._bodyText = body = Object.prototype.toString.call(body);
              }
              if (!this.headers.get("content-type")) {
                if (typeof body === "string") {
                  this.headers.set("content-type", "text/plain;charset=UTF-8");
                } else if (this._bodyBlob && this._bodyBlob.type) {
                  this.headers.set("content-type", this._bodyBlob.type);
                } else if (
                  support.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(body)
                ) {
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8"
                  );
                }
              }
            };
            if (support.blob) {
              this.blob = function () {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }
                if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                } else if (this._bodyFormData) {
                  throw new Error("could not read FormData body as blob");
                } else {
                  return Promise.resolve(new Blob([this._bodyText]));
                }
              };
              this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                  return (
                    consumed(this) || Promise.resolve(this._bodyArrayBuffer)
                  );
                } else {
                  return this.blob().then(readBlobAsArrayBuffer);
                }
              };
            }
            this.text = function () {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(
                  readArrayBufferAsText(this._bodyArrayBuffer)
                );
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as text");
              } else {
                return Promise.resolve(this._bodyText);
              }
            };
            if (support.formData) {
              this.formData = function () {
                return this.text().then(decode);
              };
            }
            this.json = function () {
              return this.text().then(JSON.parse);
            };
            return this;
          }
          var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
          }
          function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
              if (input.bodyUsed) {
                throw new TypeError("Already read");
              }
              this.url = input.url;
              this.credentials = input.credentials;
              if (!options.headers) {
                this.headers = new Headers(input.headers);
              }
              this.method = input.method;
              this.mode = input.mode;
              this.signal = input.signal;
              if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
              }
            } else {
              this.url = String(input);
            }
            this.credentials =
              options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) {
              this.headers = new Headers(options.headers);
            }
            this.method = normalizeMethod(
              options.method || this.method || "GET"
            );
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) {
              throw new TypeError("Body not allowed for GET or HEAD requests");
            }
            this._initBody(body);
          }
          Request.prototype.clone = function () {
            return new Request(this, { body: this._bodyInit });
          };
          function decode(body) {
            var form = new FormData();
            body
              .trim()
              .split("&")
              .forEach(function (bytes) {
                if (bytes) {
                  var split = bytes.split("=");
                  var name = split.shift().replace(/\+/g, " ");
                  var value = split.join("=").replace(/\+/g, " ");
                  form.append(
                    decodeURIComponent(name),
                    decodeURIComponent(value)
                  );
                }
              });
            return form;
          }
          function parseHeaders(rawHeaders) {
            var headers = new Headers();
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
              var parts = line.split(":");
              var key = parts.shift().trim();
              if (key) {
                var value = parts.join(":").trim();
                headers.append(key, value);
              }
            });
            return headers;
          }
          Body.call(Request.prototype);
          function Response2(bodyInit, options) {
            if (!options) {
              options = {};
            }
            this.type = "default";
            this.status = options.status === void 0 ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText =
              "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
          }
          Body.call(Response2.prototype);
          Response2.prototype.clone = function () {
            return new Response2(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url,
            });
          };
          Response2.error = function () {
            var response = new Response2(null, { status: 0, statusText: "" });
            response.type = "error";
            return response;
          };
          var redirectStatuses = [301, 302, 303, 307, 308];
          Response2.redirect = function (url, status) {
            if (redirectStatuses.indexOf(status) === -1) {
              throw new RangeError("Invalid status code");
            }
            return new Response2(null, { status, headers: { location: url } });
          };
          exports2.DOMException = self2.DOMException;
          try {
            new exports2.DOMException();
          } catch (err) {
            exports2.DOMException = function (message, name) {
              this.message = message;
              this.name = name;
              var error = Error(message);
              this.stack = error.stack;
            };
            exports2.DOMException.prototype = Object.create(Error.prototype);
            exports2.DOMException.prototype.constructor = exports2.DOMException;
          }
          function fetch2(input, init) {
            return new Promise(function (resolve, reject) {
              var request = new Request(input, init);
              if (request.signal && request.signal.aborted) {
                return reject(
                  new exports2.DOMException("Aborted", "AbortError")
                );
              }
              var xhr = new XMLHttpRequest();
              function abortXhr() {
                xhr.abort();
              }
              xhr.onload = function () {
                var options = {
                  status: xhr.status,
                  statusText: xhr.statusText,
                  headers: parseHeaders(xhr.getAllResponseHeaders() || ""),
                };
                options.url =
                  "responseURL" in xhr
                    ? xhr.responseURL
                    : options.headers.get("X-Request-URL");
                var body = "response" in xhr ? xhr.response : xhr.responseText;
                resolve(new Response2(body, options));
              };
              xhr.onerror = function () {
                reject(new TypeError("Network request failed"));
              };
              xhr.ontimeout = function () {
                reject(new TypeError("Network request failed"));
              };
              xhr.onabort = function () {
                reject(new exports2.DOMException("Aborted", "AbortError"));
              };
              xhr.open(request.method, request.url, true);
              if (request.credentials === "include") {
                xhr.withCredentials = true;
              } else if (request.credentials === "omit") {
                xhr.withCredentials = false;
              }
              if ("responseType" in xhr && support.blob) {
                xhr.responseType = "blob";
              }
              request.headers.forEach(function (value, name) {
                xhr.setRequestHeader(name, value);
              });
              if (request.signal) {
                request.signal.addEventListener("abort", abortXhr);
                xhr.onreadystatechange = function () {
                  if (xhr.readyState === 4) {
                    request.signal.removeEventListener("abort", abortXhr);
                  }
                };
              }
              xhr.send(
                typeof request._bodyInit === "undefined"
                  ? null
                  : request._bodyInit
              );
            });
          }
          fetch2.polyfill = true;
          if (!self2.fetch) {
            self2.fetch = fetch2;
            self2.Headers = Headers;
            self2.Request = Request;
            self2.Response = Response2;
          }
          exports2.Headers = Headers;
          exports2.Request = Request;
          exports2.Response = Response2;
          exports2.fetch = fetch2;
          Object.defineProperty(exports2, "__esModule", { value: true });
          return exports2;
        })({});
      })(typeof self !== "undefined" ? self : exports);
    },
  });

  // node_modules/.pnpm/meilisearch@0.35.0/node_modules/meilisearch/dist/bundles/meilisearch.umd.js
  var require_meilisearch_umd = __commonJS({
    "node_modules/.pnpm/meilisearch@0.35.0/node_modules/meilisearch/dist/bundles/meilisearch.umd.js"(
      exports,
      module
    ) {
      "use strict";
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? factory(exports)
          : typeof define === "function" && define.amd
          ? define(["exports"], factory)
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            factory((global.window = global.window || {})));
      })(exports, function (exports2) {
        "use strict";
        var MatchingStrategies = {
          ALL: "all",
          LAST: "last",
        };
        var ContentTypeEnum = {
          JSON: "application/json",
          CSV: "text/csv",
          NDJSON: "application/x-ndjson",
        };
        function _regeneratorRuntime() {
          _regeneratorRuntime = function () {
            return exports3;
          };
          var exports3 = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            $Symbol = "function" == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || "@@iterator",
            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define2(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true,
              }),
              obj[key]
            );
          }
          try {
            define2({}, "");
          } catch (err) {
            define2 = function (obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self2, tryLocsList) {
            var protoGenerator =
                outerFn && outerFn.prototype instanceof Generator
                  ? outerFn
                  : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return (
              (generator._invoke = (function (innerFn2, self3, context2) {
                var state = "suspendedStart";
                return function (method, arg) {
                  if ("executing" === state)
                    throw new Error("Generator is already running");
                  if ("completed" === state) {
                    if ("throw" === method) throw arg;
                    return doneResult();
                  }
                  for (context2.method = method, context2.arg = arg; ; ) {
                    var delegate = context2.delegate;
                    if (delegate) {
                      var delegateResult = maybeInvokeDelegate(
                        delegate,
                        context2
                      );
                      if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                      }
                    }
                    if ("next" === context2.method)
                      context2.sent = context2._sent = context2.arg;
                    else if ("throw" === context2.method) {
                      if ("suspendedStart" === state)
                        throw ((state = "completed"), context2.arg);
                      context2.dispatchException(context2.arg);
                    } else
                      "return" === context2.method &&
                        context2.abrupt("return", context2.arg);
                    state = "executing";
                    var record = tryCatch(innerFn2, self3, context2);
                    if ("normal" === record.type) {
                      if (
                        ((state = context2.done
                          ? "completed"
                          : "suspendedYield"),
                        record.arg === ContinueSentinel)
                      )
                        continue;
                      return {
                        value: record.arg,
                        done: context2.done,
                      };
                    }
                    "throw" === record.type &&
                      ((state = "completed"),
                      (context2.method = "throw"),
                      (context2.arg = record.arg));
                  }
                };
              })(innerFn, self2, context)),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg),
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err,
              };
            }
          }
          exports3.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define2(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype =
              getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              define2(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ("throw" !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value &&
                  "object" == typeof value &&
                  hasOwn.call(value, "__await")
                  ? PromiseImpl.resolve(value.__await).then(
                      function (value2) {
                        invoke("next", value2, resolve, reject);
                      },
                      function (err) {
                        invoke("throw", err, resolve, reject);
                      }
                    )
                  : PromiseImpl.resolve(value).then(
                      function (unwrapped) {
                        (result.value = unwrapped), resolve(result);
                      },
                      function (error) {
                        return invoke("throw", error, resolve, reject);
                      }
                    );
              }
              reject(record.arg);
            }
            var previousPromise;
            this._invoke = function (method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return (previousPromise = previousPromise
                ? previousPromise.then(
                    callInvokeWithMethodAndArg,
                    callInvokeWithMethodAndArg
                  )
                : callInvokeWithMethodAndArg());
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (void 0 === method) {
              if (((context.delegate = null), "throw" === context.method)) {
                if (
                  delegate.iterator.return &&
                  ((context.method = "return"),
                  (context.arg = void 0),
                  maybeInvokeDelegate(delegate, context),
                  "throw" === context.method)
                )
                  return ContinueSentinel;
                (context.method = "throw"),
                  (context.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type)
              return (
                (context.method = "throw"),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            var info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  "return" !== context.method &&
                    ((context.method = "next"), (context.arg = void 0)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = "throw"),
                (context.arg = new TypeError(
                  "iterator result is not an object"
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0],
            };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            (record.type = "normal"),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [
              {
                tryLoc: "root",
              },
            ]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(true);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ("function" == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next2() {
                    for (; ++i < iterable.length; )
                      if (hasOwn.call(iterable, i))
                        return (
                          (next2.value = iterable[i]),
                          (next2.done = false),
                          next2
                        );
                    return (next2.value = void 0), (next2.done = true), next2;
                  };
                return (next.next = next);
              }
            }
            return {
              next: doneResult,
            };
          }
          function doneResult() {
            return {
              value: void 0,
              done: true,
            };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            define2(Gp, "constructor", GeneratorFunctionPrototype),
            define2(
              GeneratorFunctionPrototype,
              "constructor",
              GeneratorFunction
            ),
            (GeneratorFunction.displayName = define2(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              "GeneratorFunction"
            )),
            (exports3.isGeneratorFunction = function (genFun) {
              var ctor = "function" == typeof genFun && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  "GeneratorFunction" === (ctor.displayName || ctor.name))
              );
            }),
            (exports3.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define2(genFun, toStringTagSymbol, "GeneratorFunction")),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports3.awrap = function (arg) {
              return {
                __await: arg,
              };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define2(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports3.AsyncIterator = AsyncIterator),
            (exports3.async = function (
              innerFn,
              outerFn,
              self2,
              tryLocsList,
              PromiseImpl
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              var iter = new AsyncIterator(
                wrap(innerFn, outerFn, self2, tryLocsList),
                PromiseImpl
              );
              return exports3.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            }),
            defineIteratorMethods(Gp),
            define2(Gp, toStringTagSymbol, "Generator"),
            define2(Gp, iteratorSymbol, function () {
              return this;
            }),
            define2(Gp, "toString", function () {
              return "[object Generator]";
            }),
            (exports3.keys = function (object) {
              var keys = [];
              for (var key in object) keys.push(key);
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    var key2 = keys.pop();
                    if (key2 in object)
                      return (next.value = key2), (next.done = false), next;
                  }
                  return (next.done = true), next;
                }
              );
            }),
            (exports3.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function (skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = false),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (var name in this)
                    "t" === name.charAt(0) &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = void 0);
              },
              stop: function () {
                this.done = true;
                var rootRecord = this.tryEntries[0].completion;
                if ("throw" === rootRecord.type) throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function (exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = "throw"),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = "next"), (context.arg = void 0)),
                    !!caught
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i],
                    record = entry.completion;
                  if ("root" === entry.tryLoc) return handle("end");
                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"),
                      hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, true);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, true);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, "finallyLoc") &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  ("break" === type || "continue" === type) &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = "next"),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function (record, afterLoc) {
                if ("throw" === record.type) throw record.arg;
                return (
                  "break" === record.type || "continue" === record.type
                    ? (this.next = record.arg)
                    : "return" === record.type
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === record.type &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function (finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function (tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (iterable, resultName, nextLoc) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName,
                    nextLoc,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  ContinueSentinel
                );
              },
            }),
            exports3
          );
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj2) {
                    return typeof obj2;
                  }
                : function (obj2) {
                    return obj2 &&
                      "function" == typeof Symbol &&
                      obj2.constructor === Symbol &&
                      obj2 !== Symbol.prototype
                      ? "symbol"
                      : typeof obj2;
                  }),
            _typeof(obj)
          );
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", {
            writable: false,
          });
          return Constructor;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          Object.defineProperty(subClass, "prototype", {
            writable: false,
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function _getPrototypeOf2(o2) {
                return o2.__proto__ || Object.getPrototypeOf(o2);
              };
          return _getPrototypeOf(o);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function _setPrototypeOf2(o2, p2) {
                o2.__proto__ = p2;
                return o2;
              };
          return _setPrototypeOf(o, p);
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }
        function _construct(Parent, args, Class) {
          if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct.bind();
          } else {
            _construct = function _construct2(Parent2, args2, Class2) {
              var a = [null];
              a.push.apply(a, args2);
              var Constructor = Function.bind.apply(Parent2, a);
              var instance = new Constructor();
              if (Class2) _setPrototypeOf(instance, Class2.prototype);
              return instance;
            };
          }
          return _construct.apply(null, arguments);
        }
        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf("[native code]") !== -1;
        }
        function _wrapNativeSuper(Class) {
          var _cache =
            typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
          _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
            if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
            if (typeof Class2 !== "function") {
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            }
            if (typeof _cache !== "undefined") {
              if (_cache.has(Class2)) return _cache.get(Class2);
              _cache.set(Class2, Wrapper);
            }
            function Wrapper() {
              return _construct(
                Class2,
                arguments,
                _getPrototypeOf(this).constructor
              );
            }
            Wrapper.prototype = Object.create(Class2.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            return _setPrototypeOf(Wrapper, Class2);
          };
          return _wrapNativeSuper(Class);
        }
        function _assertThisInitialized(self2) {
          if (self2 === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self2;
        }
        function _possibleConstructorReturn(self2, call) {
          if (
            call &&
            (typeof call === "object" || typeof call === "function")
          ) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          }
          return _assertThisInitialized(self2);
        }
        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr == null
              ? null
              : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
                arr["@@iterator"];
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it =
            (typeof Symbol !== "undefined" && o[Symbol.iterator]) ||
            o["@@iterator"];
          if (!it) {
            if (
              Array.isArray(o) ||
              (it = _unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === "number")
            ) {
              if (it) o = it;
              var i = 0;
              var F = function () {};
              return {
                s: F,
                n: function () {
                  if (i >= o.length)
                    return {
                      done: true,
                    };
                  return {
                    done: false,
                    value: o[i++],
                  };
                },
                e: function (e) {
                  throw e;
                },
                f: F,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function () {
              it = it.call(o);
            },
            n: function () {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function (e) {
              didErr = true;
              err = e;
            },
            f: function () {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }
        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
                });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected);
            }
            step(
              (generator = generator.apply(thisArg, _arguments || [])).next()
            );
          });
        }
        var MeiliSearchCommunicationError = /* @__PURE__ */ (function (_Error) {
          _inherits(MeiliSearchCommunicationError2, _Error);
          var _super = _createSuper(MeiliSearchCommunicationError2);
          function MeiliSearchCommunicationError2(message, body, url, stack) {
            var _this;
            _classCallCheck(this, MeiliSearchCommunicationError2);
            var _a, _b, _c;
            _this = _super.call(this, message);
            Object.setPrototypeOf(
              _assertThisInitialized(_this),
              MeiliSearchCommunicationError2.prototype
            );
            _this.name = "MeiliSearchCommunicationError";
            if (body instanceof Response) {
              _this.message = body.statusText;
              _this.statusCode = body.status;
            }
            if (body instanceof Error) {
              _this.errno = body.errno;
              _this.code = body.code;
            }
            if (stack) {
              _this.stack = stack;
              _this.stack =
                (_a = _this.stack) === null || _a === void 0
                  ? void 0
                  : _a.replace(/(TypeError|FetchError)/, _this.name);
              _this.stack =
                (_b = _this.stack) === null || _b === void 0
                  ? void 0
                  : _b.replace(
                      "Failed to fetch",
                      "request to ".concat(
                        url,
                        " failed, reason: connect ECONNREFUSED"
                      )
                    );
              _this.stack =
                (_c = _this.stack) === null || _c === void 0
                  ? void 0
                  : _c.replace("Not Found", "Not Found: ".concat(url));
            } else {
              if (Error.captureStackTrace) {
                Error.captureStackTrace(
                  _assertThisInitialized(_this),
                  MeiliSearchCommunicationError2
                );
              }
            }
            return _this;
          }
          return _createClass(MeiliSearchCommunicationError2);
        })(/* @__PURE__ */ _wrapNativeSuper(Error));
        var MeiliSearchApiError = /* @__PURE__ */ (function (_Error) {
          _inherits(MeiliSearchApiError2, _Error);
          var _super = _createSuper(MeiliSearchApiError2);
          function MeiliSearchApiError2(error, status) {
            var _this;
            _classCallCheck(this, MeiliSearchApiError2);
            _this = _super.call(this, error.message);
            Object.setPrototypeOf(
              _assertThisInitialized(_this),
              MeiliSearchApiError2.prototype
            );
            _this.name = "MeiliSearchApiError";
            _this.code = error.code;
            _this.type = error.type;
            _this.link = error.link;
            _this.message = error.message;
            _this.httpStatus = status;
            if (Error.captureStackTrace) {
              Error.captureStackTrace(
                _assertThisInitialized(_this),
                MeiliSearchApiError2
              );
            }
            return _this;
          }
          return _createClass(MeiliSearchApiError2);
        })(/* @__PURE__ */ _wrapNativeSuper(Error));
        function httpResponseErrorHandler(response) {
          return __awaiter(
            this,
            void 0,
            void 0,
            /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
              var responseBody;
              return _regeneratorRuntime().wrap(
                function _callee$(_context) {
                  while (1)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        if (response.ok) {
                          _context.next = 11;
                          break;
                        }
                        _context.prev = 1;
                        _context.next = 4;
                        return response.json();
                      case 4:
                        responseBody = _context.sent;
                        _context.next = 10;
                        break;
                      case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](1);
                        throw new MeiliSearchCommunicationError(
                          response.statusText,
                          response,
                          response.url
                        );
                      case 10:
                        throw new MeiliSearchApiError(
                          responseBody,
                          response.status
                        );
                      case 11:
                        return _context.abrupt("return", response);
                      case 12:
                      case "end":
                        return _context.stop();
                    }
                },
                _callee,
                null,
                [[1, 7]]
              );
            })
          );
        }
        function httpErrorHandler(response, stack, url) {
          if (response.name !== "MeiliSearchApiError") {
            throw new MeiliSearchCommunicationError(
              response.message,
              response,
              url,
              stack
            );
          }
          throw response;
        }
        var MeiliSearchError = /* @__PURE__ */ (function (_Error) {
          _inherits(MeiliSearchError2, _Error);
          var _super = _createSuper(MeiliSearchError2);
          function MeiliSearchError2(message) {
            var _this;
            _classCallCheck(this, MeiliSearchError2);
            _this = _super.call(this, message);
            Object.setPrototypeOf(
              _assertThisInitialized(_this),
              MeiliSearchError2.prototype
            );
            _this.name = "MeiliSearchError";
            if (Error.captureStackTrace) {
              Error.captureStackTrace(
                _assertThisInitialized(_this),
                MeiliSearchError2
              );
            }
            return _this;
          }
          return _createClass(MeiliSearchError2);
        })(/* @__PURE__ */ _wrapNativeSuper(Error));
        var MeiliSearchTimeOutError = /* @__PURE__ */ (function (_Error) {
          _inherits(MeiliSearchTimeOutError2, _Error);
          var _super = _createSuper(MeiliSearchTimeOutError2);
          function MeiliSearchTimeOutError2(message) {
            var _this;
            _classCallCheck(this, MeiliSearchTimeOutError2);
            _this = _super.call(this, message);
            Object.setPrototypeOf(
              _assertThisInitialized(_this),
              MeiliSearchTimeOutError2.prototype
            );
            _this.name = "MeiliSearchTimeOutError";
            if (Error.captureStackTrace) {
              Error.captureStackTrace(
                _assertThisInitialized(_this),
                MeiliSearchTimeOutError2
              );
            }
            return _this;
          }
          return _createClass(MeiliSearchTimeOutError2);
        })(/* @__PURE__ */ _wrapNativeSuper(Error));
        function versionErrorHintMessage(message, method) {
          return ""
            .concat(
              message,
              "\nHint: It might not be working because maybe you're not up to date with the Meilisearch version that "
            )
            .concat(method, " call requires.");
        }
        function removeUndefinedFromObject(obj) {
          return Object.entries(obj).reduce(function (acc, curEntry) {
            var _curEntry = _slicedToArray(curEntry, 2),
              key = _curEntry[0],
              val = _curEntry[1];
            if (val !== void 0) acc[key] = val;
            return acc;
          }, {});
        }
        function sleep(ms) {
          return __awaiter(
            this,
            void 0,
            void 0,
            /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return new Promise(function (resolve) {
                        return setTimeout(resolve, ms);
                      });
                    case 2:
                      return _context.abrupt("return", _context.sent);
                    case 3:
                    case "end":
                      return _context.stop();
                  }
              }, _callee);
            })
          );
        }
        function addProtocolIfNotPresent(host) {
          if (!(host.startsWith("https://") || host.startsWith("http://"))) {
            return "http://".concat(host);
          }
          return host;
        }
        function addTrailingSlash(url) {
          if (!url.endsWith("/")) {
            url += "/";
          }
          return url;
        }
        var PACKAGE_VERSION = "0.35.0";
        function toQueryParams(parameters) {
          var params = Object.keys(parameters);
          var queryParams = params.reduce(function (acc, key) {
            var value = parameters[key];
            if (value === void 0) {
              return acc;
            } else if (Array.isArray(value)) {
              return Object.assign(
                Object.assign({}, acc),
                _defineProperty({}, key, value.join(","))
              );
            } else if (value instanceof Date) {
              return Object.assign(
                Object.assign({}, acc),
                _defineProperty({}, key, value.toISOString())
              );
            }
            return Object.assign(
              Object.assign({}, acc),
              _defineProperty({}, key, value)
            );
          }, {});
          return queryParams;
        }
        function constructHostURL(host) {
          try {
            host = addProtocolIfNotPresent(host);
            host = addTrailingSlash(host);
            return host;
          } catch (e) {
            throw new MeiliSearchError("The provided host is not valid.");
          }
        }
        function cloneAndParseHeaders(headers) {
          if (Array.isArray(headers)) {
            return headers.reduce(function (acc, headerPair) {
              acc[headerPair[0]] = headerPair[1];
              return acc;
            }, {});
          } else if ("has" in headers) {
            var clonedHeaders = {};
            headers.forEach(function (value, key) {
              return (clonedHeaders[key] = value);
            });
            return clonedHeaders;
          } else {
            return Object.assign({}, headers);
          }
        }
        function createHeaders(config) {
          var _a, _b;
          var agentHeader = "X-Meilisearch-Client";
          var packageAgent = "Meilisearch JavaScript (v".concat(
            PACKAGE_VERSION,
            ")"
          );
          var contentType = "Content-Type";
          var authorization = "Authorization";
          var headers = cloneAndParseHeaders(
            (_b =
              (_a = config.requestConfig) === null || _a === void 0
                ? void 0
                : _a.headers) !== null && _b !== void 0
              ? _b
              : {}
          );
          if (config.apiKey && !headers[authorization]) {
            headers[authorization] = "Bearer ".concat(config.apiKey);
          }
          if (!headers[contentType]) {
            headers["Content-Type"] = "application/json";
          }
          if (config.clientAgents && Array.isArray(config.clientAgents)) {
            var clients = config.clientAgents.concat(packageAgent);
            headers[agentHeader] = clients.join(" ; ");
          } else if (
            config.clientAgents &&
            !Array.isArray(config.clientAgents)
          ) {
            throw new MeiliSearchError(
              'Meilisearch: The header "'.concat(
                agentHeader,
                '" should be an array of string(s).\n'
              )
            );
          } else {
            headers[agentHeader] = packageAgent;
          }
          return headers;
        }
        var HttpRequests = /* @__PURE__ */ (function () {
          function HttpRequests2(config) {
            _classCallCheck(this, HttpRequests2);
            this.headers = createHeaders(config);
            this.requestConfig = config.requestConfig;
            this.httpClient = config.httpClient;
            try {
              var host = constructHostURL(config.host);
              this.url = new URL(host);
            } catch (e) {
              throw new MeiliSearchError("The provided host is not valid.");
            }
          }
          _createClass(HttpRequests2, [
            {
              key: "request",
              value: function request(_ref) {
                var method = _ref.method,
                  url = _ref.url,
                  params = _ref.params,
                  body = _ref.body,
                  _ref$config = _ref.config,
                  config = _ref$config === void 0 ? {} : _ref$config;
                var _a;
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee() {
                      var constructURL,
                        queryParams,
                        headers,
                        fetchFn,
                        result,
                        response,
                        parsedBody,
                        stack;
                      return _regeneratorRuntime().wrap(
                        function _callee$(_context) {
                          while (1)
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                if (typeof fetch === "undefined") {
                                  require_browser_polyfill();
                                }
                                constructURL = new URL(url, this.url);
                                if (params) {
                                  queryParams = new URLSearchParams();
                                  Object.keys(params)
                                    .filter(function (x) {
                                      return params[x] !== null;
                                    })
                                    .map(function (x) {
                                      return queryParams.set(x, params[x]);
                                    });
                                  constructURL.search = queryParams.toString();
                                }
                                if (
                                  !((_a = config.headers) === null ||
                                  _a === void 0
                                    ? void 0
                                    : _a["Content-Type"])
                                ) {
                                  body = JSON.stringify(body);
                                }
                                headers = Object.assign(
                                  Object.assign({}, this.headers),
                                  config.headers
                                );
                                _context.prev = 5;
                                fetchFn = this.httpClient
                                  ? this.httpClient
                                  : fetch;
                                result = fetchFn(
                                  constructURL.toString(),
                                  Object.assign(
                                    Object.assign(
                                      Object.assign({}, config),
                                      this.requestConfig
                                    ),
                                    {
                                      method,
                                      body,
                                      headers,
                                    }
                                  )
                                );
                                if (!this.httpClient) {
                                  _context.next = 12;
                                  break;
                                }
                                _context.next = 11;
                                return result;
                              case 11:
                                return _context.abrupt("return", _context.sent);
                              case 12:
                                _context.next = 14;
                                return result.then(function (res) {
                                  return httpResponseErrorHandler(res);
                                });
                              case 14:
                                response = _context.sent;
                                _context.next = 17;
                                return response.json().catch(function () {
                                  return void 0;
                                });
                              case 17:
                                parsedBody = _context.sent;
                                return _context.abrupt("return", parsedBody);
                              case 21:
                                _context.prev = 21;
                                _context.t0 = _context["catch"](5);
                                stack = _context.t0.stack;
                                httpErrorHandler(
                                  _context.t0,
                                  stack,
                                  constructURL.toString()
                                );
                              case 25:
                              case "end":
                                return _context.stop();
                            }
                        },
                        _callee,
                        this,
                        [[5, 21]]
                      );
                    }
                  )
                );
              },
            },
            {
              key: "get",
              value: function get(url, params, config) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee2() {
                      return _regeneratorRuntime().wrap(
                        function _callee2$(_context2) {
                          while (1)
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                _context2.next = 2;
                                return this.request({
                                  method: "GET",
                                  url,
                                  params,
                                  config,
                                });
                              case 2:
                                return _context2.abrupt(
                                  "return",
                                  _context2.sent
                                );
                              case 3:
                              case "end":
                                return _context2.stop();
                            }
                        },
                        _callee2,
                        this
                      );
                    }
                  )
                );
              },
            },
            {
              key: "post",
              value: function post(url, data, params, config) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee3() {
                      return _regeneratorRuntime().wrap(
                        function _callee3$(_context3) {
                          while (1)
                            switch ((_context3.prev = _context3.next)) {
                              case 0:
                                _context3.next = 2;
                                return this.request({
                                  method: "POST",
                                  url,
                                  body: data,
                                  params,
                                  config,
                                });
                              case 2:
                                return _context3.abrupt(
                                  "return",
                                  _context3.sent
                                );
                              case 3:
                              case "end":
                                return _context3.stop();
                            }
                        },
                        _callee3,
                        this
                      );
                    }
                  )
                );
              },
            },
            {
              key: "put",
              value: function put(url, data, params, config) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee4() {
                      return _regeneratorRuntime().wrap(
                        function _callee4$(_context4) {
                          while (1)
                            switch ((_context4.prev = _context4.next)) {
                              case 0:
                                _context4.next = 2;
                                return this.request({
                                  method: "PUT",
                                  url,
                                  body: data,
                                  params,
                                  config,
                                });
                              case 2:
                                return _context4.abrupt(
                                  "return",
                                  _context4.sent
                                );
                              case 3:
                              case "end":
                                return _context4.stop();
                            }
                        },
                        _callee4,
                        this
                      );
                    }
                  )
                );
              },
            },
            {
              key: "patch",
              value: function patch(url, data, params, config) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee5() {
                      return _regeneratorRuntime().wrap(
                        function _callee5$(_context5) {
                          while (1)
                            switch ((_context5.prev = _context5.next)) {
                              case 0:
                                _context5.next = 2;
                                return this.request({
                                  method: "PATCH",
                                  url,
                                  body: data,
                                  params,
                                  config,
                                });
                              case 2:
                                return _context5.abrupt(
                                  "return",
                                  _context5.sent
                                );
                              case 3:
                              case "end":
                                return _context5.stop();
                            }
                        },
                        _callee5,
                        this
                      );
                    }
                  )
                );
              },
            },
            {
              key: "delete",
              value: function _delete(url, data, params, config) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee6() {
                      return _regeneratorRuntime().wrap(
                        function _callee6$(_context6) {
                          while (1)
                            switch ((_context6.prev = _context6.next)) {
                              case 0:
                                _context6.next = 2;
                                return this.request({
                                  method: "DELETE",
                                  url,
                                  body: data,
                                  params,
                                  config,
                                });
                              case 2:
                                return _context6.abrupt(
                                  "return",
                                  _context6.sent
                                );
                              case 3:
                              case "end":
                                return _context6.stop();
                            }
                        },
                        _callee6,
                        this
                      );
                    }
                  )
                );
              },
            },
          ]);
          return HttpRequests2;
        })();
        var EnqueuedTask = /* @__PURE__ */ _createClass(function EnqueuedTask2(
          task
        ) {
          _classCallCheck(this, EnqueuedTask2);
          this.taskUid = task.taskUid;
          this.indexUid = task.indexUid;
          this.status = task.status;
          this.type = task.type;
          this.enqueuedAt = new Date(task.enqueuedAt);
        });
        var Task = /* @__PURE__ */ _createClass(function Task2(task) {
          _classCallCheck(this, Task2);
          this.indexUid = task.indexUid;
          this.status = task.status;
          this.type = task.type;
          this.uid = task.uid;
          this.details = task.details;
          this.canceledBy = task.canceledBy;
          this.error = task.error;
          this.duration = task.duration;
          this.startedAt = new Date(task.startedAt);
          this.enqueuedAt = new Date(task.enqueuedAt);
          this.finishedAt = new Date(task.finishedAt);
        });
        var TaskClient = /* @__PURE__ */ (function () {
          function TaskClient2(config) {
            _classCallCheck(this, TaskClient2);
            this.httpRequest = new HttpRequests(config);
          }
          _createClass(TaskClient2, [
            {
              key: "getTask",
              value: function getTask(uid) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee() {
                      var url, taskItem;
                      return _regeneratorRuntime().wrap(
                        function _callee$(_context) {
                          while (1)
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                url = "tasks/".concat(uid);
                                _context.next = 3;
                                return this.httpRequest.get(url);
                              case 3:
                                taskItem = _context.sent;
                                return _context.abrupt(
                                  "return",
                                  new Task(taskItem)
                                );
                              case 5:
                              case "end":
                                return _context.stop();
                            }
                        },
                        _callee,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Get tasks
               *
               * @param parameters - Parameters to browse the tasks
               * @returns Promise containing all tasks
               */
            },
            {
              key: "getTasks",
              value: function getTasks() {
                var parameters =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee2() {
                      var url, tasks;
                      return _regeneratorRuntime().wrap(
                        function _callee2$(_context2) {
                          while (1)
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                url = "tasks";
                                _context2.next = 3;
                                return this.httpRequest.get(
                                  url,
                                  toQueryParams(parameters)
                                );
                              case 3:
                                tasks = _context2.sent;
                                return _context2.abrupt(
                                  "return",
                                  Object.assign(Object.assign({}, tasks), {
                                    results: tasks.results.map(function (task) {
                                      return new Task(task);
                                    }),
                                  })
                                );
                              case 5:
                              case "end":
                                return _context2.stop();
                            }
                        },
                        _callee2,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Wait for a task to be processed.
               *
               * @param taskUid - Task identifier
               * @param options - Additional configuration options
               * @returns Promise returning a task after it has been processed
               */
            },
            {
              key: "waitForTask",
              value: function waitForTask(taskUid) {
                var _ref =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  _ref$timeOutMs = _ref.timeOutMs,
                  timeOutMs = _ref$timeOutMs === void 0 ? 5e3 : _ref$timeOutMs,
                  _ref$intervalMs = _ref.intervalMs,
                  intervalMs =
                    _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee3() {
                      var startingTime, response;
                      return _regeneratorRuntime().wrap(
                        function _callee3$(_context3) {
                          while (1)
                            switch ((_context3.prev = _context3.next)) {
                              case 0:
                                startingTime = Date.now();
                              case 1:
                                if (!(Date.now() - startingTime < timeOutMs)) {
                                  _context3.next = 11;
                                  break;
                                }
                                _context3.next = 4;
                                return this.getTask(taskUid);
                              case 4:
                                response = _context3.sent;
                                if (
                                  [
                                    "enqueued",
                                    "processing",
                                    /* TaskStatus.TASK_PROCESSING */
                                  ].includes(response.status)
                                ) {
                                  _context3.next = 7;
                                  break;
                                }
                                return _context3.abrupt("return", response);
                              case 7:
                                _context3.next = 9;
                                return sleep(intervalMs);
                              case 9:
                                _context3.next = 1;
                                break;
                              case 11:
                                throw new MeiliSearchTimeOutError(
                                  "timeout of "
                                    .concat(
                                      timeOutMs,
                                      "ms has exceeded on process "
                                    )
                                    .concat(
                                      taskUid,
                                      " when waiting a task to be resolved."
                                    )
                                );
                              case 12:
                              case "end":
                                return _context3.stop();
                            }
                        },
                        _callee3,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Waits for multiple tasks to be processed
               *
               * @param taskUids - Tasks identifier list
               * @param options - Wait options
               * @returns Promise returning a list of tasks after they have been processed
               */
            },
            {
              key: "waitForTasks",
              value: function waitForTasks(taskUids) {
                var _ref2 =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  _ref2$timeOutMs = _ref2.timeOutMs,
                  timeOutMs =
                    _ref2$timeOutMs === void 0 ? 5e3 : _ref2$timeOutMs,
                  _ref2$intervalMs = _ref2.intervalMs,
                  intervalMs =
                    _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee4() {
                      var tasks, _iterator, _step, taskUid, task;
                      return _regeneratorRuntime().wrap(
                        function _callee4$(_context4) {
                          while (1)
                            switch ((_context4.prev = _context4.next)) {
                              case 0:
                                tasks = [];
                                _iterator =
                                  _createForOfIteratorHelper(taskUids);
                                _context4.prev = 2;
                                _iterator.s();
                              case 4:
                                if ((_step = _iterator.n()).done) {
                                  _context4.next = 12;
                                  break;
                                }
                                taskUid = _step.value;
                                _context4.next = 8;
                                return this.waitForTask(taskUid, {
                                  timeOutMs,
                                  intervalMs,
                                });
                              case 8:
                                task = _context4.sent;
                                tasks.push(task);
                              case 10:
                                _context4.next = 4;
                                break;
                              case 12:
                                _context4.next = 17;
                                break;
                              case 14:
                                _context4.prev = 14;
                                _context4.t0 = _context4["catch"](2);
                                _iterator.e(_context4.t0);
                              case 17:
                                _context4.prev = 17;
                                _iterator.f();
                                return _context4.finish(17);
                              case 20:
                                return _context4.abrupt("return", tasks);
                              case 21:
                              case "end":
                                return _context4.stop();
                            }
                        },
                        _callee4,
                        this,
                        [[2, 14, 17, 20]]
                      );
                    }
                  )
                );
              },
              /**
               * Cancel a list of enqueued or processing tasks.
               *
               * @param parameters - Parameters to filter the tasks.
               * @returns Promise containing an EnqueuedTask
               */
            },
            {
              key: "cancelTasks",
              value: function cancelTasks() {
                var parameters =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee5() {
                      var url, task;
                      return _regeneratorRuntime().wrap(
                        function _callee5$(_context5) {
                          while (1)
                            switch ((_context5.prev = _context5.next)) {
                              case 0:
                                url = "tasks/cancel";
                                _context5.next = 3;
                                return this.httpRequest.post(
                                  url,
                                  {},
                                  toQueryParams(parameters)
                                );
                              case 3:
                                task = _context5.sent;
                                return _context5.abrupt(
                                  "return",
                                  new EnqueuedTask(task)
                                );
                              case 5:
                              case "end":
                                return _context5.stop();
                            }
                        },
                        _callee5,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Delete a list tasks.
               *
               * @param parameters - Parameters to filter the tasks.
               * @returns Promise containing an EnqueuedTask
               */
            },
            {
              key: "deleteTasks",
              value: function deleteTasks() {
                var parameters =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee6() {
                      var url, task;
                      return _regeneratorRuntime().wrap(
                        function _callee6$(_context6) {
                          while (1)
                            switch ((_context6.prev = _context6.next)) {
                              case 0:
                                url = "tasks";
                                _context6.next = 3;
                                return this.httpRequest.delete(
                                  url,
                                  {},
                                  toQueryParams(parameters)
                                );
                              case 3:
                                task = _context6.sent;
                                return _context6.abrupt(
                                  "return",
                                  new EnqueuedTask(task)
                                );
                              case 5:
                              case "end":
                                return _context6.stop();
                            }
                        },
                        _callee6,
                        this
                      );
                    }
                  )
                );
              },
            },
          ]);
          return TaskClient2;
        })();
        var Index2 = /* @__PURE__ */ (function () {
          function Index3(config, uid, primaryKey) {
            _classCallCheck(this, Index3);
            this.uid = uid;
            this.primaryKey = primaryKey;
            this.httpRequest = new HttpRequests(config);
            this.tasks = new TaskClient(config);
          }
          _createClass(
            Index3,
            [
              {
                key: "search",
                value: function search(query, options, config) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee$(_context) {
                            while (1)
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  url = "indexes/".concat(this.uid, "/search");
                                  _context.next = 3;
                                  return this.httpRequest.post(
                                    url,
                                    removeUndefinedFromObject(
                                      Object.assign(
                                        {
                                          q: query,
                                        },
                                        options
                                      )
                                    ),
                                    void 0,
                                    config
                                  );
                                case 3:
                                  return _context.abrupt(
                                    "return",
                                    _context.sent
                                  );
                                case 4:
                                case "end":
                                  return _context.stop();
                              }
                          },
                          _callee,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Search for documents into an index using the GET method
                 *
                 * @param query - Query string
                 * @param options - Search options
                 * @param config - Additional request configuration options
                 * @returns Promise containing the search response
                 */
              },
              {
                key: "searchGet",
                value: function searchGet(query, options, config) {
                  var _a, _b, _c, _d, _e, _f, _g;
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee2() {
                        var url, parseFilter, getParams;
                        return _regeneratorRuntime().wrap(
                          function _callee2$(_context2) {
                            while (1)
                              switch ((_context2.prev = _context2.next)) {
                                case 0:
                                  url = "indexes/".concat(this.uid, "/search");
                                  parseFilter = function parseFilter2(filter) {
                                    if (typeof filter === "string")
                                      return filter;
                                    else if (Array.isArray(filter))
                                      throw new MeiliSearchError(
                                        "The filter query parameter should be in string format when using searchGet"
                                      );
                                    else return void 0;
                                  };
                                  getParams = Object.assign(
                                    Object.assign(
                                      {
                                        q: query,
                                      },
                                      options
                                    ),
                                    {
                                      filter: parseFilter(
                                        options === null || options === void 0
                                          ? void 0
                                          : options.filter
                                      ),
                                      sort:
                                        (_a =
                                          options === null || options === void 0
                                            ? void 0
                                            : options.sort) === null ||
                                        _a === void 0
                                          ? void 0
                                          : _a.join(","),
                                      facets:
                                        (_b =
                                          options === null || options === void 0
                                            ? void 0
                                            : options.facets) === null ||
                                        _b === void 0
                                          ? void 0
                                          : _b.join(","),
                                      attributesToRetrieve:
                                        (_c =
                                          options === null || options === void 0
                                            ? void 0
                                            : options.attributesToRetrieve) ===
                                          null || _c === void 0
                                          ? void 0
                                          : _c.join(","),
                                      attributesToCrop:
                                        (_d =
                                          options === null || options === void 0
                                            ? void 0
                                            : options.attributesToCrop) ===
                                          null || _d === void 0
                                          ? void 0
                                          : _d.join(","),
                                      attributesToHighlight:
                                        (_e =
                                          options === null || options === void 0
                                            ? void 0
                                            : options.attributesToHighlight) ===
                                          null || _e === void 0
                                          ? void 0
                                          : _e.join(","),
                                      vector:
                                        (_f =
                                          options === null || options === void 0
                                            ? void 0
                                            : options.vector) === null ||
                                        _f === void 0
                                          ? void 0
                                          : _f.join(","),
                                      attributesToSearchOn:
                                        (_g =
                                          options === null || options === void 0
                                            ? void 0
                                            : options.attributesToSearchOn) ===
                                          null || _g === void 0
                                          ? void 0
                                          : _g.join(","),
                                    }
                                  );
                                  _context2.next = 5;
                                  return this.httpRequest.get(
                                    url,
                                    removeUndefinedFromObject(getParams),
                                    config
                                  );
                                case 5:
                                  return _context2.abrupt(
                                    "return",
                                    _context2.sent
                                  );
                                case 6:
                                case "end":
                                  return _context2.stop();
                              }
                          },
                          _callee2,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Search for facet values
                 *
                 * @param params - Parameters used to search on the facets
                 * @param config - Additional request configuration options
                 * @returns Promise containing the search response
                 */
              },
              {
                key: "searchForFacetValues",
                value: function searchForFacetValues(params, config) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee3() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee3$(_context3) {
                            while (1)
                              switch ((_context3.prev = _context3.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/facet-search"
                                  );
                                  _context3.next = 3;
                                  return this.httpRequest.post(
                                    url,
                                    removeUndefinedFromObject(params),
                                    void 0,
                                    config
                                  );
                                case 3:
                                  return _context3.abrupt(
                                    "return",
                                    _context3.sent
                                  );
                                case 4:
                                case "end":
                                  return _context3.stop();
                              }
                          },
                          _callee3,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// INDEX
                ///
                /**
                 * Get index information.
                 *
                 * @returns Promise containing index information
                 */
              },
              {
                key: "getRawInfo",
                value: function getRawInfo() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee4() {
                        var url, res;
                        return _regeneratorRuntime().wrap(
                          function _callee4$(_context4) {
                            while (1)
                              switch ((_context4.prev = _context4.next)) {
                                case 0:
                                  url = "indexes/".concat(this.uid);
                                  _context4.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  res = _context4.sent;
                                  this.primaryKey = res.primaryKey;
                                  this.updatedAt = new Date(res.updatedAt);
                                  this.createdAt = new Date(res.createdAt);
                                  return _context4.abrupt("return", res);
                                case 8:
                                case "end":
                                  return _context4.stop();
                              }
                          },
                          _callee4,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Fetch and update Index information.
                 *
                 * @returns Promise to the current Index object with updated information
                 */
              },
              {
                key: "fetchInfo",
                value: function fetchInfo() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee5() {
                        return _regeneratorRuntime().wrap(
                          function _callee5$(_context5) {
                            while (1)
                              switch ((_context5.prev = _context5.next)) {
                                case 0:
                                  _context5.next = 2;
                                  return this.getRawInfo();
                                case 2:
                                  return _context5.abrupt("return", this);
                                case 3:
                                case "end":
                                  return _context5.stop();
                              }
                          },
                          _callee5,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Get Primary Key.
                 *
                 * @returns Promise containing the Primary Key of the index
                 */
              },
              {
                key: "fetchPrimaryKey",
                value: function fetchPrimaryKey() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee6() {
                        return _regeneratorRuntime().wrap(
                          function _callee6$(_context6) {
                            while (1)
                              switch ((_context6.prev = _context6.next)) {
                                case 0:
                                  _context6.next = 2;
                                  return this.getRawInfo();
                                case 2:
                                  this.primaryKey = _context6.sent.primaryKey;
                                  return _context6.abrupt(
                                    "return",
                                    this.primaryKey
                                  );
                                case 4:
                                case "end":
                                  return _context6.stop();
                              }
                          },
                          _callee6,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Create an index.
                 *
                 * @param uid - Unique identifier of the Index
                 * @param options - Index options
                 * @param config - Request configuration options
                 * @returns Newly created Index object
                 */
              },
              {
                key: "update",
                value:
                  /**
                   * Update an index.
                   *
                   * @param data - Data to update
                   * @returns Promise to the current Index object with updated information
                   */
                  function update(data) {
                    return __awaiter(
                      this,
                      void 0,
                      void 0,
                      /* @__PURE__ */ _regeneratorRuntime().mark(
                        function _callee7() {
                          var url, task;
                          return _regeneratorRuntime().wrap(
                            function _callee7$(_context7) {
                              while (1)
                                switch ((_context7.prev = _context7.next)) {
                                  case 0:
                                    url = "indexes/".concat(this.uid);
                                    _context7.next = 3;
                                    return this.httpRequest.patch(url, data);
                                  case 3:
                                    task = _context7.sent;
                                    task.enqueuedAt = new Date(task.enqueuedAt);
                                    return _context7.abrupt("return", task);
                                  case 6:
                                  case "end":
                                    return _context7.stop();
                                }
                            },
                            _callee7,
                            this
                          );
                        }
                      )
                    );
                  },
                /**
                 * Delete an index.
                 *
                 * @returns Promise which resolves when index is deleted successfully
                 */
              },
              {
                key: "delete",
                value: function _delete() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee8() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee8$(_context8) {
                            while (1)
                              switch ((_context8.prev = _context8.next)) {
                                case 0:
                                  url = "indexes/".concat(this.uid);
                                  _context8.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context8.sent;
                                  return _context8.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context8.stop();
                              }
                          },
                          _callee8,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// TASKS
                ///
                /**
                 * Get the list of all the tasks of the index.
                 *
                 * @param parameters - Parameters to browse the tasks
                 * @returns Promise containing all tasks
                 */
              },
              {
                key: "getTasks",
                value: function getTasks() {
                  var parameters =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee9() {
                        return _regeneratorRuntime().wrap(
                          function _callee9$(_context9) {
                            while (1)
                              switch ((_context9.prev = _context9.next)) {
                                case 0:
                                  _context9.next = 2;
                                  return this.tasks.getTasks(
                                    Object.assign(
                                      Object.assign({}, parameters),
                                      {
                                        indexUids: [this.uid],
                                      }
                                    )
                                  );
                                case 2:
                                  return _context9.abrupt(
                                    "return",
                                    _context9.sent
                                  );
                                case 3:
                                case "end":
                                  return _context9.stop();
                              }
                          },
                          _callee9,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Get one task of the index.
                 *
                 * @param taskUid - Task identifier
                 * @returns Promise containing a task
                 */
              },
              {
                key: "getTask",
                value: function getTask(taskUid) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee10() {
                        return _regeneratorRuntime().wrap(
                          function _callee10$(_context10) {
                            while (1)
                              switch ((_context10.prev = _context10.next)) {
                                case 0:
                                  _context10.next = 2;
                                  return this.tasks.getTask(taskUid);
                                case 2:
                                  return _context10.abrupt(
                                    "return",
                                    _context10.sent
                                  );
                                case 3:
                                case "end":
                                  return _context10.stop();
                              }
                          },
                          _callee10,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Wait for multiple tasks to be processed.
                 *
                 * @param taskUids - Tasks identifier
                 * @param waitOptions - Options on timeout and interval
                 * @returns Promise containing an array of tasks
                 */
              },
              {
                key: "waitForTasks",
                value: function waitForTasks(taskUids) {
                  var _ref =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                    _ref$timeOutMs = _ref.timeOutMs,
                    timeOutMs =
                      _ref$timeOutMs === void 0 ? 5e3 : _ref$timeOutMs,
                    _ref$intervalMs = _ref.intervalMs,
                    intervalMs =
                      _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee11() {
                        return _regeneratorRuntime().wrap(
                          function _callee11$(_context11) {
                            while (1)
                              switch ((_context11.prev = _context11.next)) {
                                case 0:
                                  _context11.next = 2;
                                  return this.tasks.waitForTasks(taskUids, {
                                    timeOutMs,
                                    intervalMs,
                                  });
                                case 2:
                                  return _context11.abrupt(
                                    "return",
                                    _context11.sent
                                  );
                                case 3:
                                case "end":
                                  return _context11.stop();
                              }
                          },
                          _callee11,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Wait for a task to be processed.
                 *
                 * @param taskUid - Task identifier
                 * @param waitOptions - Options on timeout and interval
                 * @returns Promise containing an array of tasks
                 */
              },
              {
                key: "waitForTask",
                value: function waitForTask(taskUid) {
                  var _ref2 =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                    _ref2$timeOutMs = _ref2.timeOutMs,
                    timeOutMs =
                      _ref2$timeOutMs === void 0 ? 5e3 : _ref2$timeOutMs,
                    _ref2$intervalMs = _ref2.intervalMs,
                    intervalMs =
                      _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee12() {
                        return _regeneratorRuntime().wrap(
                          function _callee12$(_context12) {
                            while (1)
                              switch ((_context12.prev = _context12.next)) {
                                case 0:
                                  _context12.next = 2;
                                  return this.tasks.waitForTask(taskUid, {
                                    timeOutMs,
                                    intervalMs,
                                  });
                                case 2:
                                  return _context12.abrupt(
                                    "return",
                                    _context12.sent
                                  );
                                case 3:
                                case "end":
                                  return _context12.stop();
                              }
                          },
                          _callee12,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// STATS
                ///
                /**
                 * Get stats of an index
                 *
                 * @returns Promise containing object with stats of the index
                 */
              },
              {
                key: "getStats",
                value: function getStats() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee13() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee13$(_context13) {
                            while (1)
                              switch ((_context13.prev = _context13.next)) {
                                case 0:
                                  url = "indexes/".concat(this.uid, "/stats");
                                  _context13.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context13.abrupt(
                                    "return",
                                    _context13.sent
                                  );
                                case 4:
                                case "end":
                                  return _context13.stop();
                              }
                          },
                          _callee13,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// DOCUMENTS
                ///
                /**
                 * Get documents of an index.
                 *
                 * @param parameters - Parameters to browse the documents. Parameters can
                 *   contain the `filter` field only available in Meilisearch v1.2 and newer
                 * @returns Promise containing the returned documents
                 */
              },
              {
                key: "getDocuments",
                value: function getDocuments() {
                  var parameters =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  var _a;
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee14() {
                        var url, _url, fields;
                        return _regeneratorRuntime().wrap(
                          function _callee14$(_context14) {
                            while (1)
                              switch ((_context14.prev = _context14.next)) {
                                case 0:
                                  parameters =
                                    removeUndefinedFromObject(parameters);
                                  if (!(parameters.filter !== void 0)) {
                                    _context14.next = 15;
                                    break;
                                  }
                                  _context14.prev = 2;
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/documents/fetch"
                                  );
                                  _context14.next = 6;
                                  return this.httpRequest.post(url, parameters);
                                case 6:
                                  return _context14.abrupt(
                                    "return",
                                    _context14.sent
                                  );
                                case 9:
                                  _context14.prev = 9;
                                  _context14.t0 = _context14["catch"](2);
                                  if (
                                    _context14.t0 instanceof
                                    MeiliSearchCommunicationError
                                  ) {
                                    _context14.t0.message =
                                      versionErrorHintMessage(
                                        _context14.t0.message,
                                        "getDocuments"
                                      );
                                  } else if (
                                    _context14.t0 instanceof MeiliSearchApiError
                                  ) {
                                    _context14.t0.message =
                                      versionErrorHintMessage(
                                        _context14.t0.message,
                                        "getDocuments"
                                      );
                                  }
                                  throw _context14.t0;
                                case 13:
                                  _context14.next = 20;
                                  break;
                                case 15:
                                  _url = "indexes/".concat(
                                    this.uid,
                                    "/documents"
                                  );
                                  fields = Array.isArray(
                                    parameters === null || parameters === void 0
                                      ? void 0
                                      : parameters.fields
                                  )
                                    ? {
                                        fields:
                                          (_a =
                                            parameters === null ||
                                            parameters === void 0
                                              ? void 0
                                              : parameters.fields) === null ||
                                          _a === void 0
                                            ? void 0
                                            : _a.join(","),
                                      }
                                    : {};
                                  _context14.next = 19;
                                  return this.httpRequest.get(
                                    _url,
                                    Object.assign(
                                      Object.assign({}, parameters),
                                      fields
                                    )
                                  );
                                case 19:
                                  return _context14.abrupt(
                                    "return",
                                    _context14.sent
                                  );
                                case 20:
                                case "end":
                                  return _context14.stop();
                              }
                          },
                          _callee14,
                          this,
                          [[2, 9]]
                        );
                      }
                    )
                  );
                },
                /**
                 * Get one document
                 *
                 * @param documentId - Document ID
                 * @param parameters - Parameters applied on a document
                 * @returns Promise containing Document response
                 */
              },
              {
                key: "getDocument",
                value: function getDocument(documentId, parameters) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee15() {
                        var url, fields;
                        return _regeneratorRuntime().wrap(
                          function _callee15$(_context15) {
                            while (1)
                              switch ((_context15.prev = _context15.next)) {
                                case 0:
                                  url = "indexes/"
                                    .concat(this.uid, "/documents/")
                                    .concat(documentId);
                                  fields = (function () {
                                    var _a;
                                    if (
                                      Array.isArray(
                                        parameters === null ||
                                          parameters === void 0
                                          ? void 0
                                          : parameters.fields
                                      )
                                    ) {
                                      return (_a =
                                        parameters === null ||
                                        parameters === void 0
                                          ? void 0
                                          : parameters.fields) === null ||
                                        _a === void 0
                                        ? void 0
                                        : _a.join(",");
                                    }
                                    return void 0;
                                  })();
                                  _context15.next = 4;
                                  return this.httpRequest.get(
                                    url,
                                    removeUndefinedFromObject(
                                      Object.assign(
                                        Object.assign({}, parameters),
                                        {
                                          fields,
                                        }
                                      )
                                    )
                                  );
                                case 4:
                                  return _context15.abrupt(
                                    "return",
                                    _context15.sent
                                  );
                                case 5:
                                case "end":
                                  return _context15.stop();
                              }
                          },
                          _callee15,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Add or replace multiples documents to an index
                 *
                 * @param documents - Array of Document objects to add/replace
                 * @param options - Options on document addition
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "addDocuments",
                value: function addDocuments(documents, options) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee16() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee16$(_context16) {
                            while (1)
                              switch ((_context16.prev = _context16.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/documents"
                                  );
                                  _context16.next = 3;
                                  return this.httpRequest.post(
                                    url,
                                    documents,
                                    options
                                  );
                                case 3:
                                  task = _context16.sent;
                                  return _context16.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context16.stop();
                              }
                          },
                          _callee16,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Add or replace multiples documents in a string format to an index. It only
                 * supports csv, ndjson and json formats.
                 *
                 * @param documents - Documents provided in a string to add/replace
                 * @param contentType - Content type of your document:
                 *   'text/csv'|'application/x-ndjson'|'application/json'
                 * @param options - Options on document addition
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "addDocumentsFromString",
                value: function addDocumentsFromString(
                  documents,
                  contentType,
                  queryParams
                ) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee17() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee17$(_context17) {
                            while (1)
                              switch ((_context17.prev = _context17.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/documents"
                                  );
                                  _context17.next = 3;
                                  return this.httpRequest.post(
                                    url,
                                    documents,
                                    queryParams,
                                    {
                                      headers: {
                                        "Content-Type": contentType,
                                      },
                                    }
                                  );
                                case 3:
                                  task = _context17.sent;
                                  return _context17.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context17.stop();
                              }
                          },
                          _callee17,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Add or replace multiples documents to an index in batches
                 *
                 * @param documents - Array of Document objects to add/replace
                 * @param batchSize - Size of the batch
                 * @param options - Options on document addition
                 * @returns Promise containing array of enqueued task objects for each batch
                 */
              },
              {
                key: "addDocumentsInBatches",
                value: function addDocumentsInBatches(documents) {
                  var batchSize =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : 1e3;
                  var options = arguments.length > 2 ? arguments[2] : void 0;
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee18() {
                        var updates, i;
                        return _regeneratorRuntime().wrap(
                          function _callee18$(_context18) {
                            while (1)
                              switch ((_context18.prev = _context18.next)) {
                                case 0:
                                  updates = [];
                                  i = 0;
                                case 2:
                                  if (!(i < documents.length)) {
                                    _context18.next = 11;
                                    break;
                                  }
                                  _context18.t0 = updates;
                                  _context18.next = 6;
                                  return this.addDocuments(
                                    documents.slice(i, i + batchSize),
                                    options
                                  );
                                case 6:
                                  _context18.t1 = _context18.sent;
                                  _context18.t0.push.call(
                                    _context18.t0,
                                    _context18.t1
                                  );
                                case 8:
                                  i += batchSize;
                                  _context18.next = 2;
                                  break;
                                case 11:
                                  return _context18.abrupt("return", updates);
                                case 12:
                                case "end":
                                  return _context18.stop();
                              }
                          },
                          _callee18,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Add or update multiples documents to an index
                 *
                 * @param documents - Array of Document objects to add/update
                 * @param options - Options on document update
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateDocuments",
                value: function updateDocuments(documents, options) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee19() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee19$(_context19) {
                            while (1)
                              switch ((_context19.prev = _context19.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/documents"
                                  );
                                  _context19.next = 3;
                                  return this.httpRequest.put(
                                    url,
                                    documents,
                                    options
                                  );
                                case 3:
                                  task = _context19.sent;
                                  return _context19.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context19.stop();
                              }
                          },
                          _callee19,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Add or update multiples documents to an index in batches
                 *
                 * @param documents - Array of Document objects to add/update
                 * @param batchSize - Size of the batch
                 * @param options - Options on document update
                 * @returns Promise containing array of enqueued task objects for each batch
                 */
              },
              {
                key: "updateDocumentsInBatches",
                value: function updateDocumentsInBatches(documents) {
                  var batchSize =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : 1e3;
                  var options = arguments.length > 2 ? arguments[2] : void 0;
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee20() {
                        var updates, i;
                        return _regeneratorRuntime().wrap(
                          function _callee20$(_context20) {
                            while (1)
                              switch ((_context20.prev = _context20.next)) {
                                case 0:
                                  updates = [];
                                  i = 0;
                                case 2:
                                  if (!(i < documents.length)) {
                                    _context20.next = 11;
                                    break;
                                  }
                                  _context20.t0 = updates;
                                  _context20.next = 6;
                                  return this.updateDocuments(
                                    documents.slice(i, i + batchSize),
                                    options
                                  );
                                case 6:
                                  _context20.t1 = _context20.sent;
                                  _context20.t0.push.call(
                                    _context20.t0,
                                    _context20.t1
                                  );
                                case 8:
                                  i += batchSize;
                                  _context20.next = 2;
                                  break;
                                case 11:
                                  return _context20.abrupt("return", updates);
                                case 12:
                                case "end":
                                  return _context20.stop();
                              }
                          },
                          _callee20,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Add or update multiples documents in a string format to an index. It only
                 * supports csv, ndjson and json formats.
                 *
                 * @param documents - Documents provided in a string to add/update
                 * @param contentType - Content type of your document:
                 *   'text/csv'|'application/x-ndjson'|'application/json'
                 * @param queryParams - Options on raw document addition
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateDocumentsFromString",
                value: function updateDocumentsFromString(
                  documents,
                  contentType,
                  queryParams
                ) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee21() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee21$(_context21) {
                            while (1)
                              switch ((_context21.prev = _context21.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/documents"
                                  );
                                  _context21.next = 3;
                                  return this.httpRequest.put(
                                    url,
                                    documents,
                                    queryParams,
                                    {
                                      headers: {
                                        "Content-Type": contentType,
                                      },
                                    }
                                  );
                                case 3:
                                  task = _context21.sent;
                                  return _context21.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context21.stop();
                              }
                          },
                          _callee21,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Delete one document
                 *
                 * @param documentId - Id of Document to delete
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "deleteDocument",
                value: function deleteDocument(documentId) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee22() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee22$(_context22) {
                            while (1)
                              switch ((_context22.prev = _context22.next)) {
                                case 0:
                                  url = "indexes/"
                                    .concat(this.uid, "/documents/")
                                    .concat(documentId);
                                  _context22.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context22.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context22.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context22.stop();
                              }
                          },
                          _callee22,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Delete multiples documents of an index.
                 *
                 * @param params - Params value can be:
                 *
                 *   - DocumentsDeletionQuery: An object containing the parameters to customize
                 *       your document deletion. Only available in Meilisearch v1.2 and newer
                 *   - DocumentsIds: An array of document ids to delete
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "deleteDocuments",
                value: function deleteDocuments(params) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee23() {
                        var isDocumentsDeletionQuery, endpoint, url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee23$(_context23) {
                            while (1)
                              switch ((_context23.prev = _context23.next)) {
                                case 0:
                                  isDocumentsDeletionQuery =
                                    !Array.isArray(params) &&
                                    _typeof(params) === "object";
                                  endpoint = isDocumentsDeletionQuery
                                    ? "documents/delete"
                                    : "documents/delete-batch";
                                  url = "indexes/"
                                    .concat(this.uid, "/")
                                    .concat(endpoint);
                                  _context23.prev = 3;
                                  _context23.next = 6;
                                  return this.httpRequest.post(url, params);
                                case 6:
                                  task = _context23.sent;
                                  return _context23.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 10:
                                  _context23.prev = 10;
                                  _context23.t0 = _context23["catch"](3);
                                  if (
                                    _context23.t0 instanceof
                                      MeiliSearchCommunicationError &&
                                    isDocumentsDeletionQuery
                                  ) {
                                    _context23.t0.message =
                                      versionErrorHintMessage(
                                        _context23.t0.message,
                                        "deleteDocuments"
                                      );
                                  } else if (
                                    _context23.t0 instanceof MeiliSearchApiError
                                  ) {
                                    _context23.t0.message =
                                      versionErrorHintMessage(
                                        _context23.t0.message,
                                        "deleteDocuments"
                                      );
                                  }
                                  throw _context23.t0;
                                case 14:
                                case "end":
                                  return _context23.stop();
                              }
                          },
                          _callee23,
                          this,
                          [[3, 10]]
                        );
                      }
                    )
                  );
                },
                /**
                 * Delete all documents of an index
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "deleteAllDocuments",
                value: function deleteAllDocuments() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee24() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee24$(_context24) {
                            while (1)
                              switch ((_context24.prev = _context24.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/documents"
                                  );
                                  _context24.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context24.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context24.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context24.stop();
                              }
                          },
                          _callee24,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// SETTINGS
                ///
                /**
                 * Retrieve all settings
                 *
                 * @returns Promise containing Settings object
                 */
              },
              {
                key: "getSettings",
                value: function getSettings() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee25() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee25$(_context25) {
                            while (1)
                              switch ((_context25.prev = _context25.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings"
                                  );
                                  _context25.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context25.abrupt(
                                    "return",
                                    _context25.sent
                                  );
                                case 4:
                                case "end":
                                  return _context25.stop();
                              }
                          },
                          _callee25,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update all settings Any parameters not provided will be left unchanged.
                 *
                 * @param settings - Object containing parameters with their updated values
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateSettings",
                value: function updateSettings(settings) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee26() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee26$(_context26) {
                            while (1)
                              switch ((_context26.prev = _context26.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings"
                                  );
                                  _context26.next = 3;
                                  return this.httpRequest.patch(url, settings);
                                case 3:
                                  task = _context26.sent;
                                  task.enqueued = new Date(task.enqueuedAt);
                                  return _context26.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context26.stop();
                              }
                          },
                          _callee26,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset settings.
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetSettings",
                value: function resetSettings() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee27() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee27$(_context27) {
                            while (1)
                              switch ((_context27.prev = _context27.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings"
                                  );
                                  _context27.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context27.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context27.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context27.stop();
                              }
                          },
                          _callee27,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// PAGINATION SETTINGS
                ///
                /**
                 * Get the pagination settings.
                 *
                 * @returns Promise containing object of pagination settings
                 */
              },
              {
                key: "getPagination",
                value: function getPagination() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee28() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee28$(_context28) {
                            while (1)
                              switch ((_context28.prev = _context28.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/pagination"
                                  );
                                  _context28.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context28.abrupt(
                                    "return",
                                    _context28.sent
                                  );
                                case 4:
                                case "end":
                                  return _context28.stop();
                              }
                          },
                          _callee28,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the pagination settings.
                 *
                 * @param pagination - Pagination object
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updatePagination",
                value: function updatePagination(pagination) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee29() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee29$(_context29) {
                            while (1)
                              switch ((_context29.prev = _context29.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/pagination"
                                  );
                                  _context29.next = 3;
                                  return this.httpRequest.patch(
                                    url,
                                    pagination
                                  );
                                case 3:
                                  task = _context29.sent;
                                  return _context29.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context29.stop();
                              }
                          },
                          _callee29,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the pagination settings.
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetPagination",
                value: function resetPagination() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee30() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee30$(_context30) {
                            while (1)
                              switch ((_context30.prev = _context30.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/pagination"
                                  );
                                  _context30.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context30.sent;
                                  return _context30.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context30.stop();
                              }
                          },
                          _callee30,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// SYNONYMS
                ///
                /**
                 * Get the list of all synonyms
                 *
                 * @returns Promise containing object of synonym mappings
                 */
              },
              {
                key: "getSynonyms",
                value: function getSynonyms() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee31() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee31$(_context31) {
                            while (1)
                              switch ((_context31.prev = _context31.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/synonyms"
                                  );
                                  _context31.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context31.abrupt(
                                    "return",
                                    _context31.sent
                                  );
                                case 4:
                                case "end":
                                  return _context31.stop();
                              }
                          },
                          _callee31,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the list of synonyms. Overwrite the old list.
                 *
                 * @param synonyms - Mapping of synonyms with their associated words
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateSynonyms",
                value: function updateSynonyms(synonyms) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee32() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee32$(_context32) {
                            while (1)
                              switch ((_context32.prev = _context32.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/synonyms"
                                  );
                                  _context32.next = 3;
                                  return this.httpRequest.put(url, synonyms);
                                case 3:
                                  task = _context32.sent;
                                  return _context32.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context32.stop();
                              }
                          },
                          _callee32,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the synonym list to be empty again
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetSynonyms",
                value: function resetSynonyms() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee33() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee33$(_context33) {
                            while (1)
                              switch ((_context33.prev = _context33.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/synonyms"
                                  );
                                  _context33.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context33.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context33.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context33.stop();
                              }
                          },
                          _callee33,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// STOP WORDS
                ///
                /**
                 * Get the list of all stop-words
                 *
                 * @returns Promise containing array of stop-words
                 */
              },
              {
                key: "getStopWords",
                value: function getStopWords() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee34() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee34$(_context34) {
                            while (1)
                              switch ((_context34.prev = _context34.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/stop-words"
                                  );
                                  _context34.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context34.abrupt(
                                    "return",
                                    _context34.sent
                                  );
                                case 4:
                                case "end":
                                  return _context34.stop();
                              }
                          },
                          _callee34,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the list of stop-words. Overwrite the old list.
                 *
                 * @param stopWords - Array of strings that contains the stop-words.
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateStopWords",
                value: function updateStopWords(stopWords) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee35() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee35$(_context35) {
                            while (1)
                              switch ((_context35.prev = _context35.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/stop-words"
                                  );
                                  _context35.next = 3;
                                  return this.httpRequest.put(url, stopWords);
                                case 3:
                                  task = _context35.sent;
                                  return _context35.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context35.stop();
                              }
                          },
                          _callee35,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the stop-words list to be empty again
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetStopWords",
                value: function resetStopWords() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee36() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee36$(_context36) {
                            while (1)
                              switch ((_context36.prev = _context36.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/stop-words"
                                  );
                                  _context36.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context36.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context36.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context36.stop();
                              }
                          },
                          _callee36,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// RANKING RULES
                ///
                /**
                 * Get the list of all ranking-rules
                 *
                 * @returns Promise containing array of ranking-rules
                 */
              },
              {
                key: "getRankingRules",
                value: function getRankingRules() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee37() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee37$(_context37) {
                            while (1)
                              switch ((_context37.prev = _context37.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/ranking-rules"
                                  );
                                  _context37.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context37.abrupt(
                                    "return",
                                    _context37.sent
                                  );
                                case 4:
                                case "end":
                                  return _context37.stop();
                              }
                          },
                          _callee37,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the list of ranking-rules. Overwrite the old list.
                 *
                 * @param rankingRules - Array that contain ranking rules sorted by order of
                 *   importance.
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateRankingRules",
                value: function updateRankingRules(rankingRules) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee38() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee38$(_context38) {
                            while (1)
                              switch ((_context38.prev = _context38.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/ranking-rules"
                                  );
                                  _context38.next = 3;
                                  return this.httpRequest.put(
                                    url,
                                    rankingRules
                                  );
                                case 3:
                                  task = _context38.sent;
                                  return _context38.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context38.stop();
                              }
                          },
                          _callee38,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the ranking rules list to its default value
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetRankingRules",
                value: function resetRankingRules() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee39() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee39$(_context39) {
                            while (1)
                              switch ((_context39.prev = _context39.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/ranking-rules"
                                  );
                                  _context39.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context39.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context39.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context39.stop();
                              }
                          },
                          _callee39,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// DISTINCT ATTRIBUTE
                ///
                /**
                 * Get the distinct-attribute
                 *
                 * @returns Promise containing the distinct-attribute of the index
                 */
              },
              {
                key: "getDistinctAttribute",
                value: function getDistinctAttribute() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee40() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee40$(_context40) {
                            while (1)
                              switch ((_context40.prev = _context40.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/distinct-attribute"
                                  );
                                  _context40.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context40.abrupt(
                                    "return",
                                    _context40.sent
                                  );
                                case 4:
                                case "end":
                                  return _context40.stop();
                              }
                          },
                          _callee40,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the distinct-attribute.
                 *
                 * @param distinctAttribute - Field name of the distinct-attribute
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateDistinctAttribute",
                value: function updateDistinctAttribute(distinctAttribute) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee41() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee41$(_context41) {
                            while (1)
                              switch ((_context41.prev = _context41.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/distinct-attribute"
                                  );
                                  _context41.next = 3;
                                  return this.httpRequest.put(
                                    url,
                                    distinctAttribute
                                  );
                                case 3:
                                  task = _context41.sent;
                                  return _context41.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context41.stop();
                              }
                          },
                          _callee41,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the distinct-attribute.
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetDistinctAttribute",
                value: function resetDistinctAttribute() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee42() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee42$(_context42) {
                            while (1)
                              switch ((_context42.prev = _context42.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/distinct-attribute"
                                  );
                                  _context42.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context42.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context42.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context42.stop();
                              }
                          },
                          _callee42,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// FILTERABLE ATTRIBUTES
                ///
                /**
                 * Get the filterable-attributes
                 *
                 * @returns Promise containing an array of filterable-attributes
                 */
              },
              {
                key: "getFilterableAttributes",
                value: function getFilterableAttributes() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee43() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee43$(_context43) {
                            while (1)
                              switch ((_context43.prev = _context43.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/filterable-attributes"
                                  );
                                  _context43.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context43.abrupt(
                                    "return",
                                    _context43.sent
                                  );
                                case 4:
                                case "end":
                                  return _context43.stop();
                              }
                          },
                          _callee43,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the filterable-attributes.
                 *
                 * @param filterableAttributes - Array of strings containing the attributes
                 *   that can be used as filters at query time
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateFilterableAttributes",
                value: function updateFilterableAttributes(
                  filterableAttributes
                ) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee44() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee44$(_context44) {
                            while (1)
                              switch ((_context44.prev = _context44.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/filterable-attributes"
                                  );
                                  _context44.next = 3;
                                  return this.httpRequest.put(
                                    url,
                                    filterableAttributes
                                  );
                                case 3:
                                  task = _context44.sent;
                                  return _context44.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context44.stop();
                              }
                          },
                          _callee44,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the filterable-attributes.
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetFilterableAttributes",
                value: function resetFilterableAttributes() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee45() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee45$(_context45) {
                            while (1)
                              switch ((_context45.prev = _context45.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/filterable-attributes"
                                  );
                                  _context45.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context45.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context45.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context45.stop();
                              }
                          },
                          _callee45,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// SORTABLE ATTRIBUTES
                ///
                /**
                 * Get the sortable-attributes
                 *
                 * @returns Promise containing array of sortable-attributes
                 */
              },
              {
                key: "getSortableAttributes",
                value: function getSortableAttributes() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee46() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee46$(_context46) {
                            while (1)
                              switch ((_context46.prev = _context46.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/sortable-attributes"
                                  );
                                  _context46.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context46.abrupt(
                                    "return",
                                    _context46.sent
                                  );
                                case 4:
                                case "end":
                                  return _context46.stop();
                              }
                          },
                          _callee46,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the sortable-attributes.
                 *
                 * @param sortableAttributes - Array of strings containing the attributes that
                 *   can be used to sort search results at query time
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateSortableAttributes",
                value: function updateSortableAttributes(sortableAttributes) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee47() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee47$(_context47) {
                            while (1)
                              switch ((_context47.prev = _context47.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/sortable-attributes"
                                  );
                                  _context47.next = 3;
                                  return this.httpRequest.put(
                                    url,
                                    sortableAttributes
                                  );
                                case 3:
                                  task = _context47.sent;
                                  return _context47.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context47.stop();
                              }
                          },
                          _callee47,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the sortable-attributes.
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetSortableAttributes",
                value: function resetSortableAttributes() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee48() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee48$(_context48) {
                            while (1)
                              switch ((_context48.prev = _context48.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/sortable-attributes"
                                  );
                                  _context48.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context48.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context48.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context48.stop();
                              }
                          },
                          _callee48,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// SEARCHABLE ATTRIBUTE
                ///
                /**
                 * Get the searchable-attributes
                 *
                 * @returns Promise containing array of searchable-attributes
                 */
              },
              {
                key: "getSearchableAttributes",
                value: function getSearchableAttributes() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee49() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee49$(_context49) {
                            while (1)
                              switch ((_context49.prev = _context49.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/searchable-attributes"
                                  );
                                  _context49.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context49.abrupt(
                                    "return",
                                    _context49.sent
                                  );
                                case 4:
                                case "end":
                                  return _context49.stop();
                              }
                          },
                          _callee49,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the searchable-attributes.
                 *
                 * @param searchableAttributes - Array of strings that contains searchable
                 *   attributes sorted by order of importance(most to least important)
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateSearchableAttributes",
                value: function updateSearchableAttributes(
                  searchableAttributes
                ) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee50() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee50$(_context50) {
                            while (1)
                              switch ((_context50.prev = _context50.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/searchable-attributes"
                                  );
                                  _context50.next = 3;
                                  return this.httpRequest.put(
                                    url,
                                    searchableAttributes
                                  );
                                case 3:
                                  task = _context50.sent;
                                  return _context50.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context50.stop();
                              }
                          },
                          _callee50,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the searchable-attributes.
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetSearchableAttributes",
                value: function resetSearchableAttributes() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee51() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee51$(_context51) {
                            while (1)
                              switch ((_context51.prev = _context51.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/searchable-attributes"
                                  );
                                  _context51.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context51.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context51.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context51.stop();
                              }
                          },
                          _callee51,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// DISPLAYED ATTRIBUTE
                ///
                /**
                 * Get the displayed-attributes
                 *
                 * @returns Promise containing array of displayed-attributes
                 */
              },
              {
                key: "getDisplayedAttributes",
                value: function getDisplayedAttributes() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee52() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee52$(_context52) {
                            while (1)
                              switch ((_context52.prev = _context52.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/displayed-attributes"
                                  );
                                  _context52.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context52.abrupt(
                                    "return",
                                    _context52.sent
                                  );
                                case 4:
                                case "end":
                                  return _context52.stop();
                              }
                          },
                          _callee52,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the displayed-attributes.
                 *
                 * @param displayedAttributes - Array of strings that contains attributes of
                 *   an index to display
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateDisplayedAttributes",
                value: function updateDisplayedAttributes(displayedAttributes) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee53() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee53$(_context53) {
                            while (1)
                              switch ((_context53.prev = _context53.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/displayed-attributes"
                                  );
                                  _context53.next = 3;
                                  return this.httpRequest.put(
                                    url,
                                    displayedAttributes
                                  );
                                case 3:
                                  task = _context53.sent;
                                  return _context53.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context53.stop();
                              }
                          },
                          _callee53,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the displayed-attributes.
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetDisplayedAttributes",
                value: function resetDisplayedAttributes() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee54() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee54$(_context54) {
                            while (1)
                              switch ((_context54.prev = _context54.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/displayed-attributes"
                                  );
                                  _context54.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context54.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context54.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context54.stop();
                              }
                          },
                          _callee54,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// TYPO TOLERANCE
                ///
                /**
                 * Get the typo tolerance settings.
                 *
                 * @returns Promise containing the typo tolerance settings.
                 */
              },
              {
                key: "getTypoTolerance",
                value: function getTypoTolerance() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee55() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee55$(_context55) {
                            while (1)
                              switch ((_context55.prev = _context55.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/typo-tolerance"
                                  );
                                  _context55.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context55.abrupt(
                                    "return",
                                    _context55.sent
                                  );
                                case 4:
                                case "end":
                                  return _context55.stop();
                              }
                          },
                          _callee55,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the typo tolerance settings.
                 *
                 * @param typoTolerance - Object containing the custom typo tolerance
                 *   settings.
                 * @returns Promise containing object of the enqueued update
                 */
              },
              {
                key: "updateTypoTolerance",
                value: function updateTypoTolerance(typoTolerance) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee56() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee56$(_context56) {
                            while (1)
                              switch ((_context56.prev = _context56.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/typo-tolerance"
                                  );
                                  _context56.next = 3;
                                  return this.httpRequest.patch(
                                    url,
                                    typoTolerance
                                  );
                                case 3:
                                  task = _context56.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context56.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context56.stop();
                              }
                          },
                          _callee56,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the typo tolerance settings.
                 *
                 * @returns Promise containing object of the enqueued update
                 */
              },
              {
                key: "resetTypoTolerance",
                value: function resetTypoTolerance() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee57() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee57$(_context57) {
                            while (1)
                              switch ((_context57.prev = _context57.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/typo-tolerance"
                                  );
                                  _context57.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context57.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context57.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context57.stop();
                              }
                          },
                          _callee57,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// FACETING
                ///
                /**
                 * Get the faceting settings.
                 *
                 * @returns Promise containing object of faceting index settings
                 */
              },
              {
                key: "getFaceting",
                value: function getFaceting() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee58() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee58$(_context58) {
                            while (1)
                              switch ((_context58.prev = _context58.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/faceting"
                                  );
                                  _context58.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context58.abrupt(
                                    "return",
                                    _context58.sent
                                  );
                                case 4:
                                case "end":
                                  return _context58.stop();
                              }
                          },
                          _callee58,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the faceting settings.
                 *
                 * @param faceting - Faceting index settings object
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "updateFaceting",
                value: function updateFaceting(faceting) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee59() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee59$(_context59) {
                            while (1)
                              switch ((_context59.prev = _context59.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/faceting"
                                  );
                                  _context59.next = 3;
                                  return this.httpRequest.patch(url, faceting);
                                case 3:
                                  task = _context59.sent;
                                  return _context59.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context59.stop();
                              }
                          },
                          _callee59,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the faceting settings.
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetFaceting",
                value: function resetFaceting() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee60() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee60$(_context60) {
                            while (1)
                              switch ((_context60.prev = _context60.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/faceting"
                                  );
                                  _context60.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context60.sent;
                                  return _context60.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context60.stop();
                              }
                          },
                          _callee60,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// SEPARATOR TOKENS
                ///
                /**
                 * Get the list of all separator tokens.
                 *
                 * @returns Promise containing array of separator tokens
                 */
              },
              {
                key: "getSeparatorTokens",
                value: function getSeparatorTokens() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee61() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee61$(_context61) {
                            while (1)
                              switch ((_context61.prev = _context61.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/separator-tokens"
                                  );
                                  _context61.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context61.abrupt(
                                    "return",
                                    _context61.sent
                                  );
                                case 4:
                                case "end":
                                  return _context61.stop();
                              }
                          },
                          _callee61,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the list of separator tokens. Overwrite the old list.
                 *
                 * @param separatorTokens - Array that contains separator tokens.
                 * @returns Promise containing an EnqueuedTask or null
                 */
              },
              {
                key: "updateSeparatorTokens",
                value: function updateSeparatorTokens(separatorTokens) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee62() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee62$(_context62) {
                            while (1)
                              switch ((_context62.prev = _context62.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/separator-tokens"
                                  );
                                  _context62.next = 3;
                                  return this.httpRequest.put(
                                    url,
                                    separatorTokens
                                  );
                                case 3:
                                  task = _context62.sent;
                                  return _context62.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context62.stop();
                              }
                          },
                          _callee62,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the separator tokens list to its default value
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetSeparatorTokens",
                value: function resetSeparatorTokens() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee63() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee63$(_context63) {
                            while (1)
                              switch ((_context63.prev = _context63.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/separator-tokens"
                                  );
                                  _context63.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context63.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context63.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context63.stop();
                              }
                          },
                          _callee63,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// NON-SEPARATOR TOKENS
                ///
                /**
                 * Get the list of all non-separator tokens.
                 *
                 * @returns Promise containing array of non-separator tokens
                 */
              },
              {
                key: "getNonSeparatorTokens",
                value: function getNonSeparatorTokens() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee64() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee64$(_context64) {
                            while (1)
                              switch ((_context64.prev = _context64.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/non-separator-tokens"
                                  );
                                  _context64.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context64.abrupt(
                                    "return",
                                    _context64.sent
                                  );
                                case 4:
                                case "end":
                                  return _context64.stop();
                              }
                          },
                          _callee64,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the list of non-separator tokens. Overwrite the old list.
                 *
                 * @param nonSeparatorTokens - Array that contains non-separator tokens.
                 * @returns Promise containing an EnqueuedTask or null
                 */
              },
              {
                key: "updateNonSeparatorTokens",
                value: function updateNonSeparatorTokens(nonSeparatorTokens) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee65() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee65$(_context65) {
                            while (1)
                              switch ((_context65.prev = _context65.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/non-separator-tokens"
                                  );
                                  _context65.next = 3;
                                  return this.httpRequest.put(
                                    url,
                                    nonSeparatorTokens
                                  );
                                case 3:
                                  task = _context65.sent;
                                  return _context65.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context65.stop();
                              }
                          },
                          _callee65,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the non-separator tokens list to its default value
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetNonSeparatorTokens",
                value: function resetNonSeparatorTokens() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee66() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee66$(_context66) {
                            while (1)
                              switch ((_context66.prev = _context66.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/non-separator-tokens"
                                  );
                                  _context66.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context66.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context66.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context66.stop();
                              }
                          },
                          _callee66,
                          this
                        );
                      }
                    )
                  );
                },
                ///
                /// DICTIONARY
                ///
                /**
                 * Get the dictionary settings of a Meilisearch index.
                 *
                 * @returns Promise containing the dictionary settings
                 */
              },
              {
                key: "getDictionary",
                value: function getDictionary() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee67() {
                        var url;
                        return _regeneratorRuntime().wrap(
                          function _callee67$(_context67) {
                            while (1)
                              switch ((_context67.prev = _context67.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/dictionary"
                                  );
                                  _context67.next = 3;
                                  return this.httpRequest.get(url);
                                case 3:
                                  return _context67.abrupt(
                                    "return",
                                    _context67.sent
                                  );
                                case 4:
                                case "end":
                                  return _context67.stop();
                              }
                          },
                          _callee67,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Update the the dictionary settings. Overwrite the old settings.
                 *
                 * @param dictionary - Array that contains the new dictionary settings.
                 * @returns Promise containing an EnqueuedTask or null
                 */
              },
              {
                key: "updateDictionary",
                value: function updateDictionary(dictionary) {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee68() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee68$(_context68) {
                            while (1)
                              switch ((_context68.prev = _context68.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/dictionary"
                                  );
                                  _context68.next = 3;
                                  return this.httpRequest.put(url, dictionary);
                                case 3:
                                  task = _context68.sent;
                                  return _context68.abrupt(
                                    "return",
                                    new EnqueuedTask(task)
                                  );
                                case 5:
                                case "end":
                                  return _context68.stop();
                              }
                          },
                          _callee68,
                          this
                        );
                      }
                    )
                  );
                },
                /**
                 * Reset the dictionary settings to its default value
                 *
                 * @returns Promise containing an EnqueuedTask
                 */
              },
              {
                key: "resetDictionary",
                value: function resetDictionary() {
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee69() {
                        var url, task;
                        return _regeneratorRuntime().wrap(
                          function _callee69$(_context69) {
                            while (1)
                              switch ((_context69.prev = _context69.next)) {
                                case 0:
                                  url = "indexes/".concat(
                                    this.uid,
                                    "/settings/dictionary"
                                  );
                                  _context69.next = 3;
                                  return this.httpRequest.delete(url);
                                case 3:
                                  task = _context69.sent;
                                  task.enqueuedAt = new Date(task.enqueuedAt);
                                  return _context69.abrupt("return", task);
                                case 6:
                                case "end":
                                  return _context69.stop();
                              }
                          },
                          _callee69,
                          this
                        );
                      }
                    )
                  );
                },
              },
            ],
            [
              {
                key: "create",
                value: function create(uid) {
                  var options =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                  var config = arguments.length > 2 ? arguments[2] : void 0;
                  return __awaiter(
                    this,
                    void 0,
                    void 0,
                    /* @__PURE__ */ _regeneratorRuntime().mark(
                      function _callee70() {
                        var url, req, task;
                        return _regeneratorRuntime().wrap(function _callee70$(
                          _context70
                        ) {
                          while (1)
                            switch ((_context70.prev = _context70.next)) {
                              case 0:
                                url = "indexes";
                                req = new HttpRequests(config);
                                _context70.next = 4;
                                return req.post(
                                  url,
                                  Object.assign(Object.assign({}, options), {
                                    uid,
                                  })
                                );
                              case 4:
                                task = _context70.sent;
                                return _context70.abrupt(
                                  "return",
                                  new EnqueuedTask(task)
                                );
                              case 6:
                              case "end":
                                return _context70.stop();
                            }
                        },
                        _callee70);
                      }
                    )
                  );
                },
              },
            ]
          );
          return Index3;
        })();
        var Client = /* @__PURE__ */ (function () {
          function Client2(config) {
            _classCallCheck(this, Client2);
            this.config = config;
            this.httpRequest = new HttpRequests(config);
            this.tasks = new TaskClient(config);
          }
          _createClass(Client2, [
            {
              key: "index",
              value: function index(indexUid) {
                return new Index2(this.config, indexUid);
              },
              /**
               * Gather information about an index by calling MeiliSearch and return an
               * Index instance with the gathered information
               *
               * @param indexUid - The index UID
               * @returns Promise returning Index instance
               */
            },
            {
              key: "getIndex",
              value: function getIndex(indexUid) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee() {
                      return _regeneratorRuntime().wrap(
                        function _callee$(_context) {
                          while (1)
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                return _context.abrupt(
                                  "return",
                                  new Index2(this.config, indexUid).fetchInfo()
                                );
                              case 1:
                              case "end":
                                return _context.stop();
                            }
                        },
                        _callee,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Gather information about an index by calling MeiliSearch and return the raw
               * JSON response
               *
               * @param indexUid - The index UID
               * @returns Promise returning index information
               */
            },
            {
              key: "getRawIndex",
              value: function getRawIndex(indexUid) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee2() {
                      return _regeneratorRuntime().wrap(
                        function _callee2$(_context2) {
                          while (1)
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                return _context2.abrupt(
                                  "return",
                                  new Index2(this.config, indexUid).getRawInfo()
                                );
                              case 1:
                              case "end":
                                return _context2.stop();
                            }
                        },
                        _callee2,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Get all the indexes as Index instances.
               *
               * @param parameters - Parameters to browse the indexes
               * @returns Promise returning array of raw index information
               */
            },
            {
              key: "getIndexes",
              value: function getIndexes() {
                var parameters =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee3() {
                      var _this = this;
                      var rawIndexes, indexes;
                      return _regeneratorRuntime().wrap(
                        function _callee3$(_context3) {
                          while (1)
                            switch ((_context3.prev = _context3.next)) {
                              case 0:
                                _context3.next = 2;
                                return this.getRawIndexes(parameters);
                              case 2:
                                rawIndexes = _context3.sent;
                                indexes = rawIndexes.results.map(function (
                                  index
                                ) {
                                  return new Index2(
                                    _this.config,
                                    index.uid,
                                    index.primaryKey
                                  );
                                });
                                return _context3.abrupt(
                                  "return",
                                  Object.assign(Object.assign({}, rawIndexes), {
                                    results: indexes,
                                  })
                                );
                              case 5:
                              case "end":
                                return _context3.stop();
                            }
                        },
                        _callee3,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Get all the indexes in their raw value (no Index instances).
               *
               * @param parameters - Parameters to browse the indexes
               * @returns Promise returning array of raw index information
               */
            },
            {
              key: "getRawIndexes",
              value: function getRawIndexes() {
                var parameters =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee4() {
                      var url;
                      return _regeneratorRuntime().wrap(
                        function _callee4$(_context4) {
                          while (1)
                            switch ((_context4.prev = _context4.next)) {
                              case 0:
                                url = "indexes";
                                _context4.next = 3;
                                return this.httpRequest.get(url, parameters);
                              case 3:
                                return _context4.abrupt(
                                  "return",
                                  _context4.sent
                                );
                              case 4:
                              case "end":
                                return _context4.stop();
                            }
                        },
                        _callee4,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Create a new index
               *
               * @param uid - The index UID
               * @param options - Index options
               * @returns Promise returning Index instance
               */
            },
            {
              key: "createIndex",
              value: function createIndex(uid) {
                var options =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee5() {
                      return _regeneratorRuntime().wrap(
                        function _callee5$(_context5) {
                          while (1)
                            switch ((_context5.prev = _context5.next)) {
                              case 0:
                                _context5.next = 2;
                                return Index2.create(uid, options, this.config);
                              case 2:
                                return _context5.abrupt(
                                  "return",
                                  _context5.sent
                                );
                              case 3:
                              case "end":
                                return _context5.stop();
                            }
                        },
                        _callee5,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Update an index
               *
               * @param uid - The index UID
               * @param options - Index options to update
               * @returns Promise returning Index instance after updating
               */
            },
            {
              key: "updateIndex",
              value: function updateIndex(uid) {
                var options =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee6() {
                      return _regeneratorRuntime().wrap(
                        function _callee6$(_context6) {
                          while (1)
                            switch ((_context6.prev = _context6.next)) {
                              case 0:
                                _context6.next = 2;
                                return new Index2(this.config, uid).update(
                                  options
                                );
                              case 2:
                                return _context6.abrupt(
                                  "return",
                                  _context6.sent
                                );
                              case 3:
                              case "end":
                                return _context6.stop();
                            }
                        },
                        _callee6,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Delete an index
               *
               * @param uid - The index UID
               * @returns Promise which resolves when index is deleted successfully
               */
            },
            {
              key: "deleteIndex",
              value: function deleteIndex(uid) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee7() {
                      return _regeneratorRuntime().wrap(
                        function _callee7$(_context7) {
                          while (1)
                            switch ((_context7.prev = _context7.next)) {
                              case 0:
                                _context7.next = 2;
                                return new Index2(this.config, uid).delete();
                              case 2:
                                return _context7.abrupt(
                                  "return",
                                  _context7.sent
                                );
                              case 3:
                              case "end":
                                return _context7.stop();
                            }
                        },
                        _callee7,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Deletes an index if it already exists.
               *
               * @param uid - The index UID
               * @returns Promise which resolves to true when index exists and is deleted
               *   successfully, otherwise false if it does not exist
               */
            },
            {
              key: "deleteIndexIfExists",
              value: function deleteIndexIfExists(uid) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee8() {
                      return _regeneratorRuntime().wrap(
                        function _callee8$(_context8) {
                          while (1)
                            switch ((_context8.prev = _context8.next)) {
                              case 0:
                                _context8.prev = 0;
                                _context8.next = 3;
                                return this.deleteIndex(uid);
                              case 3:
                                return _context8.abrupt("return", true);
                              case 6:
                                _context8.prev = 6;
                                _context8.t0 = _context8["catch"](0);
                                if (
                                  !(_context8.t0.code === "index_not_found")
                                ) {
                                  _context8.next = 10;
                                  break;
                                }
                                return _context8.abrupt("return", false);
                              case 10:
                                throw _context8.t0;
                              case 11:
                              case "end":
                                return _context8.stop();
                            }
                        },
                        _callee8,
                        this,
                        [[0, 6]]
                      );
                    }
                  )
                );
              },
              /**
               * Swaps a list of index tuples.
               *
               * @param params - List of indexes tuples to swap.
               * @returns Promise returning object of the enqueued task
               */
            },
            {
              key: "swapIndexes",
              value: function swapIndexes(params) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee9() {
                      var url;
                      return _regeneratorRuntime().wrap(
                        function _callee9$(_context9) {
                          while (1)
                            switch ((_context9.prev = _context9.next)) {
                              case 0:
                                url = "/swap-indexes";
                                _context9.next = 3;
                                return this.httpRequest.post(url, params);
                              case 3:
                                return _context9.abrupt(
                                  "return",
                                  _context9.sent
                                );
                              case 4:
                              case "end":
                                return _context9.stop();
                            }
                        },
                        _callee9,
                        this
                      );
                    }
                  )
                );
              },
              ///
              /// Multi Search
              ///
              /**
               * Perform multiple search queries.
               *
               * It is possible to make multiple search queries on the same index or on
               * different ones
               *
               * @example
               *
               * ```ts
               * client.multiSearch({
               *   queries: [
               *     { indexUid: 'movies', q: 'wonder' },
               *     { indexUid: 'books', q: 'flower' },
               *   ],
               * })
               * ```
               *
               * @param queries - Search queries
               * @param config - Additional request configuration options
               * @returns Promise containing the search responses
               */
            },
            {
              key: "multiSearch",
              value: function multiSearch(queries, config) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee10() {
                      var url;
                      return _regeneratorRuntime().wrap(
                        function _callee10$(_context10) {
                          while (1)
                            switch ((_context10.prev = _context10.next)) {
                              case 0:
                                url = "multi-search";
                                _context10.next = 3;
                                return this.httpRequest.post(
                                  url,
                                  queries,
                                  void 0,
                                  config
                                );
                              case 3:
                                return _context10.abrupt(
                                  "return",
                                  _context10.sent
                                );
                              case 4:
                              case "end":
                                return _context10.stop();
                            }
                        },
                        _callee10,
                        this
                      );
                    }
                  )
                );
              },
              ///
              /// TASKS
              ///
              /**
               * Get the list of all client tasks
               *
               * @param parameters - Parameters to browse the tasks
               * @returns Promise returning all tasks
               */
            },
            {
              key: "getTasks",
              value: function getTasks() {
                var parameters =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee11() {
                      return _regeneratorRuntime().wrap(
                        function _callee11$(_context11) {
                          while (1)
                            switch ((_context11.prev = _context11.next)) {
                              case 0:
                                _context11.next = 2;
                                return this.tasks.getTasks(parameters);
                              case 2:
                                return _context11.abrupt(
                                  "return",
                                  _context11.sent
                                );
                              case 3:
                              case "end":
                                return _context11.stop();
                            }
                        },
                        _callee11,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Get one task on the client scope
               *
               * @param taskUid - Task identifier
               * @returns Promise returning a task
               */
            },
            {
              key: "getTask",
              value: function getTask(taskUid) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee12() {
                      return _regeneratorRuntime().wrap(
                        function _callee12$(_context12) {
                          while (1)
                            switch ((_context12.prev = _context12.next)) {
                              case 0:
                                _context12.next = 2;
                                return this.tasks.getTask(taskUid);
                              case 2:
                                return _context12.abrupt(
                                  "return",
                                  _context12.sent
                                );
                              case 3:
                              case "end":
                                return _context12.stop();
                            }
                        },
                        _callee12,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Wait for multiple tasks to be finished.
               *
               * @param taskUids - Tasks identifier
               * @param waitOptions - Options on timeout and interval
               * @returns Promise returning an array of tasks
               */
            },
            {
              key: "waitForTasks",
              value: function waitForTasks(taskUids) {
                var _ref =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  _ref$timeOutMs = _ref.timeOutMs,
                  timeOutMs = _ref$timeOutMs === void 0 ? 5e3 : _ref$timeOutMs,
                  _ref$intervalMs = _ref.intervalMs,
                  intervalMs =
                    _ref$intervalMs === void 0 ? 50 : _ref$intervalMs;
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee13() {
                      return _regeneratorRuntime().wrap(
                        function _callee13$(_context13) {
                          while (1)
                            switch ((_context13.prev = _context13.next)) {
                              case 0:
                                _context13.next = 2;
                                return this.tasks.waitForTasks(taskUids, {
                                  timeOutMs,
                                  intervalMs,
                                });
                              case 2:
                                return _context13.abrupt(
                                  "return",
                                  _context13.sent
                                );
                              case 3:
                              case "end":
                                return _context13.stop();
                            }
                        },
                        _callee13,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Wait for a task to be finished.
               *
               * @param taskUid - Task identifier
               * @param waitOptions - Options on timeout and interval
               * @returns Promise returning an array of tasks
               */
            },
            {
              key: "waitForTask",
              value: function waitForTask(taskUid) {
                var _ref2 =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  _ref2$timeOutMs = _ref2.timeOutMs,
                  timeOutMs =
                    _ref2$timeOutMs === void 0 ? 5e3 : _ref2$timeOutMs,
                  _ref2$intervalMs = _ref2.intervalMs,
                  intervalMs =
                    _ref2$intervalMs === void 0 ? 50 : _ref2$intervalMs;
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee14() {
                      return _regeneratorRuntime().wrap(
                        function _callee14$(_context14) {
                          while (1)
                            switch ((_context14.prev = _context14.next)) {
                              case 0:
                                _context14.next = 2;
                                return this.tasks.waitForTask(taskUid, {
                                  timeOutMs,
                                  intervalMs,
                                });
                              case 2:
                                return _context14.abrupt(
                                  "return",
                                  _context14.sent
                                );
                              case 3:
                              case "end":
                                return _context14.stop();
                            }
                        },
                        _callee14,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Cancel a list of enqueued or processing tasks.
               *
               * @param parameters - Parameters to filter the tasks.
               * @returns Promise containing an EnqueuedTask
               */
            },
            {
              key: "cancelTasks",
              value: function cancelTasks(parameters) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee15() {
                      return _regeneratorRuntime().wrap(
                        function _callee15$(_context15) {
                          while (1)
                            switch ((_context15.prev = _context15.next)) {
                              case 0:
                                _context15.next = 2;
                                return this.tasks.cancelTasks(parameters);
                              case 2:
                                return _context15.abrupt(
                                  "return",
                                  _context15.sent
                                );
                              case 3:
                              case "end":
                                return _context15.stop();
                            }
                        },
                        _callee15,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Delete a list of tasks.
               *
               * @param parameters - Parameters to filter the tasks.
               * @returns Promise containing an EnqueuedTask
               */
            },
            {
              key: "deleteTasks",
              value: function deleteTasks() {
                var parameters =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee16() {
                      return _regeneratorRuntime().wrap(
                        function _callee16$(_context16) {
                          while (1)
                            switch ((_context16.prev = _context16.next)) {
                              case 0:
                                _context16.next = 2;
                                return this.tasks.deleteTasks(parameters);
                              case 2:
                                return _context16.abrupt(
                                  "return",
                                  _context16.sent
                                );
                              case 3:
                              case "end":
                                return _context16.stop();
                            }
                        },
                        _callee16,
                        this
                      );
                    }
                  )
                );
              },
              ///
              /// KEYS
              ///
              /**
               * Get all API keys
               *
               * @param parameters - Parameters to browse the indexes
               * @returns Promise returning an object with keys
               */
            },
            {
              key: "getKeys",
              value: function getKeys() {
                var parameters =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {};
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee17() {
                      var url, keys;
                      return _regeneratorRuntime().wrap(
                        function _callee17$(_context17) {
                          while (1)
                            switch ((_context17.prev = _context17.next)) {
                              case 0:
                                url = "keys";
                                _context17.next = 3;
                                return this.httpRequest.get(url, parameters);
                              case 3:
                                keys = _context17.sent;
                                keys.results = keys.results.map(function (key) {
                                  return Object.assign(Object.assign({}, key), {
                                    createdAt: new Date(key.createdAt),
                                    updatedAt: new Date(key.updatedAt),
                                  });
                                });
                                return _context17.abrupt("return", keys);
                              case 6:
                              case "end":
                                return _context17.stop();
                            }
                        },
                        _callee17,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Get one API key
               *
               * @param keyOrUid - Key or uid of the API key
               * @returns Promise returning a key
               */
            },
            {
              key: "getKey",
              value: function getKey(keyOrUid) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee18() {
                      var url;
                      return _regeneratorRuntime().wrap(
                        function _callee18$(_context18) {
                          while (1)
                            switch ((_context18.prev = _context18.next)) {
                              case 0:
                                url = "keys/".concat(keyOrUid);
                                _context18.next = 3;
                                return this.httpRequest.get(url);
                              case 3:
                                return _context18.abrupt(
                                  "return",
                                  _context18.sent
                                );
                              case 4:
                              case "end":
                                return _context18.stop();
                            }
                        },
                        _callee18,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Create one API key
               *
               * @param options - Key options
               * @returns Promise returning a key
               */
            },
            {
              key: "createKey",
              value: function createKey(options) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee19() {
                      var url;
                      return _regeneratorRuntime().wrap(
                        function _callee19$(_context19) {
                          while (1)
                            switch ((_context19.prev = _context19.next)) {
                              case 0:
                                url = "keys";
                                _context19.next = 3;
                                return this.httpRequest.post(url, options);
                              case 3:
                                return _context19.abrupt(
                                  "return",
                                  _context19.sent
                                );
                              case 4:
                              case "end":
                                return _context19.stop();
                            }
                        },
                        _callee19,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Update one API key
               *
               * @param keyOrUid - Key
               * @param options - Key options
               * @returns Promise returning a key
               */
            },
            {
              key: "updateKey",
              value: function updateKey(keyOrUid, options) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee20() {
                      var url;
                      return _regeneratorRuntime().wrap(
                        function _callee20$(_context20) {
                          while (1)
                            switch ((_context20.prev = _context20.next)) {
                              case 0:
                                url = "keys/".concat(keyOrUid);
                                _context20.next = 3;
                                return this.httpRequest.patch(url, options);
                              case 3:
                                return _context20.abrupt(
                                  "return",
                                  _context20.sent
                                );
                              case 4:
                              case "end":
                                return _context20.stop();
                            }
                        },
                        _callee20,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Delete one API key
               *
               * @param keyOrUid - Key
               * @returns
               */
            },
            {
              key: "deleteKey",
              value: function deleteKey(keyOrUid) {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee21() {
                      var url;
                      return _regeneratorRuntime().wrap(
                        function _callee21$(_context21) {
                          while (1)
                            switch ((_context21.prev = _context21.next)) {
                              case 0:
                                url = "keys/".concat(keyOrUid);
                                _context21.next = 3;
                                return this.httpRequest.delete(url);
                              case 3:
                                return _context21.abrupt(
                                  "return",
                                  _context21.sent
                                );
                              case 4:
                              case "end":
                                return _context21.stop();
                            }
                        },
                        _callee21,
                        this
                      );
                    }
                  )
                );
              },
              ///
              /// HEALTH
              ///
              /**
               * Checks if the server is healthy, otherwise an error will be thrown.
               *
               * @returns Promise returning an object with health details
               */
            },
            {
              key: "health",
              value: function health() {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee22() {
                      var url;
                      return _regeneratorRuntime().wrap(
                        function _callee22$(_context22) {
                          while (1)
                            switch ((_context22.prev = _context22.next)) {
                              case 0:
                                url = "health";
                                _context22.next = 3;
                                return this.httpRequest.get(url);
                              case 3:
                                return _context22.abrupt(
                                  "return",
                                  _context22.sent
                                );
                              case 4:
                              case "end":
                                return _context22.stop();
                            }
                        },
                        _callee22,
                        this
                      );
                    }
                  )
                );
              },
              /**
               * Checks if the server is healthy, return true or false.
               *
               * @returns Promise returning a boolean
               */
            },
            {
              key: "isHealthy",
              value: function isHealthy() {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee23() {
                      var url;
                      return _regeneratorRuntime().wrap(
                        function _callee23$(_context23) {
                          while (1)
                            switch ((_context23.prev = _context23.next)) {
                              case 0:
                                _context23.prev = 0;
                                url = "health";
                                _context23.next = 4;
                                return this.httpRequest.get(url);
                              case 4:
                                return _context23.abrupt("return", true);
                              case 7:
                                _context23.prev = 7;
                                _context23.t0 = _context23["catch"](0);
                                return _context23.abrupt("return", false);
                              case 10:
                              case "end":
                                return _context23.stop();
                            }
                        },
                        _callee23,
                        this,
                        [[0, 7]]
                      );
                    }
                  )
                );
              },
              ///
              /// STATS
              ///
              /**
               * Get the stats of all the database
               *
               * @returns Promise returning object of all the stats
               */
            },
            {
              key: "getStats",
              value: function getStats() {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee24() {
                      var url;
                      return _regeneratorRuntime().wrap(
                        function _callee24$(_context24) {
                          while (1)
                            switch ((_context24.prev = _context24.next)) {
                              case 0:
                                url = "stats";
                                _context24.next = 3;
                                return this.httpRequest.get(url);
                              case 3:
                                return _context24.abrupt(
                                  "return",
                                  _context24.sent
                                );
                              case 4:
                              case "end":
                                return _context24.stop();
                            }
                        },
                        _callee24,
                        this
                      );
                    }
                  )
                );
              },
              ///
              /// VERSION
              ///
              /**
               * Get the version of MeiliSearch
               *
               * @returns Promise returning object with version details
               */
            },
            {
              key: "getVersion",
              value: function getVersion() {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee25() {
                      var url;
                      return _regeneratorRuntime().wrap(
                        function _callee25$(_context25) {
                          while (1)
                            switch ((_context25.prev = _context25.next)) {
                              case 0:
                                url = "version";
                                _context25.next = 3;
                                return this.httpRequest.get(url);
                              case 3:
                                return _context25.abrupt(
                                  "return",
                                  _context25.sent
                                );
                              case 4:
                              case "end":
                                return _context25.stop();
                            }
                        },
                        _callee25,
                        this
                      );
                    }
                  )
                );
              },
              ///
              /// DUMPS
              ///
              /**
               * Creates a dump
               *
               * @returns Promise returning object of the enqueued task
               */
            },
            {
              key: "createDump",
              value: function createDump() {
                return __awaiter(
                  this,
                  void 0,
                  void 0,
                  /* @__PURE__ */ _regeneratorRuntime().mark(
                    function _callee26() {
                      var url, task;
                      return _regeneratorRuntime().wrap(
                        function _callee26$(_context26) {
                          while (1)
                            switch ((_context26.prev = _context26.next)) {
                              case 0:
                                url = "dumps";
                                _context26.next = 3;
                                return this.httpRequest.post(url);
                              case 3:
                                task = _context26.sent;
                                return _context26.abrupt(
                                  "return",
                                  new EnqueuedTask(task)
                                );
                              case 5:
                              case "end":
                                return _context26.stop();
                            }
                        },
                        _callee26,
                        this
                      );
                    }
                  )
                );
              },
              ///
              /// TOKENS
              ///
              /**
               * Generate a tenant token
               *
               * @param apiKeyUid - The uid of the api key used as issuer of the token.
               * @param searchRules - Search rules that are applied to every search.
               * @param options - Token options to customize some aspect of the token.
               * @returns The token in JWT format.
               */
            },
            {
              key: "generateTenantToken",
              value: function generateTenantToken(
                _apiKeyUid,
                _searchRules,
                _options
              ) {
                var error = new Error();
                throw new Error(
                  "Meilisearch: failed to generate a tenant token. Generation of a token only works in a node environment \n ".concat(
                    error.stack,
                    "."
                  )
                );
              },
            },
          ]);
          return Client2;
        })();
        var MeiliSearch2 = /* @__PURE__ */ (function (_Client) {
          _inherits(MeiliSearch3, _Client);
          var _super = _createSuper(MeiliSearch3);
          function MeiliSearch3(config) {
            _classCallCheck(this, MeiliSearch3);
            return _super.call(this, config);
          }
          return _createClass(MeiliSearch3);
        })(Client);
        exports2.ContentTypeEnum = ContentTypeEnum;
        exports2.Index = Index2;
        exports2.MatchingStrategies = MatchingStrategies;
        exports2.MeiliSearch = MeiliSearch2;
        exports2.MeiliSearchApiError = MeiliSearchApiError;
        exports2.MeiliSearchCommunicationError = MeiliSearchCommunicationError;
        exports2.MeiliSearchError = MeiliSearchError;
        exports2.MeiliSearchTimeOutError = MeiliSearchTimeOutError;
        exports2["default"] = MeiliSearch2;
        exports2.httpErrorHandler = httpErrorHandler;
        exports2.httpResponseErrorHandler = httpResponseErrorHandler;
        exports2.versionErrorHintMessage = versionErrorHintMessage;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    },
  });

  // src/index.tsx
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default,
    docsearch: () => docsearch,
  });

  // node_modules/.pnpm/solid-js@1.8.5/node_modules/solid-js/dist/solid.js
  var sharedConfig = {
    context: void 0,
    registry: void 0,
  };
  function setHydrateContext(context) {
    sharedConfig.context = context;
  }
  function nextHydrateContext() {
    return {
      ...sharedConfig.context,
      id: `${sharedConfig.context.id}${sharedConfig.context.count++}-`,
      count: 0,
    };
  }
  var equalFn = (a, b) => a === b;
  var $PROXY = Symbol("solid-proxy");
  var $TRACK = Symbol("solid-track");
  var $DEVCOMP = Symbol("solid-dev-component");
  var signalOptions = {
    equals: equalFn,
  };
  var ERROR = null;
  var runEffects = runQueue;
  var STALE = 1;
  var PENDING = 2;
  var UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null,
  };
  var Owner = null;
  var Transition = null;
  var Scheduler = null;
  var ExternalSourceFactory = null;
  var Listener = null;
  var Updates = null;
  var Effects = null;
  var ExecCount = 0;
  var [transPending, setTransPending] = /* @__PURE__ */ createSignal(false);
  function createRoot(fn, detachedOwner) {
    const listener = Listener,
      owner = Owner,
      unowned = fn.length === 0,
      current = detachedOwner === void 0 ? owner : detachedOwner,
      root = unowned
        ? UNOWNED
        : {
            owned: null,
            cleanups: null,
            context: current ? current.context : null,
            owner: current,
          },
      updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
    Owner = root;
    Listener = null;
    try {
      return runUpdates(updateFn, true);
    } finally {
      Listener = listener;
      Owner = owner;
    }
  }
  function createSignal(value, options) {
    options = options
      ? Object.assign({}, signalOptions, options)
      : signalOptions;
    const s = {
      value,
      observers: null,
      observerSlots: null,
      comparator: options.equals || void 0,
    };
    const setter = (value2) => {
      if (typeof value2 === "function") {
        if (Transition && Transition.running && Transition.sources.has(s))
          value2 = value2(s.tValue);
        else value2 = value2(s.value);
      }
      return writeSignal(s, value2);
    };
    return [readSignal.bind(s), setter];
  }
  function createRenderEffect(fn, value, options) {
    const c = createComputation(fn, value, false, STALE);
    if (Scheduler && Transition && Transition.running) Updates.push(c);
    else updateComputation(c);
  }
  function createEffect(fn, value, options) {
    runEffects = runUserEffects;
    const c = createComputation(fn, value, false, STALE),
      s = SuspenseContext && useContext(SuspenseContext);
    if (s) c.suspense = s;
    if (!options || !options.render) c.user = true;
    Effects ? Effects.push(c) : updateComputation(c);
  }
  function createMemo(fn, value, options) {
    options = options
      ? Object.assign({}, signalOptions, options)
      : signalOptions;
    const c = createComputation(fn, value, true, 0);
    c.observers = null;
    c.observerSlots = null;
    c.comparator = options.equals || void 0;
    if (Scheduler && Transition && Transition.running) {
      c.tState = STALE;
      Updates.push(c);
    } else updateComputation(c);
    return readSignal.bind(c);
  }
  function untrack(fn) {
    if (Listener === null) return fn();
    const listener = Listener;
    Listener = null;
    try {
      return fn();
    } finally {
      Listener = listener;
    }
  }
  function onMount(fn) {
    createEffect(() => untrack(fn));
  }
  function onCleanup(fn) {
    if (Owner === null);
    else if (Owner.cleanups === null) Owner.cleanups = [fn];
    else Owner.cleanups.push(fn);
    return fn;
  }
  function getOwner() {
    return Owner;
  }
  function runWithOwner(o, fn) {
    const prev = Owner;
    const prevListener = Listener;
    Owner = o;
    Listener = null;
    try {
      return runUpdates(fn, true);
    } catch (err) {
      handleError(err);
    } finally {
      Owner = prev;
      Listener = prevListener;
    }
  }
  function startTransition(fn) {
    if (Transition && Transition.running) {
      fn();
      return Transition.done;
    }
    const l = Listener;
    const o = Owner;
    return Promise.resolve().then(() => {
      Listener = l;
      Owner = o;
      let t;
      if (Scheduler || SuspenseContext) {
        t =
          Transition ||
          (Transition = {
            sources: /* @__PURE__ */ new Set(),
            effects: [],
            promises: /* @__PURE__ */ new Set(),
            disposed: /* @__PURE__ */ new Set(),
            queue: /* @__PURE__ */ new Set(),
            running: true,
          });
        t.done || (t.done = new Promise((res) => (t.resolve = res)));
        t.running = true;
      }
      runUpdates(fn, false);
      Listener = Owner = null;
      return t ? t.done : void 0;
    });
  }
  function createContext(defaultValue, options) {
    const id = Symbol("context");
    return {
      id,
      Provider: createProvider(id),
      defaultValue,
    };
  }
  function useContext(context) {
    return Owner && Owner.context && Owner.context[context.id] !== void 0
      ? Owner.context[context.id]
      : context.defaultValue;
  }
  function children(fn) {
    const children2 = createMemo(fn);
    const memo = createMemo(() => resolveChildren(children2()));
    memo.toArray = () => {
      const c = memo();
      return Array.isArray(c) ? c : c != null ? [c] : [];
    };
    return memo;
  }
  var SuspenseContext;
  function readSignal() {
    const runningTransition = Transition && Transition.running;
    if (this.sources && (runningTransition ? this.tState : this.state)) {
      if ((runningTransition ? this.tState : this.state) === STALE)
        updateComputation(this);
      else {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(this), false);
        Updates = updates;
      }
    }
    if (Listener) {
      const sSlot = this.observers ? this.observers.length : 0;
      if (!Listener.sources) {
        Listener.sources = [this];
        Listener.sourceSlots = [sSlot];
      } else {
        Listener.sources.push(this);
        Listener.sourceSlots.push(sSlot);
      }
      if (!this.observers) {
        this.observers = [Listener];
        this.observerSlots = [Listener.sources.length - 1];
      } else {
        this.observers.push(Listener);
        this.observerSlots.push(Listener.sources.length - 1);
      }
    }
    if (runningTransition && Transition.sources.has(this)) return this.tValue;
    return this.value;
  }
  function writeSignal(node, value, isComp) {
    let current =
      Transition && Transition.running && Transition.sources.has(node)
        ? node.tValue
        : node.value;
    if (!node.comparator || !node.comparator(current, value)) {
      if (Transition) {
        const TransitionRunning = Transition.running;
        if (TransitionRunning || (!isComp && Transition.sources.has(node))) {
          Transition.sources.add(node);
          node.tValue = value;
        }
        if (!TransitionRunning) node.value = value;
      } else node.value = value;
      if (node.observers && node.observers.length) {
        runUpdates(() => {
          for (let i = 0; i < node.observers.length; i += 1) {
            const o = node.observers[i];
            const TransitionRunning = Transition && Transition.running;
            if (TransitionRunning && Transition.disposed.has(o)) continue;
            if (TransitionRunning ? !o.tState : !o.state) {
              if (o.pure) Updates.push(o);
              else Effects.push(o);
              if (o.observers) markDownstream(o);
            }
            if (!TransitionRunning) o.state = STALE;
            else o.tState = STALE;
          }
          if (Updates.length > 1e6) {
            Updates = [];
            if (false);
            throw new Error();
          }
        }, false);
      }
    }
    return value;
  }
  function updateComputation(node) {
    if (!node.fn) return;
    cleanNode(node);
    const owner = Owner,
      listener = Listener,
      time = ExecCount;
    Listener = Owner = node;
    runComputation(
      node,
      Transition && Transition.running && Transition.sources.has(node)
        ? node.tValue
        : node.value,
      time
    );
    if (Transition && !Transition.running && Transition.sources.has(node)) {
      queueMicrotask(() => {
        runUpdates(() => {
          Transition && (Transition.running = true);
          Listener = Owner = node;
          runComputation(node, node.tValue, time);
          Listener = Owner = null;
        }, false);
      });
    }
    Listener = listener;
    Owner = owner;
  }
  function runComputation(node, value, time) {
    let nextValue;
    try {
      nextValue = node.fn(value);
    } catch (err) {
      if (node.pure) {
        if (Transition && Transition.running) {
          node.tState = STALE;
          node.tOwned && node.tOwned.forEach(cleanNode);
          node.tOwned = void 0;
        } else {
          node.state = STALE;
          node.owned && node.owned.forEach(cleanNode);
          node.owned = null;
        }
      }
      node.updatedAt = time + 1;
      return handleError(err);
    }
    if (!node.updatedAt || node.updatedAt <= time) {
      if (node.updatedAt != null && "observers" in node) {
        writeSignal(node, nextValue, true);
      } else if (Transition && Transition.running && node.pure) {
        Transition.sources.add(node);
        node.tValue = nextValue;
      } else node.value = nextValue;
      node.updatedAt = time;
    }
  }
  function createComputation(fn, init, pure, state = STALE, options) {
    const c = {
      fn,
      state,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: init,
      owner: Owner,
      context: Owner ? Owner.context : null,
      pure,
    };
    if (Transition && Transition.running) {
      c.state = 0;
      c.tState = state;
    }
    if (Owner === null);
    else if (Owner !== UNOWNED) {
      if (Transition && Transition.running && Owner.pure) {
        if (!Owner.tOwned) Owner.tOwned = [c];
        else Owner.tOwned.push(c);
      } else {
        if (!Owner.owned) Owner.owned = [c];
        else Owner.owned.push(c);
      }
    }
    if (ExternalSourceFactory) {
      const [track, trigger] = createSignal(void 0, {
        equals: false,
      });
      const ordinary = ExternalSourceFactory(c.fn, trigger);
      onCleanup(() => ordinary.dispose());
      const triggerInTransition = () =>
        startTransition(trigger).then(() => inTransition.dispose());
      const inTransition = ExternalSourceFactory(c.fn, triggerInTransition);
      c.fn = (x) => {
        track();
        return Transition && Transition.running
          ? inTransition.track(x)
          : ordinary.track(x);
      };
    }
    return c;
  }
  function runTop(node) {
    const runningTransition = Transition && Transition.running;
    if ((runningTransition ? node.tState : node.state) === 0) return;
    if ((runningTransition ? node.tState : node.state) === PENDING)
      return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback))
      return node.suspense.effects.push(node);
    const ancestors = [node];
    while (
      (node = node.owner) &&
      (!node.updatedAt || node.updatedAt < ExecCount)
    ) {
      if (runningTransition && Transition.disposed.has(node)) return;
      if (runningTransition ? node.tState : node.state) ancestors.push(node);
    }
    for (let i = ancestors.length - 1; i >= 0; i--) {
      node = ancestors[i];
      if (runningTransition) {
        let top = node,
          prev = ancestors[i + 1];
        while ((top = top.owner) && top !== prev) {
          if (Transition.disposed.has(top)) return;
        }
      }
      if ((runningTransition ? node.tState : node.state) === STALE) {
        updateComputation(node);
      } else if ((runningTransition ? node.tState : node.state) === PENDING) {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(node, ancestors[0]), false);
        Updates = updates;
      }
    }
  }
  function runUpdates(fn, init) {
    if (Updates) return fn();
    let wait = false;
    if (!init) Updates = [];
    if (Effects) wait = true;
    else Effects = [];
    ExecCount++;
    try {
      const res = fn();
      completeUpdates(wait);
      return res;
    } catch (err) {
      if (!wait) Effects = null;
      Updates = null;
      handleError(err);
    }
  }
  function completeUpdates(wait) {
    if (Updates) {
      if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);
      else runQueue(Updates);
      Updates = null;
    }
    if (wait) return;
    let res;
    if (Transition) {
      if (!Transition.promises.size && !Transition.queue.size) {
        const sources = Transition.sources;
        const disposed = Transition.disposed;
        Effects.push.apply(Effects, Transition.effects);
        res = Transition.resolve;
        for (const e2 of Effects) {
          "tState" in e2 && (e2.state = e2.tState);
          delete e2.tState;
        }
        Transition = null;
        runUpdates(() => {
          for (const d of disposed) cleanNode(d);
          for (const v of sources) {
            v.value = v.tValue;
            if (v.owned) {
              for (let i = 0, len = v.owned.length; i < len; i++)
                cleanNode(v.owned[i]);
            }
            if (v.tOwned) v.owned = v.tOwned;
            delete v.tValue;
            delete v.tOwned;
            v.tState = 0;
          }
          setTransPending(false);
        }, false);
      } else if (Transition.running) {
        Transition.running = false;
        Transition.effects.push.apply(Transition.effects, Effects);
        Effects = null;
        setTransPending(true);
        return;
      }
    }
    const e = Effects;
    Effects = null;
    if (e.length) runUpdates(() => runEffects(e), false);
    if (res) res();
  }
  function runQueue(queue) {
    for (let i = 0; i < queue.length; i++) runTop(queue[i]);
  }
  function scheduleQueue(queue) {
    for (let i = 0; i < queue.length; i++) {
      const item = queue[i];
      const tasks = Transition.queue;
      if (!tasks.has(item)) {
        tasks.add(item);
        Scheduler(() => {
          tasks.delete(item);
          runUpdates(() => {
            Transition.running = true;
            runTop(item);
          }, false);
          Transition && (Transition.running = false);
        });
      }
    }
  }
  function runUserEffects(queue) {
    let i,
      userLength = 0;
    for (i = 0; i < queue.length; i++) {
      const e = queue[i];
      if (!e.user) runTop(e);
      else queue[userLength++] = e;
    }
    if (sharedConfig.context) {
      if (sharedConfig.count) {
        sharedConfig.effects || (sharedConfig.effects = []);
        sharedConfig.effects.push(...queue.slice(0, userLength));
        return;
      } else if (sharedConfig.effects) {
        queue = [...sharedConfig.effects, ...queue];
        userLength += sharedConfig.effects.length;
        delete sharedConfig.effects;
      }
      setHydrateContext();
    }
    for (i = 0; i < userLength; i++) runTop(queue[i]);
  }
  function lookUpstream(node, ignore) {
    const runningTransition = Transition && Transition.running;
    if (runningTransition) node.tState = 0;
    else node.state = 0;
    for (let i = 0; i < node.sources.length; i += 1) {
      const source = node.sources[i];
      if (source.sources) {
        const state = runningTransition ? source.tState : source.state;
        if (state === STALE) {
          if (
            source !== ignore &&
            (!source.updatedAt || source.updatedAt < ExecCount)
          )
            runTop(source);
        } else if (state === PENDING) lookUpstream(source, ignore);
      }
    }
  }
  function markDownstream(node) {
    const runningTransition = Transition && Transition.running;
    for (let i = 0; i < node.observers.length; i += 1) {
      const o = node.observers[i];
      if (runningTransition ? !o.tState : !o.state) {
        if (runningTransition) o.tState = PENDING;
        else o.state = PENDING;
        if (o.pure) Updates.push(o);
        else Effects.push(o);
        o.observers && markDownstream(o);
      }
    }
  }
  function cleanNode(node) {
    let i;
    if (node.sources) {
      while (node.sources.length) {
        const source = node.sources.pop(),
          index = node.sourceSlots.pop(),
          obs = source.observers;
        if (obs && obs.length) {
          const n = obs.pop(),
            s = source.observerSlots.pop();
          if (index < obs.length) {
            n.sourceSlots[s] = index;
            obs[index] = n;
            source.observerSlots[index] = s;
          }
        }
      }
    }
    if (Transition && Transition.running && node.pure) {
      if (node.tOwned) {
        for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
        delete node.tOwned;
      }
      reset(node, true);
    } else if (node.owned) {
      for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
      node.owned = null;
    }
    if (node.cleanups) {
      for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
      node.cleanups = null;
    }
    if (Transition && Transition.running) node.tState = 0;
    else node.state = 0;
  }
  function reset(node, top) {
    if (!top) {
      node.tState = 0;
      Transition.disposed.add(node);
    }
    if (node.owned) {
      for (let i = 0; i < node.owned.length; i++) reset(node.owned[i]);
    }
  }
  function castError(err) {
    if (err instanceof Error) return err;
    return new Error(typeof err === "string" ? err : "Unknown error", {
      cause: err,
    });
  }
  function runErrors(err, fns, owner) {
    try {
      for (const f of fns) f(err);
    } catch (e) {
      handleError(e, (owner && owner.owner) || null);
    }
  }
  function handleError(err, owner = Owner) {
    const fns = ERROR && owner && owner.context && owner.context[ERROR];
    const error = castError(err);
    if (!fns) throw error;
    if (Effects)
      Effects.push({
        fn() {
          runErrors(error, fns, owner);
        },
        state: STALE,
      });
    else runErrors(error, fns, owner);
  }
  function resolveChildren(children2) {
    if (typeof children2 === "function" && !children2.length)
      return resolveChildren(children2());
    if (Array.isArray(children2)) {
      const results = [];
      for (let i = 0; i < children2.length; i++) {
        const result = resolveChildren(children2[i]);
        Array.isArray(result)
          ? results.push.apply(results, result)
          : results.push(result);
      }
      return results;
    }
    return children2;
  }
  function createProvider(id, options) {
    return function provider(props) {
      let res;
      createRenderEffect(
        () =>
          (res = untrack(() => {
            Owner.context = {
              ...Owner.context,
              [id]: props.value,
            };
            return children(() => props.children);
          })),
        void 0
      );
      return res;
    };
  }
  var FALLBACK = Symbol("fallback");
  function dispose(d) {
    for (let i = 0; i < d.length; i++) d[i]();
  }
  function mapArray(list, mapFn, options = {}) {
    let items = [],
      mapped = [],
      disposers = [],
      len = 0,
      indexes = mapFn.length > 1 ? [] : null;
    onCleanup(() => dispose(disposers));
    return () => {
      let newItems = list() || [],
        i,
        j;
      newItems[$TRACK];
      return untrack(() => {
        let newLen = newItems.length,
          newIndices,
          newIndicesNext,
          temp,
          tempdisposers,
          tempIndexes,
          start,
          end,
          newEnd,
          item;
        if (newLen === 0) {
          if (len !== 0) {
            dispose(disposers);
            disposers = [];
            items = [];
            mapped = [];
            len = 0;
            indexes && (indexes = []);
          }
          if (options.fallback) {
            items = [FALLBACK];
            mapped[0] = createRoot((disposer) => {
              disposers[0] = disposer;
              return options.fallback();
            });
            len = 1;
          }
        } else if (len === 0) {
          mapped = new Array(newLen);
          for (j = 0; j < newLen; j++) {
            items[j] = newItems[j];
            mapped[j] = createRoot(mapper);
          }
          len = newLen;
        } else {
          temp = new Array(newLen);
          tempdisposers = new Array(newLen);
          indexes && (tempIndexes = new Array(newLen));
          for (
            start = 0, end = Math.min(len, newLen);
            start < end && items[start] === newItems[start];
            start++
          );
          for (
            end = len - 1, newEnd = newLen - 1;
            end >= start && newEnd >= start && items[end] === newItems[newEnd];
            end--, newEnd--
          ) {
            temp[newEnd] = mapped[end];
            tempdisposers[newEnd] = disposers[end];
            indexes && (tempIndexes[newEnd] = indexes[end]);
          }
          newIndices = /* @__PURE__ */ new Map();
          newIndicesNext = new Array(newEnd + 1);
          for (j = newEnd; j >= start; j--) {
            item = newItems[j];
            i = newIndices.get(item);
            newIndicesNext[j] = i === void 0 ? -1 : i;
            newIndices.set(item, j);
          }
          for (i = start; i <= end; i++) {
            item = items[i];
            j = newIndices.get(item);
            if (j !== void 0 && j !== -1) {
              temp[j] = mapped[i];
              tempdisposers[j] = disposers[i];
              indexes && (tempIndexes[j] = indexes[i]);
              j = newIndicesNext[j];
              newIndices.set(item, j);
            } else disposers[i]();
          }
          for (j = start; j < newLen; j++) {
            if (j in temp) {
              mapped[j] = temp[j];
              disposers[j] = tempdisposers[j];
              if (indexes) {
                indexes[j] = tempIndexes[j];
                indexes[j](j);
              }
            } else mapped[j] = createRoot(mapper);
          }
          mapped = mapped.slice(0, (len = newLen));
          items = newItems.slice(0);
        }
        return mapped;
      });
      function mapper(disposer) {
        disposers[j] = disposer;
        if (indexes) {
          const [s, set] = createSignal(j);
          indexes[j] = set;
          return mapFn(newItems[j], s);
        }
        return mapFn(newItems[j]);
      }
    };
  }
  var hydrationEnabled = false;
  function createComponent(Comp, props) {
    if (hydrationEnabled) {
      if (sharedConfig.context) {
        const c = sharedConfig.context;
        setHydrateContext(nextHydrateContext());
        const r = untrack(() => Comp(props || {}));
        setHydrateContext(c);
        return r;
      }
    }
    return untrack(() => Comp(props || {}));
  }
  function trueFn() {
    return true;
  }
  var propTraps = {
    get(_, property, receiver) {
      if (property === $PROXY) return receiver;
      return _.get(property);
    },
    has(_, property) {
      if (property === $PROXY) return true;
      return _.has(property);
    },
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor(_, property) {
      return {
        configurable: true,
        enumerable: true,
        get() {
          return _.get(property);
        },
        set: trueFn,
        deleteProperty: trueFn,
      };
    },
    ownKeys(_) {
      return _.keys();
    },
  };
  function resolveSource(s) {
    return !(s = typeof s === "function" ? s() : s) ? {} : s;
  }
  function resolveSources() {
    for (let i = 0, length = this.length; i < length; ++i) {
      const v = this[i]();
      if (v !== void 0) return v;
    }
  }
  function mergeProps(...sources) {
    let proxy = false;
    for (let i = 0; i < sources.length; i++) {
      const s = sources[i];
      proxy = proxy || (!!s && $PROXY in s);
      sources[i] =
        typeof s === "function" ? ((proxy = true), createMemo(s)) : s;
    }
    if (proxy) {
      return new Proxy(
        {
          get(property) {
            for (let i = sources.length - 1; i >= 0; i--) {
              const v = resolveSource(sources[i])[property];
              if (v !== void 0) return v;
            }
          },
          has(property) {
            for (let i = sources.length - 1; i >= 0; i--) {
              if (property in resolveSource(sources[i])) return true;
            }
            return false;
          },
          keys() {
            const keys = [];
            for (let i = 0; i < sources.length; i++)
              keys.push(...Object.keys(resolveSource(sources[i])));
            return [...new Set(keys)];
          },
        },
        propTraps
      );
    }
    const target = {};
    const sourcesMap = {};
    const defined = /* @__PURE__ */ new Set();
    for (let i = sources.length - 1; i >= 0; i--) {
      const source = sources[i];
      if (!source) continue;
      const sourceKeys = Object.getOwnPropertyNames(source);
      for (let i2 = 0, length = sourceKeys.length; i2 < length; i2++) {
        const key = sourceKeys[i2];
        if (key === "__proto__" || key === "constructor") continue;
        const desc = Object.getOwnPropertyDescriptor(source, key);
        if (!defined.has(key)) {
          if (desc.get) {
            defined.add(key);
            Object.defineProperty(target, key, {
              enumerable: true,
              configurable: true,
              get: resolveSources.bind(
                (sourcesMap[key] = [desc.get.bind(source)])
              ),
            });
          } else {
            if (desc.value !== void 0) defined.add(key);
            target[key] = desc.value;
          }
        } else {
          const sources2 = sourcesMap[key];
          if (sources2) {
            if (desc.get) {
              sources2.push(desc.get.bind(source));
            } else if (desc.value !== void 0) {
              sources2.push(() => desc.value);
            }
          } else if (target[key] === void 0) target[key] = desc.value;
        }
      }
    }
    return target;
  }
  var narrowedError = (name) => `Stale read from <${name}>.`;
  function For(props) {
    const fallback = "fallback" in props && {
      fallback: () => props.fallback,
    };
    return createMemo(
      mapArray(() => props.each, props.children, fallback || void 0)
    );
  }
  function Show(props) {
    const keyed = props.keyed;
    const condition = createMemo(() => props.when, void 0, {
      equals: (a, b) => (keyed ? a === b : !a === !b),
    });
    return createMemo(
      () => {
        const c = condition();
        if (c) {
          const child = props.children;
          const fn = typeof child === "function" && child.length > 0;
          return fn
            ? untrack(() =>
                child(
                  keyed
                    ? c
                    : () => {
                        if (!untrack(condition)) throw narrowedError("Show");
                        return props.when;
                      }
                )
              )
            : child;
        }
        return props.fallback;
      },
      void 0,
      void 0
    );
  }
  function Switch(props) {
    let keyed = false;
    const equals = (a, b) =>
      a[0] === b[0] &&
      (keyed ? a[1] === b[1] : !a[1] === !b[1]) &&
      a[2] === b[2];
    const conditions = children(() => props.children),
      evalConditions = createMemo(
        () => {
          let conds = conditions();
          if (!Array.isArray(conds)) conds = [conds];
          for (let i = 0; i < conds.length; i++) {
            const c = conds[i].when;
            if (c) {
              keyed = !!conds[i].keyed;
              return [i, c, conds[i]];
            }
          }
          return [-1];
        },
        void 0,
        {
          equals,
        }
      );
    return createMemo(
      () => {
        const [index, when, cond] = evalConditions();
        if (index < 0) return props.fallback;
        const c = cond.children;
        const fn = typeof c === "function" && c.length > 0;
        return fn
          ? untrack(() =>
              c(
                keyed
                  ? when
                  : () => {
                      if (untrack(evalConditions)[0] !== index)
                        throw narrowedError("Match");
                      return cond.when;
                    }
              )
            )
          : c;
      },
      void 0,
      void 0
    );
  }
  function Match(props) {
    return props;
  }
  var SuspenseListContext = createContext();

  // node_modules/.pnpm/solid-js@1.8.5/node_modules/solid-js/web/dist/web.js
  var booleans = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected",
  ];
  var Properties = /* @__PURE__ */ new Set([
    "className",
    "value",
    "readOnly",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...booleans,
  ]);
  function reconcileArrays(parentNode, a, b) {
    let bLength = b.length,
      aEnd = a.length,
      bEnd = bLength,
      aStart = 0,
      bStart = 0,
      after = a[aEnd - 1].nextSibling,
      map = null;
    while (aStart < aEnd || bStart < bEnd) {
      if (a[aStart] === b[bStart]) {
        aStart++;
        bStart++;
        continue;
      }
      while (a[aEnd - 1] === b[bEnd - 1]) {
        aEnd--;
        bEnd--;
      }
      if (aEnd === aStart) {
        const node =
          bEnd < bLength
            ? bStart
              ? b[bStart - 1].nextSibling
              : b[bEnd - bStart]
            : after;
        while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
      } else if (bEnd === bStart) {
        while (aStart < aEnd) {
          if (!map || !map.has(a[aStart])) a[aStart].remove();
          aStart++;
        }
      } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
        const node = a[--aEnd].nextSibling;
        parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
        parentNode.insertBefore(b[--bEnd], node);
        a[aEnd] = b[bEnd];
      } else {
        if (!map) {
          map = /* @__PURE__ */ new Map();
          let i = bStart;
          while (i < bEnd) map.set(b[i], i++);
        }
        const index = map.get(a[aStart]);
        if (index != null) {
          if (bStart < index && index < bEnd) {
            let i = aStart,
              sequence = 1,
              t;
            while (++i < aEnd && i < bEnd) {
              if ((t = map.get(a[i])) == null || t !== index + sequence) break;
              sequence++;
            }
            if (sequence > index - bStart) {
              const node = a[aStart];
              while (bStart < index) parentNode.insertBefore(b[bStart++], node);
            } else parentNode.replaceChild(b[bStart++], a[aStart++]);
          } else aStart++;
        } else a[aStart++].remove();
      }
    }
  }
  var $$EVENTS = "_$DX_DELEGATE";
  function render(code, element, init, options = {}) {
    let disposer;
    createRoot((dispose2) => {
      disposer = dispose2;
      element === document
        ? code()
        : insert(element, code(), element.firstChild ? null : void 0, init);
    }, options.owner);
    return () => {
      disposer();
      element.textContent = "";
    };
  }
  function template(html, isCE, isSVG) {
    let node;
    const create = () => {
      const t = document.createElement("template");
      t.innerHTML = html;
      return isSVG ? t.content.firstChild.firstChild : t.content.firstChild;
    };
    const fn = isCE
      ? () =>
          untrack(() => document.importNode(node || (node = create()), true))
      : () => (node || (node = create())).cloneNode(true);
    fn.cloneNode = fn;
    return fn;
  }
  function delegateEvents(eventNames, document2 = window.document) {
    const e =
      document2[$$EVENTS] || (document2[$$EVENTS] = /* @__PURE__ */ new Set());
    for (let i = 0, l = eventNames.length; i < l; i++) {
      const name = eventNames[i];
      if (!e.has(name)) {
        e.add(name);
        document2.addEventListener(name, eventHandler);
      }
    }
  }
  function setAttribute(node, name, value) {
    if (sharedConfig.context) return;
    if (value == null) node.removeAttribute(name);
    else node.setAttribute(name, value);
  }
  function addEventListener(node, name, handler, delegate) {
    if (delegate) {
      if (Array.isArray(handler)) {
        node[`$$${name}`] = handler[0];
        node[`$$${name}Data`] = handler[1];
      } else node[`$$${name}`] = handler;
    } else if (Array.isArray(handler)) {
      const handlerFn = handler[0];
      node.addEventListener(
        name,
        (handler[0] = (e) => handlerFn.call(node, handler[1], e))
      );
    } else node.addEventListener(name, handler);
  }
  function use(fn, element, arg) {
    return untrack(() => fn(element, arg));
  }
  function insert(parent, accessor, marker, initial) {
    if (marker !== void 0 && !initial) initial = [];
    if (typeof accessor !== "function")
      return insertExpression(parent, accessor, initial, marker);
    createRenderEffect(
      (current) => insertExpression(parent, accessor(), current, marker),
      initial
    );
  }
  function eventHandler(e) {
    const key = `$$${e.type}`;
    let node = (e.composedPath && e.composedPath()[0]) || e.target;
    if (e.target !== node) {
      Object.defineProperty(e, "target", {
        configurable: true,
        value: node,
      });
    }
    Object.defineProperty(e, "currentTarget", {
      configurable: true,
      get() {
        return node || document;
      },
    });
    if (sharedConfig.registry && !sharedConfig.done)
      sharedConfig.done = _$HY.done = true;
    while (node) {
      const handler = node[key];
      if (handler && !node.disabled) {
        const data = node[`${key}Data`];
        data !== void 0 ? handler.call(node, data, e) : handler.call(node, e);
        if (e.cancelBubble) return;
      }
      node = node._$host || node.parentNode || node.host;
    }
  }
  function insertExpression(parent, value, current, marker, unwrapArray) {
    if (sharedConfig.context) {
      !current && (current = [...parent.childNodes]);
      let cleaned = [];
      for (let i = 0; i < current.length; i++) {
        const node = current[i];
        if (node.nodeType === 8 && node.data.slice(0, 2) === "!$")
          node.remove();
        else cleaned.push(node);
      }
      current = cleaned;
    }
    while (typeof current === "function") current = current();
    if (value === current) return current;
    const t = typeof value,
      multi = marker !== void 0;
    parent = (multi && current[0] && current[0].parentNode) || parent;
    if (t === "string" || t === "number") {
      if (sharedConfig.context) return current;
      if (t === "number") value = value.toString();
      if (multi) {
        let node = current[0];
        if (node && node.nodeType === 3) {
          node.data = value;
        } else node = document.createTextNode(value);
        current = cleanChildren(parent, current, marker, node);
      } else {
        if (current !== "" && typeof current === "string") {
          current = parent.firstChild.data = value;
        } else current = parent.textContent = value;
      }
    } else if (value == null || t === "boolean") {
      if (sharedConfig.context) return current;
      current = cleanChildren(parent, current, marker);
    } else if (t === "function") {
      createRenderEffect(() => {
        let v = value();
        while (typeof v === "function") v = v();
        current = insertExpression(parent, v, current, marker);
      });
      return () => current;
    } else if (Array.isArray(value)) {
      const array = [];
      const currentArray = current && Array.isArray(current);
      if (normalizeIncomingArray(array, value, current, unwrapArray)) {
        createRenderEffect(
          () =>
            (current = insertExpression(parent, array, current, marker, true))
        );
        return () => current;
      }
      if (sharedConfig.context) {
        if (!array.length) return current;
        if (marker === void 0) return [...parent.childNodes];
        let node = array[0];
        let nodes = [node];
        while ((node = node.nextSibling) !== marker) nodes.push(node);
        return (current = nodes);
      }
      if (array.length === 0) {
        current = cleanChildren(parent, current, marker);
        if (multi) return current;
      } else if (currentArray) {
        if (current.length === 0) {
          appendNodes(parent, array, marker);
        } else reconcileArrays(parent, current, array);
      } else {
        current && cleanChildren(parent);
        appendNodes(parent, array);
      }
      current = array;
    } else if (value.nodeType) {
      if (sharedConfig.context && value.parentNode)
        return (current = multi ? [value] : value);
      if (Array.isArray(current)) {
        if (multi)
          return (current = cleanChildren(parent, current, marker, value));
        cleanChildren(parent, current, null, value);
      } else if (current == null || current === "" || !parent.firstChild) {
        parent.appendChild(value);
      } else parent.replaceChild(value, parent.firstChild);
      current = value;
    } else;
    return current;
  }
  function normalizeIncomingArray(normalized, array, current, unwrap) {
    let dynamic = false;
    for (let i = 0, len = array.length; i < len; i++) {
      let item = array[i],
        prev = current && current[i],
        t;
      if (item == null || item === true || item === false);
      else if ((t = typeof item) === "object" && item.nodeType) {
        normalized.push(item);
      } else if (Array.isArray(item)) {
        dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
      } else if (t === "function") {
        if (unwrap) {
          while (typeof item === "function") item = item();
          dynamic =
            normalizeIncomingArray(
              normalized,
              Array.isArray(item) ? item : [item],
              Array.isArray(prev) ? prev : [prev]
            ) || dynamic;
        } else {
          normalized.push(item);
          dynamic = true;
        }
      } else {
        const value = String(item);
        if (prev && prev.nodeType === 3 && prev.data === value)
          normalized.push(prev);
        else normalized.push(document.createTextNode(value));
      }
    }
    return dynamic;
  }
  function appendNodes(parent, array, marker = null) {
    for (let i = 0, len = array.length; i < len; i++)
      parent.insertBefore(array[i], marker);
  }
  function cleanChildren(parent, current, marker, replacement) {
    if (marker === void 0) return (parent.textContent = "");
    const node = replacement || document.createTextNode("");
    if (current.length) {
      let inserted = false;
      for (let i = current.length - 1; i >= 0; i--) {
        const el = current[i];
        if (node !== el) {
          const isParent = el.parentNode === parent;
          if (!inserted && !i)
            isParent
              ? parent.replaceChild(node, el)
              : parent.insertBefore(node, marker);
          else isParent && el.remove();
        } else inserted = true;
      }
    } else parent.insertBefore(node, marker);
    return [node];
  }
  var RequestContext = Symbol();
  var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  function createElement(tagName, isSVG = false) {
    return isSVG
      ? document.createElementNS(SVG_NAMESPACE, tagName)
      : document.createElement(tagName);
  }
  function Portal(props) {
    const { useShadow } = props,
      marker = document.createTextNode(""),
      mount = () => props.mount || document.body,
      owner = getOwner();
    let content;
    let hydrating = !!sharedConfig.context;
    createEffect(
      () => {
        if (hydrating) getOwner().user = hydrating = false;
        content ||
          (content = runWithOwner(owner, () =>
            createMemo(() => props.children)
          ));
        const el = mount();
        if (el instanceof HTMLHeadElement) {
          const [clean, setClean] = createSignal(false);
          const cleanup = () => setClean(true);
          createRoot((dispose2) =>
            insert(el, () => (!clean() ? content() : dispose2()), null)
          );
          onCleanup(cleanup);
        } else {
          const container = createElement(
              props.isSVG ? "g" : "div",
              props.isSVG
            ),
            renderRoot =
              useShadow && container.attachShadow
                ? container.attachShadow({
                    mode: "open",
                  })
                : container;
          Object.defineProperty(container, "_$host", {
            get() {
              return marker.parentNode;
            },
            configurable: true,
          });
          insert(renderRoot, content);
          el.appendChild(container);
          props.ref && props.ref(container);
          onCleanup(() => el.removeChild(container));
        }
      },
      void 0,
      {
        render: !hydrating,
      }
    );
    return marker;
  }

  // src/icons/Magnifier.tsx
  var _tmpl$ = /* @__PURE__ */ template(
    `<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"><path fill=currentColor d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z">`
  );
  var MagnifierIcon = (props) => {
    return (() => {
      const _el$ = _tmpl$();
      createRenderEffect(() => setAttribute(_el$, "class", props.class));
      return _el$;
    })();
  };

  // src/utils.ts
  function renameKeysWithLevels(object, prefix) {
    return Object.keys(object).reduce((acc, key) => {
      const result = acc;
      if (key.startsWith(prefix)) {
        const newKey = key.replace(prefix, "");
        result[newKey] = object[key];
      } else {
        result[key] = object[key];
      }
      return result;
    }, {});
  }
  function replaceNullString(object) {
    return Object.keys(object).reduce((acc, key) => {
      const result = acc;
      if (typeof object[key] === "string" && object[key] === "null") {
        result[key] = null;
      } else {
        result[key] = object[key];
      }
      return result;
    }, {});
  }
  function groupBy(collection, property) {
    const newCollection = {};
    collection.forEach((item) => {
      if (item[property] === void 0) {
        throw new Error(`[groupBy]: Object has no key ${new String(property)}`);
      }
      let key = item[property];
      if (!Object.prototype.hasOwnProperty.call(newCollection, key)) {
        newCollection[key] = [];
      }
      newCollection[key].push(item);
    });
    return newCollection;
  }
  function compact(array) {
    const results = [];
    array.forEach((value) => {
      if (!value) {
        return;
      }
      results.push(value);
    });
    return results;
  }
  function getHighlightedValue(object, property) {
    if (
      object._formatted &&
      object._formatted[property] &&
      typeof object._formatted[property] === "string"
    ) {
      return replaceHtmlTagsToHighlight(object._formatted[property]);
    }
    return object[property];
  }
  function replaceHtmlTagsToHighlight(str) {
    return str
      .replace(
        /<em>/g,
        '<span class="docsearch-modal-search-hits-item--highlight">'
      )
      .replace(/<\/em>/g, "</span>");
  }
  function getSnippetedValue(object, property) {
    if (
      !object._formatted ||
      !object._formatted[property] ||
      typeof object._formatted[property] !== "string"
    ) {
      return object[property];
    }
    let snippet = replaceHtmlTagsToHighlight(object._formatted[property]);
    if (snippet[0] !== snippet[0].toUpperCase()) {
      snippet = `\u2026${snippet}`;
    }
    if ([".", "!", "?"].indexOf(snippet[snippet.length - 1]) === -1) {
      snippet = `${snippet}\u2026`;
    }
    return snippet;
  }
  function deepClone(object) {
    return JSON.parse(JSON.stringify(object));
  }
  function debounce(func, waitFor = 300) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), waitFor);
    };
  }
  function isCtrl(key) {
    return /(ctrl|control|command|cmd|commandorcontrl|cmdorctrl)/i.test(key);
  }
  function isAlt(key) {
    return /(alt|option)/i.test(key);
  }
  function isMeta(key) {
    return /(meta|super)/i.test(key);
  }
  function isAppleDevice() {
    return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
  }

  // src/DocSearchButton.tsx
  var _tmpl$2 = /* @__PURE__ */ template(
    `<button type=button class=docsearch-btn><span class=docsearch-btn-icon-container></span><span class=docsearch-btn-placeholder> <!> `
  );
  var _tmpl$22 = /* @__PURE__ */ template(`<span class=docsearch-btn-keys>`);
  var _tmpl$3 = /* @__PURE__ */ template(`<kbd class=docsearch-btn-key>`);
  var CTRL_KEY_DEFAULT = "Ctrl";
  var CTRL_KEY_APPLE = "\u2318";
  var ALT_KEY_DEFAULT = "Alt";
  var ALT_KEY_APPLE = "Option";
  var DocSearchButton = ({ onClick, hotKeys, translations = {} }) => {
    const { buttonText = "Search", buttonAriaLabel = "Search" } = translations;
    const [ctrlKey, setCtrlKey] = createSignal(null);
    const [altKey, setAltKey] = createSignal(null);
    onMount(() => {
      if (typeof navigator !== "undefined") {
        if (isAppleDevice()) {
          setCtrlKey(CTRL_KEY_APPLE);
          setAltKey(ALT_KEY_APPLE);
        } else {
          setCtrlKey(CTRL_KEY_DEFAULT);
          setAltKey(ALT_KEY_DEFAULT);
        }
      }
    });
    return (() => {
      const _el$ = _tmpl$2(),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.nextSibling,
        _el$4 = _el$3.firstChild,
        _el$6 = _el$4.nextSibling,
        _el$5 = _el$6.nextSibling;
      addEventListener(_el$, "click", onClick, true);
      setAttribute(_el$, "aria-label", buttonAriaLabel);
      insert(
        _el$2,
        createComponent(MagnifierIcon, {
          class: "docsearch-modal-btn-icon",
        })
      );
      insert(_el$3, buttonText, _el$6);
      insert(
        _el$,
        (() => {
          const _c$ = createMemo(() => !!(hotKeys && hotKeys.length > 0));
          return () =>
            _c$() &&
            (() => {
              const _el$7 = _tmpl$22();
              insert(
                _el$7,
                createComponent(For, {
                  get each() {
                    return hotKeys[0].split("+");
                  },
                  children: (k) =>
                    (() => {
                      const _el$8 = _tmpl$3();
                      insert(
                        _el$8,
                        (() => {
                          const _c$2 = createMemo(() => !!isCtrl(k));
                          return () =>
                            _c$2()
                              ? ctrlKey()
                              : (() => {
                                  const _c$3 = createMemo(() => !!isAlt(k));
                                  return () =>
                                    _c$3()
                                      ? altKey()
                                      : k[0].toUpperCase() + k.slice(1);
                                })();
                        })()
                      );
                      return _el$8;
                    })(),
                })
              );
              return _el$7;
            })();
        })(),
        null
      );
      return _el$;
    })();
  };
  delegateEvents(["click"]);

  // src/useDocSearchHotKeys.ts
  function useDocSearchHotKeys({ isOpen, onOpen, onClose, onInput, hotKeys }) {
    function isEditingContent(event) {
      const element = event.target;
      const tagName = element.tagName;
      return (
        element.isContentEditable ||
        tagName === "INPUT" ||
        tagName === "SELECT" ||
        tagName === "TEXTAREA"
      );
    }
    function isHotKey(event) {
      const modsAndkeys =
        hotKeys && hotKeys.map((k) => k.toLowerCase().split("+"));
      if (modsAndkeys) {
        return modsAndkeys.some((modsAndkeys2) => {
          if (
            modsAndkeys2.length === 1 &&
            event.key.toLowerCase() === modsAndkeys2[0] &&
            !event.ctrlKey &&
            !event.altKey &&
            !event.shiftKey &&
            !isEditingContent(event) &&
            !isOpen()
          ) {
            return true;
          }
          if (modsAndkeys2.length > 1) {
            const key = modsAndkeys2[modsAndkeys2.length - 1];
            if (event.key.toLowerCase() !== key) return false;
            const ctrl =
              (isAppleDevice() ? event.metaKey : event.ctrlKey) ==
              modsAndkeys2.some(isCtrl);
            const shift = event.shiftKey == modsAndkeys2.includes("shift");
            const alt = event.altKey == modsAndkeys2.some(isAlt);
            const meta =
              !isAppleDevice() && event.metaKey == modsAndkeys2.some(isMeta);
            return ctrl && shift && alt && meta;
          }
          return false;
        });
      }
      return false;
    }
    function onKeyDown(e) {
      if ((e.key === "Escape" && isOpen()) || isHotKey(e)) {
        e.preventDefault();
        if (isOpen()) {
          onClose();
        } else if (!document.body.classList.contains("docsearch--active")) {
          const selectedText = window.getSelection();
          if (selectedText) onInput(selectedText.toString());
          onOpen();
        }
      }
    }
    onMount(() => window.addEventListener("keydown", onKeyDown));
    onCleanup(() => window.removeEventListener("keydown", onKeyDown));
  }

  // src/icons/Down.tsx
  var _tmpl$4 = /* @__PURE__ */ template(
    `<svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 24 24"><path fill=currentColor d="M12 4a1 1 0 0 1 1 1v11.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.586V5a1 1 0 0 1 1-1z">`
  );
  var DownIcon = (props) => {
    return (() => {
      const _el$ = _tmpl$4();
      createRenderEffect(
        (_p$) => {
          const _v$ = props.class,
            _v$2 = props["aria-label"];
          _v$ !== _p$._v$ && setAttribute(_el$, "class", (_p$._v$ = _v$));
          _v$2 !== _p$._v$2 &&
            setAttribute(_el$, "aria-label", (_p$._v$2 = _v$2));
          return _p$;
        },
        {
          _v$: void 0,
          _v$2: void 0,
        }
      );
      return _el$;
    })();
  };

  // src/icons/Enter.tsx
  var _tmpl$5 = /* @__PURE__ */ template(
    `<svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 24 24"><g fill=currentColor fill-rule=evenodd clip-rule=evenodd><path d="M3 14a1 1 0 0 1 1-1h12a3 3 0 0 0 3-3V6a1 1 0 1 1 2 0v4a5 5 0 0 1-5 5H4a1 1 0 0 1-1-1z"></path><path d="M3.293 14.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 14l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4z">`
  );
  var EnterIcon = (props) => {
    return (() => {
      const _el$ = _tmpl$5();
      createRenderEffect(
        (_p$) => {
          const _v$ = props.class,
            _v$2 = props["aria-label"];
          _v$ !== _p$._v$ && setAttribute(_el$, "class", (_p$._v$ = _v$));
          _v$2 !== _p$._v$2 &&
            setAttribute(_el$, "aria-label", (_p$._v$2 = _v$2));
          return _p$;
        },
        {
          _v$: void 0,
          _v$2: void 0,
        }
      );
      return _el$;
    })();
  };

  // src/icons/Esc.tsx
  var _tmpl$6 = /* @__PURE__ */ template(
    `<svg width=15 height=15 viewBox="0 0 15 15"role=img><g fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.2><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956">`
  );
  var EscIcon = (props) => {
    return (() => {
      const _el$ = _tmpl$6();
      createRenderEffect(
        (_p$) => {
          const _v$ = props.class,
            _v$2 = props["aria-label"];
          _v$ !== _p$._v$ && setAttribute(_el$, "class", (_p$._v$ = _v$));
          _v$2 !== _p$._v$2 &&
            setAttribute(_el$, "aria-label", (_p$._v$2 = _v$2));
          return _p$;
        },
        {
          _v$: void 0,
          _v$2: void 0,
        }
      );
      return _el$;
    })();
  };

  // src/icons/MeilisearchDark.tsx
  var _tmpl$7 = /* @__PURE__ */ template(
    `<svg width=110 height=30 viewBox="0 0 495 74"><path d="M181.842 42.5349C181.842 37.6137 184.201 34.715 188.718 34.715C192.965 34.715 194.381 37.7486 194.381 41.6585V62.6238H203.953V40.5799C203.953 32.3556 199.639 26.4907 191.145 26.4907C186.089 26.4907 182.516 28.0412 179.415 31.4792C177.393 28.3782 173.955 26.4907 169.168 26.4907C164.112 26.4907 160.607 28.5805 158.989 31.614V27.2996H150.158V62.6238H159.731V42.3326C159.731 37.6137 162.157 34.715 166.607 34.715C170.854 34.715 172.269 37.7486 172.269 41.6585V62.6238H181.842V42.5349Z"fill=white></path><path d="M243.245 47.7256C243.245 47.7256 243.379 46.4448 243.379 44.8943C243.379 34.4454 236.301 26.4907 225.852 26.4907C215.403 26.4907 208.123 34.4454 208.123 44.8943C208.123 55.7477 215.471 63.4327 225.92 63.4327C234.077 63.4327 240.548 58.5116 242.638 51.3659H232.998C231.852 53.9276 229.088 55.2084 226.189 55.2084C221.403 55.2084 218.302 52.5793 217.628 47.7256H243.245ZM225.785 34.1757C230.234 34.1757 233.133 36.8722 233.807 40.8495H217.763C218.572 36.8048 221.403 34.1757 225.785 34.1757Z"fill=white></path><path d="M244.791 35.524H249.038V62.6238H258.61V27.2996H244.791V35.524ZM253.824 22.7156C257.195 22.7156 259.622 20.3561 259.622 16.9855C259.622 13.6149 257.195 11.188 253.824 11.188C250.454 11.188 248.027 13.6149 248.027 16.9855C248.027 20.3561 250.454 22.7156 253.824 22.7156Z"fill=white></path><path d="M278.432 54.3995C278.163 54.3995 277.758 54.4669 277.152 54.4669C274.994 54.4669 274.725 53.4557 274.725 51.9726V12.0644H265.152V52.6467C265.152 59.6576 267.849 62.7586 275.466 62.7586C276.747 62.7586 277.96 62.6238 278.432 62.5564V54.3995Z"fill=white></path><path d="M279.521 35.524H283.768V62.6238H293.341V27.2996H279.521V35.524ZM288.555 22.7156C291.925 22.7156 294.352 20.3561 294.352 16.9855C294.352 13.6149 291.925 11.188 288.555 11.188C285.184 11.188 282.757 13.6149 282.757 16.9855C282.757 20.3561 285.184 22.7156 288.555 22.7156Z"fill=white></path><path d="M312.557 62.9937C321.86 62.9937 326.242 58.0726 326.242 52.8819C326.242 38.4556 305.007 46.4777 305.007 36.9725C305.007 33.8716 307.636 31.2425 312.962 31.2425C318.422 31.2425 320.984 34.2086 321.388 37.9163H326.175C325.77 33.2648 322.602 27.0629 313.097 27.0629C304.94 27.0629 300.356 31.9166 300.356 37.1748C300.356 51.264 321.591 43.1745 321.591 53.0167C321.591 56.4547 318.355 58.8142 312.557 58.8142C306.625 58.8142 303.659 55.848 303.322 51.4662H298.468C298.873 57.4659 302.648 62.9937 312.557 62.9937Z"fill=white></path><path d="M364.256 46.4103C364.256 46.4103 364.324 45.3317 364.324 44.5901C364.324 34.8827 358.054 27.0629 347.808 27.0629C337.494 27.0629 330.955 35.4894 330.955 44.9946C330.955 54.6346 337.022 62.9937 347.875 62.9937C356.032 62.9937 361.695 58.0052 363.717 51.4662H358.729C357.245 55.6458 353.201 58.6794 347.943 58.6794C340.729 58.6794 336.213 53.3538 335.741 46.4103H364.256ZM347.808 31.3773C354.549 31.3773 358.931 35.8939 359.538 42.5004H335.876C336.685 36.1636 341.134 31.3773 347.808 31.3773Z"fill=white></path><path d="M394.037 45.871V49.1068C394.037 54.9717 389.79 59.0164 381.634 59.0164C376.578 59.0164 373.814 56.9266 373.814 52.41C373.814 50.118 374.892 48.3652 376.578 47.4215C378.33 46.4777 380.69 45.871 394.037 45.871ZM381.094 62.9937C387.027 62.9937 391.813 61.1062 394.24 57.1963V62.1848H398.824V39.7364C398.824 32.1188 394.442 27.0629 384.532 27.0629C375.027 27.0629 370.848 31.8492 369.971 37.9837H374.623C375.566 33.13 379.274 31.1751 384.33 31.1751C390.802 31.1751 394.037 33.8716 394.037 39.669V41.8936C383.184 41.8936 378.667 42.0959 375.297 43.4441C371.387 44.9946 369.095 48.4327 369.095 52.5448C369.095 58.5445 372.937 62.9937 381.094 62.9937Z"fill=white></path><path d="M424.991 27.6022C424.991 27.6022 424.182 27.5348 423.845 27.5348C417.509 27.5348 414.138 30.838 412.857 33.1974V27.8718H408.273V62.1848H413.059V42.7026C413.059 35.5569 417.441 32.0514 423.306 32.0514C424.182 32.0514 424.991 32.1188 424.991 32.1188V27.6022Z"fill=white></path><path d="M425.809 45.062C425.809 54.4324 432.28 62.9937 442.729 62.9937C452.032 62.9937 457.425 56.7918 458.773 49.9831H453.92C452.504 55.3087 448.594 58.6794 442.729 58.6794C435.516 58.6794 430.662 52.9493 430.662 45.062C430.662 37.1073 435.516 31.3773 442.729 31.3773C448.594 31.3773 452.504 34.7479 453.92 40.0735H458.773C457.425 33.2648 452.032 27.0629 442.729 27.0629C432.28 27.0629 425.809 35.6243 425.809 45.062Z"fill=white></path><path d="M470.041 11.6254H465.255V62.1848H470.041V41.8936C470.041 34.8827 474.558 31.2425 480.355 31.2425C486.49 31.2425 489.389 35.0176 489.389 41.2195V62.1848H494.175V40.2757C494.175 32.6581 489.658 27.0629 481.164 27.0629C474.76 27.0629 471.255 30.5683 470.041 32.6581V11.6254Z"fill=white></path><path d="M0.825012 73.993L24.0688 14.5224C27.3443 6.14179 35.4223 0.625977 44.4203 0.625977H58.4336L35.1899 60.0966C31.9143 68.4772 23.8363 73.993 14.8384 73.993H0.825012Z"fill=url(#paint0_linear_0_3)></path><path d="M34.9246 73.9932L58.1684 14.5226C61.444 6.14197 69.5219 0.626152 78.5199 0.626152H92.5333L69.2895 60.0968C66.014 68.4774 57.936 73.9932 48.938 73.9932H34.9246Z"fill=url(#paint1_linear_0_3)></path><path d="M69.0262 73.9932L92.27 14.5226C95.5456 6.14197 103.624 0.626152 112.622 0.626152H126.635L103.391 60.0968C100.116 68.4774 92.0376 73.9932 83.0396 73.9932H69.0262Z"fill=url(#paint2_linear_0_3)></path><defs><linearGradient id=paint0_linear_0_3 x1=126.635 y1=-4.97799 x2=0.825008 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62></stop></linearGradient><linearGradient id=paint1_linear_0_3 x1=126.635 y1=-4.97799 x2=0.825008 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62></stop></linearGradient><linearGradient id=paint2_linear_0_3 x1=126.635 y1=-4.97799 x2=0.825008 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62>`
  );
  var MeilisearchDarkIcon = (props) => {
    return (() => {
      const _el$ = _tmpl$7();
      createRenderEffect(() => setAttribute(_el$, "class", props.class));
      return _el$;
    })();
  };

  // src/icons/MeilisearchLight.tsx
  var _tmpl$8 = /* @__PURE__ */ template(
    `<svg width=110 height=30 viewBox="0 0 495 74"fill=none xmlns=http://www.w3.org/2000/svg><path d="M181.84 42.5347C181.84 37.6136 184.199 34.7149 188.716 34.7149C192.963 34.7149 194.378 37.7484 194.378 41.6584V62.6237H203.951V40.5798C203.951 32.3554 199.637 26.4906 191.143 26.4906C186.087 26.4906 182.514 28.041 179.413 31.4791C177.39 28.3781 173.952 26.4906 169.166 26.4906C164.11 26.4906 160.605 28.5804 158.987 31.6139V27.2995H150.156V62.6237H159.728V42.3325C159.728 37.6136 162.155 34.7149 166.604 34.7149C170.851 34.7149 172.267 37.7484 172.267 41.6584V62.6237H181.84V42.5347Z"fill=#21004B></path><path d="M243.242 47.7255C243.242 47.7255 243.377 46.4447 243.377 44.8942C243.377 34.4452 236.299 26.4906 225.85 26.4906C215.401 26.4906 208.12 34.4452 208.12 44.8942C208.12 55.7476 215.468 63.4326 225.917 63.4326C234.074 63.4326 240.546 58.5115 242.636 51.3658H232.996C231.85 53.9274 229.086 55.2083 226.187 55.2083C221.401 55.2083 218.3 52.5792 217.626 47.7255H243.242ZM225.783 34.1756C230.232 34.1756 233.131 36.8721 233.805 40.8494H217.76C218.569 36.8047 221.401 34.1756 225.783 34.1756Z"fill=#21004B></path><path d="M244.789 35.5238H249.036V62.6237H258.608V27.2995H244.789V35.5238ZM253.822 22.7155C257.193 22.7155 259.619 20.356 259.619 16.9854C259.619 13.6148 257.193 11.1879 253.822 11.1879C250.451 11.1879 248.024 13.6148 248.024 16.9854C248.024 20.356 250.451 22.7155 253.822 22.7155Z"fill=#21004B></path><path d="M278.43 54.3993C278.16 54.3993 277.756 54.4667 277.149 54.4667C274.992 54.4667 274.722 53.4556 274.722 51.9725V12.0643H265.15V52.6466C265.15 59.6575 267.846 62.7585 275.464 62.7585C276.745 62.7585 277.958 62.6237 278.43 62.5562V54.3993Z"fill=#21004B></path><path d="M279.519 35.5238H283.766V62.6237H293.339V27.2995H279.519V35.5238ZM288.553 22.7155C291.923 22.7155 294.35 20.356 294.35 16.9854C294.35 13.6148 291.923 11.1879 288.553 11.1879C285.182 11.1879 282.755 13.6148 282.755 16.9854C282.755 20.356 285.182 22.7155 288.553 22.7155Z"fill=#21004B></path><path d="M312.557 62.9939C321.86 62.9939 326.242 58.0728 326.242 52.882C326.242 38.4557 305.007 46.4778 305.007 36.9726C305.007 33.8717 307.636 31.2426 312.962 31.2426C318.422 31.2426 320.984 34.2087 321.388 37.9164H326.175C325.77 33.265 322.602 27.063 313.097 27.063C304.94 27.063 300.356 31.9167 300.356 37.1749C300.356 51.2641 321.591 43.1746 321.591 53.0168C321.591 56.4548 318.355 58.8143 312.557 58.8143C306.625 58.8143 303.659 55.8481 303.322 51.4663H298.468C298.872 57.466 302.648 62.9939 312.557 62.9939Z"fill=#21004B></path><path d="M364.256 46.4104C364.256 46.4104 364.324 45.3318 364.324 44.5903C364.324 34.8829 358.054 27.063 347.808 27.063C337.494 27.063 330.955 35.4896 330.955 44.9947C330.955 54.6347 337.022 62.9939 347.875 62.9939C356.032 62.9939 361.695 58.0053 363.717 51.4663H358.728C357.245 55.6459 353.201 58.6795 347.942 58.6795C340.729 58.6795 336.213 53.3539 335.741 46.4104H364.256ZM347.808 31.3774C354.549 31.3774 358.931 35.894 359.537 42.5005H335.876C336.685 36.1637 341.134 31.3774 347.808 31.3774Z"fill=#21004B></path><path d="M394.037 45.8711V49.1069C394.037 54.9718 389.79 59.0165 381.633 59.0165C376.578 59.0165 373.814 56.9267 373.814 52.4101C373.814 50.1181 374.892 48.3654 376.578 47.4216C378.33 46.4778 380.69 45.8711 394.037 45.8711ZM381.094 62.9939C387.026 62.9939 391.813 61.1063 394.24 57.1964V62.1849H398.824V39.7366C398.824 32.1189 394.442 27.063 384.532 27.063C375.027 27.063 370.847 31.8493 369.971 37.9838H374.623C375.566 33.1301 379.274 31.1752 384.33 31.1752C390.802 31.1752 394.037 33.8717 394.037 39.6691V41.8938C383.184 41.8938 378.667 42.096 375.297 43.4442C371.387 44.9947 369.095 48.4328 369.095 52.5449C369.095 58.5446 372.937 62.9939 381.094 62.9939Z"fill=#21004B></path><path d="M424.991 27.6023C424.991 27.6023 424.182 27.5349 423.845 27.5349C417.508 27.5349 414.138 30.8381 412.857 33.1975V27.872H408.273V62.1849H413.059V42.7027C413.059 35.557 417.441 32.0515 423.306 32.0515C424.182 32.0515 424.991 32.1189 424.991 32.1189V27.6023Z"fill=#21004B></path><path d="M425.809 45.0621C425.809 54.4325 432.28 62.9939 442.729 62.9939C452.032 62.9939 457.425 56.7919 458.773 49.9832H453.92C452.504 55.3088 448.594 58.6795 442.729 58.6795C435.516 58.6795 430.662 52.9494 430.662 45.0621C430.662 37.1075 435.516 31.3774 442.729 31.3774C448.594 31.3774 452.504 34.748 453.92 40.0736H458.773C457.425 33.265 452.032 27.063 442.729 27.063C432.28 27.063 425.809 35.6244 425.809 45.0621Z"fill=#21004B></path><path d="M470.041 11.6255H465.255V62.1849H470.041V41.8938C470.041 34.8829 474.558 31.2426 480.355 31.2426C486.49 31.2426 489.389 35.0177 489.389 41.2196V62.1849H494.175V40.2759C494.175 32.6582 489.658 27.063 481.164 27.063C474.76 27.063 471.255 30.5685 470.041 32.6582V11.6255Z"fill=#21004B></path><path d="M0.824951 73.993L24.0688 14.5224C27.3443 6.14179 35.4223 0.625977 44.4202 0.625977H58.4336L35.1898 60.0966C31.9143 68.4772 23.8363 73.993 14.8383 73.993H0.824951Z"fill=url(#paint0_linear_0_15)></path><path d="M34.9246 73.9932L58.1684 14.5226C61.4439 6.14197 69.5219 0.626152 78.5199 0.626152H92.5332L69.2894 60.0968C66.0139 68.4774 57.9359 73.9932 48.9379 73.9932H34.9246Z"fill=url(#paint1_linear_0_15)></path><path d="M69.0262 73.9932L92.27 14.5226C95.5455 6.14197 103.623 0.626152 112.621 0.626152H126.635L103.391 60.0968C100.115 68.4774 92.0375 73.9932 83.0395 73.9932H69.0262Z"fill=url(#paint2_linear_0_15)></path><defs><linearGradient id=paint0_linear_0_15 x1=126.635 y1=-4.97799 x2=0.824952 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62></stop></linearGradient><linearGradient id=paint1_linear_0_15 x1=126.635 y1=-4.97799 x2=0.824952 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62></stop></linearGradient><linearGradient id=paint2_linear_0_15 x1=126.635 y1=-4.97799 x2=0.824952 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62>`
  );
  var MeilisearchLightIcon = (props) => {
    return (() => {
      const _el$ = _tmpl$8();
      createRenderEffect(() => setAttribute(_el$, "class", props.class));
      return _el$;
    })();
  };

  // src/icons/Up.tsx
  var _tmpl$9 = /* @__PURE__ */ template(
    `<svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 24 24"><path fill=currentColor d="M12 4a1 1 0 0 1 .707.293l6 6a1 1 0 0 1-1.414 1.414L13 7.414V19a1 1 0 1 1-2 0V7.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l6-6A1 1 0 0 1 12 4z">`
  );
  var UpIcon = (props) => {
    return (() => {
      const _el$ = _tmpl$9();
      createRenderEffect(
        (_p$) => {
          const _v$ = props.class,
            _v$2 = props["aria-label"];
          _v$ !== _p$._v$ && setAttribute(_el$, "class", (_p$._v$ = _v$));
          _v$2 !== _p$._v$2 &&
            setAttribute(_el$, "aria-label", (_p$._v$2 = _v$2));
          return _p$;
        },
        {
          _v$: void 0,
          _v$2: void 0,
        }
      );
      return _el$;
    })();
  };

  // src/DocSearchModalFooter.tsx
  var _tmpl$10 = /* @__PURE__ */ template(
    `<span class=docsearch-modal-footer-commands><li><kbd class=docsearch-modal-footer-commands-key></kbd><span class=docsearch-modal-footer-commands-label></span></li><li><kbd class=docsearch-modal-footer-commands-key></kbd><kbd class=docsearch-modal-footer-commands-key></kbd><span class=docsearch-modal-footer-commands-label></span></li><li><kbd class=docsearch-modal-footer-commands-key></kbd><span class=docsearch-modal-footer-commands-label>`
  );
  var _tmpl$23 = /* @__PURE__ */ template(
    `<span class=docsearch-modal-footer-logo><span class=docsearch-modal-footer-logo-label></span><a href=https://www.meilisearch.com/>`
  );
  var DocSearchModalFooter = ({ translations = {} }) => {
    const {
      selectText = "to select",
      selectKeyAriaLabel = "Enter key",
      navigateText = "to navigate",
      navigateUpKeyAriaLabel = "Arrow up",
      navigateDownKeyAriaLabel = "Arrow down",
      closeText = "to close",
      closeKeyAriaLabel = "Escape key",
      poweredByText = "Powered by",
    } = translations;
    return [
      (() => {
        const _el$ = _tmpl$10(),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.firstChild,
          _el$4 = _el$3.nextSibling,
          _el$5 = _el$2.nextSibling,
          _el$6 = _el$5.firstChild,
          _el$7 = _el$6.nextSibling,
          _el$8 = _el$7.nextSibling,
          _el$9 = _el$5.nextSibling,
          _el$10 = _el$9.firstChild,
          _el$11 = _el$10.nextSibling;
        insert(
          _el$3,
          createComponent(EnterIcon, {
            "aria-label": selectKeyAriaLabel,
          })
        );
        insert(_el$4, selectText);
        insert(
          _el$6,
          createComponent(DownIcon, {
            "aria-label": navigateDownKeyAriaLabel,
          })
        );
        insert(
          _el$7,
          createComponent(UpIcon, {
            "aria-label": navigateUpKeyAriaLabel,
          })
        );
        insert(_el$8, navigateText);
        insert(
          _el$10,
          createComponent(EscIcon, {
            "aria-label": closeKeyAriaLabel,
          })
        );
        insert(_el$11, closeText);
        return _el$;
      })(),
      (() => {
        const _el$12 = _tmpl$23(),
          _el$13 = _el$12.firstChild,
          _el$14 = _el$13.nextSibling;
        insert(_el$13, poweredByText);
        insert(
          _el$14,
          createComponent(MeilisearchLightIcon, {
            class:
              "docsearch-modal-footer-logo-icon docsearch-modal-footer-logo-light",
          }),
          null
        );
        insert(
          _el$14,
          createComponent(MeilisearchDarkIcon, {
            class:
              "docsearch-modal-footer-logo-icon docsearch-modal-footer-logo-dark",
          }),
          null
        );
        return _el$12;
      })(),
    ];
  };

  // src/icons/Close.tsx
  var _tmpl$11 = /* @__PURE__ */ template(
    `<svg width=20 height=20 xmlns=http://www.w3.org/2000/svg><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"stroke=currentColor fill=none fill-rule=evenodd stroke-linecap=round stroke-linejoin=round>`
  );
  var CloseIcon = (props) => {
    return (() => {
      const _el$ = _tmpl$11();
      createRenderEffect(() => setAttribute(_el$, "class", props.class));
      return _el$;
    })();
  };

  // src/icons/Loading.tsx
  var _tmpl$12 = /* @__PURE__ */ template(
    `<svg width=24 height=24 xmlns=http://www.w3.org/2000/svg><path fill=currentColor d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8Z">`
  );
  var LoadingIcon = (props) => {
    return (() => {
      const _el$ = _tmpl$12();
      createRenderEffect(() => setAttribute(_el$, "class", props.class));
      return _el$;
    })();
  };

  // src/DocSearchModalSearchBox.tsx
  var _tmpl$13 = /* @__PURE__ */ template(
    `<form class=docsearch-modal-search-input-form><input type=search class=docsearch-modal-search-input><button type=reset class=docsearch-modal-search-input-reset>`
  );
  var _tmpl$24 = /* @__PURE__ */ template(
    `<button type=reset class=docsearch-modal-search-cancel-btn>`
  );
  var DocSearchModalSearchBox = ({
    loading,
    query,
    onInput,
    onKeyDown,
    onReset,
    onClose,
    translations = {},
  }) => {
    const {
      searchDocsPlaceHolder = "Search",
      resetButtonTitle = "Clear the query",
      resetButtonAriaLabel = "Clear the query",
      cancelButtonText = "Cancel",
      cancelButtonAriaLabel = "Cancel",
    } = translations;
    let searchInputRef;
    onMount(() => searchInputRef?.focus());
    return [
      (() => {
        const _el$ = _tmpl$13(),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.nextSibling;
        addEventListener(_el$, "reset", onReset);
        _el$.addEventListener("submit", (e) => e.preventDefault());
        insert(
          _el$,
          createComponent(Show, {
            get when() {
              return loading();
            },
            get fallback() {
              return createComponent(MagnifierIcon, {
                class: "docsearch-modal-search-input-icon",
              });
            },
            get children() {
              return createComponent(LoadingIcon, {
                class:
                  "docsearch-modal-search-input-icon docsearch-modal-search-input-loading-icon",
              });
            },
          }),
          _el$2
        );
        addEventListener(_el$2, "keydown", onKeyDown, true);
        addEventListener(_el$2, "input", onInput, true);
        const _ref$ = searchInputRef;
        typeof _ref$ === "function"
          ? use(_ref$, _el$2)
          : (searchInputRef = _el$2);
        setAttribute(_el$2, "placeholder", searchDocsPlaceHolder);
        setAttribute(_el$3, "title", resetButtonTitle);
        setAttribute(_el$3, "aria-label", resetButtonAriaLabel);
        insert(
          _el$3,
          createComponent(CloseIcon, {
            class: "docsearch-modal-search-input-reset-icon",
          })
        );
        createRenderEffect(() => (_el$3.hidden = !query()));
        createRenderEffect(() => (_el$2.value = query()));
        return _el$;
      })(),
      (() => {
        const _el$4 = _tmpl$24();
        addEventListener(_el$4, "click", onClose, true);
        setAttribute(_el$4, "aria-label", cancelButtonAriaLabel);
        insert(_el$4, cancelButtonText);
        return _el$4;
      })(),
    ];
  };
  delegateEvents(["input", "keydown", "click"]);

  // src/useSearchClient.ts
  var import_meilisearch = __toESM(require_meilisearch_umd(), 1);

  // src/version.ts
  var version_default = "0.6.0";

  // src/useSearchClient.ts
  function useSearchClient({ host, apiKey, clientAgents = [] }) {
    return createMemo(
      () =>
        new import_meilisearch.MeiliSearch({
          host,
          apiKey,
          clientAgents: clientAgents.concat(
            `Meilisearch docs-searchbar.js (v${version_default}`
          ),
        })
    );
  }

  // src/useTrapFocus.ts
  function trapFocus(el, value) {
    const { environment = window } = value();
    onMount(() => {
      const focusableElements = el.querySelectorAll(
        "a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      function trap(event) {
        if (event.key !== "Tab") {
          return;
        }
        if (event.shiftKey) {
          if (environment.document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else if (environment.document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
      el.addEventListener("keydown", trap);
      onCleanup(() => el.removeEventListener("keydown", trap));
    });
  }

  // src/DocSearchModal.tsx
  var _tmpl$14 = /* @__PURE__ */ template(
    `<div class=docsearch-modal-empty-query>`
  );
  var _tmpl$25 = /* @__PURE__ */ template(
    `<div class=docsearch-modal-error><p class=docsearch-modal-title>An error has occured. Please try again...`
  );
  var _tmpl$32 = /* @__PURE__ */ template(
    `<div class=docsearch-modal-no-search-hits-suggestions-list><p class=docsearch-modal-no-search-hits-help-text>Try searching for:</p><ul>`
  );
  var _tmpl$42 = /* @__PURE__ */ template(
    `<div class=docsearch-modal-no-search-hits><p class=docsearch-modal-title>No results for "<!>"`
  );
  var _tmpl$52 = /* @__PURE__ */ template(
    `<div class=docsearch-modal-container role=button tabindex=0><div class=docsearch-modal><header class=docsearch-modal-search-container></header><main class=docsearch-modal-search-hits-container></main><footer class=docsearch-modal-footer>`
  );
  var _tmpl$62 = /* @__PURE__ */ template(
    `<li><button class=docsearch-modal-no-search-hits-suggestion type=button>`
  );
  var _tmpl$72 = /* @__PURE__ */ template(
    `<section><div class=docsearch-modal-search-hits-category></div><ul role=listbox>`
  );
  var _tmpl$82 = /* @__PURE__ */ template(
    `<li role=option class=docsearch-modal-search-hits-item><a><span class=docsearch-modal-search-hits-item-text-container><p class=docsearch-modal-search-hits-item-title></p><p class=docsearch-modal-search-hits-item-text></p></span><span class=docsearch-modal-search-hits-item-trailing-icon-container aria-hidden>`
  );
  var _d_ = false;
  if (_d_) trapFocus;
  var ScreenState = /* @__PURE__ */ (function (ScreenState2) {
    ScreenState2[(ScreenState2["Results"] = 0)] = "Results";
    ScreenState2[(ScreenState2["NoResults"] = 1)] = "NoResults";
    ScreenState2[(ScreenState2["Error"] = 2)] = "Error";
    ScreenState2[(ScreenState2["EmptyQuery"] = 3)] = "EmptyQuery";
    return ScreenState2;
  })(ScreenState || {});
  var DocSearchModal = ({
    host,
    apiKey,
    indexUid,
    clientAgents,
    searchParams,
    environment = window,
    translations = {},
    onClose,
    initialQuery,
  }) => {
    const { linkToTheResultAriaLabel = "Link to the result" } = translations;
    onMount(() => document.body.classList.add("docsearch--active"));
    onCleanup(() => document.body.classList.remove("docsearch--active"));
    let containerRef;
    let modalRef;
    function setFullViewportHeight() {
      if (modalRef) {
        const vh = window.innerHeight * 0.01;
        modalRef.style.setProperty("--docsearch-vh", `${vh}px`);
      }
    }
    onMount(() => {
      setFullViewportHeight();
      window.addEventListener("resize", setFullViewportHeight);
    });
    onCleanup(() =>
      window.removeEventListener("resize", setFullViewportHeight)
    );
    const searchClient = useSearchClient({
      host,
      apiKey,
      clientAgents,
    });
    const [loading, setLoading] = createSignal(false);
    const [query, setQuery] = createSignal("");
    const [activeItemIndex, setActiveItemIndex] = createSignal(0);
    const [hitCategories, setHitsCategories] = createSignal([]);
    const [hits, setHits] = createSignal([]);
    const [screenState, setScreenState] = createSignal(ScreenState.EmptyQuery);
    const numberOfHits = () => hits().length;
    function onKeyDown(e) {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        const down = e.key === "ArrowDown";
        setActiveItemIndex((index) => {
          if (down && index === numberOfHits() - 1) {
            return 0;
          }
          if (!down && index === 0) {
            return numberOfHits() - 1;
          }
          return index + (down ? 1 : -1);
        });
        document
          .getElementById(`docsearch-hit-item-${activeItemIndex()}`)
          ?.scrollIntoView({
            block: activeItemIndex() === 0 ? "center" : "nearest",
            behavior: "smooth",
          });
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (e.ctrlKey || e.metaKey) {
          const windowRef = environment.open(
            hits()[activeItemIndex()].url ?? "",
            "_blank",
            "noopener"
          );
          windowRef?.focus();
        } else if (e.shiftKey) {
          environment.open(
            hits()[activeItemIndex()].url ?? "",
            "_blank",
            "noopener"
          );
        } else {
          environment.location.assign(hits()[activeItemIndex()].url ?? "");
        }
        if (!e.shiftKey && !e.ctrlKey && !e.metaKey) {
          onClose && onClose();
        }
      }
    }
    function onReset() {
      setLoading(false);
      setScreenState(ScreenState.EmptyQuery);
      setHits([]);
      setHitsCategories([]);
      setActiveItemIndex(0);
    }
    function search(query2) {
      setLoading(true);
      searchClient()
        .index(indexUid)
        .search(query2, {
          attributesToHighlight: ["*"],
          attributesToCrop: [`content`],
          cropLength: 30,
          ...searchParams,
        })
        .catch((e) => {
          onReset();
          setScreenState(ScreenState.Error);
          console.error(e);
        })
        .then((res) => {
          if (!res) {
            onReset();
            setScreenState(ScreenState.Error);
            return;
          }
          if (res.hits.length === 0) {
            onReset();
            setScreenState(ScreenState.NoResults);
            return;
          }
          const [hits2, catgeories] = formatHits(res.hits);
          setLoading(false);
          setScreenState(
            hits2.length === 0 ? ScreenState.NoResults : ScreenState.Results
          );
          setActiveItemIndex(0);
          setHits(hits2);
          setHitsCategories(catgeories);
        });
    }
    const debouncedSearch = debounce(search, 100);
    if (initialQuery) {
      onMount(() => {
        setQuery(initialQuery);
        search(initialQuery);
      });
    }
    function onInput(e) {
      const query2 = e.currentTarget?.value;
      setQuery(query2);
      if (!query2) {
        onReset();
        return;
      }
      debouncedSearch(query2);
    }
    return (() => {
      const _el$ = _tmpl$52(),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.firstChild,
        _el$4 = _el$3.nextSibling,
        _el$15 = _el$4.nextSibling;
      _el$.$$mousedown = (e) =>
        e.target === e.currentTarget && onClose && onClose();
      const _ref$ = modalRef;
      typeof _ref$ === "function" ? use(_ref$, _el$) : (modalRef = _el$);
      use(trapFocus, _el$2, () => ({
        environment,
      }));
      insert(
        _el$3,
        createComponent(DocSearchModalSearchBox, {
          loading,
          query,
          onInput,
          onKeyDown,
          onReset,
          onClose,
          translations,
        })
      );
      const _ref$2 = containerRef;
      typeof _ref$2 === "function"
        ? use(_ref$2, _el$4)
        : (containerRef = _el$4);
      insert(
        _el$4,
        createComponent(Switch, {
          get children() {
            return [
              createComponent(Match, {
                get when() {
                  return screenState() === ScreenState.EmptyQuery;
                },
                get children() {
                  return _tmpl$14();
                },
              }),
              createComponent(Match, {
                get when() {
                  return screenState() === ScreenState.Error;
                },
                get children() {
                  return _tmpl$25();
                },
              }),
              createComponent(Match, {
                get when() {
                  return screenState() === ScreenState.NoResults;
                },
                get children() {
                  const _el$7 = _tmpl$42(),
                    _el$8 = _el$7.firstChild,
                    _el$9 = _el$8.firstChild,
                    _el$11 = _el$9.nextSibling,
                    _el$10 = _el$11.nextSibling;
                  insert(_el$8, query, _el$11);
                  insert(
                    _el$7,
                    createComponent(Show, {
                      get when() {
                        return hitCategories().length > 0;
                      },
                      get children() {
                        const _el$12 = _tmpl$32(),
                          _el$13 = _el$12.firstChild,
                          _el$14 = _el$13.nextSibling;
                        insert(
                          _el$14,
                          createComponent(For, {
                            get each() {
                              return hitCategories();
                            },
                            children: (category) =>
                              (() => {
                                const _el$16 = _tmpl$62(),
                                  _el$17 = _el$16.firstChild;
                                _el$17.$$click = () => setQuery(category);
                                insert(_el$17, category);
                                return _el$16;
                              })(),
                          })
                        );
                        return _el$12;
                      },
                    }),
                    null
                  );
                  return _el$7;
                },
              }),
              createComponent(Match, {
                get when() {
                  return screenState() === ScreenState.Results;
                },
                get children() {
                  return createComponent(For, {
                    get each() {
                      return hitCategories();
                    },
                    children: (category) =>
                      (() => {
                        const _el$18 = _tmpl$72(),
                          _el$19 = _el$18.firstChild,
                          _el$20 = _el$19.nextSibling;
                        insert(_el$19, category);
                        insert(
                          _el$20,
                          createComponent(For, {
                            get each() {
                              return hits().filter(
                                (h) => h.category === category
                              );
                            },
                            children: (hit) =>
                              (() => {
                                const _el$21 = _tmpl$82(),
                                  _el$22 = _el$21.firstChild,
                                  _el$23 = _el$22.firstChild,
                                  _el$24 = _el$23.firstChild,
                                  _el$25 = _el$24.nextSibling,
                                  _el$26 = _el$23.nextSibling;
                                _el$21.addEventListener("mouseenter", () =>
                                  setActiveItemIndex(hit.index)
                                );
                                setAttribute(
                                  _el$22,
                                  "aria-label",
                                  linkToTheResultAriaLabel
                                );
                                insert(
                                  _el$26,
                                  createComponent(EnterIcon, {
                                    class:
                                      "docsearch-modal-search-hits-item-trailing-icon",
                                  })
                                );
                                createRenderEffect(
                                  (_p$) => {
                                    const _v$ = hit.index === activeItemIndex(),
                                      _v$2 = `docsearch-hit-item-${hit.index}`,
                                      _v$3 = !!(
                                        hit.index === activeItemIndex()
                                      ),
                                      _v$4 = hit.url || "#",
                                      _v$5 =
                                        (hit.subcategory || "") +
                                        (hit.subcategory &&
                                          hit.title &&
                                          " | ") +
                                        (hit.title || ""),
                                      _v$6 = hit.text || "";
                                    _v$ !== _p$._v$ &&
                                      setAttribute(
                                        _el$21,
                                        "aria-selected",
                                        (_p$._v$ = _v$)
                                      );
                                    _v$2 !== _p$._v$2 &&
                                      setAttribute(
                                        _el$21,
                                        "id",
                                        (_p$._v$2 = _v$2)
                                      );
                                    _v$3 !== _p$._v$3 &&
                                      _el$21.classList.toggle(
                                        "docsearch-modal-search-hits-item--active",
                                        (_p$._v$3 = _v$3)
                                      );
                                    _v$4 !== _p$._v$4 &&
                                      setAttribute(
                                        _el$22,
                                        "href",
                                        (_p$._v$4 = _v$4)
                                      );
                                    _v$5 !== _p$._v$5 &&
                                      (_el$24.innerHTML = _p$._v$5 = _v$5);
                                    _v$6 !== _p$._v$6 &&
                                      (_el$25.innerHTML = _p$._v$6 = _v$6);
                                    return _p$;
                                  },
                                  {
                                    _v$: void 0,
                                    _v$2: void 0,
                                    _v$3: void 0,
                                    _v$4: void 0,
                                    _v$5: void 0,
                                    _v$6: void 0,
                                  }
                                );
                                return _el$21;
                              })(),
                          })
                        );
                        return _el$18;
                      })(),
                  });
                },
              }),
            ];
          },
        })
      );
      insert(
        _el$15,
        createComponent(DocSearchModalFooter, {
          translations,
        })
      );
      return _el$;
    })();
  };
  function formatHits(receivedHits) {
    const clonedHits = deepClone(receivedHits);
    const hits = clonedHits.map((hit) => {
      if (hit._formatted) {
        const cleanFormatted = replaceNullString(hit._formatted);
        hit._formatted = renameKeysWithLevels(cleanFormatted, "hierarchy_");
      }
      const cleanHit = replaceNullString(hit);
      return renameKeysWithLevels(cleanHit, "hierarchy_");
    });
    const groupedHits = groupBy(hits, "lvl0");
    const formattedHits = Object.entries(groupedHits)
      .map(([k, v]) =>
        v.map((hit) => ({
          category: k,
          subcategory: getHighlightedValue(hit, "lvl1") || k,
          title: compact([
            getHighlightedValue(hit, "lvl2"),
            getHighlightedValue(hit, "lvl3"),
            getHighlightedValue(hit, "lvl4"),
            getHighlightedValue(hit, "lvl5"),
            getHighlightedValue(hit, "lvl6"),
          ]).join('<span aria-hidden="true"> \u203A </span>'),
          text: getSnippetedValue(hit, "content"),
          url: formatURL(hit),
        }))
      )
      .flat()
      .map((h, index) => ({
        index,
        ...h,
      }));
    return [formattedHits, Object.keys(groupedHits)];
  }
  function formatURL(hit) {
    const { url, anchor } = hit;
    if (url) {
      const containsAnchor = url.indexOf("#") !== -1;
      if (containsAnchor) return url;
      else if (anchor) return `${hit.url}#${hit.anchor}`;
      return url;
    } else if (anchor) return `#${hit.anchor}`;
    console.warn("no anchor nor url for : ", JSON.stringify(hit));
    return null;
  }
  delegateEvents(["mousedown", "click"]);

  // src/DocSearch.tsx
  var DEFAULT_HOTKEYS = ["ctrl+k", "s", "/"];
  var DocSearch = (props) => {
    const { environment = window, hotKeys = DEFAULT_HOTKEYS } = props;
    const [isOpen, setIsOpen] = createSignal(false);
    const [initialQuery, setInitialQuery] = createSignal();
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
    const onInput = (query) => setInitialQuery(query);
    const onClick = () => {
      const selectedText = window.getSelection();
      if (selectedText) setInitialQuery(selectedText.toString());
      setIsOpen(true);
    };
    useDocSearchHotKeys({
      isOpen,
      onOpen,
      onClose,
      onInput,
      hotKeys,
    });
    return [
      createComponent(DocSearchButton, {
        get translations() {
          return props?.translations?.button;
        },
        hotKeys,
        onClick,
      }),
      createMemo(
        (() => {
          const _c$ = createMemo(() => !!isOpen());
          return () =>
            _c$() &&
            createComponent(Portal, {
              get mount() {
                return environment.document.body;
              },
              get children() {
                return createComponent(
                  DocSearchModal,
                  mergeProps(props, {
                    get initialQuery() {
                      return initialQuery();
                    },
                    onClose,
                    get translations() {
                      return props?.translations?.modal;
                    },
                  })
                );
              },
            });
        })()
      ),
    ];
  };

  // src/index.tsx
  function docsearch(props) {
    const [render_, setRender] = createSignal(true);
    render(
      () =>
        createComponent(Show, {
          get when() {
            return render_();
          },
          get children() {
            return createComponent(DocSearch, props);
          },
        }),
      typeof props.container === "string"
        ? (props.environment ?? window).document.querySelector(props.container)
        : props.container
    );
    return () => setRender(false);
  }
  var src_default = docsearch;
  return __toCommonJS(src_exports);
})();
/*! Bundled license information:

meilisearch/dist/bundles/meilisearch.umd.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
if (!"__docsearch_meilisearch__" in window)
  window.__docsearch_meilisearch__ = __docsearch_meilisearch__;
