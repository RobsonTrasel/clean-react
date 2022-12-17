import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClientSpy } from '../../tests/mock-http-client';

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut, 
    httpPostClientSpy
  }
}

describe('[Test] Remote Authentication', () => {
  test('Should be call HttpClient with the correct url', async () => {
    const url = 'other_url'
    const {sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
