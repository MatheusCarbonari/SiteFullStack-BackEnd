import express from "express";
import conectaNoBancoDeDados from "./Config/dbConnect.js";
import routes from "./Routes/index.js";

// Conectar ao banco de dados
const db = await conectaNoBancoDeDados();
db.on("error", (erro) => {
  console.error(erro);
});
db.once("open", () => {
  console.log("Conexão com o DB realizada com sucesso");
});

// Declarar app com express e garantir resposta em json
const app = express();
app.use(express.json());

routes(app);

export default app;