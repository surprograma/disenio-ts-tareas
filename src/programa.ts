import { consola } from "./interaccion";

export default {
  // Los argumentos que recibe se pueden pasar al ejecutar el programa desde la consola:
  // npm start -- algo 2 "otra cosa"
  async ejecutar(_args: string[] = []): Promise<void> {
    consola.escribir("👋 ¡Hola mundo!");
    const nombre = consola.leer("¿Cuál es tu nombre?");
    consola.escribir(`😃 Qué bueno verte por acá, ${nombre}.`);
  },
};
