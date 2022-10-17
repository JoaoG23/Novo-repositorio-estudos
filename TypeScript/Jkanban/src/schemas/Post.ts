import { Schema, model,Document } from "mongoose";

interface PostInterface extends Document {
    nome?: string,
    descricao?: string,
    status?:number,
    dataEntrega?:Date,
    dataCriacao?:Date,
}

const PostSchema = new Schema({
    nome:String,
    descricao:String,
    status:Number,
    dataEntrega:{ type:Date , default:Date.now },
    dataCriacao:{ type:Date , default:Date.now },
})

export default model<PostInterface>('Post', PostSchema);
