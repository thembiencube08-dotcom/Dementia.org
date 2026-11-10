import React from 'react';
import styled from 'styled-components';

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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 60px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 36px 24px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};

  .number {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1;
    text-transform: none;
  }

  .label {
    margin-top: 14px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
  }

  .sub {
    margin-top: 6px;
    font-size: 13.5px;
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
`;

const ContentCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 32px 24px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 38px;
    color: #ffffff;
    text-transform: lowercase;
    line-height: 1.2;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }
`;

export const Impact = ({ onOpenDonate }) => {
  const stats = [
    {
      num: '500+',
      label: 'Families Supported',
      sub: 'Direct home visits, evaluations & counseling'
    },
    {
      num: '20+',
      label: 'Programs Run',
      sub: 'Workshops, caregiver circles & outreach'
    },
    {
      num: '10+',
      label: 'Years of Service',
      sub: 'Continuous care and community advocacy'
    },
    {
      num: '100%',
      label: 'Free Services',
      sub: 'Accessible to all regardless of income'
    }
  ];

  return (
    <PageWrapper>
      <PageHeader>
        <span className="tag">Measurable Change</span>
        <h1>our real-world impact</h1>
        <p>
          We track verifiable patient outcomes, caregiver well-being indicators, and community education reach to ensure maximum support for Zimbabwe’s elders.
        </p>
      </PageHeader>

      <StatsGrid>
        {stats.map((s, i) => (
          <StatCard key={i}>
            <div className="number">{s.num}</div>
            <div className="label">{s.label}</div>
            <div className="sub">{s.sub}</div>
          </StatCard>
        ))}
      </StatsGrid>

      <ContentCard>
        <div>
          <h2>building stronger communities together.</h2>
        </div>
        <div>
          <p>
            By supporting families, training unpaid caregivers, and building community networks in partnership with the Ministry of Health and Child Care, DAZ ensures that vulnerable elderly citizens receive dignity, safety, and understanding.
          </p>
        </div>
      </ContentCard>
    </PageWrapper>
  );
};
