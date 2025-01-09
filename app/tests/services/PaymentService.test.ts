
import { PaymentService } from "../../services/PaymentService";

const service = new PaymentService();

describe('PaymentService', () => {

    it ('should return total unpaid amount', async () => {
        const total = await service.findAll();
        expect(total).toBe(600);
    })
})