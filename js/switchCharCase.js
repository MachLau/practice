// 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc'
function transCase(str) {
  str.replace(/[a-zA-Z]/g, function (a) {
    return /[a-z]/.test(a) ? a.toUpperCase() : a.toLowerCase();
  });
}
