import express from "express";
import Category from "./models/Category.js";
import Product from "./models/Product.js";
import CategoryRoutes from "./routes/CategoryRoutes.js";

const app = express();
app.use(express.json());

// =================
// Root
// =================
app.get("/", (req, res) => {
    res.status(200).json({
        message: "API Restaurante",
        version: "1.0.0"
    });
});

// =================
// Categories
// =================
app.use("/categories", CategoryRoutes)

//app.get("/categories", async (req, res) => {
//});

//app.get("/categories/:id", async (req, res) => {
///});

//app.post("/categories", async (req, res) => {
//});

//app.put("/categories/:id", async (req, res) => {
//});

//app.delete("/categories/:id", async (req, res) => {
//});

// =================
// Products
// =================
app.get("/products", async (req, res) => {
    try {
        const products = await Product.findAll();

        res.status(200).json(products);
    } catch (error) {
        console.error("Erro ao buscar produtos: ", error);

        res.status(500).json({
            message: "Erro ao buscar produtos.",
        });
    }
});

app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);
    } catch (error) {
        console.error("Erro ao buscar produto: ", error);

        res.status(500).json({
            message: "Erro ao buscar produto.",
        });
    }
});

app.post("/products", async (req, res) => {
    try {
        const product = await Product.create(req.body);

        res.status(200).json(product);
    } catch (error) {
        console.error("Erro ao criar produto: ", error);

        res.status(500).json({
            message: "Erro ao criar Produto.",
        });
    }
})

app.put("/products/:id", async (req, res) => {
    try {
        const products = await Product.update(
          req.params.id,
          req.body
        );

        res.status(200).json(products);
    } catch (error) {
        console.error("Erro ao Alterar produtos: ", error);

        res.status(500).json({
            message: "Erro ao Alterar produtos.",
        });
    }
});

app.delete("/products/:id", async (req, res) => {
    try {
        await Product.remove(req.params.id);

        res.status(200).json({message: "Produto removida com sucesso"});
    } catch (error) {
        console.error("Erro ao Remover Produto: ", error);

        res.status(500).json({
            message: "Erro ao Remover categorias.",
        });
    }
});

export default app;