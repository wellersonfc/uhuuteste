import express from 'express';
import * as ClienteController from '../controllers/clienteController'; // Seus controladores

const clienteRoutes = express.Router();

// Rota para listar todos os clientes
clienteRoutes.get('/clientes', async (req, res) => {
    await ClienteController.getClientes(req, res);
});

// Rota para criar um novo cliente
clienteRoutes.post('/clientes', async (req, res) => {
    await ClienteController.addCliente(req, res);
});

// Rota para buscar um cliente por ID
/*clienteRoutes.get('/clientes/:id', async (req, res) => {
    await ClienteController.buscarClientePorId(req, res);
});*/

// Rota para atualizar um cliente existente
clienteRoutes.put('/clientes/:id', async (req, res) => {
    await ClienteController.updateClienteData(req, res);
});

// Rota para deletar um cliente
clienteRoutes.delete('/clientes/:id', async (req, res) => {
    await ClienteController.deleteClienteData(req, res);
});

export default clienteRoutes;
