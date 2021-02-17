import { r as registerInstance, h } from './index-79f6678c.js';
var FooterExample = /** @class */ (function () {
    function FooterExample(hostRef) {
        registerInstance(this, hostRef);
    }
    FooterExample.prototype.componentDidLoad = function () {
        document.querySelectorAll('.additionalLegalCopy').forEach(function (elem) {
            var legalParagraph = document.createElement('p');
            legalParagraph.innerHTML = elem.innerHTML;
            if (document.getElementById('secondary_legal'))
                document.getElementById('secondary_legal').appendChild(legalParagraph);
        });
    };
    FooterExample.prototype.render = function () {
        return [
            h("p2", { id: 'secondary_legal' }, " ")
        ];
    };
    return FooterExample;
}());
FooterExample.TAG_NAME = "legal-component";
export { FooterExample as legal_component };
