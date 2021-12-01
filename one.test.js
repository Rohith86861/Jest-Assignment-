var one = require('./one');

test('one.sum', () => {
    expect(one.sum(1, 2)).toBe(3);
}),
test('one.sub', () => {
    expect(one.sub(1, 2)).toBe(-1);
}),
test('one.mul', () => {
    expect(one.mul(1, 2)).toBe(2);
}),
test('one.div', () => {
    expect(one.div(1, 2)).toBe(0.5);
});