const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    const ramkinHall = new Port('Ramkin Hall')
    const quirm = new Port('Quirm')

    const itineraryOne = new Itinerary([ramkinHall, quirm]);
    
    it('can be instantiated', () => {
        expect(itineraryOne).toBeInstanceOf(Object);
    })

    it('has a ports property', () => {
        expect(itineraryOne.ports).toEqual([ramkinHall, quirm]);
    })
})