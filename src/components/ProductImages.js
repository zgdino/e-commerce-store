import React, { useState } from 'react'
import styled from 'styled-components'

// if images is undefined, make it an empty array with one object that has one value(url) of an empty string → doing this to avoid initial errors
const ProductImages = ({ images = [{ url: '' }] }) => {
  // setting up the first image to be the one diplayed by default
  const [main, setMain] = useState(images[0])

  return (
    <Wrapper>
      {/* ---- MAIN IMAGE ---- */}
      <img src={main.url} alt='main image' className='' />
      {/* ---- GALLERY OF IMAGES ---- */}
      <div className='gallery'>
        {/* index ~ id */}
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              // once clicked make it the main image
              onClick={() => setMain(images[index])}
              // if this is image currently being displayed, make a slight border around it in gallery
              className={`${image.url === main.url ? 'active' : null}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
