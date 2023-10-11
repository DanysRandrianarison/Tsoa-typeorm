import express, {Response as ExResponse, Request as ExRequest,NextFunction,json,urlencoded} from 'express'
import swaggerUi from 'swagger-ui-express'
import { ValidateError } from 'tsoa';
import {RegisterRoutes} from "../build/routes"
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(async ()=> {
     const app = express();
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json())

app.use('/docs', swaggerUi.serve, async(_req:ExRequest, res:ExResponse)=> {
    res.send(
        swaggerUi.generateHTML(await import("../build/swagger.json"))
    )
})
RegisterRoutes(app)

app.use(function notFoundHandler(_req,res:ExResponse) {
    res.status(404).send({
        message:'Not found'
    })
})

app.use(function errorHandler(
    err:unknown,
    req:ExRequest,
    res:ExResponse,
    next:NextFunction
):ExResponse | void {
    if(err instanceof ValidateError) {
        console.warn(`Caught validatin error for ${req.path} : `,err.fields)
        return res.status(422).json({
            message:"Validation failed",
            details: err?.fields
        })
    }
   
    next()
})
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`http://localhost:${port}`)
})
})
