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
import { newE2EPage } from '@stencil/core/testing';
import { ImageComponent } from "./image-component";
export function setupIntersectionObserverMock({ observe = () => null, unobserve = () => null } = {}) {
    class IntersectionObserver {
        constructor() {
            this.observe = observe;
            this.unobserve = unobserve;
        }
    }
    Object.defineProperty(window, 'IntersectionObserver', { writable: true, configurable: true, value: IntersectionObserver });
    Object.defineProperty(global, 'IntersectionObserver', { writable: true, configurable: true, value: IntersectionObserver });
}
describe('app', () => {
    it('builds', () => {
        expect(new ImageComponent()).toBeTruthy();
    });
    describe('Tags check', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            setupIntersectionObserverMock();
        }));
        it('returns the img tags as expected', () => __awaiter(void 0, void 0, void 0, function* () {
            const page = yield newSpecPage({
                components: [ImageComponent],
                html: `<snt-image id="3"
                img-alt="some text in here"
                data-src="../assets/img/3.jpg"
                src-image="../assets/img/loading.gif"
                sizes="100vw"
                width="1440"
                height="730">
              </snt-image>`
            });
            yield page.waitForChanges();
            function chooseAttribute(tag) {
                return page.root.querySelector('img').getAttribute(tag);
            }
            expect(chooseAttribute('alt')).toBe("some text in here");
            expect(chooseAttribute('src')).toBe("../assets/img/loading.gif");
            expect(chooseAttribute('width')).toBe("1440");
            expect(chooseAttribute('height')).toBe("730");
            expect(chooseAttribute('sizes')).toBe("100vw");
        }));
    });
});
describe('Loading check', () => {
    it('test the image have changed from datasrc to src', () => __awaiter(void 0, void 0, void 0, function* () {
        const page = yield newE2EPage({
            html: `<snt-image data-src="../assets/images/ins-tenant-desktop-hd-2x.jpg" src-image="../assets/images/ins-tenant-desktop-hd-2x.jpg"></snt-image>`
        });
        yield page.waitForChanges();
        setupIntersectionObserverMock();
        const image = yield page.find('img');
        const img = yield (image.getProperty('src'));
        expect(img).toContain('assets/images/ins-tenant-desktop-hd-2x.jpg');
    }));
});
