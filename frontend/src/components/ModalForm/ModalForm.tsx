import { useEffect, useState } from 'react'



// import './modalForm.scss'



import { User, CreateUser } from '~types/user.types'

import { instance } from '~api/instance'

import { postUsers } from '~api/postUsers.api'

import { getUsers } from '~api/getUsers.api'



type ModalProps = {

    isOpen: boolean

    isEditing: boolean

    initialUsers: User[]

    onClose: (requestMessage: string, updatedUsers: User[]) => void

    completedRequest: (users: User[]) => void

    selectedUser: User | null

}



export const ModalForm: React.FC<ModalProps> = ({

    isOpen,

    onClose,

    initialUsers,

    isEditing,

    selectedUser,

    completedRequest

}) => {

    const modalStyle = {

        display: isOpen ? 'flex' : 'none'

    }



    const [user, setUser] = useState<User>({

        id: '',

        nome: '',

        email: '',

        senha: ''

    })



    useEffect(() => {

        // Atualiza o estado do usuário quando isEditing ou selectedUser mudarem



        if (isEditing && selectedUser) {

            setUser(selectedUser)

        } else {

            setUser({

                id: '',

                nome: '',

                email: '',

                senha: ''

            })

        }

    }, [isEditing, selectedUser])



    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault()



        if (!isOpen) {

            return

        }



        const userToSend: CreateUser = {

            nome: user.nome,

            email: user.email,

            senha: user.senha

        }



        try {

            // Lida com a submissão do formulário

            console.log(userToSend)

            if (isEditing && selectedUser) {

                // Atualiza os dados do usuário



                console.log(selectedUser)

                await instance.put(`/usuarios/${selectedUser.id}`, userToSend)

            } else {

                // Cria um novo usuário

                await postUsers(userToSend)

            }



            // Obtém os usuários atualizados

            const { data } = await getUsers()



            // Chama as funções de fechamento do modal e atualização dos usuários

            onClose(

                isEditing

                    ? 'Usuário editado com sucesso'

                    : 'Usuário cadastrado com sucesso',



                data

            )

            completedRequest(data)



            setUser({

                id: '',

                nome: '',

                email: '',

                senha: ''

            })

        } catch (error) {

            console.error('Erro ao cadastrar o usuário:', error)



            // Lida com o erro na criação ou edição do usuário

            onClose(

                'Erro ao cadastrar o usuário! Por favor verifique as informações',

                initialUsers

            )

        }

    }



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target



        // Atualiza o estado do usuário com base no campo alterado

        setUser((prevUser) => ({

            ...prevUser,

            [name]: value

        }))

    }



    return (

        <div className='modal' style={modalStyle}>

            <div className='modal-content'>

                <h2>

                    {isEditing ? 'Edição de Usuário' : 'Cadastro de Usuário'}

                </h2>

                <form onSubmit={handleSubmit}>

                    <div className='labels'>

                        <label>Nome</label>

                        <input

                            type='text'

                            name='nome'

                            value={user.nome}

                            onChange={handleChange}

                        />

                    </div>

                    <div className='min-label'>

                        <div className='labels'>

                            <label>{isEditing ? 'Novo Email' : 'Email'}</label>

                            <input

                                required

                                type='email'

                                name='email'

                                value={user.email}

                                onChange={handleChange}

                                placeholder={
                                    isEditing
                                        ? 'Digite seu novo email'
                                        : 'Email'
                                }

                                autoComplete={isEditing ? 'off' : 'on'}

                            />

                        </div>

                        <div className='labels'>

                            <label>{isEditing ? 'Nova Senha' : 'Senha'}</label>

                            <input

                                required

                                type='password'

                                name='senha'

                                value={user.senha}

                                onChange={handleChange}

                                placeholder={
                                    isEditing
                                        ? 'Digite sua nova senha'
                                        : 'Senha'
                                }

                                autoComplete='off'

                            />

                        </div>

                    </div>

                    <div className='interactive-button'>

                        <button

                            className='close'

                            onClick={() => onClose('', initialUsers)}

                        >

                            Cancelar

                        </button>

                        <button className='confirm' type='submit'>

                            {isEditing ? 'Editar' : 'Confirmar'}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    )

}

