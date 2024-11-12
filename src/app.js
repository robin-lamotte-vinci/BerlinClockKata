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

  convertFiveMinutesRow(minutes) {
    return this.#getTurnedOnLightsForFiveMinutes(minutes) + this.#getTurnedOffLightsForFiveMinutes(minutes);
  };

  #getTurnedOnLightsForFiveMinutes(minutes) {
    const numberOfTurnedOnLights = Math.floor(minutes / 5);

    let turnedOnLights = "";
    for (let i = 1; i <= numberOfTurnedOnLights; i++) {
      turnedOnLights += (i%3 === 0) ? "R" : "Y";
    }
    return turnedOnLights;
  };  
  
  #getTurnedOffLightsForFiveMinutes(minutes) {
    const numberOfTurnedOffLights = 11 - Math.floor(minutes / 5);

    return "O".repeat(numberOfTurnedOffLights);
  };

  convertSimpleHoursRow(hours) {
    const numberOfTurnedOnLights = hours % 5;
    const turnedOnLights = "R".repeat(numberOfTurnedOnLights);

    if (hours % 5 == 1) return turnedOnLights + "OOO";
    if (hours % 5 == 2) return turnedOnLights + "OO";
    if (hours % 5 == 3) return turnedOnLights + "O";
    if (hours % 5 == 4) return turnedOnLights +  "";
   
    return "OOOO";
  };
};
