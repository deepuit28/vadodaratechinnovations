import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  MousePointer2,
  Network,
  Sparkles,
  Target,
  X,
  XIcon,
} from 'lucide-react';

type IconType = typeof Code2;

const internshipFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdfBuFQ4Ao98mcTnzPc2WI_gYmwvHI3qyZRU2rkdELgzGJqMw/viewform';
const linkedinUrl = 'https://www.linkedin.com/company/vadodara-tech-innovations';
const contactEmail = 'vadodaratechinnovation@gmail.com';

const services: {
  icon: IconType;
  title: string;
  text: string;
  number: string;
  overview: string;
  approach: string;
  capabilities: string[];
  process: string;
}[] = [
  {
    icon: Code2,
    title: 'Software Development',
    text: 'Purpose-built platforms and systems designed around how your business actually works.',
    number: '01',
    overview:
      'Software development at Vadodara Tech Innovations is about building systems that fit the reality of your operations — not forcing your operations to fit a system. We design software that is maintainable, well-architected, and genuinely useful from day one. Whether you need an internal tool that saves hours every week, a customer-facing platform that handles real traffic, or a complex integration layer that connects systems that were never meant to talk to each other, we approach each project with the same engineering discipline.',
    approach:
      'We begin by understanding the problem before writing a single line of code. That means sitting down with the people who will actually use the software, mapping the workflows that matter, and identifying where technology can remove friction rather than add it. From there, we design an architecture that is deliberately simple — not because simple is easy, but because simple systems are the ones that survive contact with real users and changing requirements. We write code that other engineers can read, maintain, and extend without needing a map.',
    capabilities: [
      'Custom business applications and internal tools',
      'API design and system integration',
      'Workflow automation and process digitisation',
      'Legacy system modernisation',
      'Database design and data architecture',
      'Performance optimisation and refactoring',
    ],
    process:
      'Every software engagement follows a clear path: discovery, architecture design, iterative development with regular check-ins, testing against real-world scenarios, deployment, and ongoing improvement. We do not disappear after launch. The software we build is designed to evolve, and we stay close enough to help it grow in the right direction.',
  },
  {
    icon: Sparkles,
    title: 'AI Solutions',
    text: 'Practical intelligence, automation, and AI agents that turn ambitious ideas into useful advantage.',
    number: '02',
    overview:
      'AI is not a buzzword for us — it is a tool we apply where it creates genuine value. We build AI-powered applications, intelligent automation systems, and AI agents that can reason about tasks, interact with users, and make decisions within well-defined boundaries. Our focus is on AI that is explainable, controllable, and grounded in real business context, not black-box experiments that look impressive in a demo but fail in production.',
    approach:
      'We start with the question: what would actually improve if a system could understand, decide, or automate this task? If the answer is meaningful, we design an AI solution around it — choosing the right models, building the right guardrails, and integrating intelligence into workflows where it reduces effort without removing human judgement where it matters. We are honest about what AI can and cannot do. Not every problem needs AI, and part of our job is telling you when a simpler solution is the better one.',
    capabilities: [
      'AI agents and autonomous task systems',
      'Intelligent document processing and extraction',
      'Conversational AI and assistant design',
      'Predictive analytics and decision support',
      'Workflow automation with AI reasoning',
      'Model integration, fine-tuning, and evaluation',
    ],
    process:
      'Our AI work follows a rigorous cycle: problem framing, data assessment, model selection, prototyping, evaluation against real tasks, deployment with monitoring, and continuous improvement based on actual usage. We test AI systems against edge cases and failure modes before they reach your users, because the cost of an AI system that hallucinates in production is far higher than the cost of building it right the first time.',
  },
  {
    icon: Globe2,
    title: 'Web Solutions',
    text: 'High-performing digital experiences that make your brand clearer, faster, and more valuable.',
    number: '03',
    overview:
      'Your website is often the first interaction someone has with your company. We build web experiences that make that interaction count — fast, accessible, and designed to communicate clearly. From marketing sites that convert to web applications that handle complex interactions, our web solutions are built on modern engineering principles: semantic structure, progressive enhancement, and performance budgets that keep every page lean.',
    approach:
      'We treat the web as a engineering platform, not just a design canvas. That means thinking about load performance, search visibility, accessibility, and maintainability from the first commit. We build with clean, standards-based code that works across browsers and devices, and we design content structures that scale as your business grows. Every site we ship is measured against real performance metrics, not just how it looks on a fast connection.',
    capabilities: [
      'Corporate and marketing websites',
      'Progressive web applications',
      'E-commerce and transactional platforms',
      'Content management and publishing systems',
      'SEO-optimised, accessible front-end engineering',
      'Performance auditing and optimisation',
    ],
    process:
      'Web projects move through content strategy, design system creation, front-end engineering, cross-device testing, performance optimisation, and launch. We then monitor and iterate based on real user behaviour, because a website is never truly finished — it is a living surface that should improve with every iteration.',
  },
  {
    icon: Layers3,
    title: 'Application Development',
    text: 'Thoughtful applications with the usability, reliability, and scale people expect today.',
    number: '04',
    overview:
      'Applications are where engineering meets human experience. We build applications that people actually want to use — not just tolerate. That means investing in the details that matter: responsive interfaces that feel instant, offline resilience where it is needed, data synchronisation that does not lose information, and architecture that can scale from ten users to ten thousand without a rewrite.',
    approach:
      'We design applications around the tasks people are trying to accomplish, not the data models behind them. This sounds obvious, but it changes everything about how an application is built. We prototype interactions early, test them with real users where possible, and refine until the experience feels natural. On the engineering side, we build with modularity and testability in mind, so that features can be added, changed, or removed without destabilising the whole system.',
    capabilities: [
      'Cross-platform application development',
      'Real-time data and collaboration features',
      'Offline-first and sync architectures',
      'Authentication and user management',
      'Push notifications and background services',
      'Application security and data protection',
    ],
    process:
      'Application development follows our full engineering cycle: discovery, interaction design, architecture, iterative development, quality assurance, staged deployment, and post-launch improvement. We pay special attention to the moments that define an application — the first run, the empty state, the error recovery — because these are where trust is built or lost.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    text: 'Cloud-ready foundations and integrations that help your technology grow without friction.',
    number: '05',
    overview:
      'Cloud is not just about where your code runs — it is about how your systems scale, how they recover from failure, and how they integrate with the services around them. We help teams build cloud-ready foundations that are cost-aware, secure by design, and flexible enough to evolve. Whether you are moving from on-premise infrastructure, scaling a growing platform, or integrating third-party services, we bring practical cloud experience to the table.',
    approach:
      'We design cloud architecture around your actual scale and growth trajectory, not around a theoretical best practice that may not apply. That means right-sizing resources, automating deployment pipelines, building in observability from the start, and choosing managed services where they reduce operational burden without locking you into unnecessary complexity. We are pragmatic about cloud — it is a tool, not a religion.',
    capabilities: [
      'Cloud architecture and migration strategy',
      'CI/CD pipeline design and automation',
      'Infrastructure as code and configuration management',
      'Monitoring, logging, and observability',
      'API gateway and microservice design',
      'Cost optimisation and resource planning',
    ],
    process:
      'Cloud engagements start with a current-state assessment, move through architecture design and implementation, and continue with operational handover and improvement. We document everything we build, because cloud infrastructure that only one person understands is a liability, not an asset.',
  },
  {
    icon: MousePointer2,
    title: 'UI/UX Design',
    text: 'Human-centred interfaces that make complex products feel simple and intuitive.',
    number: '06',
    overview:
      'Design is not decoration — it is the discipline of making complex things feel simple. We practice human-centred design that starts with the person using the product and works backward to the interface. Good UI/UX reduces support tickets, increases engagement, and makes products feel trustworthy. We invest in the details: spacing, hierarchy, motion, and feedback, because these are the things that separate a product people use from one people abandon.',
    approach:
      'Our design process is grounded in research and prototyping. We map user journeys, identify friction points, and design interfaces that guide people through tasks without making them think about the interface itself. We build design systems — reusable components, consistent patterns, and clear guidelines — so that products stay coherent as they grow. And we test our designs with real people, because the only opinion that matters is the one from someone actually trying to use what we built.',
    capabilities: [
      'User research and journey mapping',
      'Interaction and interface design',
      'Design system creation and maintenance',
      'Prototyping and usability testing',
      'Accessibility and inclusive design',
      'Motion design and micro-interaction',
    ],
    process:
      'Design work flows through research, wireframing, visual design, prototyping, usability testing, and implementation support. We work closely with engineering to ensure designs are built as intended, and we iterate based on real usage data after launch. Design is never done — it evolves with the product and the people who use it.',
  },
];

