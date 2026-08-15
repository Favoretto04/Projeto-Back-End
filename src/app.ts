import express from "express";
import { version } from "node:os";

const app = express();

const categories = [
  {
    "id": 1,
    "name": "Eletrônicos",
    "description": "Produtos e acessórios eletrônicos, como smartphones, computadores e periféricos."
  },
  {
    "id": 2,
    "name": "Casa e Jardim",
    "description": "Produtos para decoração, organização, manutenção e cuidados com a casa e o jardim."
  },
  {
    "id": 3,
    "name": "Esportes e Lazer",
    "description": "Produtos e acessórios destinados à prática de esportes, atividades físicas e lazer."
  }
]

const products = [
  {
    "id": 1,
    "category_id": 1,
    "name": "Smartphone Pro",
    "description": "Smartphone com tela de alta resolução, câmera avançada e 256 GB de armazenamento.",
    "price": 3499.90
  },
  {
    "id": 2,
    "category_id": 1,
    "name": "Fone de Ouvido Bluetooth",
    "description": "Fone sem fio com cancelamento de ruído e bateria de longa duração.",
    "price": 299.90
  },
  {
    "id": 3,
    "category_id": 2,
    "name": "Luminária de Mesa LED",
    "description": "Luminária moderna com iluminação LED ajustável para ambientes internos.",
    "price": 129.90
  },
  {
    "id": 4,
    "category_id": 3,
    "name": "Kit de Halteres",
    "description": "Kit de halteres para exercícios de força e treinamento funcional em casa.",
    "price": 249.90
  }
]

app.get("/", (req, res) => {
    res.status(200).json({
        message:"API Restaurante",
        version: "1.0.0"
    });
});

app.get("/categories", (req, res) => {
    res.status(200).json({categories});
});

app.get("/products", (req, res) => {
    res.status(200).json({products});
});

export default app;