import theme from '@/styles/theme';
import styled from 'styled-components';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { BannerSliderType } from '@/types/types';

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  currentSlide?: number;
  slideCount?: number;
};

function BannerSlider({ images }: BannerSliderType) {
  const PrevArrow = (props: ArrowProps) => {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        type="button"
        aria-label="Previous">
        Previous
      </button>
    );
  };

  const NextArrow = (props: ArrowProps) => {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        type="button"
        aria-label="Next">
        Next
      </button>
    );
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    dots: true,
    dotsClass: 'custom-dots',
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    draggable: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: function () {
      return <div className="custom-dot"></div>;
    },
  };

  return (
    <S.SliderWrapper>
      <S.SliderContainer>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`logoBanner-${index}`}
              />
            </div>
          ))}
        </Slider>
      </S.SliderContainer>
    </S.SliderWrapper>
  );
}

const S = {
  SliderWrapper: styled.div`
    width: 100%;
    height: 70%;
    position: relative;
  `,
  SliderContainer: styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primary};
    overflow: visible;
    position: relative;

    .slick-slider {
      width: 100%;
      height: 100%;
    }

    .slick-list,
    .slick-track {
      height: 100%;
    }

    .custom-dots {
      margin-top: 3vh;
      position: absolute;
      display: flex !important;
      justify-content: flex-start;
      width: 100%;
      padding: 0;
      list-style: none;
      text-align: left;
    }

    .custom-dots li {
      position: relative;
      display: inline-block;
      width: 2vw;
      height: 0.8vh;
      cursor: pointer;
      margin-right: 1.5vw;
    }

    .custom-dots li .custom-dot {
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.lightGray3};
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    .custom-dots li.slick-active .custom-dot {
      width: 3vw;
      background-color: ${theme.colors.lightGray2};
    }

    .slick-prev,
    .slick-next {
      z-index: 10;
    }

    .slick-prev {
      left: 10px;
    }

    .slick-next {
      right: 10px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
};

export default BannerSlider;
