// import { Vindmijndata } from './app/Vindmijndata'

module Vindmijnwijn {

    interface Vindmijndata {
        total_reviews?: string
        total_score?: string
        [total_score: string] : string | undefined;
    }
    
    class VMWKiyoh {
    
        private _data_url: string = '';
    
        private _target: string | null = null;
    
        private _average: string | null = null;
    
        private vmw_data: Vindmijndata = {};
    
        constructor() {
            
        }
    
        public setTarget(target: string): this {
            this._target = target;
            return this;
        }
    
        public sendData(key: string) {
            if( !this.vmw_data ) { console.error("No data set yet.") }
            if( !this.target ) { console.error("No target set.") }
    
            // @ts-ignore
            this.vmw_data = window.vmw;
    
            try {
                document.querySelector(this.target!)!.innerHTML = this.vmw_data![key]!;
            } catch (e) { console.warn(e) }
        }
    
        public liveData(): this {
            this._data_url = `https://vindmijnwijn.nl/wp-admin/admin-post.php?action=fetch_kiyoh`;
            return this;
        }
    
        public testData(): this {
            this._data_url = `https://vindmijnwijn.nl/vmw_new_staging/wp-admin/admin-post.php?action=fetch_kiyoh`;
            return this;
        }
    
        async parseData(): Promise<this> {
            try {
                await this.checkAndGetData();
            } catch (e) { console.warn(e); }
            return this;
        }
    
        private async checkAndGetData(): Promise<this> {
            console.info("No data set!")
            try{
                console.info("Fetching data")
                await this.fetchData()
                // @ts-ignore
                console.info('Data set');
                return this;
            } catch (e) {
                console.warn(e);
                return this;
            }
        }
    
        private async fetchData() {
            const xhr = new XMLHttpRequest();
    
            xhr.open('get', this.dataUrl);
    
            try {
                xhr.onreadystatechange = await this.xhrReady();
                await xhr.send();
            } catch (e) { console.warn(e); }
        }
    
        private async xhrReady() {
            // @ts-ignore
            if( this.readyState == 4 && this.status == 200) {
                // @ts-ignore
                window.vmw = {}
                try {
                    // @ts-ignore
                    window.vmw = await JSON.parse(this.response).data;
                    // @ts-ignore
                    return JSON.parse(this.response).data;
                } catch (e) { console.warn(e) }
            }
        }
    
        get average(): string { return this._average!; }
        
        get target(): string { return this._target!; }
        
        get dataUrl(): string { return this._data_url; }
    
        set average(value: string) { this._average = value!; }
    
        set target(value: string) { this._target = value!; }
    
        set dataUrl(value: string) { this._data_url = value!; }
    }

    // @ts-ignore
    window.Kiyoh = new VMWKiyoh();
}
