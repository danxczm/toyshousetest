import React from 'react';
import Button from './button';

const ContactButton = () => (
  <div className='justify-center px-14 py-5 mt-16 font-medium tracking-widest text-center text-white bg-blue-400 rounded-xl leading-[108%]'>
    Let’s Talk
  </div>
);

const InfoItem = ({
  label,
  content,
}) => (
  <div className='flex justify-between gap-5 mt-7'>
    <div className='text-base italic font-extrabold leading-7 tracking-wider'>
      {label}.
    </div>
    <div className='text-lg font-light leading-7 tracking-widest grow'>
      {content}
    </div>
  </div>
);

const NavLink = ({ children }) => (
  <div className='text-lg font-light leading-7 tracking-widest mt-7'>
    {children}
  </div>
);

function ContactPage() {
  const infoItems = [
    {
      label: 'A',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      label: 'T',
      content: '+38 091 234 56 78',
    },
    {
      label: 'E',
      content: 'hello.ira@gmail.com',
    },
  ];

  const navLinks = [
    'About',
    'What We Do',
    'Project',
    'How It Work With Us',
  ];

  const socialLinks = [
    'Instagram',
    'Facebook',
    'LinkedIn',
    'Youtube',
  ];

  return (
    <section className='flex flex-col py-11 mx-auto sm:px-[15px] w-full text-white bg-[#316099] rounded-tr-[200px]'>
      <div className='flex flex-col w-full mt-12 text-2xl'>
        <h2 className='mx-auto text-4xl font-bold leading-10 tracking-widest'>
          Interested to work with our
          team?
        </h2>
        <p className='text-2xl leading-10 tracking-widest mt-14 md:w-[460px] opacity-60'>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor
          incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim
          veniam.
        </p>
        <Button>Let’s Talk</Button>
      </div>
      {/* <section className='flex flex-col w-full pl-4 pr-20 mt-14'>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/b112b44384fe17a6c0c15a1929bf549cd357b1fe5e0ab0e9ffd0f8bba67260c8?apiKey=f507e8cf8a6d4598a5b206e56f2791a4&'
          className='mt-14 w-full stroke-[1px] stroke-white'
          alt=''
        />
        {infoItems.map(
          (item, index) => (
            <InfoItem
              key={index}
              label={item.label}
              content={item.content}
            />
          )
        )}

        <section className='mt-16 text-2xl italic font-semibold tracking-wider'>
          About US
          {navLinks.map(
            (link, index) => (
              <NavLink key={index}>
                {link}
              </NavLink>
            )
          )}
        </section>

        <section className='mt-16 text-2xl italic font-semibold tracking-wider'>
          Follow
          {socialLinks.map(
            (link, index) => (
              <NavLink key={index}>
                {link}
              </NavLink>
            )
          )}
        </section>
      </section>

      <footer className='text-base leading-7 tracking-wider mt-14'>
        2019 © All rights reserved.
      </footer> */}
    </section>
  );
}

export default ContactPage;
