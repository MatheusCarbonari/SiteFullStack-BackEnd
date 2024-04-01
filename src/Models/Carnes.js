import mongoose from "mongoose";

const carnesSchema = new mongoose.Schema(
  {
    id: {type:String},
    nome: {
      type: String,
      required: [true, "O nome da carne é obrigatório"]
    },
    corteDaCarne: {type: String},
    tipoDeCarne: {
      type: String,
      required: [true, "O tipo de carne é obrigatório"]
    },
    teorDeGordura: {type: String},
    certificacoesEspeciais: {type: String},
    preco: {
      type: Number,
      validate: [
        {
          validator: (valor) => {
            return valor > 0;
          },
          message: "O valor do kg da carne deve ser maior que R$ 0,00. Valor Fornecido: {VALUE}"
        }
      ]
    }
  }
);

const carnes = mongoose.model("carnes", carnesSchema);

export default carnes;