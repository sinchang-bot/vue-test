<template>
  <div id="app">
     <app-form></app-form>
  </div>
</template>

<script>
import AppForm from './Form'

export default {
  name: 'app',
  data: () => ({ messages: ['Hey John', 'Howdy Paco'] }),
  components: {
    AppForm
  }
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>