const roles = [
  'Web Development',
  'Software Development',
  'Application Development',
  'Cloud Solutions',
  'AI Solutions',
  'UI/UX Design',
];

const expertiseTabs: {
  label: string;
  title: string;
  paragraphs: string[];
  points: string[];
}[] = [
  {
    label: 'Software Engineering',
    title: 'Systems built to last, not just to launch.',
    paragraphs: [
      'Software engineering is the backbone of everything we build. We approach it with a commitment to maintainability, testability, and clarity — because the code we write today will be read, changed, and extended by someone tomorrow. We do not chase every new framework or pattern. We choose tools that fit the problem and the team that will maintain the solution long after the initial build.',
      'Our engineering culture values honest estimation, incremental delivery, and code review. We write tests because they give us confidence to change things. We document because knowledge that lives in one person\'s head is a risk. And we refactor continuously, because technical debt left unchecked eventually makes every new feature twice as hard as it should be.',
    ],
    points: [
      'Clean architecture and separation of concerns',
      'Automated testing and continuous integration',
      'Code review and pair programming practices',
      'Technical documentation and knowledge sharing',
    ],
  },
  {
    label: 'Frontend Development',
    title: 'Interfaces that feel instant, accessible, and human.',
    paragraphs: [
      'Frontend development is where engineering meets the person using the product. We build frontends that are fast — not just on a fast connection, but on a mid-range device on a mobile network. We care about accessibility because the web should work for everyone, regardless of ability or device. And we care about the details: the timing of a transition, the clarity of an error message, the position of a button.',
      'We work with modern frontend architectures — component-based, state-managed, and progressively enhanced. We build design systems that keep interfaces consistent across products and teams. And we measure everything: load times, interaction latency, layout stability, because what gets measured gets improved.',
    ],
    points: [
      'Component-based architecture and design systems',
      'Performance budgets and Core Web Vitals',
      'Accessibility (WCAG) compliance',
      'Cross-browser and cross-device testing',
    ],
  },
  {
    label: 'Backend Development',
    title: 'The systems behind the interface, built to scale.',
    paragraphs: [
      'Backend development is about building the systems that power the product — the APIs, the data layer, the business logic, the integrations. We design backends that are secure, observable, and scalable. We think about data integrity, because losing a user\'s data is one of the few mistakes that is truly unforgivable.',
      'We build APIs that are well-documented and consistent, because an API that other developers cannot understand is a bottleneck. We design data models that reflect the real domain, not just the current UI. And we build in observability from the start — logging, metrics, tracing — because you cannot fix what you cannot see.',
    ],
    points: [
      'API design and documentation',
      'Data modelling and database engineering',
      'Authentication, authorisation, and security',
      'Observability and operational reliability',
    ],
  },
  {
    label: 'AI / Machine Learning',
    title: 'Intelligence applied where it creates real value.',
    paragraphs: [
      'AI and machine learning at VTI is about building systems that can perceive, reason, and act within defined boundaries. We work with language models, classification systems, and autonomous agents — but we always start from the business question: what would actually improve if a system could understand or automate this?',
      'We are honest about the limitations of AI. Models can be wrong. They can be biased. They can produce confident nonsense. Our job is to build systems that account for these failure modes — with guardrails, human oversight, and evaluation pipelines that catch problems before they reach users. We do not ship AI that we cannot explain or control.',
    ],
    points: [
      'Language model integration and prompt engineering',
      'Classification, extraction, and prediction systems',
      'AI agent design and orchestration',
      'Model evaluation, monitoring, and safety',
    ],
  },
  {
    label: 'UI/UX Design',
    title: 'Design that makes complex products feel simple.',
    paragraphs: [
      'UI/UX design is the bridge between what a product can do and what a person can accomplish with it. We practice design as a discipline of empathy — understanding the person, the context, and the goal, and then crafting an interface that gets out of the way. Good design is invisible. You notice it only when it is absent.',
      'We build design systems, not just screens. A design system is a shared language between design and engineering — reusable components, consistent spacing, clear interaction patterns. It keeps products coherent as they grow and teams scale. And it reduces the time from idea to implementation, because the building blocks already exist.',
    ],
    points: [
      'User research and journey mapping',
      'Design system architecture and maintenance',
      'Prototyping and usability testing',
      'Accessibility and inclusive design',
    ],
  },
  {
    label: 'Cloud & DevOps',
    title: 'Infrastructure that scales without surprise.',
    paragraphs: [
      'Cloud and DevOps is about making deployment, scaling, and recovery routine instead of dramatic. We build deployment pipelines that are automated and repeatable, infrastructure that is defined in code, and monitoring that tells you about problems before your users do. The goal is simple: shipping software should be boring, in the best possible way.',
      'We design cloud architecture around your actual needs — not around what looks impressive on a whitepaper. We right-size resources, automate scaling, and build in cost controls. And we document every piece of infrastructure, because an environment that only one person understands is a single point of failure.',
    ],
    points: [
      'Infrastructure as code and automation',
      'CI/CD pipeline design',
      'Monitoring, alerting, and observability',
      'Cost optimisation and capacity planning',
    ],
  },
  {
    label: 'Product Engineering',
    title: 'From idea to product, engineered with intent.',
    paragraphs: [
      'Product engineering is the practice of turning an idea into something real — something people can use, pay for, and depend on. It combines engineering, design, and product thinking into a single discipline. We help teams move from concept to MVP to scaled product, making deliberate decisions about what to build, what to defer, and what to cut.',
      'We believe the best products are built incrementally, with real user feedback at every stage. We do not believe in building everything upfront and hoping the market agrees. We build the smallest thing that proves the value, learn from it, and iterate. This is not about cutting corners — it is about building the right thing first.',
    ],
    points: [
      'Product strategy and roadmapping',
      'MVP design and rapid prototyping',
      'Feature prioritisation and trade-off analysis',
      'User feedback integration and iteration',
    ],
  },
  {
    label: 'Business & Operations',
    title: 'Technology that serves the business, not the other way around.',
    paragraphs: [
      'Technology decisions are business decisions. We help teams align their technology investments with their business goals — whether that means choosing what to build versus buy, deciding when to migrate versus modernise, or understanding the operational impact of a new system before committing to it.',
      'We bring an operational perspective to every engagement. That means thinking about total cost of ownership, not just development cost. It means considering the people who will maintain the system. And it means being honest about timelines, risks, and trade-offs, because a plan built on unrealistic assumptions helps no one.',
    ],
    points: [
      'Technology strategy and investment planning',
      'Build vs. buy analysis and vendor evaluation',
      'Operational readiness and team enablement',
      'Risk assessment and mitigation planning',
    ],
  },
];

