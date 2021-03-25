// importa express
import {Request, Response} from 'express'
// importa o tipo de dado IPaciente
import {IPaciente} from '../types/IPaciente'
// importa o modelo Paciente
import Paciente from '../models/Paciente'

// função pra retornar todos os pacientes
const getPacientes = async(req: Request, res: Response): Promise<void> => {
    try{ // tratando exceção
        // recupera os pacientes
        const pacientes: IPaciente[] = await Paciente.find()
        res.status(200).json({pacientes}) // retorna os pacientes recuperados em formato json
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

// função para adicionar um paciente
const addPaciente = async(req:Request, res: Response): Promise<void> => {
    try{ // tratando exceção
        // recupera os valores do formulário informado pelo usuário
        const corpo = req.body as Pick <IPaciente, "nome" | "rg" | "idade" | "peso" | "altura">
        // monsta o objeto
        const paciente: IPaciente = new Paciente({
            nome: corpo.nome,
            rg: corpo.rg,
            idade: corpo.idade,
            peso: corpo.peso,
            altura: corpo.altura
        }) 
        // efetivamente inserir no banco de dados
        const novoPaciente = await paciente.save()
        res.status(200).json({novoPaciente})
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

// função para remover um paciente
const removePaciente = async(req: Request, res: Response): Promise<void> => {
    try{ // tratando exceção
        //Tenta remover o paciente
        const pacienteRemovido = await Paciente.findByIdAndRemove(req.params.id)
        res.status(200).json({
            pacienteRemovido
        })
    
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

const updatePaciente = async(req: Request, res: Response): Promise<void> => {
    try{ // tratando exceção
        //recebve os parametros da atualização: 1) id do paciente e 2) novos dados do paciente
        const{
            params: {id},
            body,
        } = req
        // efetiva a atualização
        const pacienteAtualizado: IPaciente | null = await Paciente.findByIdAndUpdate({_id: id}, body, {new: true})
        //retorna o resultado
        res.status(200).json({
            pacienteAtualizado
        })
    }
    catch(error){
        console.log(error)
        throw error // lançar a exceção
    }
}

// exporta os métodos criados
export {getPacientes, addPaciente, updatePaciente, removePaciente}