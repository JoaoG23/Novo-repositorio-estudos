import { Router } from "express";

import PostContoller from "./controllers/PostContoller";
const routes = Router();

// routes.get('/posts', PostContoller.index);
routes.get('/status', PostContoller.findForStatus);
routes.post('/posts', PostContoller.create);
routes.put('/posts/:id', PostContoller.update); 
routes.delete('/posts/:id', PostContoller.remove);

export default routes;