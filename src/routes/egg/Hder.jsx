import React from 'react'
import { VueWrapper } from 'vuera'
import MyVueComponent from './Header.vue'

export default () => <VueWrapper component={MyVueComponent} name="Hello from Vue!" />
