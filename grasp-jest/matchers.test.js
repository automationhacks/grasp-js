// Source: https://jestjs.io/docs/using-matchers

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    // toEqual recursively checks every field of an object or array.
    expect(data).toEqual({one: 1, two: 2});
})

test('adding positive nos is not zero', () => {
    for (let first = 1; first < 10; first++) {
        for (let second = 1; second < 10; second ++) {
            // Use not to inverse condition
            expect(first + second).not.toBe(0);
        }
    }
})

// Choose appropriate matcher based on the source code should behave 
test('truthiness matchers for null values', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('truthiness matchers for zero', () => {
    const z = 0;
    expect(z).not.toBeNull(); 
    expect(z).toBeDefined(); 
    expect(z).not.toBeUndefined(); 
    expect(z).not.toBeTruthy(); 
    expect(z).toBeFalsy(); 
});

test('numbers test: two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);

    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are same for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});