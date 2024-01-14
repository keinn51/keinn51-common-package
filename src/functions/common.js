function add(a, b) {
  return a + b;
}

function stringToBase64(string) {
  const base64String = btoa(string);
  return base64String;
}

function stringToHex(string) {
  let hexString = "";
  for (let i = 0; i < string.length; i++) {
    const hex = string.charCodeAt(i).toString(16);
    hexString += hex;
  }
  return hexString;
}

function hexToString(hexString) {
  let string = "";
  for (let i = 0; i < hexString.length; i += 2) {
    const hex = hexString.substr(i, 2);
    const charCode = parseInt(hex, 16);
    string += String.fromCharCode(charCode);
  }
  return string;
}

function base64ToString(base64String) {
  const string = atob(base64String);
  return string;
}

module.exports = {
  add,
  stringToBase64,
  stringToHex,
  hexToString,
  base64ToString,
};
