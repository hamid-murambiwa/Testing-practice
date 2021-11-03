function stringLength(string) {
    if (string.length <= 1 || string.length > 10) {
        throw new Error('Check fail: Please enter a valid string');
    } else {
        return string.length;
    }
}

function reverseString(string) {
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) { 
        newString += string[i];
    }

    return newString;
}

function upperCase(str) {
    let arp;
    arp = str[0].toUpperCase();
    const newArr = str.split("");
    newArr.splice(0, 1, arp);
    str = newArr.join('');
    return str;
}

module.exports = {
    length: stringLength,
    reverse: reverseString,
    upperCase: upperCase,
};