import { mount } from '@vue/test-utils'

import MessageList from './MessageList.vue'
import Message from './Message.vue'

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

  it('is a MessageList component', () => {
    expect(cmp.is(MessageList)).toBe(true)

    // Or with CSS selector
    expect(cmp.is('ul')).toBe(true)
  })

  it('contains a Message component', () => {
    expect(cmp.contains(Message)).toBe(true)

    // Or with CSS selector
    expect(cmp.contains('.message')).toBe(true)
  })

  it('Both MessageList and Message are vue instances', () => {
    expect(cmp.isVueInstance()).toBe(true)
    expect(cmp.find(Message).isVueInstance()).toBe(true)
  })

  it('Message element exists', () => {
    expect(cmp.find('.message').exists()).toBe(true)
  })

  it('Message is not empty', () => {
    expect(cmp.find(Message).isEmpty()).toBe(false)
  })

  it('Message has a class attribute set to "message"', () => {
    // For asserting "class", the `hasClass` method is easier
    expect(cmp.find(Message).attributes().class).toBe('message')
  })

  it('Message component has the .message class', () => {
    expect(cmp.find(Message).classes()).toContain('message')
  })

  it('Message component has style padding-top: 10', () => {
    expect(cmp.find(Message).element.style._values['margin-top']).toEqual('10px')
  })

  it('Calls handleMessageClick when @message-click happens', () => {
    const stub = jest.fn()
    cmp.setMethods({ handleMessageClick: stub })
    cmp.update()

    const el = cmp.find(Message).vm.$emit('message-clicked', 'cat')
    expect(stub).toBeCalledWith('cat')
  })
})
