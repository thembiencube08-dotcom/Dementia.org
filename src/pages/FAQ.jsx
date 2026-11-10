import React, { useState } from 'react';
import styled from 'styled-components';
import { faqs } from '../data/siteData';
import { ChevronDown } from 'lucide-react';

const PageWrapper = styled.div`
  max-width: 900px;
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
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
  }
`;

const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AccordionItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background-color: #ffffff;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const AccordionTrigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  gap: 16px;

  svg {
    flex-shrink: 0;
    transition: transform 0.25s ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const AccordionContent = styled.div`
  padding: 0 24px 22px 24px;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(15, 23, 42, 0.78);
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <PageWrapper>
      <PageHeader>
        <span className="tag">Questions & Answers</span>
        <h1>frequently asked questions</h1>
        <p>
          Everything you need to know about understanding dementia, recognizing symptoms, caregiving, and DAZ programs in Zimbabwe.
        </p>
      </PageHeader>

      <AccordionList>
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <AccordionItem key={idx}>
              <AccordionTrigger
                $isOpen={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <span>{faq.q}</span>
                <ChevronDown size={20} />
              </AccordionTrigger>
              <AccordionContent $isOpen={isOpen}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </AccordionList>
    </PageWrapper>
  );
};
