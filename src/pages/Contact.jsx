import React, { useState } from 'react';
import styled from 'styled-components';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { contactDetails } from '../data/siteData';

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
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 30px;
    color: #ffffff;
    text-transform: lowercase;
  }

  p.desc {
    margin-top: 12px;
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }

  .info-items {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;

    .icon-wrap {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .label {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: rgba(255, 255, 255, 0.65);
    }

    .value {
      margin-top: 4px;
      font-size: 15px;
      font-weight: 500;
      color: #ffffff;

      a {
        color: #ffffff;
        text-decoration: underline;
        text-underline-offset: 3px;
        &:hover {
          color: rgba(255, 255, 255, 0.85);
        }
      }
    }
  }

  .partner-note {
    margin-top: 36px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    gap: 14px;

    img {
      height: 40px;
      width: auto;
      background: #ffffff;
      padding: 4px 6px;
      border-radius: 6px;
    }

    span {
      font-size: 12.5px;
      line-height: 1.4;
      color: rgba(255, 255, 255, 0.85);
    }
  }
`;

const FormCard = styled.div`
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 40px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 24px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 28px;
    color: ${({ theme }) => theme.colors.foreground};
    text-transform: lowercase;
  }

  p.sub {
    margin-top: 8px;
    font-size: 14.5px;
    color: ${({ theme }) => theme.colors.mutedForeground};
  }

  form {
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;

    label {
      font-size: 13px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.foreground};
    }

    input, select, textarea {
      padding: 12px 14px;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.colors.border};
      font-size: 14.5px;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s;

      &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }
  }

  button.submit-btn {
    margin-top: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    padding: 14px 28px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background-color 0.2s, transform 0.15s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
      transform: translateY(-1px);
    }
  }
`;

const SuccessBox = styled.div`
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 56px;
    height: 56px;
    color: #16a34a;
    margin-bottom: 16px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 26px;
    text-transform: lowercase;
  }

  p {
    margin-top: 10px;
    font-size: 15.5px;
    color: ${({ theme }) => theme.colors.mutedForeground};
    max-width: 380px;
  }

  button {
    margin-top: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    padding: 10px 24px;
    border-radius: 8px;
    font-weight: 600;
  }
`;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Request for Counselling',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <PageHeader>
        <span className="tag">Get in Touch</span>
        <h1>contact Dementia Zimbabwe</h1>
        <p>
          Whether you need counselling, an in-home evaluation for a loved one, or want to partner with us, our compassionate team is here to assist.
        </p>
      </PageHeader>

      <LayoutGrid>
        <ContactInfoCard>
          <div>
            <h2>we are here for you</h2>
            <p className="desc">
              Reach out to our clinical and community support desk in Bulawayo. We assist families and caregivers across all provinces of Zimbabwe.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="icon-wrap"><MapPin size={20} /></div>
                <div>
                  <div className="label">Headquarters Address</div>
                  <div className="value">{contactDetails.address}</div>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrap"><Phone size={20} /></div>
                <div>
                  <div className="label">Telephone & Hotlines</div>
                  <div className="value">
                    <a href="tel:+263783146211">+263 783 146 211</a><br />
                    <a href="tel:+263292482431">+263 292 482 431</a>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrap"><Mail size={20} /></div>
                <div>
                  <div className="label">Email Inquiries</div>
                  <div className="value">
                    <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrap"><Clock size={20} /></div>
                <div>
                  <div className="label">Support Hours</div>
                  <div className="value">Monday – Friday: 08:00 – 17:00 (CAT)<br />Urgent Crisis Line: 24/7 on +263 783 146 211</div>
                </div>
              </div>
            </div>
          </div>

          <div className="partner-note">
            <img src="/assets/mohcc-logo-CQ2Gfag9.png" alt="MoHCC Logo" />
            <span>Official partner of the Ministry of Health and Child Care Zimbabwe</span>
          </div>
        </ContactInfoCard>

        <FormCard>
          {submitted ? (
            <SuccessBox>
              <CheckCircle2 />
              <h3>message sent successfully</h3>
              <p>
                Thank you for reaching out to DAZ. Our patient support coordinator will contact you directly within 24 hours.
              </p>
              <button onClick={() => setSubmitted(false)}>Send Another Message</button>
            </SuccessBox>
          ) : (
            <>
              <h2>send an enquiry</h2>
              <p className="sub">
                Fill in your details below and a member of our care team will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tendai Moyo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +263 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label>How can we assist you? *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="Request for Counselling">Family Counselling Support</option>
                      <option value="Request for Home Visit">Request In-Home Patient Visit</option>
                      <option value="Caregiver Training">Caregiver Training Workshops</option>
                      <option value="Doctor/Clinic Linkage">Doctor / Healthcare Linkage</option>
                      <option value="Volunteer / Partnership">Volunteering & Partnership</option>
                      <option value="General Question">General Inquiries</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label>Your Message / Specific Circumstances *</label>
                  <textarea
                    required
                    placeholder="Please describe how we can assist your family or community..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={16} /> Send Message to DAZ
                </button>
              </form>
            </>
          )}
        </FormCard>
      </LayoutGrid>
    </PageWrapper>
  );
};

