import {
  ArrowRight,
  Check,
  CheckCircle2,
  Code2,
  Cpu,
  GitFork,
  Layers,
  Link2,
  Mail,
  Rocket,
  Sparkles,
  TvMinimalPlay,
  Users,
  Zap,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";

const navigation = [
  { label: "Workshops", href: "#workshops" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const features = [
  {
    icon: Cpu,
    title: "Hands-on, not slides",
    description:
      "Every session is project-based. You leave with working code you built, not decks of screenshots.",
  },
  {
    icon: Code2,
    title: "Real production tools",
    description:
      "Work with the AI stack your team will actually use — LLM APIs, evals, agents, and observability.",
  },
  {
    icon: Users,
    title: "Expert-led sessions",
    description:
      "Small cohorts guided by practitioners who have shipped AI systems in production",
  },
  {
    icon: Layers,
    title: "Team-ready tracks",
    description:
      "From beginners to builders. Private sessions sized to your roadmap and your team's skill.",
  },
  {
    icon: Zap,
    title: "Ship in a day",
    description:
      "One day, one working prototype. A focused outcome you can demo to stakeholders the same week.",
  },
  {
    icon: Rocket,
    title: "Ongoing support",
    description:
      "Workshop materials, recordings, and a Slack channel stay with your team after the session ends.",
  },
];

const steps = [
  {
    title: "Tell us your goal",
    description:
      "A quick call to understand your team's context, current stack, and what success looks like.",
  },
  {
    title: "We design the session",
    description:
      "A custom agenda with a hands-on project matched to your skill level and tools.",
  },
  {
    title: "You build with guidance",
    description:
      "Work alongside an expert to build a working prototype in real time.",
  },
  {
    title: "Keep what you build",
    description:
      "Materials, recordings, and ongoing support so the momentum keeps going.",
  },
];

const testimonials = [
  {
    quote:
      "The workshop took our team from AI-curious to shipping our first internal copilot. The hands-on format made all the difference.",
    name: "Priya Nair",
    role: "VP of Engineering, Fintech",
  },
  {
    quote:
      "Best training investment we've made. The facilitator spent the whole day pairing with our engineers instead of lecturing at them.",
    name: "Marcus Chen",
    role: "CTO, SaaS scale-up",
  },
  {
    quote:
      "We walked in with questions and out with a deployed prototype. I'd recommend AI Workshop to any team starting on AI.",
    name: "Lena Oko",
    role: "Head of Data, E-commerce",
  },
];

const weAvoid = [
  "Template-driven and generic",
  "Slide-heavy with no building",
  "Theoretical, no working output",
];

const obstacles = [
  "Quick wins that don't scale",
  "Pilot fatigue and spiralling costs",
  "AI projects that stall after hype",
];

const plans = [
  {
    name: "Team Kickoff",
    tagline: "One-day, hands-on introduction.",
    price: "1499",
    unit: "per session",
    cta: "Book a session",
    features: [
      "Up to 12 participants",
      "Custom agenda for your stack",
      "One working prototype",
      "Materials and recordings",
      "30 days of Slack support",
    ],
  },
  {
    name: "Build Track",
    tagline: "Multi-day program that ships a product.",
    price: "3200",
    unit: "per session",
    cta: "Get started",
    featured: true,
    features: [
      "Up to 20 participants",
      "Multi-day capstone project",
      "Production readiness review",
      "1:1 coaching sessions",
      "90 days of Slack support",
    ],
  },
  {
    name: "Embedded Partner",
    tagline: "Continuous coaching for your team.",
    price: "Custom",
    taglinePrice: "Tailored scope",
    cta: "Talk to us",
    features: [
      "Ongoing expert pairing",
      "Quarterly roadmap reviews",
      "Eval and observability setup",
      "Architecture guidance",
      "Dedicated Slack channel",
    ],
  },
];

const faqs = [
  {
    question: "Who are the workshops for?",
    answer:
      "Anyone who wants to build with AI — from software engineers and data scientists to product managers. Sessions are scoped per cohort.",
  },
  {
    question: "Do we need existing AI experience?",
    answer:
      "No. Every track starts with a skills check and we adapt. Beginners and experienced builders are covered.",
  },
  {
    question: "Is it on-site or virtual?",
    answer:
      "Both. We run private sessions at your office, at a venue of your choice, or fully remote with hands-on pairing.",
  },
  {
    question: "What do we keep after the session?",
    answer:
      "All workshop materials, recordings, starter repos, and the prototype you build — plus a set period of chat support.",
  },
  {
    question: "How are bookings handled?",
    answer:
      "Book a session through the contact form or email us directly. We'll reply within one business day to schedule an intro call.",
  },
];

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}

function AnchorLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-contrast">
              <Sparkles aria-hidden="true" className="h-4 w-4" />
            </span>
            <span className="text-lg font-bold tracking-tight">AI Workshop</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <AnchorLink
            href="#contact"
            className="border border-card-border text-foreground hover:bg-card"
          >
            Book a session
          </AnchorLink>
        </nav>
      </header>

      <main id="main" className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary-soft to-transparent"
          />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-sm font-medium text-muted">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Expert-led AI training for modern teams
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Stop watching AI talks.{" "}
                <span className="text-primary">Start building with AI.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                AI Workshop runs hands-on workshops where your team builds real
                AI-powered workflows, gets unstuck by experts, and leaves with
                something that actually ships.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <AnchorLink
                  href="#workshops"
                  className="bg-primary text-primary-contrast hover:opacity-90"
                >
                  Book a hands-on workshop
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </AnchorLink>
                <span className="text-sm text-muted">
                  No slides. Working prototypes in one day.
                </span>
              </div>
            </div>

            <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["500+", "builders trained"],
                ["98%", "attendees who'd recommend us"],
                ["1 day", "to your first working prototype"],
              ].map(([stat, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-card-border bg-card p-6 text-center"
                >
                  <dt className="text-3xl font-bold tracking-tight">
                    {stat}
                  </dt>
                  <dd className="mt-1 text-sm text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="workshops"
          aria-labelledby="workshops-heading"
          className="scroll-mt-20 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="workshops-heading"
              eyebrow="Offerings"
              title="Workshops that go beyond the basics"
              description="Curated, hands-on sessions built around your team's goals and your real stack."
            />
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-card-border bg-card p-7 transition-shadow hover:shadow-lg"
                >
                  <feature.icon aria-hidden="true" className="h-7 w-7 text-primary" />
                  <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          aria-labelledby="how-it-works-heading"
          className="scroll-mt-20 border-y border-card-border bg-card py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="how-it-works-heading"
              eyebrow="How it works"
              title="From first call to shipped prototype"
              description="A simple, repeatable process that keeps your team building — not watching."
            />
            <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step.title} className="relative flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-contrast">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-card-border bg-background p-6 sm:p-8">
              <p className="text-center text-lg font-medium text-balance">
                It beats the alternative: a long spiral of AI talk trackers,
                pilot fatigue, and LLM bill shock.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ul className="space-y-2 text-sm text-muted">
                  {weAvoid.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm text-muted">
                  {obstacles.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-0.5 text-rose-500">
                        ×
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          aria-labelledby="testimonials-heading"
          className="scroll-mt-20 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="testimonials-heading"
              eyebrow="Testimonials"
              title="Teams that built, then shipped"
            />
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col justify-between rounded-2xl border border-card-border bg-card p-7"
                >
                  <blockquote>
                    <p className="text-base leading-7 text-foreground">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary"
                    >
                      {t.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className="scroll-mt-20 border-y border-card-border bg-card py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="pricing-heading"
              eyebrow="Pricing"
              title="Simple plans that scale with your team"
              description="Transparent pricing. No per-seat surprises, no long-term lock-in."
            />
            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-7 ${
                    plan.featured
                      ? "border-primary bg-background shadow-lg"
                      : "border-card-border bg-background"
                  }`}
                >
                  {plan.featured ? (
                    <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  ) : null}
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted">{plan.tagline}</p>
                  <p className="mt-5 flex items-baseline gap-1">
                    {plan.price !== "Custom" ? (
                      <span className="text-4xl font-bold tracking-tight">
                        ${plan.price}
                      </span>
                    ) : (
                      <span className="text-4xl font-bold tracking-tight">
                        {plan.price}
                      </span>
                    )}
                    <span className="text-sm text-muted">{plan.unit}</span>
                  </p>
                  {plan.featured ? (
                    <p className="mt-1 text-xs font-medium text-primary">
                      {plan.taglinePrice}
                    </p>
                  ) : null}
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <AnchorLink
                    href="#contact"
                    className={`mt-8 w-full ${
                      plan.featured
                        ? "bg-primary text-primary-contrast hover:opacity-90"
                        : "border border-card-border text-foreground hover:bg-card"
                    }`}
                  >
                    {plan.cta}
                  </AnchorLink>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-muted">
              All plans include a live scope call before we design anything, and
              you keep every artifact we create together.
            </p>
          </div>
        </section>

        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="scroll-mt-20 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="faq-heading"
              eyebrow="FAQ"
              title="Frequently asked questions"
            />
            <div className="mt-12 mx-auto max-w-3xl divide-y divide-card-border rounded-2xl border border-card-border bg-card">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group px-6 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="text-muted transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-20 border-t border-card-border bg-card py-20 sm:py-28"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="contact-heading"
              eyebrow="Contact"
              title="Let's build something together"
              description="Tell us about your team and what you want to ship. We'll reply within one business day."
            />
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <a href="#" className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-contrast">
                  <Sparkles aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="text-lg font-bold tracking-tight">
                  AI Workshop
                </span>
              </a>
              <p className="mt-3 text-sm leading-6 text-muted">
                Hands-on AI training for teams that want to build, not just
                talk.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Explore</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Company</h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#how-it-works"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold">Follow us</h2>
              <ul className="mt-4 flex items-center gap-4">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="AI Workshop on LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border text-muted transition-colors hover:bg-card hover:text-foreground"
                  >
                    <Link2 aria-hidden="true" className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="AI Workshop on GitHub"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border text-muted transition-colors hover:bg-card hover:text-foreground"
                  >
                    <GitFork aria-hidden="true" className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="AI Workshop on YouTube"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border text-muted transition-colors hover:bg-card hover:text-foreground"
                  >
                    <TvMinimalPlay aria-hidden="true" className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-card-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
            <p>&copy; {new Date().getFullYear()} AI Workshop. All rights reserved.</p>
            <p>
              <a
                href="mailto:hello@aiworkshop.example"
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                <Mail aria-hidden="true" className="h-3.5 w-3.5" />
                hello@aiworkshop.example
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}