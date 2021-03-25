// importa classe Router do express
import {Router} from 'express'
// importa os métodos criados no controller
import {getPacientes, addPaciente, removePaciente, updatePaciente} from '../controllers/PacienteController'

// cria um objeto da classe Router
const router: Router = Router()

router.get("/pacientes", getPacientes)

router.post("/add-paciente", addPaciente)

router.delete("/remove-paciente/:id", removePaciente)

router.put("/atualiza.paciente/:id", updatePaciente)

// exporta o router
export default router