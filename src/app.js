export class BerlinClockConverter {
  convertSimpleMinutesRow(minutes) {
    return this.#getYellowLightsForSimpleMinutes(minutes) + this.#getTurnedOffLightsForSimpleMinutes(minutes);
  };

  #getYellowLightsForSimpleMinutes(minutes) {
    return "Y".repeat(minutes % 5);
  };

  #getTurnedOffLightsForSimpleMinutes(minutes) {
    return "O".repeat(4 - (minutes % 5));
  };

  convertFiveMinutesRow(number) {
    return this.#getTurnedOnLightsForFiveMinutes(number) + this.#getTurnedOffLightsForFiveMinutes(number);
  };

  #getTurnedOnLightsForFiveMinutes(number) {
    const numberOfTurnedOnLights = Math.floor(number / 5);

    let turnedOnLights = "";
    for (let i = 1; i <= numberOfTurnedOnLights; i++) {
      turnedOnLights += (i%3 === 0) ? "R" : "Y";
    }
    return turnedOnLights;
  };  
  
  #getTurnedOffLightsForFiveMinutes(number) {
    const numberOfTurnedOffLights = 11 - Math.floor(number / 5);

    return "O".repeat(numberOfTurnedOffLights);
  };

  convertSimpleHoursRow(number) {

    return "OOOO";
  };
};
