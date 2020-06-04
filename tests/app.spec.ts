import { App } from '../src';


describe('When init App', () => {

    it('should print a log in console.', () => {

        console.log = jasmine.createSpy('log');
        App.init();

        expect(console.log).toHaveBeenCalledTimes(1);
    });

});
