# vmw-kiyoh-wrapper
[![](https://img.shields.io/npm/dt/vmw-kiyoh-wrapper.svg?style=for-the-badge)](www.npmjs.com/package/vmw-kiyoh-wrapper)
[![](https://img.shields.io/bundlephobia/min/vmw-kiyoh-wrapper.svg?style=for-the-badge)](www.npmjs.com/package/vmw-kiyoh-wrapper)
## Index


## Installation
Install via npm or yarn

```sh
npm i vmw-kiyoh-wrapper
```

## usage

Example 1:

Set the review score in an element.

```js
let VmwKiyoh = require('vmw-kiyoh-wrapper').VMWKiyoh;

Kiyoh = new VmwKiyoh();

Kiyoh
    .liveData()
    .parseData()
        .then( () => {
            Kiyoh.target = '#selector'
            Kiyoh.sendData('total_score')
        })
```
