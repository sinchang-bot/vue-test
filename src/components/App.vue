<template>
  <div id="app">
    <MessageList>
      <header slot="header">
        Awesome header
      </header>
      <Message
        @message-clicked="handleMessageClick"
        :message="message"
        v-for="message in messages"
        :key="message"/>
      <button class="fake-button">button</button>
     </MessageList>
  </div>
</template>

<script>
import MessageList from "./MessageList";
import Message from "./Message";

export default {
  name: "app",
  data: () => ({ messages: ["Hey John", "Howdy Paco"] }),
  components: {
    MessageList,
    Message
  },
  methods: {
    handleMessageClick(message) {
      console.log(message);
    }
  }
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>
