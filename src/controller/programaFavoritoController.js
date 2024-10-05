import * as db from "../repository/programaFavoritoRepository.js";
import { Router } from "express";
const endpoint = Router();


endpoint.post("/programaFavorito", async (req, resp) => {
    try {
        const favorito = req.body;
        const idProgramaFavorito = await db.programaFavorito(favorito);
        resp.status(200).send({ idProgramaFavorito: idProgramaFavorito});
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.get("/programaFavorito", async (req, resp) => {
    try {
        const favoritos = await db.programaFavoritoG();
        resp.status(200).send(
             favoritos
        );
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoint.put("/programaFavorito/:id", async (req, resp) => {
    try {
        const {id} = req.params;
        const favorito = req.body;
        await db.programaFavoritoU(favorito, id);


        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoint.delete("/programaFavorito/:id", async (req, resp) => {
    try {
        const {id} = req.params;
        await db.programaFavoritoD(id);


        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

export default endpoint;