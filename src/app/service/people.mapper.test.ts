import "@testing-library/jest-dom";
import { responsePeopleMapper } from "./people.mapper";

describe("people mapper test", () => {
  it("a correct mapper", () => {
    const testMock = [
      {
        name: "João",
        cpf: "11759907014",
        email: "joao@joao.com",
        phone: "11111111111",
      },
    ];

    const expectOut = [
      {
        name: "João",
        cpf: "117.599.070-14",
        email: "joao@joao.com",
        phone: "(11) 11111-1111",
      },
    ];

    expect(responsePeopleMapper(testMock)).toStrictEqual(expectOut);
  });
});
