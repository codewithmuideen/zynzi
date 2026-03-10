// ─── Image Assets ────────────────────────────────────────────────────────────
import logo       from '../assets/logo.png'
import mobileApp  from '../assets/mobile_app.png'
import africanBoy from '../assets/african-boy.png'
// import colorImg   from '../assets/color.png'

export const IMAGES = { logo, mobileApp, africanBoy }

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_CTA_LABEL = 'Join Waitlist'

// ─── Hero ────────────────────────────────────────────────────────────────────
export const HERO_BADGE    = 'London & Sheffield Launch - Join the Waitlist'
export const HERO_TITLE_1  = 'Bored?'
export const HERO_TITLE_2  = 'Post a vibe.'
export const HERO_TITLE_HL = 'Feel human again.'
export const HERO_SUB      = 'Zynzi connects you with real people for spontaneous meetups - dinners, walks, games, coffee. No swiping. No awkward DMs. Just real moments, nearby, right now.'

export const HERO_TRUST = [
  { icon: 'star',   label: 'Free to join' },
  { icon: 'lock',   label: 'Trust-first & safe' },
  { icon: 'clock',  label: 'London & Sheffield 2025' },
]

export const USER_TYPE_OPTIONS = [
  { value: '',         label: 'I am a…' },
  { value: 'user',     label: 'Someone looking to meet people' },
  { value: 'student',  label: 'University student' },
  { value: 'migrant',  label: 'New to the city' },
  { value: 'host',     label: 'Venue / Business host' },
  { value: 'pro',      label: 'Young professional' },
]

// ─── Phone Mock Events ───────────────────────────────────────────────────────
export const PHONE_EVENTS = [
  { icon: 'coffee',   name: 'Coffee & Catch Up',   meta: '7pm · Shoreditch · 0.3mi', spots: '2 left' },
  { icon: 'gamepad2', name: 'Board Game Night',     meta: '8pm · Brixton · 1.1mi',    spots: '4 left' },
  { icon: 'footprints',name: 'Evening Walk + Talk', meta: 'Now · Canary Wharf · 0.8mi',spots: '1 left' },
]

// ─── Proof Strip ─────────────────────────────────────────────────────────────
export const PROOF_STATS = [
  { number: '500+', label: 'People on\nthe waitlist',      icon: 'users' },
  { number: '2',    label: 'Launch cities:\nLondon & Sheffield', icon: 'map-pin' },
  { number: '100%', label: 'Public-first\nsafety policy',  icon: 'shield' },
  { number: '0',    label: 'Swiping\nrequired',            icon: 'x-circle' },
]

// ─── How It Works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step: '01',
    icon: 'smartphone',
    title: 'Tap "I\'m Bored"',
    desc:  'Open Zynzi and instantly see public meetups happening around you tonight. Filter by vibe, distance, or type.',
  },
  {
    step: '02',
    icon: 'user-plus',
    title: 'Join or Host',
    desc:  'Join someone\'s casual dinner, walk, or game night - or post your own spontaneous event in under 60 seconds.',
  },
  {
    step: '03',
    icon: 'award',
    title: 'Earn Trust',
    desc:  'After every event, leave a review. Build your trust score. Unlock private hosting and exclusive Zynzi features.',
  },
]

// ─── Features ────────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    icon: 'zap',
    title: 'Spontaneous by Design',
    desc:  'Zynzi is built for the present moment. Events are live, short-notice, and nearby. No planning 3 weeks in advance. Just tap and go.',
    color: 'from-brand-navy to-brand-sky',
  },
  {
    icon: 'shield',
    title: 'Trust-First Safety',
    desc:  'Your first 3 events must happen in public places. Every host and attendee builds a trust score. Selfie verification adds another layer of confidence.',
    color: 'from-brand-sky to-brand-sky-light',
  },
  {
    icon: 'target',
    title: 'Interest-Matched Events',
    desc:  'From board games to park walks to dinner parties - filter events by what you love. You\'ll never end up somewhere you don\'t want to be.',
    color: 'from-brand-navy to-brand-sky',
  },
  {
    icon: 'trending-up',
    title: 'Reputation That Grows',
    desc:  'Your Zynzi trust score is built event by event. The more you show up and treat people well, the more you unlock — including private hosting rights.',
    color: 'from-brand-sky to-brand-sky-light',
  },
  {
    icon: 'globe',
    title: 'Built for City Diversity',
    desc:  'Whether you arrived last week or were born here, Zynzi is designed for every person in the city. No language barrier. No social barrier.',
    color: 'from-brand-navy to-brand-sky',
  },
  {
    icon: 'gift',
    title: 'Free to Use',
    desc:  'Core Zynzi features are completely free. No hidden fees to join an event or meet someone. Premium features unlock as your trust grows.',
    color: 'from-brand-sky to-brand-sky-light',
  },
]

