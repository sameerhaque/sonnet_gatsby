import { r as registerInstance, h } from './index-79f6678c.js';

const ResponsiveImagesExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("br", null), h("br", null), h("h2", null, "Responsive Image Example 1"), h("snt-two-column-feature", { imagePosition: 'left', titleString: "Image on the left", copyText: "Content on the right", imagePath: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", properties: '{\r\n                        "mobileImageUrl":"https://via.placeholder.com/468x60?text=Mobile",\r\n                        "tabletImageUrl":"https://via.placeholder.com/768x430?text=Tablet",\r\n                        "desktopImageUrl":"https://via.placeholder.com/1024x580?text=Desktop",\r\n                        "desktopHdTabletUrl":"https://via.placeholder.com/1440x800?text=Desktop+HD"\r\n                    }' }), h("br", null), h("br", null), h("h2", null, "Responsive Image Example 2"), h("snt-two-column-feature", { imagePosition: 'right', titleString: "Image on the right", copyText: "Content on the left", imagePath: "https://www.sonnet.ca/_Sonnet/images/page-specific/featured-blog/make-sure-youre-covered-tablet-1x.jpg", properties: '{\r\n                        "mobileImageUrl":"https://via.placeholder.com/468x60?text=Mobile",\r\n                        "tabletImageUrl":"https://via.placeholder.com/768x430?text=Tablet",\r\n                        "desktopImageUrl":"https://via.placeholder.com/1024x580?text=Desktop",\r\n                        "desktopHdTabletUrl":"https://via.placeholder.com/1440x800?text=Desktop+HD"\r\n                    }' })));
    }
};
ResponsiveImagesExample.TAG_NAME = "responsive-images-example";
ResponsiveImagesExample.style = "snt-data {display: none}";

export { ResponsiveImagesExample as responsive_images_example };
