import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { journeyCards } from '../../data/siteData';

const SectionWrapper = styled.section`
  padding: 0 32px 64px 32px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px 48px 16px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  padding: 60px 20px 48px 20px;

  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 44px;
    font-weight: 600;
    line-height: 1.15;
    color: ${({ theme }) => theme.colors.foreground};
    text-transform: lowercase;

    @media (max-width: 1024px) {
      font-size: 36px;
    }

    @media (max-width: 640px) {
      font-size: 28px;
    }
  }

  p {
    margin-top: 16px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    line-height: 1.5;
    color: rgba(15, 23, 42, 0.7);
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;

    strong {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.foreground};
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled(Link)`
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  display: block;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover img {
    transform: scale(1.06);
  }
`;

const CardScrim = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15, 23, 42, 0.88) 0%,
    rgba(15, 23, 42, 0.35) 50%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  transition: opacity 0.3s ease;

  @media (min-width: 641px) {
    ${Card}:hover & {
      opacity: 0;
    }
  }
`;

const CardHoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(27, 50, 151, 0.94);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 28px;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (min-width: 641px) {
    ${Card}:hover & {
      opacity: 1;
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 26px;
    font-weight: 600;
    color: #ffffff;
    text-transform: lowercase;
  }

  p {
    margin-top: 10px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 14.5px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
  }

  span.btn {
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

const CardLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #ffffff;
`;

const CardDescMobile = styled.p`
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.85);

  @media (min-width: 641px) {
    display: none;
  }
`;

export const JourneyCards = () => {
  return (
    <SectionWrapper id="donate">
      <SectionHeader>
        <h2>ready to support dementia care in Zimbabwe?</h2>
        <p>
          There are lots of great ways to bring hope, care, and dignity to affected families.<br />
          <strong>Take the first step today.</strong>
        </p>
      </SectionHeader>

      <CardsGrid>
        {journeyCards.map((card, idx) => (
          <Card key={idx} to={card.link}>
            <img src={card.image} alt={card.alt} loading="lazy" />
            <CardScrim>
              <CardLabel>{card.label}</CardLabel>
              <CardDescMobile>{card.description}</CardDescMobile>
            </CardScrim>
            <CardHoverOverlay>
              <h3>{card.label}</h3>
              <p>{card.description}</p>
              <span className="btn">
                Get Started <span>→</span>
              </span>
            </CardHoverOverlay>
          </Card>
        ))}
      </CardsGrid>
    </SectionWrapper>
  );
};
