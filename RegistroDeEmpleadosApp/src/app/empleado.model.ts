export class Empleado{
    Nombres:string;
    Apellidos:string;
    Cargo:string;
    Salario:number;

    constructor(nombres:string, apellidos:string, cargo:string, salario:number){
        this.Nombres=nombres;
        this.Apellidos=apellidos;
        this.Cargo=cargo;
        this.Salario=salario;
    }
}