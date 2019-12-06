import hello from '../hello'

describe('Hello test', () => {
  test('it should return str param', () => {
    expect(hello('hello, world')).toEqual('hello, world')
  })
})
