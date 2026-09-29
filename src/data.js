export const navLinks = [
  { label: "Agents", href: "#agents" },
  { label: "How we work", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export const demoScenarios = [
  {
    id: "support",
    label: "Support",
    trigger: "New ticket: “My invoice shows the wrong plan.”",
    steps: [
      "Reads the ticket and finds the customer’s account",
      "Checks billing history: plan changed on 3 Sep",
      "Issues a corrected invoice and refunds the difference",
      "Replies to the customer in their language",
    ],
    result: "Resolved in 41 seconds. No human needed.",
  },
  {
    id: "sales",
    label: "Sales",
    trigger: "New lead: Priya from Northwind filled the demo form.",
    steps: [
      "Researches Northwind: 240 staff, hiring 12 support roles",
      "Scores the lead 86/100 and marks it high priority",
      "Drafts a personal email with two relevant case studies",
      "Books a call on the sales lead’s calendar",
    ],
    result: "Demo booked for Thursday, 4 pm.",
  },
  {
    id: "ops",
    label: "Operations",
    trigger: "Supplier sent a PDF invoice by email.",
    steps: [
      "Extracts amounts, dates and PO number from the PDF",
      "Matches it with purchase order #4471",
      "Spots a 6% price difference and flags it",
      "Sends the invoice to finance with a short summary",
    ],
    result: "Invoice checked. Finance only reviews the one flagged line.",
  },
];

export const services = [
  {
    id: "support",
    name: "Support agent",
    summary: "Answers customers in chat and email, and fixes routine problems inside your own tools.",
    handles: [
      "Order, billing and account questions",
      "Refunds and replacements within your rules",
      "Hand-off to a person, with the full story attached",
    ],
    outcome: "Typical result: 60–70% of tickets closed without a human.",
  },
  {
    id: "sales",
    name: "Sales agent",
    summary: "Finds, researches and follows up with leads so your team only speaks to people ready to buy.",
    handles: [
      "Lead research and scoring",
      "Personal first emails and follow-ups",
      "Meeting booking and CRM updates",
    ],
    outcome: "Typical result: 2–3x more booked calls from the same leads.",
  },
  {
    id: "ops",
    name: "Operations agent",
    summary: "Takes over repeat back-office work such as invoices, reports and data entry.",
    handles: [
      "Reading documents, emails and spreadsheets",
      "Matching records across tools",
      "Weekly reports written and sent for you",
    ],
    outcome: "Typical result: 15–25 staff hours saved every week.",
  },
  {
    id: "custom",
    name: "Custom agent",
    summary: "Have a task that does not fit above? We design an agent around your exact process.",
    handles: [
      "Connects to your software through APIs",
      "Follows your approval and safety rules",
      "Logs every action so you can audit it",
    ],
    outcome: "Scoped in a one-week audit, with a fixed price.",
  },
];

export const process = [
  { title: "Audit", time: "Week 1", text: "We map your daily tasks and pick the 2–3 where an agent saves the most time." },
  { title: "Build", time: "Weeks 2–3", text: "We build the agent on your tools and test it on your real past data." },
  { title: "Launch", time: "Week 4", text: "The agent goes live with a human approving its work at first." },
  { title: "Improve", time: "Every month", text: "We review mistakes, tune the agent and report the hours and money saved." },
];

export const results = [
  {
    company: "Northwind Logistics",
    metric: "72%",
    label: "of support tickets solved by the agent",
    note: "Support team moved to handling only complex claims.",
  },
  {
    company: "Bloomly Studio",
    metric: "3x",
    label: "more sales calls booked",
    note: "Lead follow-up now happens within 2 minutes.",
  },
  {
    company: "Kite Finance",
    metric: "22 h",
    label: "saved per week on invoice checks",
    note: "Errors caught before payment, not after.",
  },
];

export const faqs = [
  {
    q: "Will the agent make mistakes?",
    a: "Sometimes, like any new team member. That is why every agent starts in review mode: a person approves its actions until the numbers show it is safe to let it run alone.",
  },
  {
    q: "Which tools can you connect to?",
    a: "Most tools with an API or email access: Gmail, Slack, HubSpot, Shopify, Notion, Google Sheets, Zendesk and many more.",
  },
  {
    q: "Is our data safe?",
    a: "Your data stays in your accounts. Agents get only the access they need, every action is logged, and we never use your data to train public models.",
  },
  {
    q: "How much does it cost?",
    a: "After the one-week audit you get a fixed price for building the agent, plus a simple monthly fee for running and improving it.",
  },
  {
    q: "Do we need a technical team?",
    a: "No. We handle building, hosting and monitoring. You only need one person who knows the process we are automating.",
  },
];
