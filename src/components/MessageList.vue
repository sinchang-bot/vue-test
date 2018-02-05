<template>
  <div>
    <header class="list-header">
      <slot name="header">
        This is a default header
      </slot>
    </header>
    <ul class="list-messages">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import Message from './Message'
export default {
  name: 'MessageList',
  props: ['messages'],
  components: {
    Message
  },
  methods: {
    handleMessageClick(message) {
      console.log(message)
    }
  }
}
</script>
