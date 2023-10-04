export const formatNumberWithCommas = (number: number): string => {
  // Convert the number to a string and split it into integer and decimal parts
  const [integerPart, decimalPart] = number.toFixed(2).split(".");

  // Add commas to the integer part
  const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Combine the integer and decimal parts with a period (.) for the decimal separator
  return integerWithCommas + "." + decimalPart;
};
