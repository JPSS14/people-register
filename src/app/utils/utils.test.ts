import "@testing-library/jest-dom";
import {
  isValidCPF,
  isValidEmail,
  maskCPF,
  maskPhoneNumber,
  unmask,
} from "./utils";

describe("phoneNumber mask", () => {
  it("a phoneNumber mask test with 11 digits", () => {
    expect(maskPhoneNumber("11111111111")).toBe("(11) 11111-1111");
  });

  it("a phoneNumber mask test with 11 digits", () => {
    expect(maskPhoneNumber("1111111111")).toBe("(11) 1111-1111");
  });
});

describe("CPF mask", () => {
  it("a CPF mask test with 11 digits", () => {
    expect(maskCPF("11111111111")).toBe("111.111.111-11");
  });
});

describe("email validation", () => {
  it("a correct email", () => {
    expect(isValidEmail("abc@abc.com")).toBe(true);
  });
});

describe("unmask test", () => {
  it("a correct unmask", () => {
    expect(unmask("111.111.111-22")).toBe("11111111122");
  });
});

describe("isValidCPF test", () => {
  it("a incorrect isValidCPF", () => {
    expect(isValidCPF("11111111122")).toBe(false);
  });

  it("a correct isValidCPF", () => {
    expect(isValidCPF("11759907014")).toBe(true);
  });
});
