const { parentPort } = require('worker_threads');
const { foo } = require('./function');

parentPort.once('message', message => {
    if (message.limit) {
        const result = foo(message.limit);
        parentPort.postMessage(result);
    }
});