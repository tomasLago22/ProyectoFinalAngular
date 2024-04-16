export interface Usuario {
    id: number ;
    firstName: string;
    lastName: string;
    email: string;
    creacion: Date;
    role: 'Admin' | 'User' ;



    
}