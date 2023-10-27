import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class AtualizaUsuarioDTO{

    @IsString()
    @IsNotEmpty({ message : 'nome nao pode ser vazio'})
    @IsOptional()
    nome: string;

    //( alguma regra adicional de validacao, messagem de erro)
    @IsEmail(undefined, { message : 'email invalido'})
    @EmailUnico({ message: 'ja existe um usuario com esse email'})
    @IsOptional()
    email: string;

    @MinLength(6, { message : 'senha precisa ter 6 caracteres'})
    @IsOptional()
    senha: string;
}