const industries: {
  name: string;
  number: string;
  description: string;
  applications: string[];
}[] = [
  {
    name: 'Technology',
    number: '01',
    description:
      'Technology companies face a particular challenge: the bar for quality is set by the best products in the world, not by the average. We help technology teams build products that meet that bar — from developer tools and platforms to SaaS products and internal systems. We understand the pace, the trade-offs, and the standards because we live them every day.',
    applications: ['SaaS platforms', 'Developer tools', 'API products', 'Internal platforms'],
  },
  {
    name: 'Education',
    number: '02',
    description:
      'Education is being reshaped by technology — not just in delivery, but in access, personalisation, and outcomes. We build digital learning platforms, assessment tools, and administrative systems that serve students, educators, and institutions. The focus is always on making learning more effective, not just more digital.',
    applications: ['Learning platforms', 'Assessment systems', 'Student management', 'Content publishing'],
  },
  {
    name: 'Healthcare',
    number: '03',
    description:
      'Healthcare technology must balance innovation with responsibility. We build systems that handle sensitive data with appropriate care, support clinical workflows without getting in the way, and improve patient experience without compromising trust. We understand that in healthcare, reliability is not a feature — it is a requirement.',
    applications: ['Patient platforms', 'Clinical workflow tools', 'Health data systems', 'Telehealth solutions'],
  },
  {
    name: 'Retail',
    number: '04',
    description:
      'Retail is where digital and physical increasingly meet. We build e-commerce platforms, inventory systems, and customer experiences that work across channels. The focus is on making commerce seamless — for the customer buying, the merchant selling, and the team operating behind the scenes.',
    applications: ['E-commerce platforms', 'Inventory management', 'Customer experience', 'Point-of-sale integration'],
  },
  {
    name: 'Finance',
    number: '05',
    description:
      'Financial technology demands precision, security, and trust. We build systems that handle transactions, manage financial data, and provide insights — with the rigour that financial operations require. We understand the regulatory landscape and the cost of getting things wrong in a domain where errors are measured in more than just money.',
    applications: ['Transaction systems', 'Financial dashboards', 'Compliance tools', 'Payment integration'],
  },
  {
    name: 'Startups',
    number: '06',
    description:
      'Startups need technology that moves fast without creating a mess that slows them down later. We help early-stage teams build their first product, validate their idea, and scale without a rewrite. We understand the constraints — limited budget, uncertain roadmap, small team — and we design solutions that fit those realities.',
    applications: ['MVP development', 'Rapid prototyping', 'Product validation', 'Scalable architecture'],
  },
  {
    name: 'Professional Services',
    number: '07',
    description:
      'Professional services firms — consultancies, agencies, legal practices, and others — increasingly need technology that supports their expertise rather than replacing it. We build client portals, project management tools, and knowledge systems that help service teams deliver more value with less administrative overhead.',
    applications: ['Client portals', 'Project management', 'Knowledge systems', 'Workflow automation'],
  },
  {
    name: 'Manufacturing',
    number: '08',
    description:
      'Manufacturing is undergoing a digital transformation, with systems that connect the factory floor to the supply chain to the customer. We build production tracking systems, supply chain tools, and operational dashboards that give manufacturers real-time visibility into processes that were previously opaque.',
    applications: ['Production tracking', 'Supply chain systems', 'Quality control', 'Operational dashboards'],
  },
];

