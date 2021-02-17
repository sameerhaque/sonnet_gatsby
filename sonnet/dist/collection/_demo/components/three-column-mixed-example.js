import { Component, h } from "@stencil/core";
export class ThreeColumnExample {
    render() {
        return (h("div", null,
            h("br", null),
            h("h1", null, "Three column Mixed"),
            h("div", { class: "center" },
                h("snt-three-column-mixed", null,
                    h("div", { class: "column" },
                        h("snt-icon-copy", { properties: '{\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                            }', "title-string": "My Title" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"))),
                    h("div", { class: "column" },
                        h("snt-icon-copy", { properties: '{\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                            }', "title-string": "My Title" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
                            h("snt-action-button", { styleClasses: "cta theme-default", "action-reference": "logAction", "link-title": "Default CTA" }))),
                    h("div", { class: "column" },
                        h("snt-image-column", { "image-src": "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg" })),
                    h("div", { class: "column" },
                        h("snt-icon-copy", { properties: '{\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png"\r\n                            }', "title-string": "My Title" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
                            h("snt-action-button", { styleClasses: "cta theme-default", "action-reference": "logAction", "link-title": "Default CTA" }))),
                    h("div", { class: "column" },
                        h("snt-image-column", { "image-src": "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg" })),
                    h("div", { class: "column" },
                        h("snt-icon-copy", { properties: '{\r\n                                "largeIconUrl": "https://img.icons8.com/dotty/45/000000/user.png",\r\n                                "smallIconUrl": "https://img.icons8.com/dotty/45/000000/user2.png",\r\n                                "smallLogoUrl":"https://via.placeholder.com/230x60?text=Mobile",\r\n                                "mediumLogoUrl":"https://via.placeholder.com/294x60?text=Tablet",\r\n                                "largeLogoUrl":"https://via.placeholder.com/434x120?text=Desktop",\r\n                                "extraLargeLogoUrl":"https://via.placeholder.com/330x80?text=Desktop+HD"\r\n                            }', "style-classes": "center", logoIsSet: true, "title-string": "My Title" },
                            h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum p.")))))));
    }
    static get is() { return "three-column-mixed-example"; }
}
ThreeColumnExample.TAG_NAME = "three-column-mixed-example";
