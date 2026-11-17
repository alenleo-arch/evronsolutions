import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Globe,
  Megaphone,
  Target,
  Share2,
  Search,
  CheckCircle2,
  Sparkles,
  Star,
  ArrowRight,
  Mail,
  Hammer,
  Compass,
  PenTool,
  Rocket,
  GraduationCap,
  LifeBuoy,
  Monitor,
  MousePointerClick,
  TrendingUp,
  Heart,
  MessageCircle,
} from "lucide-react";

const LOGO_IMAGE = "/images/evron-logo.png";
const ALEN_IMAGE = "/images/team-alen.png";
const ABHINAV_IMAGE = "/images/team-abhinav.png";
const SARVESH_IMAGE = "/images/team-sarvesh.png";
const PEOPLES32_IMAGE = "/images/peoples32-dental.jpg";
const MAC_DENTALS_IMAGE = "/images/mac-dentals.png";
const SWARNA_DENTAL_IMAGE = "/images/swarna-dental.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evron Solutions — Websites That Win, Ads That Convert" },
      {
        name: "description",
        content:
          "Evron Solutions designs high-performing websites and runs data-driven ad campaigns. 10+ projects delivered with a 100% satisfaction rate.",
      },
      { property: "og:title", content: "Evron Solutions — Websites That Win, Ads That Convert" },
      {
        property: "og:description",
        content:
          "Website design, ad generation, Meta & Google ads, social media handling and SEO — delivered by the Evron Solutions team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Evron Solutions — Websites That Win, Ads That Convert" },
      {
        name: "twitter:description",
        content:
          "Website design, ad generation, Meta & Google ads, social media handling and SEO — delivered by the Evron Solutions team.",
      },
    ],
  }),
  component: LandingPage,
});

const PHONE_DISPLAY = "+91 81221 39683";
const PHONE_HREF = "tel:+918122139683";
const EMAIL = "evronsolutions2026@gmail.com";
const WHATSAPP_HREF = "https://wa.me/918122139683";

