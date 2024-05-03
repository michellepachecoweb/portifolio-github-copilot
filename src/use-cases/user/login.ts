// criar um caso de uso para login baseado na entidade User e repositório UserRepository, recebendo login e senha, e retornanco a instância do usuário logado
// utilize os conceitos de inversão de controle e injeção de dependência para tornar o códio desacoplado
import { User } from "../../entities/user";
import UserRepository from "../../repositories/user-repository";
 
export default class Login {

    constructor(private userRepository: UserRepository) { }

    async execute(login: string, password: string): Promise<User> {
        const user = await this.userRepository.findByEmailAndPassword(login, password);
        if (!user) throw new Error("login inválido ou senha inválida");
        return user;
    }
}