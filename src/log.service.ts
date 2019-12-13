import { Injectable } from "@nestjs/common";

@Injectable()
export class LoggerService{
    cosnstrucor(){
        console.log('loggerService initialized');
    }
    log(message: string){
        console.log(message);
    }
}