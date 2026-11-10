import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X, Menu, ArrowRight } from 'lucide-react';
import { navMenuData } from '../../data/siteData';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
`;

const Announcement = styled.aside`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  padding: 10px 20px;
  padding-right: 48px;
  font-size: 13.5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 10px 16px;
    padding-right: 40px;
    font-size: 12px;
  }
`;

const AnnouncementContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  strong {
    font-weight: 700;
  }

  .divider {
    opacity: 0.4;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .cta-link {
    font-weight: 700;
    text-decoration: underline;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #ffffff;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.85;
    }
  }
`;

const DismissBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 28px;
  background-color: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    padding: 10px 18px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  img.daz-logo {
    height: 44px;
    width: auto;
    object-fit: contain;

    @media (max-width: 640px) {
      height: 36px;
    }
  }

  .brand-text {
    display: flex;
    flex-direction: column;

    @media (max-width: 480px) {
      display: none;
    }

    span.org-name {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: 13.5px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
      letter-spacing: -0.01em;
      line-height: 1.2;
    }

    span.org-sub {
      font-size: 10.5px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.mutedForeground};
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
`;

const DropdownTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 14px;
  font-weight: 500;
  color: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.primary : 'rgba(15, 23, 42, 0.85)')};
  background-color: ${({ $isOpen, theme }) => ($isOpen ? theme.colors.primaryLight : 'transparent')};
  transition: all 0.15s ease-in-out;

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    opacity: 0.6;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: 220px;
  background: #ffffff;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: 0 10px 30px -4px rgba(0, 0, 0, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: 8px;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-6px)')};
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 8px 12px;
  font-size: 13.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.foreground};
  border-radius: 6px;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.muted};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContactBtn = styled(Link)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 8px 18px;
  font-size: 13.5px;
  font-weight: 600;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const GiveBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 8px 22px;
  font-size: 13.5px;
  font-weight: 600;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(27, 50, 151, 0.25);
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid rgba(27, 50, 151, 0.2);
  color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 150;
`;

const MobileDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 85%;
  max-width: 360px;
  background-color: #ffffff;
  z-index: 160;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const MobileDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

const MobileDrawerActions = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};

  .mobile-contact {
    display: block;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    padding: 10px;
    font-weight: 600;
  }

  .mobile-give {
    display: block;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    border-radius: 8px;
    padding: 10px;
    font-weight: 600;
  }
`;

const MobileMenuNav = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MobileNavSection = styled.div`
  .section-title {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: ${({ theme }) => theme.colors.mutedForeground};
    margin-bottom: 8px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  a {
    display: block;
    padding: 8px 0;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.foreground};
    transition: color 0.15s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Header = ({ onOpenDonate }) => {
  const [showAnnouncement, setShowAnnouncement] = useState(() => {
    return sessionStorage.getItem('daz-announcement-dismissed') !== 'true';
  });
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(88);
  const location = useLocation();

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [showAnnouncement]);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('[data-dropdown]')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const dismissAnnouncement = () => {
    sessionStorage.setItem('daz-announcement-dismissed', 'true');
    setShowAnnouncement(false);
  };

  return (
    <>
      <HeaderWrapper ref={headerRef}>
        {showAnnouncement && (
          <Announcement aria-label="Ministry of Health Partnership">
            <AnnouncementContent>
              <strong>In partnership with the Ministry of Health & Childcare Zimbabwe 🤝</strong>
              <span className="divider">|</span>
              <span>Supporting 500+ families affected by dementia across Zimbabwe</span>
              <Link to="/about" className="cta-link">
                Learn More <ArrowRight size={13} />
              </Link>
            </AnnouncementContent>
            <DismissBtn onClick={dismissAnnouncement} aria-label="Dismiss banner" title="Dismiss banner">
              <X size={15} />
            </DismissBtn>
          </Announcement>
        )}

        <NavContainer aria-label="Primary navigation">
          <LogoLink to="/" aria-label="Dementia Association of Zimbabwe — home">
            <img
              src="/assets/daz-logo-BuhqU6Cu.png"
              alt="Dementia Association of Zimbabwe"
              className="daz-logo"
            />
            <div className="brand-text">
              <span className="org-name">Dementia Association of Zimbabwe</span>
              <span className="org-sub">Awareness • Care • Support</span>
            </div>
          </LogoLink>

          <DesktopNav>
            {navMenuData.map((menu) => {
              const isOpen = openDropdown === menu.title;
              return (
                <NavItem key={menu.title} data-dropdown>
                  <DropdownTrigger
                    $isOpen={isOpen}
                    onClick={() => setOpenDropdown(isOpen ? null : menu.title)}
                    aria-expanded={isOpen}
                  >
                    {menu.title}
                    <ChevronDown />
                  </DropdownTrigger>
                  <DropdownMenu $isOpen={isOpen}>
                    {menu.links.map((link) => (
                      <DropdownItem
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {link.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </NavItem>
              );
            })}
          </DesktopNav>

          <ActionsContainer>
            <ContactBtn to="/contact">Contact Us</ContactBtn>
            <GiveBtn onClick={onOpenDonate}>Donate</GiveBtn>
            <MobileMenuBtn
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </MobileMenuBtn>
          </ActionsContainer>
        </NavContainer>
      </HeaderWrapper>

      {/* Spacer to prevent content from jumping under fixed header */}
      <div style={{ height: `${headerHeight}px` }} />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          <MobileOverlay onClick={() => setMobileMenuOpen(false)} />
          <MobileDrawer>
            <MobileDrawerHeader>
              <LogoLink to="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/assets/daz-logo-BuhqU6Cu.png"
                  alt="Dementia Association of Zimbabwe"
                  style={{ height: '36px' }}
                />
              </LogoLink>
              <DismissBtn
                style={{ position: 'static', transform: 'none', color: '#0f172a' }}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </DismissBtn>
            </MobileDrawerHeader>

            <MobileDrawerActions>
              <Link
                to="/contact"
                className="mobile-contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <button
                className="mobile-give"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
              >
                Donate Today
              </button>
            </MobileDrawerActions>

            <MobileMenuNav>
              {navMenuData.map((menu) => (
                <MobileNavSection key={menu.title}>
                  <div className="section-title">{menu.title}</div>
                  <ul>
                    {menu.links.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </MobileNavSection>
              ))}
            </MobileMenuNav>
          </MobileDrawer>
        </>
      )}
    </>
  );
};
