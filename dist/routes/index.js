"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importa classe Router do express
const express_1 = require("express");
// importa os métodos criados no controller
const PacienteController_1 = require("../controllers/PacienteController");
// cria um objeto da classe Router
const router = express_1.Router();
router.get("/pacientes", PacienteController_1.getPacientes);
router.post("/add-paciente", PacienteController_1.addPaciente);
router.delete("/remove-paciente/:id", PacienteController_1.removePaciente);
router.put("/atualiza.paciente/:id", PacienteController_1.updatePaciente);
// exporta o router
exports.default = router;
