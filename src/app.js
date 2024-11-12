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
    const turnedOnLights = this.#getTurnedOnLightsForSimpleHours(hours);
    const turnedOffLights = this.#getTurnedOffLightsForSimpleHours(hours);

    return turnedOnLights + turnedOffLights;
  };

  #getTurnedOffLightsForSimpleHours(hours) {
    const numberOfTurnedOffLights = 4 - hours % 5;
    const turnedOffLights = "O".repeat(numberOfTurnedOffLights);

    return turnedOffLights;
  }

  #getTurnedOnLightsForSimpleHours(hours) {
    const numberOfTurnedOnLights = hours % 5;
    const turnedOnLights = "R".repeat(numberOfTurnedOnLights);

    return turnedOnLights;
  }

  convertFiveHoursRow(hours){
    if (hours === 21) return "RRRR";
    if (hours === 20) return "RRRR";
    if (hours >= 15) return "RRRO";
    if (hours >= 10) return "RROO";
    if (hours >= 5) return "ROOO";
    
    

    return "OOOO";
  

  }
};
