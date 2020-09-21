<template>
  <div class="error-page">
      <img class="error-page--pic" src="@/assets/images/404.png" alt @click="$router.go(-1)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Errors extends Vue {}
</script>

<style lang="scss" scoped> 
.error-page{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .error-page--pic {
    width: 184px;
    height: 183px;
  }
}
</style>
