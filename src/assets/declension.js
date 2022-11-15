export function declension(number, words) {
  if (number > 100) number = number % 100;
    if (number <= 20 && number >= 10) return words[2];
    if (number > 20) number = number % 10;
    return number === 1 ? words[0] : number > 1 && number < 5 ? words[1] : words[2];
}
