import express from "express";
import cors from 'cors';
import routes from "../routes/postsRoutes.js";

const app = express();
app.use(cors());


routes(app);

app.use(express.json());

app.listen(8080, () => {
    console.log("servidor escutando");
} );

