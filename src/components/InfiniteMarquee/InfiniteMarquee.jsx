import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { marqueeItems } from '../../data/siteData';

const SectionWrapper = styled.section`
  padding: 0 0 64px 0;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    padding-bottom: 48px;
  }
`;

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const MarqueeTrack = styled.div`
  display: flex;
  gap: 20px;
  width: max-content;
  animation: ${scrollAnimation} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const CardLink = styled(Link)`
  display: block;
  width: 320px;
  height: 420px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    width: 260px;
    height: 360px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
`;

const CardCategory = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #ffffff;
  opacity: 0.8;
`;

const CardTitle = styled.h3`
  margin-top: 6px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 26px;
  font-weight: 600;
  color: #ffffff;
  text-transform: lowercase;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const CTACard = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 28px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 28px;
    font-weight: 600;
    color: #ffffff;
    text-transform: lowercase;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  p {
    margin-top: 12px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.85);
  }

  span.action-btn {
    margin-top: 20px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.primary};
    padding: 8px 18px;
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: 13.5px;
    font-weight: 600;
  }
`;

export const InfiniteMarquee = () => {
  // Duplicate the list to create a seamless infinite loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <SectionWrapper>
      <MarqueeTrack>
        {duplicatedItems.map((item, index) => (
          <CardLink key={index} to={item.link}>
            {item.type === 'cta' ? (
              <CTACard>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="action-btn">
                  Get Started <span>→</span>
                </span>
              </CTACard>
            ) : (
              <>
                <CardImage src={item.image} alt={item.title} loading="lazy" />
                <CardOverlay>
                  <CardCategory>{item.category}</CardCategory>
                  <CardTitle>{item.title}</CardTitle>
                </CardOverlay>
              </>
            )}
          </CardLink>
        ))}
      </MarqueeTrack>
    </SectionWrapper>
  );
};

