import { AppDataSource } from "../data-source";
import { User } from "./userModel";


export const UserRespository = () =>  AppDataSource.getRepository(User)