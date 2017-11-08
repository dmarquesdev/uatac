function convertASCIIToDecimal(text, base = 10) {
    var hex = text.charCodeAt(0).toString(base);
    for(var i = 1; i < text.length; i++) {
        hex += ' ' + text.charCodeAt(i).toString(base);
    }
    return hex;
}

function convertASCIIToBase64(text) {
    return btoa(text);
}

function convertASCIIToURL(text) {
    return encodeURI(text);
}

function convertASCIIToROT13(text) {
    return text.replace(/[A-Za-z]/g, function(c) {
        return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26)
    });
}

function convertFromASCII() {
    var text = document.getElementById('ascii').value;
    document.getElementById('hex').value = convertASCIIToDecimal(text, 16);
    document.getElementById('bin').value = convertASCIIToDecimal(text, 2);
    document.getElementById('decimal').value = convertASCIIToDecimal(text);
    document.getElementById('base64').value = convertASCIIToBase64(text);
    document.getElementById('url').value = convertASCIIToURL(text);
    document.getElementById('rot13').value = convertASCIIToROT13(text);
}