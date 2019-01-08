'use strict';
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
                    step(generator['throw'](value));
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
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __importStar =
    (this && this.__importStar) ||
    function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result['default'] = mod;
        return result;
    };
Object.defineProperty(exports, '__esModule', { value: true });
const req = __importStar(require('./app/utils/MakeRequest'));
class VMWKiyoh {
    constructor() {
        this._data_url = '';
        this.liveURL = `https://vindmijnwijn.nl/wp-admin/admin-post.php?action=fetch_kiyoh`;
        this.testURL = `https://vindmijnwijn.nl/vmw_new_staging/wp-admin/admin-post.php?action=fetch_kiyoh`;
        this._target = null;
        this._average = null;
        this.vmw_data = {};
    }
    setTarget(target) {
        this._target = target;
        return this;
    }
    sendData(key) {
        if (!this.vmw_data) {
            console.error('No data set yet.');
        }
        if (!this.target) {
            console.error('No target set.');
        }
        this.vmw_data = window.vmw;
        try {
            document.querySelector(this.target).innerHTML = this.vmw_data[key];
        } catch (e) {
            console.warn(e);
        }
    }
    liveData() {
        this.dataUrl = this.liveURL;
        return this;
    }
    testData() {
        this.dataUrl = this.testURL;
        return this;
    }
    parseData() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                yield this.checkAndGetData().then(res => {
                    return true;
                });
            } catch (e) {
                console.warn(e);
            }
            return this;
        });
    }
    checkAndGetData() {
        return __awaiter(this, void 0, void 0, function*() {
            console.info('No data set!');
            return new Promise((resolve, reject) => {
                console.log('Fetching data');
                this.fetchData()
                    .then(res => {
                        console.log(res);
                        window.vmw = this.vmw_data = res.data;
                        console.log('Data fetched');
                        return this.vmw_data;
                    })
                    .catch(err => {
                        return err;
                    });
            });
        });
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function*() {
            return yield req
                .makeRequest('get', this.dataUrl)
                .then(res => {
                    return JSON.parse(res);
                })
                .catch(err => {
                    return err;
                });
        });
    }
    get average() {
        return this._average;
    }
    get target() {
        return this._target;
    }
    get dataUrl() {
        return this._data_url;
    }
    set average(value) {
        this._average = value;
    }
    set target(value) {
        this._target = value;
    }
    set dataUrl(value) {
        this._data_url = value;
    }
}
exports.VMWKiyoh = VMWKiyoh;
//# sourceMappingURL=Kiyoh.js.map