const footerLinks: {
  group: string;
  links: { label: string; href: string; description: string }[];
}[] = [
  {
    group: 'Platform',
    links: [
      { label: 'IP Products', href: '#products', description: 'Proprietary software and digital products built in-house, designed to create lasting value through intellectual property.' },
      { label: 'SaaS Solutions', href: '#products', description: 'Cloud-hosted software delivered as a service — scalable, subscription-based, and continuously improved.' },
      { label: 'AI Agents', href: '#products', description: 'Autonomous AI systems that can reason about tasks, interact with users, and make decisions within defined boundaries.' },
      { label: 'Industries', href: '#industries', description: 'Sector-specific technology solutions tailored to the unique challenges of each industry we serve.' },
    ],
  },
  {
    group: 'Company',
    links: [
      { label: 'About us', href: '#about', description: 'Learn about our philosophy, our approach, and the people behind Vadodara Tech Innovations.' },
      { label: 'Careers', href: '#careers', description: 'Explore professional employment opportunities and build what is next with us.' },
      { label: 'Contact', href: '#contact', description: 'Reach out about a project, a product idea, an investment, or anything else on your mind.' },
      { label: 'Investors', href: '#contact', description: 'Information for current and prospective investors interested in our long-term technology vision.' },
    ],
  },
  {
    group: 'Resources',
    links: [
      { label: 'Blog & Insights', href: '#blog', description: 'Articles and perspectives on AI, software engineering, web development, cloud, and digital transformation.' },
      { label: 'Support', href: '#contact', description: 'Get help with products, technical questions, or business enquiries. We respond within 24 hours.' },
      { label: 'Privacy policy', href: '#contact', description: 'How we collect, use, protect, and retain information across our digital properties.' },
      { label: 'Partnerships', href: '#contact', description: 'Explore technology, product, strategic, integration, and licensing partnerships with us.' },
      { label: 'Internship T&C', href: '#terms', description: 'Terms and conditions for internship opportunities at Vadodara Tech Innovations.' },
    ],
  },
];

