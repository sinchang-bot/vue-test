<template>
    <ul>
      <Message
        v-for="(message, index) in messages"
        :message="message"
        :key="index" />
    </ul>
</template>

<script>
import Message from './Message'
export default {
  name: 'list',
  props: ['messages'],
  components: {
    Message
  }
}
</script>
