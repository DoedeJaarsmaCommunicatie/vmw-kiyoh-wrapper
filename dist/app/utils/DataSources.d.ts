declare abstract class DataSources {
    _data_url: string;
    liveURL: string;
    testURL: string;
    liveData(): void;
    testData(): void;
    dataUrl: string;
}
