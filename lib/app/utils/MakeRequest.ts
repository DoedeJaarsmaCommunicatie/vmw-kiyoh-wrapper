export function makeRequest(method: string, url: string) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText,
                });
            }
        };

        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: xhr.statusText,
            });
        };

        xhr.send();
    });
}
