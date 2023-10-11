export type IUser = {
    
    email:string;
    username:string;
    password:string

}

export type OUser = Pick<IUser, "email" | "username">