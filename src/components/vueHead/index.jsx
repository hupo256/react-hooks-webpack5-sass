import React from 'react'
import { VueWrapper } from 'vuera'
// import MyVueComponent from './Header.vue'
import Header from 'vueSer/Header' // 远程

export default props => <VueWrapper component={Header} name={props.name} />
