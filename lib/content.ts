export type PartyEvent = {
  slug: string;
  title: string;
  date: string; // ISO date
  displayDate: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  dressCode: string;
  hosts?: string[];
  image: string;
  peventEventId?: string; // maps to a Pevent.ng event id once issued
};

export const upcomingEvents: PartyEvent[] = [
  {
    slug: "Welcome to vegas",
    title: "D'Vegas Brunch",
    date: "2026-07-19",
    displayDate: "Sunday, 19 July",
    time: "2PM — 8PM",
    venue: "Trafik Lounge",
    address: "4 Ewere Street, Off Akhionbare, GRA, Benin City",
    description:
      "Can’t go to Vegas yet? Don’t worry D’SUNDAY BRNCH is bringing VEGAS to you in BENIN CITY",
    dressCode: "Stay swagged Up",
    hosts: ["DJ Vegas", ""],
    image: "/images/events/vegasbrunch.JPG",
  },
  {
    slug: "First-sunday-social",
    title: "Cultural Brunch",
    date: "2026-08-02",
    displayDate: "Sunday, 2 August",
    time: "2PM — 8PM",
    venue: "Trafik Lounge",
    address: "4 Ewere Street, Off Akhionbare, GRA, Benin City",
    description:
      "Remember where you are from!! But incase you've forgooten, Don’t worry D’SUNDAY BRNCH is bringing Your Culture to you in BENIN CIT",
    dressCode: "Cultural wears",
    hosts: ["DJ Dirty finger"],
    image: "/images/events/third-sunday.jpg",
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "How do I reserve a table or entry?",
    answer:
      "Head to the Reservations page and select your event. All reservations are processed securely through Pevent.ng.You'll receive an instant confirmation and e-ticket by email.",
  },
  {
    question: "What is the dress code?",
    answer:
      "Every edition has its own theme, listed on the Next brunch page.",
  },
  {
    question: "Is there an age restriction?",
    answer: "Yes, D SUNDAY BRNCH is strictly 18+.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Reservations are non-refundable but fully transferable up to 24 hours before the event. Reach out to our team via the contact details on your confirmation email to transfer a booking.",
  },
  {
    question: "Is parking available at the venue?",
    answer:
      "Yes, our Venue has Adequate packing space for all types of vehicle.",
  },
  {
    question: "What time does entry close?",
    answer:
      "Entry does not close but try to Arrive early to get the full experience .Early arrivals get first pick of seating and the best Experience.",
  },
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/dsundaybrnch?igsh=aHZmOXpqNjU0MjBk" },
  { label: "TikTok", href: "https://www.tiktok.com/@dsundaybrnch?_r=1&_t=ZS-98F4qmhal3E" },
  { label: "X", href: "https://x.com/dsundaybrnch" },
  { label: "Snapchat", href: "https://www.snapchat.com/add/dsundaybrunch" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Next Brunch", href: "/parties" },
  { label: "Reservations", href: "/reservations" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "POVs", href: "/povs" },
  { label: "FAQs", href: "/faqs" },
];
