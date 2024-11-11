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
    const turnedOnLights = this.getTurnedOnLightsForFiveMinutes(number);

    const numberOfTurnedOffLights = 11 - Math.floor(number / 5);
    const turnedOffLights = "O".repeat(numberOfTurnedOffLights);

    return turnedOnLights + turnedOffLights;
  };


  getTurnedOnLightsForFiveMinutes(number) {
    const numberOfTurnedOnLights = Math.floor(number / 5);
    let turnedOnLights = "";
    for (let i = 1; i <= numberOfTurnedOnLights; i++) {
      if (i % 3 === 0) {
        turnedOnLights += "R";
      } else {
        turnedOnLights += "Y";
      }
    }
    return turnedOnLights;
  }
};
