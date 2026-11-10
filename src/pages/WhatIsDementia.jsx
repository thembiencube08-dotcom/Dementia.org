import React from 'react';
import styled from 'styled-components';
import { Brain, Heart, AlertTriangle, ShieldCheck, Activity, Users } from 'lucide-react';

const PageWrapper = styled.div`
  max-width: 1100px;
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
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  text-transform: lowercase;
  margin-top: 48px;
  margin-bottom: 24px;
`;

const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TypeCard = styled.div`
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};

  .icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
    text-transform: none;
  }

  p {
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.6;
    color: rgba(15, 23, 42, 0.78);
  }
`;

const SignsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SignItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 16px 20px;

  .num {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    shrink: 0;
  }

  p {
    font-size: 14.5px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.foreground};
    line-height: 1.45;
  }
`;

export const WhatIsDementia = ({ onOpenDonate }) => {
  const types = [
    {
      title: "Alzheimer's Disease",
      icon: <Brain size={24} />,
      desc: "The most common cause of dementia, affecting memory, language, and progressive cognitive faculties over time."
    },
    {
      title: "Vascular Dementia",
      icon: <Activity size={24} />,
      desc: "Caused by reduced blood flow to the brain, frequently following localized strokes or chronic cerebrovascular conditions."
    },
    {
      title: "Frontotemporal Dementia",
      icon: <Users size={24} />,
      desc: "Affects personality, executive function, behavior, and speech fluency, often diagnosed in younger individuals under 65."
    },
    {
      title: "Young-Onset Dementia",
      icon: <Heart size={24} />,
      desc: "Symptoms emerging in individuals under age 65, posing unique workplace, financial, and family caregiving challenges."
    }
  ];

  const signs = [
    "Memory loss that disrupts daily life and appointments",
    "Difficulty planning, budgeting, or solving familiar problems",
    "Confusion with time, dates, seasons, or familiar locations",
    "Trouble understanding visual images and spatial distances",
    "New struggles finding words in conversational speaking or writing",
    "Misplacing everyday items and losing the ability to retrace steps",
    "Decreased, poor, or uncharacteristic financial judgment",
    "Withdrawal from church, work, hobbies, or community gatherings",
    "Unexplained shifts in mood, anxiety, suspicion, or personality"
  ];

  return (
    <PageWrapper>
      <PageHeader>
        <span className="tag">Understanding Dementia</span>
        <h1>what is dementia?</h1>
        <p>
          Dementia is an umbrella term for a decline in mental ability severe enough to interfere with everyday life. Learn about types, warning signs, and available care in Zimbabwe.
        </p>
      </PageHeader>

      <SectionTitle>types of dementia</SectionTitle>
      <TypesGrid>
        {types.map((t, i) => (
          <TypeCard key={i}>
            <div className="icon-wrap">{t.icon}</div>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </TypeCard>
        ))}
      </TypesGrid>

      <SectionTitle id="symptoms">warning signs to be aware of</SectionTitle>
      <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '16px' }}>
        If you or someone in your family experiences one or more of these warning signs, reach out to DAZ or your nearest clinic for an evaluation:
      </p>
      <SignsGrid>
        {signs.map((sign, idx) => (
          <SignItem key={idx}>
            <div className="num">{idx + 1}</div>
            <p>{sign}</p>
          </SignItem>
        ))}
      </SignsGrid>
    </PageWrapper>
  );
};

