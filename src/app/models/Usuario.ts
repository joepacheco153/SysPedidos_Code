export class Usuario{
    idusuario: string;
    username: string;
    name: string;
    lastname: string;
    dni: string;
    email: string;
    age: number;
    rol: string;
    role: string;
    constructor(_idusuario: string, _username: string, _name:string, _lastname: string, _dni: string, _email: string, _age: number,_rol:string) {
        this.idusuario = _idusuario;
        this.username = _username;
        this.name = _name; 
        this.lastname = _lastname;
        this.dni =  _dni;
        this.email = _email;
        this.age = _age;
        this.rol = _rol;
        this.role = this.parseRol(_rol)
    }


    parseRol(rol){
        switch (rol) {
            case 'ROLE_ADMIN':
                return 'Administrador'
            break;
            case 'ROLE_USER':
                return 'Usuario'
            break;
            default:
                return 'No tiene rol'
        }
    }
}
