// src/controllers/clienteController.ts
import { Request, Response } from "express";
import { getAllClientes, createCliente, updateCliente, deleteCliente } from "../services/clienteService";
//import * as ClienteController from '../services/clienteService'; // Seus controladores
import { error } from "console";

export const getClientes = async (req: Request, res: Response) => {
  console.log('to aqui')
  try {
    const clientes = await getAllClientes();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const addCliente = async (req: Request, res: Response) => {
  try {
    const cliente = await createCliente(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateClienteData = async (req: Request, res: Response) => {
  try {
    const updatedCliente = await updateCliente(parseInt(req.params.id), req.body);
    res.json(updatedCliente);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteClienteData = async (req: Request, res: Response) => {
  try {
    await deleteCliente(parseInt(req.params.id));
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ err});
  }
};
