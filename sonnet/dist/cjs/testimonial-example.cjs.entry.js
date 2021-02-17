'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const TestimonialExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("h1", null, "Group Components"), index.h("br", null), index.h("testimonials-group", { class: "neutral-fill", "group-id": "group-carousel", "group-headline": "Testimonial" }, index.h("testimonial-quote", { "container-id": "test1", from: "Sameer S. from Toronto, Ontario" }, "We switched to Sonnet last year after 20 years of loyalty to another insurance company\u2026 it\u2019s so easy to make changes to our policy and someone is always at the ready to answer any of our questions. Great job Sonnet!"), index.h("testimonial-quote", { "container-id": "test2", from: "Sameer S. from Toronto, Ontario" }, "Second We switched to Sonnet last year after 20 years of loyalty to another insurance company\u2026 it\u2019s so easy to make changes to our policy and someone is always at the ready to answer any of our questions. Great job Sonnet!"), index.h("testimonial-quote", { "container-id": "test3", from: "Sameer S. from Toronto, Ontario" }, "Third Testimonials"), index.h("testimonial-quote", { "container-id": "test4", from: "Sameer S. from Toronto, Ontario" }, "Fourth Testimonials")), index.h("br", null), index.h("br", null), index.h("h1", null, "Single Component"), index.h("br", null), index.h("testimonials-group", { class: "neutral-fill", "group-id": "group-carousel", "group-headline": "Testimonial" }, index.h("testimonial-quote", { "container-id": "test4", from: "Sameer S. from Toronto, Ontario" }, "Fourth Testimonials"))));
    }
};
TestimonialExample.TAG_NAME = "testimonial-example";

exports.testimonial_example = TestimonialExample;
