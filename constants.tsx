import React from 'react';
import { 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Scale,
  Search,
  Settings,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import { Service, ContactInfo, Article } from './types';

export const COLORS = {
  NAVY: '#0a2233',
  GOLD: '#cda26d',
  BEIGE: '#f4e8d1',
};

export const SERVICES: Service[] = [
  {
    title: 'Comprehensive Financial Records',
    description: 'Meticulous bookkeeping and documentation to ensure every cent is accounted for and your business history is clear.',
    icon: <FileText className="w-8 h-8" />
  },
  {
    title: 'Strategic Tax Preparation',
    description: 'Proactive tax planning and preparation to minimize liabilities and ensure you take advantage of all available benefits.',
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    title: 'Seamless Compliance & Filing',
    description: 'Removing the stress of deadlines. We handle all tax filings and statutory compliance with precision.',
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: 'End-to-End Payroll Management',
    description: 'Accurate payroll processing, benefits management, and statutory deduction filings for your peace of mind.',
    icon: <Users className="w-8 h-8" />
  },
  {
    title: 'Regulatory Compliance & Advisory',
    description: 'Expert guidance on changing regulations to keep your business compliant and ahead of the curve.',
    icon: <Scale className="w-8 h-8" />
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'digital-tax-kenya',
    title: "Navigating Kenya's Digital Service Tax Evolution",
    excerpt: "A comprehensive guide for tech entrepreneurs on complying with the latest KRA regulations for online businesses.",
    content: "The Digital Service Tax (DST) in Kenya has seen significant shifts since its introduction. As we approach the end of 2025, the Kenya Revenue Authority (KRA) has refined its collection mechanisms, moving from basic flat rates to a more nuanced structure that accounts for the scale of digital operations.\n\nFor tech entrepreneurs and digital marketplace providers, staying compliant means understanding the 1.5% tax on gross transaction value. This applies to revenue derived from services provided through a digital marketplace. As the world moves toward a global digital economy, Kenya's approach reflects a broader trend of taxing value where it is created, even if the entity has no physical presence.\n\nBusiness owners should prepare for tighter KRA scrutiny as automated tracking systems improve. The integration of iTax with international payment gateways has made it easier for the authorities to identify non-compliant entities. To navigate this, businesses must maintain rigorous digital ledgers and ensure that every transaction is mapped to its corresponding tax liability in real-time.",
    category: 'Kenya Compliance',
    author: 'Lucia Maina',
    date: 'Nov 12, 2025',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'global-min-tax',
    title: "The Impact of Global Minimum Tax on Local SMEs",
    excerpt: "How international tax agreements are reshaping the financial landscape for Kenyan exporters and consultants.",
    content: "With the OECD's Pillar Two initiative now in full swing globally, a 15% global minimum tax is the new reality. While it primarily targets large multinationals with revenues exceeding 750 million euros, the ripple effects are felt by local SMEs who form part of global supply chains. \n\nKenyan exporters and consultants who serve international clients are now finding themselves subject to enhanced due diligence. Multinationals are demanding that their vendors demonstrate tax transparency to avoid 'top-up' tax liabilities in their home jurisdictions. Changes in transfer pricing rules and reporting requirements mean that even smaller Kenyan firms must now maintain documentation that meets international standards.\n\nThis 'trickle-down' compliance means that local bookkeeping must now be robust enough to withstand international audits. Lucia Maina helps bridge this gap by aligning local bookkeeping practices with these emerging global norms, ensuring that Kenyan businesses remain attractive partners for global corporations.",
    category: 'Global Finance',
    author: 'Lucia Maina',
    date: 'Dec 05, 2025',
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai-bookkeeping',
    title: "AI-Driven Bookkeeping: Beyond the Spreadsheet",
    excerpt: "Exploring how automation and machine learning are revolutionizing accuracy in modern financial management.",
    content: "Technology is no longer just a tool; it's the foundation of modern accounting. AI-driven bookkeeping reduces human error by up to 90% in transaction categorization. In Kenya, platforms integrating directly with banking APIs allow for real-time financial tracking that was previously impossible for small businesses.\n\nModern AI systems can now perform automated OCR (Optical Character Recognition) on receipts, mapping them to the correct accounts without manual intervention. This shift allows consultants like Lucia Maina to focus more on strategic advisory—such as tax planning and cash flow forecasting—rather than just data entry. \n\nFor the business owner, this means having a live dashboard of their financial health. You no longer have to wait until the end of the month to know your profit margins. However, with great automation comes the need for expert oversight. AI can categorize, but it doesn't understand the nuances of Kenyan tax law. That's where professional expertise meets technological efficiency.",
    category: 'Tech & Innovation',
    author: 'Lucia Maina',
    date: 'Dec 18, 2025',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'finance-act-2024',
    title: "Key Changes in the Finance Act 2025 for MSMEs",
    excerpt: "Critical updates on turnover tax and VAT compliance that every small business owner in Kenya needs to understand.",
    content: "The latest Finance Act has introduced several pivot points for Micro, Small, and Medium Enterprises. From changes in Turnover Tax (TOT) rates to the introduction of even more stringent eTIMS requirements, the barrier to entry for full compliance has shifted significantly.\n\nMSMEs are now required to issue electronic tax invoices for every single transaction, regardless of their VAT registration status. This move is designed to broaden the tax base but places a heavy administrative burden on small shops. Furthermore, the act has introduced new withholding tax obligations for digital payments, impacting freelancers and gig workers specifically.\n\nIt is essential for business owners to digitize their invoicing immediately to avoid non-compliance penalties, which have become more aggressive this year. This article breaks down the technical jargon into actionable steps: 1) Register for eTIMS, 2) Categorize your expenses correctly for TOT, and 3) Keep a digital trail of all business-related mobile money transactions.",
    category: 'Kenya Compliance',
    author: 'Lucia Maina',
    date: 'Oct 20, 2025',
    readTime: '12 min read',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'crypto-tax-global',
    title: "Cryptocurrency Taxation: A Global Perspective",
    excerpt: "As digital assets become mainstream, we look at how different jurisdictions are approaching crypto-reporting.",
    content: "While Kenya's stance on cryptocurrency continues to evolve, international markets like the US and EU have already established firm capital gains reporting requirements for digital assets. For Kenyan investors looking to participate in global markets, understanding these foreign tax obligations is crucial to avoid asset freezing or legal disputes.\n\nIn the late 2025 landscape, Kenya is moving toward a more structured regulatory framework for Virtual Asset Service Providers (VASPs). This means that profits from crypto trading are increasingly being scrutinized under the Capital Gains Tax (CGT) bracket. \n\nWe explore how 'Know Your Customer' (KYC) regulations are being paired with tax reporting to create a transparent digital ledger for global finance. For local traders, the advice is simple: document your entry and exit points. Whether you are dealing in Bitcoin, Ethereum, or stablecoins, the tax man is now looking at digital wallets with the same level of interest as traditional bank accounts.",
    category: 'Global Finance',
    author: 'Lucia Maina',
    date: 'Nov 30, 2025',
    readTime: '9 min read',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cloud-integrity',
    title: "Cloud Migration for Financial Data Integrity",
    excerpt: "Why shifting your accounting to the cloud is no longer optional for businesses seeking real-time transparency.",
    content: "Relying on physical hard drives for financial records is a high-risk strategy in the modern world. Cloud migration offers not only security through encryption but also the ability to access business health metrics from anywhere at any time. \n\nAs we look at the technological landscape in late 2025, 'Hybrid Cloud' solutions are becoming the standard for Kenyan firms. This allows for sensitive data to be stored with localized encryption while leveraging global cloud power for processing and analytics. Transitioning from legacy systems to cloud-based solutions like QuickBooks Online or Xero enables better collaboration between business owners and their consultants.\n\nFurthermore, cloud systems provide an immutable audit trail. In the event of a tax inquiry, having all your records stored in a secure, time-stamped cloud environment makes the audit process significantly faster and less stressful. It's about building a 'future-proof' finance department that scales as your business grows.",
    category: 'Tech & Innovation',
    author: 'Lucia Maina',
    date: 'Dec 22, 2025',
    readTime: '11 min read',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROCESS_STEPS = [
  {
    title: 'Discovery & Audit',
    description: 'We begin with a deep dive into your current financial records and compliance status to identify gaps.',
    icon: <Search className="w-6 h-6" />
  },
  {
    title: 'Strategy Design',
    description: 'Developing a customized bookkeeping and tax framework tailored to your specific industry needs.',
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: 'Implementation',
    description: 'Seamlessly integrating new systems and taking over the burden of your monthly filings.',
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: 'Growth Advisory',
    description: 'Ongoing support and monthly reporting to ensure you have the clarity to make big business moves.',
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];

export const TESTIMONIALS = [
  {
    quote: "Lucia transformed our chaotic bookkeeping into a streamlined system. We finally feel in control of our finances.",
    author: "Samuel K.",
    role: "CEO, TechVanguard Ltd"
  },
  {
    quote: "Her knowledge of KRA regulations is unmatched. She saved us from heavy penalties during a complex audit year.",
    author: "Grace M.",
    role: "Director, Unity Logistics"
  },
  {
    quote: "Professional, timely, and incredibly detailed. Hiring Lucia was the best decision for our growing agency.",
    author: "David O.",
    role: "Founder, Peak Creative"
  }
];

export const FAQS = [
  {
    question: "Do you provide services for small startups or only large corporations?",
    answer: "I work with businesses of all sizes. For startups, I focus on building a solid financial foundation, while for larger entities, I specialize in complex compliance and statutory audits."
  },
  {
    question: "How often will I receive financial reports?",
    answer: "Typically, I provide comprehensive monthly management reports. However, depending on your package, we can set up bi-weekly or quarterly reviews."
  },
  {
    question: "Can you assist with KRA tax audits and disputes?",
    answer: "Yes, I provide full representation and documentation support for KRA audits, ensuring that your business interests are protected and compliance is demonstrated."
  },
  {
    question: "Which industries do you specialize in?",
    answer: "I have extensive experience in Logistics, Technology, Retail, and Professional Services within the Kenyan market."
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: 'mainaluciaw@gmail.com',
  phone: '+254 710214686',
  location: 'Nairobi, Kenya'
};