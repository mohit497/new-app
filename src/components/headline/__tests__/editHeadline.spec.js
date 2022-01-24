import { shallowMount } from '@vue/test-utils'
import EditHeadline from './EditHeadline.vue'

describe('edit headline component', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(EditHeadline)

  wrapper.setData({ news: { title: 'test'} })

  expect(wrapper.find('.error-message').exists()).toBe(true)

})