import type { ServiceContent } from './serviceTypes'

export const serviceContentEn: Record<string, ServiceContent> = {
  bitrix24: {
    title: 'Bitrix24 CRM implementation',
    description:
      'Bitrix24 is a comprehensive platform for team collaboration on tasks and projects across every department — from accounting to development.',
    bitrixDemoUrl: 'https://www.bitrix24.ru/create.php?p=23472882',
    bitrixLeadBlock: {
      headline: 'What we do in Bitrix24 — not the usual rollout',
      intro: [
        'Most Bitrix24 projects stop at basic CRM setup.',
        'We go further — we build a full digital system tailored to your business.',
      ],
      sections: [
        {
          title: '⚙️ Automation that actually works',
          items: [
            'We configure not just pipelines but sales logic that matches your process',
            'We remove manual work with robots and business processes',
            'We deliver transparent analytics and control at every stage',
          ],
          closing: '⚡ Less chaos, more control and speed.',
        },
        {
          title: '🤖 Chatbots and communication flows',
          lead: 'We build chatbots for real business tasks:',
          items: [
            'lead handling',
            'first-line client qualification',
            'auto-replies and routing',
          ],
          closing: '🤖 Bots do not just reply — they move clients toward a sale.',
        },
        {
          title: '📞 Contact center, end to end',
          lead: 'We unite every channel in one place:',
          items: ['WhatsApp', 'Telegram', 'Instagram', 'Max and more'],
          closing: '💬 Every conversation is logged in CRM — no client slips away.',
        },
        {
          title: '🔗 Integrations without limits',
          items: [
            'Two-way Google Sheets integration',
            'API integrations with any services',
            'Real-time data sync',
          ],
          closing: '🔗 CRM becomes the hub of your stack, not a silo.',
        },
        {
          title: '💻 Development for your business',
          lead: 'We build custom solutions:',
          items: [
            'local apps inside Bitrix24',
            'custom modules for your processes',
            'extensions beyond standard features',
          ],
          closing: '🛠️ If Bitrix lacks a tool — we build it.',
        },
      ],
    },
    bitrixCertificates: {
      headline: 'Expertise backed by documentation',
      headlineAccent: 'We are a certified Bitrix24 partner.',
      subline: [
        'Certificates and team competencies are available for verification.',
        'You know who you work with and what level of delivery to expect.',
      ],
      items: [
        {
          id: 'cert-1',
          src: '/certificates/bitrix-cert-1.svg',
          alt: 'Bitrix24 competency certificate — placeholder, replace with scan',
          caption: 'Competencies and qualifications',
        },
        {
          id: 'cert-2',
          src: '/certificates/bitrix-cert-2.svg',
          alt: 'Bitrix24 partnership certificate — placeholder',
          caption: 'Partner status',
        },
        {
          id: 'cert-3',
          src: '/certificates/bitrix-cert-3.svg',
          alt: 'Bitrix24 implementation certificate — placeholder',
          caption: 'Delivery and projects',
        },
        {
          id: 'cert-4',
          src: '/certificates/bitrix-cert-4.svg',
          alt: 'Bitrix24 development certificate — placeholder',
          caption: 'Development and customization',
        },
      ],
    },
    groups: [
      {
        title: 'A platform for business',
        items: [
          'A business platform should be convenient and include everything teams need day to day.',
          'Bring employees together to collaborate on tasks and projects.',
          'Monitor work, analyze outcomes, and run business processes inside your CRM.',
        ],
      },
    ],
    bitrixSurvey: {
      headline: 'Not sure whether to choose cloud or on-premise?',
      subheadline:
        'Take a short quiz — we will suggest the best fit for your business and lock in an implementation discount.',
      timeNote: '⏱ Takes about one minute',
      questions: [
        {
          id: 'q1',
          text: 'How many people will use the system?',
          options: [
            { label: 'Up to 10', cloud: 2, box: 0 },
            { label: '10–50', cloud: 1, box: 0 },
            { label: '50+', cloud: 0, box: 2 },
          ],
        },
        {
          id: 'q2',
          text: 'Do you need integrations?',
          options: [
            { label: 'No', cloud: 2, box: 0 },
            { label: 'Standard (WhatsApp, Telegram, email)', cloud: 1, box: 0 },
            { label: 'Complex / API / 1C', cloud: 0, box: 2 },
          ],
        },
        {
          id: 'q3',
          text: 'How fast do you need to go live?',
          options: [
            { label: 'Urgent (within 3 days)', cloud: 2, box: 0 },
            { label: 'Within a week', cloud: 1, box: 0 },
            { label: 'Not urgent', cloud: 0, box: 1 },
          ],
        },
        {
          id: 'q4',
          text: 'Any security requirements?',
          options: [
            { label: 'No', cloud: 2, box: 0 },
            { label: 'Prefer more control', cloud: 0, box: 1 },
            { label: 'Strict / own servers', cloud: 0, box: 2 },
          ],
        },
        {
          id: 'q5',
          text: 'Do you plan to scale?',
          options: [
            { label: 'No', cloud: 2, box: 0 },
            { label: 'Maybe', cloud: 1, box: 0 },
            { label: 'Yes — growth / structure', cloud: 0, box: 2 },
          ],
        },
      ],
      finalTitle: 'One last step',
      finalText: 'Share your contacts — we will save your result and discount.',
      finalCta: 'Submit and lock in the discount',
      discountNoteUnderSubmit: 'The discount applies only after contacts are submitted',
      nameLabel: 'Name',
      phoneLabel: 'Phone',
      sphereLabel: 'Industry',
      otherSpherePlaceholder: 'Describe your industry',
      businessSpheres: [
        'Retail',
        'Wholesale',
        'Services',
        'Manufacturing',
        'Construction',
        'Real estate',
        'Education',
        'Healthcare',
        'Finance',
        'Logistics',
        'HoReCa',
        'IT / Digital',
        'E-commerce',
        'Automotive',
        'Consulting',
      ],
      otherSphereLabel: 'Other',
      successTitle: 'Thank you for your answers.',
      successLines: ['We matched the best option for your business.'],
      successDiscountLine: '👉 An implementation discount is reserved for you',
      successUrgencyLine: '⏳ Valid for 24 hours',
      timerLabel: 'Time left',
    },
  },
  firstbit: {
    title: 'Expert 1C and Firstbit implementation and customization in the UAE, Russia, and Kazakhstan',
    groups: [
      {
        title: 'Strategic consulting and system audit',
        items: [
          'Deep business analysis: interviews with key stakeholders (CEO, CFO, owners) to surface hidden inefficiencies.',
          'Technical design: architecture, resource planning, and realistic implementation roadmaps.',
          'Optimization of existing systems: audit of 1C / FirstBit databases for accounting errors and performance.',
        ],
      },
      {
        title: 'Turnkey implementation and customization',
        items: [
          'Full deployment cycle: professional setup of 1C and FirstBit configurations.',
          'Custom architecture: catalogs, documents, and registers built from scratch where standard features fall short.',
          'Security and roles: access matrices, advanced permission profiles, and shared modules for stable operations.',
        ],
      },
      {
        title: 'Accounting automation aligned with IFRS',
        items: [
          'Methodology: applying IAS / IFRIC in 1C and FirstBit for internationally active companies.',
          'Advanced finance: discounting AR/AP, asset valuation, provisioning, and more.',
          'Reporting transformation: chart mapping to move from local statutory to international reporting faster.',
        ],
      },
    ],
  },
  'accounting-systems': {
    title: 'Accounting system implementation and recovery',
    groups: [],
    featured: {
      title: 'Services',
      services: [
        'Accounting recovery and cleanup.',
        'Implementation and tuning of accounting software.',
        'Process optimization.',
        'Integration with bank statements and CRM.',
      ],
      systemsTitle: 'Supported systems',
      systems: ['1C and Firstbit', 'Zoho Books', 'QuickBooks'],
    },
  },
  'accounting-setup': {
    title: 'Accounting setup tailored to your operations',
    groups: [],
    tiles: [
      {
        title: '🚗️ Car rental',
        items: ['Client deposits.', 'Fines and Salik tolls.', 'Fleet depreciation.', 'Insurance payouts.'],
      },
      {
        title: '🏗️ Construction and development',
        items: [
          'Project-level cost accounting.',
          'Subcontractor relationship management.',
          'Long-term project profitability analysis.',
        ],
      },
      {
        title: '🏢️ Property and facility management',
        items: ['Rent and service charges.', 'Tenant deposits.', 'Broker commissions.', 'Property management.'],
      },
      {
        title: '🚢️ Maritime logistics and shipping',
        items: ['Charter agreements.', 'Port costs.', 'International payments.', 'Complex freight accounting.'],
      },
      {
        title: '🛒️ E-commerce',
        items: ['Payment gateways.', 'Refunds.', 'Marketplace fees.', 'Multi-currency accounting.'],
      },
      {
        title: '📦️ Import / export',
        items: [
          'Supply chain automation.',
          'Real-time inventory.',
          'POS integration.',
          'Complex pricing and loyalty programs.',
        ],
      },
      {
        title: '🍽️ Restaurants and cafés',
        items: ['POS systems.', 'Write-offs.', 'Dish cost accounting.', 'Cash operations.'],
      },
      {
        title: '🏨️ Hotels and short-term rentals',
        items: ['Tourism fees.', 'OTA commissions (Booking, Airbnb).', 'Multiple revenue types.'],
      },
      {
        title: '🧑‍💻️ IT and SaaS',
        items: ['Subscriptions.', 'Deferred revenue.', 'International clients.'],
      },
      {
        title: '🏥️ Medical clinics',
        items: ['Insurance companies.', 'Multiple tariffs.', 'Complex billing.'],
      },
      {
        title: '🎓️ Education centers',
        items: ['Tuition prepayments.', 'Revenue recognition by period.', 'Refunds.'],
      },
      {
        title: '🚚️ Logistics and transport',
        items: ['Freight.', 'Carrier costs.', 'Different VAT rates.'],
      },
      {
        title: '🏭️ Manufacturing',
        items: [
          'Actual cost calculation.',
          'BOM management.',
          'Production cost accounting for clear product margin visibility.',
        ],
      },
      {
        title: '🧾️ Professional services and consulting',
        items: ['Project time tracking.', 'Service billing for consulting firms.'],
      },
      {
        title: '🌾️ Agribusiness',
        description:
          'Biological assets, seasonal cost control, and reporting automation across production cycles.',
        items: ['Biological assets.', 'Seasonal costs.', 'Cycle-based reporting.'],
      },
    ],
  },
  training: {
    title: 'Support and training for your team',
    groups: [
      {
        title: 'Team support and training',
        items: [
          'Delivery governance: detailed specs for developers and execution control via Jira / Agile.',
          'Onboarding: custom playbooks and training so teams are productive from day one.',
          'Hands-on product training: 1C, Firstbit, Zoho Books, and QuickBooks — practical skills to cut routine and speed up work.',
          'Advisory and support: questions on accounting in your stack or efficiency improvements — we explain options and recommend approaches.',
        ],
      },
    ],
  },
}
