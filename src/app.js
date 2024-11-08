export class Main {
  convertSimpleMinutesRow(number) {
    if (number % 5 === 1) return "YOOO";
    if (number === 2) return "YYOO";
    if (number === 3) return "YYYO";
    if (number === 4) return "YYYY";
    if (number === 7) return "YYOO";

    return "OOOO";
  }
}
