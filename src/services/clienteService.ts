// src/services/clienteService.ts
import { AppDataSource } from "../config/data-source";
import { Cliente } from "../models/Cliente";

const clienteRepository = AppDataSource.getRepository(Cliente);

// Função para obter todos os clientes
export const getAllClientes = async () => {
  return await clienteRepository.find();
};

// Função para criar um novo cliente
export const createCliente = async (clienteData: Partial<Cliente>) => {
  const cliente = clienteRepository.create(clienteData);
  await clienteRepository.save(cliente);
  return cliente;
};

// Função para atualizar um cliente
export const updateCliente = async (id: number, clienteData: Partial<Cliente>) => {
  const cliente = await clienteRepository.findOneBy({ id });
  if (!cliente) throw new Error("Cliente não encontrado");
  clienteRepository.merge(cliente, clienteData);
  return await clienteRepository.save(cliente);
};

// Função para deletar um cliente
export const deleteCliente = async (id: number) => {
  const cliente = await clienteRepository.findOneBy({ id });
  if (!cliente) throw new Error("Cliente não encontrado");
  await clienteRepository.remove(cliente);
};
