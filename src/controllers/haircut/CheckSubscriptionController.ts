import { Request, Response } from "express";
import { CheckSubscriptionService } from "../../services/haircut/CheckSubscriptionService";

class CheckSubscriptionController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const checkSubscriptionService = new CheckSubscriptionService();

    const checkSubscription = await checkSubscriptionService.execute({
      user_id,
    });

    return res.json(checkSubscription);
  }
}

export { CheckSubscriptionController };
