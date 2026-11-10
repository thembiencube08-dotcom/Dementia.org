import React, { useState } from 'react';
import styled from 'styled-components';
import { X, Heart, CheckCircle2, ShieldCheck, Phone, CreditCard } from 'lucide-react';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalCard = styled.div`
  background: #ffffff;
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 100%;
  max-width: 520px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  padding: 24px;
  position: relative;

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 26px;
    font-weight: 600;
    text-transform: lowercase;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.85);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  color: rgba(255, 255, 255, 0.8);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  &:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ModalBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FrequencyToggle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.muted};
  padding: 4px;
  border-radius: 8px;
`;

const FrequencyTab = styled.button`
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.2s ease;
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.mutedForeground)};
  background-color: ${({ $active }) => ($active ? '#ffffff' : 'transparent')};
  box-shadow: ${({ $active }) => ($active ? '0 2px 6px rgba(0,0,0,0.06)' : 'none')};
`;

const AmountGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const AmountBtn = styled.button`
  padding: 14px 10px;
  border-radius: 8px;
  border: 2px solid ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.border)};
  background-color: ${({ $active, theme }) => ($active ? theme.colors.primaryLight : '#ffffff')};
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.foreground)};
  font-size: 18px;
  font-weight: 700;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CustomAmountInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  span.currency {
    position: absolute;
    left: 14px;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mutedForeground};
  }

  input {
    width: 100%;
    padding: 12px 14px 12px 34px;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.border};
    font-size: 16px;
    font-weight: 600;
    outline: none;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ImpactText = styled.p`
  font-size: 13.5px;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: 10px 14px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SelectField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.foreground};
  }

  select {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    font-size: 14px;
    background-color: #ffffff;
    outline: none;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const LocalPaymentOptions = styled.div`
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.foreground};

  .title {
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .details {
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
  }
`;

const SecurityBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: -6px;
`;

const SuccessState = styled.div`
  padding: 48px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg.icon {
    width: 60px;
    height: 60px;
    color: #16a34a;
    margin-bottom: 16px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 30px;
    font-weight: 600;
    text-transform: lowercase;
  }

  p {
    margin-top: 12px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.mutedForeground};
    max-width: 400px;
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

export const DonationModal = ({ isOpen, onClose }) => {
  const [frequency, setFrequency] = useState('monthly');
  const [amount, setAmount] = useState(35);
  const [customAmount, setCustomAmount] = useState('');
  const [designation, setDesignation] = useState('general');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const amounts = [15, 35, 75, 150, 500];

  const getImpactMessage = (val) => {
    if (val >= 500) return 'Funds a comprehensive community dementia screening & workshop!';
    if (val >= 150) return 'Supports 1 month of peer caregiver support groups & respite.';
    if (val >= 75) return 'Provides full caregiver training toolkits & emergency manuals.';
    if (val >= 35) return 'Funds travel and safety evaluation kits for an in-home patient visit.';
    return 'Provides counseling materials and care essentials for 1 family.';
  };

  const currentAmount = customAmount ? Number(customAmount) : amount;

  const handleDonate = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <CloseButton onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </CloseButton>
          <h3>support dementia care in Zimbabwe</h3>
          <p>Your contribution directly funds home visits, caregiver training, and family counseling.</p>
        </ModalHeader>

        {submitted ? (
          <SuccessState>
            <CheckCircle2 className="icon" />
            <h3>thank you for supporting DAZ!</h3>
            <p>
              Your {frequency} contribution of ${currentAmount} will bring hope, care, and dignity to families living with dementia across Zimbabwe.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              Done
            </button>
          </SuccessState>
        ) : (
          <ModalBody as="form" onSubmit={handleDonate}>
            <FrequencyToggle>
              <FrequencyTab
                type="button"
                $active={frequency === 'one-time'}
                onClick={() => setFrequency('one-time')}
              >
                Give Once
              </FrequencyTab>
              <FrequencyTab
                type="button"
                $active={frequency === 'monthly'}
                onClick={() => setFrequency('monthly')}
              >
                Give Monthly 💖
              </FrequencyTab>
            </FrequencyToggle>

            <AmountGrid>
              {amounts.map((val) => (
                <AmountBtn
                  key={val}
                  type="button"
                  $active={!customAmount && amount === val}
                  onClick={() => {
                    setAmount(val);
                    setCustomAmount('');
                  }}
                >
                  ${val}
                </AmountBtn>
              ))}
              <AmountBtn
                type="button"
                $active={!!customAmount}
                onClick={() => setCustomAmount('100')}
              >
                Custom
              </AmountBtn>
            </AmountGrid>

            {customAmount !== '' && (
              <CustomAmountInput>
                <span className="currency">$</span>
                <input
                  type="number"
                  min="5"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  autoFocus
                />
              </CustomAmountInput>
            )}

            <ImpactText>
              <Heart size={16} fill="currentColor" />
              {getImpactMessage(currentAmount)}
            </ImpactText>

            <SelectField>
              <label>Direct my donation to:</label>
              <select
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              >
                <option value="general">General Care Fund (Where needed most)</option>
                <option value="home-visits">Home Visits & Patient Evaluations</option>
                <option value="caregivers">Caregiver Training & Support Groups</option>
                <option value="counselling">Family Counselling Services</option>
                <option value="awareness">Stigma Reduction & Awareness Campaigns</option>
              </select>
            </SelectField>

            <LocalPaymentOptions>
              <div className="title">
                <Phone size={14} /> Local Zimbabwe Payments (EcoCash & Bank)
              </div>
              <div className="details">
                EcoCash Merchant / Biller or local transfers available: Call <strong>+263 783 146 211</strong> or email <strong>info@dementiazim.co.zw</strong> for direct bank deposit references.
              </div>
            </LocalPaymentOptions>

            <SubmitButton type="submit">
              Donate ${currentAmount} {frequency === 'monthly' ? '/ month' : 'now'}
            </SubmitButton>

            <SecurityBadge>
              <ShieldCheck size={14} />
              Secure 256-bit encrypted donation • Dementia Association of Zimbabwe
            </SecurityBadge>
          </ModalBody>
        )}
      </ModalCard>
    </ModalOverlay>
  );
};
