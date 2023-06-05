function calcAverage(array) {
  const arrSum = array.reduce((prev, cur) => prev + cur, 0);

  return Math.floor(arrSum / array.length);
}

function getMin(array) {
  const sorted = array.sort((x, y) => x - y);

  return sorted[0];
}

function getMax(array) {
  const sorted = array.sort((x, y) => x - y);
  
  return sorted[array.length - 1];
}

function analyzeArray(array) {
  const stats = {
    average: calcAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length
  }

  return stats;
}

export default analyzeArray;