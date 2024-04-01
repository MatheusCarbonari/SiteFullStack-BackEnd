import { carnes } from "../Models/index.js";

class CarnesController {

  static listarCarnes = async (req,res) => {
    try{
      const buscaDeCarnes = await carnes.find();
      res.status(200).json(buscaDeCarnes);
    }catch(erro){
      res.status(400).send({message: `erro ao buscar as carnes. ${erro}`});
    }     
  };

  static listaCarnePorId = async (req,res) => {
    try{
      const id = req.params.id;
      const buscaPorId = await carnes.findById(id);
      res.status(200).json(buscaPorId);
    }catch(erro){
      res.status(200).send("Erro ao buscar id");
    }
  };

  static cadastrarCarne = async (req,res) => {
    try{
      let carne = new carnes(req.body);
      const carneResultado = await carne.save();
      res.status(200).send(`Cadastro realizado com sucesso: ${carneResultado}`);
    }catch(erro){
      res.status(400).send("Erro ao cadastrar a carne");
    }
  };

  static atualizarCarne = async (req,res) => {
    try{
      const id = req.params.id;
      await carnes.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).send({message: "Carne atualizada com sucesso"});
    }catch(erro){
      res.status(400).send({message: `${erro}`});
    }
  };
  
  static excluirCarne = async (req,res) => {
    try{
      const id = req.params.id;
      await carnes.findOneAndDelete(id);
      res.status(200).send({message: "Carne apagada do banco de dados com sucesso"});
    }catch(erro){
      res.status(400).send({message: `Erro ao apagar a carne! ${erro}`});
    }
  };
}

export default CarnesController;