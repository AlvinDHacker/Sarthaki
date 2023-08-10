import Carousel from '../components/Home/Carousel'
import Hero from '../components/Home/Hero'
import Slider from '../components/Home/Slider'

function Home() {
  const slides = [
    { image: '/image.jpeg'},
    { image: '/person2.jpeg'},
    { image: '/person3.jpeg'},
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

      <Slider />
      <div className='w-[350px] h-[190px] xs:w-[450px] xs:h-[250px] sm:w-[500px] sm:h-[280px] lg:w-[1210px] md:h-[620px] md:w-[1020px] mt-5' style={containerStyles}>
        <Carousel slides={slides} />
      </div>
    </>
  )
}

export default Home
