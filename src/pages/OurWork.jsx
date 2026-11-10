import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  margin-bottom: 60px;

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
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const ProgramsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const ProgramCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  &:nth-child(even) {
    direction: rtl;
    .content {
      direction: ltr;
    }
    .img-wrap {
      direction: ltr;
    }
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 380px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentWrap = styled.div`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 24px;
  }

  .category {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    margin-top: 10px;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 34px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
    text-transform: lowercase;

    @media (max-width: 768px) {
      font-size: 26px;
    }
  }

  p {
    margin-top: 14px;
    font-size: 16px;
    line-height: 1.6;
    color: rgba(15, 23, 42, 0.78);
  }

  .cta-link {
    margin-top: 24px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    padding: 10px 22px;
    border-radius: ${({ theme }) => theme.radii.md};
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

export const OurWork = ({ onOpenDonate }) => {
  const programs = [
    {
      title: 'counselling & family support',
      category: 'Psychological Guidance',
      image: '/assets/community-support-CTGFs8lz.jpg',
      text: 'Navigating memory loss is emotionally taxing for both patients and their loved ones. Our trained counselors provide empathetic listening, coping strategies, and structured family meetings to build resilience throughout the journey of dementia.',
      link: '/contact'
    },
    {
      title: 'home visits & patient evaluation',
      category: 'In-Home Care',
      image: '/assets/hero-image-BoGRMBqM.jpg',
      text: 'Personalized in-home assessments provide compassionate living safety recommendations, mobility evaluations, and palliative care guidelines tailored to each patient’s physical living environment.',
      link: '/contact'
    },
    {
      title: 'linkage to healthcare & medical specialists',
      category: 'Healthcare Access',
      image: '/assets/about-image-COnGSsqz.jpg',
      text: 'Working hand-in-hand with the Ministry of Health and Child Care (MoHCC), we connect families with geriatric physicians, neurologists, psychiatric nurses, and local healthcare clinics across Zimbabwe.',
      link: '/contact'
    },
    {
      title: 'caregiver training & respite',
      category: 'Empowerment Workshops',
      image: '/assets/donate-image-CC4wekSo.jpg',
      text: 'We equip unpaid family caregivers with practical skills, behavior management techniques, medication tracking tools, and emergency manuals to reduce caregiver burnout and improve patient care standards.',
      link: '/contact'
    },
    {
      title: 'community awareness & anti-stigma campaigns',
      category: 'Public Education',
      image: '/assets/community-support-CTGFs8lz.jpg',
      text: 'Across schools, churches, clinics, and media channels in Zimbabwe, we dispel harmful myths surrounding cognitive decline, replacing superstition and isolation with medical understanding and community solidarity.',
      link: '/contact'
    }
  ];

  return (
    <PageWrapper>
      <PageHeader>
        <span className="tag">Our Programs & Services</span>
        <h1>championing dementia care in Zimbabwe</h1>
        <p>
          Comprehensive medical linkage, in-home patient evaluations, and emotional support networks ensuring no family faces memory loss alone.
        </p>
      </PageHeader>

      <ProgramsGrid>
        {programs.map((item, idx) => (
          <ProgramCard key={idx}>
            <ImageWrap className="img-wrap">
              <img src={item.image} alt={item.title} loading="lazy" />
            </ImageWrap>
            <ContentWrap className="content">
              <span className="category">{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <Link to={item.link} className="cta-link">
                Inquire for Support <span>→</span>
              </Link>
            </ContentWrap>
          </ProgramCard>
        ))}
      </ProgramsGrid>
    </PageWrapper>
  );
};
