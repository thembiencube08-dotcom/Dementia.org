import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { footerData } from '../../data/siteData';
import { MapPin, Phone, Mail } from 'lucide-react';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  padding: 80px 32px 40px 32px;

  @media (max-width: 768px) {
    padding: 60px 20px 30px 20px;
  }
`;

const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 36px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
`;

const BrandColumn = styled.div`
  padding-right: 32px;

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    padding-right: 0;
  }

  .logo-wrap {
    display: inline-block;
    background: #ffffff;
    padding: 8px 14px;
    border-radius: 8px;

    img.logo {
      height: 38px;
      width: auto;
      object-fit: contain;
    }
  }

  p.tagline {
    margin-top: 18px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.75);
    max-width: 300px;
  }

  .contact-info {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.8);

    .item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    a {
      color: rgba(255, 255, 255, 0.85);
      &:hover {
        color: #ffffff;
        text-decoration: underline;
      }
    }
  }

  .partner-badge {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 24px;
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 14px;
    border-radius: 8px;
    width: fit-content;

    img {
      height: 36px;
      width: auto;
      object-fit: contain;
    }

    span {
      font-size: 11.5px;
      font-weight: 600;
      color: #ffffff;
      line-height: 1.3;
    }
  }
`;

const NavColumn = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 11.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 13.5px;
    color: rgba(255, 255, 255, 0.75);
    transition: color 0.15s ease;

    &:hover {
      color: #ffffff;
    }
  }
`;

const BottomBar = styled.div`
  margin-top: 60px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  p.copyright {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 12.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .legal-links {
    display: flex;
    align-items: center;
    gap: 24px;

    a {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: 12.5px;
      color: rgba(255, 255, 255, 0.7);
      transition: color 0.15s ease;

      &:hover {
        color: #ffffff;
      }
    }
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <TopGrid>
          <BrandColumn>
            <Link to="/" aria-label="Dementia Association of Zimbabwe home" className="logo-wrap">
              <img
                src="/assets/daz-logo-BuhqU6Cu.png"
                alt="Dementia Association of Zimbabwe"
                className="logo"
              />
            </Link>
            <p className="tagline">
              Championing dementia care, caregiver support, and community awareness across Zimbabwe.
            </p>
            <div className="contact-info">
              <div className="item">
                <MapPin size={14} />
                <span>65067 Tshabalala Extension, Bulawayo, Zimbabwe</span>
              </div>
              <div className="item">
                <Phone size={14} />
                <a href="tel:+263783146211">+263 783 146 211</a> / <a href="tel:+263292482431">+263 292 482 431</a>
              </div>
              <div className="item">
                <Mail size={14} />
                <a href="mailto:info@dementiazim.co.zw">info@dementiazim.co.zw</a>
              </div>
            </div>
            <div className="partner-badge">
              <img
                src="/assets/mohcc-logo-CQ2Gfag9.png"
                alt="Ministry of Health and Child Care Zimbabwe"
              />
              <span>In partnership with the<br />Ministry of Health & Childcare Zimbabwe</span>
            </div>
          </BrandColumn>

          {footerData.map((col) => (
            <NavColumn key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </NavColumn>
          ))}
        </TopGrid>

        <BottomBar>
          <p className="copyright">
            © {new Date().getFullYear()} Dementia Association of Zimbabwe (DAZ). All rights reserved.
          </p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </BottomBar>
      </FooterContent>
    </FooterContainer>
  );
};
