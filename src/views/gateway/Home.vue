<template>
  <div class="home">
      <svg-icon iconClass="course_code"></svg-icon>
      <div>Welcome to Your Vue.js App</div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary" plain>主要按钮</el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class  extends Vue {
  private input:string =  ''
}
</script>

<style lang="scss" scoped>

</style>