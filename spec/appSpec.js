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
  });
});
