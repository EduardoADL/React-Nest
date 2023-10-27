import { instance } from './instance'

export async function removeUsers(userId: string): Promise<void> {
    try {
        await instance.delete(`/usuarios/${userId}`)
        console.log('Usuário removido com sucesso')
    } catch (error) {
        throw new Error('Erro ao remover o usuário')
    }
}
