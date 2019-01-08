import { Vindmijndata } from './app/Vindmijndata';
import * as req from './app/utils/MakeRequest';

export class VMWKiyoh {
    private _data_url: string = '';

    private liveURL = `https://vindmijnwijn.nl/wp-admin/admin-post.php?action=fetch_kiyoh`;

    private testURL = `https://vindmijnwijn.nl/vmw_new_staging/wp-admin/admin-post.php?action=fetch_kiyoh`;

    private _target: string | null = null;

    private _average: string | null = null;

    private vmw_data: Vindmijndata = {};

    constructor() {}

    public setTarget(target: string): this {
        this._target = target;
        return this;
    }

    public sendData(key: string) {
        if (!this.vmw_data) {
            console.error('No data set yet.');
        }
        if (!this.target) {
            console.error('No target set.');
        }

        // @ts-ignore
        this.vmw_data = window.vmw;

        try {
            document.querySelector(this.target!)!.innerHTML = this.vmw_data![
                key
            ]!;
        } catch (e) {
            console.warn(e);
        }
    }

    public liveData(): this {
        this.dataUrl = this.liveURL;
        return this;
    }

    public testData(): this {
        this.dataUrl = this.testURL;
        return this;
    }

    async parseData(): Promise<this> {
        try {
            await this.checkAndGetData().then(res => {
                return true;
            });
        } catch (e) {
            console.warn(e);
        }
        return this;
    }

    private async checkAndGetData(): Promise<this> {
        console.info('No data set!');

        return new Promise((resolve, reject) => {
            console.log('Fetching data');
            this.fetchData()
                .then(res => {
                    console.log(res);
                    // @ts-ignore
                    window.vmw = this.vmw_data = res.data;
                    console.log('Data fetched');
                    return this.vmw_data;
                })
                .catch(err => {
                    return err;
                });
        });
    }

    private async fetchData(): Promise<Object> {
        return await req
            .makeRequest('get', this.dataUrl)
            .then(res => {
                // @ts-ignore
                return JSON.parse(res);
            })
            .catch(err => {
                return err;
            });
    }

    get average(): string {
        return this._average!;
    }

    get target(): string {
        return this._target!;
    }

    get dataUrl(): string {
        return this._data_url;
    }

    set average(value: string) {
        this._average = value!;
    }

    set target(value: string) {
        this._target = value!;
    }

    set dataUrl(value: string) {
        this._data_url = value!;
    }
}

// @ts-ignore
// window.Kiyoh = new VMWKiyoh();
