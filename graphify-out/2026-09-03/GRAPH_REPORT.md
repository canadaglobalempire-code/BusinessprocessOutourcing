# Graph Report - Business oursourcing  (2026-09-03)

## Corpus Check
- 81 files · ~979,217 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 431 nodes · 774 edges · 32 communities (21 shown, 11 thin omitted)
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
- image-loader.ts
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

## Communities (32 total, 11 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (61): metadata, STATEMENTS, metadata, metadata, STEPS, ACCENTS, IndustriesPage(), industryOptions() (+53 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (29): ./*, dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+21 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (33): motion, next, dependencies, motion, next, react, react-dom, devDependencies (+25 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 5 - "locations.ts"
Cohesion: 0.08
Nodes (25): GROUPS, metadata, generateMetadata(), LocationDetail(), CITY_LOCATIONS, EU_LINKS, UAE_LINKS, UK_LINKS (+17 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (19): metadata, Params, Article(), generateMetadata(), Params, BlogList(), TOTAL_BLOG_PAGES, blogPageHref() (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.07
Nodes (31): ContactPage(), inter, metadata, structuredData, generateMetadata(), ServiceDetail(), AGENT_COUNTS, CALL_CENTRE_SERVICES (+23 more)

### Community 8 - "Community 8"
Cohesion: 0.19
Nodes (16): ACCENTS, generateMetadata(), generateStaticParams(), IndustryDetail(), Params, generateMetadata(), generateStaticParams(), SolutionDetail() (+8 more)

### Community 10 - "SEO Keyword Plan"
Cohesion: 0.25
Nodes (7): Blog Topics To Add Next, Business Positioning, Content Rules, Page Keyword Map, Primary Keywords, SEO Keyword Plan, Target Audience

### Community 13 - "Community 13"
Cohesion: 0.14
Nodes (13): GET(), GET(), ALL_ENTRIES, blogPages, CONTENT_UPDATED, Entry, renderSitemapIndex(), renderUrlset() (+5 more)

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
- **186 isolated node(s):** `metadata`, `STATEMENTS`, `Params`, `metadata`, `Params` (+181 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `MiniMark()` connect `Community 0` to `Community 3`, `locations.ts`, `Community 6`, `Community 7`, `Community 8`, `page.tsx`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `slugify()` connect `Community 8` to `Community 0`, `Community 13`, `Community 7`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `SvgIcon()` connect `Community 0` to `Community 8`, `locations.ts`, `Community 7`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `metadata`, `STATEMENTS`, `Params` to the rest of the system?**
  _186 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06311360448807854 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._