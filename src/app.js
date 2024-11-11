export class BerlinClockConverter {
  convertSimpleMinutesRow(number) {
    return this.#getYellowLightsForSimpleMinutes(number) + this.#getTurnedOffLightsForSimpleMinutes(number);
  };

  #getYellowLightsForSimpleMinutes(number) {
    return "Y".repeat(number % 5);
  };

  #getTurnedOffLightsForSimpleMinutes(number) {
    return "O".repeat(4 - (number % 5));
  };

  convertFiveMinutesRow(number) {
    return this.#getTurnedOnLightsForFiveMinutes(number) + this.getTurnedOffLightsForFiveMinutes(number);
  };

  #getTurnedOnLightsForFiveMinutes(number) {
    const numberOfTurnedOnLights = Math.floor(number / 5);

    let turnedOnLights = "";
    for (let i = 1; i <= numberOfTurnedOnLights; i++) {
      turnedOnLights += (i%3 === 0) ? "R" : "Y";
    }
    return turnedOnLights;
  };  
  
  getTurnedOffLightsForFiveMinutes(number) {
    const numberOfTurnedOffLights = 11 - Math.floor(number / 5);

    return "O".repeat(numberOfTurnedOffLights);
  };
};
