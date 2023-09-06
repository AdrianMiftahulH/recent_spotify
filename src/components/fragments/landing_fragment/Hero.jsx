import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { FaSpotify, FaApple } from 'react-icons/fa';
import { ButtonLogin } from '../../elements';

const ImgSlides = [
    {
        id: 1,
        src: "https://placehold.co/370x500/000000/FFFFFF/png",
        alt: "img 1"
    },
    {
        id: 2,
        src: "https://placehold.co/370x500/010101/FFFFFF/png",
        alt: "img 2"
    },
    {
        id: 3,
        src: "https://placehold.co/370x500/i3i3i3/FFFFFF/png",
        alt: "img 3"
    },
];

const LinkLogins = [
    {
        id: 1,
        logo: <FaSpotify />,
        name: "Spotify",
        link: "/1",
        color: "#1db954"
    },
    {
        id: 2,
        logo: <FaApple />,
        name: "Apple Music",
        link: "/2",
        color: "#fc3c44"
    },
]

const Hero = () => {
  return (
    <section className="w-full min-h-[80vh] grid grid-rows-3 grid-flow-col gap-4 mt-5">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="w-[380px] row-span-3 p-6"
        >
            {ImgSlides.map((imgSlide) => (
                <SwiperSlide key={imgSlide.id} >
                    <img 
                    src={imgSlide.src} 
                    alt={imgSlide.alt}
                    className='w-[370px] h-[500px] rounded-lg text-neutral' />
                </SwiperSlide>
            ))}
        </Swiper>
        <h1 className='row-span-2 text-[72px] font-extrabold h-auto'>Top Tracker Music Generator</h1>
        <article className='row-span-1'>
            <p className='pb-2'>Login with</p>
            <div className='inline-flex gap-2'>
                {LinkLogins.map((LinkLogin) => (
                    <ButtonLogin 
                    key={LinkLogin.id}
                    color={LinkLogin.color}
                    link={LinkLogin.link}>
                        {LinkLogin.logo}
                        <span>{LinkLogin.name}</span>
                    </ButtonLogin>
                ))}
            </div>
        </article>
    </section>
  )
}

export default Hero