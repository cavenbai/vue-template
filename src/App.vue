<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {

}
</script>
<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
