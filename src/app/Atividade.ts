export interface Atividade {
  id: string;
  idUsuario: number;
  titulo: string;
  descricao: string;
  curso: string;
  materia: string;
  dataHoje: Date;
  dataEntrega: Date;
  pontos: number;
}
