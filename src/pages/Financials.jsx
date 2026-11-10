import React from 'react';
import styled from 'styled-components';
import { Download, ShieldCheck } from 'lucide-react';

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
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 36px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};

  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
    text-transform: lowercase;
  }

  p {
    margin-top: 12px;
    font-size: 15px;
    line-height: 1.6;
    color: rgba(15, 23, 42, 0.78);
    flex: 1;
  }

  .badges {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 24px;

    img {
      height: 64px;
      width: auto;
      object-fit: contain;
    }
  }

  ul.docs-list {
    margin-top: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background-color: #ffffff;
      border-radius: 8px;
      font-size: 14.5px;
      font-weight: 600;

      a {
        display: flex;
        align-items: center;
        gap: 6px;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const Financials = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <span className="tag">Financial Integrity</span>
        <h1>transparency & accountability</h1>
        <p>
          We are committed to the highest standards of non-profit governance, public accountability, and donor stewardship.
        </p>
      </PageHeader>

      <Grid>
        <Card>
          <h2>government & clinical partnership</h2>
          <p>
            The Dementia Association of Zimbabwe operates in formal strategic alignment with the Ministry of Health and Child Care (MoHCC) Zimbabwe to establish evidence-based dementia protocols and expand healthcare access nationwide.
          </p>
          <div className="badges">
            <img src="/assets/mohcc-logo-CQ2Gfag9.png" alt="Ministry of Health and Child Care Zimbabwe" />
            <img src="/assets/daz-logo-BuhqU6Cu.png" alt="Dementia Association of Zimbabwe" />
          </div>
        </Card>

        <Card>
          <h2>governance & program reports</h2>
          <p>
            Review our audited financial summaries, community program reviews, and annual reports.
          </p>
          <ul className="docs-list">
            <li>
              <span>DAZ Annual Report 2026</span>
              <a href="#download" onClick={(e) => { e.preventDefault(); alert('Downloading DAZ Annual Report PDF...'); }}>
                <Download size={16} /> PDF
              </a>
            </li>
            <li>
              <span>Community Impact & Home Visits Summary</span>
              <a href="#download" onClick={(e) => { e.preventDefault(); alert('Downloading Community Summary PDF...'); }}>
                <Download size={16} /> PDF
              </a>
            </li>
            <li>
              <span>Caregiver Guidelines & MoHCC Standards</span>
              <a href="#download" onClick={(e) => { e.preventDefault(); alert('Downloading Guidelines PDF...'); }}>
                <Download size={16} /> PDF
              </a>
            </li>
          </ul>
        </Card>
      </Grid>
    </PageWrapper>
  );
};
