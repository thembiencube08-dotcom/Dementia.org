# Dementia Association of Zimbabwe (DAZ) Website

A modern, responsive, high-performance web platform built with **React** and **styled-components**, faithfully preserving the clean architectural form and structure inspired by Uncommon.org, with authentic content, context, photography, and branding scraped directly from [dementiazim.co.zw](https://dementiazim.co.zw).

---

## 🏛️ About Dementia Association of Zimbabwe (DAZ)

The **Dementia Association of Zimbabwe (DAZ)** is an NGO based in Bulawayo, Zimbabwe, operating in formal strategic partnership with the **Ministry of Health and Child Care (MoHCC) Zimbabwe**.

DAZ creates awareness and advocates for the prevention, diagnosis, treatment, and management of dementia, providing free family counselling, specialized home visits, caregiver training, and healthcare linkage across Zimbabwe.

- **Headquarters**: 65067 Tshabalala Extension, Bulawayo, Zimbabwe
- **Hotline**: +263 783 146 211 / +263 292 482 431
- **Email**: info@dementiazim.co.zw

---

## 🎨 Design & Technology Stack

- **React 18 & Vite**: Fast bundling, modern component lifecycle, and modular structure.
- **styled-components (v6)**: Custom design system, responsive breakpoints, and scoped styling.
- **Color Palette**:
  - Primary Regal Indigo/Blue (`#1b3297`)
  - Secondary Emerald Green (`#22a061`)
  - Background & Cards (`#ffffff`, `#f6f8fb`)
- **Typography**:
  - Headings in `Chillax` (lowercase display font)
  - Body & UI typography in `Avenir Next`
- **Authentic Scraped Assets**:
  - Official DAZ Logo (`/assets/daz-logo-BuhqU6Cu.png`)
  - Ministry of Health & Child Care Logo (`/assets/mohcc-logo-CQ2Gfag9.png`)
  - Official high-res imagery: `/assets/hero-image-BoGRMBqM.jpg`, `/assets/about-image-COnGSsqz.jpg`, `/assets/community-support-CTGFs8lz.jpg`, `/assets/donate-image-CC4wekSo.jpg`

---

## 🧩 Structure & Components

1. **Header & Announcement**:
   - Announcement banner: *"In partnership with the Ministry of Health & Childcare Zimbabwe 🤝"*
   - Responsive navbar with dropdowns (*What We Do*, *Learn*, *Get Involved*, *About DAZ*, *Transparency*)
   - Contact and Donation action triggers
   - Mobile slide-out drawer
2. **Hero Section**:
   - MoHCC partnership badge
   - Mission headline: *"Bringing hope and dignity to dementia care in Zimbabwe."*
   - Subtitle: *"Creating awareness and advocating for prevention, diagnosis, treatment, and management of dementia..."*
3. **Featured Video / Media Section**:
   - Official DAZ hero presentation with MoHCC partnership badge overlay and interactive video player.
4. **Why Dementia Awareness Matters**:
   - 2-column card highlighting early diagnosis, destigmatization, and family support.
5. **Our Care Model Carousel**:
   - Left sticky card with navigation arrows
   - Slider cycling through:
     1. *Counselling & Family Support*
     2. *Home Visits & Evaluation*
     3. *Linkage to Healthcare*
     4. *Caregiver Training & Respite*
     5. *Awareness & Stigma Reduction*
     6. *CTA: Ensuring no one faces dementia alone*
6. **Animated Beneficiary Counter**:
   - Intersection Observer counter animating up to **500+** families supported.
7. **Continuous Infinite Marquee**:
   - Horizontal looping ticker of programs (*Home Visits*, *Caregiver Workshops*, *Family Counselling*, *MoHCC Alliance*, *Give Monthly*).
8. **Economic & Health Impact**:
   - Details how home visits and caregiver toolkits reduce hospitalization rates and restore household stability.
9. **Voices of Hope (Story Spotlight)**:
   - Mrs. Moyo’s family journey in Bulawayo.
10. **Journey Cards (4-column)**:
    - Interactive cards: *Give Monthly*, *Sponsor a Caregiver*, *Support a Home Visit*, *Volunteer With Us*.
11. **Interactive Donation Modal**:
    - Frequency: One-Time vs. Monthly
    - Preset tiers: \$15, \$35, \$75, \$150, \$500, Custom
    - Designation selector (Home Visits, Caregiver Training, Counselling, General)
    - EcoCash & local Zimbabwean bank deposit guidelines
12. **Educational & Sub-Pages**:
    - `/what-is-dementia`: Types of dementia (Alzheimer’s, Vascular, Frontotemporal, Young-Onset) and 9 Warning Signs.
    - `/programs`: Detailed services breakdown.
    - `/team`: DAZ Leadership & Core Values (*Compassion*, *Community*, *Excellence*, *Integrity*).
    - `/impact`: Beneficiary and service statistics.
    - `/faq`: Comprehensive dementia questions and answers.
    - `/financials`: Governance, public reports, and MoHCC strategic partnership.
13. **Footer**:
    - Official DAZ logo, MoHCC partner seal, Bulawayo address, phone hotlines, 5-column directory, and legal links.

---

## 🏃 How to Run

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Builds the optimized production files into `dist/`.
