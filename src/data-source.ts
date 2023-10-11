import "reflect-metadata"
import {DataSource} from 'typeorm'
import { User } from "./users/userModel"

export const AppDataSource = new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"motdepasse",
    database:"tabtracker",
    logging:false,
    entities: [User],
    migrations: ['src/migration/*ts'],
    subscribers: []
})