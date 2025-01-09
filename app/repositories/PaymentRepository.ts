import { Payment } from "../common/data";

export class PaymentRepository {

    private payments: Payment[] = [
        { id: 1, amount: 100, date: new Date() },
        { id: 2, amount: 200, date: new Date() },
        { id: 3, amount: 300, date: new Date() }
    ];

    async findAll(): Promise<Payment[]> {
        return this.payments;
    }


}