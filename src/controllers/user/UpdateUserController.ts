import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { name, endereco } = req.body;
    const user_id = req.user_id;

    const updateUserService = new UpdateUserService();

    const updateUser = await updateUserService.execute({
      user_id,
      name,
      endereco,
    });

    return res.json(updateUser);
  }
}

export { UpdateUserController };
