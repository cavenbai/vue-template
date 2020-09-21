<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" plain>测试按钮</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { coursesList } from '@/apis/backstage'
@Component
export default class  extends Vue {
  private input:string =  ''

  private mounted() {
    const params = { page_num: 1, page_size: 4, show_position: 2 };
    coursesList(params).then((response) => {
        console.log(response)
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
