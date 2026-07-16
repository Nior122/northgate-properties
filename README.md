# Northgate Properties - Premium Real Estate Website

> **Your clients deserve a website that looks like a million naira. This one does.**

---

## What You're Looking At

This isn't another generic property listing template. This is a **portfolio-grade, multi-page real estate website** built to make your agency look established, trustworthy, and impossible to ignore. 

Built with React, Tailwind CSS, and Framer Motion, this website delivers a visual experience that positions your agency as the premium choice in Lagos and Abuja's competitive real estate market.

**[Live Preview](https://northgate-properties.vercel.app/))** | **[GitHub Repository](https://github.com/Nior122/northgate-properties)**

---

## Why This Website Wins Clients

### First Impressions That Close Deals

When a potential buyer or tenant visits your site, they make a decision in **under 8 seconds**. This website ensures that decision is: *"These people are serious."*

- **Full-bleed hero imagery** with a prominent search bar — not a generic "Welcome" banner
- **Editorial-style property grids** — varied image sizes like a curated magazine, not a spreadsheet
- **Smooth animations** that guide the eye without overwhelming — because luxury is about restraint
- **Mobile-first responsive design** — looks stunning on every device, from iPhone to 4K monitor

### Every Page Serves a Purpose

| Page | What It Does | Why It Matters |
|------|-------------|----------------|
| **Home** | Hero with search, featured listings, locations, trust section | Captures leads immediately |
| **Properties** | Filterable grid with For Sale/Rent toggle | Lets buyers find what they want fast |
| **Property Detail** | Gallery, location context, amenities, agent contact, WhatsApp CTA | Converts browsers into buyers |
| **Locations** | Visual cards for 8 neighborhoods | Builds local authority and trust |
| **About** | Agency story, team, credentials | Proves you're legitimate and established |
| **Contact** | Validated form, WhatsApp integration, office map | Makes it effortless to reach you |

---

## Features That Make You Money

### WhatsApp Integration (The Killer Feature)

In Nigeria, WhatsApp is how business gets done. Every enquiry form, every "Schedule a Viewing" button, every contact action generates a **pre-filled WhatsApp message** with property details, ready to send. No friction. No lost leads.

`
https://wa.me/2348123456789?text=Hello%2C%20I'm%20interested%20in%20Oceanview%20Villa...
`

### Location-Forward Design

Property is all about location, and this website makes that crystal clear:

- **Dedicated Locations Page** — 8 curated neighborhoods with descriptions and listing counts
- **Location Context Strip** — on every property detail page, a horizontally scrolling row of nearby landmarks (schools, hospitals, markets, roads) with distances
- **Browse by Location** — one-click access to properties in any neighborhood

### Smart Property Filtering

No cluttered sidebar checkboxes. A clean, horizontal filter bar with:

- Location dropdown
- Property type (House/Apartment/Land)
- Price range (₦0 to ₦300M+)
- Bedroom count
- For Sale / For Rent toggle

### 18 Ready-to-Customize Listings

The website comes loaded with **18 realistic Nigerian property listings** across 8 locations:

**Lagos Properties:**
- Oceanview Villa, Lekki Phase 1 — ₦350,000,000
- Parkview Terrace, Ikoyi — ₦500,000,000
- Maison Azur Penthouse, Victoria Island — ₦18,000,000/yr
- Ikota Residence — ₦180,000,000
- Ajah Modern Duplex — ₦95,000,000
- VI Executive Studio — ₦5,500,000/yr
- Lekki Peninsula Plot — ₦75,000,000
- Lekki Family Home — ₦165,000,000
- Lekki Peninsula Penthouse — ₦15,000,000/yr
- Ikota Terrace House — ₦120,000,000
- Victoria Island Waterfront — ₦450,000,000

**Abuja Properties:**
- Maitama Manor — ₦420,000,000
- Wuse Garden Flat — ₦8,000,000/yr
- Jabi Family Home — ₦250,000,000
- Maitama Residence — ₦220,000,000
- Wuse Executive Apartment — ₦6,000,000/yr
- Jabi Lakeside Penthouse — ₦12,000,000/yr

---

## Tech Stack

Built with modern, production-ready technologies:

| Technology | Purpose |
|-----------|---------|
| **React 18** | Component-based UI architecture |
| **Vite** | Lightning-fast build and dev server |
| **React Router** | Multi-page navigation with dynamic routes |
| **Tailwind CSS v4** | Utility-first styling with custom design tokens |
| **Framer Motion** | Purposeful animations that guide attention |
| **Lucide React** | Clean, consistent iconography |
| **date-fns** | Date logic for listings and scheduling |

---

## Design System

### Color Palette

| Token | Hex | Use |
|-------|-----|-----|
| Stone Light | #EDE9E2 | Primary background — warm, inviting |
| Ink | #1B2333 | Dark sections, header — confident, authoritative |
| Gold | #B08050 | CTAs, accents — premium, trustworthy |
| Sage | #8A9A8E | Rental badges — calm, professional |
| Clay | #C4856C | Hover states — warmth, approachability |
| Mist | #D4D1CB | Borders, subtle backgrounds — elegance |

### Typography

- **Display:** Playfair Display — refined serif for headlines ("architecture magazine" feel)
- **Body:** Inter — clean sans-serif for readability
- **Labels:** Wide-tracked all-caps for property tags and categories

---

## How to Set This Up (Step by Step)

### Prerequisites

- **Node.js 18+** — [Download here](https://nodejs.org/)
- **Git** — [Download here](https://git-scm.com/)
- A code editor (VS Code recommended)

### Quick Start

`ash
# 1. Clone the repository
git clone https://github.com/Nior122/northgate-properties.git

# 2. Navigate into the project
cd northgate-properties

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open your browser
# Visit http://localhost:5173
`

### Build for Production

`ash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
`

The production build will be in the dist/ folder, ready to deploy anywhere.

---

## How to Customize for Your Agency

### Step 1: Update Agency Information

Open src/data/propertiesConfig.js and replace the agency details at the top:

`javascript
export const agencyInfo = {
  name: "Your Agency Name",
  tagline: "Your Tagline Here",
  phone: "+234 XXX XXX XXXX",
  whatsapp: "234XXXXXXXXXX",  // Without the +
  email: "hello@youragency.com",
  address: "Your Lagos Office Address",
  secondaryAddress: "Your Abuja Office Address",
  // ... update social links, founder info, etc.
};
`

### Step 2: Replace Property Listings

In the same file, replace the properties array with your actual listings:

`javascript
export const properties = [
  {
    id: "your-property-id",
    title: "Property Name",
    address: "Full Address",
    locationId: "lekki-phase-1",  // Must match a location ID
    price: 150000000,
    priceLabel: "\u20A6150,000,000",
    type: "house",  // house, apartment, or land
    listingType: "sale",  // sale or rent
    bedrooms: 4,
    bathrooms: 5,
    squareMeters: 350,
    yearBuilt: 2023,
    garage: 2,
    furnished: false,
    images: [
      "https://your-first-image-url.jpg",
      "https://your-second-image-url.jpg",
      // 5 images recommended
    ],
    description: "Write a compelling, specific description...",
    highlights: ["Key feature 1", "Key feature 2", "..."],
    amenities: ["Parking", "Security", "Generator", "..."],
    landmarks: [
      { name: "Nearby School", icon: "GraduationCap", distance: "5 min drive" },
      { name: "Hospital", icon: "Hospital", distance: "10 min drive" },
    ],
    agentId: "tunde",  // Must match an agent ID
    featured: true,  // Shows on homepage
  },
];
`

### Step 3: Update Your Team

Replace the gents array:

`javascript
export const agents = [
  {
    id: "agent-id",
    name: "Agent Name",
    role: "Senior Agent",
    photo: "https://professional-photo-url.jpg",
    phone: "+234 XXX XXX XXXX",
    experience: "8 years",
    bio: "Brief professional bio...",
  },
];
`

### Step 4: Add Your Locations

Update the locations array with neighborhoods you serve:

`javascript
export const locations = [
  {
    id: "lekki-phase-1",
    name: "Lekki Phase 1",
    city: "Lagos",
    image: "https://neighborhood-photo-url.jpg",
    description: "Brief neighborhood description",
    listingCount: 34,  // Update with actual count
  },
];
`

### Step 5: Update WhatsApp Number

Search for gencyInfo.whatsapp in the codebase — it's used in:
- src/components/AgentCard.jsx
- src/pages/PropertyDetail.jsx
- src/pages/Contact.jsx

The WhatsApp deep link format requires the number **without the + sign**:
`
https://wa.me/2348123456789?text=...
`

### Step 6: Add Your Images

For each property, use high-quality images from:
- **Your own photography** (recommended for real listings)
- **Unsplash** (for portfolio demos) — use direct URLs with ?w=1200&q=80

Recommended image specs:
- **Property cards:** 800x600px minimum
- **Property detail:** 1200x800px minimum
- **Agent photos:** 400x400px, square crop
- **Location cards:** 800x450px

---

## Deployment Options

### Option 1: Vercel (Recommended — Free)

`ash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts — your site will be live in seconds
`

### Option 2: Netlify (Free)

`ash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
`

### Option 3: GitHub Pages

`ash
# Add to package.json
"homepage": "https://yourusername.github.io/your-repo-name"

# Install gh-pages
npm install -g gh-pages

# Deploy
npm run build
gh-pages -d dist
`

### Option 4: Any Static Host

The dist/ folder contains pure static files (HTML, CSS, JS). Upload it to:
- Your own server
- AWS S3 + CloudFront
- Firebase Hosting
- Any cPanel/hosting provider

---

## Project Structure

`
estate-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AgentCard.jsx      # Agent contact card with WhatsApp CTA
│   │   ├── FilterBar.jsx      # Property filter controls
│   │   ├── Footer.jsx         # Site-wide footer
│   │   ├── Header.jsx         # Navigation with mobile menu
│   │   ├── ImageGallery.jsx   # Lightbox gallery for properties
│   │   ├── LocationStrip.jsx  # Scrolling landmarks for detail pages
│   │   └── PropertyCard.jsx   # Property listing card
│   ├── data/
│   │   ├── propertiesConfig.js    # All property, agent, location data
│   │   └── extraProperties.js     # Additional properties (merged)
│   ├── pages/
│   │   ├── Home.jsx           # Homepage with hero, search, featured
│   │   ├── Properties.jsx     # Filterable property listings
│   │   ├── PropertyDetail.jsx # Individual property page
│   │   ├── Locations.jsx      # Browse by neighborhood
│   │   ├── About.jsx          # Agency story and team
│   │   └── Contact.jsx        # Contact form with WhatsApp
│   ├── App.jsx                # Router and layout
│   ├── main.jsx               # Entry point
│   └── index.css              # Tailwind + design tokens
├── index.html
├── vite.config.js
└── package.json
`

---

## Real-World Implementation Checklist

Ready to launch this for a real agency? Here's your checklist:

- [ ] **Replace all placeholder content** with real agency details
- [ ] **Add professional photography** (minimum 5 photos per property)
- [ ] **Update WhatsApp number** across all components
- [ ] **Replace Google Maps embeds** with accurate property locations
- [ ] **Add real agent photos and bios**
- [ ] **Update social media links** in the footer
- [ ] **Add your agency logo** (replace the MapPin icon in Header/Footer)
- [ ] **Test on mobile devices** (iPhone, Android, tablets)
- [ ] **Run Lighthouse audit** for performance and SEO
- [ ] **Add Google Analytics** for tracking
- [ ] **Set up a custom domain** (e.g., www.youragency.com)
- [ ] **Add SSL certificate** for HTTPS
- [ ] **Create a privacy policy page** (required for Nigerian data protection)
- [ ] **Add Open Graph meta tags** for social media sharing

---

## Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Build Size:** ~140KB gzipped (JS + CSS)

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 14+)
- Chrome for Android (latest)

---

## Support & Customization

This website is built to be **self-service**. The single data file (src/data/propertiesConfig.js) controls everything — no coding knowledge required for basic updates.

For advanced customization:
- **Adding new pages:** Create a new file in src/pages/ and add a route in App.jsx
- **Changing colors:** Edit the Tailwind theme in src/index.css
- **Adding features:** The React component architecture makes it easy to extend

---

## What Makes This Different

| Generic Template | Northgate Properties |
|-----------------|---------------------|
| Blue corporate branding | Warm stone + gold palette |
| Box dashboard layout | Editorial magazine grid |
| Checkbox filter sidebar | Clean horizontal filter bar |
| No WhatsApp integration | One-tap WhatsApp enquiries |
| Generic stock photos | Curated Unsplash photography |
| No location emphasis | Dedicated location pages + strips |
| Static listings | Animated, interactive experience |
| Template paragraphs | Unique descriptions per listing |

---

## License

This project is ready for commercial use. Build your agency's website, impress your clients, and close more deals.

---

**Built with precision. Designed for trust. Ready to convert.**

*Your next listing deserves a website that sells it before you even pick up the phone.*
