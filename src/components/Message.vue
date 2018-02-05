<template>
    <li style="margin-top: 10px" class="message" @click="handleClick">{{message}}</li>
</template>

<script>
  export default {
    props: {
      author: {
        type: String,
        default: 'Paco'
      },
      message: {
        type: String,
        required: true,
        validator: message => message.length > 1
      }
    },
    methods: {
      handleClick() {
        this.$emit('message-clicked', this.message)
      }
    },
    created() {
      // console.log('CREATED!')
    }
  }
</script>
