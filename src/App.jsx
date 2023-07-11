import React from 'react'
import Bounce from 'react-reveal/Bounce';
import '../src/css/responsive.css'
import Header from './pages/Header'
import Explore from './pages/Explore'
import Creators from './pages/Creators'
import Info from './pages/Info'
import Footer from './pages/Footer'
import Partners from './pages/Partners'
import Slider from './pages/test'
import Categories from './pages/Categories'
import Subscribe from './pages/Subscribe'




const App = () => {
  return (
    <>
      <Bounce bottom>
      <Header></Header>
      </Bounce>
      <Bounce  bottom>
      <Explore></Explore>
       </Bounce>
       <Bounce bottom>
       <Partners></Partners>
       </Bounce>
       <Bounce bottom>
       <Slider></Slider>
       </Bounce>
       <Bounce bottom>
       <Categories></Categories>
       </Bounce>
       <Bounce bottom>
       <Info></Info>
       </Bounce>
       <Bounce bottom>
       <Creators></Creators>
       </Bounce>
       <Bounce bottom>
       <Subscribe></Subscribe>
       </Bounce>
       <Bounce bottom>
       <Footer></Footer>
      </Bounce>
    </>
  )
}

export default App