import * as db from "../repository/canalProgramaRepository.js";
import { Router } from "express";
const endpoint = Router();



endpoint.post("/canalPrograma", async (req, resp) => {
    try {
        const programa = req.body;
        const idCanalPrograma = await db.canalProgramaInsert(programa);
        resp.status(200).send({ idCanalPrograma:idCanalPrograma});

    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.get("/canalPrograma", async (req, resp) => {
    try {
        const programas = await db.canalProgramaSelect();
        resp.status(200).send(programas);
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.put("/canalPrograma/:id", async (req, resp) => {
    try {
        const { id } = req.params;
        const programa = req.body;
      await db.canalProgramaUpdate(programa, id);

    
        resp.status(204).send();
     
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.delete("/canalPrograma/:id", async (req, resp) => {
    try {
        const {id}  = req.params;
       await db.canalProgramaDelete(id);

            resp.status(204).send();
         
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

export default endpoint;