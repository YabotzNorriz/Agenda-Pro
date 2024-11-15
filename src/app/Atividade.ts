export interface Atividade {
  idAtividade?: number;
  titulo: string;
  descricao: string;
  curso: number;
  materia: number;
  dataHoje: Date;
  dataEntrega: Date;
  pontos: number;
  idUsuario?: number;
}
