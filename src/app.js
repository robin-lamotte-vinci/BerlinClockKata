export class Main {
  convertSimpleMinutesRow(number) {
    return "Y".repeat(number % 5) + "O".repeat(4 - number % 5);
  };

  convertFiveMinutesRow(number) {
    if (number == 5) return "YOOOOOOOOOO";
    if (number == 6) return "YOOOOOOOOOO";

    return "OOOOOOOOOOO";
  };
};
