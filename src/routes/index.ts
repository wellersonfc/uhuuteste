import { Router } from 'express';
import clienteRoutes from './clienteRoutes';

const router = Router();

// Adiciona as rotas de cliente
router.use(clienteRoutes);

// Exporta o roteador principal
export default router;
