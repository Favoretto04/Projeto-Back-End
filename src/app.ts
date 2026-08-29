import express from "express";
import { version } from "node:os";
import { randomUUID } from "node:crypto";

const app = express();

app.use(express.json());

//====== INICIALIZAÇÃO DOS IDs DAS CATEGORIAS PRÉ CADASTRADAS ==================
const pizzaCategoryId = randomUUID();
const drinksCategoryId = randomUUID();
const dessertsCategoryId = randomUUID();

const categories = [ //Lista de categorias pré cadastradas
  {
    "id": pizzaCategoryId,
    "name": "Pizzas",
    "description": "Pizzas tradicionais, especiais e sabores da casa."
  },
  {
    "id": drinksCategoryId,
    "name": "Bebidas",
    "description": "Refris, Aguás, Sucos."
  },
  {
    "id": dessertsCategoryId,
    "name": "Sobremesas",
    "description": "Pizzas Doces, BonBons."
  }
]

const products = [ //Lista de produtos pré cadastrados
  {
    "id": randomUUID(),
    "category_id": pizzaCategoryId,
    "name": "Pizza de Calabresa",
    "description": "Pizza com fatias de calabresa.",
    "price": 34.9
  },
  {
    "id": randomUUID(),
    "category_id": drinksCategoryId,
    "name": "Coca-Cola Lata",
    "description": "Lata de Coca-Cola 350ml.",
    "price": 8.9
  },
  {
    "id": randomUUID(),
    "category_id": dessertsCategoryId,
    "name": "Pizza de Banana Nevada",
    "description": "Pizza com banana de chocolate branco flambado.",
    "price": 52.9
  },
]

app.get("/", (req, res) => { //Puxa os dados do SERVER
    res.status(200).json({
        message:"API Restaurante",
        version: "1.0.0",
        TITLE:"Tudo Filho Da PUTA"
    });
});

//======================= Categories ======================

app.get("/categories", (req, res) => { //Puxa todas as categorias
    res.status(200).json({categories});
});

app.get("/categories/:id", (req, res) => { //Puxa a categoria pelo ID
  const category = categories.find((category) => {
    return category.id == req.params.id;
  });

  if (!category){
    return res.status(404).json({
      message: "Categoria não encontrada!"
    });
  } 
  res.status(200).json({category});
});

app.post("/categories", (req, res) => { //Posta a Categoria nova c/Id auto.
  const category = {
    id: randomUUID(),
    ...req.body
  }
  categories.push(category);
  res.status(201).json(category);
});

app.put("/categories/:id", (req, res) => { //Altera os dados de um Id existente
  const category = categories.find((category) => {
    return category.id == req.params.id;
  });

  if (!category){
    return res.status(404).json({
      message: "Categoria não encontrada!"
    });
  } 

  category.name = req.body.name;
  category.description = req.body.description;

  res.status(200).json({category});
});

app.delete("/categories/:id", (req, res) => { //Deleta os dados de um Id existente
  const category = categories.find((category) => {
    return category.id == req.params.id;
  });

  if (!category){
    return res.status(404).json({
      message: "Categoria não encontrada!"
    });
  }

  const index = categories.indexOf(category);
  categories.splice(index, 1);

  res.status(200).json({message:"Categoria Excluida com Exito"});
});


//==================== Products ============================

app.get("/products", (req, res) => { //Puxa Todos os Produtos
    res.status(200).json({products});
});

app.get("/products/:id", (req, res) => { //Puxa o produto pelo ID
  const product = products.find((product) => {
    return product.id == req.params.id;
  });

  if (!product){
    return res.status(404).json({
      message: "Produto não encontrado!"
    });
  } 
  res.status(200).json({product});
});

app.post("/products", (req, res) => { //Posta um novo produto c/ID auto
  const product = {
    id: randomUUID(),
    ...req.body
  };
  products.push(product);
  res.status(201).json(product);
});

app.put("/products/:id", (req, res) => { //Altera os dados de um Id existente
  const product = products.find((product) => {
    return product.id == req.params.id;
  });

  if (!product){
    return res.status(404).json({
      message: "Categoria não encontrada!"
    });
  } 

  product.name = req.body.name;
  product.description = req.body.description;

  res.status(200).json({product});
});

app.delete("/products/:id", (req, res) => { //Deleta os dados de um Id existente
  const product = products.find((product) => {
    return product.id == req.params.id;
  });

  if (!product){
    return res.status(404).json({
      message: "Produto não encontrado!"
    });
  }

  const index = products.indexOf(product);
  products.splice(index, 1);

  res.status(200).json({message:"Produto Excluido com Exito"});
});


export default app;