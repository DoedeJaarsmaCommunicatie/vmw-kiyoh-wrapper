export abstract class DataSources {
    private _data_url;
    liveURL: string;
    testURL: string;
    liveData(): this;
    testData(): this;
    dataUrl: string;
}
