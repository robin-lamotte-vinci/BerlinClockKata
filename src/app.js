export class Main {
  convertSimpleMinutesRow(number) {
    return "Y".repeat(number % 5) + "O".repeat(4 - number % 5);
  };

  convertFiveMinutesRow(number) {
    if (number == 15) return "YYROOOOOOOO";
    if (number == 16) return "YYROOOOOOOO";
    if (number >= 10) return "YYOOOOOOOOO";
    if (number >= 5) return "YOOOOOOOOOO";

    return "OOOOOOOOOOO";
  };
};
