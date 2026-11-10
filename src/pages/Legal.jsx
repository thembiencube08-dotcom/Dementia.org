import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 24px 100px 24px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 42px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
    text-transform: lowercase;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    color: rgba(15, 23, 42, 0.8);
    margin-bottom: 16px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 24px;
    font-weight: 600;
    margin-top: 32px;
    margin-bottom: 12px;
  }
`;

export const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <h1>privacy policy</h1>
      <p>Last updated: 2026</p>
      <p>
        The Dementia Association of Zimbabwe (DAZ) is dedicated to protecting your privacy and ensuring that all patient, family, and donor information is handled with the highest clinical confidentiality, dignity, and care.
      </p>
      <h2>information we collect</h2>
      <p>
        We collect information you provide directly to us when seeking counseling, requesting an in-home evaluation, volunteering, or donating. We strictly do not sell, rent, or share personal or medical records with any unauthorized third parties.
      </p>
      <h2>patient and family confidentiality</h2>
      <p>
        All evaluations, home visit notes, and family counseling records are treated in strict accordance with Zimbabwean healthcare privacy ethics and international patient confidentiality guidelines.
      </p>
    </PageWrapper>
  );
};

export const TermsOfUse = () => {
  return (
    <PageWrapper>
      <h1>terms of use</h1>
      <p>Last updated: 2026</p>
      <p>
        Welcome to the Dementia Association of Zimbabwe website (dementiazim.co.zw). By accessing or using our services, you agree to these terms.
      </p>
      <h2>medical disclaimer</h2>
      <p>
        The information provided on this website is for educational and community support purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or clinical treatment from qualified healthcare practitioners.
      </p>
      <h2>charitable contributions</h2>
      <p>
        Donations made to DAZ directly support our non-profit mission of providing free family counselling, caregiver training, home visits, and dementia awareness across Zimbabwe.
      </p>
    </PageWrapper>
  );
};
