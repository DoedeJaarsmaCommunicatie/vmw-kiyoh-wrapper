"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Vindmijnwijn;
(function (Vindmijnwijn) {
    class VMWKiyoh {
        constructor() {
            this._data_url = '';
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
                console.error("No data set yet.");
            }
            if (!this.target) {
                console.error("No target set.");
            }
            // @ts-ignore
            this.vmw_data = window.vmw;
            try {
                document.querySelector(this.target).innerHTML = this.vmw_data[key];
            }
            catch (e) {
                console.warn(e);
            }
        }
        liveData() {
            this._data_url = `https://vindmijnwijn.nl/wp-admin/admin-post.php?action=fetch_kiyoh`;
            return this;
        }
        testData() {
            this._data_url = `https://vindmijnwijn.nl/vmw_new_staging/wp-admin/admin-post.php?action=fetch_kiyoh`;
            return this;
        }
        parseData() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield this.checkAndGetData();
                }
                catch (e) {
                    console.warn(e);
                }
                return this;
            });
        }
        checkAndGetData() {
            return __awaiter(this, void 0, void 0, function* () {
                console.info("No data set!");
                try {
                    console.info("Fetching data");
                    yield this.fetchData();
                    // @ts-ignore
                    console.info('Data set');
                    return this;
                }
                catch (e) {
                    console.warn(e);
                    return this;
                }
            });
        }
        fetchData() {
            return __awaiter(this, void 0, void 0, function* () {
                const xhr = new XMLHttpRequest();
                xhr.open('get', this.dataUrl);
                try {
                    xhr.onreadystatechange = yield this.xhrReady();
                    yield xhr.send();
                }
                catch (e) {
                    console.warn(e);
                }
            });
        }
        xhrReady() {
            return __awaiter(this, void 0, void 0, function* () {
                // @ts-ignore
                if (this.readyState == 4 && this.status == 200) {
                    // @ts-ignore
                    window.vmw = {};
                    try {
                        // @ts-ignore
                        window.vmw = yield JSON.parse(this.response).data;
                        // @ts-ignore
                        return JSON.parse(this.response).data;
                    }
                    catch (e) {
                        console.warn(e);
                    }
                }
            });
        }
        get average() { return this._average; }
        get target() { return this._target; }
        get dataUrl() { return this._data_url; }
        set average(value) { this._average = value; }
        set target(value) { this._target = value; }
        set dataUrl(value) { this._data_url = value; }
    }
    Vindmijnwijn.VMWKiyoh = VMWKiyoh;
    // @ts-ignore
    window.Kiyoh = new VMWKiyoh();
})(Vindmijnwijn || (Vindmijnwijn = {}));
