import express from "express";
import CarnesController from "../Controllers/carnesController.js";

const router = express.Router();

router
  .get("/carnes", CarnesController.listarCarnes)
  .get("/carnes/:id", CarnesController.listaCarnePorId)
  .post("/carnes", CarnesController.cadastrarCarne)
  .put("/carnes/:id", CarnesController.atualizarCarne)
  .delete("/carnes/:id", CarnesController.excluirCarne);

export default router;