const careerCategories: {
  title: string;
  description: string;
  areas: string[];
}[] = [
  {
    title: 'Software Engineering',
    description:
      'Engineering roles at VTI are for people who care about the craft of building software — not just shipping code, but building systems that are maintainable, well-tested, and genuinely useful. Our engineers work across the stack, participate in design decisions, and have real influence on product direction.',
    areas: ['Backend Engineering', 'Frontend Engineering', 'Full-stack Engineering', 'Systems Engineering'],
  },
  {
    title: 'Web Development',
    description:
      'Our web team builds digital experiences that are fast, accessible, and beautifully crafted. We work on everything from marketing sites to complex web applications, always with an eye on performance, user experience, and clean engineering.',
    areas: ['Web Application Development', 'Frontend Engineering', 'Performance Engineering'],
  },
  {
    title: 'AI',
    description:
      'AI roles at VTI are for people who want to build intelligence that works in the real world — not just in a research paper. We work on AI agents, automation systems, and intelligent applications, always with a focus on practical value, safety, and honest evaluation.',
    areas: ['AI Engineering', 'ML Engineering', 'AI Agent Development', 'Data Engineering'],
  },
  {
    title: 'Cloud',
    description:
      'Our cloud and infrastructure team builds the foundations that everything else runs on. We design deployment pipelines, manage infrastructure, and ensure that systems are observable, scalable, and cost-efficient.',
    areas: ['DevOps Engineering', 'Cloud Architecture', 'Site Reliability Engineering'],
  },
  {
    title: 'UI/UX',
    description:
      'Design roles at VTI are for people who believe that design is a discipline of problem-solving, not decoration. Our designers work on research, interaction design, design systems, and accessibility — always in close collaboration with engineering.',
    areas: ['Product Design', 'Interaction Design', 'Design Systems', 'User Research'],
  },
  {
    title: 'Product',
    description:
      'Product roles bridge the gap between what users need and what we build. Our product people define roadmaps, prioritise features, conduct user research, and make the trade-off decisions that determine what a product becomes.',
    areas: ['Product Management', 'Product Strategy', 'User Research'],
  },
  {
    title: 'Business & Operations',
    description:
      'Our business and operations team keeps the company running — from client relationships and project management to strategy, finance, and growth. These roles are for people who want to build a technology company, not just work at one.',
    areas: ['Project Management', 'Business Operations', 'Client Relations', 'Strategy'],
  },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand-mark ${light ? 'brand-mark--light' : ''}`} aria-label="Vadodara Tech Innovations">
      <span className="brand-symbol">V<i /></span>
      <span className="brand-name"><strong>વડોદરા</strong><small>TECH INNOVATION</small></span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  const [activeFooterGroup, setActiveFooterGroup] = useState<number | null>(0);
  const [tcOpen, setTcOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setPopupOpen(true), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPopupOpen(false);
        setActiveService(null);
        setTcOpen(false);
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const activeServiceData = activeService !== null ? services[activeService] : null;

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#home" className="logo-link"><BrandMark /></a>
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`}>
          {['Home', 'About', 'Services', 'Products', 'Industries', 'Internships', 'Careers', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className={item === 'Internships' ? 'nav-secondary' : ''}>{item}</a>
          ))}
        </nav>
        <a className="button button--small header-cta" href="#contact">Let&apos;s talk <ArrowRight size={15} /></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span className="eyebrow-dot" /> Software · AI · Digital Products</div>
            <h1>Building intelligent<br /><em>software</em> for a<br />digital world.</h1>
            <p className="hero-lead">We combine engineering, design, and AI to create useful technology experiences for businesses ready to move forward.</p>
            <div className="hero-actions"><a href="#services" className="button">Explore our solutions <ArrowRight size={17} /></a><a href="#contact" className="text-link">Let&apos;s talk <ArrowRight size={16} /></a></div>
            <div className="hero-proof"><div className="proof-line" /><span>Technology built around possibility.</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract geometric technology visual">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="art-core"><div className="core-ring"><Cpu size={44} strokeWidth={1.2} /></div></div>
            <div className="art-tag tag-one"><span>AI</span><small>purposeful intelligence</small></div>
            <div className="art-tag tag-two"><span>01</span><small>discover → deploy</small></div>
            <div className="art-caption"><span>VADODARA / 2026</span><span>INNOVATION STUDIO</span></div>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><div /></div>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-label">01 / The way we think</div>
          <div className="intro-layout">
            <div><h2>Technology built<br /><em>around possibility.</em></h2></div>
            <div className="intro-body">
              <p className="large-copy">At Vadodara Tech Innovations, we believe the best technology feels both ambitious and obvious.</p>
              <p>We bring together engineering, design, AI, and digital thinking to create software that solves real problems and opens new possibilities. From the first conversation to the next iteration, we stay curious, considered, and close to the work. We do not build technology for its own sake. We build it because it should make something better — a process faster, a decision clearer, an experience more human, a business more capable.</p>
              <p>Our approach is rooted in the belief that good software is not just about code. It is about understanding the problem deeply, designing the solution thoughtfully, and engineering it with care. It is about the people who will use it, the teams who will maintain it, and the business it is meant to serve. Technology built around possibility means we start with what could be better, and work backward to the system that makes it better.</p>
              <a href="#contact" className="text-link">Get to know us <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="process"><div className="process-line" />{['Discover', 'Design', 'Build', 'Test', 'Deploy', 'Improve'].map((step, index) => <div className="process-step" key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}</div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading">
            <div><div className="section-label">02 / What we build</div><h2>Ideas into<br /><em>intelligent outcomes.</em></h2></div>
            <p>We work across the full digital spectrum — making technology more useful, more human, and ready for what comes next. Each capability is backed by real engineering discipline and a commitment to building things that last.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text, number }, index) => (
              <article className="service-card" key={title}>
                <div className="card-top"><span className="card-number">{number}</span><Icon size={24} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <button className="card-link" onClick={() => setActiveService(index)}>Learn more <ArrowRight size={15} /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="expertise-section" id="products">
          <div className="section-wrap expertise-inner">
            <div className="section-label">03 / Our expertise</div>
            <div className="expertise-layout">
              <h2>Engineering across<br /><em>modern technology.</em></h2>
              <div>
                <p className="large-copy">The right craft for the right challenge.</p>
                <p>Our capabilities are deliberately broad, so we can meet an idea where it is — and help it become what it could be. Explore each area to understand how we think, what we focus on, and where we can help.</p>
              </div>
            </div>
            <div className="expertise-tabs">
              <div className="tab-bar">
                {expertiseTabs.map((tab, i) => (
                  <button key={tab.label} className={activeTab === i ? 'tab tab--active' : 'tab'} onClick={() => setActiveTab(i)}>{tab.label}</button>
                ))}
              </div>
              <div className="tab-panel">
                <div className="tab-panel-grid">
                  <div>
                    <h3>{expertiseTabs[activeTab].title}</h3>
                    {expertiseTabs[activeTab].paragraphs.map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                  <div className="tab-points">
                    <span className="points-label">Key focus areas</span>
                    <ul>
                      {expertiseTabs[activeTab].points.map((point, i) => <li key={i}><Check size={14} />{point}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ip-section section-wrap">
          <div className="ip-card">
            <div className="ip-copy">
              <div className="section-label section-label--light">04 / Digital products</div>
              <h2>Building what<br /><em>doesn&apos;t exist yet.</em></h2>
              <p>Our product portfolio is currently evolving. We are exploring proprietary software, SaaS products, AI agents, and digital platforms that make a meaningful difference. We believe intellectual property is the long-term foundation of a technology company — not just client work, but products and platforms that create lasting value.</p>
              <p>As our product ideas mature, they will be showcased here with the same transparency and honesty that defines everything else we do. We will not launch products that are not ready, and we will not promise capabilities we have not built.</p>
              <a href="#contact" className="button button--light">Explore a possibility <ArrowRight size={17} /></a>
            </div>
            <div className="ip-visual">
              <div className="ip-circle circle-a" /><div className="ip-circle circle-b" />
              <div className="ip-panel"><span>PRODUCT / 001</span><Network size={35} /><strong>Future,<br />in progress.</strong><i /></div>
            </div>
          </div>
        </section>

        <section className="industries section-wrap" id="industries">
          <div className="section-label">05 / Where we can build</div>
          <div className="industry-heading">
            <h2>Different worlds.<br /><em>One thoughtful approach.</em></h2>
            <p>From emerging ventures to established teams, we build for people solving meaningful problems. Click any industry to explore how we think about it.</p>
          </div>
          <div className="industry-grid">
            {industries.map((industry, i) => (
              <div className="industry-item-wrap" key={industry.name}>
                <button
                  className={`industry-item ${activeIndustry === i ? 'industry-item--open' : ''}`}
                  onClick={() => setActiveIndustry(activeIndustry === i ? null : i)}
                  aria-expanded={activeIndustry === i}
                >
                  <span>{industry.number}</span>
                  <strong>{industry.name}</strong>
                  <ChevronDown size={16} className={`chevron ${activeIndustry === i ? 'chevron--open' : ''}`} />
                </button>
                {activeIndustry === i && (
                  <div className="industry-detail">
                    <p>{industry.description}</p>
                    <div className="industry-tags">
                      {industry.applications.map((app) => <span key={app}>{app}</span>)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="principles-section">
          <div className="section-wrap">
            <div className="section-label">06 / Why VTI</div>
            <div className="principles-heading">
              <h2>A better way<br /><em>to build.</em></h2>
              <p>Good work is not only what you make. It is how you make people feel while making it. These principles guide every decision we make.</p>
            </div>
            <div className="principles-grid">
              {[
                ['Engineering First', 'Maintainable, technically thoughtful solutions built to last. We write code that other engineers can read, understand, and extend without fear.'],
                ['Designed Around People', 'Technology that feels understandable, intuitive, and human. We design for the person using the product, not the system behind it.'],
                ['Built to Evolve', 'Foundations capable of growing with changing requirements. We architect for what you need now and what you will need next.'],
                ['AI With Purpose', 'Intelligence applied where it creates meaningful value. We are honest about what AI can and cannot do, and we build guardrails that matter.'],
                ['Continuous Improvement', 'Build, learn, improve, and keep moving forward. We treat every launch as the beginning, not the end.'],
              ].map(([title, text], i) => (
                <div className="principle" key={title}>
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="internship-section section-wrap" id="internships">
          <div className="internship-banner">
            <div>
              <div className="section-label">07 / A place to begin</div>
              <h2>Start your<br /><em>technology journey.</em></h2>
              <p>Explore practical opportunities across software, AI, cloud, applications, web, and UI/UX — and work through role-specific tasks that build confidence and real understanding.</p>
            </div>
            <a href={internshipFormUrl} target="_blank" rel="noopener noreferrer" className="button">Apply now <ArrowRight size={17} /></a>
          </div>
          <div className="role-strip">
            {roles.map((role, i) => (
              <a key={role} href={internshipFormUrl} target="_blank" rel="noopener noreferrer" className="role-card-link">
                <span>0{i + 1}</span>{role}<ArrowRight size={14} />
              </a>
            ))}
          </div>
        </section>

        <section className="careers-section" id="careers">
          <div className="section-wrap">
            <div className="section-label">08 / Build with us</div>
            <div className="careers-heading">
              <h2>Build what&apos;s next<br /><em>with us.</em></h2>
              <p>We are building a company where engineers, designers, and product people can do their best work. If you care about craft, collaboration, and building things that matter, we want to hear from you.</p>
            </div>
            <div className="careers-intro">
              <p>Careers at Vadodara Tech Innovations are about more than a job. They are about building a technology company from the ground up — one that takes engineering seriously, treats design as a discipline, and believes AI should be built responsibly. We are early-stage, which means every person who joins has a real shape on what we become.</p>
              <p>We are looking for people who are thoughtful, honest, and driven by the desire to build things that genuinely help others. We value curiosity over certainty, collaboration over ego, and craft over speed-at-any-cost. If that resonates, we would like to start a conversation.</p>
            </div>
            <div className="careers-grid">
              {careerCategories.map((cat) => (
                <article className="career-card" key={cat.title}>
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                  <div className="career-areas">
                    {cat.areas.map((area) => <span key={area}>{area}</span>)}
                  </div>
                </article>
              ))}
            </div>
            <div className="careers-status">
              <p>Current employment opportunities will be published here as positions become available. In the meantime, we welcome expressions of interest from talented people who want to be part of what we are building.</p>
              <div className="careers-cta">
                <a href="#contact" className="button">Express interest <ArrowRight size={17} /></a>
                <a href="#internships" className="text-link">Looking for internship opportunities? Explore internships <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="location-section section-wrap" id="location">
          <div className="location-copy">
            <div className="section-label">09 / Where we build</div>
            <h2>Rooted in<br /><em>Vadodara.</em></h2>
            <p>Based in Gujarat. Building for everywhere.</p>
            <div className="address">
              <span className="pin-icon"><Target size={18} /></span>
              <div><strong>Vadodara, Gujarat</strong><span>Gotri–Sevasi Road<br />Vadodara, Gujarat 391101, India</span></div>
            </div>
            <div className="location-coords">
              <div><span>LATITUDE</span><strong>22.3072° N</strong></div>
              <div><span>LONGITUDE</span><strong>73.1812° E</strong></div>
              <div><span>REGION</span><strong>Western India</strong></div>
            </div>
          </div>
          <div className="map-art">
            <div className="map-header">
              <span className="map-pin-label"><Target size={13} /> Vadodara, Gujarat</span>
              <span className="map-zoom-label">India / Western Region</span>
            </div>
            <div className="map-svg-wrap">
              <svg className="india-map" viewBox="0 0 400 460" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Map of India showing Vadodara location">
                <defs>
                  <linearGradient id="mapFill" x1="0" y1="0" x2="400" y2="460" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#dfeef0"/><stop offset="1" stopColor="#c8e0e3"/>
                  </linearGradient>
                  <linearGradient id="mapStroke" x1="0" y1="0" x2="400" y2="460" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a8cdd3"/><stop offset="1" stopColor="#8db8c0"/>
                  </linearGradient>
                </defs>
                <path d="M120 28 C140 18 160 14 180 22 C200 30 210 42 225 44 C240 46 255 38 270 44 C285 50 295 62 305 68 C315 74 330 72 345 82 C358 91 365 105 362 120 C359 135 350 148 355 162 C360 176 372 188 370 202 C368 216 358 228 360 242 C362 256 372 268 368 282 C364 296 352 308 348 322 C344 336 348 350 340 362 C332 374 318 380 308 392 C298 404 295 420 282 430 C269 440 252 442 238 436 C224 430 218 416 208 408 C198 400 185 396 175 386 C165 376 158 362 148 354 C138 346 125 342 115 332 C105 322 98 308 95 292 C92 276 98 260 92 246 C86 232 72 220 68 206 C64 192 72 178 68 164 C64 150 52 140 55 126 C58 112 72 102 78 90 C84 78 82 62 90 50 C98 38 108 30 120 28 Z" fill="url(#mapFill)" stroke="url(#mapStroke)" strokeWidth="1.5"/>
                <path d="M150 60 C170 55 185 62 200 58 C215 54 225 44 240 48" fill="none" stroke="#bcd6db" strokeWidth="1" strokeDasharray="4 3"/>
                <path d="M80 180 C90 195 85 210 92 225" fill="none" stroke="#bcd6db" strokeWidth="1" strokeDasharray="4 3"/>
                <path d="M300 120 C310 135 305 150 312 165" fill="none" stroke="#bcd6db" strokeWidth="1" strokeDasharray="4 3"/>
                <path d="M260 340 C270 355 265 370 275 385" fill="none" stroke="#bcd6db" strokeWidth="1" strokeDasharray="4 3"/>
                <text x="200" y="195" fill="#9ab8be" fontSize="11" fontFamily="DM Mono, monospace" textAnchor="middle" letterSpacing="2" opacity="0.7">INDIA</text>
                <text x="100" y="120" fill="#b0ccd2" fontSize="7" fontFamily="DM Mono, monospace" opacity="0.6">GUJARAT</text>
                <line x1="155" y1="218" x2="155" y2="250" stroke="#08b8d3" strokeWidth="1.5" strokeDasharray="3 2"/>
                <circle cx="155" cy="215" r="18" fill="#08b8d3" opacity="0.12">
                  <animate attributeName="r" values="14;26;14" dur="2.4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.25;0.05;0.25" dur="2.4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="155" cy="215" r="7" fill="#08b8d3"/>
                <circle cx="155" cy="215" r="4" fill="white"/>
                <rect x="168" y="200" width="82" height="30" rx="3" fill="#081c36"/>
                <text x="209" y="214" fill="white" fontSize="8" fontFamily="DM Mono, monospace" textAnchor="middle" fontWeight="600" letterSpacing="0.5">VADODARA</text>
                <text x="209" y="224" fill="#65c4d4" fontSize="6" fontFamily="DM Mono, monospace" textAnchor="middle" letterSpacing="0.5">22.3°N 73.2°E</text>
              </svg>
            </div>
            <div className="map-footer">
              <span>Gotri–Sevasi Road, Vadodara, Gujarat 391101</span>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-heading">
            <div className="section-label">10 / Begin a conversation</div>
            <h2>Have a good<br /><em>idea?</em></h2>
            <p>Whether you have a product idea, a development need, an investment inquiry, or just want to explore what is possible — we would love to hear from you. We typically respond within 24 hours for general enquiries and 48 hours for investment enquiries.</p>
          </div>
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <Check size={28} />
                <h3>Thanks for reaching out.</h3>
                <p>Your enquiry is ready to be connected with our team. We will be in touch once a real contact channel is connected.</p>
                <button className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowRight size={16} /></button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>First name *<input required name="firstName" placeholder="Your first name" /></label>
                  <label>Last name<input name="lastName" placeholder="Your last name" /></label>
                </div>
                <div className="form-row">
                  <label>Email address *<input required type="email" name="email" placeholder="you@company.com" /></label>
                  <label>Company / organisation *<input required name="company" placeholder="Your organisation" /></label>
                </div>
                <label>Inquiry type *
                  <select required defaultValue="">
                    <option value="" disabled>Select an inquiry type</option>
                    <option>Product Development Services</option>
                    <option>Software Development</option>
                    <option>AI Solutions</option>
                    <option>IP Product — Partnership / Licensing</option>
                    <option>Investment Inquiry</option>
                    <option>Hiring / Talent</option>
                    <option>General Enquiry</option>
                  </select>
                </label>
                <label>Tell us more *<textarea required name="message" rows={4} placeholder="Tell us a little about what you are building..." /></label>
                <button className="button" type="submit">Send enquiry <ArrowRight size={17} /></button>
                <small>This form prepares your enquiry locally. No message is sent until a contact channel is connected.</small>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <div className="footer-brand">
            <BrandMark light />
            <p>An AI-first software company building intelligent digital solutions and proprietary technology from Vadodara, Gujarat, India.</p>
            <div className="socials">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href={`mailto:${contactEmail}`} aria-label="Email"><Mail size={17} /></a>
              <a href="#contact" aria-label="Contact"><MessageSquare size={17} /></a>
            </div>
          </div>
          <div className="footer-accordion">
            {footerLinks.map((col, gi) => (
              <div className="footer-accordion-group" key={col.group}>
                <button
                  className={`footer-accordion-header ${activeFooterGroup === gi ? 'footer-accordion-header--open' : ''}`}
                  onClick={() => setActiveFooterGroup(activeFooterGroup === gi ? null : gi)}
                  aria-expanded={activeFooterGroup === gi}
                >
                  <span>{col.group}</span>
                  <ChevronDown size={15} className={`chevron ${activeFooterGroup === gi ? 'chevron--open' : ''}`} />
                </button>
                <div className={`footer-accordion-body ${activeFooterGroup === gi ? 'footer-accordion-body--open' : ''}`}>
                  {col.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="footer-detail-link"
                      onClick={link.href === '#terms' ? (e) => { e.preventDefault(); setTcOpen(true); } : undefined}
                    >
                      <strong>{link.label}</strong>
                      <small>{link.description}</small>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom section-wrap"><span>© 2026 Vadodara Tech Innovations. All rights reserved.</span><span>Software · AI · Digital Products</span></div>
      </footer>

      {popupOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closePopup(); }}>
          <div className="internship-modal" role="dialog" aria-modal="true" aria-labelledby="internship-title">
            <button className="modal-close" aria-label="Close" onClick={closePopup}><XIcon size={19} /></button>
            <div className="modal-kicker"><Sparkles size={15} /> Opportunity / 01</div>
            <h2 id="internship-title">Explore internship<br /><em>opportunities.</em></h2>
            <p>Looking to gain practical experience in technology and work on role-specific projects? Start your journey with us.</p>
            <div className="modal-roles">{roles.map((role) => <span key={role}><Check size={13} />{role}</span>)}</div>
            <div className="modal-actions">
              <a href={internshipFormUrl} target="_blank" rel="noopener noreferrer" className="button" onClick={closePopup}>Apply now <ArrowRight size={16} /></a>
              <button className="text-link" onClick={closePopup}>Maybe later</button>
            </div>
            <small>Application details and applicable terms are provided during the application process.</small>
          </div>
        </div>
      )}

      {tcOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setTcOpen(false); }}>
          <div className="tc-modal" role="dialog" aria-modal="true" aria-labelledby="tc-title">
            <button className="modal-close" aria-label="Close" onClick={() => setTcOpen(false)}><XIcon size={19} /></button>
            <div className="tc-modal-header">
              <div className="modal-kicker"><Check size={15} /> Legal / Internship</div>
              <h2 id="tc-title">Internship Terms<br /><em>&amp; Conditions</em></h2>
            </div>
            <div className="tc-modal-body">
              <p className="tc-intro">Please read these Internship Terms &amp; Conditions carefully before applying for an internship with Vadodara Tech Innovations (VTI). By submitting an application, you confirm that you have read, understood, and agreed to these terms.</p>
              <div className="tc-section">
                <span className="tc-section-num">01</span>
                <h3>Application &amp; Information Accuracy</h3>
                <p>Applicants must provide accurate, complete, and genuine information during the application process. False, misleading, or fraudulent information may result in rejection of the application or termination of the internship if discovered later.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">02</span>
                <h3>Internship Application &amp; Selection</h3>
                <p>Submission of an application does not guarantee selection. Applications are reviewed according to applicable eligibility and selection criteria. VTI reserves the right to shortlist, accept, reject, or discontinue an application at any stage of the process.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">03</span>
                <h3>Remote Internship</h3>
                <p>Selected participants may complete assigned tasks and projects remotely. Interns may be evaluated based on practical work, task completion, technical understanding, consistency, communication, problem-solving, and overall performance.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">04</span>
                <h3>Hybrid Internship</h3>
                <p>Participants may be considered for a Hybrid Internship based on their performance during the Remote Internship. Hybrid selection is not automatically guaranteed and may depend on project evaluation, overall performance, availability, organizational requirements, and other applicable criteria.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">05</span>
                <h3>Internship Duration &amp; Schedule</h3>
                <p>Internship duration, schedules, deadlines, working hours, project requirements, and responsibilities may vary depending on the role and organizational requirements. Specific details will be communicated to selected participants.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">06</span>
                <h3>Professional Conduct</h3>
                <p>Interns must maintain professional and respectful behavior while interacting with VTI team members, coordinators, clients, and other participants. Misconduct, harassment, abusive behavior, unauthorized representation, or other inappropriate conduct may result in termination of the internship.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">07</span>
                <h3>Confidentiality &amp; Intellectual Property</h3>
                <p>Interns must maintain confidentiality regarding VTI's internal information, source code, project materials, business information, client information, credentials, documents, and other proprietary information. Interns must not share, publish, reproduce, distribute, sell, or disclose confidential or proprietary information without authorization.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">08</span>
                <h3>Attendance, Participation &amp; Task Completion</h3>
                <p>Interns are expected to actively participate in assigned activities and complete tasks within communicated deadlines. Repeated absence, lack of communication, failure to complete assignments, or lack of participation may affect internship status and evaluation.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">09</span>
                <h3>Certificates &amp; Completion</h3>
                <p>Any internship certificate, completion certificate, recommendation, letter, or recognition is subject to successful completion of the applicable internship requirements and satisfactory performance. Application submission alone does not guarantee a certificate.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">10</span>
                <h3>Payment / Registration Fees</h3>
                <p>If an applicable internship registration, training, administrative, or other fee is communicated by VTI, applicants should review the applicable fee and official payment instructions before making any payment. Payments should only be made through officially communicated payment methods. Any applicable refund or cancellation terms will be communicated separately where applicable.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">11</span>
                <h3>No Guarantee of Employment</h3>
                <p>Participation in an internship does not guarantee employment, a job offer, paid employment, or future engagement with VTI. Any future employment opportunity will be subject to a separate selection process and applicable requirements.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">12</span>
                <h3>Communication</h3>
                <p>Applicants and interns are responsible for providing an active email address and checking official VTI communications regularly. VTI is not responsible for missed communication caused by incorrect contact details, inactive accounts, spam filtering, or failure to check email.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">13</span>
                <h3>Termination</h3>
                <p>VTI may terminate an internship for misconduct, violation of confidentiality or intellectual-property requirements, repeated failure to complete assigned work, providing false information, or violation of applicable internship policies.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">14</span>
                <h3>Third-Party Tools</h3>
                <p>Interns may be required to use third-party software, APIs, cloud services, communication platforms, or development tools and must comply with the applicable terms and policies of those services.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">15</span>
                <h3>Changes to Internship Terms</h3>
                <p>VTI may reasonably modify internship schedules, project assignments, evaluation procedures, policies, or requirements when necessary. Participants will be informed of applicable changes through official communication channels.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">16</span>
                <h3>Applicant Data</h3>
                <p>Information submitted through the application and registration process may be used for application review, selection, internship administration, communication, documentation, performance evaluation, and other legitimate internship-related purposes.</p>
              </div>
              <div className="tc-section">
                <span className="tc-section-num">17</span>
                <h3>Acceptance of Terms</h3>
                <p>By applying for an internship, the applicant confirms that they have read, understood, and agreed to the applicable Internship Terms &amp; Conditions.</p>
              </div>
              <div className="tc-contact">
                <h3>Contact Vadodara Tech Innovations</h3>
                <div className="tc-contact-grid">
                  <div className="tc-contact-item"><span className="tc-contact-label">Location</span><p>Gotri–Sevasi Road, Vadodara, Gujarat, India</p></div>
                  <div className="tc-contact-item"><span className="tc-contact-label">Email</span><a href={`mailto:${contactEmail}`} className="tc-contact-email">{contactEmail}</a></div>
                  <div className="tc-contact-item"><span className="tc-contact-label">LinkedIn</span><a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="button button--small tc-linkedin-btn"><Linkedin size={15} /> Visit us on LinkedIn <ArrowRight size={14} /></a></div>
                </div>
              </div>
            </div>
            <div className="service-modal-footer">
              <a href={internshipFormUrl} target="_blank" rel="noopener noreferrer" className="button" onClick={() => setTcOpen(false)}>Apply now <ArrowRight size={16} /></a>
              <button className="text-link" onClick={() => setTcOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {activeServiceData && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveService(null); }}>
          <div className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-title">
            <button className="modal-close" aria-label="Close" onClick={() => setActiveService(null)}><XIcon size={19} /></button>
            <div className="service-modal-header">
              <div className="modal-kicker"><activeServiceData.icon size={15} /> Service / {activeServiceData.number}</div>
              <h2 id="service-title">{activeServiceData.title}</h2>
            </div>
            <div className="service-modal-body">
              <div className="service-modal-section">
                <span className="service-section-label">Overview</span>
                <p>{activeServiceData.overview}</p>
              </div>
              <div className="service-modal-section">
                <span className="service-section-label">Our approach</span>
                <p>{activeServiceData.approach}</p>
              </div>
              <div className="service-modal-section">
                <span className="service-section-label">Capabilities</span>
                <ul className="capability-list">
                  {activeServiceData.capabilities.map((cap) => <li key={cap}><Check size={14} />{cap}</li>)}
                </ul>
              </div>
              <div className="service-modal-section">
                <span className="service-section-label">How we work</span>
                <p>{activeServiceData.process}</p>
              </div>
            </div>
            <div className="service-modal-footer">
              <a href="#contact" className="button" onClick={() => setActiveService(null)}>Start a conversation <ArrowRight size={16} /></a>
              <button className="text-link" onClick={() => setActiveService(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
