import { expect, test} from 'vitest'
import   Login  from './login'
import UserRepository from '../../repositories/user-repository'

class MockUserRepository extends UserRepository{
    async findByEmailAndPassword(login: string, password: string) {
       return { 
            id: 1, 
            name: 'John Doe', 
            email: '', 
            password: 'admin' 
        }
    }
}

test('Login', async () => {
    const userRepository = new MockUserRepository()
    const login = new Login(userRepository)
    const user = await login.execute('admin', 'admin')
    expect(user).toEqual({ 
        id: 1, 
        name: 'John Doe', 
        email: '', 
        password: 'admin' 
    })   
})

test('Login invalido', async () => {
    const userRepository = new MockUserRepository()
    const login = new Login(userRepository)
    try {
        await login.execute('admin', '123')
    } catch (error: any) {
        expect(error.message).toBe('login inválido ou senha inválida')
    }
})