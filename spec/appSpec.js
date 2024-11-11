import { BerlinClockConverter } from "../src/app.js";

describe("BerlinClockConverter class should implements the conversion time in a berlin clock representation\n", function () {
  const berlinClockConverter = new BerlinClockConverter();

  describe("convertSingleMinutesRow method should return the conversion of a number into a single minutes row\n", function () {
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

  });
});
