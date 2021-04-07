import React from 'react'

import Button, { ButtonProps } from './Button'
import {Story} from "@storybook/react";

export default {
  title: 'Example/Button',
  component: Button
}

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Button'
}
