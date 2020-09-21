import components from '@/plugins/component'
import element from '@/plugins/element'

export default async function () {
  await components()
  await element()
}