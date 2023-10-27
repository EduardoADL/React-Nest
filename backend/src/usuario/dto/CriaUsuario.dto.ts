import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class CriaUsuarioDTO{

    @IsString()
    @IsNotEmpty({ message : 'nome nao pode ser vazio'})
    nome: string;

    //( alguma regra adicional de validacao, messagem de erro)
    @IsEmail(undefined, { message : 'email invalido'})
    @EmailUnico({ message: 'ja existe um usuario com esse email'})
    email: string;

    @MinLength(6, { message : 'senha precisa ter 6 caracteres'})
    senha: string;
}