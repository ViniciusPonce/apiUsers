// importa a interface IPaciente
import {IPaciente} from '../types/IPaciente'

// importa as classes do MongoDB - mongoose
import {model, Schema} from 'mongoose'

// vamos criar um esquema do mongoose para o paciente
const pacienteSchema: Schema = new Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        rg: {
            type: String,
            required: true,
        },
        peso: {
            type: Number,
            required: true,
        },
        altura: {
            type: Number,
            required: true,
        },
        idade: {
            type: Number,
            required: true,
        }
    }
)

// vamos exporta o Schema como Paciente do tipo IPaciente
export default model<IPaciente>("Paciente", pacienteSchema)