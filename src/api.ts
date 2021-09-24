import { promises } from "fs";

export type ProyectoJson = {
  titulo: string;
  inicio: string;
  fin_deseado: string;
  tareas: TareaJson[];
};

export type TareaJson = TareaSimpleJson | TareaIntegracionJson;

export type TareaSimpleJson = {
  simple: true;
  empleados: EmpleadoJson[];
  responsable: EmpleadoJson;
  horas: number;
  infra: number;
  descripcion: string;
};

export type TareaIntegracionJson = {
  simple: false;
  tareas: TareaJson[];
  responsable: EmpleadoJson;
};

export type EmpleadoJson = {
  nombre: string;
  arancel: number;
};

export const api = {
  async importarProyecto(nombre: string): Promise<ProyectoJson> {
    const json = await promises.readFile(`data/${nombre}.json`, {
      encoding: "utf8",
    });

    return JSON.parse(json);
  },
};
