var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { newSpecPage } from "@stencil/core/testing";
import { BreadcrumbComponent } from './breadcrumb-component';
describe('Breadcrumb component', () => {
    const trail = '[ { "title": "test", "href": "/test" },{ "title": "miguel", "href": "/test/miguel" } ]';
    describe('DOM', () => {
        it('contains 2 items', () => __awaiter(void 0, void 0, void 0, function* () {
            const specPageOptions = {
                components: [BreadcrumbComponent],
                html: `<snt-breadcrumb trail='${trail}'></snt-breadcrumb>`
            };
            const page = yield newSpecPage(specPageOptions);
            const listItems = page.root.querySelectorAll('li');
            expect(listItems.length).toEqual(2);
        }));
    });
});
