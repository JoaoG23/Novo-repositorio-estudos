import { Request, Response } from "express";

import Post from "../schemas/Post";

class PostController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (error) {
      console.error(error);
      return res.json(error);
    }
  }
  public async findForStatus(req: Request, res: Response): Promise<Response> {
    
    // let idStatus = req.params.status;
    try {
      const posts = await Post.find();
      // const posts = await Post.findOne({status:idStatus});
      console.log(posts);
      // return res.json(posts);
    } catch (error) {
      console.error(error);
      return res.json(error);
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const addPost = await Post.create(req.body);
      return res.json(addPost);
    } catch (error) {
      console.error(error);
      return res.json(error);
    }
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    try {
      let idEncontrado = req.params.id;
      const deletePost = await Post.findOneAndDelete({ _id: idEncontrado });
      return res.json(deletePost);
    } catch (error) {
      console.error(error);
      return res.json(error);
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      let idEncontrado = req.params.id;

      const newPost = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        dataEntrega: req.body.dataEntrega,
      };
      const updatePost = await Post.updateOne({ _id: idEncontrado }, newPost);
      return res.json(updatePost);
    } catch (error) {
      console.error(error);
      return res.json(error);
    }
  }
}

export default new PostController();
