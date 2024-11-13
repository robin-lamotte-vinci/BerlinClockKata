export class BerlinClockConverter {

  convertTimeToBerlinClock(time) {
    let [hours, minutes, seconds] = time.split(":");

    if (!/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(time)) {
      throw new Error("Invalid time format. Expected format is hh:mm:ss");
    }

    hours = parseInt(hours);
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    if (hours < 0 || hours > 24) {
      throw new Error("Invalid hours. Expected value between 0 and 24");
    }
    if (minutes < 0 || minutes > 59) {
      throw new Error("Invalid minutes. Expected value between 0 and 59");
    }
    if (seconds < 0 || seconds > 59) {
      throw new Error("Invalid seconds. Expected value between 0 and 59");
    }

    const simpleMinutesRow = this.convertSimpleMinutesRow(minutes);
    const fiveMinutesRow = this.convertFiveMinutesRow(minutes);
    const simpleHoursRow = this.convertSimpleHoursRow(hours);
    const fiveHoursRow = this.convertFiveHoursRow(hours);
    const secondsBeacon = this.convertSecondsBeacon(seconds);

    return `\n${secondsBeacon}\n${fiveHoursRow}\n${simpleHoursRow}\n${fiveMinutesRow}\n${simpleMinutesRow}`;
  };





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
  };

  #getTurnedOnLightsForSimpleHours(hours) {
    const numberOfTurnedOnLights = hours % 5;
    const turnedOnLights = "R".repeat(numberOfTurnedOnLights);

    return turnedOnLights;
  };

  convertFiveHoursRow(hours){
    const turnedOnLights = this.#getTurnedOnLightsForFiveHours(hours);
    const turnedOffLights = this.#getTurnedOffLightsForFiveHours(hours);

    return turnedOnLights + turnedOffLights;

  };


  #getTurnedOffLightsForFiveHours(hours) {
    const numberOfTurnedOffLights = 4 - Math.floor(hours / 5);
    const turnedOffLights = "O".repeat(numberOfTurnedOffLights);

    return turnedOffLights;
  };

  #getTurnedOnLightsForFiveHours(hours) {
    const numberOfTurnedOnLights = Math.floor(hours / 5);
    const turnedOnLights = "R".repeat(numberOfTurnedOnLights);

    return turnedOnLights;
  };


  convertSecondsBeacon(seconds){
    if(seconds % 2 != 0) return "O";
    
    return "R";
  };

};
