import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TItleCards from '../../components/TitleCards/TItleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <div className='hero'>
          <img src={hero_banner} alt="" className='banner-img' />
          <div className='hero-caption'>
              <img src={hero_title} alt="" className='caption-img'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, neque. Necessitatibus hic quos distinctio dolorem voluptates ex, reiciendis dolores sint asperiores sapiente, veniam repellat tenetur vero cupiditate velit! Deleniti, quisquam.</p>
              <div className='hero-btns'>
                      <button className='btn'>
                        <img src={play_icon} alt="" />play
                      </button>
                      <button className='btn dark-btn'>
                        <img src={info_icon} alt="" />More Info
                      </button>
              </div>
              <div className='title-cards'>
                <TItleCards/>
              </div>
          </div>
      </div>
      <div className="more-cards">
        <TItleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TItleCards title={"Only on You"} category={"popular"}/>
        <TItleCards title={"Upcoming"} category={"top_rated"} />
        <TItleCards title={"Top Pics for You"} category={"top_rated"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