// ─── Who It's For ─────────────────────────────────────────────────────────────
export const WHO_ITS_FOR = [
  {
    icon:   'briefcase',
    name:   'The Busy Professional',
    age:    '25-35 · Works hard, plays rarely',
    desc:   'Has a free Tuesday evening and wants to do something real without planning it a month out.',
    quote:  '"I want spontaneous, not scheduled."',
    usePhoto: false,
  },
  {
    icon:   'book-open',
    name:   'The Student Explorer',
    age:    '18-24 · New city, new chapter',
    desc:   'Wants to expand their social world beyond their course. Loves trying new things, meeting eclectic people.',
    quote:  '"I want to meet real people, not match."',
    usePhoto: true,
  },
  {
    icon:   'plane',
    name:   'The New Arrival',
    age:    'Any age · Just landed in the city',
    desc:   'Moved to a new city and needs to build a social life from scratch. Zynzi is their shortcut to belonging.',
    quote:  '"Help me find my people."',
    usePhoto: false,
  },
  {
    icon:   'users',
    name:   'The Social Butterfly',
    age:    '20-40 · Always out, always curious',
    desc:   'The person who always knows what\'s happening. Zynzi gives them a whole new layer of the city to explore.',
    quote:  '"Tell me what\'s happening right now."',
    usePhoto: false,
  },
]

// ─── Trust / Safety ───────────────────────────────────────────────────────────
export const TRUST_CARDS = [
  {
    icon:  'map-pin',
    title: 'Public Places First',
    desc:  'New users must host their first 3 events in public locations only. No exceptions. Private hosting is earned through trust.',
  },
  {
    icon:  'camera',
    title: 'Selfie Verification',
    desc:  'Optional ID verification adds a trust badge to your profile, giving other users confidence when joining your events.',
  },
  {
    icon:  'star',
    title: 'Review System',
    desc:  'Every event generates mutual reviews. Bad actors lose trust scores fast. Good community members get rewarded.',
  },
  {
    icon:  'shield-check',
    title: 'Admin Moderation',
    desc:  'Our moderation dashboard monitors flagged events and users in real time. Report a problem and our team responds fast.',
  },
]

// ─── Venue Host Types ─────────────────────────────────────────────────────────
export const HOST_TYPES = [
  { icon: 'coffee',          name: 'Cafés & Coffee Shops' },
  { icon: 'laptop',          name: 'Coworking Spaces' },
  { icon: 'graduation-cap',  name: 'Universities & Student Unions' },
  { icon: 'wine',            name: 'Bars & Lounges' },
]

export const HOST_PERKS = [
  'List your venue as a trusted Zynzi event space',
  'Access a business dashboard to manage hosted events',
  'Get featured in the app for users nearby',
  'Build community around your brand organically',
  'No upfront cost during the London & Sheffield launch phase',
]

// ─── Footer Links ─────────────────────────────────────────────────────────────
export const FOOTER_LINKS = [
  { label: 'Privacy Policy',  href: '/privacy-policy' },
  { label: 'Terms of Use',    href: '/terms-of-use' },
  { label: 'Safety Policy',   href: '/#safety' },
  { label: 'Apply to Host',   href: '/#for-venues' },
  { label: 'Contact',         href: '/contact' },
]

// ─── Contact ──────────────────────────────────────────────────────────────────
export const WAITLIST_EMAIL = 'hello@zynzi.app'
export const COPYRIGHT_YEAR = '2026'
export const COMPANY_NAME   = 'MacTech Global Ventures Ltd'
