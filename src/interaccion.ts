// eslint-disable-next-line @typescript-eslint/no-var-requires
const prompt = require("prompt-sync")();

export const consola = {
  escribir(mensaje: string): void {
    console.log(mensaje);
  },

  leer(mensaje: string): string {
    return prompt(`${mensaje} `);
  },
};
