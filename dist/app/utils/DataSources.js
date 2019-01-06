"use strict";
class DataSources {
    constructor() {
        this._data_url = '';
        this.liveURL = `https://vindmijnwijn.nl/wp-admin/admin-post.php?action=fetch_kiyoh`;
        this.testURL = `https://vindmijnwijn.nl/vmw_new_staging/wp-admin/admin-post.php?action=fetch_kiyoh`;
    }
    liveData() { }
    testData() { }
    get dataUrl() { return this._data_url; }
    set dataUrl(value) { this._data_url = value; }
}
//# sourceMappingURL=DataSources.js.map