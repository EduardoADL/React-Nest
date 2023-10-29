import { Test, TestingModule } from "@nestjs/testing";
import { UsuarioService } from "./usuario.service"
import { getRepositoryToken } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity";

const usuarioEntityList = [
    new UsuarioEntity({ nome: 'Jorge', email: 'jorgingameplay@gmail.com', senha: '159753' }),
    new UsuarioEntity({ nome: 'Billie', email: 'billiejean@gmail.com', senha: '159753' }),
    new UsuarioEntity({ nome: 'Cleiton', email: 'cleiton.silva@gmail.com', senha: '159753' }),
]

describe('UsuarioService', () => {
    let usuarioService: UsuarioService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsuarioService,
                {
                    provide: getRepositoryToken(UsuarioEntity),
                    useValue: {
                        criaUsuario: jest.fn().mockResolvedValue(usuarioEntityList),
                        save: jest.fn(),
                        listaUsuarios: jest.fn(),
                        find: jest.fn(),
                        atualizaUsuario: jest.fn(),
                        update: jest.fn(),
                        deletaUsuario: jest.fn(),
                        delete:jest.fn(),
                    }
                }
            ],
        }).compile();

        usuarioService = module.get<UsuarioService>(UsuarioService);
    });

    it('should be defined', () => {
        expect(usuarioService).toBeDefined();
    });
});