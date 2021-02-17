'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const ImageIconExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("h2", null, "Centered Icon"), index.h("div", null, index.h("snt-image-icon", { properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "img-alt": "TEST", class: "center" })), index.h("h2", null, "Dark Fill"), index.h("div", { class: "dark-fill" }, index.h("snt-image-icon", { properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "img-alt": "TEST" })), index.h("h2", null, "Light Fill Icon"), index.h("div", { class: "light-fill" }, index.h("snt-image-icon", { properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "img-alt": "TEST" }))));
    }
};

exports.image_icon_example = ImageIconExample;
