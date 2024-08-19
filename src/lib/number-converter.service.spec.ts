import { NumberConverter } from './number-converter.service';

describe('NumberConverter', () => {
  let service: NumberConverter;

  beforeEach(() => {
    service = new NumberConverter();
  });

  it('should convert numbers with a "k" suffix', () => {
    expect(service.convert('250k')).toBe(250_000);
  });

  it('should convert numbers with a "m" suffix', () => {
    expect(service.convert('10m')).toBe(10_000_000);
  });

  it('should convert numbers with a "b" suffix', () => {
    expect(service.convert('.5b')).toBe(500_000_000);
  });

  it('should convert numbers without a suffix', () => {
    expect(service.convert('1000')).toBe(1000);
  });

  it('should convert negative numbers', () => {
    expect(service.convert('-1000')).toBe(-1000);
  });

  it('should convert negative numbers with a valid suffix', () => {
    expect(service.convert('-100m')).toBe(-100_000_000);
  });

  it('should throw if input is empty string', () => {
    expect(() => service.convert('')).toThrow();
  });

  it('should throw if input is undefined', () => {
    expect(() => service.convert(undefined)).toThrow();
  });

  it('should throw if input is not in the correct format', () => {
    expect(() => service.convert('100a')).toThrow();
    expect(() => service.convert('1000c')).toThrow();
    expect(() => service.convert('1000ck')).toThrow();
    expect(() => service.convert('1000kc')).toThrow();
    expect(() => service.convert('a1000kc')).toThrow();
  });
});
