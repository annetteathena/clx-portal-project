export type LeadStatus = "Pending" | "In Progress" | "Closed Won" | "Closed Lost";

export interface Lead {
  id: string;
  leadName: string;
  companyName: string;
  submittedDate: string;
  status: LeadStatus;
  dealValue: number;
  commission: number;
  notes: string;
}

export interface Partner {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  partnerSince: string;
  tier: string;
  leads: Lead[];
}

export const partners: Partner[] = [
  {
    id: "partner-1",
    name: "Apex Solutions",
    email: "apex@partner.com",
    password: "partner123",
    phone: "+1 (555) 201-4400",
    address: "450 Market Street, San Francisco, CA 94105",
    partnerSince: "2022-03-15",
    tier: "Gold",
    leads: [
      {
        id: "lead-1-1",
        leadName: "James Whitfield",
        companyName: "NovaTech Inc.",
        submittedDate: "2024-01-08",
        status: "Closed Won",
        dealValue: 48000,
        commission: 4800,
        notes: "Signed enterprise plan. Champion was the CTO.",
      },
      {
        id: "lead-1-2",
        leadName: "Sandra Chen",
        companyName: "BrightPath Logistics",
        submittedDate: "2024-01-22",
        status: "Closed Won",
        dealValue: 32000,
        commission: 3200,
        notes: "Needed supply-chain analytics module.",
      },
      {
        id: "lead-1-3",
        leadName: "Marcus Rivera",
        companyName: "UrbanGrid Media",
        submittedDate: "2024-02-05",
        status: "In Progress",
        dealValue: 22000,
        commission: 0,
        notes: "In legal review. Expected close Q2.",
      },
      {
        id: "lead-1-4",
        leadName: "Priya Nair",
        companyName: "Helios Financial",
        submittedDate: "2024-02-19",
        status: "Pending",
        dealValue: 15000,
        commission: 0,
        notes: "Initial discovery call scheduled.",
      },
      {
        id: "lead-1-5",
        leadName: "Derek Hammond",
        companyName: "Crestline Manufacturing",
        submittedDate: "2024-03-03",
        status: "Closed Lost",
        dealValue: 60000,
        commission: 0,
        notes: "Went with a competitor on price.",
      },
      {
        id: "lead-1-6",
        leadName: "Tanya Brooks",
        companyName: "CloudBridge Systems",
        submittedDate: "2024-03-18",
        status: "Closed Won",
        dealValue: 27500,
        commission: 2750,
        notes: "Upsold to premium tier during negotiation.",
      },
      {
        id: "lead-1-7",
        leadName: "Leo Steinberg",
        companyName: "Meridian Health Group",
        submittedDate: "2024-04-02",
        status: "In Progress",
        dealValue: 41000,
        commission: 0,
        notes: "Security questionnaire in progress.",
      },
      {
        id: "lead-1-8",
        leadName: "Nina Patel",
        companyName: "Summit Retail Co.",
        submittedDate: "2024-04-15",
        status: "Pending",
        dealValue: 18500,
        commission: 0,
        notes: "Waiting for budget approval from CFO.",
      },
      {
        id: "lead-1-9",
        leadName: "Carlos Vega",
        companyName: "Frontier Energy LLC",
        submittedDate: "2024-05-01",
        status: "Closed Won",
        dealValue: 55000,
        commission: 5500,
        notes: "Multi-year contract. Strong referral relationship.",
      },
      {
        id: "lead-1-10",
        leadName: "Rachel Kim",
        companyName: "DataNest Analytics",
        submittedDate: "2024-05-14",
        status: "Pending",
        dealValue: 12000,
        commission: 0,
        notes: "Demo completed, awaiting internal sign-off.",
      },
    ],
  },
  {
    id: "partner-2",
    name: "BlueStar Agency",
    email: "bluestar@partner.com",
    password: "partner123",
    phone: "+1 (555) 374-8820",
    address: "888 Brickell Avenue, Miami, FL 33131",
    partnerSince: "2023-06-01",
    tier: "Silver",
    leads: [
      {
        id: "lead-2-1",
        leadName: "Amanda Foster",
        companyName: "Orion Consulting Group",
        submittedDate: "2024-01-10",
        status: "Closed Won",
        dealValue: 38000,
        commission: 3800,
        notes: "Referral from existing client. Smooth close.",
      },
      {
        id: "lead-2-2",
        leadName: "Brian O'Neill",
        companyName: "Coastline Properties",
        submittedDate: "2024-01-28",
        status: "Closed Lost",
        dealValue: 25000,
        commission: 0,
        notes: "Project postponed indefinitely.",
      },
      {
        id: "lead-2-3",
        leadName: "Sophia Martinez",
        companyName: "Vanguard EdTech",
        submittedDate: "2024-02-12",
        status: "In Progress",
        dealValue: 19000,
        commission: 0,
        notes: "Pilot program running this quarter.",
      },
      {
        id: "lead-2-4",
        leadName: "Henry Liu",
        companyName: "Pinnacle Software",
        submittedDate: "2024-02-26",
        status: "Closed Won",
        dealValue: 44000,
        commission: 4400,
        notes: "Integration project. Technical win.",
      },
      {
        id: "lead-2-5",
        leadName: "Grace Thompson",
        companyName: "Atlas Insurance",
        submittedDate: "2024-03-11",
        status: "Pending",
        dealValue: 30000,
        commission: 0,
        notes: "Compliance review required before proceeding.",
      },
      {
        id: "lead-2-6",
        leadName: "Ethan Clarke",
        companyName: "RedRock Ventures",
        submittedDate: "2024-03-25",
        status: "In Progress",
        dealValue: 52000,
        commission: 0,
        notes: "Board approval needed. High priority deal.",
      },
      {
        id: "lead-2-7",
        leadName: "Mia Johnson",
        companyName: "Sterling Pharma",
        submittedDate: "2024-04-08",
        status: "Closed Won",
        dealValue: 67000,
        commission: 6700,
        notes: "Largest deal to date for this partner.",
      },
      {
        id: "lead-2-8",
        leadName: "Oliver Grant",
        companyName: "SwiftMove Freight",
        submittedDate: "2024-04-22",
        status: "Pending",
        dealValue: 14000,
        commission: 0,
        notes: "New contact, early stage.",
      },
      {
        id: "lead-2-9",
        leadName: "Isabella Wong",
        companyName: "Nexus Hospitality",
        submittedDate: "2024-05-06",
        status: "Closed Lost",
        dealValue: 28000,
        commission: 0,
        notes: "Budget cut — revisit in H2.",
      },
      {
        id: "lead-2-10",
        leadName: "Ryan Patel",
        companyName: "Clearview Analytics",
        submittedDate: "2024-05-20",
        status: "In Progress",
        dealValue: 23000,
        commission: 0,
        notes: "POC successful, moving to contract stage.",
      },
      {
        id: "lead-2-11",
        leadName: "Chloe Bennett",
        companyName: "IronBridge Capital",
        submittedDate: "2024-06-03",
        status: "Pending",
        dealValue: 35000,
        commission: 0,
        notes: "Intro meeting set for next week.",
      },
    ],
  },
];

export function getPartnerByEmail(email: string): Partner | undefined {
  return partners.find((p) => p.email === email);
}

export function computeStats(partner: Partner) {
  const totalLeads = partner.leads.length;
  const closedWon = partner.leads.filter((l) => l.status === "Closed Won");
  const totalRevenue = closedWon.reduce((sum, l) => sum + l.dealValue, 0);
  const totalCommission = closedWon.reduce((sum, l) => sum + l.commission, 0);
  return { totalLeads, closedWonCount: closedWon.length, totalRevenue, totalCommission };
}
