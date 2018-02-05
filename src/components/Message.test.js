import { mount } from '@vue/test-utils'
import Message from './Message.vue'

describe('Message.test.js', () => {
  const createCmp = propsData => mount(Message, { propsData })
  let cmp

  describe('Properties', () => {
    it('has a message property', () => {
      cmp = createCmp({ message: 'yep' })
      expect(cmp.props().message).toBeTruthy()
    })

    it('has no cat property', () => {
      cmp = createCmp({ cat: 'hey' })
      expect(cmp.props().cat).toBeTruthy()
    })

    it('Paco is the default author', () => {
      cmp = createCmp({ message: 'hey' })
      expect(cmp.vm.author).toEqual('Paco')
    })

    // it('message is of type string', () => {
    //   let spy = jest.spyOn(console, 'error')
    //   cmp = createCmp({ message: 1 })
    //   expect(spy).toBeCalledWith(expect.stringContaining('[Vue warn]: Invalid prop'))
    //   spy.mockReset() // or mockRestore() to completely remove the mock
    // })

    describe('Validation', () => {
      const message = createCmp({ message: 'yep' }).vm.$options.props.message

      it('message is of type string', () => {
        expect(message.type).toBe(String)
      })

      it('message is required', () => {
        expect(message.required).toBeTruthy()
      })

      it('message has at least length 2', () => {
        expect(message.validator && message.validator('a')).toBeFalsy()
        expect(message.validator && message.validator('aa')).toBeTruthy()
      })
    })
  })

  describe('Events', () => {
    beforeEach(() => {
      cmp = createCmp({ message: 'Cat' })
    })

    it('calls handleClick when click on message', () => {
      const stub = jest.fn()
      cmp.setMethods({ handleClick: stub })

      const el = cmp.find('.message').trigger('click')
      expect(stub).toBeCalled()
    })

    it('triggers a message-clicked event when a handleClick method is called', () => {
      const stub = jest.fn()
      cmp.vm.$on('message-clicked', stub)
      cmp.vm.handleClick()

      expect(stub).toBeCalledWith('Cat')
    })
  })
})
