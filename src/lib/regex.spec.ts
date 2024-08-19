import { VALID_FINANCIAL_NUMBER } from './regex';

describe('VALID_FINANCIAL_NUMBER regex', () => {
  it('should match integer numbers', () => {
    expect(VALID_FINANCIAL_NUMBER.test('250')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-250')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('0')).toBeTrue();
  });
  it('should match decimal numbers', () => {
    expect(VALID_FINANCIAL_NUMBER.test('200.256')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-200.256')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('.256')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-.256')).toBeTrue();
  });
  it('should match numbers having a "k" suffix', () => {
    expect(VALID_FINANCIAL_NUMBER.test('250k')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-250k')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('250.123k')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-250.123k')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-.5k')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-.5k')).toBeTrue();
  });
  it('should match numbers having a "m" suffix', () => {
    expect(VALID_FINANCIAL_NUMBER.test('10m')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-10m')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('10.123m')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-10.123m')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-.5m')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-.5m')).toBeTrue();
  });
  it('should match numbers having a "b" suffix', () => {
    expect(VALID_FINANCIAL_NUMBER.test('10b')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-10b')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('10.123b')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-10.123b')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-.5b')).toBeTrue();
    expect(VALID_FINANCIAL_NUMBER.test('-.5b')).toBeTrue();
  });
  it('should NOT match numbers having invalid suffixes', () => {
    expect(VALID_FINANCIAL_NUMBER.test('10z')).toBeFalse();
    expect(VALID_FINANCIAL_NUMBER.test('-10d')).toBeFalse();
    expect(VALID_FINANCIAL_NUMBER.test('10.123e')).toBeFalse();
    expect(VALID_FINANCIAL_NUMBER.test('-10.123f')).toBeFalse();
    expect(VALID_FINANCIAL_NUMBER.test('-.5t')).toBeFalse();
    expect(VALID_FINANCIAL_NUMBER.test('-.5v')).toBeFalse();
  });
  it('should NOT match numbers containing more than 1 suffix', () => {
    expect(VALID_FINANCIAL_NUMBER.test('10bk')).toBeFalse();
    expect(VALID_FINANCIAL_NUMBER.test('-10bm')).toBeFalse();
    expect(VALID_FINANCIAL_NUMBER.test('10.123ab')).toBeFalse();
    expect(VALID_FINANCIAL_NUMBER.test('-10.123ba')).toBeFalse();
    expect(VALID_FINANCIAL_NUMBER.test('-.5bt')).toBeFalse();
    expect(VALID_FINANCIAL_NUMBER.test('-.5tb')).toBeFalse();
  });
});
