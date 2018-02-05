import { shallow } from '@vue/test-utils'
import Form from './Form'
import 'babel-polyfill'

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: 3 }))
}))

import axios from 'axios'

describe('Form.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(Form)
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('Calls axios.get', async () => {
    const result = await cmp.vm.onSubmit('an')

    expect(result).toEqual({ data: 3 })
    expect(cmp.vm.results).toEqual(3)
    expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/posts?q=an')
  })
})
