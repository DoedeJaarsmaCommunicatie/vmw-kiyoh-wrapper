// import { Vindmijndata } from './app/Vindmijndata'
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
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
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [0, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var Vindmijnwijn;
(function(Vindmijnwijn) {
  var VMWKiyoh = /** @class */ (function() {
    function VMWKiyoh() {
      this._data_url = "";
      this._target = null;
      this._average = null;
      this.vmw_data = {};
    }
    VMWKiyoh.prototype.setTarget = function(target) {
      this._target = target;
      return this;
    };
    VMWKiyoh.prototype.sendData = function(key) {
      if (!this.vmw_data) {
        console.error("No data set yet.");
      }
      if (!this.target) {
        console.error("No target set.");
      }
      // @ts-ignore
      this.vmw_data = window.vmw;
      try {
        document.querySelector(this.target).innerHTML = this.vmw_data[key];
      } catch (e) {
        console.warn(e);
      }
    };
    VMWKiyoh.prototype.liveData = function() {
      this._data_url =
        "https://vindmijnwijn.nl/wp-admin/admin-post.php?action=fetch_kiyoh";
      return this;
    };
    VMWKiyoh.prototype.testData = function() {
      this._data_url =
        "https://vindmijnwijn.nl/vmw_new_staging/wp-admin/admin-post.php?action=fetch_kiyoh";
      return this;
    };
    VMWKiyoh.prototype.parseData = function() {
      return __awaiter(this, void 0, void 0, function() {
        var e_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4 /*yield*/, this.checkAndGetData()];
            case 1:
              _a.sent();
              return [3 /*break*/, 3];
            case 2:
              e_1 = _a.sent();
              console.warn(e_1);
              return [3 /*break*/, 3];
            case 3:
              return [2 /*return*/, this];
          }
        });
      });
    };
    VMWKiyoh.prototype.checkAndGetData = function() {
      return __awaiter(this, void 0, void 0, function() {
        var e_2;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              console.info("No data set!");
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              console.info("Fetching data");
              return [
                4 /*yield*/,
                this.fetchData()
                // @ts-ignore
              ];
            case 2:
              _a.sent();
              // @ts-ignore
              console.info("Data set");
              return [2 /*return*/, this];
            case 3:
              e_2 = _a.sent();
              console.warn(e_2);
              return [2 /*return*/, this];
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };
    VMWKiyoh.prototype.fetchData = function() {
      return __awaiter(this, void 0, void 0, function() {
        var xhr, _a, e_3;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              xhr = new XMLHttpRequest();
              xhr.open("get", this.dataUrl);
              _b.label = 1;
            case 1:
              _b.trys.push([1, 4, , 5]);
              _a = xhr;
              return [4 /*yield*/, this.xhrReady()];
            case 2:
              _a.onreadystatechange = _b.sent();
              return [4 /*yield*/, xhr.send()];
            case 3:
              _b.sent();
              return [3 /*break*/, 5];
            case 4:
              e_3 = _b.sent();
              console.warn(e_3);
              return [3 /*break*/, 5];
            case 5:
              return [2 /*return*/];
          }
        });
      });
    };
    VMWKiyoh.prototype.xhrReady = function() {
      return __awaiter(this, void 0, void 0, function() {
        var _a, e_4;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!(this.readyState == 4 && this.status == 200))
                return [3 /*break*/, 4];
              // @ts-ignore
              window.vmw = {};
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              // @ts-ignore
              _a = window;
              return [4 /*yield*/, JSON.parse(this.response).data];
            case 2:
              // @ts-ignore
              _a.vmw = _b.sent();
              // @ts-ignore
              return [2 /*return*/, JSON.parse(this.response).data];
            case 3:
              e_4 = _b.sent();
              console.warn(e_4);
              return [3 /*break*/, 4];
            case 4:
              return [2 /*return*/];
          }
        });
      });
    };
    Object.defineProperty(VMWKiyoh.prototype, "average", {
      get: function() {
        return this._average;
      },
      set: function(value) {
        this._average = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(VMWKiyoh.prototype, "target", {
      get: function() {
        return this._target;
      },
      set: function(value) {
        this._target = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(VMWKiyoh.prototype, "dataUrl", {
      get: function() {
        return this._data_url;
      },
      set: function(value) {
        this._data_url = value;
      },
      enumerable: true,
      configurable: true
    });
    return VMWKiyoh;
  })();
  // @ts-ignore
  window.Kiyoh = new VMWKiyoh();
})(Vindmijnwijn || (Vindmijnwijn = {}));