const NAV_LINKS = [
  { label: "System", href: "#system" },
  { label: "Services", href: "#services" },
  { label: "Ads & Growth", href: "#marketing" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const PROJECT_COUNT = 6;

const SERVICES = [
  {
    icon: Globe,
    title: "Website Building",
    desc: "Fast, modern, mobile-first websites built to turn visitors into customers.",
  },
  {
    icon: Megaphone,
    title: "Ads Generation",
    desc: "Scroll-stopping ad creatives and campaigns designed around your offer.",
  },
  {
    icon: Target,
    title: "Meta Ads",
    desc: "Facebook & Instagram campaigns targeted to the people who actually buy.",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Search & display campaigns that capture demand the moment it happens.",
  },
  {
    icon: Share2,
    title: "Social Media Handling",
    desc: "Consistent posting, branding and engagement across every platform.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Technical and content SEO that lifts you up the rankings and keeps you there.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    desc: "Helpful WhatsApp flows for quick replies, follow-ups and customer support.",
  },
];

const MARKETING_TOOLS = [
  "Meta Ads Manager", "Google Ads", "Canva", "CapCut", "ChatGPT", "Google Analytics 4",
  "Google Search Console", "Google Business Profile", "Meta Business Suite", "HubSpot CRM",
  "WhatsApp Business", "Google Tag Manager", "n8n", "Microsoft Clarity", "Google Looker Studio",
  "SEMrush", "Ahrefs", "Google Keyword Planner", "Mailchimp", "Buffer", "WordPress", "Elementor",
  "Figma", "Zapier", "Make.com",
];

const DEVELOPMENT_SKILLS = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js",
  "Python", "Django", "FastAPI", "PHP", "SQL", "Java",
];

const PROCESS = [
  {
    icon: Compass,
    step: "01",
    title: "Discover",
    desc: "We learn your business, market and goals before a single pixel is drawn.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    desc: "Wireframes and polished designs you review and approve before build.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Build",
    desc: "Clean, fast, responsive development with regular progress updates.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deploy",
    desc: "Launch on reliable infrastructure with domain, hosting and analytics set up.",
  },
  {
    icon: GraduationCap,
    step: "05",
    title: "Train",
    desc: "We hand over the keys — a walkthrough so your team can run it confidently.",
  },
  {
    icon: LifeBuoy,
    step: "06",
    title: "Support",
    desc: "Ongoing maintenance, improvements and campaign optimisation after launch.",
  },
];

const TEAM = [
  {
    photo: ALEN_IMAGE,
    name: "Alen Mon Saji",
    role: "Client Relations & Frontend",
    bio: "A student founder who works closely with clients and helps turn ideas into polished, dependable digital experiences.",
    skills: ["Client Handling", "Frontend Development", "Python", "Java", "Security", "Hosting", "Ads Management", "Linux"],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/alenmonsaji?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { label: "Instagram", href: "https://www.instagram.com/alen__wizy?vrfl=eXZudmszb25teDdm" },
      { label: "Call 82705 96480", href: "tel:+918270596480" },
    ],
  },
  {
    photo: ABHINAV_IMAGE,
    name: "Abhinav R",
    role: "Creative & Growth",
    bio: "Brings together creative editing, social content and campaign work to help businesses communicate clearly and grow online.",
    skills: ["Python", "Adobe Editing", "Canva", "C++", "Social Media Algorithms", "Networking", "Content Growth", "Post Boosting", "Meta Ads", "Google Analytics", "AI Automation"],
    links: [
      { label: "Instagram", href: "https://www.instagram.com/_abhinavv_r?mdxt=ajg2aDZrNWJyZ29w" },
    ],
    clientNote: "Draft review: “Abhinav explained the campaign clearly and made it easy to feel confident about the next steps.”",
  },
  {
    photo: SARVESH_IMAGE,
    name: "Sarvesh NS",
    role: "Backend & Cloud",
    bio: "A student developer focused on reliable backend systems, cloud hosting and keeping business data organized.",
    skills: ["Marketing", "Cloud Hosting", "Backend Development", "Java", "Database Management"],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/sarvesh-ns-4aa406410?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { label: "Instagram", href: "https://www.instagram.com/sarvesh_3408?psln=bHVhcTQyd2k1cWU0" },
    ],
    clientNote: "Draft review: “Sarvesh kept the technical work organized and communicated progress in a clear, helpful way.”",
  },
];

const PROJECTS = [
  { name: "People’s 32 Dental", url: "https://www.peoples32dental.in", logo: PEOPLES32_IMAGE, tags: ["Clinic Website", "Digital Presence"], result: "A dedicated clinic website that makes services and contact details easy to find." },
  { name: "Mac Dentals", url: "https://www.macdentals.in", logo: MAC_DENTALS_IMAGE, tags: ["Clinic Website", "Digital Presence"], result: "A clean online home for the clinic, built to help patients explore and get in touch." },
  { name: "Swarna Dental — The Golden Crown", url: "https://www.swarnadental-thegoldencrown.in", logo: SWARNA_DENTAL_IMAGE, tags: ["Clinic Website", "Digital Presence"], result: "A polished dental website that presents the clinic and its services online." },
];

const TESTIMONIALS = [
  {
    name: "Dental website project",
    role: "Sample website feedback",
    text: "The website gives our clinic a clear, professional online presence and makes it easier for patients to find the details they need.",
  },
  {
    name: "Clinic website project",
    role: "Sample website feedback",
    text: "The design feels welcoming on mobile, and the clinic information is much easier to explore.",
  },
  {
    name: "Website & patient outreach",
    role: "Sample website feedback",
    text: "Evron listened to what our practice needed and helped us present our services clearly online.",
  },
  {
    name: "Clinic marketing project",
    role: "Sample ads campaign feedback",
    text: "The campaign gave our clinic another way to reach local patients and made our online presence feel more consistent.",
  },
];

