

describe('buffer', () => {
  it('creates a buffer of length 10', () => {
    const buf = Buffer.alloc(10);
    expect(buf).toHaveLength(10);
  });

  it('creates a buffer from a string', () => {
    const buf = Buffer.from('its a string');
    
    expect(buf).toHaveLength(12);
    expect(buf.toString()).toEqual('its a string');

    const iBuf = buf.map(() => 105);
    expect(iBuf.toString()).toEqual('iiiiiiiiiiii');
  });

  it('creates a buffer from a string', () => {
    const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
    
    expect(smile).toHaveLength(4);
    expect(smile.toString()).toEqual('😁');
  });
});
