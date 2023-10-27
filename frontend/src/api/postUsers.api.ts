import { CreateUser} from '~types/user.types'
import { instance } from './instance'

export async function postUsers(user: CreateUser): Promise<void> {
    try {
        await instance.post('/usuarios', user)
        console.log('Usuário cadastrado com sucesso')
    } catch (error) {
        throw new Error('Erro ao cadastrar o usuário')
    }
}
