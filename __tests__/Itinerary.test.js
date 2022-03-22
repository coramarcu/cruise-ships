const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
    const ramkinHallPort = {name: "Ramkin Hall", ships: [], addShip: jest.fn(), removeShip: jest.fn()};
    const quirmPort = {name: "Quirm", ships: [], addShip: jest.fn(), removeShip: jest.fn()};
    const itineraryOne = new Itinerary([ramkinHallPort, quirmPort]);
    
    it('can be instantiated', () => {
        expect(itineraryOne).toBeInstanceOf(Object);
    })

    it('has a ports property', () => {
        expect(itineraryOne.ports).toEqual([ramkinHallPort, quirmPort]);
    })
})