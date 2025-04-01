export interface PacienteDto {
    id: number;
    nuss: number;
    nombre: string;
    fechadealta: Date ;
    compania: string;
    email: string;
    activo: boolean;
    telefono: string;
    movil: string;
    apellidos: string;
    logo?: string;
    saldoinicial: number;
    fechadenacimiento: Date ;
    cpais: string;
    irpf: number;
    firmalopd?: boolean;
}
