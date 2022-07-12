import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
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