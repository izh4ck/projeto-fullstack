import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


export async function getTodosPosts(){

    const db = conexao.db("DBlivros")
    const colecao = db.collection("colecao_livros")
    return colecao.find().toArray()
}

export async function criarPost(novoPost){

    const db = conexao.db("DBlivros")
    const colecao = db.collection("colecao_livros")
    return colecao.insertOne(novoPost);
}