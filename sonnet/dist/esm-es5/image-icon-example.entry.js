import { r as registerInstance, h, H as Host } from './index-79f6678c.js';
var ImageIconExample = /** @class */ (function () {
    function ImageIconExample(hostRef) {
        registerInstance(this, hostRef);
    }
    ImageIconExample.prototype.render = function () {
        return (h(Host, null, h("h2", null, "Centered Icon"), h("div", null, h("snt-image-icon", { properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "img-alt": "TEST", class: "center" })), h("h2", null, "Dark Fill"), h("div", { class: "dark-fill" }, h("snt-image-icon", { properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "img-alt": "TEST" })), h("h2", null, "Light Fill Icon"), h("div", { class: "light-fill" }, h("snt-image-icon", { properties: '{\r\n                            "smallIconUrl": "https://img.icons8.com/dotty/30/000000/homer-simpson--v2.png",\r\n                            "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                        }', "img-alt": "TEST" }))));
    };
    return ImageIconExample;
}());
export { ImageIconExample as image_icon_example };
