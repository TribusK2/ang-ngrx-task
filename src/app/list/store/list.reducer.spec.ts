import { listReducer, initialState } from './list.reducer';

describe('List Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = listReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
