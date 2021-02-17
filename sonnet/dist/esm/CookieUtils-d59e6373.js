class CookieUtils {
    static parseDocumentCookie() {
        return document.cookie.split(';').map((cookieStr) => {
            return cookieStr.trim().split('=').map(decodeURIComponent);
        }).reduce((cookieObj, cookieKeyValPair) => {
            try {
                cookieObj[cookieKeyValPair[0]] = JSON.parse(cookieKeyValPair[1]);
            }
            catch (e) {
                cookieObj[cookieKeyValPair[0]] = cookieKeyValPair[1];
            }
            return cookieObj;
        }, {});
    }
    static readCookie(name) {
        const cookieObj = CookieUtils.parseDocumentCookie();
        return cookieObj[name];
    }
    ;
    static deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }
}

export { CookieUtils as C };
