import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/criausuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';


@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criaUsuario(@Body() dadosdoUsuario: CriaUsuarioDTO) {

        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosdoUsuario.email;
        usuarioEntity.nome = dadosdoUsuario.nome;
        usuarioEntity.senha = dadosdoUsuario.senha;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);
        return { usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome), message: 'usuario criado com sucesso' }
    }

    @Get()
    async listUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.listar();

        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );

        return usuariosLista;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO ) {
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

        return{ usuario: usuarioAtualizado, message: 'usuario atualizado com sucesso'};
    }

    @Delete('/:id')
    async deletarUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.usuarioRepository.remove(id);

        return{
            usuario: usuarioRemovido,
            message: 'usuario removido com sucesso'
        }
    }

}
