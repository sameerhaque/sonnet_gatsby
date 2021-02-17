import { Component, h } from "@stencil/core";
export class DropdownExample {
    render() {
        return [
            h("div", null,
                h("form", null,
                    h("div", { class: "form-row" },
                        h("div", { class: "col-sm-3 col-xs-12" },
                            h("snt-dropdown", { id: "insurance-type", placeholderText: "Please Select", labelText: "" },
                                h("snt-options", null,
                                    h("snt-item", { "data-key": "101", value: "One-O-One" }),
                                    h("snt-item", { "data-key": "102", value: "One-O-Two" }),
                                    h("snt-item", { "data-key": "103", value: "One-O-Three" }),
                                    h("snt-item", { "data-key": "104", value: "One-O-Four" }),
                                    h("snt-item", { "data-key": "105", value: "One-O-Five" }))))),
                    h("br", null),
                    h("div", { class: "row" },
                        h("div", null,
                            h("label", null, "Input One"),
                            h("br", null),
                            h("input", { type: "text" })),
                        h("div", null,
                            h("label", null, "Input Two"),
                            h("br", null),
                            h("input", { type: "text" })),
                        h("div", null,
                            h("select", null,
                                h("option", { value: "A", disabled: true }, "AAA"),
                                h("option", { value: "B" }, "BBB"),
                                h("option", { value: "C" }, "CCC"),
                                h("option", { value: "D", disabled: true }, "DDD"),
                                h("option", { value: "E" }, "EEE")))),
                    h("div", { class: "row" },
                        h("div", null,
                            h("input", { type: "submit", value: "submit" })))))
        ];
    }
    static get is() { return "dropdown-example"; }
}
DropdownExample.TAG_NAME = "dropdown-example";
