import type { ReactNode } from "react";

export type Post = {
  slug: string;
  date: string;
  title: string;
  tag: string;
  read: string;
  excerpt: string;
  description: string;
  img: string;
  body: ReactNode;
};

export const POSTS: Post[] = [
  {
    slug: "what-to-outsource",
    date: "2026-07-10",
    title: "What should your business outsource first?",
    tag: "Strategy",
    read: "8 min read",
    excerpt:
      "A practical framework for identifying work that should leave your internal team first.",
    description:
      "The best first tasks are repetitive, teachable, measurable, and important—but not the highest-value use of your internal team.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          Outsourcing works best when it removes friction from your business
          without removing strategic control. The first decision is not
          &ldquo;Which person should we hire?&rdquo; It is &ldquo;Which work
          should no longer depend on our core team?&rdquo;
        </p>
        <h2>Start with work that repeats</h2>
        <p>
          Repeated tasks are easier to document, assign, review, and improve.
          Examples include inbox triage, calendar coordination, order updates,
          CRM maintenance, basic reporting, customer ticket routing, and routine
          content publishing.
        </p>
        <blockquote>Outsource the process before you outsource the judgment.</blockquote>
        <h2>Use the four-part test</h2>
        <p>
          A strong outsourcing candidate is teachable, measurable, recurring, and
          transferable. Teachable means the steps can be documented. Measurable
          means quality can be checked. Recurring means the task consumes time
          consistently. Transferable means the work does not require confidential
          strategic judgment every time.
        </p>
        <div className="callout">
          <strong>Quick exercise:</strong> Track your team&rsquo;s work for one
          week. Mark every task that repeats, causes interruptions, or waits
          because only one person knows how to do it.
        </div>
        <h2>Keep high-leverage decisions internal</h2>
        <p>
          Brand direction, pricing strategy, senior hiring, key customer
          relationships, and major financial decisions should usually remain with
          internal leaders. An outsourced team can prepare data, coordinate work,
          and execute approved plans without owning final strategic decisions.
        </p>
        <h2>Choose one workflow, not twenty scattered tasks</h2>
        <p>
          A focused first workflow produces better onboarding and clearer
          accountability. Start with customer support coverage, executive
          administration, CRM cleanup, product listing management, or another
          connected group of tasks. Once that workflow is stable, add adjacent
          responsibilities.
        </p>
        <h2>Define success before work begins</h2>
        <p>
          Document turnaround times, quality standards, escalation rules,
          communication channels, and who approves exceptions. The clearer the
          operating agreement, the faster the outsourced professional can become a
          reliable extension of your team.
        </p>
      </>
    ),
  },
  {
    slug: "outsourcing-vs-hiring",
    date: "2026-06-22",
    title: "Outsourcing vs. hiring: how to choose",
    tag: "Operations",
    read: "9 min read",
    excerpt:
      "Compare cost, speed, control, flexibility, and long-term needs before choosing.",
    description:
      "Outsourcing and hiring solve different problems. The right choice depends on how stable, strategic, and full-time the work really is.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          Hiring and outsourcing are not competitors—they solve different
          problems. Hiring builds long-term internal capability. Outsourcing adds
          flexible capacity quickly. The question is which one fits the work in
          front of you right now.
        </p>
        <h2>Compare on five dimensions</h2>
        <p>
          Look at cost, speed, control, flexibility, and long-term need. A
          full-time hire is slower to add and harder to remove, but gives you deep
          ownership. Outsourcing starts faster, flexes up and down, and keeps
          fixed costs lower—ideal when the workload is variable or still being
          defined.
        </p>
        <blockquote>Hire for what defines you. Outsource what supports you.</blockquote>
        <h2>When hiring makes sense</h2>
        <p>
          Choose an internal hire when the role is central to your product,
          requires constant strategic judgment, or needs someone deeply embedded in
          company context every day. Core engineering, senior leadership, and key
          account ownership usually belong in-house.
        </p>
        <h2>When outsourcing makes sense</h2>
        <p>
          Choose outsourcing when the work is repeatable, seasonal, or growing
          faster than you can hire. Support overflow, back-office operations, data
          work, and content production are common examples that scale well with an
          external team.
        </p>
        <div className="callout">
          <strong>Rule of thumb:</strong> If you can write the task down as a
          process, you can usually outsource it. If it changes with every decision
          you make, keep it close.
        </div>
        <h2>You can do both</h2>
        <p>
          Many teams use a hybrid model: a small internal core supported by an
          outsourced team that handles execution and overflow. This keeps
          ownership internal while giving you the flexibility to move quickly when
          demand shifts.
        </p>
      </>
    ),
  },
  {
    slug: "customer-support",
    date: "2026-06-04",
    title: "A better customer support outsourcing playbook",
    tag: "Customer support",
    read: "7 min read",
    excerpt:
      "How to protect your customer experience while increasing support capacity.",
    description:
      "Outsourced support can raise quality, not lower it—if you invest in documentation, tone, and clear escalation from day one.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          The fear with outsourced support is simple: that customers will feel the
          difference. Done well, they feel the opposite—faster responses,
          consistent tone, and coverage across more hours. The difference is in the
          setup, not the location.
        </p>
        <h2>Document your voice first</h2>
        <p>
          Before adding capacity, capture how you already talk to customers. Sample
          replies, tone guidelines, do-and-don&rsquo;t phrases, and common
          scenarios give an outsourced team the pattern to match. Consistency comes
          from documentation, not luck.
        </p>
        <blockquote>Great support is a system, not a personality.</blockquote>
        <h2>Define escalation clearly</h2>
        <p>
          Decide what the team can resolve directly and what must be escalated—
          refunds over a threshold, security issues, VIP accounts, or anything
          legal. Clear boundaries let the team move fast on the easy 80% and route
          the sensitive 20% correctly.
        </p>
        <h2>Measure the right things</h2>
        <p>
          Track first response time, resolution time, CSAT, and reopen rate.
          Review a sample of tickets weekly at first. The goal is not just speed—
          it is resolved customers who do not have to write in twice.
        </p>
        <div className="callout">
          <strong>Start small:</strong> Begin with one channel or one shift.
          Stabilise quality there, then expand coverage. Scaling a working process
          is far easier than fixing a broken one at volume.
        </div>
        <h2>Keep the feedback loop tight</h2>
        <p>
          Support is where you hear the truth about your product. Make sure
          recurring issues, feature requests, and confusion points flow back to
          your team—an outsourced desk should sharpen your product insight, not
          hide it.
        </p>
      </>
    ),
  },
  {
    slug: "remote-onboarding",
    date: "2026-05-17",
    title: "How to onboard a remote outsourced team",
    tag: "Team management",
    read: "10 min read",
    excerpt:
      "A clear onboarding sequence for tools, processes, standards, and communication.",
    description:
      "A structured first two weeks—access, context, shadowing, and feedback—turns an outsourced team into a reliable extension of yours.",
    img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          Onboarding is where outsourcing succeeds or stalls. A clear first two
          weeks turns a capable professional into a reliable extension of your
          team. A vague start creates rework and second-guessing on both sides.
        </p>
        <h2>Week one: access and context</h2>
        <p>
          Provide tool access, accounts, and a single source of truth for
          processes. Just as important, share context: who your customers are, what
          &ldquo;good&rdquo; looks like, and the outcomes the role is responsible
          for. Skills transfer quickly; context takes intention.
        </p>
        <blockquote>People do their best work when they understand the why, not just the what.</blockquote>
        <h2>Shadow before ownership</h2>
        <p>
          Let the new team member observe real work before owning it. Recorded
          walkthroughs, annotated examples, and a few live sessions prevent a
          dozen small misunderstandings. Then hand over one workflow at a time.
        </p>
        <h2>Set the communication rhythm</h2>
        <p>
          Agree on where updates happen, how questions get asked, and how often you
          sync. A short daily or weekly check-in in the early phase catches drift
          before it becomes a habit. Async-friendly documentation keeps things
          moving across time zones.
        </p>
        <div className="callout">
          <strong>Onboarding checklist:</strong> access granted, processes
          documented, first workflow assigned, quality standard defined,
          escalation path clear, and a check-in scheduled.
        </div>
        <h2>Review early and often</h2>
        <p>
          In the first weeks, give feedback quickly and specifically. Early
          correction feels like coaching; late correction feels like criticism.
          The teams that onboard well are the ones that treat the first month as a
          shared project, not a test.
        </p>
      </>
    ),
  },
  {
    slug: "data-security",
    date: "2026-04-29",
    title: "Data security questions to ask an outsourcing partner",
    tag: "Security",
    read: "8 min read",
    excerpt:
      "A practical checklist for access, confidentiality, devices, and incident handling.",
    description:
      "Before sharing systems and data, confirm how access, devices, confidentiality, and incidents are actually handled—not just promised.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          Outsourcing means sharing access to systems and data, so security
          deserves real questions—not a reassuring sentence on a website. A good
          partner will welcome the scrutiny and have clear answers ready.
        </p>
        <h2>Access and permissions</h2>
        <p>
          Ask how access is granted, reviewed, and revoked. Look for role-based
          permissions, the principle of least privilege, and a clear offboarding
          process when a team member changes or leaves. Access should be the
          minimum needed to do the work.
        </p>
        <blockquote>Security is not a feature you buy once—it is a habit you verify.</blockquote>
        <h2>Confidentiality and devices</h2>
        <p>
          Confirm confidentiality agreements, data-handling rules, and device
          standards. Is work done on managed, secured machines? Are strong
          passwords and multi-factor authentication required? How is sensitive data
          stored and transmitted?
        </p>
        <div className="callout">
          <strong>Ask directly:</strong> &ldquo;What happens in the first hour if
          data is exposed?&rdquo; A clear, practiced answer tells you more than any
          certificate on a page.
        </div>
        <h2>Incident handling</h2>
        <p>
          Understand how incidents are detected, escalated, and communicated. You
          want a named process, a notification commitment, and a track record of
          transparency—not silence and hope.
        </p>
        <h2>Compliance where it applies</h2>
        <p>
          If you operate under GDPR, HIPAA, PCI, or similar frameworks, confirm the
          partner understands and can support your obligations. Security should map
          to your requirements, not a generic checklist.
        </p>
      </>
    ),
  },
  {
    slug: "scale-operations",
    date: "2026-04-11",
    title: "How outsourcing helps operations scale",
    tag: "Growth",
    read: "6 min read",
    excerpt:
      "Build repeatable support capacity without adding permanent overhead too early.",
    description:
      "Outsourcing lets operations scale in steps—adding capacity when demand rises without locking in fixed cost before you are ready.",
    img: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          Growth creates an operational trap: demand rises before you can justify
          permanent hires, but falling behind damages the experience you worked to
          build. Outsourcing gives operations a way to scale in steps instead of
          leaps.
        </p>
        <h2>Add capacity in proportion to demand</h2>
        <p>
          Instead of a binary &ldquo;hire or don&rsquo;t,&rdquo; you can add hours
          and roles as the workload grows. This keeps service levels steady during
          spikes and seasons without locking in fixed cost you may not need next
          quarter.
        </p>
        <blockquote>Scale your capacity, not your overhead.</blockquote>
        <h2>Turn tasks into repeatable systems</h2>
        <p>
          Preparing work to be outsourced forces you to document it—and documented
          work is scalable work. The process of handing off a workflow often
          improves it, because it can no longer live in one person&rsquo;s head.
        </p>
        <h2>Protect your core team&rsquo;s focus</h2>
        <p>
          When routine execution moves to an outsourced team, your internal people
          spend more time on strategy, relationships, and the decisions that
          actually move the business. That focus compounds as you grow.
        </p>
        <div className="callout">
          <strong>Watch for:</strong> the moment your best people spend more time
          on repeatable tasks than on decisions only they can make. That gap is
          usually your first outsourcing opportunity.
        </div>
        <h2>Build for the next stage, not just today</h2>
        <p>
          The goal is not simply to survive this month&rsquo;s workload. It is to
          build a flexible operating model that can absorb the next stage of growth
          without a fire drill every time demand rises.
        </p>
      </>
    ),
  },
  {
    slug: "virtual-assistant-tasks",
    date: "2026-03-24",
    title: "What to delegate to a virtual assistant first",
    tag: "Virtual Assistance",
    read: "6 min read",
    excerpt:
      "The tasks that free up the most time when they leave your desk, and how to hand them over cleanly.",
    description:
      "A practical list of the administrative, scheduling, and inbox tasks worth delegating to an outsourced virtual assistant first.",
    img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          A virtual assistant pays for itself the moment they take back the hours
          you lose to small, repeatable tasks. The goal is not to hand over
          everything at once&mdash;it is to move the work that interrupts your day
          but does not need your judgment.
        </p>
        <h2>Start with your inbox and calendar</h2>
        <p>
          Email triage, meeting scheduling, reminders, and follow-ups are the
          highest-return tasks to delegate first. They repeat daily, they are easy
          to document, and they quietly consume focus time that belongs on higher
          value work.
        </p>
        <blockquote>If a task interrupts you but doesn&rsquo;t need you, delegate it.</blockquote>
        <h2>Document the &ldquo;how&rdquo; once</h2>
        <p>
          Record a short screen walkthrough for each recurring task&mdash;how you
          label emails, which meetings get priority, how you like replies worded.
          A single clear video removes weeks of back-and-forth and lets your
          assistant match your standards from day one.
        </p>
        <div className="callout">
          <strong>Quick win:</strong> Pick the three tasks you repeat every
          morning. Those are almost always the right first handover.
        </div>
        <h2>Set a rhythm, not a to-do dump</h2>
        <p>
          Agree on a daily or weekly check-in, a shared task board, and clear
          priorities. A virtual assistant works best as a steady extension of your
          team, not an inbox you empty when you are overwhelmed.
        </p>
        <h2>Expand once the basics are reliable</h2>
        <p>
          After inbox, calendar, and data entry run smoothly, add research, CRM
          updates, travel coordination, and light reporting. Each new task is
          easier because the working relationship and standards are already in
          place.
        </p>
      </>
    ),
  },
  {
    slug: "outsource-bookkeeping",
    date: "2026-03-06",
    title: "When to outsource bookkeeping and accounting support",
    tag: "Accounting",
    read: "7 min read",
    excerpt:
      "Signs your finance admin has outgrown spare hours, and how to hand it off without losing control.",
    description:
      "How growing businesses outsource bookkeeping, invoicing, reconciliations, and reporting while keeping oversight of the numbers.",
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          Bookkeeping rarely gets harder&mdash;it just gets bigger. More invoices,
          more receipts, more reconciliations, and more month-end pressure. When
          finance admin starts eating evenings or slipping behind, it is time to
          add outsourced support.
        </p>
        <h2>The tasks that transfer cleanly</h2>
        <p>
          Invoicing, accounts payable and receivable, bank reconciliations,
          expense categorisation, and routine reporting are structured, rule-based,
          and easy to review. They are ideal candidates for a trained outsourced
          bookkeeper working inside your existing tools.
        </p>
        <blockquote>Outsource the data entry, keep the decisions.</blockquote>
        <h2>Keep judgment and approvals internal</h2>
        <p>
          Cash-flow decisions, pricing, budgets, and final sign-off should stay
          with you or your accountant. A good outsourced team prepares clean,
          accurate numbers so those decisions are faster&mdash;not so those
          decisions get made for you.
        </p>
        <div className="callout">
          <strong>Control check:</strong> Define who can approve payments, who
          reconciles, and who reviews. Clear separation protects accuracy and
          trust.
        </div>
        <h2>Standardise before you scale</h2>
        <p>
          Agree on a chart of accounts, a monthly close checklist, and a shared
          document process. Consistent inputs make the numbers reliable and make
          it easy to add volume without adding chaos.
        </p>
        <h2>Reporting you can actually use</h2>
        <p>
          The real payoff is timely, accurate reports&mdash;not just tidy books. A
          steady outsourced bookkeeping function gives you month-end numbers on
          schedule, so you plan with current data instead of guesswork.
        </p>
      </>
    ),
  },
  {
    slug: "outsource-digital-marketing",
    date: "2026-02-16",
    title: "How to outsource digital marketing without losing your brand",
    tag: "Marketing",
    read: "7 min read",
    excerpt:
      "Delegate the execution and reporting while keeping strategy, voice, and approvals in-house.",
    description:
      "A framework for outsourcing digital marketing execution, content, and campaign reporting while protecting brand voice and strategy.",
    img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          Most teams do not need to outsource marketing strategy&mdash;they need to
          outsource the execution that never quite gets done. Scheduling posts,
          building campaigns, updating landing pages, and pulling reports are
          time-heavy tasks that stall in-house.
        </p>
        <h2>Split strategy from execution</h2>
        <p>
          Keep positioning, messaging, and budget decisions internal. Hand over the
          repeatable execution: content production, campaign setup, social
          scheduling, email builds, and performance reporting against goals you set.
        </p>
        <blockquote>Own the message. Delegate the mechanics.</blockquote>
        <h2>Protect your voice with a brand kit</h2>
        <p>
          A short brand guide&mdash;tone, do&rsquo;s and don&rsquo;ts, approved
          language, and visual rules&mdash;lets an outsourced team publish in your
          voice without you rewriting everything. Add an approval step for anything
          public until trust is established.
        </p>
        <div className="callout">
          <strong>Guardrail:</strong> Give edit access, not admin access, until a
          review cadence is proven. Approvals first, autonomy later.
        </div>
        <h2>Measure against goals, not activity</h2>
        <p>
          Agree on the numbers that matter&mdash;leads, cost per result, engagement,
          conversions&mdash;and review them on a regular cadence. Reporting should
          tie back to outcomes, not just posts published.
        </p>
        <h2>Start with one channel</h2>
        <p>
          Pick the channel with the clearest workload and the most upside. Once
          that runs smoothly, expand into adjacent work like email, paid support,
          or content production.
        </p>
      </>
    ),
  },
  {
    slug: "ecommerce-support-outsourcing",
    date: "2026-01-29",
    title: "Scaling e-commerce operations with outsourced support",
    tag: "E-commerce",
    read: "6 min read",
    excerpt:
      "Handle order questions, returns, and listings during peaks without over-hiring for the quiet months.",
    description:
      "How online stores use outsourced e-commerce support for order management, customer questions, returns, and product listings.",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          E-commerce demand is spiky. Launches, promotions, and holidays create
          waves of orders and questions, then settle. Outsourced support lets you
          scale coverage with demand instead of over-hiring for the busiest week of
          the year.
        </p>
        <h2>Cover the customer-facing queue</h2>
        <p>
          Order status, shipping questions, returns, exchanges, and product
          queries are high-volume and highly repeatable. A trained outsourced team
          working from your policies keeps response times fast even during a rush.
        </p>
        <blockquote>Scale coverage with demand, not with headcount you carry all year.</blockquote>
        <h2>Keep the back office moving</h2>
        <p>
          Product listing updates, inventory checks, order processing, and
          marketplace management are back-office tasks that quietly pile up. Handing
          them off keeps your store accurate and your internal team focused on
          buying and growth.
        </p>
        <div className="callout">
          <strong>Peak plan:</strong> Document your busiest-week workflows now, so
          extra capacity can plug in on day one instead of learning under pressure.
        </div>
        <h2>Protect the buying experience</h2>
        <p>
          Share your tone, refund rules, and escalation path so every reply
          matches your brand. Consistency during a return or a delay is what turns
          a frustrated shopper into a repeat customer.
        </p>
        <h2>Watch the numbers that signal strain</h2>
        <p>
          Response time, resolution rate, and backlog are early warnings. Reviewing
          them regularly tells you exactly when to add coverage&mdash;before service
          slips.
        </p>
      </>
    ),
  },
  {
    slug: "outsource-content-creation",
    date: "2026-01-11",
    title: "Outsourcing content creation that stays on brand",
    tag: "Content",
    read: "6 min read",
    excerpt:
      "Publish consistently without burning out your team, while keeping quality and voice intact.",
    description:
      "How to outsource blog posts, social content, and creative production while protecting brand voice and editorial quality.",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          Consistency is the hardest part of content. Most teams start strong, then
          publishing slips as day-to-day work takes over. Outsourced content
          support keeps the calendar moving without burning out your internal team.
        </p>
        <h2>Give direction, not just a topic</h2>
        <p>
          A clear brief&mdash;audience, goal, key points, tone, and a few reference
          examples&mdash;produces far better first drafts than a one-line request.
          The time you spend briefing is repaid in fewer revisions.
        </p>
        <blockquote>Great content is briefed well before it is written well.</blockquote>
        <h2>Lock your voice into a style guide</h2>
        <p>
          Document tone, preferred phrasing, formatting rules, and words to avoid.
          A style guide lets outsourced writers and designers match your brand so
          edits are light and the output feels like you.
        </p>
        <div className="callout">
          <strong>Editorial flow:</strong> Brief, draft, review, publish. A simple,
          repeatable pipeline keeps quality high as volume grows.
        </div>
        <h2>Build a calendar you can sustain</h2>
        <p>
          Plan topics ahead in a shared calendar so production is steady rather
          than reactive. A predictable pipeline is what turns occasional posts into
          a real content engine.
        </p>
        <h2>Keep final approval in-house</h2>
        <p>
          An outsourced team can research, write, and produce&mdash;you keep the
          final sign-off. That balance gives you volume and consistency without
          losing editorial control.
        </p>
      </>
    ),
  },
  {
    slug: "outsource-technical-support",
    date: "2025-12-24",
    title: "Building an outsourced technical support desk",
    tag: "Technical Support",
    read: "7 min read",
    excerpt:
      "Give customers fast, reliable help across time zones without stretching your engineers thin.",
    description:
      "How to set up outsourced technical support and help-desk coverage with clear tiers, documentation, and escalation paths.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          Technical questions do not wait for business hours, but pulling engineers
          into every ticket is expensive and slow. An outsourced technical support
          desk gives customers fast first-line help while your specialists stay
          focused on building.
        </p>
        <h2>Define clear support tiers</h2>
        <p>
          First-line handles setup, common errors, and how-to questions from
          documented steps. Complex or code-level issues escalate to your team. Clear
          tiers keep resolution fast and keep engineers out of routine tickets.
        </p>
        <blockquote>Document the top twenty questions and you have solved most of your tickets.</blockquote>
        <h2>Invest in the knowledge base</h2>
        <p>
          A strong internal knowledge base is what makes outsourced support work.
          Documented troubleshooting steps, known issues, and clear ownership let a
          trained team resolve most tickets consistently and correctly.
        </p>
        <div className="callout">
          <strong>Escalation rule:</strong> Define exactly what gets escalated,
          to whom, and how fast. Ambiguity is what slows technical support down.
        </div>
        <h2>Cover the hours your customers need</h2>
        <p>
          Outsourcing makes extended and overnight coverage practical. Customers get
          help when they need it, and your internal team is not on call for
          first-line questions around the clock.
        </p>
        <h2>Track quality, not just speed</h2>
        <p>
          Watch resolution rate, escalation accuracy, and customer satisfaction
          alongside response time. Fast answers only help if they are the right
          answers.
        </p>
      </>
    ),
  },
  {
    slug: "outsource-data-entry-research",
    date: "2025-12-06",
    title: "Outsourcing data entry and research the right way",
    tag: "Data & Research",
    read: "6 min read",
    excerpt:
      "Keep your CRM clean and your research current without tying up skilled staff on manual work.",
    description:
      "Best practices for outsourcing data entry, CRM cleanup, list building, and market research with accuracy checks built in.",
    img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          Clean data quietly powers everything&mdash;sales, marketing, reporting,
          and forecasting. But manual entry and research are exactly the tasks your
          skilled staff should not be spending hours on. This is where outsourced
          support delivers fast, measurable value.
        </p>
        <h2>The work that transfers well</h2>
        <p>
          Data entry, CRM cleanup and deduplication, list building, web research,
          and database maintenance are structured and reviewable. With clear rules
          and formats, an outsourced team keeps records accurate and current.
        </p>
        <blockquote>Bad data costs more than the time it takes to keep it clean.</blockquote>
        <h2>Build accuracy into the process</h2>
        <p>
          Define field formats, sources, and validation rules up front, then add
          spot-checks and error thresholds. Quality control is what separates
          reliable outsourced data work from a bigger mess to fix later.
        </p>
        <div className="callout">
          <strong>Standard first:</strong> Agree on formatting and sources before
          volume starts. Consistent inputs are far cheaper than cleanup later.
        </div>
        <h2>Protect sensitive information</h2>
        <p>
          Use role-based access, clear handling rules, and secure tools. Good data
          partners work inside your systems with only the access they need&mdash;
          nothing more.
        </p>
        <h2>Turn clean data into decisions</h2>
        <p>
          Accurate records and timely research feed better targeting, reporting,
          and planning. The point is not tidy spreadsheets&mdash;it is decisions you
          can trust.
        </p>
      </>
    ),
  },
  {
    slug: "outsource-lead-generation",
    date: "2025-11-18",
    title: "Outsourced lead generation that fills your pipeline",
    tag: "Lead Generation",
    read: "7 min read",
    excerpt:
      "Keep your sales team selling by outsourcing research, outreach, and qualification&mdash;not the closing.",
    description:
      "How to outsource lead generation, prospect research, and appointment setting while keeping qualification standards and closing in-house.",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1400&q=80",
    body: (
      <>
        <p>
          Your best closers should be closing, not spending mornings building
          lists and chasing cold contacts. Outsourced lead generation handles the
          research and outreach that fills the top of the funnel, so your sales team
          works warmer opportunities.
        </p>
        <h2>Outsource the top of the funnel</h2>
        <p>
          Prospect research, list building, first-touch outreach, follow-ups, and
          appointment setting are repeatable and measurable. A trained team can run
          them consistently against the profile you define.
        </p>
        <blockquote>Let your closers close. Outsource the search.</blockquote>
        <h2>Define what a good lead looks like</h2>
        <p>
          Agree on your ideal customer profile, qualifying questions, and
          disqualifiers before outreach starts. Clear criteria keep the pipeline
          full of leads worth your sales team&rsquo;s time&mdash;not just more names.
        </p>
        <div className="callout">
          <strong>Quality gate:</strong> Measure qualified meetings booked, not
          messages sent. Activity is easy; qualified pipeline is the goal.
        </div>
        <h2>Protect your brand in every message</h2>
        <p>
          Outreach represents your company. Share approved messaging, tone, and
          rules so every touch is professional and on-brand, and keep an approval
          step for new sequences until they are proven.
        </p>
        <h2>Hand off cleanly to sales</h2>
        <p>
          Define exactly how a qualified lead moves to your closers&mdash;what
          context comes with it and how fast. A smooth handoff is what turns
          outsourced activity into real revenue.
        </p>
      </>
    ),
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
