// vamos explorar o MongoDB
import {Document} from "mongoose"

// vamos criar uma classe interface que representa o documento Paciente no MongoDB
export interface IPaciente extends Document{
    // variáveis da interface
    nome: string
    rg: string
    idade: number
    peso: number
    altura: number
}

