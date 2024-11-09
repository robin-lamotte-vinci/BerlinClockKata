export class BerlinClockConverter {
  convertSimpleMinutesRow(number) {
    return this.#getYellowLightsForSimpleMinutes(number) + this.getTurnedOffLightsForSimpleMinutes(number);
  };

  #getYellowLightsForSimpleMinutes(number) {
    return "Y".repeat(number % 5);
  };

  getTurnedOffLightsForSimpleMinutes(number) {
    return "O".repeat(4 - (number % 5));
  };

  convertFiveMinutesRow(number) {
    if (number >= 15) return "YYROOOOOOOO";
    if (number >= 10) return "YYOOOOOOOOO";
    if (number >= 5) return "YOOOOOOOOOO";

    return "OOOOOOOOOOO";
  };
};
