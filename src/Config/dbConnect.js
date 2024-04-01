import mongoose from "mongoose";

async function conectaNoBancoDeDados(){

  try{
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
  }catch(error){
    console.log("Erro na tentativa de conectar com o Banco de Dados");
    console.log({message: `${error}`});
  }
}

export default conectaNoBancoDeDados;