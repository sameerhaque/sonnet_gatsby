import { Component, h } from "@stencil/core";
export class ImageExample {
    render() {
        return (h("snt-image", { id: "img1", "data-src": "https://www.sonnet.ca/getmedia/836231a8-e675-4f19-94bc-34a88fd9ab2c/10-10-19_travellers-blues-min.jpg.aspx?width=950&height=634&ext=.jpg", "src-image": "https://www.sonnet.ca/getmedia/836231a8-e675-4f19-94bc-34a88fd9ab2c/10-10-19_travellers-blues-min.jpg.aspx?width=950&height=634&ext=.jpg", "img-alt": "TEST", "style-classes": "hiddenOnMobile center", "data-align": "center", "data-width": "50%", class: "hydrated" }));
    }
    static get is() { return "image-example"; }
}