function CallButton({ label = "Call Now", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[0_10px_30px_oklch(0.55_0.26_288/0.45)] transition-transform hover:scale-[1.04] ${className}`}
    >
      <Phone className="h-4 w-4" />
      {label}
    </a>
  );
}

function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="mb-3 inline-block rounded-full glass px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orchid">
        {kicker}
      </span>
      <h2 className="font-display text-4xl leading-tight md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={LOGO_IMAGE}
            alt="Evron Solutions logo"
            className="h-10 w-10 rounded-full bg-surface-logo object-cover p-0.5"
          />
          <span className="font-display text-lg tracking-wide">
            Evron <span className="text-orchid">Solutions</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${EMAIL}`}
            aria-label={`Email ${EMAIL}`}
            title="Email Evron Solutions"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            aria-label="Message Evron Solutions on WhatsApp"
            title="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-32 md:pt-40">
      <div className="hero-orbit pointer-events-none absolute right-[-25rem] top-20 opacity-30 md:right-[-18rem] md:top-16 md:opacity-70" aria-hidden="true">
        <span className="hero-orbit__ring hero-orbit__ring--outer" />
        <span className="hero-orbit__ring hero-orbit__ring--middle" />
        <span className="hero-orbit__ring hero-orbit__ring--inner" />
        <span className="hero-orbit__core" />
      </div>
      <div className="glow-ring pointer-events-none absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-8 w-fit rounded-3xl glass p-6">
          <img
            src={LOGO_IMAGE}
            alt="Evron Solutions logo"
            className="mx-auto h-36 w-36 rounded-2xl bg-surface-logo object-contain p-2"
          />
        </div>

        <h1 className="font-display text-5xl leading-[1.1] md:text-7xl">
          Websites That Win.
          <br />
          <span className="text-gradient">Ads That Convert.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Evron Solutions is a digital studio crafting high-performing websites and data-driven
          ad campaigns — from design and build to ads, SEO and social media, one team runs it all.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CallButton label={`Call ${PHONE_DISPLAY}`} />
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold transition-transform hover:scale-[1.04]"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: `${PROJECT_COUNT}`, label: "Projects Delivered" },
            { value: "100%", label: "Satisfaction Rate" },
            { value: "7", label: "Digital Services" },
          ].map((stat) => (
            <div key={stat.label} className="glass glass-hover rounded-3xl p-6">
              <div className="font-display text-4xl text-gradient">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl" aria-label="Featured clinic websites">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Clinic websites we've built
          </p>
          <div className="clinic-marquee glass rounded-2xl py-3">
            <div className="clinic-marquee__track">
              {[...PROJECTS, ...PROJECTS].map((project, index) => (
                <a
                  key={`${project.name}-${index}`}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={index >= PROJECTS.length ? -1 : undefined}
                  aria-hidden={index >= PROJECTS.length}
                  className="clinic-marquee__item"
                >
                  <img src={project.logo} alt={index >= PROJECTS.length ? "" : `${project.name} logo`} />
                  <span>{project.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-5 flex items-center justify-center gap-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            <Sparkles className="h-4 w-4 text-orchid" /> Meet the team behind it
          </p>
          <div className="flex flex-wrap items-end justify-center gap-5">
            {TEAM.map((member) => (
              <a
                key={member.name}
                href="#team"
                className="group w-32 md:w-40"
                aria-label={`Meet ${member.name}`}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full rounded-3xl glass object-cover object-top transition-transform group-hover:-translate-y-1.5"
                />
                <p className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  {member.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoWebsite() {
  return (
    <section id="system" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="One System"
          title="One System, Every Operation"
          subtitle="Website, ads, content and analytics working from a single playbook — here's a demo website built exactly the way we'd build yours."
        />

        <div className="grid items-center gap-10 lg:grid-cols-5">
          {/* Demo website mock */}
          <div className="glass-strong rounded-3xl p-3 lg:col-span-3">
            <div className="flex items-center gap-2 px-3 pb-3">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-orchid/70" />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
              <span className="ml-3 truncate rounded-full bg-secondary px-4 py-1 text-xs text-muted-foreground">
                https://demo.evronsolutions.com
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl bg-background/60">
              {/* Mock hero */}
              <div className="relative overflow-hidden p-8 text-center md:p-12">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-orchid/25" />
                <span className="relative rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-orchid">
                  Demo Client Store
                </span>
                <h3 className="relative mt-4 font-display text-3xl md:text-4xl">
                  Everything Your Business Needs, In One Place
                </h3>
                <p className="relative mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                  A clean hero, one clear promise and one clear action — the pattern every Evron
                  website follows.
                </p>
                <span className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
                  Get Started <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
              {/* Mock feature cards */}
              <div className="grid grid-cols-1 gap-3 px-6 pb-6 sm:grid-cols-3">
                {[
                  { icon: TrendingUp, title: "Fast Load", text: "Pages that open instantly." },
                  { icon: Monitor, title: "Fully Responsive", text: "Perfect on every screen." },
                  { icon: CheckCircle2, title: "Built To Rank", text: "SEO baked in from day one." },
                ].map((f) => (
                  <div key={f.title} className="glass rounded-2xl p-4 text-center">
                    <f.icon className="mx-auto mb-2 h-5 w-5 text-orchid" />
                    <p className="text-sm font-semibold">{f.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System points */}
          <div className="space-y-4 lg:col-span-2">
            {[
              {
                icon: Globe,
                title: "Your website",
                text: "Designed and built end-to-end, fast and mobile-first.",
              },
              {
                icon: Megaphone,
                title: "Your campaigns",
                text: "Meta and Google ads wired to the same goals as the site.",
              },
              {
                icon: Share2,
                title: "Your socials",
                text: "Consistent branding and content across platforms.",
              },
              {
                icon: Search,
                title: "Your rankings",
                text: "SEO tracked and improved month after month.",
              },
            ].map((item) => (
              <div key={item.title} className="glass glass-hover flex items-start gap-4 rounded-2xl p-5">
                <span className="rounded-xl bg-primary/20 p-2.5">
                  <item.icon className="h-5 w-5 text-orchid" />
                </span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
            <CallButton label="Talk To Us About Yours" className="w-full justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="What We Do"
          title="Services Built Around Growth"
          subtitle="Pick one service or hand us the whole digital presence — every service plugs into the same system."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="glass glass-hover rounded-3xl p-7">
              <span className="mb-4 inline-block rounded-2xl bg-primary/20 p-3">
                <service.icon className="h-6 w-6 text-orchid" />
              </span>
              <h3 className="font-display text-xl">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker="Our Stack"
          title="Our Digital Toolkit"
          subtitle="Marketing platforms and development skills used across our work."
        />
        <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-orchid">Marketing &amp; Automation</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {MARKETING_TOOLS.map((tool) => (
            <span
              key={tool}
              className="glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium tracking-wide"
            >
              {tool}
            </span>
          ))}
        </div>
        <h3 className="mb-4 mt-10 text-center text-sm font-semibold uppercase tracking-[0.16em] text-accent">Web Development</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {DEVELOPMENT_SKILLS.map((skill) => (
            <span key={skill} className="rounded-full glass-strong px-5 py-2.5 text-sm font-medium tracking-wide">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="How We Deliver"
          title="A Methodology With No Guesswork"
          subtitle="Six clear stages — you always know what's happening and what comes next."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {PROCESS.map((phase) => (
            <div key={phase.title} title={phase.desc} className="glass glass-hover inline-flex items-center gap-2 rounded-full px-4 py-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{phase.step}</span>
              <phase.icon className="h-4 w-4 text-orchid" />
              <span className="text-sm font-semibold">{phase.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Meet Our Team"
          title="The People Behind Evron"
          subtitle="We are three students building practical digital solutions for growing businesses."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TEAM.map((member) => (
            <div key={member.name} className="glass glass-hover overflow-hidden rounded-3xl">
              <div className="relative">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-80 w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{member.name}</h3>
                <p className="text-sm font-medium text-orchid">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {member.clientNote ? (
                  <blockquote className="mt-5 border-l-2 border-accent pl-3 text-sm italic text-muted-foreground">
                    {member.clientNote}
                    <span className="mt-2 block text-xs not-italic text-accent">Client feedback</span>
                  </blockquote>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-4">
                  {member.links.map((link) => (
                    <a key={link.label} href={link.href} target={link.href.startsWith("tel:") ? undefined : "_blank"} rel={link.href.startsWith("tel:") ? undefined : "noreferrer"} className="text-xs font-semibold text-orchid underline-offset-4 hover:underline">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Results We've Delivered"
          title="6 Projects Delivered"
          subtitle="Explore our live clinic websites and the digital work behind them."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.name} className="glass glass-hover rounded-3xl p-6">
              <a href={project.url} target="_blank" rel="noreferrer" className="mb-5 flex h-36 items-center justify-center overflow-hidden rounded-xl bg-secondary p-4" aria-label={`Open ${project.name} website`}>
                <img src={project.logo} alt={`${project.name} logo`} className="max-h-full max-w-full object-contain" />
              </a>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-orchid"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 font-display text-xl">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.result}</p>
              <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 text-orchid" />
                Live website · opens in a new tab
              </p>
              <a href={project.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]">
                Visit live website <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div id="marketing" className="mt-20">
          <SectionHeading kicker="Campaign Snapshot" title="Growth, Made Visible" subtitle="A reported result from clinic marketing work." />
          <div className="glass-strong mx-auto max-w-3xl rounded-3xl p-6 sm:p-8">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Clinic visits in one month</p>
                <p className="mt-1 font-display text-4xl text-gradient">20+</p>
              </div>
              <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">Reported project result</span>
            </div>
            <div className="campaign-chart" role="img" aria-label="Reported result: more than 20 clinic visits in one month">
              <span className="campaign-chart__bar" />
            </div>
            <div className="mt-3 flex justify-between text-xs text-muted-foreground"><span>Clinic outreach</span><span>One month</span></div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <SectionHeading
            kicker="What Our Clients Say"
            title="Trusted By Every Client We Serve"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((review, i) => (
              <div
                key={review.name}
                className={`glass glass-hover rounded-3xl p-6 ${i === TESTIMONIALS.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-orchid text-orchid" />
                  ))}
                </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">“{review.text}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="rounded-full bg-primary/20 p-2">
                    <Heart className="h-4 w-4 text-orchid" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="glass-strong glow-ring relative overflow-hidden rounded-[2.5rem] p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-orchid/15" />
          <div className="relative">
            <img
              src={LOGO_IMAGE}
              alt="Evron Solutions logo"
              className="mx-auto h-20 w-20 rounded-2xl bg-surface-logo object-contain p-1.5"
            />
            <h2 className="mt-6 font-display text-4xl md:text-5xl">Let's Build Something Great</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Ready for a website that works or ads that actually convert? One call is all it
              takes to start.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <CallButton label={`Call ${PHONE_DISPLAY}`} />
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-[1.04]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold transition-transform hover:scale-[1.04]"
              >
                <Mail className="h-4 w-4 text-orchid" />
                {EMAIL}
              </a>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Evron Solutions · Website Designers &amp; Ads Generators
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-10">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-3xl px-8 py-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img
            src={LOGO_IMAGE}
            alt="Evron Solutions logo"
            className="h-9 w-9 rounded-full bg-surface-logo object-cover p-0.5"
          />
          <span className="font-display">
            Evron <span className="text-orchid">Solutions</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Evron Solutions. All rights reserved.
        </p>
        <div className="flex gap-5 text-xs text-muted-foreground">
          {NAV_LINKS.slice(0, 4).map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <DemoWebsite />
        <Services />
        <Tools />
        <Process />
        <Team />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
