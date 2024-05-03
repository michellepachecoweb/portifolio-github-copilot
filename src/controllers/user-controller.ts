import { Request, Response } from 'express';
import Login from '../use-cases/user/login';
import UserRepository from '../repositories/user-repository'; 

export default class UserController {
   static async login(request: Request, response: Response) {
        const { login, password } = request.body;

        const userRepository = new UserRepository();
        const loginUseCase = new Login(userRepository);
        try {
            const user = await loginUseCase.execute(login, password);
            response.json(user);
        } catch (error: any) {
            response.status(400).json({ message: error.message });
        }
    }
}

