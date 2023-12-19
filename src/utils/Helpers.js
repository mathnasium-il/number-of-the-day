export function getWordForm(num) {
  const numString = num.toString();
  const digitArr = numString.split("");
  const intArr = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tensArr = [
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const placeValArr = ["Hundred", "Thousand", "Million", "Billion"];

  let unitDigits;
  let thousandDigits;
  let millionDigits;
  let billionDigits;

  let unitStr;
  let thousandStr;
  let millionStr;
  let billionStr;
  let result;

  function twoDigitHelper(n) {
    if (n < 20) return intArr[n];
    const digitArr = n.toString().split("");
    const [tens, ones] = [Number(digitArr[0]), Number(digitArr[1])];
    const [tensWord, onesWord] = [tensArr[tens - 2], intArr[ones]];
    return ones === 0 ? tensWord : `${tensWord}-${onesWord}`;
  }
  function threeDigitHelper(n) {
    const digitArray = n.toString().split("");
    const hunsPlace = digitArray[0];
    const tensPlace = digitArray[1];
    const onesPlace = digitArray[2];

    if (digitArray.length === 1) return intArr[n];
    else if (digitArray.length === 2) return twoDigitHelper(n);

    const hundredStr = `${intArr[Number(hunsPlace)]} ${placeValArr[0]}`;
    const restOfStr =
      Number(tensPlace + onesPlace) === 0
        ? ""
        : twoDigitHelper(Number(tensPlace + onesPlace));
    return `${hundredStr} ${restOfStr}`.trim();
  }

  if (num < 100) return twoDigitHelper(num);

  switch (true) {
    case digitArr.length === 3:
      result = threeDigitHelper(num);
      break;
    case digitArr.length >= 4 && digitArr.length <= 6:
      unitDigits = Number(
        numString.substring(numString.length - 3, numString.length)
      );
      thousandDigits = Number(numString.substring(0, numString.length - 3));

      unitStr = threeDigitHelper(unitDigits);
      thousandStr = threeDigitHelper(thousandDigits);

      result = `${thousandStr} Thousand, ${unitStr}`;
      break;
    case digitArr.length >= 7 && digitArr.length <= 9:
      unitDigits = Number(
        numString.substring(numString.length - 3, numString.length)
      );
      thousandDigits = Number(
        numString.substring(numString.length - 6, numString.length - 3)
      );
      millionDigits = Number(numString.substring(0, numString.length - 6));

      unitStr = threeDigitHelper(unitDigits);
      thousandStr = threeDigitHelper(thousandDigits);
      millionStr = threeDigitHelper(millionDigits);

      result = `${millionStr} Million, ${thousandStr} Thousand, ${unitStr}`;
      break;
    case digitArr.length >= 10 && digitArr.length <= 12:
      unitDigits = Number(
        numString.substring(numString.length - 3, numString.length)
      );
      thousandDigits = Number(
        numString.substring(numString.length - 6, numString.length - 3)
      );
      millionDigits = Number(
        numString.substring(numString.length - 9, numString.length - 6)
      );
      billionDigits = Number(numString.substring(0, numString.length - 9));

      unitStr = threeDigitHelper(unitDigits);
      thousandStr = threeDigitHelper(thousandDigits);
      millionStr = threeDigitHelper(millionDigits);
      billionStr = threeDigitHelper(billionDigits);

      result = `${billionStr} Billion, ${millionStr} Million, ${thousandStr} Thousand, ${unitStr}`;
      break;
    default:
      result = "";
  }

  return result;
}

export function getExpandedForm(num) {
  const digitArr = num.toString().split("");
  const placeValArr = [];

  function isOnlyZeros(str) {
    const arr = str.split("");
    for (const el of arr) {
      if (el !== "0") return false;
    }
    return true;
  }

  for (let i = 0; i < digitArr.length; i++) {
    const digit = digitArr[i];
    const placeVal = `${digit}${Array(digitArr.length - (i + 1))
      .fill("0")
      .join("")}`;

    if (!isOnlyZeros(placeVal)) placeValArr.push(placeVal);
  }
  return placeValArr.join(" + ");
}

export function getFactors(num) {
  const result = [];
  if (num <= 0) return num;
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      const factors = i === num / i ? [i] : [i, num / i];
      result.push(...factors); // Ensures perfect squares are only added to the array once.
    }
  }
  return result.sort((a, b) => a - b).join(", ");
}

export function getPrimeFactorization(num) {
  const primeFactorsMap = new Map();
  const primeFactorsArr = [];

  if (num < 2) return [];
  function getPrimeFactors(num, factor = 2) {
    if (num === 1) return "";
    if (num % factor === 0)
      return `${factor} ${getPrimeFactors(num / factor, factor)}`.trim();
    else if (num === factor)
      return `${factor} ${getPrimeFactors(num / factor, factor)}`.trim();
    else return getPrimeFactors(num, factor + 1);
  }

  const repeatingPrimeFactors = getPrimeFactors(num).split(" ");
  for (const factor of repeatingPrimeFactors) {
    if (!primeFactorsMap.has(factor)) {
      primeFactorsMap.set(factor, 1);
    } else {
      primeFactorsMap.set(factor, primeFactorsMap.get(factor) + 1);
    }
  }
  for (const [key, val] of primeFactorsMap) primeFactorsArr.push([key, val]);
  return primeFactorsArr;
}
