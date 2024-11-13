// src/models/Cliente.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Clientes') // Nome da tabela no banco de dados
export class Cliente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nome_cliente!: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  peso_kg!: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  endereco!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  logradouro!: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  numero!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  bairro!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  complemento!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  cidade!: string;

  @Column({ type: 'char', length: 2, nullable: false })
  estado!: string;

  @Column({ type: 'varchar', length: 50, default: 'Brasil' })
  pais!: string;

  @Column({ type: 'decimal', precision: 8, scale: 6, nullable: true })
  latitude!: number;

  @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
  longitude!: number;
}
