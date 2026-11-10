import React, { useState } from 'react';
import styled from 'styled-components';
import { Play, Heart, Shield } from 'lucide-react';

const SectionWrapper = styled.section`
  padding: 0 32px 64px 32px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px 48px 16px;
  }
`;

const VideoAspectRatio = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.15);
  background-color: #0b132b;

  img.hero-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const MediaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15, 23, 42, 0.85) 0%,
    rgba(15, 23, 42, 0.3) 50%,
    rgba(15, 23, 42, 0.6) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const TopBadges = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  .badge-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    color: #ffffff;
    padding: 6px 14px;
    border-radius: 9999px;
    font-size: 13px;
    font-weight: 600;
  }

  img.mohcc-badge {
    height: 36px;
    width: auto;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
  }
`;

const PlayCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayButton = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.25s ease;

  svg {
    margin-left: 4px;
  }

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
  }
`;

const BottomCaption = styled.div`
  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 32px;
    font-weight: 600;
    color: #ffffff;
    text-transform: lowercase;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    margin-top: 8px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.85);
    max-width: 640px;

    @media (max-width: 768px) {
      font-size: 13px;
      line-height: 1.4;
    }
  }
`;

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <SectionWrapper>
      <VideoAspectRatio>
        {isPlaying ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Dementia Association of Zimbabwe Community Story"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src="/assets/hero-image-BoGRMBqM.jpg"
              alt="Dementia care support in Zimbabwe"
              className="hero-cover"
            />
            <MediaOverlay>
              <TopBadges>
                <span className="badge-tag">
                  <Shield size={14} /> Ministry of Health & Child Care Partner
                </span>
                <img
                  src="/assets/mohcc-logo-CQ2Gfag9.png"
                  alt="Ministry of Health and Child Care Zimbabwe"
                  className="mohcc-badge"
                />
              </TopBadges>

              <PlayCenter>
                <PlayButton
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play video about Dementia Association of Zimbabwe"
                >
                  <Play size={28} fill="currentColor" />
                </PlayButton>
              </PlayCenter>

              <BottomCaption>
                <h2>championing dementia care across Zimbabwe</h2>
                <p>
                  Discover how DAZ provides counselling, home visits, caregiver training, and medical linkage to ensure no family faces memory loss alone.
                </p>
              </BottomCaption>
            </MediaOverlay>
          </>
        )}
      </VideoAspectRatio>
    </SectionWrapper>
  );
};
