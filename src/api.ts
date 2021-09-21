import { promises } from "fs";

type ProyectoJson = {
  titulo: string;
  inicio: string;
  fin_deseado: string;
  tareas: TareaJson[];
};

type TareaJson = TareaSimpleJson | TareaIntegracionJson;

type TareaSimpleJson = {
  simple: true;
  empleados: EmpleadoJson[];
  responsable: EmpleadoJson;
  horas: number;
  infra: number;
  descripcion: string;
};

type TareaIntegracionJson = {
  simple: false;
  tareas: TareaJson[];
  responsable: EmpleadoJson[];
};

type EmpleadoJson = {
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
