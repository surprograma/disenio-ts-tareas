import { consola } from "./interaccion";

export default {
  async ejecutar(): Promise<void> {
    consola.escribir("👋 ¡Hola mundo!");
    const nombre = consola.leer("¿Cuál es tu nombre?");
    consola.escribir(`😃 Qué bueno verte por acá, ${nombre}.`);
  },
};
