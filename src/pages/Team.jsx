import React from 'react';
import styled from 'styled-components';
import { teamMembers } from '../data/siteData';
import { Heart, Users, Award, Shield } from 'lucide-react';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px 100px 24px;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  .tag {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.primary};
  }

  h1 {
    margin-top: 12px;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 48px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
    text-transform: lowercase;
  }

  p {
    margin-top: 16px;
    font-size: 19px;
    color: ${({ theme }) => theme.colors.mutedForeground};
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
  }
`;

const ValuesSection = styled.div`
  margin-bottom: 60px;
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 48px 36px;
  text-align: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 36px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
    text-transform: lowercase;
    margin-bottom: 32px;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    text-align: left;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }

  .val-card {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 24px;
    border: 1px solid ${({ theme }) => theme.colors.borderLight};

    .icon-box {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.primaryLight};
      color: ${({ theme }) => theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 14px;
    }

    h3 {
      font-size: 18px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.foreground};
      text-transform: none;
    }

    p {
      margin-top: 8px;
      font-size: 13.5px;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.mutedForeground};
    }
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const MemberCard = styled.div`
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    height: 280px;
    width: 100%;
    object-fit: cover;
  }

  .info {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
    text-transform: none;
  }

  .role {
    font-size: 13.5px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 4px;
  }

  p.bio {
    margin-top: 12px;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(15, 23, 42, 0.75);
  }
`;

export const Team = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <span className="tag">Our Leadership & Values</span>
        <h1>meet the DAZ team</h1>
        <p>
          Dedicated clinicians, healthcare coordinators, and community advocates working in partnership with the Ministry of Health and Child Care.
        </p>
      </PageHeader>

      <ValuesSection>
        <h2>our core values</h2>
        <div className="values-grid">
          <div className="val-card">
            <div className="icon-box"><Heart size={20} /></div>
            <h3>Compassion</h3>
            <p>Treating every individual with empathy, patience, and profound understanding.</p>
          </div>
          <div className="val-card">
            <div className="icon-box"><Users size={20} /></div>
            <h3>Community</h3>
            <p>Building resilient networks of emotional and practical support for caregivers.</p>
          </div>
          <div className="val-card">
            <div className="icon-box"><Award size={20} /></div>
            <h3>Excellence</h3>
            <p>Delivering evidence-based care, professional linkage, and quality training.</p>
          </div>
          <div className="val-card">
            <div className="icon-box"><Shield size={20} /></div>
            <h3>Integrity</h3>
            <p>Operating with accountability, medical transparency, and compassionate trust.</p>
          </div>
        </div>
      </ValuesSection>

      <TeamGrid>
        {teamMembers.map((m, i) => (
          <MemberCard key={i}>
            <img src={m.image} alt={m.name} />
            <div className="info">
              <h3>{m.name}</h3>
              <span className="role">{m.role}</span>
              <p className="bio">{m.bio}</p>
            </div>
          </MemberCard>
        ))}
      </TeamGrid>
    </PageWrapper>
  );
};
