const EventEmmiter = require('events');

class School extends EventEmmiter {
    startPeriod() {
        console.log('Class started');
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended'
            });
        }, 2000);
    }
}

module.exports = School;