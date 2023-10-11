import { IUser,OUser } from "./userTypes";
import {User} from "./userModel";
import { UserRespository } from "./userRepository";




export class UsersService {
  public async get(): Promise<OUser[]> {
    return await UserRespository().find()
  }

  public async getOne(id:number):Promise<OUser[]> {
    return await UserRespository().findBy({id})
  }

  public async create(userCreationParams: IUser): Promise<IUser> {
    const user = new User();
    user.password = userCreationParams.password   
    user.email = userCreationParams.email
    user.username = userCreationParams.username
    
     return  await UserRespository().save(user)

  }
}