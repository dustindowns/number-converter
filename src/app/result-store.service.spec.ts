import { ResultStore } from './result-store.service';

describe('ResultStore', () => {
  let store: ResultStore;

  beforeEach(() => {
    store = new ResultStore();
  });

  it('should initialize with a result of 0', () => {
    expect(store.getResult()).toBe(0);
  });

  it('should save results', () => {
    const result = 100;
    store.saveResult(result);
    expect(store.getResult()).toBe(result);
  });
});
