import { Truncate.Pipe.TsPipe } from './truncate.pipe.ts.pipe';

describe('Truncate.Pipe.TsPipe', () => {
  it('create an instance', () => {
    const pipe = new Truncate.Pipe.TsPipe();
    expect(pipe).toBeTruthy();
  });
});
