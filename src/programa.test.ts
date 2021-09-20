import { mocked } from "ts-jest/utils";
import { consola } from "./interaccion";
import programa from "./programa";

// Le pedimos a Jest que "imposte" el módulo completo
jest.mock("./interaccion");

// Le "avisamos" al compilador de TypeScript que la consola es un mock
// Esto "le agrega" al objeto tenga los métodos de Jest para interactuar con mocks
const consolaMock = mocked(consola);

describe("Programa", () => {
  it("escribe una bienvenida", () => {
    programa.ejecutar();
    expect(consolaMock.escribir).toHaveBeenCalledWith("👋 ¡Hola mundo!");
  });

  it("saluda a quien lo ejecuta", () => {
    consolaMock.leer.mockReturnValue("Pepita");
    programa.ejecutar();
    expect(consola.escribir).toHaveBeenCalledWith(
      "😃 Qué bueno verte por acá, Pepita."
    );
  });
});
