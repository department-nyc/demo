import { Gallery } from '@/components/Gallery'
import store from '@/redux/store'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider } from 'react-redux'

export default {
    title: 'Gallery',
    component: Gallery,
} as ComponentMeta<typeof Gallery>

const Template: ComponentStory<typeof Gallery> = (args) => <Gallery {...args} />

export const Multiple = Template.bind({})
Multiple.args = {
    slideCount: 10,
}

export const SingleItem = Template.bind({})
SingleItem.args = {
    slideCount: 1,
}

// export const ReduxMock = Template.bind({})
// // TODO: Mock redux pattern
// ReduxMock.decorators = [
//     (Story) => (
//         <Provider store={store}>
//             <Story />
//         </Provider>
//     ),
// ]
