import { shallowMount } from "@vue/test-utils"
import Memes from '@/components/Memes.vue'

describe('<Memes />', () => {
	test('Should Match snapshot', () => {
		const wrapper = shallowMount( <Memes />)
		expect( wrapper.html() ).toMatchSnapshot()
	})
})