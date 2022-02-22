module.exports = function check(str, bracketsConfig) {
  const bracket = {};
  const bracketsOpen = [];
  const massiv = [];

  bracketsConfig.forEach((element) => {
    bracket[element[1]] = element[0];
    bracketsOpen.push(element[0]);
  });

  for (let i = 0; i < str.length; i++) {
    let currentElement = str[i];
    let isSame =
      bracket.hasOwnProperty(currentElement) &&
      bracket[currentElement] === currentElement;

    if (bracketsOpen.includes(currentElement)) {
      if (isSame) {
        if (massiv.includes(currentElement)) {
          if (massiv[massiv.length - 1] === currentElement) {
            massiv.pop();
            continue;
          } else {
            return false;
          }
        }
      }

      massiv.push(currentElement);
    } else {
      if (massiv.length === 0) return false;

      let massivTopSymbol = massiv[massiv.length - 1];

      if (bracket[currentElement] === massivTopSymbol) {
        massiv.pop();
      } else {
        return false;
      }
    }
  }

  return massiv.length === 0;
};
