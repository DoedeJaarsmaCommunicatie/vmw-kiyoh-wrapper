export abstract class DataSources {
  private _data_url: string = "";

  liveURL = `https://vindmijnwijn.nl/wp-admin/admin-post.php?action=fetch_kiyoh`;

  testURL = `https://vindmijnwijn.nl/vmw_new_staging/wp-admin/admin-post.php?action=fetch_kiyoh`;

  liveData(): this {
    this.dataUrl = this.liveURL;
    return this;
  }

  testData() {
    this.dataUrl = this.testURL;
    return this;
  }

  get dataUrl(): string {
    return this._data_url;
  }

  set dataUrl(value: string) {
    this._data_url = value!;
  }
}
