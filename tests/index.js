import { expect } from 'chai';
import makeReducer from '../src/index';
const { describe, it } = global;

describe('makeReducer', () => {
  const reducer = makeReducer({
    defaultState: 10,
    ['INCREMENT'](state) {
      return state + 1;
    },
    ['DECREMENT'](state) {
      return state - 1;
    },
    ['ADD'](state, {payload}) {
      return state + payload;
    },
  });

  it('should use default state', () => {
    expect(reducer(undefined, 'INI')).to.equal(10);
  });

  it('should forward to appropriate reducer function', () => {
    expect(reducer(7, {type: 'INCREMENT'})).to.equal(8);
    expect(reducer(12, {type: 'DECREMENT'})).to.equal(11);
    expect(reducer(12, {type: 'ADD', payload: 6})).to.equal(18);
  });
});
