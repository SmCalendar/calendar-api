import request from 'supertest';
import app from "../../app";


describe('GET /payment', () => {

    it('should return total unpaid amount', async () => {

        const response = await request(app).get('/api/events/payments');

        console.log(response.body);
        expect(response.status).toBe(200);

    });

});