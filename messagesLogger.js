function joinedLogger(level, sep) {
    return function f(...messages) {
        const result = [];
        messages.forEach(message => {
            if (message.level >= level) {
                result.push(message.text);
            }
        });
        console.log(result.join(sep));
    };
}

const logger = joinedLogger(21, ';');

logger({ level: 40, text: 'foo' }, { level: 90, text: 'bar' }, { level: 20, text: 'baz' }, { level: 21, text: 'bax' });