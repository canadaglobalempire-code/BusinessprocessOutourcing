# Graph Report - Business oursourcing  (2026-07-14)

## Corpus Check
- 50 files · ~809,460 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 260 nodes · 291 edges · 32 communities (23 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
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
- layout.tsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Reveal()` - 12 edges
3. `What You Must Do When Invoked` - 12 edges
4. `SvgIcon()` - 10 edges
5. `/graphify` - 10 edges
6. `graphify reference: extra exports and benchmark` - 8 edges
7. `Product` - 8 edges
8. `SERVICES` - 6 edges
9. `include` - 6 edges
10. `getPost()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `getPost()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/posts.tsx
- `Article()` --calls--> `getPost()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/posts.tsx
- `generateMetadata()` --calls--> `getService()`  [EXTRACTED]
  app/services/[slug]/page.tsx → lib/services.tsx
- `ServiceDetail()` --calls--> `getService()`  [EXTRACTED]
  app/services/[slug]/page.tsx → lib/services.tsx
- `ContactPage()` --references--> `SERVICE_NAMES`  [EXTRACTED]
  app/contact/page.tsx → lib/services.tsx

## Import Cycles
- None detected.

## Communities (32 total, 9 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (20): metadata, STATEMENTS, metadata, metadata, STEPS, ACCENTS, INDUSTRIES, metadata (+12 more)

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (21): ./*, dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental (+13 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (17): motion, next, dependencies, motion, next, react, react-dom, name (+9 more)

### Community 3 - "Community 3"
Cohesion: 0.14
Nodes (14): ContactPage(), metadata, AGENT_COUNTS, CALL_CENTRE_SERVICES, CALL_VOLUMES, LeadForm(), PROGRAM_DAYS, SOLUTIONS (+6 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 5 - "Community 5"
Cohesion: 0.15
Nodes (13): devDependencies, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, typescript, tailwindcss (+5 more)

### Community 6 - "Community 6"
Cohesion: 0.36
Nodes (6): Article(), generateMetadata(), Params, getPost(), Post, POSTS

### Community 7 - "Community 7"
Cohesion: 0.12
Nodes (14): BENEFITS, HERO_TILES, metadata, STEPS, WORKFLOW, generateMetadata(), Params, ServiceDetail() (+6 more)

### Community 8 - "Community 8"
Cohesion: 0.22
Nodes (8): .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

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

### Community 30 - "layout.tsx"
Cohesion: 0.25
Nodes (6): inter, metadata, SiteFooter(), ABOUT_NAV, NAV, SiteHeader()

## Knowledge Gaps
- **136 isolated node(s):** `metadata`, `STATEMENTS`, `Params`, `metadata`, `metadata` (+131 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Reveal()` connect `Community 0` to `Community 3`, `Community 7`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `SvgIcon()` connect `Community 0` to `layout.tsx`, `Community 7`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Community 1` to `Community 8`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `metadata`, `STATEMENTS`, `Params` to the rest of the system?**
  _136 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07965860597439545 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._