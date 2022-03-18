const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    const port1 = new Port('Port1')
    const port2 = new Port('Port2')

    const itineraryOne = new Itinerary([port1, port2]);
    
    it('can be instantiated', () => {
        expect(itineraryOne).toBeInstanceOf(Object);
    })

    it('has a ports property', () => {
        expect(itineraryOne.ports).toEqual([port1, port2]);
    })
})