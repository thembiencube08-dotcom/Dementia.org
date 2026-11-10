import React from 'react';
import styled from 'styled-components';
import { Heart, Users, Home, BookOpen, ShieldCheck } from 'lucide-react';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px 100px 24px;

  @media (max-width: 768px) {
    padding: 40px 18px 60px 18px;
  }
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

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  p {
    margin-top: 16px;
    font-size: 19px;
    color: ${({ theme }) => theme.colors.mutedForeground};
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const GivingOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const GivingCard = styled.div`
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
  }

  .card-img {
    height: 240px;
    width: 100%;
    object-fit: cover;
  }

  .card-body {
    padding: 32px;
    display: flex;
    flex-direction: column;
    flex: 1;

    @media (max-width: 768px) {
      padding: 24px;
    }
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
    text-transform: lowercase;
  }

  p {
    margin-top: 12px;
    font-size: 15.5px;
    line-height: 1.6;
    color: rgba(15, 23, 42, 0.78);
    flex: 1;
  }

  .button-row {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .amount-tag {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  button.donate-btn {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    padding: 10px 24px;
    border-radius: ${({ theme }) => theme.radii.md};
    font-weight: 600;
    font-size: 14.5px;
    transition: background 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

const TrustBanner = styled.div`
  margin-top: 60px;
  padding: 36px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 24px;
  text-align: center;

  .item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DonatePage = ({ title = 'Support Dementia Care in Zimbabwe', onOpenDonate }) => {
  const options = [
    {
      title: 'give monthly',
      image: '/assets/donate-image-CC4wekSo.jpg',
      amount: '$15 - $50 / mo',
      desc: 'Join our dedicated circle of monthly supporters. Recurring contributions ensure stable counselling programs, caregiver support circles, and home visits throughout the year.',
      icon: <Heart size={20} />
    },
    {
      title: 'sponsor a family caregiver',
      image: '/assets/community-support-CTGFs8lz.jpg',
      amount: '$75 / caregiver',
      desc: 'Fund specialized dementia care training, behavioral coping manuals, and respite peer group access for an unpaid family member caring for a loved one.',
      icon: <Users size={20} />
    },
    {
      title: 'support a home visit & evaluation',
      image: '/assets/hero-image-BoGRMBqM.jpg',
      amount: '$35 / visit',
      desc: 'Cover transportation, medical assessment supplies, and personal living evaluations conducted by our trained healthcare volunteers visiting patients at home.',
      icon: <Home size={20} />
    },
    {
      title: 'community awareness workshop',
      image: '/assets/about-image-COnGSsqz.jpg',
      amount: '$250 / workshop',
      desc: 'Sponsor a full anti-stigma workshop in a Zimbabwean high-density suburb or rural district, educating churches, schools, and families on early memory loss detection.',
      icon: <BookOpen size={20} />
    }
  ];

  return (
    <PageWrapper>
      <PageHeader>
        <span className="tag">Make a Lasting Impact</span>
        <h1>{title.toLowerCase()}</h1>
        <p>
          Every dollar directly funds home visits, caregiver training toolkits, and medical linkage for families affected by dementia across Zimbabwe.
        </p>
      </PageHeader>

      <GivingOptionsGrid>
        {options.map((opt, i) => (
          <GivingCard key={i}>
            <img src={opt.image} alt={opt.title} className="card-img" />
            <div className="card-body">
              <h2>{opt.title}</h2>
              <p>{opt.desc}</p>
              <div className="button-row">
                <span className="amount-tag">{opt.amount}</span>
                <button className="donate-btn" onClick={onOpenDonate}>
                  Give Now
                </button>
              </div>
            </div>
          </GivingCard>
        ))}
      </GivingOptionsGrid>

      <TrustBanner>
        <div className="item">
          <ShieldCheck size={22} />
          In Partnership with Ministry of Health (MoHCC)
        </div>
        <div className="item">
          <ShieldCheck size={22} />
          Over a Decade of Compassionate Care
        </div>
        <div className="item">
          <ShieldCheck size={22} />
          Bulawayo & Harare Support Operations
        </div>
      </TrustBanner>
    </PageWrapper>
  );
};
