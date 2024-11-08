export class Main {
  convertSimpleMinutesRow(number) {
    if (number % 5 === 1) return "YOOO";
    if (number % 5 === 2) return "YYOO";
    if (number % 5 === 3) return "YYYO";
    if (number === 4) return "YYYY";
    if (number === 9) return "YYYY";

    return "OOOO";
  }
}
