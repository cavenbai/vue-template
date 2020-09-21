<template>
  <svg class="svg-icon" aria-hidden="true" :style="iconStyle">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
// 加载图标库文件
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext);
requireAll(require.context('../assets/svg', false, /\.svg$/));
@Component({
  components: {}
})
export default class SvgIcon extends Vue {

  @Prop({ required: true }) private iconClass!: string;

  @Prop({}) private iconColor!: string;

  @Prop({}) private iconSize!: string;

  private get iconName(): string {
    return `#icon-${this.iconClass}`;
  }

  private get iconStyle() {
    let style: any = { fontSize: `${this.iconSize}px` };
    if (this.iconColor) {
      style = { ...style, fill: `${this.iconColor}` };
    }
    return style;
  }
}
</script>

<style lang="scss">
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
