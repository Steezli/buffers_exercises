

describe('buffer', () => {
  it('creates a buffer of length 10', () => {
    const buf = Buffer.alloc(10);
    expect(buf).toHaveLength(10);
  });

  it('creates a buffer from a string', () => {
    const buf = Buffer.from('its a string');
    
    expect(buf).toHaveLength(12);
    expect(buf.toString()).toEqual('its a string');

    const hBuf = buf.map(() => 105);
    expect(hBuf.toString()).toEqual('iiiiiiiiiiii');
  });
});
