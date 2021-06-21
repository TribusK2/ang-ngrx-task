import * as fromlist from './list.reducer';
import { selectListstate } from './list.selectors';

describe('List Selectors', () => {
  pending()
  it('should select the feature state', () => {
    const result = selectListstate({
      [fromlist.listFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
