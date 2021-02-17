export class Utils {
    static addScript(src, callbackFn) {
        const scriptTag = document.createElement('script');
        scriptTag.setAttribute('src', src);
        document.body.appendChild(scriptTag);
        if (callbackFn && typeof (callbackFn) == 'function') {
            scriptTag.onload = (evt) => callbackFn(evt);
        }
    }
}
