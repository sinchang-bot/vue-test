<template>
  <div id="app">
     <MessageList :messages="messages"/>
  </div>
</template>

<script>
import MessageList from './MessageList'

export default {
  name: 'app',
  data: () => ({ messages: ['Hey John', 'Howdy Paco'] }),
  components: {
    MessageList
  }
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>
