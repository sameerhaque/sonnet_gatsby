'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const FAQBlockExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var faqBlocks = [
            { "titleText": "Quoting", "bodyText": "Step-by-step help and troubleshooting tips for home and auto quotes.", "articlesCount": "32 articles" },
            { "titleText": "Purchasing", "bodyText": "Buying your property, from start to finish.", "articlesCount": "12 articles" },
            { "titleText": "Account", "bodyText": "Set up, login and navigate your account", "articlesCount": "23 articles" },
            { "titleText": "Policy & coverages", "bodyText": "Learn about documents, what we do and don't cover, making changes", "articlesCount": "45 articles" },
            { "titleText": "Payments", "bodyText": "How to pay, when to pay and what to do if you miss your payment.", "articlesCount": "15 articles" },
            { "titleText": "Claims", "bodyText": "What you are covered for and what to do before during and after your claim.", "articlesCount": "03 articles" },
            { "titleText": "Quoting", "bodyText": "Step-by-step help and troubleshooting tips for home and auto quotes.", "articlesCount": "29 articles" },
            { "titleText": "Quoting", "bodyText": "Step-by-step help and troubleshooting tips for home and auto quotes.", "articlesCount": "11 articles" }
        ];
        console.log(faqBlocks);
        return [
            index.h("snt-faq-block", { "title-text": 'Quoting', "body-text": 'Step-by-step help and troubleshooting tips for home and auto quotes.', "articles-count": '32 articles' }),
            index.h("div", null, index.h("br", null), index.h("div", null, "This is FAQ block list"), index.h("br", null), index.h("snt-faq-block-list", { faqBlockList: faqBlocks }))
        ];
    }
};

exports.faq_block_example = FAQBlockExample;
