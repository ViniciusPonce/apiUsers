"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importa as classes do MongoDB - mongoose
const mongoose_1 = require("mongoose");
// vamos criar um esquema do mongoose para o paciente
const pacienteSchema = new mongoose_1.Schema({
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
});
// vamos exporta o Schema como Paciente do tipo IPaciente
exports.default = mongoose_1.model("Paciente", pacienteSchema);
