import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn} from 'typeorm'


@Entity({name: 'usuarios'})
export class UsuarioEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'nome', length: 100, nullable: false })
    nome: string;
    @Column({ name: 'email', length: 70, nullable: false })
    email: string;
    @Column({ name: 'senha', length: 255, nullable: false })
    senha: string;

    @CreateDateColumn({name: 'created_at'})
    createAt: string;
    @UpdateDateColumn({name: 'updated_at'})
    updateAt: string;
    @DeleteDateColumn({name : 'deleted_at'})
    deletedAt: string;


    constructor(usuario?: Partial<UsuarioEntity>){
        this.id = usuario?.id;
        this.nome = usuario?.nome;
        this.email = usuario?.email;
        this.senha = usuario?.senha;
        this.createAt = usuario?.createAt;
        this.updateAt = usuario?.updateAt;
        this.deletedAt = usuario?.deletedAt;
    }
}