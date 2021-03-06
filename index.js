/**
 * Parses document.cookie string into an object (dictionary) by
 * splitting at ';' and '='.
 * @param  {string}     raw         Raw cookie string (optional, default: document.cookie)
 * @param  {function}   dataParser  A function to transform the cookie content (optional).
 * @return {Object}                 Parsed cookie data.
 */
export default function parseCookies (raw, dataParser) {
    // if empty string or undefined
    if (typeof raw === 'undefined' || (typeof raw === 'string' && raw === '')) {
        return {};
    }

    return raw.split(';').reduce(function (cookies, cookieString) {
        let cookiePair = cookieString.split('=');
        let cookieContent = cookiePair.length > 1 ? cookiePair[1].trim() : '';
        let cookieName = cookiePair[0].trim();

        if (typeof dataParser !== 'undefined') {
            cookieContent = dataParser(cookieContent);
        }

        cookies[cookieName] = cookieContent;

        return cookies;
    }, {});
}
