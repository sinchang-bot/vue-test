import { mount } from '@vue/test-utils'

import MessageList from './MessageList.vue'

describe('MessageList.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(MessageList, {
      // Beaware that props is overriden using `propsData`
      propsData: {
        messages: ['Cat']
      }
    })
  })

  it('has received ["Cat"] as the message property', () => {
    expect(cmp.vm.messages).toEqual(['Cat'])
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
