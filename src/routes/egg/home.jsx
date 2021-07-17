import React from 'react'
import Page from '@src/components/page/index'
// import Loadable from '@src/components/loading/index'

// 使用vue组件
import { VueWrapper } from 'vuera'
import Hder from './Header.vue' // 本地
import Header from 'vueSer/Header' // 远程

// const ShowTex = Loadable(() => import('./showTex'))
// const Header = Loadable(() => import('vueSer/Header'))
import BreadBar from '@src/components/breadBar'
import ShowTex from './showTex'
import SayHi from 'fdTest/sayHi'

export default function App() {
  return (
    <Page title={`webpack5`}>
      <h2>App,QQWW wwew2</h2>
      <SayHi />
      <BreadBar />
      <ShowTex />

      <VueWrapper component={Hder} name="HPP VER" />
      <VueWrapper component={Header} name="WW EE" />
    </Page>
  )
}
