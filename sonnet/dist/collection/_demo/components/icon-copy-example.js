import { Component, h } from "@stencil/core";
export class IconCopyExample {
    render() {
        return [
            h("div", null,
                h("h1", null, "Icon Copy Component"),
                h("br", null),
                h("br", null),
                h("h2", null, "Icon Copy Link"),
                h("br", null),
                h("br", null),
                h("snt-multi-column-mixed", { "column-count": '{"extra-small": 1,"small": 1,"medium": 2,"large": 2,"extra-large": 2}' },
                    h("div", { class: "column" },
                        h("snt-icon-copy", { properties: '{\r\n                            "largeIconUrl": "https://t.ly/i2fU",\r\n                            "smallIconUrl": "https://t.ly/i2fU"\r\n                        }', "title-string": "I have a Sonnet account", "link-href": "https://www.sonnet.ca/#option-1" },
                            h("p", null, "Log in first, then start a chat. This way, we can talk about policy and account specifics."))),
                    h("div", { class: "column" },
                        h("snt-icon-copy", { properties: '{\r\n                                "largeIconUrl": "https://t.ly/9hiJ", \r\n                                "smallIconUrl": "https://t.ly/9hiJ"\r\n                            }', "title-string": "I have a general inquiry", "link-action-reference": "Action.logAction", "link-action-data": '{"test": 123}' },
                            h("p", null, "Ask us your general questions about quoting, insurance and more via chat or email. ")))),
                h("div", { class: "row" },
                    h("div", { class: "col-sm-12 col-md-6 col-lg-4" },
                        h("snt-icon-copy", { properties: '{\r\n                                "largeIconUrl": ""\r\n                            }', "title-string": "My Title" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))),
                h("br", null),
                h("h2", null, "Single Column"),
                h("br", null),
                h("br", null),
                h("div", { class: "row" },
                    h("div", { class: "col-sm-12 col-md-6 col-lg-4" },
                        h("snt-icon-copy", { properties: '{\r\n                                "largeIconUrl": ""\r\n                            }', "title-string": "My Title" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))),
                h("br", null),
                h("h2", null, "Single Column With Icon"),
                h("br", null),
                h("br", null),
                h("div", { class: "row" },
                    h("div", { class: "col-sm-12 col-md-6 col-lg-4" },
                        h("snt-icon-copy", { properties: '{\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                                "smallIconUrl": "https://img.icons8.com/dotty/45/000000/user2.png",\r\n                                "smallLogoUrl":"https://via.placeholder.com/230x60?text=Mobile",\r\n                                "mediumLogoUrl":"https://via.placeholder.com/294x60?text=Tablet",\r\n                                "largeLogoUrl":"https://via.placeholder.com/234x80?text=Desktop",\r\n                                "extraLargeLogoUrl":"https://via.placeholder.com/330x80?text=Desktop+HD"\r\n                            }', "title-string": "My Title" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum p.")))),
                h("br", null),
                h("br", null),
                h("h2", null, "Single Column With Icon Centered Text"),
                h("br", null),
                h("br", null),
                h("div", { class: "row" },
                    h("div", { class: "col-sm-12 col-md-6 col-lg-4" },
                        h("snt-icon-copy", { properties: '{\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                                "smallIconUrl": "https://img.icons8.com/dotty/45/000000/user2.png",\r\n                                "smallLogoUrl":"https://via.placeholder.com/230x60?text=Mobile",\r\n                                "mediumLogoUrl":"https://via.placeholder.com/294x60?text=Tablet",\r\n                                "largeLogoUrl":"https://via.placeholder.com/434x120?text=Desktop",\r\n                                "extraLargeLogoUrl":"https://via.placeholder.com/330x80?text=Desktop+HD"\r\n                            }', "style-classes": "center", logoIsSet: true, "title-string": "My Title" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum p.")))))
        ];
    }
    static get is() { return "icon-copy-example"; }
}
IconCopyExample.TAG_NAME = "icon-copy-example";
