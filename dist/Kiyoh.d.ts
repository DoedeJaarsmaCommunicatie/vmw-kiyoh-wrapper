export declare class VMWKiyoh {
    private _data_url;
    private _target;
    private _average;
    private vmw_data;
    constructor();
    setTarget(target: string): this;
    sendData(key: string): void;
    liveData(): this;
    testData(): this;
    parseData(): Promise<this>;
    private checkAndGetData;
    private fetchData;
    private xhrReady;
    average: string;
    target: string;
    dataUrl: string;
}
