const { parentPort } = require('worker_threads');

parentPort.on('message', (payments) => {
    const total = payments.reduce((accumulator, current) => accumulator + current.amount, 0);
    parentPort.postMessage(total);
});

        
