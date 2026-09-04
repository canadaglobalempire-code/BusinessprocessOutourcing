# Graph Report - Business oursourcing  (2026-09-03)

## Corpus Check
- 80 files · ~1,738,779 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 427 nodes · 770 edges · 31 communities (23 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `da231700`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- locations.ts
- Community 6
- Community 7
- Community 8
- page.tsx
- SEO Keyword Plan
- Community 11
- Community 13
- Community 14
- Community 15
- Community 16
- graphify reference: extra exports and benchmark
- Product
- graphify reference: query, path, explain
- OutsourcePro Full Website
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- AGENTS.md
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- extraction-spec.md
- Homepage design critique

## God Nodes (most connected - your core abstractions)
1. `MiniMark()` - 24 edges
2. `Reveal()` - 19 edges
3. `Breadcrumbs()` - 17 edges
4. `SvgIcon()` - 16 edges
5. `slugify()` - 16 edges
6. `compilerOptions` - 16 edges
7. `FaqSection()` - 14 edges
8. `What You Must Do When Invoked` - 12 edges
9. `/graphify` - 10 edges
10. `pageImage` - 9 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `getPost()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/posts.tsx
- `Article()` --calls--> `getPost()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/posts.tsx
- `generateStaticParams()` --calls--> `slugify()`  [EXTRACTED]
  app/industries/[slug]/page.tsx → lib/industries.ts
- `generateMetadata()` --calls--> `getIndustry()`  [EXTRACTED]
  app/industries/[slug]/page.tsx → lib/industries.ts
- `IndustriesPage()` --calls--> `slugify()`  [EXTRACTED]
  app/industries/page.tsx → lib/industries.ts

## Import Cycles
- None detected.

## Communities (31 total, 8 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (42): metadata, STATEMENTS, metadata, STEPS, ACCENTS, IndustriesPage(), industryOptions(), metadata (+34 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (29): ./*, dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+21 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (33): motion, next, dependencies, motion, next, react, react-dom, devDependencies (+25 more)

### Community 3 - "Community 3"
Cohesion: 0.15
Nodes (17): ACCENTS, generateMetadata(), LocationDetail(), Params, generateMetadata(), Params, ServiceDetail(), CrossLink (+9 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 5 - "locations.ts"
Cohesion: 0.09
Nodes (20): GROUPS, metadata, CITY_LOCATIONS, EU_LINKS, UAE_LINKS, UK_LINKS, CORE_LOCATIONS, COUNTRY_LOCATIONS (+12 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (19): metadata, Params, Article(), generateMetadata(), Params, BlogList(), TOTAL_BLOG_PAGES, blogPageHref() (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.13
Nodes (17): inter, metadata, structuredData, ModalContext, ModalContextValue, ModalProvider(), OpenModalButton(), useModal() (+9 more)

### Community 8 - "Community 8"
Cohesion: 0.13
Nodes (27): ACCENTS, generateMetadata(), generateStaticParams(), IndustryDetail(), Params, ACCENTS, metadata, SolutionsPage() (+19 more)

### Community 9 - "page.tsx"
Cohesion: 0.16
Nodes (12): ContactPage(), metadata, AGENT_COUNTS, CALL_CENTRE_SERVICES, CALL_VOLUMES, LeadForm(), SOLUTIONS, Variant (+4 more)

### Community 10 - "SEO Keyword Plan"
Cohesion: 0.25
Nodes (7): Blog Topics To Add Next, Business Positioning, Content Rules, Page Keyword Map, Primary Keywords, SEO Keyword Plan, Target Audience

### Community 13 - "Community 13"
Cohesion: 0.15
Nodes (12): GET(), GET(), ALL_ENTRIES, CONTENT_UPDATED, Entry, renderSitemapIndex(), renderUrlset(), SECTION_NAMES (+4 more)

### Community 19 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 20 - "Product"
Cohesion: 0.22
Nodes (8): Accessibility & Inclusion, Anti-references, Brand Personality, Design Principles, Product, Product Purpose, Register, Users

### Community 21 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 22 - "OutsourcePro Full Website"
Cohesion: 0.40
Nodes (4): Before publishing, Included, OutsourcePro Full Website, Run locally

### Community 23 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 24 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 25 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 32 - "Homepage design critique"
Cohesion: 0.13
Nodes (14): Anti-Patterns Verdict, Design Health Score, Homepage design critique, Minor Observations, Overall Impression, [P1] Large credibility claims lack evidence, [P1] The hero promise and CTA do not qualify the buyer, [P2] Accessibility and failure-state polish is incomplete (+6 more)

## Knowledge Gaps
- **184 isolated node(s):** `metadata`, `STATEMENTS`, `Params`, `metadata`, `Params` (+179 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `MiniMark()` connect `Community 0` to `Community 3`, `locations.ts`, `Community 6`, `Community 7`, `Community 8`, `page.tsx`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `slugify()` connect `Community 8` to `Community 0`, `Community 13`, `Community 7`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `Reveal()` connect `Community 3` to `Community 0`, `locations.ts`, `Community 6`, `Community 8`, `page.tsx`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `metadata`, `STATEMENTS`, `Params` to the rest of the system?**
  _184 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06151062867480778 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._