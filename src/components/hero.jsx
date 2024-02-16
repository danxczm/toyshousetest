import burger from '../public/ic_menu_48px.png';
import logo from '../public/Group.png';
import hero from '../public/heropic.png';

const Hero = () => {
  return (
    <section className='pt-10 px-[15px] min-h-[768px] bg-gradient-to-t from-[#98C3E8]/20 via-[#98C3E800] to-[#98C3E800] md:px-10'>
      <div className='max-w-[1140px] mx-auto'>
        <nav className='flex items-center justify-between mb-[52px] md:mb-[64px]'>
          <div className='w-12 h-12 flex justify-center items-center'>
            <a href='/'>
              <img
                src={logo}
                alt='logo'
                loading='lazy'
              />
            </a>
          </div>
          <div className='w-8 h-8 flex justify-center items-center'>
            <button>
              <img
                src={burger}
                alt='burger'
                loading='lazy'
              />
            </button>
          </div>
        </nav>
        <div className='flex relative'>
          <div>
            <h1 className='font-extrabold text-[#1F3F68] tracking-[2%] md:tracking-[4%] uppercase text-5xl md:text-[64px] w-[238px] md:w-[525px] leading-[62.4px] md:leading-[83.2px] mb-[55px]'>
              HELLO WORLD ! My name is
              Ira
            </h1>
            <p className='text-lg leading-7 tracking-[4%] md:w-[425px] opacity-60 text-[#1F3F68] mb-[70px]'>
              Lorem ipsum dolor sit
              amet, consectetur
              adipiscing elit. Faucibus
              tristique vulputate
              ultrices ut mauris tellus
              at. Posuere sollicitudin
              odio tellus elit
            </p>
            <button className='bg-[#5A98D0] text-white w-[220px] h-14 rounded-[10px] mb-[59px] md:mb-[184px]'>
              See Our Project
            </button>
          </div>
          <div className='absolute hidden lg:block -z-10 w-[687px] right-0'>
            <img
              src={hero}
              alt='hero'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
