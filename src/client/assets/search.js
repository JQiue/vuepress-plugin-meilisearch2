"use strict";
export var __docsearch_meilisearch__ = (() => {
  var Wr = Object.create;
  var _t = Object.defineProperty;
  var zr = Object.getOwnPropertyDescriptor;
  var Qr = Object.getOwnPropertyNames;
  var Jr = Object.getPrototypeOf,
    en = Object.prototype.hasOwnProperty;
  var Qt = (e, o) => () => (
      o || e((o = { exports: {} }).exports, o), o.exports
    ),
    tn = (e, o) => {
      for (var c in o) _t(e, c, { get: o[c], enumerable: !0 });
    },
    Jt = (e, o, c, d) => {
      if ((o && typeof o == "object") || typeof o == "function")
        for (let p of Qr(o))
          !en.call(e, p) &&
            p !== c &&
            _t(e, p, {
              get: () => o[p],
              enumerable: !(d = zr(o, p)) || d.enumerable,
            });
      return e;
    };
  var rn = (e, o, c) => (
      (c = e != null ? Wr(Jr(e)) : {}),
      Jt(
        o || !e || !e.__esModule
          ? _t(c, "default", { value: e, enumerable: !0 })
          : c,
        e
      )
    ),
    nn = (e) => Jt(_t({}, "__esModule", { value: !0 }), e);
  var Fr = Qt((Hr) => {
    "use strict";
    (function (e) {
      var o = (function (c) {
        var d = {
          searchParams: "URLSearchParams" in e,
          iterable: "Symbol" in e && "iterator" in Symbol,
          blob:
            "FileReader" in e &&
            "Blob" in e &&
            (function () {
              try {
                return new Blob(), !0;
              } catch {
                return !1;
              }
            })(),
          formData: "FormData" in e,
          arrayBuffer: "ArrayBuffer" in e,
        };
        function p(b) {
          return b && DataView.prototype.isPrototypeOf(b);
        }
        if (d.arrayBuffer)
          var m = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            _ =
              ArrayBuffer.isView ||
              function (b) {
                return b && m.indexOf(Object.prototype.toString.call(b)) > -1;
              };
        function w(b) {
          if (
            (typeof b != "string" && (b = String(b)),
            /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(b))
          )
            throw new TypeError("Invalid character in header field name");
          return b.toLowerCase();
        }
        function y(b) {
          return typeof b != "string" && (b = String(b)), b;
        }
        function l(b) {
          var I = {
            next: function () {
              var M = b.shift();
              return { done: M === void 0, value: M };
            },
          };
          return (
            d.iterable &&
              (I[Symbol.iterator] = function () {
                return I;
              }),
            I
          );
        }
        function k(b) {
          (this.map = {}),
            b instanceof k
              ? b.forEach(function (I, M) {
                  this.append(M, I);
                }, this)
              : Array.isArray(b)
              ? b.forEach(function (I) {
                  this.append(I[0], I[1]);
                }, this)
              : b &&
                Object.getOwnPropertyNames(b).forEach(function (I) {
                  this.append(I, b[I]);
                }, this);
        }
        (k.prototype.append = function (b, I) {
          (b = w(b)), (I = y(I));
          var M = this.map[b];
          this.map[b] = M ? M + ", " + I : I;
        }),
          (k.prototype.delete = function (b) {
            delete this.map[w(b)];
          }),
          (k.prototype.get = function (b) {
            return (b = w(b)), this.has(b) ? this.map[b] : null;
          }),
          (k.prototype.has = function (b) {
            return this.map.hasOwnProperty(w(b));
          }),
          (k.prototype.set = function (b, I) {
            this.map[w(b)] = y(I);
          }),
          (k.prototype.forEach = function (b, I) {
            for (var M in this.map)
              this.map.hasOwnProperty(M) && b.call(I, this.map[M], M, this);
          }),
          (k.prototype.keys = function () {
            var b = [];
            return (
              this.forEach(function (I, M) {
                b.push(M);
              }),
              l(b)
            );
          }),
          (k.prototype.values = function () {
            var b = [];
            return (
              this.forEach(function (I) {
                b.push(I);
              }),
              l(b)
            );
          }),
          (k.prototype.entries = function () {
            var b = [];
            return (
              this.forEach(function (I, M) {
                b.push([M, I]);
              }),
              l(b)
            );
          }),
          d.iterable && (k.prototype[Symbol.iterator] = k.prototype.entries);
        function T(b) {
          if (b.bodyUsed) return Promise.reject(new TypeError("Already read"));
          b.bodyUsed = !0;
        }
        function j(b) {
          return new Promise(function (I, M) {
            (b.onload = function () {
              I(b.result);
            }),
              (b.onerror = function () {
                M(b.error);
              });
          });
        }
        function q(b) {
          var I = new FileReader(),
            M = j(I);
          return I.readAsArrayBuffer(b), M;
        }
        function v(b) {
          var I = new FileReader(),
            M = j(I);
          return I.readAsText(b), M;
        }
        function U(b) {
          for (
            var I = new Uint8Array(b), M = new Array(I.length), ne = 0;
            ne < I.length;
            ne++
          )
            M[ne] = String.fromCharCode(I[ne]);
          return M.join("");
        }
        function ae(b) {
          if (b.slice) return b.slice(0);
          var I = new Uint8Array(b.byteLength);
          return I.set(new Uint8Array(b)), I.buffer;
        }
        function Z() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (b) {
              (this._bodyInit = b),
                b
                  ? typeof b == "string"
                    ? (this._bodyText = b)
                    : d.blob && Blob.prototype.isPrototypeOf(b)
                    ? (this._bodyBlob = b)
                    : d.formData && FormData.prototype.isPrototypeOf(b)
                    ? (this._bodyFormData = b)
                    : d.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(b)
                    ? (this._bodyText = b.toString())
                    : d.arrayBuffer && d.blob && p(b)
                    ? ((this._bodyArrayBuffer = ae(b.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : d.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(b) || _(b))
                    ? (this._bodyArrayBuffer = ae(b))
                    : (this._bodyText = b = Object.prototype.toString.call(b))
                  : (this._bodyText = ""),
                this.headers.get("content-type") ||
                  (typeof b == "string"
                    ? this.headers.set(
                        "content-type",
                        "text/plain;charset=UTF-8"
                      )
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : d.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(b) &&
                      this.headers.set(
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      ));
            }),
            d.blob &&
              ((this.blob = function () {
                var b = T(this);
                if (b) return b;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? T(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(q);
              })),
            (this.text = function () {
              var b = T(this);
              if (b) return b;
              if (this._bodyBlob) return v(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(U(this._bodyArrayBuffer));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
            }),
            d.formData &&
              (this.formData = function () {
                return this.text().then(pe);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        var $ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function X(b) {
          var I = b.toUpperCase();
          return $.indexOf(I) > -1 ? I : b;
        }
        function W(b, I) {
          I = I || {};
          var M = I.body;
          if (b instanceof W) {
            if (b.bodyUsed) throw new TypeError("Already read");
            (this.url = b.url),
              (this.credentials = b.credentials),
              I.headers || (this.headers = new k(b.headers)),
              (this.method = b.method),
              (this.mode = b.mode),
              (this.signal = b.signal),
              !M &&
                b._bodyInit != null &&
                ((M = b._bodyInit), (b.bodyUsed = !0));
          } else this.url = String(b);
          if (
            ((this.credentials =
              I.credentials || this.credentials || "same-origin"),
            (I.headers || !this.headers) && (this.headers = new k(I.headers)),
            (this.method = X(I.method || this.method || "GET")),
            (this.mode = I.mode || this.mode || null),
            (this.signal = I.signal || this.signal),
            (this.referrer = null),
            (this.method === "GET" || this.method === "HEAD") && M)
          )
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(M);
        }
        W.prototype.clone = function () {
          return new W(this, { body: this._bodyInit });
        };
        function pe(b) {
          var I = new FormData();
          return (
            b
              .trim()
              .split("&")
              .forEach(function (M) {
                if (M) {
                  var ne = M.split("="),
                    se = ne.shift().replace(/\+/g, " "),
                    G = ne.join("=").replace(/\+/g, " ");
                  I.append(decodeURIComponent(se), decodeURIComponent(G));
                }
              }),
            I
          );
        }
        function Le(b) {
          var I = new k(),
            M = b.replace(/\r?\n[\t ]+/g, " ");
          return (
            M.split(/\r?\n/).forEach(function (ne) {
              var se = ne.split(":"),
                G = se.shift().trim();
              if (G) {
                var Me = se.join(":").trim();
                I.append(G, Me);
              }
            }),
            I
          );
        }
        Z.call(W.prototype);
        function oe(b, I) {
          I || (I = {}),
            (this.type = "default"),
            (this.status = I.status === void 0 ? 200 : I.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = "statusText" in I ? I.statusText : "OK"),
            (this.headers = new k(I.headers)),
            (this.url = I.url || ""),
            this._initBody(b);
        }
        Z.call(oe.prototype),
          (oe.prototype.clone = function () {
            return new oe(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new k(this.headers),
              url: this.url,
            });
          }),
          (oe.error = function () {
            var b = new oe(null, { status: 0, statusText: "" });
            return (b.type = "error"), b;
          });
        var Xe = [301, 302, 303, 307, 308];
        (oe.redirect = function (b, I) {
          if (Xe.indexOf(I) === -1) throw new RangeError("Invalid status code");
          return new oe(null, { status: I, headers: { location: b } });
        }),
          (c.DOMException = e.DOMException);
        try {
          new c.DOMException();
        } catch {
          (c.DOMException = function (I, M) {
            (this.message = I), (this.name = M);
            var ne = Error(I);
            this.stack = ne.stack;
          }),
            (c.DOMException.prototype = Object.create(Error.prototype)),
            (c.DOMException.prototype.constructor = c.DOMException);
        }
        function Te(b, I) {
          return new Promise(function (M, ne) {
            var se = new W(b, I);
            if (se.signal && se.signal.aborted)
              return ne(new c.DOMException("Aborted", "AbortError"));
            var G = new XMLHttpRequest();
            function Me() {
              G.abort();
            }
            (G.onload = function () {
              var Y = {
                status: G.status,
                statusText: G.statusText,
                headers: Le(G.getAllResponseHeaders() || ""),
              };
              Y.url =
                "responseURL" in G
                  ? G.responseURL
                  : Y.headers.get("X-Request-URL");
              var ie = "response" in G ? G.response : G.responseText;
              M(new oe(ie, Y));
            }),
              (G.onerror = function () {
                ne(new TypeError("Network request failed"));
              }),
              (G.ontimeout = function () {
                ne(new TypeError("Network request failed"));
              }),
              (G.onabort = function () {
                ne(new c.DOMException("Aborted", "AbortError"));
              }),
              G.open(se.method, se.url, !0),
              se.credentials === "include"
                ? (G.withCredentials = !0)
                : se.credentials === "omit" && (G.withCredentials = !1),
              "responseType" in G && d.blob && (G.responseType = "blob"),
              se.headers.forEach(function (Y, ie) {
                G.setRequestHeader(ie, Y);
              }),
              se.signal &&
                (se.signal.addEventListener("abort", Me),
                (G.onreadystatechange = function () {
                  G.readyState === 4 &&
                    se.signal.removeEventListener("abort", Me);
                })),
              G.send(typeof se._bodyInit > "u" ? null : se._bodyInit);
          });
        }
        return (
          (Te.polyfill = !0),
          e.fetch ||
            ((e.fetch = Te),
            (e.Headers = k),
            (e.Request = W),
            (e.Response = oe)),
          (c.Headers = k),
          (c.Request = W),
          (c.Response = oe),
          (c.fetch = Te),
          Object.defineProperty(c, "__esModule", { value: !0 }),
          c
        );
      })({});
    })(typeof self < "u" ? self : Hr);
  });
  var Ur = Qt((Ot, Vr) => {
    "use strict";
    (function (e, o) {
      typeof Ot == "object" && typeof Vr < "u"
        ? o(Ot)
        : typeof define == "function" && define.amd
        ? define(["exports"], o)
        : ((e = typeof globalThis < "u" ? globalThis : e || self),
          o((e.window = e.window || {})));
    })(Ot, function (e) {
      "use strict";
      var o = { ALL: "all", LAST: "last", FREQUENCY: "frequency" },
        c = {
          JSON: "application/json",
          CSV: "text/csv",
          NDJSON: "application/x-ndjson",
        },
        d = {
          TASK_SUCCEEDED: "succeeded",
          TASK_PROCESSING: "processing",
          TASK_FAILED: "failed",
          TASK_ENQUEUED: "enqueued",
          TASK_CANCELED: "canceled",
        },
        p = {
          DOCUMENTS_ADDITION_OR_UPDATE: "documentAdditionOrUpdate",
          DOCUMENT_DELETION: "documentDeletion",
          DUMP_CREATION: "dumpCreation",
          INDEX_CREATION: "indexCreation",
          INDEX_DELETION: "indexDeletion",
          INDEXES_SWAP: "indexSwap",
          INDEX_UPDATE: "indexUpdate",
          SETTINGS_UPDATE: "settingsUpdate",
          SNAPSHOT_CREATION: "snapshotCreation",
          TASK_CANCELATION: "taskCancelation",
          TASK_DELETION: "taskDeletion",
        },
        m = {
          INDEX_CREATION_FAILED: "index_creation_failed",
          MISSING_INDEX_UID: "missing_index_uid",
          INDEX_ALREADY_EXISTS: "index_already_exists",
          INDEX_NOT_FOUND: "index_not_found",
          INVALID_INDEX_UID: "invalid_index_uid",
          INDEX_NOT_ACCESSIBLE: "index_not_accessible",
          INVALID_INDEX_OFFSET: "invalid_index_offset",
          INVALID_INDEX_LIMIT: "invalid_index_limit",
          INVALID_STATE: "invalid_state",
          PRIMARY_KEY_INFERENCE_FAILED: "primary_key_inference_failed",
          INDEX_PRIMARY_KEY_ALREADY_EXISTS: "index_primary_key_already_exists",
          INVALID_INDEX_PRIMARY_KEY: "invalid_index_primary_key",
          DOCUMENTS_FIELDS_LIMIT_REACHED: "document_fields_limit_reached",
          MISSING_DOCUMENT_ID: "missing_document_id",
          INVALID_DOCUMENT_ID: "invalid_document_id",
          INVALID_CONTENT_TYPE: "invalid_content_type",
          MISSING_CONTENT_TYPE: "missing_content_type",
          INVALID_DOCUMENT_FIELDS: "invalid_document_fields",
          INVALID_DOCUMENT_LIMIT: "invalid_document_limit",
          INVALID_DOCUMENT_OFFSET: "invalid_document_offset",
          INVALID_DOCUMENT_FILTER: "invalid_document_filter",
          MISSING_DOCUMENT_FILTER: "missing_document_filter",
          INVALID_DOCUMENT_VECTORS_FIELD: "invalid_document_vectors_field",
          PAYLOAD_TOO_LARGE: "payload_too_large",
          MISSING_PAYLOAD: "missing_payload",
          MALFORMED_PAYLOAD: "malformed_payload",
          NO_SPACE_LEFT_ON_DEVICE: "no_space_left_on_device",
          INVALID_STORE_FILE: "invalid_store_file",
          INVALID_RANKING_RULES: "missing_document_id",
          INVALID_REQUEST: "invalid_request",
          INVALID_DOCUMENT_GEO_FIELD: "invalid_document_geo_field",
          INVALID_SEARCH_Q: "invalid_search_q",
          INVALID_SEARCH_OFFSET: "invalid_search_offset",
          INVALID_SEARCH_LIMIT: "invalid_search_limit",
          INVALID_SEARCH_PAGE: "invalid_search_page",
          INVALID_SEARCH_HITS_PER_PAGE: "invalid_search_hits_per_page",
          INVALID_SEARCH_ATTRIBUTES_TO_RETRIEVE:
            "invalid_search_attributes_to_retrieve",
          INVALID_SEARCH_ATTRIBUTES_TO_CROP:
            "invalid_search_attributes_to_crop",
          INVALID_SEARCH_CROP_LENGTH: "invalid_search_crop_length",
          INVALID_SEARCH_ATTRIBUTES_TO_HIGHLIGHT:
            "invalid_search_attributes_to_highlight",
          INVALID_SEARCH_SHOW_MATCHES_POSITION:
            "invalid_search_show_matches_position",
          INVALID_SEARCH_FILTER: "invalid_search_filter",
          INVALID_SEARCH_SORT: "invalid_search_sort",
          INVALID_SEARCH_FACETS: "invalid_search_facets",
          INVALID_SEARCH_HIGHLIGHT_PRE_TAG: "invalid_search_highlight_pre_tag",
          INVALID_SEARCH_HIGHLIGHT_POST_TAG:
            "invalid_search_highlight_post_tag",
          INVALID_SEARCH_CROP_MARKER: "invalid_search_crop_marker",
          INVALID_SEARCH_MATCHING_STRATEGY: "invalid_search_matching_strategy",
          INVALID_SEARCH_VECTOR: "invalid_search_vector",
          INVALID_SEARCH_ATTRIBUTES_TO_SEARCH_ON:
            "invalid_search_attributes_to_search_on",
          BAD_REQUEST: "bad_request",
          DOCUMENT_NOT_FOUND: "document_not_found",
          INTERNAL: "internal",
          INVALID_API_KEY: "invalid_api_key",
          INVALID_API_KEY_DESCRIPTION: "invalid_api_key_description",
          INVALID_API_KEY_ACTIONS: "invalid_api_key_actions",
          INVALID_API_KEY_INDEXES: "invalid_api_key_indexes",
          INVALID_API_KEY_EXPIRES_AT: "invalid_api_key_expires_at",
          API_KEY_NOT_FOUND: "api_key_not_found",
          IMMUTABLE_API_KEY_UID: "immutable_api_key_uid",
          IMMUTABLE_API_KEY_ACTIONS: "immutable_api_key_actions",
          IMMUTABLE_API_KEY_INDEXES: "immutable_api_key_indexes",
          IMMUTABLE_API_KEY_EXPIRES_AT: "immutable_api_key_expires_at",
          IMMUTABLE_API_KEY_CREATED_AT: "immutable_api_key_created_at",
          IMMUTABLE_API_KEY_UPDATED_AT: "immutable_api_key_updated_at",
          MISSING_AUTHORIZATION_HEADER: "missing_authorization_header",
          UNRETRIEVABLE_DOCUMENT: "unretrievable_document",
          MAX_DATABASE_SIZE_LIMIT_REACHED: "database_size_limit_reached",
          TASK_NOT_FOUND: "task_not_found",
          DUMP_PROCESS_FAILED: "dump_process_failed",
          DUMP_NOT_FOUND: "dump_not_found",
          INVALID_SWAP_DUPLICATE_INDEX_FOUND:
            "invalid_swap_duplicate_index_found",
          INVALID_SWAP_INDEXES: "invalid_swap_indexes",
          MISSING_SWAP_INDEXES: "missing_swap_indexes",
          MISSING_MASTER_KEY: "missing_master_key",
          INVALID_TASK_TYPES: "invalid_task_types",
          INVALID_TASK_UIDS: "invalid_task_uids",
          INVALID_TASK_STATUSES: "invalid_task_statuses",
          INVALID_TASK_LIMIT: "invalid_task_limit",
          INVALID_TASK_FROM: "invalid_task_from",
          INVALID_TASK_CANCELED_BY: "invalid_task_canceled_by",
          MISSING_TASK_FILTERS: "missing_task_filters",
          TOO_MANY_OPEN_FILES: "too_many_open_files",
          IO_ERROR: "io_error",
          INVALID_TASK_INDEX_UIDS: "invalid_task_index_uids",
          IMMUTABLE_INDEX_UID: "immutable_index_uid",
          IMMUTABLE_INDEX_CREATED_AT: "immutable_index_created_at",
          IMMUTABLE_INDEX_UPDATED_AT: "immutable_index_updated_at",
          INVALID_SETTINGS_DISPLAYED_ATTRIBUTES:
            "invalid_settings_displayed_attributes",
          INVALID_SETTINGS_SEARCHABLE_ATTRIBUTES:
            "invalid_settings_searchable_attributes",
          INVALID_SETTINGS_FILTERABLE_ATTRIBUTES:
            "invalid_settings_filterable_attributes",
          INVALID_SETTINGS_SORTABLE_ATTRIBUTES:
            "invalid_settings_sortable_attributes",
          INVALID_SETTINGS_RANKING_RULES: "invalid_settings_ranking_rules",
          INVALID_SETTINGS_STOP_WORDS: "invalid_settings_stop_words",
          INVALID_SETTINGS_SYNONYMS: "invalid_settings_synonyms",
          INVALID_SETTINGS_DISTINCT_ATTRIBUTE:
            "invalid_settings_distinct_attribute",
          INVALID_SETTINGS_TYPO_TOLERANCE: "invalid_settings_typo_tolerance",
          INVALID_SETTINGS_FACETING: "invalid_settings_faceting",
          INVALID_SETTINGS_PAGINATION: "invalid_settings_pagination",
          INVALID_SETTINGS_SEARCH_CUTOFF_MS:
            "invalid_settings_search_cutoff_ms",
          INVALID_SETTINGS_LOCALIZED_ATTRIBUTES:
            "invalid_settings_localized_attributes",
          INVALID_TASK_BEFORE_ENQUEUED_AT: "invalid_task_before_enqueued_at",
          INVALID_TASK_AFTER_ENQUEUED_AT: "invalid_task_after_enqueued_at",
          INVALID_TASK_BEFORE_STARTED_AT: "invalid_task_before_started_at",
          INVALID_TASK_AFTER_STARTED_AT: "invalid_task_after_started_at",
          INVALID_TASK_BEFORE_FINISHED_AT: "invalid_task_before_finished_at",
          INVALID_TASK_AFTER_FINISHED_AT: "invalid_task_after_finished_at",
          MISSING_API_KEY_ACTIONS: "missing_api_key_actions",
          MISSING_API_KEY_INDEXES: "missing_api_key_indexes",
          MISSING_API_KEY_EXPIRES_AT: "missing_api_key_expires_at",
          INVALID_API_KEY_LIMIT: "invalid_api_key_limit",
          INVALID_API_KEY_OFFSET: "invalid_api_key_offset",
          INVALID_FACET_SEARCH_FACET_NAME: "invalid_facet_search_facet_name",
          MISSING_FACET_SEARCH_FACET_NAME: "missing_facet_search_facet_name",
          INVALID_FACET_SEARCH_FACET_QUERY: "invalid_facet_search_facet_query",
          INVALID_SEARCH_RANKING_SCORE_THRESHOLD:
            "invalid_search_ranking_score_threshold",
          INVALID_SIMILAR_RANKING_SCORE_THRESHOLD:
            "invalid_similar_ranking_score_threshold",
        };
      function _(h, s) {
        var u =
          h == null
            ? null
            : (typeof Symbol < "u" && h[Symbol.iterator]) || h["@@iterator"];
        if (u != null) {
          var n,
            i,
            r,
            t,
            a = [],
            f = !0,
            g = !1;
          try {
            if (((r = (u = u.call(h)).next), s === 0)) {
              if (Object(u) !== u) return;
              f = !1;
            } else
              for (
                ;
                !(f = (n = r.call(u)).done) &&
                (a.push(n.value), a.length !== s);
                f = !0
              );
          } catch (A) {
            (g = !0), (i = A);
          } finally {
            try {
              if (!f && u.return != null && ((t = u.return()), Object(t) !== t))
                return;
            } finally {
              if (g) throw i;
            }
          }
          return a;
        }
      }
      function w(h, s) {
        var u = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(h);
          s &&
            (n = n.filter(function (i) {
              return Object.getOwnPropertyDescriptor(h, i).enumerable;
            })),
            u.push.apply(u, n);
        }
        return u;
      }
      function y(h) {
        for (var s = 1; s < arguments.length; s++) {
          var u = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? w(Object(u), !0).forEach(function (n) {
                $(h, n, u[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(u))
            : w(Object(u)).forEach(function (n) {
                Object.defineProperty(
                  h,
                  n,
                  Object.getOwnPropertyDescriptor(u, n)
                );
              });
        }
        return h;
      }
      function l() {
        l = function () {
          return s;
        };
        var h,
          s = {},
          u = Object.prototype,
          n = u.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (E, S, D) {
              E[S] = D.value;
            },
          r = typeof Symbol == "function" ? Symbol : {},
          t = r.iterator || "@@iterator",
          a = r.asyncIterator || "@@asyncIterator",
          f = r.toStringTag || "@@toStringTag";
        function g(E, S, D) {
          return (
            Object.defineProperty(E, S, {
              value: D,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            E[S]
          );
        }
        try {
          g({}, "");
        } catch {
          g = function (S, D, P) {
            return (S[D] = P);
          };
        }
        function A(E, S, D, P) {
          var O = S && S.prototype instanceof te ? S : te,
            z = Object.create(O.prototype),
            de = new Mt(P || []);
          return i(z, "_invoke", { value: Zr(E, D, de) }), z;
        }
        function R(E, S, D) {
          try {
            return { type: "normal", arg: E.call(S, D) };
          } catch (P) {
            return { type: "throw", arg: P };
          }
        }
        s.wrap = A;
        var N = "suspendedStart",
          H = "suspendedYield",
          re = "executing",
          ge = "completed",
          ue = {};
        function te() {}
        function ye() {}
        function He() {}
        var fe = {};
        g(fe, t, function () {
          return this;
        });
        var Ne = Object.getPrototypeOf,
          wt = Ne && Ne(Ne(Pt([])));
        wt && wt !== u && n.call(wt, t) && (fe = wt);
        var tt = (He.prototype = te.prototype = Object.create(fe));
        function Wt(E) {
          ["next", "throw", "return"].forEach(function (S) {
            g(E, S, function (D) {
              return this._invoke(S, D);
            });
          });
        }
        function bt(E, S) {
          function D(O, z, de, ke) {
            var Ae = R(E[O], E, z);
            if (Ae.type !== "throw") {
              var rt = Ae.arg,
                dt = rt.value;
              return dt && typeof dt == "object" && n.call(dt, "__await")
                ? S.resolve(dt.__await).then(
                    function (Be) {
                      D("next", Be, de, ke);
                    },
                    function (Be) {
                      D("throw", Be, de, ke);
                    }
                  )
                : S.resolve(dt).then(
                    function (Be) {
                      (rt.value = Be), de(rt);
                    },
                    function (Be) {
                      return D("throw", Be, de, ke);
                    }
                  );
            }
            ke(Ae.arg);
          }
          var P;
          i(this, "_invoke", {
            value: function (O, z) {
              function de() {
                return new S(function (ke, Ae) {
                  D(O, z, ke, Ae);
                });
              }
              return (P = P ? P.then(de, de) : de());
            },
          });
        }
        function Zr(E, S, D) {
          var P = N;
          return function (O, z) {
            if (P === re) throw new Error("Generator is already running");
            if (P === ge) {
              if (O === "throw") throw z;
              return { value: h, done: !0 };
            }
            for (D.method = O, D.arg = z; ; ) {
              var de = D.delegate;
              if (de) {
                var ke = zt(de, D);
                if (ke) {
                  if (ke === ue) continue;
                  return ke;
                }
              }
              if (D.method === "next") D.sent = D._sent = D.arg;
              else if (D.method === "throw") {
                if (P === N) throw ((P = ge), D.arg);
                D.dispatchException(D.arg);
              } else D.method === "return" && D.abrupt("return", D.arg);
              P = re;
              var Ae = R(E, S, D);
              if (Ae.type === "normal") {
                if (((P = D.done ? ge : H), Ae.arg === ue)) continue;
                return { value: Ae.arg, done: D.done };
              }
              Ae.type === "throw" &&
                ((P = ge), (D.method = "throw"), (D.arg = Ae.arg));
            }
          };
        }
        function zt(E, S) {
          var D = S.method,
            P = E.iterator[D];
          if (P === h)
            return (
              (S.delegate = null),
              (D === "throw" &&
                E.iterator.return &&
                ((S.method = "return"),
                (S.arg = h),
                zt(E, S),
                S.method === "throw")) ||
                (D !== "return" &&
                  ((S.method = "throw"),
                  (S.arg = new TypeError(
                    "The iterator does not provide a '" + D + "' method"
                  )))),
              ue
            );
          var O = R(P, E.iterator, S.arg);
          if (O.type === "throw")
            return (
              (S.method = "throw"), (S.arg = O.arg), (S.delegate = null), ue
            );
          var z = O.arg;
          return z
            ? z.done
              ? ((S[E.resultName] = z.value),
                (S.next = E.nextLoc),
                S.method !== "return" && ((S.method = "next"), (S.arg = h)),
                (S.delegate = null),
                ue)
              : z
            : ((S.method = "throw"),
              (S.arg = new TypeError("iterator result is not an object")),
              (S.delegate = null),
              ue);
        }
        function Xr(E) {
          var S = { tryLoc: E[0] };
          1 in E && (S.catchLoc = E[1]),
            2 in E && ((S.finallyLoc = E[2]), (S.afterLoc = E[3])),
            this.tryEntries.push(S);
        }
        function Lt(E) {
          var S = E.completion || {};
          (S.type = "normal"), delete S.arg, (E.completion = S);
        }
        function Mt(E) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            E.forEach(Xr, this),
            this.reset(!0);
        }
        function Pt(E) {
          if (E || E === "") {
            var S = E[t];
            if (S) return S.call(E);
            if (typeof E.next == "function") return E;
            if (!isNaN(E.length)) {
              var D = -1,
                P = function O() {
                  for (; ++D < E.length; )
                    if (n.call(E, D)) return (O.value = E[D]), (O.done = !1), O;
                  return (O.value = h), (O.done = !0), O;
                };
              return (P.next = P);
            }
          }
          throw new TypeError(typeof E + " is not iterable");
        }
        return (
          (ye.prototype = He),
          i(tt, "constructor", { value: He, configurable: !0 }),
          i(He, "constructor", { value: ye, configurable: !0 }),
          (ye.displayName = g(He, f, "GeneratorFunction")),
          (s.isGeneratorFunction = function (E) {
            var S = typeof E == "function" && E.constructor;
            return (
              !!S &&
              (S === ye || (S.displayName || S.name) === "GeneratorFunction")
            );
          }),
          (s.mark = function (E) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(E, He)
                : ((E.__proto__ = He), g(E, f, "GeneratorFunction")),
              (E.prototype = Object.create(tt)),
              E
            );
          }),
          (s.awrap = function (E) {
            return { __await: E };
          }),
          Wt(bt.prototype),
          g(bt.prototype, a, function () {
            return this;
          }),
          (s.AsyncIterator = bt),
          (s.async = function (E, S, D, P, O) {
            O === void 0 && (O = Promise);
            var z = new bt(A(E, S, D, P), O);
            return s.isGeneratorFunction(S)
              ? z
              : z.next().then(function (de) {
                  return de.done ? de.value : z.next();
                });
          }),
          Wt(tt),
          g(tt, f, "Generator"),
          g(tt, t, function () {
            return this;
          }),
          g(tt, "toString", function () {
            return "[object Generator]";
          }),
          (s.keys = function (E) {
            var S = Object(E),
              D = [];
            for (var P in S) D.push(P);
            return (
              D.reverse(),
              function O() {
                for (; D.length; ) {
                  var z = D.pop();
                  if (z in S) return (O.value = z), (O.done = !1), O;
                }
                return (O.done = !0), O;
              }
            );
          }),
          (s.values = Pt),
          (Mt.prototype = {
            constructor: Mt,
            reset: function (E) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = h),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = h),
                this.tryEntries.forEach(Lt),
                !E)
              )
                for (var S in this)
                  S.charAt(0) === "t" &&
                    n.call(this, S) &&
                    !isNaN(+S.slice(1)) &&
                    (this[S] = h);
            },
            stop: function () {
              this.done = !0;
              var E = this.tryEntries[0].completion;
              if (E.type === "throw") throw E.arg;
              return this.rval;
            },
            dispatchException: function (E) {
              if (this.done) throw E;
              var S = this;
              function D(Ae, rt) {
                return (
                  (z.type = "throw"),
                  (z.arg = E),
                  (S.next = Ae),
                  rt && ((S.method = "next"), (S.arg = h)),
                  !!rt
                );
              }
              for (var P = this.tryEntries.length - 1; P >= 0; --P) {
                var O = this.tryEntries[P],
                  z = O.completion;
                if (O.tryLoc === "root") return D("end");
                if (O.tryLoc <= this.prev) {
                  var de = n.call(O, "catchLoc"),
                    ke = n.call(O, "finallyLoc");
                  if (de && ke) {
                    if (this.prev < O.catchLoc) return D(O.catchLoc, !0);
                    if (this.prev < O.finallyLoc) return D(O.finallyLoc);
                  } else if (de) {
                    if (this.prev < O.catchLoc) return D(O.catchLoc, !0);
                  } else {
                    if (!ke)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < O.finallyLoc) return D(O.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (E, S) {
              for (var D = this.tryEntries.length - 1; D >= 0; --D) {
                var P = this.tryEntries[D];
                if (
                  P.tryLoc <= this.prev &&
                  n.call(P, "finallyLoc") &&
                  this.prev < P.finallyLoc
                ) {
                  var O = P;
                  break;
                }
              }
              O &&
                (E === "break" || E === "continue") &&
                O.tryLoc <= S &&
                S <= O.finallyLoc &&
                (O = null);
              var z = O ? O.completion : {};
              return (
                (z.type = E),
                (z.arg = S),
                O
                  ? ((this.method = "next"), (this.next = O.finallyLoc), ue)
                  : this.complete(z)
              );
            },
            complete: function (E, S) {
              if (E.type === "throw") throw E.arg;
              return (
                E.type === "break" || E.type === "continue"
                  ? (this.next = E.arg)
                  : E.type === "return"
                  ? ((this.rval = this.arg = E.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : E.type === "normal" && S && (this.next = S),
                ue
              );
            },
            finish: function (E) {
              for (var S = this.tryEntries.length - 1; S >= 0; --S) {
                var D = this.tryEntries[S];
                if (D.finallyLoc === E)
                  return this.complete(D.completion, D.afterLoc), Lt(D), ue;
              }
            },
            catch: function (E) {
              for (var S = this.tryEntries.length - 1; S >= 0; --S) {
                var D = this.tryEntries[S];
                if (D.tryLoc === E) {
                  var P = D.completion;
                  if (P.type === "throw") {
                    var O = P.arg;
                    Lt(D);
                  }
                  return O;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (E, S, D) {
              return (
                (this.delegate = {
                  iterator: Pt(E),
                  resultName: S,
                  nextLoc: D,
                }),
                this.method === "next" && (this.arg = h),
                ue
              );
            },
          }),
          s
        );
      }
      function k(h, s) {
        if (typeof h != "object" || !h) return h;
        var u = h[Symbol.toPrimitive];
        if (u !== void 0) {
          var n = u.call(h, s || "default");
          if (typeof n != "object") return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (s === "string" ? String : Number)(h);
      }
      function T(h) {
        var s = k(h, "string");
        return typeof s == "symbol" ? s : String(s);
      }
      function j(h) {
        "@babel/helpers - typeof";
        return (
          (j =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (s) {
                  return typeof s;
                }
              : function (s) {
                  return s &&
                    typeof Symbol == "function" &&
                    s.constructor === Symbol &&
                    s !== Symbol.prototype
                    ? "symbol"
                    : typeof s;
                }),
          j(h)
        );
      }
      function q(h, s, u, n, i, r, t) {
        try {
          var a = h[r](t),
            f = a.value;
        } catch (g) {
          u(g);
          return;
        }
        a.done ? s(f) : Promise.resolve(f).then(n, i);
      }
      function v(h) {
        return function () {
          var s = this,
            u = arguments;
          return new Promise(function (n, i) {
            var r = h.apply(s, u);
            function t(f) {
              q(r, n, i, t, a, "next", f);
            }
            function a(f) {
              q(r, n, i, t, a, "throw", f);
            }
            t(void 0);
          });
        };
      }
      function U(h, s) {
        if (!(h instanceof s))
          throw new TypeError("Cannot call a class as a function");
      }
      function ae(h, s) {
        for (var u = 0; u < s.length; u++) {
          var n = s[u];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(h, T(n.key), n);
        }
      }
      function Z(h, s, u) {
        return (
          s && ae(h.prototype, s),
          u && ae(h, u),
          Object.defineProperty(h, "prototype", { writable: !1 }),
          h
        );
      }
      function $(h, s, u) {
        return (
          (s = T(s)),
          s in h
            ? Object.defineProperty(h, s, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (h[s] = u),
          h
        );
      }
      function X(h, s) {
        if (typeof s != "function" && s !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (h.prototype = Object.create(s && s.prototype, {
          constructor: { value: h, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(h, "prototype", { writable: !1 }),
          s && pe(h, s);
      }
      function W(h) {
        return (
          (W = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (u) {
                return u.__proto__ || Object.getPrototypeOf(u);
              }),
          W(h)
        );
      }
      function pe(h, s) {
        return (
          (pe = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, i) {
                return (n.__proto__ = i), n;
              }),
          pe(h, s)
        );
      }
      function Le() {
        if (
          typeof Reflect > "u" ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch {
          return !1;
        }
      }
      function oe(h, s, u) {
        return (
          Le()
            ? (oe = Reflect.construct.bind())
            : (oe = function (i, r, t) {
                var a = [null];
                a.push.apply(a, r);
                var f = Function.bind.apply(i, a),
                  g = new f();
                return t && pe(g, t.prototype), g;
              }),
          oe.apply(null, arguments)
        );
      }
      function Xe(h) {
        try {
          return Function.toString.call(h).indexOf("[native code]") !== -1;
        } catch {
          return typeof h == "function";
        }
      }
      function Te(h) {
        var s = typeof Map == "function" ? new Map() : void 0;
        return (
          (Te = function (n) {
            if (n === null || !Xe(n)) return n;
            if (typeof n != "function")
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (typeof s < "u") {
              if (s.has(n)) return s.get(n);
              s.set(n, i);
            }
            function i() {
              return oe(n, arguments, W(this).constructor);
            }
            return (
              (i.prototype = Object.create(n.prototype, {
                constructor: {
                  value: i,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              pe(i, n)
            );
          }),
          Te(h)
        );
      }
      function b(h) {
        if (h === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return h;
      }
      function I(h, s) {
        if (s && (typeof s == "object" || typeof s == "function")) return s;
        if (s !== void 0)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return b(h);
      }
      function M(h) {
        var s = Le();
        return function () {
          var n = W(h),
            i;
          if (s) {
            var r = W(this).constructor;
            i = Reflect.construct(n, arguments, r);
          } else i = n.apply(this, arguments);
          return I(this, i);
        };
      }
      function ne(h, s) {
        return se(h) || _(h, s) || G(h, s) || Y();
      }
      function se(h) {
        if (Array.isArray(h)) return h;
      }
      function G(h, s) {
        if (h) {
          if (typeof h == "string") return Me(h, s);
          var u = Object.prototype.toString.call(h).slice(8, -1);
          if (
            (u === "Object" && h.constructor && (u = h.constructor.name),
            u === "Map" || u === "Set")
          )
            return Array.from(h);
          if (
            u === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
          )
            return Me(h, s);
        }
      }
      function Me(h, s) {
        (s == null || s > h.length) && (s = h.length);
        for (var u = 0, n = new Array(s); u < s; u++) n[u] = h[u];
        return n;
      }
      function Y() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ie(h, s) {
        var u = (typeof Symbol < "u" && h[Symbol.iterator]) || h["@@iterator"];
        if (!u) {
          if (
            Array.isArray(h) ||
            (u = G(h)) ||
            (s && h && typeof h.length == "number")
          ) {
            u && (h = u);
            var n = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return n >= h.length
                  ? { done: !0 }
                  : { done: !1, value: h[n++] };
              },
              e: function (f) {
                throw f;
              },
              f: i,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var r = !0,
          t = !1,
          a;
        return {
          s: function () {
            u = u.call(h);
          },
          n: function () {
            var f = u.next();
            return (r = f.done), f;
          },
          e: function (f) {
            (t = !0), (a = f);
          },
          f: function () {
            try {
              !r && u.return != null && u.return();
            } finally {
              if (t) throw a;
            }
          },
        };
      }
      var me = (function (h) {
          X(u, h);
          var s = M(u);
          function u() {
            var n;
            U(this, u);
            for (var i = arguments.length, r = new Array(i), t = 0; t < i; t++)
              r[t] = arguments[t];
            return (
              (n = s.call.apply(s, [this].concat(r))),
              $(b(n), "name", "MeiliSearchError"),
              n
            );
          }
          return Z(u);
        })(Te(Error)),
        De = (function (h) {
          X(u, h);
          var s = M(u);
          function u(n, i) {
            var r, t;
            return (
              U(this, u),
              (t = s.call(
                this,
                (r = i?.message) !== null && r !== void 0
                  ? r
                  : "".concat(n.status, ": ").concat(n.statusText)
              )),
              $(b(t), "name", "MeiliSearchApiError"),
              $(b(t), "cause", void 0),
              $(b(t), "response", void 0),
              (t.response = n),
              i !== void 0 && (t.cause = i),
              t
            );
          }
          return Z(u);
        })(me),
        We = (function (h) {
          X(u, h);
          var s = M(u);
          function u(n, i) {
            var r;
            return (
              U(this, u),
              (r = s.call(this, "Request to ".concat(n, " has failed"), {
                cause: i,
              })),
              $(b(r), "name", "MeiliSearchRequestError"),
              r
            );
          }
          return Z(u);
        })(me),
        lt = (function (h) {
          X(u, h);
          var s = M(u);
          function u(n) {
            var i;
            return (
              U(this, u),
              (i = s.call(this, n)),
              $(b(i), "name", "MeiliSearchTimeOutError"),
              i
            );
          }
          return Z(u);
        })(me);
      function Fe(h, s) {
        return ""
          .concat(
            h,
            `
Hint: It might not be working because maybe you're not up to date with the Meilisearch version that `
          )
          .concat(s, " call requires.");
      }
      function ve(h) {
        return Object.entries(h).reduce(function (s, u) {
          var n = ne(u, 2),
            i = n[0],
            r = n[1];
          return r !== void 0 && (s[i] = r), s;
        }, {});
      }
      function xe(h) {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (
          (Ve = v(
            l().mark(function h(s) {
              return l().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (n.next = 2),
                        new Promise(function (i) {
                          return setTimeout(i, s);
                        })
                      );
                    case 2:
                      return n.abrupt("return", n.sent);
                    case 3:
                    case "end":
                      return n.stop();
                  }
              }, h);
            })
          )),
          Ve.apply(this, arguments)
        );
      }
      function ze(h) {
        return h.startsWith("https://") || h.startsWith("http://")
          ? h
          : "http://".concat(h);
      }
      function be(h) {
        return h.endsWith("/") || (h += "/"), h;
      }
      var $e = "0.42.0";
      function Pe(h) {
        var s = Object.keys(h),
          u = s.reduce(function (n, i) {
            var r = h[i];
            return r === void 0
              ? n
              : Array.isArray(r)
              ? y(y({}, n), {}, $({}, i, r.join(",")))
              : r instanceof Date
              ? y(y({}, n), {}, $({}, i, r.toISOString()))
              : y(y({}, n), {}, $({}, i, r));
          }, {});
        return u;
      }
      function Qe(h) {
        try {
          return (h = ze(h)), (h = be(h)), h;
        } catch {
          throw new me("The provided host is not valid.");
        }
      }
      function Ke(h) {
        if (Array.isArray(h))
          return h.reduce(function (u, n) {
            return (u[n[0]] = n[1]), u;
          }, {});
        if ("has" in h) {
          var s = {};
          return (
            h.forEach(function (u, n) {
              return (s[n] = u);
            }),
            s
          );
        } else return Object.assign({}, h);
      }
      function Je(h) {
        var s,
          u,
          n = "X-Meilisearch-Client",
          i = "Meilisearch JavaScript (v".concat($e, ")"),
          r = "Content-Type",
          t = "Authorization",
          a = Ke(
            (s =
              (u = h.requestConfig) === null || u === void 0
                ? void 0
                : u.headers) !== null && s !== void 0
              ? s
              : {}
          );
        if (
          (h.apiKey && !a[t] && (a[t] = "Bearer ".concat(h.apiKey)),
          a[r] || (a["Content-Type"] = "application/json"),
          h.clientAgents && Array.isArray(h.clientAgents))
        ) {
          var f = h.clientAgents.concat(i);
          a[n] = f.join(" ; ");
        } else {
          if (h.clientAgents && !Array.isArray(h.clientAgents))
            throw new me(
              'Meilisearch: The header "'.concat(
                n,
                `" should be an array of string(s).
`
              )
            );
          a[n] = i;
        }
        return a;
      }
      var qe = (function () {
          function h(s) {
            U(this, h),
              $(this, "headers", void 0),
              $(this, "url", void 0),
              $(this, "requestConfig", void 0),
              $(this, "httpClient", void 0),
              $(this, "requestTimeout", void 0),
              (this.headers = Je(s)),
              (this.requestConfig = s.requestConfig),
              (this.httpClient = s.httpClient),
              (this.requestTimeout = s.timeout);
            try {
              var u = Qe(s.host);
              this.url = new URL(u);
            } catch {
              throw new me("The provided host is not valid.");
            }
          }
          return (
            Z(h, [
              {
                key: "request",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r, t, a, f, g, A, R, N, H, re, ge, ue, te, ye;
                      return l().wrap(
                        function (fe) {
                          for (;;)
                            switch ((fe.prev = fe.next)) {
                              case 0:
                                return (
                                  (t = i.method),
                                  (a = i.url),
                                  (f = i.params),
                                  (g = i.body),
                                  (A = i.config),
                                  (R = A === void 0 ? {} : A),
                                  typeof fetch > "u" && Fr(),
                                  (N = new URL(a, this.url)),
                                  f &&
                                    ((H = new URLSearchParams()),
                                    Object.keys(f)
                                      .filter(function (Ne) {
                                        return f[Ne] !== null;
                                      })
                                      .map(function (Ne) {
                                        return H.set(Ne, f[Ne]);
                                      }),
                                    (N.search = H.toString())),
                                  ((r = R.headers) !== null &&
                                    r !== void 0 &&
                                    r["Content-Type"]) ||
                                    (g = JSON.stringify(g)),
                                  (re = y(y({}, this.headers), R.headers)),
                                  (ge = this.fetchWithTimeout(
                                    N.toString(),
                                    y(
                                      y(y({}, R), this.requestConfig),
                                      {},
                                      { method: t, body: g, headers: re }
                                    ),
                                    this.requestTimeout
                                  )),
                                  (fe.next = 9),
                                  ge.catch(function (Ne) {
                                    throw new We(N.toString(), Ne);
                                  })
                                );
                              case 9:
                                if (
                                  ((ue = fe.sent), this.httpClient === void 0)
                                ) {
                                  fe.next = 12;
                                  break;
                                }
                                return fe.abrupt("return", ue);
                              case 12:
                                return (fe.next = 14), ue.text();
                              case 14:
                                if (
                                  ((te = fe.sent),
                                  (ye = te === "" ? void 0 : JSON.parse(te)),
                                  ue.ok)
                                ) {
                                  fe.next = 18;
                                  break;
                                }
                                throw new De(ue, ye);
                              case 18:
                                return fe.abrupt("return", ye);
                              case 19:
                              case "end":
                                return fe.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "fetchWithTimeout",
                value: (function () {
                  var s = v(
                    l().mark(function n(i, r, t) {
                      var a = this;
                      return l().wrap(function (g) {
                        for (;;)
                          switch ((g.prev = g.next)) {
                            case 0:
                              return g.abrupt(
                                "return",
                                new Promise(function (A, R) {
                                  var N = a.httpClient ? a.httpClient : fetch,
                                    H = N(i, r),
                                    re = [H],
                                    ge;
                                  if (t) {
                                    var ue = new Promise(function (te, ye) {
                                      ge = setTimeout(function () {
                                        ye(
                                          new Error("Error: Request Timed Out")
                                        );
                                      }, t);
                                    });
                                    re.push(ue);
                                  }
                                  Promise.race(re)
                                    .then(A)
                                    .catch(R)
                                    .finally(function () {
                                      clearTimeout(ge);
                                    });
                                })
                              );
                            case 1:
                            case "end":
                              return g.stop();
                          }
                      }, n);
                    })
                  );
                  function u(n, i, r) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "get",
                value: (function () {
                  var s = v(
                    l().mark(function n(i, r, t) {
                      return l().wrap(
                        function (f) {
                          for (;;)
                            switch ((f.prev = f.next)) {
                              case 0:
                                return (
                                  (f.next = 2),
                                  this.request({
                                    method: "GET",
                                    url: i,
                                    params: r,
                                    config: t,
                                  })
                                );
                              case 2:
                                return f.abrupt("return", f.sent);
                              case 3:
                              case "end":
                                return f.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n, i, r) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "post",
                value: (function () {
                  var s = v(
                    l().mark(function n(i, r, t, a) {
                      return l().wrap(
                        function (g) {
                          for (;;)
                            switch ((g.prev = g.next)) {
                              case 0:
                                return (
                                  (g.next = 2),
                                  this.request({
                                    method: "POST",
                                    url: i,
                                    body: r,
                                    params: t,
                                    config: a,
                                  })
                                );
                              case 2:
                                return g.abrupt("return", g.sent);
                              case 3:
                              case "end":
                                return g.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n, i, r, t) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "put",
                value: (function () {
                  var s = v(
                    l().mark(function n(i, r, t, a) {
                      return l().wrap(
                        function (g) {
                          for (;;)
                            switch ((g.prev = g.next)) {
                              case 0:
                                return (
                                  (g.next = 2),
                                  this.request({
                                    method: "PUT",
                                    url: i,
                                    body: r,
                                    params: t,
                                    config: a,
                                  })
                                );
                              case 2:
                                return g.abrupt("return", g.sent);
                              case 3:
                              case "end":
                                return g.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n, i, r, t) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "patch",
                value: (function () {
                  var s = v(
                    l().mark(function n(i, r, t, a) {
                      return l().wrap(
                        function (g) {
                          for (;;)
                            switch ((g.prev = g.next)) {
                              case 0:
                                return (
                                  (g.next = 2),
                                  this.request({
                                    method: "PATCH",
                                    url: i,
                                    body: r,
                                    params: t,
                                    config: a,
                                  })
                                );
                              case 2:
                                return g.abrupt("return", g.sent);
                              case 3:
                              case "end":
                                return g.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n, i, r, t) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "delete",
                value: (function () {
                  var s = v(
                    l().mark(function n(i, r, t, a) {
                      return l().wrap(
                        function (g) {
                          for (;;)
                            switch ((g.prev = g.next)) {
                              case 0:
                                return (
                                  (g.next = 2),
                                  this.request({
                                    method: "DELETE",
                                    url: i,
                                    body: r,
                                    params: t,
                                    config: a,
                                  })
                                );
                              case 2:
                                return g.abrupt("return", g.sent);
                              case 3:
                              case "end":
                                return g.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n, i, r, t) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
            ]),
            h
          );
        })(),
        L = Z(function h(s) {
          U(this, h),
            $(this, "taskUid", void 0),
            $(this, "indexUid", void 0),
            $(this, "status", void 0),
            $(this, "type", void 0),
            $(this, "enqueuedAt", void 0),
            (this.taskUid = s.taskUid),
            (this.indexUid = s.indexUid),
            (this.status = s.status),
            (this.type = s.type),
            (this.enqueuedAt = new Date(s.enqueuedAt));
        }),
        ct = Z(function h(s) {
          U(this, h),
            $(this, "indexUid", void 0),
            $(this, "status", void 0),
            $(this, "type", void 0),
            $(this, "uid", void 0),
            $(this, "canceledBy", void 0),
            $(this, "details", void 0),
            $(this, "error", void 0),
            $(this, "duration", void 0),
            $(this, "startedAt", void 0),
            $(this, "enqueuedAt", void 0),
            $(this, "finishedAt", void 0),
            (this.indexUid = s.indexUid),
            (this.status = s.status),
            (this.type = s.type),
            (this.uid = s.uid),
            (this.details = s.details),
            (this.canceledBy = s.canceledBy),
            (this.error = s.error),
            (this.duration = s.duration),
            (this.startedAt = new Date(s.startedAt)),
            (this.enqueuedAt = new Date(s.enqueuedAt)),
            (this.finishedAt = new Date(s.finishedAt));
        }),
        ft = (function () {
          function h(s) {
            U(this, h),
              $(this, "httpRequest", void 0),
              (this.httpRequest = new qe(s));
          }
          return (
            Z(h, [
              {
                key: "getTask",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r, t;
                      return l().wrap(
                        function (f) {
                          for (;;)
                            switch ((f.prev = f.next)) {
                              case 0:
                                return (
                                  (r = "tasks/".concat(i)),
                                  (f.next = 3),
                                  this.httpRequest.get(r)
                                );
                              case 3:
                                return (
                                  (t = f.sent), f.abrupt("return", new ct(t))
                                );
                              case 5:
                              case "end":
                                return f.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "getTasks",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i,
                        r,
                        t,
                        a = arguments;
                      return l().wrap(
                        function (g) {
                          for (;;)
                            switch ((g.prev = g.next)) {
                              case 0:
                                return (
                                  (i =
                                    a.length > 0 && a[0] !== void 0
                                      ? a[0]
                                      : {}),
                                  (r = "tasks"),
                                  (g.next = 4),
                                  this.httpRequest.get(r, Pe(i))
                                );
                              case 4:
                                return (
                                  (t = g.sent),
                                  g.abrupt(
                                    "return",
                                    y(
                                      y({}, t),
                                      {},
                                      {
                                        results: t.results.map(function (A) {
                                          return new ct(A);
                                        }),
                                      }
                                    )
                                  )
                                );
                              case 6:
                              case "end":
                                return g.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "waitForTask",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r,
                        t,
                        a,
                        f,
                        g,
                        A,
                        R,
                        N = arguments;
                      return l().wrap(
                        function (re) {
                          for (;;)
                            switch ((re.prev = re.next)) {
                              case 0:
                                (r =
                                  N.length > 1 && N[1] !== void 0 ? N[1] : {}),
                                  (t = r.timeOutMs),
                                  (a = t === void 0 ? 5e3 : t),
                                  (f = r.intervalMs),
                                  (g = f === void 0 ? 50 : f),
                                  (A = Date.now());
                              case 2:
                                if (!(Date.now() - A < a)) {
                                  re.next = 12;
                                  break;
                                }
                                return (re.next = 5), this.getTask(i);
                              case 5:
                                if (
                                  ((R = re.sent),
                                  [d.TASK_ENQUEUED, d.TASK_PROCESSING].includes(
                                    R.status
                                  ))
                                ) {
                                  re.next = 8;
                                  break;
                                }
                                return re.abrupt("return", R);
                              case 8:
                                return (re.next = 10), xe(g);
                              case 10:
                                re.next = 2;
                                break;
                              case 12:
                                throw new lt(
                                  "timeout of "
                                    .concat(a, "ms has exceeded on process ")
                                    .concat(
                                      i,
                                      " when waiting a task to be resolved."
                                    )
                                );
                              case 13:
                              case "end":
                                return re.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "waitForTasks",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r,
                        t,
                        a,
                        f,
                        g,
                        A,
                        R,
                        N,
                        H,
                        re,
                        ge = arguments;
                      return l().wrap(
                        function (te) {
                          for (;;)
                            switch ((te.prev = te.next)) {
                              case 0:
                                (r =
                                  ge.length > 1 && ge[1] !== void 0
                                    ? ge[1]
                                    : {}),
                                  (t = r.timeOutMs),
                                  (a = t === void 0 ? 5e3 : t),
                                  (f = r.intervalMs),
                                  (g = f === void 0 ? 50 : f),
                                  (A = []),
                                  (R = ie(i)),
                                  (te.prev = 3),
                                  R.s();
                              case 5:
                                if ((N = R.n()).done) {
                                  te.next = 13;
                                  break;
                                }
                                return (
                                  (H = N.value),
                                  (te.next = 9),
                                  this.waitForTask(H, {
                                    timeOutMs: a,
                                    intervalMs: g,
                                  })
                                );
                              case 9:
                                (re = te.sent), A.push(re);
                              case 11:
                                te.next = 5;
                                break;
                              case 13:
                                te.next = 18;
                                break;
                              case 15:
                                (te.prev = 15),
                                  (te.t0 = te.catch(3)),
                                  R.e(te.t0);
                              case 18:
                                return (te.prev = 18), R.f(), te.finish(18);
                              case 21:
                                return te.abrupt("return", A);
                              case 22:
                              case "end":
                                return te.stop();
                            }
                        },
                        n,
                        this,
                        [[3, 15, 18, 21]]
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "cancelTasks",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i,
                        r,
                        t,
                        a = arguments;
                      return l().wrap(
                        function (g) {
                          for (;;)
                            switch ((g.prev = g.next)) {
                              case 0:
                                return (
                                  (i =
                                    a.length > 0 && a[0] !== void 0
                                      ? a[0]
                                      : {}),
                                  (r = "tasks/cancel"),
                                  (g.next = 4),
                                  this.httpRequest.post(r, {}, Pe(i))
                                );
                              case 4:
                                return (
                                  (t = g.sent), g.abrupt("return", new L(t))
                                );
                              case 6:
                              case "end":
                                return g.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "deleteTasks",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i,
                        r,
                        t,
                        a = arguments;
                      return l().wrap(
                        function (g) {
                          for (;;)
                            switch ((g.prev = g.next)) {
                              case 0:
                                return (
                                  (i =
                                    a.length > 0 && a[0] !== void 0
                                      ? a[0]
                                      : {}),
                                  (r = "tasks"),
                                  (g.next = 4),
                                  this.httpRequest.delete(r, {}, Pe(i))
                                );
                              case 4:
                                return (
                                  (t = g.sent), g.abrupt("return", new L(t))
                                );
                              case 6:
                              case "end":
                                return g.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
            ]),
            h
          );
        })(),
        Re = (function () {
          function h(s, u, n) {
            U(this, h),
              $(this, "uid", void 0),
              $(this, "primaryKey", void 0),
              $(this, "createdAt", void 0),
              $(this, "updatedAt", void 0),
              $(this, "httpRequest", void 0),
              $(this, "tasks", void 0),
              (this.uid = u),
              (this.primaryKey = n),
              (this.httpRequest = new qe(s)),
              (this.tasks = new ft(s));
          }
          return (
            Z(
              h,
              [
                {
                  key: "search",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i, r, t) {
                        var a;
                        return l().wrap(
                          function (g) {
                            for (;;)
                              switch ((g.prev = g.next)) {
                                case 0:
                                  return (
                                    (a = "indexes/".concat(
                                      this.uid,
                                      "/search"
                                    )),
                                    (g.next = 3),
                                    this.httpRequest.post(
                                      a,
                                      ve(y({ q: i }, r)),
                                      void 0,
                                      t
                                    )
                                  );
                                case 3:
                                  return g.abrupt("return", g.sent);
                                case 4:
                                case "end":
                                  return g.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n, i, r) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "searchGet",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i, r, t) {
                        var a, f, g, A, R, N, H, re, ge, ue;
                        return l().wrap(
                          function (ye) {
                            for (;;)
                              switch ((ye.prev = ye.next)) {
                                case 0:
                                  return (
                                    (re = "indexes/".concat(
                                      this.uid,
                                      "/search"
                                    )),
                                    (ge = function (fe) {
                                      if (typeof fe == "string") return fe;
                                      if (Array.isArray(fe))
                                        throw new me(
                                          "The filter query parameter should be in string format when using searchGet"
                                        );
                                    }),
                                    (ue = y(
                                      y({ q: i }, r),
                                      {},
                                      {
                                        filter: ge(r?.filter),
                                        sort:
                                          r == null ||
                                          (a = r.sort) === null ||
                                          a === void 0
                                            ? void 0
                                            : a.join(","),
                                        facets:
                                          r == null ||
                                          (f = r.facets) === null ||
                                          f === void 0
                                            ? void 0
                                            : f.join(","),
                                        attributesToRetrieve:
                                          r == null ||
                                          (g = r.attributesToRetrieve) ===
                                            null ||
                                          g === void 0
                                            ? void 0
                                            : g.join(","),
                                        attributesToCrop:
                                          r == null ||
                                          (A = r.attributesToCrop) === null ||
                                          A === void 0
                                            ? void 0
                                            : A.join(","),
                                        attributesToHighlight:
                                          r == null ||
                                          (R = r.attributesToHighlight) ===
                                            null ||
                                          R === void 0
                                            ? void 0
                                            : R.join(","),
                                        vector:
                                          r == null ||
                                          (N = r.vector) === null ||
                                          N === void 0
                                            ? void 0
                                            : N.join(","),
                                        attributesToSearchOn:
                                          r == null ||
                                          (H = r.attributesToSearchOn) ===
                                            null ||
                                          H === void 0
                                            ? void 0
                                            : H.join(","),
                                      }
                                    )),
                                    (ye.next = 5),
                                    this.httpRequest.get(re, ve(ue), t)
                                  );
                                case 5:
                                  return ye.abrupt("return", ye.sent);
                                case 6:
                                case "end":
                                  return ye.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n, i, r) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "searchForFacetValues",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i, r) {
                        var t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (t = "indexes/".concat(
                                      this.uid,
                                      "/facet-search"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.post(t, ve(i), void 0, r)
                                  );
                                case 3:
                                  return f.abrupt("return", f.sent);
                                case 4:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n, i) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "searchSimilarDocuments",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/similar"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.post(r, ve(i), void 0)
                                  );
                                case 3:
                                  return a.abrupt("return", a.sent);
                                case 4:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getRawInfo",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(this.uid)),
                                    (a.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (this.primaryKey = r.primaryKey),
                                    (this.updatedAt = new Date(r.updatedAt)),
                                    (this.createdAt = new Date(r.createdAt)),
                                    a.abrupt("return", r)
                                  );
                                case 8:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "fetchInfo",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        return l().wrap(
                          function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (r.next = 2), this.getRawInfo();
                                case 2:
                                  return r.abrupt("return", this);
                                case 3:
                                case "end":
                                  return r.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "fetchPrimaryKey",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        return l().wrap(
                          function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (r.next = 2), this.getRawInfo();
                                case 2:
                                  return (
                                    (this.primaryKey = r.sent.primaryKey),
                                    r.abrupt("return", this.primaryKey)
                                  );
                                case 4:
                                case "end":
                                  return r.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "update",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(this.uid)),
                                    (f.next = 3),
                                    this.httpRequest.patch(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent),
                                    (t.enqueuedAt = new Date(t.enqueuedAt)),
                                    f.abrupt("return", t)
                                  );
                                case 6:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "delete",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(this.uid)),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent), a.abrupt("return", new L(r))
                                  );
                                case 5:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getTasks",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i,
                          r = arguments;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i =
                                      r.length > 0 && r[0] !== void 0
                                        ? r[0]
                                        : {}),
                                    (a.next = 3),
                                    this.tasks.getTasks(
                                      y(y({}, i), {}, { indexUids: [this.uid] })
                                    )
                                  );
                                case 3:
                                  return a.abrupt("return", a.sent);
                                case 4:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getTask",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.tasks.getTask(i);
                                case 2:
                                  return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "waitForTasks",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r,
                          t,
                          a,
                          f,
                          g,
                          A = arguments;
                        return l().wrap(
                          function (N) {
                            for (;;)
                              switch ((N.prev = N.next)) {
                                case 0:
                                  return (
                                    (r =
                                      A.length > 1 && A[1] !== void 0
                                        ? A[1]
                                        : {}),
                                    (t = r.timeOutMs),
                                    (a = t === void 0 ? 5e3 : t),
                                    (f = r.intervalMs),
                                    (g = f === void 0 ? 50 : f),
                                    (N.next = 3),
                                    this.tasks.waitForTasks(i, {
                                      timeOutMs: a,
                                      intervalMs: g,
                                    })
                                  );
                                case 3:
                                  return N.abrupt("return", N.sent);
                                case 4:
                                case "end":
                                  return N.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "waitForTask",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r,
                          t,
                          a,
                          f,
                          g,
                          A = arguments;
                        return l().wrap(
                          function (N) {
                            for (;;)
                              switch ((N.prev = N.next)) {
                                case 0:
                                  return (
                                    (r =
                                      A.length > 1 && A[1] !== void 0
                                        ? A[1]
                                        : {}),
                                    (t = r.timeOutMs),
                                    (a = t === void 0 ? 5e3 : t),
                                    (f = r.intervalMs),
                                    (g = f === void 0 ? 50 : f),
                                    (N.next = 3),
                                    this.tasks.waitForTask(i, {
                                      timeOutMs: a,
                                      intervalMs: g,
                                    })
                                  );
                                case 3:
                                  return N.abrupt("return", N.sent);
                                case 4:
                                case "end":
                                  return N.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getStats",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(this.uid, "/stats")),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getDocuments",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i,
                          r,
                          t,
                          a,
                          f,
                          g,
                          A,
                          R = arguments;
                        return l().wrap(
                          function (H) {
                            for (;;)
                              switch ((H.prev = H.next)) {
                                case 0:
                                  if (
                                    ((i =
                                      R.length > 0 && R[0] !== void 0
                                        ? R[0]
                                        : {}),
                                    (i = ve(i)),
                                    i.filter === void 0)
                                  ) {
                                    H.next = 16;
                                    break;
                                  }
                                  return (
                                    (H.prev = 3),
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/documents/fetch"
                                    )),
                                    (H.next = 7),
                                    this.httpRequest.post(r, i)
                                  );
                                case 7:
                                  return H.abrupt("return", H.sent);
                                case 10:
                                  throw (
                                    ((H.prev = 10),
                                    (H.t0 = H.catch(3)),
                                    (H.t0 instanceof We ||
                                      H.t0 instanceof De) &&
                                      (H.t0.message = Fe(
                                        H.t0.message,
                                        "getDocuments"
                                      )),
                                    H.t0)
                                  );
                                case 14:
                                  H.next = 21;
                                  break;
                                case 16:
                                  return (
                                    (g = "indexes/".concat(
                                      this.uid,
                                      "/documents"
                                    )),
                                    (A = Array.isArray(
                                      (t = i) === null || t === void 0
                                        ? void 0
                                        : t.fields
                                    )
                                      ? {
                                          fields:
                                            (a = i) === null ||
                                            a === void 0 ||
                                            (f = a.fields) === null ||
                                            f === void 0
                                              ? void 0
                                              : f.join(","),
                                        }
                                      : {}),
                                    (H.next = 20),
                                    this.httpRequest.get(g, y(y({}, i), A))
                                  );
                                case 20:
                                  return H.abrupt("return", H.sent);
                                case 21:
                                case "end":
                                  return H.stop();
                              }
                          },
                          n,
                          this,
                          [[3, 10]]
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getDocument",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i, r) {
                        var t, a;
                        return l().wrap(
                          function (g) {
                            for (;;)
                              switch ((g.prev = g.next)) {
                                case 0:
                                  return (
                                    (t = "indexes/"
                                      .concat(this.uid, "/documents/")
                                      .concat(i)),
                                    (a = (function () {
                                      if (Array.isArray(r?.fields)) {
                                        var A;
                                        return r == null ||
                                          (A = r.fields) === null ||
                                          A === void 0
                                          ? void 0
                                          : A.join(",");
                                      }
                                    })()),
                                    (g.next = 4),
                                    this.httpRequest.get(
                                      t,
                                      ve(y(y({}, r), {}, { fields: a }))
                                    )
                                  );
                                case 4:
                                  return g.abrupt("return", g.sent);
                                case 5:
                                case "end":
                                  return g.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n, i) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "addDocuments",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i, r) {
                        var t, a;
                        return l().wrap(
                          function (g) {
                            for (;;)
                              switch ((g.prev = g.next)) {
                                case 0:
                                  return (
                                    (t = "indexes/".concat(
                                      this.uid,
                                      "/documents"
                                    )),
                                    (g.next = 3),
                                    this.httpRequest.post(t, i, r)
                                  );
                                case 3:
                                  return (
                                    (a = g.sent), g.abrupt("return", new L(a))
                                  );
                                case 5:
                                case "end":
                                  return g.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n, i) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "addDocumentsFromString",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i, r, t) {
                        var a, f;
                        return l().wrap(
                          function (A) {
                            for (;;)
                              switch ((A.prev = A.next)) {
                                case 0:
                                  return (
                                    (a = "indexes/".concat(
                                      this.uid,
                                      "/documents"
                                    )),
                                    (A.next = 3),
                                    this.httpRequest.post(a, i, t, {
                                      headers: { "Content-Type": r },
                                    })
                                  );
                                case 3:
                                  return (
                                    (f = A.sent), A.abrupt("return", new L(f))
                                  );
                                case 5:
                                case "end":
                                  return A.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n, i, r) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "addDocumentsInBatches",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r,
                          t,
                          a,
                          f,
                          g = arguments;
                        return l().wrap(
                          function (R) {
                            for (;;)
                              switch ((R.prev = R.next)) {
                                case 0:
                                  (r =
                                    g.length > 1 && g[1] !== void 0
                                      ? g[1]
                                      : 1e3),
                                    (t = g.length > 2 ? g[2] : void 0),
                                    (a = []),
                                    (f = 0);
                                case 4:
                                  if (!(f < i.length)) {
                                    R.next = 13;
                                    break;
                                  }
                                  return (
                                    (R.t0 = a),
                                    (R.next = 8),
                                    this.addDocuments(i.slice(f, f + r), t)
                                  );
                                case 8:
                                  (R.t1 = R.sent), R.t0.push.call(R.t0, R.t1);
                                case 10:
                                  (f += r), (R.next = 4);
                                  break;
                                case 13:
                                  return R.abrupt("return", a);
                                case 14:
                                case "end":
                                  return R.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateDocuments",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i, r) {
                        var t, a;
                        return l().wrap(
                          function (g) {
                            for (;;)
                              switch ((g.prev = g.next)) {
                                case 0:
                                  return (
                                    (t = "indexes/".concat(
                                      this.uid,
                                      "/documents"
                                    )),
                                    (g.next = 3),
                                    this.httpRequest.put(t, i, r)
                                  );
                                case 3:
                                  return (
                                    (a = g.sent), g.abrupt("return", new L(a))
                                  );
                                case 5:
                                case "end":
                                  return g.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n, i) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateDocumentsInBatches",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r,
                          t,
                          a,
                          f,
                          g = arguments;
                        return l().wrap(
                          function (R) {
                            for (;;)
                              switch ((R.prev = R.next)) {
                                case 0:
                                  (r =
                                    g.length > 1 && g[1] !== void 0
                                      ? g[1]
                                      : 1e3),
                                    (t = g.length > 2 ? g[2] : void 0),
                                    (a = []),
                                    (f = 0);
                                case 4:
                                  if (!(f < i.length)) {
                                    R.next = 13;
                                    break;
                                  }
                                  return (
                                    (R.t0 = a),
                                    (R.next = 8),
                                    this.updateDocuments(i.slice(f, f + r), t)
                                  );
                                case 8:
                                  (R.t1 = R.sent), R.t0.push.call(R.t0, R.t1);
                                case 10:
                                  (f += r), (R.next = 4);
                                  break;
                                case 13:
                                  return R.abrupt("return", a);
                                case 14:
                                case "end":
                                  return R.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateDocumentsFromString",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i, r, t) {
                        var a, f;
                        return l().wrap(
                          function (A) {
                            for (;;)
                              switch ((A.prev = A.next)) {
                                case 0:
                                  return (
                                    (a = "indexes/".concat(
                                      this.uid,
                                      "/documents"
                                    )),
                                    (A.next = 3),
                                    this.httpRequest.put(a, i, t, {
                                      headers: { "Content-Type": r },
                                    })
                                  );
                                case 3:
                                  return (
                                    (f = A.sent), A.abrupt("return", new L(f))
                                  );
                                case 5:
                                case "end":
                                  return A.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n, i, r) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "deleteDocument",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/"
                                      .concat(this.uid, "/documents/")
                                      .concat(i)),
                                    (f.next = 3),
                                    this.httpRequest.delete(r)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent),
                                    (t.enqueuedAt = new Date(t.enqueuedAt)),
                                    f.abrupt("return", t)
                                  );
                                case 6:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "deleteDocuments",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t, a, f;
                        return l().wrap(
                          function (A) {
                            for (;;)
                              switch ((A.prev = A.next)) {
                                case 0:
                                  return (
                                    (r =
                                      !Array.isArray(i) && j(i) === "object"),
                                    (t = r
                                      ? "documents/delete"
                                      : "documents/delete-batch"),
                                    (a = "indexes/"
                                      .concat(this.uid, "/")
                                      .concat(t)),
                                    (A.prev = 3),
                                    (A.next = 6),
                                    this.httpRequest.post(a, i)
                                  );
                                case 6:
                                  return (
                                    (f = A.sent), A.abrupt("return", new L(f))
                                  );
                                case 10:
                                  throw (
                                    ((A.prev = 10),
                                    (A.t0 = A.catch(3)),
                                    ((A.t0 instanceof We && r) ||
                                      A.t0 instanceof De) &&
                                      (A.t0.message = Fe(
                                        A.t0.message,
                                        "deleteDocuments"
                                      )),
                                    A.t0)
                                  );
                                case 14:
                                case "end":
                                  return A.stop();
                              }
                          },
                          n,
                          this,
                          [[3, 10]]
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "deleteAllDocuments",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/documents"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateDocumentsByFunction",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/documents/edit"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.post(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getSettings",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateSettings",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.patch(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent),
                                    (t.enqueued = new Date(t.enqueuedAt)),
                                    f.abrupt("return", t)
                                  );
                                case 6:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetSettings",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getPagination",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/pagination"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updatePagination",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/pagination"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.patch(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetPagination",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/pagination"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent), a.abrupt("return", new L(r))
                                  );
                                case 5:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getSynonyms",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/synonyms"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateSynonyms",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/synonyms"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetSynonyms",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/synonyms"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getStopWords",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/stop-words"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateStopWords",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/stop-words"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetStopWords",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/stop-words"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getRankingRules",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/ranking-rules"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateRankingRules",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/ranking-rules"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetRankingRules",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/ranking-rules"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getDistinctAttribute",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/distinct-attribute"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateDistinctAttribute",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/distinct-attribute"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetDistinctAttribute",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/distinct-attribute"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getFilterableAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/filterable-attributes"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateFilterableAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/filterable-attributes"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetFilterableAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/filterable-attributes"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getSortableAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/sortable-attributes"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateSortableAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/sortable-attributes"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetSortableAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/sortable-attributes"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getSearchableAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/searchable-attributes"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateSearchableAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/searchable-attributes"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetSearchableAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/searchable-attributes"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getDisplayedAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/displayed-attributes"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateDisplayedAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/displayed-attributes"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetDisplayedAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/displayed-attributes"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getTypoTolerance",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/typo-tolerance"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateTypoTolerance",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/typo-tolerance"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.patch(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent),
                                    (t.enqueuedAt = new Date(t.enqueuedAt)),
                                    f.abrupt("return", t)
                                  );
                                case 6:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetTypoTolerance",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/typo-tolerance"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getFaceting",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/faceting"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateFaceting",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/faceting"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.patch(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetFaceting",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/faceting"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent), a.abrupt("return", new L(r))
                                  );
                                case 5:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getSeparatorTokens",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/separator-tokens"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateSeparatorTokens",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/separator-tokens"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetSeparatorTokens",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/separator-tokens"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getNonSeparatorTokens",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/non-separator-tokens"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateNonSeparatorTokens",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/non-separator-tokens"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetNonSeparatorTokens",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/non-separator-tokens"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getDictionary",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/dictionary"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateDictionary",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/dictionary"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetDictionary",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/dictionary"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getProximityPrecision",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/proximity-precision"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateProximityPrecision",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/proximity-precision"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetProximityPrecision",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/proximity-precision"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getEmbedders",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/embedders"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateEmbedders",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/embedders"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.patch(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetEmbedders",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/embedders"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent),
                                    (r.enqueuedAt = new Date(r.enqueuedAt)),
                                    a.abrupt("return", r)
                                  );
                                case 6:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getSearchCutoffMs",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/search-cutoff-ms"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateSearchCutoffMs",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/search-cutoff-ms"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetSearchCutoffMs",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/search-cutoff-ms"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent), a.abrupt("return", new L(r))
                                  );
                                case 5:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "getLocalizedAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/localized-attributes"
                                    )),
                                    (t.next = 3),
                                    this.httpRequest.get(i)
                                  );
                                case 3:
                                  return t.abrupt("return", t.sent);
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "updateLocalizedAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r, t;
                        return l().wrap(
                          function (f) {
                            for (;;)
                              switch ((f.prev = f.next)) {
                                case 0:
                                  return (
                                    (r = "indexes/".concat(
                                      this.uid,
                                      "/settings/localized-attributes"
                                    )),
                                    (f.next = 3),
                                    this.httpRequest.put(r, i)
                                  );
                                case 3:
                                  return (
                                    (t = f.sent), f.abrupt("return", new L(t))
                                  );
                                case 5:
                                case "end":
                                  return f.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
                {
                  key: "resetLocalizedAttributes",
                  value: (function () {
                    var s = v(
                      l().mark(function n() {
                        var i, r;
                        return l().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (i = "indexes/".concat(
                                      this.uid,
                                      "/settings/localized-attributes"
                                    )),
                                    (a.next = 3),
                                    this.httpRequest.delete(i)
                                  );
                                case 3:
                                  return (
                                    (r = a.sent), a.abrupt("return", new L(r))
                                  );
                                case 5:
                                case "end":
                                  return a.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    function u() {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
              ],
              [
                {
                  key: "create",
                  value: (function () {
                    var s = v(
                      l().mark(function n(i) {
                        var r,
                          t,
                          a,
                          f,
                          g,
                          A = arguments;
                        return l().wrap(function (N) {
                          for (;;)
                            switch ((N.prev = N.next)) {
                              case 0:
                                return (
                                  (r =
                                    A.length > 1 && A[1] !== void 0
                                      ? A[1]
                                      : {}),
                                  (t = A.length > 2 ? A[2] : void 0),
                                  (a = "indexes"),
                                  (f = new qe(t)),
                                  (N.next = 6),
                                  f.post(a, y(y({}, r), {}, { uid: i }))
                                );
                              case 6:
                                return (
                                  (g = N.sent), N.abrupt("return", new L(g))
                                );
                              case 8:
                              case "end":
                                return N.stop();
                            }
                        }, n);
                      })
                    );
                    function u(n) {
                      return s.apply(this, arguments);
                    }
                    return u;
                  })(),
                },
              ]
            ),
            h
          );
        })(),
        vt = (function () {
          function h(s) {
            U(this, h),
              $(this, "config", void 0),
              $(this, "httpRequest", void 0),
              $(this, "tasks", void 0),
              (this.config = s),
              (this.httpRequest = new qe(s)),
              (this.tasks = new ft(s));
          }
          return (
            Z(h, [
              {
                key: "index",
                value: function (u) {
                  return new Re(this.config, u);
                },
              },
              {
                key: "getIndex",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      return l().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  new Re(this.config, i).fetchInfo()
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "getRawIndex",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      return l().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  new Re(this.config, i).getRawInfo()
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "getIndexes",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i = this,
                        r,
                        t,
                        a,
                        f = arguments;
                      return l().wrap(
                        function (A) {
                          for (;;)
                            switch ((A.prev = A.next)) {
                              case 0:
                                return (
                                  (r =
                                    f.length > 0 && f[0] !== void 0
                                      ? f[0]
                                      : {}),
                                  (A.next = 3),
                                  this.getRawIndexes(r)
                                );
                              case 3:
                                return (
                                  (t = A.sent),
                                  (a = t.results.map(function (R) {
                                    return new Re(
                                      i.config,
                                      R.uid,
                                      R.primaryKey
                                    );
                                  })),
                                  A.abrupt(
                                    "return",
                                    y(y({}, t), {}, { results: a })
                                  )
                                );
                              case 6:
                              case "end":
                                return A.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "getRawIndexes",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i,
                        r,
                        t = arguments;
                      return l().wrap(
                        function (f) {
                          for (;;)
                            switch ((f.prev = f.next)) {
                              case 0:
                                return (
                                  (i =
                                    t.length > 0 && t[0] !== void 0
                                      ? t[0]
                                      : {}),
                                  (r = "indexes"),
                                  (f.next = 4),
                                  this.httpRequest.get(r, i)
                                );
                              case 4:
                                return f.abrupt("return", f.sent);
                              case 5:
                              case "end":
                                return f.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "createIndex",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r,
                        t = arguments;
                      return l().wrap(
                        function (f) {
                          for (;;)
                            switch ((f.prev = f.next)) {
                              case 0:
                                return (
                                  (r =
                                    t.length > 1 && t[1] !== void 0
                                      ? t[1]
                                      : {}),
                                  (f.next = 3),
                                  Re.create(i, r, this.config)
                                );
                              case 3:
                                return f.abrupt("return", f.sent);
                              case 4:
                              case "end":
                                return f.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "updateIndex",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r,
                        t = arguments;
                      return l().wrap(
                        function (f) {
                          for (;;)
                            switch ((f.prev = f.next)) {
                              case 0:
                                return (
                                  (r =
                                    t.length > 1 && t[1] !== void 0
                                      ? t[1]
                                      : {}),
                                  (f.next = 3),
                                  new Re(this.config, i).update(r)
                                );
                              case 3:
                                return f.abrupt("return", f.sent);
                              case 4:
                              case "end":
                                return f.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "deleteIndex",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      return l().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2), new Re(this.config, i).delete()
                                );
                              case 2:
                                return t.abrupt("return", t.sent);
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "deleteIndexIfExists",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      return l().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (t.next = 3),
                                  this.deleteIndex(i)
                                );
                              case 3:
                                return t.abrupt("return", !0);
                              case 6:
                                if (
                                  ((t.prev = 6),
                                  (t.t0 = t.catch(0)),
                                  t.t0.code !== m.INDEX_NOT_FOUND)
                                ) {
                                  t.next = 10;
                                  break;
                                }
                                return t.abrupt("return", !1);
                              case 10:
                                throw t.t0;
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        },
                        n,
                        this,
                        [[0, 6]]
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "swapIndexes",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r;
                      return l().wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (r = "/swap-indexes"),
                                  (a.next = 3),
                                  this.httpRequest.post(r, i)
                                );
                              case 3:
                                return a.abrupt("return", a.sent);
                              case 4:
                              case "end":
                                return a.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "multiSearch",
                value: (function () {
                  var s = v(
                    l().mark(function n(i, r) {
                      var t;
                      return l().wrap(
                        function (f) {
                          for (;;)
                            switch ((f.prev = f.next)) {
                              case 0:
                                return (
                                  (t = "multi-search"),
                                  (f.next = 3),
                                  this.httpRequest.post(t, i, void 0, r)
                                );
                              case 3:
                                return f.abrupt("return", f.sent);
                              case 4:
                              case "end":
                                return f.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n, i) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "getTasks",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i,
                        r = arguments;
                      return l().wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (i =
                                    r.length > 0 && r[0] !== void 0
                                      ? r[0]
                                      : {}),
                                  (a.next = 3),
                                  this.tasks.getTasks(i)
                                );
                              case 3:
                                return a.abrupt("return", a.sent);
                              case 4:
                              case "end":
                                return a.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "getTask",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      return l().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.tasks.getTask(i);
                              case 2:
                                return t.abrupt("return", t.sent);
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "waitForTasks",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r,
                        t,
                        a,
                        f,
                        g,
                        A = arguments;
                      return l().wrap(
                        function (N) {
                          for (;;)
                            switch ((N.prev = N.next)) {
                              case 0:
                                return (
                                  (r =
                                    A.length > 1 && A[1] !== void 0
                                      ? A[1]
                                      : {}),
                                  (t = r.timeOutMs),
                                  (a = t === void 0 ? 5e3 : t),
                                  (f = r.intervalMs),
                                  (g = f === void 0 ? 50 : f),
                                  (N.next = 3),
                                  this.tasks.waitForTasks(i, {
                                    timeOutMs: a,
                                    intervalMs: g,
                                  })
                                );
                              case 3:
                                return N.abrupt("return", N.sent);
                              case 4:
                              case "end":
                                return N.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "waitForTask",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r,
                        t,
                        a,
                        f,
                        g,
                        A = arguments;
                      return l().wrap(
                        function (N) {
                          for (;;)
                            switch ((N.prev = N.next)) {
                              case 0:
                                return (
                                  (r =
                                    A.length > 1 && A[1] !== void 0
                                      ? A[1]
                                      : {}),
                                  (t = r.timeOutMs),
                                  (a = t === void 0 ? 5e3 : t),
                                  (f = r.intervalMs),
                                  (g = f === void 0 ? 50 : f),
                                  (N.next = 3),
                                  this.tasks.waitForTask(i, {
                                    timeOutMs: a,
                                    intervalMs: g,
                                  })
                                );
                              case 3:
                                return N.abrupt("return", N.sent);
                              case 4:
                              case "end":
                                return N.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "cancelTasks",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      return l().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.tasks.cancelTasks(i);
                              case 2:
                                return t.abrupt("return", t.sent);
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "deleteTasks",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i,
                        r = arguments;
                      return l().wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (i =
                                    r.length > 0 && r[0] !== void 0
                                      ? r[0]
                                      : {}),
                                  (a.next = 3),
                                  this.tasks.deleteTasks(i)
                                );
                              case 3:
                                return a.abrupt("return", a.sent);
                              case 4:
                              case "end":
                                return a.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "getKeys",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i,
                        r,
                        t,
                        a = arguments;
                      return l().wrap(
                        function (g) {
                          for (;;)
                            switch ((g.prev = g.next)) {
                              case 0:
                                return (
                                  (i =
                                    a.length > 0 && a[0] !== void 0
                                      ? a[0]
                                      : {}),
                                  (r = "keys"),
                                  (g.next = 4),
                                  this.httpRequest.get(r, i)
                                );
                              case 4:
                                return (
                                  (t = g.sent),
                                  (t.results = t.results.map(function (A) {
                                    return y(
                                      y({}, A),
                                      {},
                                      {
                                        createdAt: new Date(A.createdAt),
                                        updatedAt: new Date(A.updatedAt),
                                      }
                                    );
                                  })),
                                  g.abrupt("return", t)
                                );
                              case 7:
                              case "end":
                                return g.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "getKey",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r;
                      return l().wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (r = "keys/".concat(i)),
                                  (a.next = 3),
                                  this.httpRequest.get(r)
                                );
                              case 3:
                                return a.abrupt("return", a.sent);
                              case 4:
                              case "end":
                                return a.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "createKey",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r;
                      return l().wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (r = "keys"),
                                  (a.next = 3),
                                  this.httpRequest.post(r, i)
                                );
                              case 3:
                                return a.abrupt("return", a.sent);
                              case 4:
                              case "end":
                                return a.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "updateKey",
                value: (function () {
                  var s = v(
                    l().mark(function n(i, r) {
                      var t;
                      return l().wrap(
                        function (f) {
                          for (;;)
                            switch ((f.prev = f.next)) {
                              case 0:
                                return (
                                  (t = "keys/".concat(i)),
                                  (f.next = 3),
                                  this.httpRequest.patch(t, r)
                                );
                              case 3:
                                return f.abrupt("return", f.sent);
                              case 4:
                              case "end":
                                return f.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n, i) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "deleteKey",
                value: (function () {
                  var s = v(
                    l().mark(function n(i) {
                      var r;
                      return l().wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (r = "keys/".concat(i)),
                                  (a.next = 3),
                                  this.httpRequest.delete(r)
                                );
                              case 3:
                                return a.abrupt("return", a.sent);
                              case 4:
                              case "end":
                                return a.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u(n) {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "health",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i;
                      return l().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (i = "health"),
                                  (t.next = 3),
                                  this.httpRequest.get(i)
                                );
                              case 3:
                                return t.abrupt("return", t.sent);
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "isHealthy",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i;
                      return l().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (i = "health"),
                                  (t.next = 4),
                                  this.httpRequest.get(i)
                                );
                              case 4:
                                return t.abrupt("return", !0);
                              case 7:
                                return (
                                  (t.prev = 7),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt("return", !1)
                                );
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        },
                        n,
                        this,
                        [[0, 7]]
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "getStats",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i;
                      return l().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (i = "stats"),
                                  (t.next = 3),
                                  this.httpRequest.get(i)
                                );
                              case 3:
                                return t.abrupt("return", t.sent);
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "getVersion",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i;
                      return l().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (i = "version"),
                                  (t.next = 3),
                                  this.httpRequest.get(i)
                                );
                              case 3:
                                return t.abrupt("return", t.sent);
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "createDump",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i, r;
                      return l().wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (i = "dumps"),
                                  (a.next = 3),
                                  this.httpRequest.post(i)
                                );
                              case 3:
                                return (
                                  (r = a.sent), a.abrupt("return", new L(r))
                                );
                              case 5:
                              case "end":
                                return a.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "createSnapshot",
                value: (function () {
                  var s = v(
                    l().mark(function n() {
                      var i, r;
                      return l().wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (i = "snapshots"),
                                  (a.next = 3),
                                  this.httpRequest.post(i)
                                );
                              case 3:
                                return (
                                  (r = a.sent), a.abrupt("return", new L(r))
                                );
                              case 5:
                              case "end":
                                return a.stop();
                            }
                        },
                        n,
                        this
                      );
                    })
                  );
                  function u() {
                    return s.apply(this, arguments);
                  }
                  return u;
                })(),
              },
              {
                key: "generateTenantToken",
                value: function (u, n, i) {
                  var r = new Error();
                  return (
                    (r.message =
                      `Meilisearch: failed to generate a tenant token. Generation of a token only works in a node environment 
 `.concat(r.stack, ".")),
                    Promise.reject(r)
                  );
                },
              },
            ]),
            h
          );
        })(),
        et = (function (h) {
          X(u, h);
          var s = M(u);
          function u(n) {
            return U(this, u), s.call(this, n);
          }
          return Z(u);
        })(vt);
      (e.ContentTypeEnum = c),
        (e.ErrorStatusCode = m),
        (e.Index = Re),
        (e.MatchingStrategies = o),
        (e.MeiliSearch = et),
        (e.MeiliSearchApiError = De),
        (e.MeiliSearchError = me),
        (e.MeiliSearchRequestError = We),
        (e.MeiliSearchTimeOutError = lt),
        (e.Meilisearch = et),
        (e.TaskStatus = d),
        (e.TaskTypes = p),
        (e.default = et),
        (e.versionErrorHintMessage = Fe),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  });
  var is = {};
  tn(is, { default: () => ss, docsearch: () => Yr });
  var ee = {
    context: void 0,
    registry: void 0,
    effects: void 0,
    done: !1,
    getContextId() {
      return er(this.context.count);
    },
    getNextContextId() {
      return er(this.context.count++);
    },
  };
  function er(e) {
    let o = String(e),
      c = o.length - 1;
    return ee.context.id + (c ? String.fromCharCode(96 + c) : "") + o;
  }
  function Ht(e) {
    ee.context = e;
  }
  function sn() {
    return { ...ee.context, id: ee.getNextContextId(), count: 0 };
  }
  var an = (e, o) => e === o,
    Ft = Symbol("solid-proxy"),
    un = typeof Proxy == "function",
    on = Symbol("solid-track"),
    us = Symbol("solid-dev-component"),
    At = { equals: an },
    tr = null,
    ar = fr,
    Se = 1,
    ht = 2,
    ur = { owned: null, cleanups: null, context: null, owner: null };
  var x = null,
    C = null,
    mt = null,
    nt = null,
    Q = null,
    he = null,
    we = null,
    St = 0;
  function st(e, o) {
    let c = Q,
      d = x,
      p = e.length === 0,
      m = o === void 0 ? d : o,
      _ = p
        ? ur
        : {
            owned: null,
            cleanups: null,
            context: m ? m.context : null,
            owner: m,
          },
      w = p ? e : () => e(() => _e(() => Ue(_)));
    (x = _), (Q = null);
    try {
      return Oe(w, !0);
    } finally {
      (Q = c), (x = d);
    }
  }
  function ce(e, o) {
    o = o ? Object.assign({}, At, o) : At;
    let c = {
        value: e,
        observers: null,
        observerSlots: null,
        comparator: o.equals || void 0,
      },
      d = (p) => (
        typeof p == "function" &&
          (C && C.running && C.sources.has(c)
            ? (p = p(c.tValue))
            : (p = p(c.value))),
        cr(c, p)
      );
    return [lr.bind(c), d];
  }
  function J(e, o, c) {
    let d = Kt(e, o, !1, Se);
    mt && C && C.running ? he.push(d) : gt(d);
  }
  function xt(e, o, c) {
    ar = pn;
    let d = Kt(e, o, !1, Se),
      p = Vt && cn(Vt);
    p && (d.suspense = p),
      (!c || !c.render) && (d.user = !0),
      we ? we.push(d) : gt(d);
  }
  function le(e, o, c) {
    c = c ? Object.assign({}, At, c) : At;
    let d = Kt(e, o, !0, 0);
    return (
      (d.observers = null),
      (d.observerSlots = null),
      (d.comparator = c.equals || void 0),
      mt && C && C.running ? ((d.tState = Se), he.push(d)) : gt(d),
      lr.bind(d)
    );
  }
  function _e(e) {
    if (!nt && Q === null) return e();
    let o = Q;
    Q = null;
    try {
      return nt ? nt.untrack(e) : e();
    } finally {
      Q = o;
    }
  }
  function Ee(e) {
    xt(() => _e(e));
  }
  function Ie(e) {
    return (
      x === null ||
        (x.cleanups === null ? (x.cleanups = [e]) : x.cleanups.push(e)),
      e
    );
  }
  function Et() {
    return x;
  }
  function or(e, o) {
    let c = x,
      d = Q;
    (x = e), (Q = null);
    try {
      return Oe(o, !0);
    } catch (p) {
      It(p);
    } finally {
      (x = c), (Q = d);
    }
  }
  function ln(e) {
    if (C && C.running) return e(), C.done;
    let o = Q,
      c = x;
    return Promise.resolve().then(() => {
      (Q = o), (x = c);
      let d;
      return (
        (mt || Vt) &&
          ((d =
            C ||
            (C = {
              sources: new Set(),
              effects: [],
              promises: new Set(),
              disposed: new Set(),
              queue: new Set(),
              running: !0,
            })),
          d.done || (d.done = new Promise((p) => (d.resolve = p))),
          (d.running = !0)),
        Oe(e, !1),
        (Q = x = null),
        d ? d.done : void 0
      );
    });
  }
  var [os, rr] = ce(!1);
  function cn(e) {
    let o;
    return x && x.context && (o = x.context[e.id]) !== void 0
      ? o
      : e.defaultValue;
  }
  function fn(e) {
    let o = le(e),
      c = le(() => Ut(o()));
    return (
      (c.toArray = () => {
        let d = c();
        return Array.isArray(d) ? d : d != null ? [d] : [];
      }),
      c
    );
  }
  var Vt;
  function lr() {
    let e = C && C.running;
    if (this.sources && (e ? this.tState : this.state))
      if ((e ? this.tState : this.state) === Se) gt(this);
      else {
        let o = he;
        (he = null), Oe(() => Tt(this), !1), (he = o);
      }
    if (Q) {
      let o = this.observers ? this.observers.length : 0;
      Q.sources
        ? (Q.sources.push(this), Q.sourceSlots.push(o))
        : ((Q.sources = [this]), (Q.sourceSlots = [o])),
        this.observers
          ? (this.observers.push(Q),
            this.observerSlots.push(Q.sources.length - 1))
          : ((this.observers = [Q]),
            (this.observerSlots = [Q.sources.length - 1]));
    }
    return e && C.sources.has(this) ? this.tValue : this.value;
  }
  function cr(e, o, c) {
    let d = C && C.running && C.sources.has(e) ? e.tValue : e.value;
    if (!e.comparator || !e.comparator(d, o)) {
      if (C) {
        let p = C.running;
        (p || (!c && C.sources.has(e))) && (C.sources.add(e), (e.tValue = o)),
          p || (e.value = o);
      } else e.value = o;
      e.observers &&
        e.observers.length &&
        Oe(() => {
          for (let p = 0; p < e.observers.length; p += 1) {
            let m = e.observers[p],
              _ = C && C.running;
            (_ && C.disposed.has(m)) ||
              ((_ ? !m.tState : !m.state) &&
                (m.pure ? he.push(m) : we.push(m), m.observers && dr(m)),
              _ ? (m.tState = Se) : (m.state = Se));
          }
          if (he.length > 1e6) throw ((he = []), new Error());
        }, !1);
    }
    return o;
  }
  function gt(e) {
    if (!e.fn) return;
    Ue(e);
    let o = St;
    nr(e, C && C.running && C.sources.has(e) ? e.tValue : e.value, o),
      C &&
        !C.running &&
        C.sources.has(e) &&
        queueMicrotask(() => {
          Oe(() => {
            C && (C.running = !0),
              (Q = x = e),
              nr(e, e.tValue, o),
              (Q = x = null);
          }, !1);
        });
  }
  function nr(e, o, c) {
    let d,
      p = x,
      m = Q;
    Q = x = e;
    try {
      d = e.fn(o);
    } catch (_) {
      return (
        e.pure &&
          (C && C.running
            ? ((e.tState = Se),
              e.tOwned && e.tOwned.forEach(Ue),
              (e.tOwned = void 0))
            : ((e.state = Se),
              e.owned && e.owned.forEach(Ue),
              (e.owned = null))),
        (e.updatedAt = c + 1),
        It(_)
      );
    } finally {
      (Q = m), (x = p);
    }
    (!e.updatedAt || e.updatedAt <= c) &&
      (e.updatedAt != null && "observers" in e
        ? cr(e, d, !0)
        : C && C.running && e.pure
        ? (C.sources.add(e), (e.tValue = d))
        : (e.value = d),
      (e.updatedAt = c));
  }
  function Kt(e, o, c, d = Se, p) {
    let m = {
      fn: e,
      state: d,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: o,
      owner: x,
      context: x ? x.context : null,
      pure: c,
    };
    if (
      (C && C.running && ((m.state = 0), (m.tState = d)),
      x === null ||
        (x !== ur &&
          (C && C.running && x.pure
            ? x.tOwned
              ? x.tOwned.push(m)
              : (x.tOwned = [m])
            : x.owned
            ? x.owned.push(m)
            : (x.owned = [m]))),
      nt && m.fn)
    ) {
      let [_, w] = ce(void 0, { equals: !1 }),
        y = nt.factory(m.fn, w);
      Ie(() => y.dispose());
      let l = () => ln(w).then(() => k.dispose()),
        k = nt.factory(m.fn, l);
      m.fn = (T) => (_(), C && C.running ? k.track(T) : y.track(T));
    }
    return m;
  }
  function pt(e) {
    let o = C && C.running;
    if ((o ? e.tState : e.state) === 0) return;
    if ((o ? e.tState : e.state) === ht) return Tt(e);
    if (e.suspense && _e(e.suspense.inFallback))
      return e.suspense.effects.push(e);
    let c = [e];
    for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < St); ) {
      if (o && C.disposed.has(e)) return;
      (o ? e.tState : e.state) && c.push(e);
    }
    for (let d = c.length - 1; d >= 0; d--) {
      if (((e = c[d]), o)) {
        let p = e,
          m = c[d + 1];
        for (; (p = p.owner) && p !== m; ) if (C.disposed.has(p)) return;
      }
      if ((o ? e.tState : e.state) === Se) gt(e);
      else if ((o ? e.tState : e.state) === ht) {
        let p = he;
        (he = null), Oe(() => Tt(e, c[0]), !1), (he = p);
      }
    }
  }
  function Oe(e, o) {
    if (he) return e();
    let c = !1;
    o || (he = []), we ? (c = !0) : (we = []), St++;
    try {
      let d = e();
      return dn(c), d;
    } catch (d) {
      c || (we = null), (he = null), It(d);
    }
  }
  function dn(e) {
    if ((he && (mt && C && C.running ? hn(he) : fr(he), (he = null)), e))
      return;
    let o;
    if (C) {
      if (!C.promises.size && !C.queue.size) {
        let d = C.sources,
          p = C.disposed;
        we.push.apply(we, C.effects), (o = C.resolve);
        for (let m of we)
          "tState" in m && (m.state = m.tState), delete m.tState;
        (C = null),
          Oe(() => {
            for (let m of p) Ue(m);
            for (let m of d) {
              if (((m.value = m.tValue), m.owned))
                for (let _ = 0, w = m.owned.length; _ < w; _++) Ue(m.owned[_]);
              m.tOwned && (m.owned = m.tOwned),
                delete m.tValue,
                delete m.tOwned,
                (m.tState = 0);
            }
            rr(!1);
          }, !1);
      } else if (C.running) {
        (C.running = !1),
          C.effects.push.apply(C.effects, we),
          (we = null),
          rr(!0);
        return;
      }
    }
    let c = we;
    (we = null), c.length && Oe(() => ar(c), !1), o && o();
  }
  function fr(e) {
    for (let o = 0; o < e.length; o++) pt(e[o]);
  }
  function hn(e) {
    for (let o = 0; o < e.length; o++) {
      let c = e[o],
        d = C.queue;
      d.has(c) ||
        (d.add(c),
        mt(() => {
          d.delete(c),
            Oe(() => {
              (C.running = !0), pt(c);
            }, !1),
            C && (C.running = !1);
        }));
    }
  }
  function pn(e) {
    let o,
      c = 0;
    for (o = 0; o < e.length; o++) {
      let d = e[o];
      d.user ? (e[c++] = d) : pt(d);
    }
    if (ee.context) {
      if (ee.count) {
        ee.effects || (ee.effects = []), ee.effects.push(...e.slice(0, c));
        return;
      }
      Ht();
    }
    for (
      ee.effects &&
        (ee.done || !ee.count) &&
        ((e = [...ee.effects, ...e]),
        (c += ee.effects.length),
        delete ee.effects),
        o = 0;
      o < c;
      o++
    )
      pt(e[o]);
  }
  function Tt(e, o) {
    let c = C && C.running;
    c ? (e.tState = 0) : (e.state = 0);
    for (let d = 0; d < e.sources.length; d += 1) {
      let p = e.sources[d];
      if (p.sources) {
        let m = c ? p.tState : p.state;
        m === Se
          ? p !== o && (!p.updatedAt || p.updatedAt < St) && pt(p)
          : m === ht && Tt(p, o);
      }
    }
  }
  function dr(e) {
    let o = C && C.running;
    for (let c = 0; c < e.observers.length; c += 1) {
      let d = e.observers[c];
      (o ? !d.tState : !d.state) &&
        (o ? (d.tState = ht) : (d.state = ht),
        d.pure ? he.push(d) : we.push(d),
        d.observers && dr(d));
    }
  }
  function Ue(e) {
    let o;
    if (e.sources)
      for (; e.sources.length; ) {
        let c = e.sources.pop(),
          d = e.sourceSlots.pop(),
          p = c.observers;
        if (p && p.length) {
          let m = p.pop(),
            _ = c.observerSlots.pop();
          d < p.length &&
            ((m.sourceSlots[_] = d), (p[d] = m), (c.observerSlots[d] = _));
        }
      }
    if (e.tOwned) {
      for (o = e.tOwned.length - 1; o >= 0; o--) Ue(e.tOwned[o]);
      delete e.tOwned;
    }
    if (C && C.running && e.pure) hr(e, !0);
    else if (e.owned) {
      for (o = e.owned.length - 1; o >= 0; o--) Ue(e.owned[o]);
      e.owned = null;
    }
    if (e.cleanups) {
      for (o = e.cleanups.length - 1; o >= 0; o--) e.cleanups[o]();
      e.cleanups = null;
    }
    C && C.running ? (e.tState = 0) : (e.state = 0);
  }
  function hr(e, o) {
    if ((o || ((e.tState = 0), C.disposed.add(e)), e.owned))
      for (let c = 0; c < e.owned.length; c++) hr(e.owned[c]);
  }
  function mn(e) {
    return e instanceof Error
      ? e
      : new Error(typeof e == "string" ? e : "Unknown error", { cause: e });
  }
  function sr(e, o, c) {
    try {
      for (let d of o) d(e);
    } catch (d) {
      It(d, (c && c.owner) || null);
    }
  }
  function It(e, o = x) {
    let c = tr && o && o.context && o.context[tr],
      d = mn(e);
    if (!c) throw d;
    we
      ? we.push({
          fn() {
            sr(d, c, o);
          },
          state: Se,
        })
      : sr(d, c, o);
  }
  function Ut(e) {
    if (typeof e == "function" && !e.length) return Ut(e());
    if (Array.isArray(e)) {
      let o = [];
      for (let c = 0; c < e.length; c++) {
        let d = Ut(e[c]);
        Array.isArray(d) ? o.push.apply(o, d) : o.push(d);
      }
      return o;
    }
    return e;
  }
  var gn = Symbol("fallback");
  function ir(e) {
    for (let o = 0; o < e.length; o++) e[o]();
  }
  function yn(e, o, c = {}) {
    let d = [],
      p = [],
      m = [],
      _ = 0,
      w = o.length > 1 ? [] : null;
    return (
      Ie(() => ir(m)),
      () => {
        let y = e() || [],
          l = y.length,
          k,
          T;
        return (
          y[on],
          _e(() => {
            let q, v, U, ae, Z, $, X, W, pe;
            if (l === 0)
              _ !== 0 &&
                (ir(m), (m = []), (d = []), (p = []), (_ = 0), w && (w = [])),
                c.fallback &&
                  ((d = [gn]),
                  (p[0] = st((Le) => ((m[0] = Le), c.fallback()))),
                  (_ = 1));
            else if (_ === 0) {
              for (p = new Array(l), T = 0; T < l; T++)
                (d[T] = y[T]), (p[T] = st(j));
              _ = l;
            } else {
              for (
                U = new Array(l),
                  ae = new Array(l),
                  w && (Z = new Array(l)),
                  $ = 0,
                  X = Math.min(_, l);
                $ < X && d[$] === y[$];
                $++
              );
              for (
                X = _ - 1, W = l - 1;
                X >= $ && W >= $ && d[X] === y[W];
                X--, W--
              )
                (U[W] = p[X]), (ae[W] = m[X]), w && (Z[W] = w[X]);
              for (q = new Map(), v = new Array(W + 1), T = W; T >= $; T--)
                (pe = y[T]),
                  (k = q.get(pe)),
                  (v[T] = k === void 0 ? -1 : k),
                  q.set(pe, T);
              for (k = $; k <= X; k++)
                (pe = d[k]),
                  (T = q.get(pe)),
                  T !== void 0 && T !== -1
                    ? ((U[T] = p[k]),
                      (ae[T] = m[k]),
                      w && (Z[T] = w[k]),
                      (T = v[T]),
                      q.set(pe, T))
                    : m[k]();
              for (T = $; T < l; T++)
                T in U
                  ? ((p[T] = U[T]),
                    (m[T] = ae[T]),
                    w && ((w[T] = Z[T]), w[T](T)))
                  : (p[T] = st(j));
              (p = p.slice(0, (_ = l))), (d = y.slice(0));
            }
            return p;
          })
        );
        function j(q) {
          if (((m[T] = q), w)) {
            let [v, U] = ce(T);
            return (w[T] = U), o(y[T], v);
          }
          return o(y[T]);
        }
      }
    );
  }
  var vn = !1;
  function V(e, o) {
    if (vn && ee.context) {
      let c = ee.context;
      Ht(sn());
      let d = _e(() => e(o || {}));
      return Ht(c), d;
    }
    return _e(() => e(o || {}));
  }
  function kt() {
    return !0;
  }
  var wn = {
    get(e, o, c) {
      return o === Ft ? c : e.get(o);
    },
    has(e, o) {
      return o === Ft ? !0 : e.has(o);
    },
    set: kt,
    deleteProperty: kt,
    getOwnPropertyDescriptor(e, o) {
      return {
        configurable: !0,
        enumerable: !0,
        get() {
          return e.get(o);
        },
        set: kt,
        deleteProperty: kt,
      };
    },
    ownKeys(e) {
      return e.keys();
    },
  };
  function qt(e) {
    return (e = typeof e == "function" ? e() : e) ? e : {};
  }
  function bn() {
    for (let e = 0, o = this.length; e < o; ++e) {
      let c = this[e]();
      if (c !== void 0) return c;
    }
  }
  function Bt(...e) {
    let o = !1;
    for (let _ = 0; _ < e.length; _++) {
      let w = e[_];
      (o = o || (!!w && Ft in w)),
        (e[_] = typeof w == "function" ? ((o = !0), le(w)) : w);
    }
    if (un && o)
      return new Proxy(
        {
          get(_) {
            for (let w = e.length - 1; w >= 0; w--) {
              let y = qt(e[w])[_];
              if (y !== void 0) return y;
            }
          },
          has(_) {
            for (let w = e.length - 1; w >= 0; w--)
              if (_ in qt(e[w])) return !0;
            return !1;
          },
          keys() {
            let _ = [];
            for (let w = 0; w < e.length; w++) _.push(...Object.keys(qt(e[w])));
            return [...new Set(_)];
          },
        },
        wn
      );
    let c = {},
      d = Object.create(null);
    for (let _ = e.length - 1; _ >= 0; _--) {
      let w = e[_];
      if (!w) continue;
      let y = Object.getOwnPropertyNames(w);
      for (let l = y.length - 1; l >= 0; l--) {
        let k = y[l];
        if (k === "__proto__" || k === "constructor") continue;
        let T = Object.getOwnPropertyDescriptor(w, k);
        if (!d[k])
          d[k] = T.get
            ? {
                enumerable: !0,
                configurable: !0,
                get: bn.bind((c[k] = [T.get.bind(w)])),
              }
            : T.value !== void 0
            ? T
            : void 0;
        else {
          let j = c[k];
          j &&
            (T.get
              ? j.push(T.get.bind(w))
              : T.value !== void 0 && j.push(() => T.value));
        }
      }
    }
    let p = {},
      m = Object.keys(d);
    for (let _ = m.length - 1; _ >= 0; _--) {
      let w = m[_],
        y = d[w];
      y && y.get
        ? Object.defineProperty(p, w, y)
        : (p[w] = y ? y.value : void 0);
    }
    return p;
  }
  var pr = (e) => `Stale read from <${e}>.`;
  function je(e) {
    let o = "fallback" in e && { fallback: () => e.fallback };
    return le(yn(() => e.each, e.children, o || void 0));
  }
  function Ge(e) {
    let o = e.keyed,
      c = le(() => e.when, void 0, {
        equals: (d, p) => (o ? d === p : !d == !p),
      });
    return le(
      () => {
        let d = c();
        if (d) {
          let p = e.children;
          return typeof p == "function" && p.length > 0
            ? _e(() =>
                p(
                  o
                    ? d
                    : () => {
                        if (!_e(c)) throw pr("Show");
                        return e.when;
                      }
                )
              )
            : p;
        }
        return e.fallback;
      },
      void 0,
      void 0
    );
  }
  function jt(e) {
    let o = !1,
      c = (m, _) => (o ? m[1] === _[1] : !m[1] == !_[1]) && m[2] === _[2],
      d = fn(() => e.children),
      p = le(
        () => {
          let m = d();
          Array.isArray(m) || (m = [m]);
          for (let _ = 0; _ < m.length; _++) {
            let w = m[_].when;
            if (w) return (o = !!m[_].keyed), [_, w, m[_]];
          }
          return [-1];
        },
        void 0,
        { equals: c }
      );
    return le(
      () => {
        let [m, _, w] = p();
        if (m < 0) return e.fallback;
        let y = w.children;
        return typeof y == "function" && y.length > 0
          ? _e(() =>
              y(
                o
                  ? _
                  : () => {
                      if (_e(p)[0] !== m) throw pr("Match");
                      return w.when;
                    }
              )
            )
          : y;
      },
      void 0,
      void 0
    );
  }
  function it(e) {
    return e;
  }
  var _n = [
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
      "inert",
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
    ],
    ys = new Set([
      "className",
      "value",
      "readOnly",
      "formNoValidate",
      "isMap",
      "noModule",
      "playsInline",
      ..._n,
    ]);
  function kn(e, o, c) {
    let d = c.length,
      p = o.length,
      m = d,
      _ = 0,
      w = 0,
      y = o[p - 1].nextSibling,
      l = null;
    for (; _ < p || w < m; ) {
      if (o[_] === c[w]) {
        _++, w++;
        continue;
      }
      for (; o[p - 1] === c[m - 1]; ) p--, m--;
      if (p === _) {
        let k = m < d ? (w ? c[w - 1].nextSibling : c[m - w]) : y;
        for (; w < m; ) e.insertBefore(c[w++], k);
      } else if (m === w)
        for (; _ < p; ) (!l || !l.has(o[_])) && o[_].remove(), _++;
      else if (o[_] === c[m - 1] && c[w] === o[p - 1]) {
        let k = o[--p].nextSibling;
        e.insertBefore(c[w++], o[_++].nextSibling),
          e.insertBefore(c[--m], k),
          (o[p] = c[m]);
      } else {
        if (!l) {
          l = new Map();
          let T = w;
          for (; T < m; ) l.set(c[T], T++);
        }
        let k = l.get(o[_]);
        if (k != null)
          if (w < k && k < m) {
            let T = _,
              j = 1,
              q;
            for (
              ;
              ++T < p && T < m && !((q = l.get(o[T])) == null || q !== k + j);

            )
              j++;
            if (j > k - w) {
              let v = o[_];
              for (; w < k; ) e.insertBefore(c[w++], v);
            } else e.replaceChild(c[w++], o[_++]);
          } else _++;
        else o[_++].remove();
      }
    }
  }
  var mr = "_$DX_DELEGATE";
  function yr(e, o, c, d = {}) {
    let p;
    return (
      st((m) => {
        (p = m),
          o === document ? e() : K(o, e(), o.firstChild ? null : void 0, c);
      }, d.owner),
      () => {
        p(), (o.textContent = "");
      }
    );
  }
  function F(e, o, c) {
    let d,
      p = () => {
        let _ = document.createElement("template");
        return (
          (_.innerHTML = e),
          c ? _.content.firstChild.firstChild : _.content.firstChild
        );
      },
      m = o
        ? () => _e(() => document.importNode(d || (d = p()), !0))
        : () => (d || (d = p())).cloneNode(!0);
    return (m.cloneNode = m), m;
  }
  function ut(e, o = window.document) {
    let c = o[mr] || (o[mr] = new Set());
    for (let d = 0, p = e.length; d < p; d++) {
      let m = e[d];
      c.has(m) || (c.add(m), o.addEventListener(m, An));
    }
  }
  function B(e, o, c) {
    vr(e) || (c == null ? e.removeAttribute(o) : e.setAttribute(o, c));
  }
  function Ye(e, o, c, d) {
    if (d)
      Array.isArray(c)
        ? ((e[`$$${o}`] = c[0]), (e[`$$${o}Data`] = c[1]))
        : (e[`$$${o}`] = c);
    else if (Array.isArray(c)) {
      let p = c[0];
      e.addEventListener(o, (c[0] = (m) => p.call(e, c[1], m)));
    } else e.addEventListener(o, c, typeof c != "function" && c);
  }
  function ot(e, o, c) {
    return _e(() => e(o, c));
  }
  function K(e, o, c, d) {
    if ((c !== void 0 && !d && (d = []), typeof o != "function"))
      return Ct(e, o, d, c);
    J((p) => Ct(e, o(), p, c), d);
  }
  function vr(e) {
    return !!ee.context && !ee.done && (!e || e.isConnected);
  }
  function An(e) {
    if (ee.registry && ee.events && ee.events.find(([y, l]) => l === e)) return;
    let o = e.target,
      c = `$$${e.type}`,
      d = e.target,
      p = e.currentTarget,
      m = (y) =>
        Object.defineProperty(e, "target", { configurable: !0, value: y }),
      _ = () => {
        let y = o[c];
        if (y && !o.disabled) {
          let l = o[`${c}Data`];
          if ((l !== void 0 ? y.call(o, l, e) : y.call(o, e), e.cancelBubble))
            return;
        }
        return (
          o.host &&
            typeof o.host != "string" &&
            !o.host._$host &&
            o.contains(e.target) &&
            m(o.host),
          !0
        );
      },
      w = () => {
        for (; _() && (o = o._$host || o.parentNode || o.host); );
      };
    if (
      (Object.defineProperty(e, "currentTarget", {
        configurable: !0,
        get() {
          return o || document;
        },
      }),
      ee.registry && !ee.done && (ee.done = _$HY.done = !0),
      e.composedPath)
    ) {
      let y = e.composedPath();
      m(y[0]);
      for (let l = 0; l < y.length - 2 && ((o = y[l]), !!_()); l++) {
        if (o._$host) {
          (o = o._$host), w();
          break;
        }
        if (o.parentNode === p) break;
      }
    } else w();
    m(d);
  }
  function Ct(e, o, c, d, p) {
    let m = vr(e);
    if (m) {
      !c && (c = [...e.childNodes]);
      let y = [];
      for (let l = 0; l < c.length; l++) {
        let k = c[l];
        k.nodeType === 8 && k.data.slice(0, 2) === "!$"
          ? k.remove()
          : y.push(k);
      }
      c = y;
    }
    for (; typeof c == "function"; ) c = c();
    if (o === c) return c;
    let _ = typeof o,
      w = d !== void 0;
    if (
      ((e = (w && c[0] && c[0].parentNode) || e),
      _ === "string" || _ === "number")
    ) {
      if (m || (_ === "number" && ((o = o.toString()), o === c))) return c;
      if (w) {
        let y = c[0];
        y && y.nodeType === 3
          ? y.data !== o && (y.data = o)
          : (y = document.createTextNode(o)),
          (c = at(e, c, d, y));
      } else
        c !== "" && typeof c == "string"
          ? (c = e.firstChild.data = o)
          : (c = e.textContent = o);
    } else if (o == null || _ === "boolean") {
      if (m) return c;
      c = at(e, c, d);
    } else {
      if (_ === "function")
        return (
          J(() => {
            let y = o();
            for (; typeof y == "function"; ) y = y();
            c = Ct(e, y, c, d);
          }),
          () => c
        );
      if (Array.isArray(o)) {
        let y = [],
          l = c && Array.isArray(c);
        if (Gt(y, o, c, p)) return J(() => (c = Ct(e, y, c, d, !0))), () => c;
        if (m) {
          if (!y.length) return c;
          if (d === void 0) return (c = [...e.childNodes]);
          let k = y[0];
          if (k.parentNode !== e) return c;
          let T = [k];
          for (; (k = k.nextSibling) !== d; ) T.push(k);
          return (c = T);
        }
        if (y.length === 0) {
          if (((c = at(e, c, d)), w)) return c;
        } else
          l
            ? c.length === 0
              ? gr(e, y, d)
              : kn(e, c, y)
            : (c && at(e), gr(e, y));
        c = y;
      } else if (o.nodeType) {
        if (m && o.parentNode) return (c = w ? [o] : o);
        if (Array.isArray(c)) {
          if (w) return (c = at(e, c, d, o));
          at(e, c, null, o);
        } else
          c == null || c === "" || !e.firstChild
            ? e.appendChild(o)
            : e.replaceChild(o, e.firstChild);
        c = o;
      }
    }
    return c;
  }
  function Gt(e, o, c, d) {
    let p = !1;
    for (let m = 0, _ = o.length; m < _; m++) {
      let w = o[m],
        y = c && c[e.length],
        l;
      if (!(w == null || w === !0 || w === !1))
        if ((l = typeof w) == "object" && w.nodeType) e.push(w);
        else if (Array.isArray(w)) p = Gt(e, w, y) || p;
        else if (l === "function")
          if (d) {
            for (; typeof w == "function"; ) w = w();
            p =
              Gt(e, Array.isArray(w) ? w : [w], Array.isArray(y) ? y : [y]) ||
              p;
          } else e.push(w), (p = !0);
        else {
          let k = String(w);
          y && y.nodeType === 3 && y.data === k
            ? e.push(y)
            : e.push(document.createTextNode(k));
        }
    }
    return p;
  }
  function gr(e, o, c = null) {
    for (let d = 0, p = o.length; d < p; d++) e.insertBefore(o[d], c);
  }
  function at(e, o, c, d) {
    if (c === void 0) return (e.textContent = "");
    let p = d || document.createTextNode("");
    if (o.length) {
      let m = !1;
      for (let _ = o.length - 1; _ >= 0; _--) {
        let w = o[_];
        if (p !== w) {
          let y = w.parentNode === e;
          !m && !_
            ? y
              ? e.replaceChild(p, w)
              : e.insertBefore(p, c)
            : y && w.remove();
        } else m = !0;
      }
    } else e.insertBefore(p, c);
    return [p];
  }
  var vs = Symbol();
  var Tn = "http://www.w3.org/2000/svg";
  function Sn(e, o = !1) {
    return o ? document.createElementNS(Tn, e) : document.createElement(e);
  }
  function wr(e) {
    let { useShadow: o } = e,
      c = document.createTextNode(""),
      d = () => e.mount || document.body,
      p = Et(),
      m,
      _ = !!ee.context;
    return (
      xt(
        () => {
          _ && (Et().user = _ = !1),
            m || (m = or(p, () => le(() => e.children)));
          let w = d();
          if (w instanceof HTMLHeadElement) {
            let [y, l] = ce(!1),
              k = () => l(!0);
            st((T) => K(w, () => (y() ? T() : m()), null)), Ie(k);
          } else {
            let y = Sn(e.isSVG ? "g" : "div", e.isSVG),
              l = o && y.attachShadow ? y.attachShadow({ mode: "open" }) : y;
            Object.defineProperty(y, "_$host", {
              get() {
                return c.parentNode;
              },
              configurable: !0,
            }),
              K(l, m),
              w.appendChild(y),
              e.ref && e.ref(y),
              Ie(() => w.removeChild(y));
          }
        },
        void 0,
        { render: !_ }
      ),
      c
    );
  }
  var En = F(
      '<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"><path fill=currentColor d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z">'
    ),
    Dt = (e) =>
      (() => {
        let o = En();
        return J(() => B(o, "class", e.class)), o;
      })();
  function Yt(e, o) {
    return Object.keys(e).reduce((c, d) => {
      let p = c;
      if (d.startsWith(o)) {
        let m = d.replace(o, "");
        p[m] = e[d];
      } else p[d] = e[d];
      return p;
    }, {});
  }
  function Zt(e) {
    return Object.keys(e).reduce((o, c) => {
      let d = o;
      return (
        typeof e[c] == "string" && e[c] === "null"
          ? (d[c] = null)
          : (d[c] = e[c]),
        d
      );
    }, {});
  }
  function br(e, o) {
    let c = {};
    return (
      e.forEach((d) => {
        if (d[o] === void 0)
          throw new Error(`[groupBy]: Object has no key ${new String(o)}`);
        let p = d[o];
        Object.prototype.hasOwnProperty.call(c, p) || (c[p] = []), c[p].push(d);
      }),
      c
    );
  }
  function _r(e) {
    let o = [];
    return (
      e.forEach((c) => {
        c && o.push(c);
      }),
      o
    );
  }
  function Ze(e, o) {
    return e._formatted && e._formatted[o] && typeof e._formatted[o] == "string"
      ? kr(e._formatted[o])
      : e[o];
  }
  function kr(e) {
    return e
      .replace(
        /<em>/g,
        '<span class="docsearch-modal-search-hits-item--highlight">'
      )
      .replace(/<\/em>/g, "</span>");
  }
  function Ar(e, o) {
    if (!e._formatted || !e._formatted[o] || typeof e._formatted[o] != "string")
      return e[o];
    let c = kr(e._formatted[o]);
    return (
      c[0] !== c[0].toUpperCase() && (c = `\u2026${c}`),
      [".", "!", "?"].indexOf(c[c.length - 1]) === -1 && (c = `${c}\u2026`),
      c
    );
  }
  function Tr(e) {
    return JSON.parse(JSON.stringify(e));
  }
  function Sr(e, o = 300) {
    let c;
    return (...d) => {
      clearTimeout(c), (c = setTimeout(() => e(...d), o));
    };
  }
  function $t(e) {
    return /(ctrl|control|command|cmd|commandorcontrl|cmdorctrl)/i.test(e);
  }
  function Rt(e) {
    return /(alt|option)/i.test(e);
  }
  function Er(e) {
    return /(meta|super)/i.test(e);
  }
  function yt() {
    return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
  }
  var Cn = F(
      "<button type=button class=docsearch-btn><span class=docsearch-btn-icon-container></span><span class=docsearch-btn-placeholder> <!> "
    ),
    Dn = F("<span class=docsearch-btn-keys>"),
    $n = F("<kbd class=docsearch-btn-key>"),
    Rn = "Ctrl",
    Nn = "\u2318",
    On = "Alt",
    Ln = "Option",
    Ir = ({ onClick: e, hotKeys: o, translations: c = {} }) => {
      let { buttonText: d = "Search", buttonAriaLabel: p = "Search" } = c,
        [m, _] = ce(null),
        [w, y] = ce(null);
      return (
        Ee(() => {
          typeof navigator < "u" && (yt() ? (_(Nn), y(Ln)) : (_(Rn), y(On)));
        }),
        (() => {
          let l = Cn(),
            k = l.firstChild,
            T = k.nextSibling,
            j = T.firstChild,
            q = j.nextSibling,
            v = q.nextSibling;
          return (
            Ye(l, "click", e, !0),
            B(l, "aria-label", p),
            K(k, V(Dt, { class: "docsearch-modal-btn-icon" })),
            K(T, d, q),
            K(
              l,
              (() => {
                let U = le(() => !!(o && o.length > 0));
                return () =>
                  U() &&
                  (() => {
                    let ae = Dn();
                    return (
                      K(
                        ae,
                        V(je, {
                          get each() {
                            return o[0].split("+");
                          },
                          children: (Z) =>
                            (() => {
                              let $ = $n();
                              return (
                                K(
                                  $,
                                  (() => {
                                    let X = le(() => !!$t(Z));
                                    return () =>
                                      X()
                                        ? m()
                                        : (() => {
                                            let W = le(() => !!Rt(Z));
                                            return () =>
                                              W()
                                                ? w()
                                                : Z[0].toUpperCase() +
                                                  Z.slice(1);
                                          })();
                                  })()
                                ),
                                $
                              );
                            })(),
                        })
                      ),
                      ae
                    );
                  })();
              })(),
              null
            ),
            l
          );
        })()
      );
    };
  ut(["click"]);
  function Cr({ isOpen: e, onOpen: o, onClose: c, onInput: d, hotKeys: p }) {
    function m(y) {
      let l = y.target,
        k = l.tagName;
      return (
        l.isContentEditable ||
        k === "INPUT" ||
        k === "SELECT" ||
        k === "TEXTAREA"
      );
    }
    function _(y) {
      let l = p && p.map((k) => k.toLowerCase().split("+"));
      return l
        ? l.some((k) => {
            if (
              k.length === 1 &&
              y.key.toLowerCase() === k[0] &&
              !y.ctrlKey &&
              !y.altKey &&
              !y.shiftKey &&
              !m(y) &&
              !e()
            )
              return !0;
            if (k.length > 1) {
              let T = k[k.length - 1];
              if (y.key.toLowerCase() !== T) return !1;
              let j = (yt() ? y.metaKey : y.ctrlKey) == k.some($t),
                q = y.shiftKey == k.includes("shift"),
                v = y.altKey == k.some(Rt),
                U = !yt() && y.metaKey == k.some(Er);
              return j && q && v && U;
            }
            return !1;
          })
        : !1;
    }
    function w(y) {
      if ((y.key === "Escape" && e()) || _(y)) {
        if ((y.preventDefault(), e())) c();
        else if (!document.body.classList.contains("docsearch--active")) {
          let l = window.getSelection();
          l && d(l.toString()), o();
        }
      }
    }
    Ee(() => window.addEventListener("keydown", w)),
      Ie(() => window.removeEventListener("keydown", w));
  }
  var Mn = F(
      '<svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 24 24"><path fill=currentColor d="M12 4a1 1 0 0 1 1 1v11.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.586V5a1 1 0 0 1 1-1z">'
    ),
    Dr = (e) =>
      (() => {
        let o = Mn();
        return (
          J(
            (c) => {
              let d = e.class,
                p = e["aria-label"];
              return (
                d !== c._v$ && B(o, "class", (c._v$ = d)),
                p !== c._v$2 && B(o, "aria-label", (c._v$2 = p)),
                c
              );
            },
            { _v$: void 0, _v$2: void 0 }
          ),
          o
        );
      })();
  var Pn = F(
      '<svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 24 24"><g fill=currentColor fill-rule=evenodd clip-rule=evenodd><path d="M3 14a1 1 0 0 1 1-1h12a3 3 0 0 0 3-3V6a1 1 0 1 1 2 0v4a5 5 0 0 1-5 5H4a1 1 0 0 1-1-1z"></path><path d="M3.293 14.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 14l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4z">'
    ),
    Nt = (e) =>
      (() => {
        let o = Pn();
        return (
          J(
            (c) => {
              let d = e.class,
                p = e["aria-label"];
              return (
                d !== c._v$ && B(o, "class", (c._v$ = d)),
                p !== c._v$2 && B(o, "aria-label", (c._v$2 = p)),
                c
              );
            },
            { _v$: void 0, _v$2: void 0 }
          ),
          o
        );
      })();
  var qn = F(
      '<svg width=15 height=15 viewBox="0 0 15 15"role=img><g fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.2><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956">'
    ),
    $r = (e) =>
      (() => {
        let o = qn();
        return (
          J(
            (c) => {
              let d = e.class,
                p = e["aria-label"];
              return (
                d !== c._v$ && B(o, "class", (c._v$ = d)),
                p !== c._v$2 && B(o, "aria-label", (c._v$2 = p)),
                c
              );
            },
            { _v$: void 0, _v$2: void 0 }
          ),
          o
        );
      })();
  var Hn = F(
      '<svg width=110 height=30 viewBox="0 0 495 74"><path d="M181.842 42.5349C181.842 37.6137 184.201 34.715 188.718 34.715C192.965 34.715 194.381 37.7486 194.381 41.6585V62.6238H203.953V40.5799C203.953 32.3556 199.639 26.4907 191.145 26.4907C186.089 26.4907 182.516 28.0412 179.415 31.4792C177.393 28.3782 173.955 26.4907 169.168 26.4907C164.112 26.4907 160.607 28.5805 158.989 31.614V27.2996H150.158V62.6238H159.731V42.3326C159.731 37.6137 162.157 34.715 166.607 34.715C170.854 34.715 172.269 37.7486 172.269 41.6585V62.6238H181.842V42.5349Z"fill=white></path><path d="M243.245 47.7256C243.245 47.7256 243.379 46.4448 243.379 44.8943C243.379 34.4454 236.301 26.4907 225.852 26.4907C215.403 26.4907 208.123 34.4454 208.123 44.8943C208.123 55.7477 215.471 63.4327 225.92 63.4327C234.077 63.4327 240.548 58.5116 242.638 51.3659H232.998C231.852 53.9276 229.088 55.2084 226.189 55.2084C221.403 55.2084 218.302 52.5793 217.628 47.7256H243.245ZM225.785 34.1757C230.234 34.1757 233.133 36.8722 233.807 40.8495H217.763C218.572 36.8048 221.403 34.1757 225.785 34.1757Z"fill=white></path><path d="M244.791 35.524H249.038V62.6238H258.61V27.2996H244.791V35.524ZM253.824 22.7156C257.195 22.7156 259.622 20.3561 259.622 16.9855C259.622 13.6149 257.195 11.188 253.824 11.188C250.454 11.188 248.027 13.6149 248.027 16.9855C248.027 20.3561 250.454 22.7156 253.824 22.7156Z"fill=white></path><path d="M278.432 54.3995C278.163 54.3995 277.758 54.4669 277.152 54.4669C274.994 54.4669 274.725 53.4557 274.725 51.9726V12.0644H265.152V52.6467C265.152 59.6576 267.849 62.7586 275.466 62.7586C276.747 62.7586 277.96 62.6238 278.432 62.5564V54.3995Z"fill=white></path><path d="M279.521 35.524H283.768V62.6238H293.341V27.2996H279.521V35.524ZM288.555 22.7156C291.925 22.7156 294.352 20.3561 294.352 16.9855C294.352 13.6149 291.925 11.188 288.555 11.188C285.184 11.188 282.757 13.6149 282.757 16.9855C282.757 20.3561 285.184 22.7156 288.555 22.7156Z"fill=white></path><path d="M312.557 62.9937C321.86 62.9937 326.242 58.0726 326.242 52.8819C326.242 38.4556 305.007 46.4777 305.007 36.9725C305.007 33.8716 307.636 31.2425 312.962 31.2425C318.422 31.2425 320.984 34.2086 321.388 37.9163H326.175C325.77 33.2648 322.602 27.0629 313.097 27.0629C304.94 27.0629 300.356 31.9166 300.356 37.1748C300.356 51.264 321.591 43.1745 321.591 53.0167C321.591 56.4547 318.355 58.8142 312.557 58.8142C306.625 58.8142 303.659 55.848 303.322 51.4662H298.468C298.873 57.4659 302.648 62.9937 312.557 62.9937Z"fill=white></path><path d="M364.256 46.4103C364.256 46.4103 364.324 45.3317 364.324 44.5901C364.324 34.8827 358.054 27.0629 347.808 27.0629C337.494 27.0629 330.955 35.4894 330.955 44.9946C330.955 54.6346 337.022 62.9937 347.875 62.9937C356.032 62.9937 361.695 58.0052 363.717 51.4662H358.729C357.245 55.6458 353.201 58.6794 347.943 58.6794C340.729 58.6794 336.213 53.3538 335.741 46.4103H364.256ZM347.808 31.3773C354.549 31.3773 358.931 35.8939 359.538 42.5004H335.876C336.685 36.1636 341.134 31.3773 347.808 31.3773Z"fill=white></path><path d="M394.037 45.871V49.1068C394.037 54.9717 389.79 59.0164 381.634 59.0164C376.578 59.0164 373.814 56.9266 373.814 52.41C373.814 50.118 374.892 48.3652 376.578 47.4215C378.33 46.4777 380.69 45.871 394.037 45.871ZM381.094 62.9937C387.027 62.9937 391.813 61.1062 394.24 57.1963V62.1848H398.824V39.7364C398.824 32.1188 394.442 27.0629 384.532 27.0629C375.027 27.0629 370.848 31.8492 369.971 37.9837H374.623C375.566 33.13 379.274 31.1751 384.33 31.1751C390.802 31.1751 394.037 33.8716 394.037 39.669V41.8936C383.184 41.8936 378.667 42.0959 375.297 43.4441C371.387 44.9946 369.095 48.4327 369.095 52.5448C369.095 58.5445 372.937 62.9937 381.094 62.9937Z"fill=white></path><path d="M424.991 27.6022C424.991 27.6022 424.182 27.5348 423.845 27.5348C417.509 27.5348 414.138 30.838 412.857 33.1974V27.8718H408.273V62.1848H413.059V42.7026C413.059 35.5569 417.441 32.0514 423.306 32.0514C424.182 32.0514 424.991 32.1188 424.991 32.1188V27.6022Z"fill=white></path><path d="M425.809 45.062C425.809 54.4324 432.28 62.9937 442.729 62.9937C452.032 62.9937 457.425 56.7918 458.773 49.9831H453.92C452.504 55.3087 448.594 58.6794 442.729 58.6794C435.516 58.6794 430.662 52.9493 430.662 45.062C430.662 37.1073 435.516 31.3773 442.729 31.3773C448.594 31.3773 452.504 34.7479 453.92 40.0735H458.773C457.425 33.2648 452.032 27.0629 442.729 27.0629C432.28 27.0629 425.809 35.6243 425.809 45.062Z"fill=white></path><path d="M470.041 11.6254H465.255V62.1848H470.041V41.8936C470.041 34.8827 474.558 31.2425 480.355 31.2425C486.49 31.2425 489.389 35.0176 489.389 41.2195V62.1848H494.175V40.2757C494.175 32.6581 489.658 27.0629 481.164 27.0629C474.76 27.0629 471.255 30.5683 470.041 32.6581V11.6254Z"fill=white></path><path d="M0.825012 73.993L24.0688 14.5224C27.3443 6.14179 35.4223 0.625977 44.4203 0.625977H58.4336L35.1899 60.0966C31.9143 68.4772 23.8363 73.993 14.8384 73.993H0.825012Z"fill=url(#paint0_linear_0_3)></path><path d="M34.9246 73.9932L58.1684 14.5226C61.444 6.14197 69.5219 0.626152 78.5199 0.626152H92.5333L69.2895 60.0968C66.014 68.4774 57.936 73.9932 48.938 73.9932H34.9246Z"fill=url(#paint1_linear_0_3)></path><path d="M69.0262 73.9932L92.27 14.5226C95.5456 6.14197 103.624 0.626152 112.622 0.626152H126.635L103.391 60.0968C100.116 68.4774 92.0376 73.9932 83.0396 73.9932H69.0262Z"fill=url(#paint2_linear_0_3)></path><defs><linearGradient id=paint0_linear_0_3 x1=126.635 y1=-4.97799 x2=0.825008 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62></stop></linearGradient><linearGradient id=paint1_linear_0_3 x1=126.635 y1=-4.97799 x2=0.825008 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62></stop></linearGradient><linearGradient id=paint2_linear_0_3 x1=126.635 y1=-4.97799 x2=0.825008 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62>'
    ),
    Rr = (e) =>
      (() => {
        let o = Hn();
        return J(() => B(o, "class", e.class)), o;
      })();
  var Fn = F(
      '<svg width=110 height=30 viewBox="0 0 495 74"fill=none xmlns=http://www.w3.org/2000/svg><path d="M181.84 42.5347C181.84 37.6136 184.199 34.7149 188.716 34.7149C192.963 34.7149 194.378 37.7484 194.378 41.6584V62.6237H203.951V40.5798C203.951 32.3554 199.637 26.4906 191.143 26.4906C186.087 26.4906 182.514 28.041 179.413 31.4791C177.39 28.3781 173.952 26.4906 169.166 26.4906C164.11 26.4906 160.605 28.5804 158.987 31.6139V27.2995H150.156V62.6237H159.728V42.3325C159.728 37.6136 162.155 34.7149 166.604 34.7149C170.851 34.7149 172.267 37.7484 172.267 41.6584V62.6237H181.84V42.5347Z"fill=#21004B></path><path d="M243.242 47.7255C243.242 47.7255 243.377 46.4447 243.377 44.8942C243.377 34.4452 236.299 26.4906 225.85 26.4906C215.401 26.4906 208.12 34.4452 208.12 44.8942C208.12 55.7476 215.468 63.4326 225.917 63.4326C234.074 63.4326 240.546 58.5115 242.636 51.3658H232.996C231.85 53.9274 229.086 55.2083 226.187 55.2083C221.401 55.2083 218.3 52.5792 217.626 47.7255H243.242ZM225.783 34.1756C230.232 34.1756 233.131 36.8721 233.805 40.8494H217.76C218.569 36.8047 221.401 34.1756 225.783 34.1756Z"fill=#21004B></path><path d="M244.789 35.5238H249.036V62.6237H258.608V27.2995H244.789V35.5238ZM253.822 22.7155C257.193 22.7155 259.619 20.356 259.619 16.9854C259.619 13.6148 257.193 11.1879 253.822 11.1879C250.451 11.1879 248.024 13.6148 248.024 16.9854C248.024 20.356 250.451 22.7155 253.822 22.7155Z"fill=#21004B></path><path d="M278.43 54.3993C278.16 54.3993 277.756 54.4667 277.149 54.4667C274.992 54.4667 274.722 53.4556 274.722 51.9725V12.0643H265.15V52.6466C265.15 59.6575 267.846 62.7585 275.464 62.7585C276.745 62.7585 277.958 62.6237 278.43 62.5562V54.3993Z"fill=#21004B></path><path d="M279.519 35.5238H283.766V62.6237H293.339V27.2995H279.519V35.5238ZM288.553 22.7155C291.923 22.7155 294.35 20.356 294.35 16.9854C294.35 13.6148 291.923 11.1879 288.553 11.1879C285.182 11.1879 282.755 13.6148 282.755 16.9854C282.755 20.356 285.182 22.7155 288.553 22.7155Z"fill=#21004B></path><path d="M312.557 62.9939C321.86 62.9939 326.242 58.0728 326.242 52.882C326.242 38.4557 305.007 46.4778 305.007 36.9726C305.007 33.8717 307.636 31.2426 312.962 31.2426C318.422 31.2426 320.984 34.2087 321.388 37.9164H326.175C325.77 33.265 322.602 27.063 313.097 27.063C304.94 27.063 300.356 31.9167 300.356 37.1749C300.356 51.2641 321.591 43.1746 321.591 53.0168C321.591 56.4548 318.355 58.8143 312.557 58.8143C306.625 58.8143 303.659 55.8481 303.322 51.4663H298.468C298.872 57.466 302.648 62.9939 312.557 62.9939Z"fill=#21004B></path><path d="M364.256 46.4104C364.256 46.4104 364.324 45.3318 364.324 44.5903C364.324 34.8829 358.054 27.063 347.808 27.063C337.494 27.063 330.955 35.4896 330.955 44.9947C330.955 54.6347 337.022 62.9939 347.875 62.9939C356.032 62.9939 361.695 58.0053 363.717 51.4663H358.728C357.245 55.6459 353.201 58.6795 347.942 58.6795C340.729 58.6795 336.213 53.3539 335.741 46.4104H364.256ZM347.808 31.3774C354.549 31.3774 358.931 35.894 359.537 42.5005H335.876C336.685 36.1637 341.134 31.3774 347.808 31.3774Z"fill=#21004B></path><path d="M394.037 45.8711V49.1069C394.037 54.9718 389.79 59.0165 381.633 59.0165C376.578 59.0165 373.814 56.9267 373.814 52.4101C373.814 50.1181 374.892 48.3654 376.578 47.4216C378.33 46.4778 380.69 45.8711 394.037 45.8711ZM381.094 62.9939C387.026 62.9939 391.813 61.1063 394.24 57.1964V62.1849H398.824V39.7366C398.824 32.1189 394.442 27.063 384.532 27.063C375.027 27.063 370.847 31.8493 369.971 37.9838H374.623C375.566 33.1301 379.274 31.1752 384.33 31.1752C390.802 31.1752 394.037 33.8717 394.037 39.6691V41.8938C383.184 41.8938 378.667 42.096 375.297 43.4442C371.387 44.9947 369.095 48.4328 369.095 52.5449C369.095 58.5446 372.937 62.9939 381.094 62.9939Z"fill=#21004B></path><path d="M424.991 27.6023C424.991 27.6023 424.182 27.5349 423.845 27.5349C417.508 27.5349 414.138 30.8381 412.857 33.1975V27.872H408.273V62.1849H413.059V42.7027C413.059 35.557 417.441 32.0515 423.306 32.0515C424.182 32.0515 424.991 32.1189 424.991 32.1189V27.6023Z"fill=#21004B></path><path d="M425.809 45.0621C425.809 54.4325 432.28 62.9939 442.729 62.9939C452.032 62.9939 457.425 56.7919 458.773 49.9832H453.92C452.504 55.3088 448.594 58.6795 442.729 58.6795C435.516 58.6795 430.662 52.9494 430.662 45.0621C430.662 37.1075 435.516 31.3774 442.729 31.3774C448.594 31.3774 452.504 34.748 453.92 40.0736H458.773C457.425 33.265 452.032 27.063 442.729 27.063C432.28 27.063 425.809 35.6244 425.809 45.0621Z"fill=#21004B></path><path d="M470.041 11.6255H465.255V62.1849H470.041V41.8938C470.041 34.8829 474.558 31.2426 480.355 31.2426C486.49 31.2426 489.389 35.0177 489.389 41.2196V62.1849H494.175V40.2759C494.175 32.6582 489.658 27.063 481.164 27.063C474.76 27.063 471.255 30.5685 470.041 32.6582V11.6255Z"fill=#21004B></path><path d="M0.824951 73.993L24.0688 14.5224C27.3443 6.14179 35.4223 0.625977 44.4202 0.625977H58.4336L35.1898 60.0966C31.9143 68.4772 23.8363 73.993 14.8383 73.993H0.824951Z"fill=url(#paint0_linear_0_15)></path><path d="M34.9246 73.9932L58.1684 14.5226C61.4439 6.14197 69.5219 0.626152 78.5199 0.626152H92.5332L69.2894 60.0968C66.0139 68.4774 57.9359 73.9932 48.9379 73.9932H34.9246Z"fill=url(#paint1_linear_0_15)></path><path d="M69.0262 73.9932L92.27 14.5226C95.5455 6.14197 103.623 0.626152 112.621 0.626152H126.635L103.391 60.0968C100.115 68.4774 92.0375 73.9932 83.0395 73.9932H69.0262Z"fill=url(#paint2_linear_0_15)></path><defs><linearGradient id=paint0_linear_0_15 x1=126.635 y1=-4.97799 x2=0.824952 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62></stop></linearGradient><linearGradient id=paint1_linear_0_15 x1=126.635 y1=-4.97799 x2=0.824952 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62></stop></linearGradient><linearGradient id=paint2_linear_0_15 x1=126.635 y1=-4.97799 x2=0.824952 y2=66.0978 gradientUnits=userSpaceOnUse><stop stop-color=#FF5CAA></stop><stop offset=1 stop-color=#FF4E62>'
    ),
    Nr = (e) =>
      (() => {
        let o = Fn();
        return J(() => B(o, "class", e.class)), o;
      })();
  var Vn = F(
      '<svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 24 24"><path fill=currentColor d="M12 4a1 1 0 0 1 .707.293l6 6a1 1 0 0 1-1.414 1.414L13 7.414V19a1 1 0 1 1-2 0V7.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l6-6A1 1 0 0 1 12 4z">'
    ),
    Or = (e) =>
      (() => {
        let o = Vn();
        return (
          J(
            (c) => {
              let d = e.class,
                p = e["aria-label"];
              return (
                d !== c._v$ && B(o, "class", (c._v$ = d)),
                p !== c._v$2 && B(o, "aria-label", (c._v$2 = p)),
                c
              );
            },
            { _v$: void 0, _v$2: void 0 }
          ),
          o
        );
      })();
  var Un = F(
      "<span class=docsearch-modal-footer-commands><li><kbd class=docsearch-modal-footer-commands-key></kbd><span class=docsearch-modal-footer-commands-label></span></li><li><kbd class=docsearch-modal-footer-commands-key></kbd><kbd class=docsearch-modal-footer-commands-key></kbd><span class=docsearch-modal-footer-commands-label></span></li><li><kbd class=docsearch-modal-footer-commands-key></kbd><span class=docsearch-modal-footer-commands-label>"
    ),
    xn = F(
      "<span class=docsearch-modal-footer-logo><span class=docsearch-modal-footer-logo-label></span><a href=https://www.meilisearch.com/>"
    ),
    Lr = ({ translations: e = {} }) => {
      let {
        selectText: o = "to select",
        selectKeyAriaLabel: c = "Enter key",
        navigateText: d = "to navigate",
        navigateUpKeyAriaLabel: p = "Arrow up",
        navigateDownKeyAriaLabel: m = "Arrow down",
        closeText: _ = "to close",
        closeKeyAriaLabel: w = "Escape key",
        poweredByText: y = "Powered by",
      } = e;
      return [
        (() => {
          let l = Un(),
            k = l.firstChild,
            T = k.firstChild,
            j = T.nextSibling,
            q = k.nextSibling,
            v = q.firstChild,
            U = v.nextSibling,
            ae = U.nextSibling,
            Z = q.nextSibling,
            $ = Z.firstChild,
            X = $.nextSibling;
          return (
            K(T, V(Nt, { "aria-label": c })),
            K(j, o),
            K(v, V(Dr, { "aria-label": m })),
            K(U, V(Or, { "aria-label": p })),
            K(ae, d),
            K($, V($r, { "aria-label": w })),
            K(X, _),
            l
          );
        })(),
        (() => {
          let l = xn(),
            k = l.firstChild,
            T = k.nextSibling;
          return (
            K(k, y),
            K(
              T,
              V(Nr, {
                class:
                  "docsearch-modal-footer-logo-icon docsearch-modal-footer-logo-light",
              }),
              null
            ),
            K(
              T,
              V(Rr, {
                class:
                  "docsearch-modal-footer-logo-icon docsearch-modal-footer-logo-dark",
              }),
              null
            ),
            l
          );
        })(),
      ];
    };
  var Kn = F(
      '<svg width=20 height=20 xmlns=http://www.w3.org/2000/svg><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"stroke=currentColor fill=none fill-rule=evenodd stroke-linecap=round stroke-linejoin=round>'
    ),
    Mr = (e) =>
      (() => {
        let o = Kn();
        return J(() => B(o, "class", e.class)), o;
      })();
  var Bn = F(
      '<svg width=24 height=24 xmlns=http://www.w3.org/2000/svg><path fill=currentColor d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8Z">'
    ),
    Pr = (e) =>
      (() => {
        let o = Bn();
        return J(() => B(o, "class", e.class)), o;
      })();
  var jn = F(
      "<form class=docsearch-modal-search-input-form><input type=search class=docsearch-modal-search-input><button type=reset class=docsearch-modal-search-input-reset>"
    ),
    Gn = F("<button type=reset class=docsearch-modal-search-cancel-btn>"),
    qr = ({
      loading: e,
      query: o,
      onInput: c,
      onKeyDown: d,
      onReset: p,
      onClose: m,
      translations: _ = {},
    }) => {
      let {
          searchDocsPlaceHolder: w = "Search",
          resetButtonTitle: y = "Clear the query",
          resetButtonAriaLabel: l = "Clear the query",
          cancelButtonText: k = "Cancel",
          cancelButtonAriaLabel: T = "Cancel",
        } = _,
        j;
      return (
        Ee(() => j?.focus()),
        [
          (() => {
            let q = jn(),
              v = q.firstChild,
              U = v.nextSibling;
            Ye(q, "reset", p),
              q.addEventListener("submit", (Z) => Z.preventDefault()),
              K(
                q,
                V(Ge, {
                  get when() {
                    return e();
                  },
                  get fallback() {
                    return V(Dt, {
                      class: "docsearch-modal-search-input-icon",
                    });
                  },
                  get children() {
                    return V(Pr, {
                      class:
                        "docsearch-modal-search-input-icon docsearch-modal-search-input-loading-icon",
                    });
                  },
                }),
                v
              ),
              Ye(v, "keydown", d, !0),
              Ye(v, "input", c, !0);
            let ae = j;
            return (
              typeof ae == "function" ? ot(ae, v) : (j = v),
              B(v, "placeholder", w),
              B(U, "title", y),
              B(U, "aria-label", l),
              K(U, V(Mr, { class: "docsearch-modal-search-input-reset-icon" })),
              J(() => (U.hidden = !o())),
              J(() => (v.value = o())),
              q
            );
          })(),
          (() => {
            let q = Gn();
            return Ye(q, "click", m, !0), B(q, "aria-label", T), K(q, k), q;
          })(),
        ]
      );
    };
  ut(["input", "keydown", "click"]);
  var Kr = rn(Ur(), 1);
  var xr = "0.7.0";
  function Br({ host: e, apiKey: o, clientAgents: c = [] }) {
    return le(
      () =>
        new Kr.MeiliSearch({
          host: e,
          apiKey: o,
          clientAgents: c.concat(`Meilisearch docs-searchbar.js (v${xr}`),
        })
    );
  }
  function Xt(e, o) {
    let { environment: c = window } = o();
    Ee(() => {
      let d = e.querySelectorAll(
          "a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"
        ),
        p = d[0],
        m = d[d.length - 1];
      function _(w) {
        w.key === "Tab" &&
          (w.shiftKey
            ? c.document.activeElement === p && (w.preventDefault(), m.focus())
            : c.document.activeElement === m &&
              (w.preventDefault(), p.focus()));
      }
      e.addEventListener("keydown", _),
        Ie(() => e.removeEventListener("keydown", _));
    });
  }
  var Yn = F("<div class=docsearch-modal-empty-query>"),
    Zn = F(
      "<div class=docsearch-modal-error><p class=docsearch-modal-title>An error has occured. Please try again..."
    ),
    Xn = F(
      "<div class=docsearch-modal-no-search-hits-suggestions-list><p class=docsearch-modal-no-search-hits-help-text>Try searching for:</p><ul>"
    ),
    Wn = F(
      '<div class=docsearch-modal-no-search-hits><p class=docsearch-modal-title>No results for "<!>"'
    ),
    zn = F(
      "<div class=docsearch-modal-container role=button tabindex=0><div class=docsearch-modal><header class=docsearch-modal-search-container></header><main class=docsearch-modal-search-hits-container></main><footer class=docsearch-modal-footer>"
    ),
    Qn = F(
      "<li><button class=docsearch-modal-no-search-hits-suggestion type=button>"
    ),
    Jn = F(
      "<section><div class=docsearch-modal-search-hits-category></div><ul role=listbox>"
    ),
    es = F(
      "<li role=option class=docsearch-modal-search-hits-item><a><span class=docsearch-modal-search-hits-item-text-container><p class=docsearch-modal-search-hits-item-title></p><p class=docsearch-modal-search-hits-item-text></p></span><span class=docsearch-modal-search-hits-item-trailing-icon-container aria-hidden>"
    );
  var Ce = (function (e) {
      return (
        (e[(e.Results = 0)] = "Results"),
        (e[(e.NoResults = 1)] = "NoResults"),
        (e[(e.Error = 2)] = "Error"),
        (e[(e.EmptyQuery = 3)] = "EmptyQuery"),
        e
      );
    })(Ce || {}),
    jr = ({
      host: e,
      apiKey: o,
      indexUid: c,
      clientAgents: d,
      searchParams: p,
      environment: m = window,
      debounceDuration: _ = 200,
      translations: w = {},
      onClose: y,
      initialQuery: l,
    }) => {
      let { linkToTheResultAriaLabel: k = "Link to the result" } = w;
      Ee(() => document.body.classList.add("docsearch--active")),
        Ie(() => document.body.classList.remove("docsearch--active"));
      let T, j;
      function q() {
        if (j) {
          let Y = window.innerHeight * 0.01;
          j.style.setProperty("--docsearch-vh", `${Y}px`);
        }
      }
      Ee(() => {
        q(), window.addEventListener("resize", q);
      }),
        Ie(() => window.removeEventListener("resize", q));
      let v = Br({ host: e, apiKey: o, clientAgents: d }),
        [U, ae] = ce(!1),
        [Z, $] = ce(""),
        [X, W] = ce(0),
        [pe, Le] = ce([]),
        [oe, Xe] = ce([]),
        [Te, b] = ce(Ce.EmptyQuery),
        I = () => oe().length;
      function M(Y) {
        if (Y.key === "ArrowUp" || Y.key === "ArrowDown") {
          Y.preventDefault();
          let ie = Y.key === "ArrowDown";
          W((me) =>
            ie && me === I() - 1
              ? 0
              : !ie && me === 0
              ? I() - 1
              : me + (ie ? 1 : -1)
          ),
            document
              .getElementById(`docsearch-hit-item-${X()}`)
              ?.scrollIntoView({
                block: X() === 0 ? "center" : "nearest",
                behavior: "smooth",
              });
        }
        Y.key === "Enter" &&
          (Y.preventDefault(),
          Y.ctrlKey || Y.metaKey
            ? m.open(oe()[X()].url ?? "", "_blank", "noopener")?.focus()
            : Y.shiftKey
            ? m.open(oe()[X()].url ?? "", "_blank", "noopener")
            : m.location.assign(oe()[X()].url ?? ""),
          !Y.shiftKey && !Y.ctrlKey && !Y.metaKey && y && y());
      }
      function ne() {
        ae(!1), b(Ce.EmptyQuery), Xe([]), Le([]), W(0);
      }
      function se(Y) {
        ae(!0),
          v()
            .index(c)
            .search(Y, {
              attributesToHighlight: ["*"],
              attributesToCrop: ["content"],
              cropLength: 30,
              ...p,
            })
            .catch((ie) => {
              ne(), b(Ce.Error), console.error(ie);
            })
            .then((ie) => {
              if (!ie) {
                ne(), b(Ce.Error);
                return;
              }
              if (ie.hits.length === 0) {
                ne(), b(Ce.NoResults);
                return;
              }
              let [me, De] = ts(ie.hits);
              ae(!1),
                b(me.length === 0 ? Ce.NoResults : Ce.Results),
                W(0),
                Xe(me),
                Le(De);
            });
      }
      let G = _ ? Sr(se, _) : se;
      l &&
        Ee(() => {
          $(l), se(l);
        });
      function Me(Y) {
        let ie = Y.currentTarget?.value;
        if (($(ie), !ie)) {
          ne();
          return;
        }
        G(ie);
      }
      return (() => {
        let Y = zn(),
          ie = Y.firstChild,
          me = ie.firstChild,
          De = me.nextSibling,
          We = De.nextSibling;
        Y.$$mousedown = (ve) => ve.target === ve.currentTarget && y && y();
        let lt = j;
        typeof lt == "function" ? ot(lt, Y) : (j = Y),
          ot(Xt, ie, () => ({ environment: m })),
          K(
            me,
            V(qr, {
              loading: U,
              query: Z,
              onInput: Me,
              onKeyDown: M,
              onReset: ne,
              onClose: y,
              translations: w,
            })
          );
        let Fe = T;
        return (
          typeof Fe == "function" ? ot(Fe, De) : (T = De),
          K(
            De,
            V(jt, {
              get children() {
                return [
                  V(it, {
                    get when() {
                      return Te() === Ce.EmptyQuery;
                    },
                    get children() {
                      return Yn();
                    },
                  }),
                  V(it, {
                    get when() {
                      return Te() === Ce.Error;
                    },
                    get children() {
                      return Zn();
                    },
                  }),
                  V(it, {
                    get when() {
                      return Te() === Ce.NoResults;
                    },
                    get children() {
                      let ve = Wn(),
                        xe = ve.firstChild,
                        Ve = xe.firstChild,
                        ze = Ve.nextSibling,
                        be = ze.nextSibling;
                      return (
                        K(xe, Z, ze),
                        K(
                          ve,
                          V(Ge, {
                            get when() {
                              return pe().length > 0;
                            },
                            get children() {
                              let $e = Xn(),
                                Pe = $e.firstChild,
                                Qe = Pe.nextSibling;
                              return (
                                K(
                                  Qe,
                                  V(je, {
                                    get each() {
                                      return pe();
                                    },
                                    children: (Ke) =>
                                      (() => {
                                        let Je = Qn(),
                                          qe = Je.firstChild;
                                        return (
                                          (qe.$$click = () => $(Ke)),
                                          K(qe, Ke),
                                          Je
                                        );
                                      })(),
                                  })
                                ),
                                $e
                              );
                            },
                          }),
                          null
                        ),
                        ve
                      );
                    },
                  }),
                  V(it, {
                    get when() {
                      return Te() === Ce.Results;
                    },
                    get children() {
                      return V(je, {
                        get each() {
                          return pe();
                        },
                        children: (ve) =>
                          (() => {
                            let xe = Jn(),
                              Ve = xe.firstChild,
                              ze = Ve.nextSibling;
                            return (
                              K(Ve, ve),
                              K(
                                ze,
                                V(je, {
                                  get each() {
                                    return oe().filter(
                                      (be) => be.category === ve
                                    );
                                  },
                                  children: (be) =>
                                    (() => {
                                      let $e = es(),
                                        Pe = $e.firstChild,
                                        Qe = Pe.firstChild,
                                        Ke = Qe.firstChild,
                                        Je = Ke.nextSibling,
                                        qe = Qe.nextSibling;
                                      return (
                                        $e.addEventListener("mouseenter", () =>
                                          W(be.index)
                                        ),
                                        B(Pe, "aria-label", k),
                                        K(
                                          qe,
                                          V(Nt, {
                                            class:
                                              "docsearch-modal-search-hits-item-trailing-icon",
                                          })
                                        ),
                                        J(
                                          (L) => {
                                            let ct = be.index === X(),
                                              ft = `docsearch-hit-item-${be.index}`,
                                              Re = be.index === X(),
                                              vt = be.url || "#",
                                              et =
                                                (be.subcategory || "") +
                                                (be.subcategory &&
                                                  be.title &&
                                                  " | ") +
                                                (be.title || ""),
                                              h = be.text || "";
                                            return (
                                              ct !== L._v$ &&
                                                B(
                                                  $e,
                                                  "aria-selected",
                                                  (L._v$ = ct)
                                                ),
                                              ft !== L._v$2 &&
                                                B($e, "id", (L._v$2 = ft)),
                                              Re !== L._v$3 &&
                                                $e.classList.toggle(
                                                  "docsearch-modal-search-hits-item--active",
                                                  (L._v$3 = Re)
                                                ),
                                              vt !== L._v$4 &&
                                                B(Pe, "href", (L._v$4 = vt)),
                                              et !== L._v$5 &&
                                                (Ke.innerHTML = L._v$5 = et),
                                              h !== L._v$6 &&
                                                (Je.innerHTML = L._v$6 = h),
                                              L
                                            );
                                          },
                                          {
                                            _v$: void 0,
                                            _v$2: void 0,
                                            _v$3: void 0,
                                            _v$4: void 0,
                                            _v$5: void 0,
                                            _v$6: void 0,
                                          }
                                        ),
                                        $e
                                      );
                                    })(),
                                })
                              ),
                              xe
                            );
                          })(),
                      });
                    },
                  }),
                ];
              },
            })
          ),
          K(We, V(Lr, { translations: w })),
          Y
        );
      })();
    };
  function ts(e) {
    let c = Tr(e).map((m) => {
        if (m._formatted) {
          let w = Zt(m._formatted);
          m._formatted = Yt(w, "hierarchy_");
        }
        let _ = Zt(m);
        return Yt(_, "hierarchy_");
      }),
      d = br(c, "lvl0");
    return [
      Object.entries(d)
        .map(([m, _]) =>
          _.map((w) => ({
            category: m,
            subcategory: Ze(w, "lvl1") || m,
            title: _r([
              Ze(w, "lvl2"),
              Ze(w, "lvl3"),
              Ze(w, "lvl4"),
              Ze(w, "lvl5"),
              Ze(w, "lvl6"),
            ]).join('<span aria-hidden="true"> \u203A </span>'),
            text: Ar(w, "content"),
            url: rs(w),
          }))
        )
        .flat()
        .map((m, _) => ({ index: _, ...m })),
      Object.keys(d),
    ];
  }
  function rs(e) {
    let { url: o, anchor: c } = e;
    return o
      ? o.indexOf("#") !== -1
        ? o
        : c
        ? `${e.url}#${e.anchor}`
        : o
      : c
      ? `#${e.anchor}`
      : (console.warn("no anchor nor url for : ", JSON.stringify(e)), null);
  }
  ut(["mousedown", "click"]);
  var ns = ["ctrl+k", "s", "/"],
    Gr = (e) => {
      let { environment: o = window, hotKeys: c = ns } = e,
        [d, p] = ce(!1),
        [m, _] = ce(),
        w = () => p(!0),
        y = () => p(!1),
        l = (T) => _(T),
        k = () => {
          let T = window.getSelection();
          T && _(T.toString()), p(!0);
        };
      return (
        Cr({ isOpen: d, onOpen: w, onClose: y, onInput: l, hotKeys: c }),
        [
          V(Ir, {
            get translations() {
              return e?.translations?.button;
            },
            hotKeys: c,
            onClick: k,
          }),
          le(
            (() => {
              let T = le(() => !!d());
              return () =>
                T() &&
                V(wr, {
                  get mount() {
                    return o.document.body;
                  },
                  get children() {
                    return V(
                      jr,
                      Bt(e, {
                        get initialQuery() {
                          return m();
                        },
                        onClose: y,
                        get translations() {
                          return e?.translations?.modal;
                        },
                      })
                    );
                  },
                });
            })()
          ),
        ]
      );
    };
  function Yr(e) {
    let [o, c] = ce(!0);
    return (
      yr(
        () =>
          V(Ge, {
            get when() {
              return o();
            },
            get children() {
              return V(Gr, e);
            },
          }),
        typeof e.container == "string"
          ? (e.environment ?? window).document.querySelector(e.container)
          : e.container
      ),
      () => c(!1)
    );
  }
  var ss = Yr;
  return nn(is);
})();
if (!"__docsearch_meilisearch__" in window)
  window.__docsearch_meilisearch__ = __docsearch_meilisearch__;
