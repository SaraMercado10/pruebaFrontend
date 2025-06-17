export class Usuario {
    _id!: string;       //puede o no puede estar
    email: string;
    username: string;
    password: string;
    activo: boolean;
    perfil: string;
    nombre: string;
    apellido: string;
    dni: string;
    telefono: string;

    constructor(){
        this.email="";
        this.username="";
        this.password="";
        this.activo=true;
        this.perfil="";
        this.nombre="";
        this.apellido="";
        this.dni="";
        this.telefono="";
    }
}
