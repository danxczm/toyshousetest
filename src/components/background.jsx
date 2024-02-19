import React from 'react';

function Background({ children }) {
    const images = [
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/db6f280f81f57036cb765f18a2c330c1a4f67437ef71c64e9f84d9426d1d7cca?apiKey=f507e8cf8a6d4598a5b206e56f2791a4&',
            alt: 'Decorative image',
            className:
                '-z-10 self-end mr-16 max-w-full aspect-[1.59] fill-blue-300 w-[744px] max-md:mr-2.5',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a8b6294c21cf1346ac62f802a660fd662806d97eff02dfd5cfd09360e80ede27?apiKey=f507e8cf8a6d4598a5b206e56f2791a4&',
            alt: 'Decorative image',
            className: '-z-10 w-full aspect-[1.22] fill-blue-300 max-md:max-w-full',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d30934b990b7e07a6df653ff5d3341c5c4ef919e26ed1387391a33abca098ed7?apiKey=f507e8cf8a6d4598a5b206e56f2791a4&',
            alt: 'Decorative image',
            className: '-z-10 mt-32 max-w-full aspect-[0.83] fill-blue-300 w-[369px] max-md:mt-10',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ea6d372b7ef0284a3584c0c6d0c1c38e46a6e287aa964a02795c187c5120ac22?apiKey=f507e8cf8a6d4598a5b206e56f2791a4&',
            alt: 'Decorative image',
            className:
                '-z-10 mt-80 w-full aspect-[1.28] fill-blue-300 max-md:mt-10 max-md:max-w-full',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1e3c6517f441aafeab1c58d79783a4642219bfd5a78edf66caa18f7917e504ab?apiKey=f507e8cf8a6d4598a5b206e56f2791a4&',
            alt: 'Decorative image',
            className: '-z-10 mt-32 max-w-full aspect-[1.52] fill-blue-300 w-[863px] max-md:mt-10',
        },
    ];

    return (
        <main className="">
            {/* <div>
                {images.map((image, index) => (
                    <img
                        key={index}
                        loading="lazy"
                        src={image.src}
                        alt={image.alt}
                        className={image.className}
                    />
                ))}
            </div> */}
            <div>{children}</div>
        </main>
    );
}

export default Background;
