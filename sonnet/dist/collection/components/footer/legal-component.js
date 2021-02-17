import { Component, h } from "@stencil/core";
export class FooterExample {
    componentDidLoad() {
        document.querySelectorAll('.additionalLegalCopy').forEach(function (elem) {
            let legalParagraph = document.createElement('p');
            legalParagraph.innerHTML = elem.innerHTML;
            if (document.getElementById('secondary_legal'))
                document.getElementById('secondary_legal').appendChild(legalParagraph);
        });
    }
    render() {
        return [
            h("p2", { id: 'secondary_legal' }, " ")
        ];
    }
    static get is() { return "legal-component"; }
}
FooterExample.TAG_NAME = "legal-component";
