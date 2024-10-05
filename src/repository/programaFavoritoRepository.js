import connection from './connection.js';

export async function programaFavorito(favorito) {
    const comando = `
        INSERT INTO tb_programa_favorito (id_usuario, id_canal_programa, vl_avaliacao)
        VALUES (?, ?, ?)
    `;
    const resultado = await connection.query(comando, [favorito.id_use, favorito.id_programa, favorito.avaliacao]);

    const dados = resultado[0];
    return dados.insertId;
}


export async function programaFavoritoG() {
    const comando = `
        SELECT 
            pf.id_programa_favorito,
            pf.vl_avaliacao,
            u.nm_usuario,
            cp.nm_programa
        FROM tb_programa_favorito pf
        INNER JOIN tb_usuario u ON pf.id_usuario = u.id_usuario
        INNER JOIN tb_canal_programa cp ON pf.id_canal_programa = cp.id_canal_programa
    `;

    const resultado = await connection.query(comando);
    const dados = resultado[0];
    return dados;
}



export async function programaFavoritoU(favorito, id) {
    const comando = `
        UPDATE tb_programa_favorito 
        SET id_usuario = ?, id_canal_programa = ?, vl_avaliacao = ?
        WHERE id_programa_favorito = ?
    `;
    const resultado = await connection.query(comando, [favorito.id_use, favorito.id_programa, favorito.avaliacao, id]);

    const dados = resultado[0];
    return dados.affectedRows;
}



export async function programaFavoritoD(id) {
    const comando = `
        DELETE FROM tb_programa_favorito WHERE id_programa_favorito = ?
    `;
    const [resultado] = await connection.query(comando, [id]);

    const dados = resultado[0];
    return dados.affectedRows;

}