import { Request, Response } from 'express';
import { PaymentService } from "../services/PaymentService";

const paymentService = new PaymentService();

export const findAll = async (req: Request, res: Response) => {

    const response: number = await paymentService.findAll();

    if (response) {
       res.status(200).json(response);
    }
} 

export const saudacao = (req: Request, res: Response) => {

    const { nome } = req.params;

    paymentService.saudacao(nome, (mensagem: string) => {
        res.status(200).json(mensagem);
    });

}
