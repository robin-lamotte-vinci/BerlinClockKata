export class Main {
  convertSimpleMinutesRow(number) {
    return "Y".repeat(number % 5) + "O".repeat(4 - number % 5);
  }
}
