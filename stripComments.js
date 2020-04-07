function solution(input, markers) {
    const arr = input.split("\n");
    const newArr = [];
    for (let str of arr) {
      let newStr = "";
      for (let character of str) {
        if (markers.includes(character)) {
          newStr = newStr.trim()
          newArr.push(newStr);
          break;
        } else {
        newStr += character;
      }
      newStr = newStr.trim();
      newArr.push(newStr);
    }
}
    return newArr.join('\n');
}