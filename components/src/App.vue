<template>
  <oxd-button label="OXD button" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "@orangehrm/oxd/core/components/Button/Button.vue";

@Options({
  components: {
    Button
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
