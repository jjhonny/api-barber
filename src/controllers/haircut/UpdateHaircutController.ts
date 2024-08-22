import { Request, Response } from "express";
import { UpdateHaircutService } from "../../services/haircut/UpdateHaircutService";

class UpdateHaircutController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;
    const { name, price, status, haircut_id } = req.body;

    const updateHaircutService = new UpdateHaircutService();

    const updateHaircut = await updateHaircutService.execute({
      user_id,
      haircut_id,
      name,
      price,
      status,
    });

    return res.json(updateHaircut);
  }
}

export { UpdateHaircutController };
