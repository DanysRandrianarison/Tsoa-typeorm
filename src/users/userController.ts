import {
  Body,
  Controller,
  Path,
  Post,
  Get,
  Route,
  SuccessResponse
} from "tsoa"

import { IUser,OUser } from "./userTypes"
import { UsersService } from "./userService"

@Route("users")
export class UsersController extends Controller {
  @Get("{userId}")
  public async getUserById(
    @Path() userId:number
  ):Promise<OUser[]> {
    return new UsersService().getOne(userId)
  }

  @Get()
  public async getUser():Promise<OUser[]> {
    return new UsersService().get()
  }
  
@SuccessResponse("201","User has created")
@Post()
public async createUser(
  @Body() requestBody:IUser
):Promise<IUser> {
   return await new UsersService().create(requestBody)
   
}
}














// // src/users/usersController.ts
// import {
//     Body,
//     Controller,
//     Get,
//     Tags,
    
//     Post,
//     Route,
//     SuccessResponse,
//   } from "tsoa";
//   import { IUser ,OUser} from "./userInterface";
//   import { UsersService } from "./userService"

  
//   @Route("users")
//   @Tags('User')
//   export class UsersController extends Controller {
//     @Get()
//     public async getUser(
    
//     ): Promise<OUser[]> {
//       return await new UsersService().get();
//     }

    
  
//     @SuccessResponse("201", "Created")
//     @Post()
//     public async createUser(
//       @Body() requestBody: IUser
//     ): Promise<IUser> {
//       this.setStatus(201);
//       return await new UsersService().create(requestBody);      
//     }
//   }