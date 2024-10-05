import canalController from './controller/canalController.js';
import canalProgramaController from './controller/canalProgramaController.js';
import programaFavoritoController from './controller/programaFavoritoController.js';
import usuarioController from './controller/usuarioController.js';

export default function adicionarRotas(servidor) {
    servidor.use(canalController);
    servidor.use(canalProgramaController);
    servidor.use(programaFavoritoController);
    servidor.use(usuarioController);
}