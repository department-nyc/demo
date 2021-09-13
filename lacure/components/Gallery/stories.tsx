import { Gallery } from '@/components/Gallery'
import { ComponentMeta, ComponentStory } from '@storybook/react'

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
