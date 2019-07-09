const EventEmitter = require('events');

describe('event emitters', () => {
  it('emits and listens to events', done => {
    const ee = new EventEmitter();

    ee.on('I did a thing', () => {
      done();
    });
    
    ee.emit('I did a thing');
  });

  it('emits and listens to events with data', done => {
    const ee = new EventEmitter();

    ee.on('newDog', dog => {
      expect(dog).toEqual({
        name: 'rory',
        weight: 'fat'       
      });
      done();
    });
    
    ee.emit('newDog', {
      name: 'rory',
      weight: 'fat'
    });
  });
});
