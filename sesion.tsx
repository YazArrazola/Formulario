interface Sesion {
  usuario: string;
  email: string;
  fecha: string;
}
export const sesiones: Sesion[] = [
  { usuario: "juanperez", email: "juan.perez@example.com", fecha: "2023-01-15" },
  { usuario: "mariagomez", email: "maria.gomez@example.com", fecha: "2023-02-20" },
  { usuario: "pedrolopez", email: "pedro.lopez@example.com", fecha: "2023-03-10" },
  { usuario: "lauramartinez", email: "laura.martinez@example.com", fecha: "2023-04-05" },
  { usuario: "carlosrodriguez", email: "carlos.rodriguez@example.com", fecha: "2023-05-18" },
];
