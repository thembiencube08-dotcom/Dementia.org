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

const TalentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TalentCard = styled.div`
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    height: 240px;
    width: 100%;
    object-fit: cover;
  }

  .content {
    padding: 28px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 26px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
    text-transform: lowercase;
  }

  .skills-list {
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .skill-pill {
    background-color: #ffffff;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 4px 10px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-top: 14px;
    font-size: 14.5px;
    line-height: 1.6;
    color: rgba(15, 23, 42, 0.78);
    flex: 1;
  }

  button {
    margin-top: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    padding: 10px 20px;
    border-radius: ${({ theme }) => theme.radii.md};
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

export const Talent = ({ onOpenDonate }) => {
  const volunteerRoles = [
    {
      title: 'healthcare & home visit volunteers',
      image: '/assets/hero-image-BoGRMBqM.jpg',
      skills: ['Nursing', 'Patient Evaluation', 'Mobility Safety', 'Caregiver Coaching'],
      desc: 'Nurses, medical students, and healthcare practitioners who accompany our team on home evaluations, providing vital vital signs checks and comfort care tips.'
    },
    {
      title: 'community awareness advocates',
      image: '/assets/community-support-CTGFs8lz.jpg',
      skills: ['Public Speaking', 'Stigma Reduction', 'Vernacular Outreach', 'Youth Engagement'],
      desc: 'Passionate community champions who host awareness talks at churches, schools, and local council meetings to dispel myths and encourage early clinical evaluation.'
    },
    {
      title: 'family counseling & support group facilitators',
      image: '/assets/about-image-COnGSsqz.jpg',
      skills: ['Psychological First Aid', 'Grief Support', 'Respite Coordination', 'Care Circles'],
      desc: 'Facilitators who organize and host regular monthly peer support groups for family members caring for parents or spouses living with dementia.'
    }
  ];

  return (
    <PageWrapper>
      <PageHeader>
        <span className="tag">Join Our Mission</span>
        <h1>volunteer & support network</h1>
        <p>
          Lend your hands, heart, and professional skills to support families living with dementia across Zimbabwe.
        </p>
      </PageHeader>

      <TalentGrid>
        {volunteerRoles.map((role, i) => (
          <TalentCard key={i}>
            <img src={role.image} alt={role.title} />
            <div className="content">
              <h2>{role.title}</h2>
              <div className="skills-list">
                {role.skills.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
              <p>{role.desc}</p>
              <button onClick={() => alert('Thank you for your interest! The DAZ volunteer coordinator will contact you.')}>
                Sign Up as Volunteer
              </button>
            </div>
          </TalentCard>
        ))}
      </TalentGrid>
    </PageWrapper>
  );
};
