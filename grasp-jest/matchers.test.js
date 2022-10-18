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