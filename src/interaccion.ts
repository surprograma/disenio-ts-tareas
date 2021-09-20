import { promises } from "fs";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prompt = require("prompt-sync")();

export const api = {
  async importarProyecto(nombre: string): Promise<any> {
    const json = await promises.readFile(`data/${nombre}.json`, {
      encoding: "utf8",
    });
    return JSON.parse(json);
  },
};

export const consola = {
  escribir(mensaje: string): void {
    console.log(mensaje);
  },

  leer(mensaje: string): string {
    return prompt(`${mensaje} `);
  },
};
