"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataSources {
  constructor() {
    this._data_url = "";
    this.liveURL = `https://vindmijnwijn.nl/wp-admin/admin-post.php?action=fetch_kiyoh`;
    this.testURL = `https://vindmijnwijn.nl/vmw_new_staging/wp-admin/admin-post.php?action=fetch_kiyoh`;
  }
  liveData() {
    this.dataUrl = this.liveURL;
    return this;
  }
  testData() {
    this.dataUrl = this.testURL;
    return this;
  }
  get dataUrl() {
    return this._data_url;
  }
  set dataUrl(value) {
    this._data_url = value;
  }
}
exports.DataSources = DataSources;
//# sourceMappingURL=DataSources.js.map
