export interface IUser {
    id?:number;
    username:string;
    email:string;
    password:string
}
export interface OUser {
    id?:number;
    username:string;
    email:string
    password?:string
}