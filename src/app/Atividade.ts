export interface Atividade {
  titulo: string;
  dataHoje: Date;
  dataEntrega: Date;
  descricao: string;
  pontos: number;
  idAtividade?: number;
  idCurso: number;
  idMateria: number;
}