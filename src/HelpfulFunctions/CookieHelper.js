export const RetrieveCookie = (tokenName) => {
    var tokenString;

    var name = `${tokenName}=`;
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            tokenString = c.substring(name.length, c.length);
        }
    }
    return tokenString;
}

export const DeleteCookie = (name, path) => {
    document.cookie = `${name}=;path=${path};expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}
