'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const FooterExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
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
            index.h("p2", { id: 'secondary_legal' }, " ")
        ];
    }
};
FooterExample.TAG_NAME = "legal-component";

exports.legal_component = FooterExample;
