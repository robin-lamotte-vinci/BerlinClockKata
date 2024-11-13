import { BerlinClockConverter } from "../src/app.js";

describe("BerlinClockConverter class should implements the conversion time in a berlin clock representation\n", function () {
  const berlinClockConverter = new BerlinClockConverter();

  describe("convertSimpleMinutesRow method should return the conversion of a number into a single minutes row\n", function () {
    it("given 0 should return 'OOOO'", function () {
      const result = berlinClockConverter.convertSimpleMinutesRow(0);

      expect(result).toBe("OOOO");
    });

    it("given 1 should return 'YOOO'", function () {
      const result = berlinClockConverter.convertSimpleMinutesRow(1);

      expect(result).toBe("YOOO");
    });

    it("given 2 should return 'YYOO'", function () {
      const result = berlinClockConverter.convertSimpleMinutesRow(2);

      expect(result).toBe("YYOO");
    });

    it("given 3 should return 'YYYO'", function () {
      const result = berlinClockConverter.convertSimpleMinutesRow(3);

      expect(result).toBe("YYYO");
    });

    it("given 4 should return 'YYYY'", function () {
      const result = berlinClockConverter.convertSimpleMinutesRow(4);

      expect(result).toBe("YYYY");
    });

    it("given 5 should return 'OOOO'", function () {
        const result = berlinClockConverter.convertSimpleMinutesRow(5);
  
        expect(result).toBe("OOOO");
    });

    it("given 6 should return 'YOOO'", function () {
        const result = berlinClockConverter.convertSimpleMinutesRow(6);
  
        expect(result).toBe("YOOO");
    });

    it("given 7 should return 'YYOO'", function () {
        const result = berlinClockConverter.convertSimpleMinutesRow(7);
  
        expect(result).toBe("YYOO");
    });

    it("given 8 should return 'YYYO'", function () {
        const result = berlinClockConverter.convertSimpleMinutesRow(8);
  
        expect(result).toBe("YYYO");
    });

    it("given 9 should return 'YYYY'", function () {
        const result = berlinClockConverter.convertSimpleMinutesRow(9);
  
        expect(result).toBe("YYYY");
    });

    it("given 10 should return 'OOOO'", function () {
        const result = berlinClockConverter.convertSimpleMinutesRow(10);
  
        expect(result).toBe("OOOO");
    });
  });

  describe("convertFiveMinutesRow method should return the conversion of a number into a five minutes row\n", function () {
    it("given 0 should return 'OOOOOOOOOOO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(0);

      expect(result).toBe("OOOOOOOOOOO");
    });

    it("given 1 should return 'OOOOOOOOOOO'", function () {
        const result = berlinClockConverter.convertFiveMinutesRow(1);
  
        expect(result).toBe("OOOOOOOOOOO");
    });

    it("given 5 should return 'YOOOOOOOOOO'", function () {
        const result = berlinClockConverter.convertFiveMinutesRow(5);
  
        expect(result).toBe("YOOOOOOOOOO");
    });

    it("given 6 should return 'YOOOOOOOOOO'", function () {
        const result = berlinClockConverter.convertFiveMinutesRow(6);
  
        expect(result).toBe("YOOOOOOOOOO");
    });

    it("given 10 should return 'YYOOOOOOOOO'", function () {
        const result = berlinClockConverter.convertFiveMinutesRow(10);
  
        expect(result).toBe("YYOOOOOOOOO");
    });

    it("given 11 should return 'YYOOOOOOOOO'", function () {
        const result = berlinClockConverter.convertFiveMinutesRow(11);
  
        expect(result).toBe("YYOOOOOOOOO");
    });

    it("given 15 should return 'YYROOOOOOOO'", function () {
        const result = berlinClockConverter.convertFiveMinutesRow(15);
  
        expect(result).toBe("YYROOOOOOOO");
    });

    it("given 16 should return 'YYROOOOOOOO'", function () {
        const result = berlinClockConverter.convertFiveMinutesRow(16);
  
        expect(result).toBe("YYROOOOOOOO");
    });

    it("given 20 should return 'YYRYOOOOOOO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(20);

      expect(result).toBe("YYRYOOOOOOO");
    });

    it("given 21 should return 'YYRYOOOOOOO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(21);

      expect(result).toBe("YYRYOOOOOOO");
    });

    it("given 25 should return 'YYRYYOOOOOO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(25);

      expect(result).toBe("YYRYYOOOOOO");
    });

    it("given 26 should return 'YYRYYOOOOOO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(26);

      expect(result).toBe("YYRYYOOOOOO");
    });

    it("given 30 should return 'YYRYYROOOOO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(30);

      expect(result).toBe("YYRYYROOOOO");
    });

    it("given 31 should return 'YYRYYROOOOO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(31);

      expect(result).toBe("YYRYYROOOOO");
    });

    it("given 35 should return 'YYRYYRYOOOO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(35);

      expect(result).toBe("YYRYYRYOOOO");
    });

    it("given 36 should return 'YYRYYRYOOOO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(36);

      expect(result).toBe("YYRYYRYOOOO");
    });

    it("given 40 should return 'YYRYYRYYOOO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(40);

      expect(result).toBe("YYRYYRYYOOO");
    });

    it("given 41 should return 'YYRYYRYYOOO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(41);

      expect(result).toBe("YYRYYRYYOOO");
    });
    
    it("given 45 should return 'YYRYYRYYROO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(45);

      expect(result).toBe("YYRYYRYYROO");
    });

    it("given 46 should return 'YYRYYRYYROO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(46);

      expect(result).toBe("YYRYYRYYROO");
    });

    it("given 50 should return 'YYRYYRYYRYO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(50);

      expect(result).toBe("YYRYYRYYRYO");
    });

    it("given 51 should return 'YYRYYRYYRYO'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(51);

      expect(result).toBe("YYRYYRYYRYO");
    });

    it("given 55 should return 'YYRYYRYYRYY'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(55);

      expect(result).toBe("YYRYYRYYRYY");
    });

    it("given 56 should return 'YYRYYRYYRYY'", function () {
      const result = berlinClockConverter.convertFiveMinutesRow(56);

      expect(result).toBe("YYRYYRYYRYY");
    });

  });

  describe("convertSimpleHoursRow method should return the conversion of a number into a single hours row\n", function () {
    it("given 0 should return 'OOOO'", function () {
      const result = berlinClockConverter.convertSimpleHoursRow(0);

      expect(result).toBe("OOOO");
    });

    it("given 1 should return 'ROOO'", function () {
      const result = berlinClockConverter.convertSimpleHoursRow(1);

      expect(result).toBe("ROOO");
    });

    it("given 2 should return 'RROO'", function () {
      const result = berlinClockConverter.convertSimpleHoursRow(2);

      expect(result).toBe("RROO");
    });

    it("given 3 should return 'RRRO'", function () {
      const result = berlinClockConverter.convertSimpleHoursRow(3);

      expect(result).toBe("RRRO");
    });

    it("given 4 should return 'RRRR'", function () {
      const result = berlinClockConverter.convertSimpleHoursRow(4);

      expect(result).toBe("RRRR");
    });
    
    it("given 5 should return 'OOOO'", function () {
      const result = berlinClockConverter.convertSimpleHoursRow(5);

      expect(result).toBe("OOOO");
    });

    it("given 6 should return 'ROOO'", function () {
      const result = berlinClockConverter.convertSimpleHoursRow(6);

      expect(result).toBe("ROOO");
    });

    it("given 7 should return 'RROO'", function () {
      const result = berlinClockConverter.convertSimpleHoursRow(7);

      expect(result).toBe("RROO");
    });

    it("given 8 should return 'RRRO'", function () {
      const result = berlinClockConverter.convertSimpleHoursRow(8);

      expect(result).toBe("RRRO");
    });

    it("given 9 should return 'RRRR'", function () {
      const result = berlinClockConverter.convertSimpleHoursRow(9);

      expect(result).toBe("RRRR");
    });



  });

  describe("convertFiveHoursRow method should return the conversion of a number into a five hours row\n", function () {
    it("given 0 should return 'OOOO'", function () {
      const result = berlinClockConverter.convertFiveHoursRow(0);

      expect(result).toBe("OOOO");
    });

    it("given 1 should return 'OOOO'",function () {
      const result = berlinClockConverter.convertFiveHoursRow(1);

      expect(result).toBe("OOOO");
    });

    it("given 5 should return 'ROOO'", function () {
      const result = berlinClockConverter.convertFiveHoursRow(5);

      expect(result).toBe("ROOO");
    });

    it("given 6 should return 'ROOO'", function () {
      const result = berlinClockConverter.convertFiveHoursRow(6);

      expect(result).toBe("ROOO");
    });

    it("given 10 should return 'RROO'", function () {
      const result = berlinClockConverter.convertFiveHoursRow(10);

      expect(result).toBe("RROO");
    });

    it("given 11 should return 'RROO'", function () {
      const result = berlinClockConverter.convertFiveHoursRow(11);

      expect(result).toBe("RROO");
    });

    it("given 15 should return 'RRRO'", function () {
      const result = berlinClockConverter.convertFiveHoursRow(15);

      expect(result).toBe("RRRO");
    });

    it("given 16 should return 'RRRO'", function () {
      const result = berlinClockConverter.convertFiveHoursRow(16);

      expect(result).toBe("RRRO");
    });

    it("given 20 should return 'RRRR'", function () {
      const result = berlinClockConverter.convertFiveHoursRow(20);

      expect(result).toBe("RRRR");
    });

    it("given 21 should return 'RRRR'", function () {
      const result = berlinClockConverter.convertFiveHoursRow(21);

      expect(result).toBe("RRRR");
    });

  });

  describe("convertSecondsBeacon method should return the conversion of a number into a seconds Beacon\n", function () {

    it("given 0 should return 'R'", function () {
      const result = berlinClockConverter.convertSecondsBeacon(0);

      expect(result).toBe("R");
    });

    it("given 1 should return 'O'", function () {
      const result = berlinClockConverter.convertSecondsBeacon(1);

      expect(result).toBe("O");
    });

    it("given 2 should return 'R'", function () {
      const result = berlinClockConverter.convertSecondsBeacon(2);

      expect(result).toBe("R");
    });

    it("given 3 should return 'O'", function () {
      const result = berlinClockConverter.convertSecondsBeacon(3);

      expect(result).toBe("O");
    });

    it("given 4 should return 'R'", function () {
      const result = berlinClockConverter.convertSecondsBeacon(4);

      expect(result).toBe("R");
    });

  });


  describe("convertTimeToBerlinClock method should return the conversion of a time into a berlin clock representation\n", function () {

    it("given 00:00:00 should return '\nR\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO'", function () {
      const result = berlinClockConverter.convertTimeToBerlinClock("00:00:00");

      expect(result).toBe("\nR\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    });

    it("given 11:15:03 should return '\nO\nRROO\nROOO\nYYROOOOOOOO\nOOOO'", function () {
      const result = berlinClockConverter.convertTimeToBerlinClock("11:15:03");

      expect(result).toBe("\nO\nRROO\nROOO\nYYROOOOOOOO\nOOOO");
    });

    it("given invalid format return an exception", function () {
      expect(() => berlinClockConverter.convertTimeToBerlinClock("11:15")).toThrowError("Invalid time format. Expected format is hh:mm:ss");
    });

    it("given invalid hours return an exception", function () {
      expect(() => berlinClockConverter.convertTimeToBerlinClock("25:15:03")).toThrowError("Invalid hours. Expected value between 0 and 24");
    });

    it("given invalid minutes return an exception", function () {
      expect(() => berlinClockConverter.convertTimeToBerlinClock("11:60:03")).toThrowError("Invalid minutes. Expected value between 0 and 59");
    });

    it("given invalid seconds return an exception", function () {
      expect(() => berlinClockConverter.convertTimeToBerlinClock("11:15:60")).toThrowError("Invalid seconds. Expected value between 0 and 59");
    });




  });



});
