import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { modelSlides } from '../../data/siteData';

const SectionWrapper = styled.section`
  padding: 0 32px 64px 32px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px 48px 16px;
  }
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const LeftStickyCard = styled.div`
  position: relative;
  height: 80vh;
  min-height: 500px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;

  @media (min-width: 1025px) {
    position: sticky;
    top: 90px;
    align-self: flex-start;
  }

  @media (max-width: 1024px) {
    height: 40vh;
    min-height: 280px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StickyOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.25) 60%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 28px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 36px;
    font-weight: 600;
    color: #ffffff;
    text-transform: lowercase;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
`;

const ArrowControls = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

const NavArrow = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(8px);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
  }
`;

const RightSliderCard = styled.div`
  position: relative;
  height: 80vh;
  min-height: 500px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background-color: #0b132b;

  @media (max-width: 1024px) {
    height: 52vh;
    min-height: 380px;
  }
`;

const SlidesTrack = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.65s cubic-bezier(0.25, 1, 0.5, 1);
  transform: ${({ $currentIndex }) => `translateX(-${$currentIndex * 100}%)`};
`;

const SlideItem = styled.div`
  position: relative;
  min-width: 100%;
  height: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15, 23, 42, 0.88) 0%,
    rgba(15, 23, 42, 0.5) 45%,
    rgba(15, 23, 42, 0.1) 75%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 36px;

  @media (max-width: 768px) {
    padding: 22px;
  }
`;

const SlideTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 36px;
  font-weight: 600;
  color: #ffffff;
  text-transform: lowercase;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const SlideText = styled.p`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 17px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
  max-width: 720px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.45;
  }
`;

const SlideLink = styled(Link)`
  margin-top: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 22px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 14.5px;
  font-weight: 600;
  width: fit-content;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateX(2px);
  }
`;

const CTASlide = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 42px;
    font-weight: 600;
    color: #ffffff;
    text-transform: lowercase;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    margin-top: 16px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 19px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    max-width: 540px;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  button {
    margin-top: 28px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.primary};
    padding: 14px 30px;
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: 16px;
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
      transform: translateY(-2px);
    }
  }
`;

const PaginationDots = styled.div`
  position: absolute;
  bottom: 16px;
  right: 18px;
  display: flex;
  gap: 6px;
  z-index: 10;
`;

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? '#ffffff' : 'rgba(255, 255, 255, 0.4)')};
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    background-color: #ffffff;
  }
`;

export const OurModelCarousel = ({ onOpenDonate }) => {
  const [current, setCurrent] = useState(0);
  const total = modelSlides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <SectionWrapper>
      <LayoutGrid>
        {/* Left Sticky Column */}
        <LeftStickyCard>
          <img src="/assets/about-image-COnGSsqz.jpg" alt="DAZ Care Model" />
          <StickyOverlay>
            <h2>our care model</h2>
            <ArrowControls>
              <NavArrow onClick={prevSlide} aria-label="Previous care program">
                ←
              </NavArrow>
              <NavArrow onClick={nextSlide} aria-label="Next care program">
                →
              </NavArrow>
            </ArrowControls>
          </StickyOverlay>
        </LeftStickyCard>

        {/* Right Slider Column */}
        <RightSliderCard>
          <SlidesTrack $currentIndex={current}>
            {modelSlides.map((slide, idx) => (
              <SlideItem key={idx}>
                {slide.isCTA ? (
                  <CTASlide>
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                    <button onClick={onOpenDonate}>
                      Donate Today <span>→</span>
                    </button>
                  </CTASlide>
                ) : (
                  <>
                    <SlideImage src={slide.image} alt={slide.alt} />
                    <SlideOverlay>
                      <SlideTitle>{slide.title}</SlideTitle>
                      <SlideText>{slide.text}</SlideText>
                      {slide.link && (
                        <SlideLink to={slide.link}>
                          Learn more <span>→</span>
                        </SlideLink>
                      )}
                    </SlideOverlay>
                  </>
                )}
              </SlideItem>
            ))}
          </SlidesTrack>

          <PaginationDots>
            {modelSlides.map((_, idx) => (
              <Dot
                key={idx}
                $active={idx === current}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </PaginationDots>
        </RightSliderCard>
      </LayoutGrid>
    </SectionWrapper>
  );
};
