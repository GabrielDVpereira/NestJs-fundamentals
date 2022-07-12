import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService){}
    signup(){
        return {
            response: 'this is signup'
        }
    }
    signin(){
        return {
            response: 'this is signin'
        }
    }
}