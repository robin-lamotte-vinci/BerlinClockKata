import { Main } from "../src/app.js";

describe("Main class should implements a berlin clock\n", function () {
  const main = new Main();

  describe("convertSingleMinutesRow method should return the conversion of a number into a single minutes row", function () {
    it("given 0 should return 'OOOO'", function () {
      const result = main.convertSimpleMinutesRow(0);

      expect(result).toBe("OOOO");
    });

    it("given 1 should return 'YOOO'", function () {
      const result = main.convertSimpleMinutesRow(1);

      expect(result).toBe("YOOO");
    });

    it("given 2 should return 'YYOO'", function () {
      const result = main.convertSimpleMinutesRow(2);

      expect(result).toBe("YYOO");
    });

    it("given 3 should return 'YYYO'", function () {
      const result = main.convertSimpleMinutesRow(3);

      expect(result).toBe("YYYO");
    });

    it("given 4 should return 'YYYY'", function () {
      const result = main.convertSimpleMinutesRow(4);

      expect(result).toBe("YYYY");
    });

    it("given 5 should return 'OOOO'", function () {
        const result = main.convertSimpleMinutesRow(5);
  
        expect(result).toBe("OOOO");
    });

    it("given 6 should return 'YOOO'", function () {
        const result = main.convertSimpleMinutesRow(6);
  
        expect(result).toBe("YOOO");
    });

    it("given 7 should return 'YYOO'", function () {
        const result = main.convertSimpleMinutesRow(7);
  
        expect(result).toBe("YYOO");
    });

    it("given 8 should return 'YYYO'", function () {
        const result = main.convertSimpleMinutesRow(8);
  
        expect(result).toBe("YYYO");
    });

    it("given 9 should return 'YYYY'", function () {
        const result = main.convertSimpleMinutesRow(9);
  
        expect(result).toBe("YYYY");
    });

    it("given 10 should return 'OOOO'", function () {
        const result = main.convertSimpleMinutesRow(10);
  
        expect(result).toBe("OOOO");
    });

    it("given 21 should return 'YOOO'", function () {
        const result = main.convertSimpleMinutesRow(21);
  
        expect(result).toBe("YOOO");
    });

    it("given 32 should return 'YOOO'", function () {
        const result = main.convertSimpleMinutesRow(32);
  
        expect(result).toBe("YYOO");
    });
  });

  describe("convertFiveMinutesRow method should return the conversion of a number into a five minutes row", function () {
    it("given 0 should return 'OOOOOOOOOOO'", function () {
      const result = main.convertFiveMinutesRow(0);

      expect(result).toBe("OOOOOOOOOOO");
    });

    it("given 1 should return 'OOOOOOOOOOO'", function () {
        const result = main.convertFiveMinutesRow(1);
  
        expect(result).toBe("OOOOOOOOOOO");
    });

    it("given 5 should return 'YOOOOOOOOOO'", function () {
        const result = main.convertFiveMinutesRow(5);
  
        expect(result).toBe("YOOOOOOOOOO");
    });

    it("given 6 should return 'YOOOOOOOOOO'", function () {
        const result = main.convertFiveMinutesRow(6);
  
        expect(result).toBe("YOOOOOOOOOO");
    });

    it("given 7 should return 'YOOOOOOOOOO'", function () {
        const result = main.convertFiveMinutesRow(7);
  
        expect(result).toBe("YOOOOOOOOOO");
    });

    it("given 10 should return 'YYOOOOOOOOO'", function () {
        const result = main.convertFiveMinutesRow(10);
  
        expect(result).toBe("YYOOOOOOOOO");
    });
  });
});
