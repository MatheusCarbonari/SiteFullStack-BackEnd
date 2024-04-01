import express from "express";
import carnes from "./carnesRoutes.js";

const routes = (app) => {
  app.use(
    express.json(),
    carnes
  );
};

export default routes;
