import { r as registerInstance, h } from './index-79f6678c.js';

const FooterExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            h("p2", { id: 'secondary_legal' }, " ")
        ];
    }
};
FooterExample.TAG_NAME = "legal-component";

export { FooterExample as legal_component };
