import reducer, {
  setBeers,
} from './slice';

describe('setBeers', () => {
  it('sets beers', () => {
    const beers = [{
      id: 1,
      name: 'Buzz',
    }];

    const state = reducer({
      beers: [],
    }, setBeers(beers));

    expect(state.beers).toEqual(beers);
  });
});
