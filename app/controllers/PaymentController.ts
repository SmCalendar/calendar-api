import { Request, Response } from 'express';
import { PaymentService } from "../services/PaymentService";

const paymentService = new PaymentService();

export const findAll = async (req: Request, res: Response) => {

    const response: number = await paymentService.findAll();

    if (response) {
       res.status(200).json(response);
    }
} 
