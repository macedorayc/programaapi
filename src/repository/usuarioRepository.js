import connection from './connection.js';


export async function usuarioR(usuario) {
    const comando = `
        INSERT INTO tb_usuario (nm_usuario)
        VALUES (?)`;

    const [resultado] = await connection.query(comando, [usuario]);
    
    
    return resultado.insertId;
}

export async function usuarioG() {
    const comando = `
        SELECT * FROM tb_usuario
    `;
    let resultado = await connection.query(comando);

   let dados = resultado[0];
    return dados;
}

export async function usuarioU(usuario, id) {
    const comando = `
        UPDATE tb_usuario 
        SET 
        nm_usuario = ?
        WHERE id_usuario = ?
    `;
    const [resultado] = await connection.query(comando, [usuario, id]);
    return resultado.affectedRows;
}


export async function usuarioD(id) {
    const comando = `
        DELETE FROM tb_usuario WHERE id_usuario = ?
    `;
    const [resultado] = await connection.query(comando,[id]);
    return resultado.affectedRows;
}