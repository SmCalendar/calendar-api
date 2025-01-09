import { Payment } from "../common/data";
import { PaymentRepository } from "../repositories/PaymentRepository";

import { Worker } from 'worker_threads'
import path from 'path';
require('ts-node').register();

export class PaymentService {

    private repository: PaymentRepository;

    constructor() {
        this.repository = new PaymentRepository();
    }

    async findAll(): Promise<number> {

        const payments: Payment[] = await this.repository.findAll();

        if (!payments) {
            throw new Error('No payments found');
        }

        return new Promise((resolve, reject) => { 
            const worker = new Worker('./app/workers/CalculateWorker.js');

            worker.postMessage(payments);
            worker.on('message', (total: number) => {             
                resolve(total);
            });
            worker.on('error', (err) => {
                reject(err);
            });
         });
    }
}