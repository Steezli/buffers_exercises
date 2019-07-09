

describe('buffer', () => {
  it('creates a buffer of length 10', () => {
    const buf = Buffer.alloc(10);
    expect(buf).toHaveLength(10);
  });

});
