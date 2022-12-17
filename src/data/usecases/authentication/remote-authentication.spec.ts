import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClientSpy } from '../../tests/mock-http-client';

describe('[Test] Remote Authentication', () => {
  test('Should be call HttpClient with the correct url', async () => {
    
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
