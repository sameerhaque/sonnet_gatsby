var CookieUtils = /** @class */ (function () {
    function CookieUtils() {
    }
    CookieUtils.parseDocumentCookie = function () {
        return document.cookie.split(';').map(function (cookieStr) {
            return cookieStr.trim().split('=').map(decodeURIComponent);
        }).reduce(function (cookieObj, cookieKeyValPair) {
            try {
                cookieObj[cookieKeyValPair[0]] = JSON.parse(cookieKeyValPair[1]);
            }
            catch (e) {
                cookieObj[cookieKeyValPair[0]] = cookieKeyValPair[1];
            }
            return cookieObj;
        }, {});
    };
    CookieUtils.readCookie = function (name) {
        var cookieObj = CookieUtils.parseDocumentCookie();
        return cookieObj[name];
    };
    ;
    CookieUtils.deleteCookie = function (name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    };
    return CookieUtils;
}());
export { CookieUtils as C };
