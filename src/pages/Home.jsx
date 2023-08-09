<<<<<<< HEAD
=======
import About from '../components/AboutUs/About'
import Carousel from '../components/Home/Carousel'
>>>>>>> 8de424c4526e935bf4f97c5746fb43bab51bd86e
import Hero from '../components/Home/Hero'
import Slider from '../components/Home/Slider'

function Home() {
  const slides = [
    { image: '/image.jpeg'},
    { image: '/image.jpeg'},
    { image: '/image.jpeg'},
    { image: '/image.jpeg'},
    { image: '/image.jpeg'}
  ];
  const containerStyles = {
    // width: '500px',
    // height: '280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '100px'
  };
  return (
    <>
      <Hero/>
<<<<<<< HEAD
=======
      <About/>
      <Slider />
      <div className='w-[350px] h-[190px] xs:w-[450px] xs:h-[250px] sm:w-[500px] sm:h-[280px] lg:w-[1210px] md:h-[620px] md:w-[1020px] mt-5' style={containerStyles}>
        <Carousel slides={slides} />
      </div>
>>>>>>> 8de424c4526e935bf4f97c5746fb43bab51bd86e
    </>
  )
}

export default Home
