# VivantePlexus™ CMI

**Cognitive-Motor Interference Intelligence**

VivantePlexus CMI is an instrument-first research prototype for measuring how motor performance changes under cognitive load, how cognitive performance changes under motor load, and how that relationship changes longitudinally.

> Measure both tasks. Preserve the raw events. Track the frontier — not a magic score.

## What is implemented

- Standardised **CMI Assess** sequence: motor-only → cognitive-only → dual-task.
- Protocol provenance including priority instruction and versioning.
- Browser-native monotonic timestamps using `performance.now()`.
- Synthetic cycling adapter / motor simulator.
- Parameter-ready cognitive paradigms: Go/No-Go, Stroop-like interference, working memory, task switching, visual search and choice reaction.
- Raw and relative dual-task analytics.
- Descriptive CMI pattern classification (not diagnostic phenotyping).
- Cognitive-Motor **Capacity Map** and observed frontier visualisation.
- Longitudinal comparison view.
- Event-level JSON / CSV export.
- Evidence ladder and explicit product kill criteria.
- Zero external runtime dependencies.
- Node unit tests for core analytics.
- GitHub Pages deployment workflow.

## Product principle

This repository deliberately starts with measurement infrastructure rather than AI. The intended progression is:

`GAME → INSTRUMENT → MEASUREMENT → ADAPTATION → PLATFORM → EVIDENCE → INTELLIGENCE`

The prototype does **not** claim to diagnose disease, predict falls, measure neurological health, or provide treatment recommendations.

## Run locally

```bash
npm test
npm run serve
```

Open `http://localhost:4173`.

Because the app is static and has no external dependencies, you can also serve it with any simple HTTP server.

## Architecture

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

Key design decisions:

1. **Canonical event stream** — every motor sample, cognitive stimulus, response and protocol transition is timestamped and reconstructable.
2. **Single-task comparability** — the same cognitive generator is reused in cognitive-only and dual-task conditions.
3. **No universal CMI score** — raw differences, relative dual-task cost and two-domain profiles remain inspectable.
4. **Hardware abstraction** — the simulator is an adapter, not the protocol engine.
5. **Research provenance** — protocol version, task-priority instruction, device and clock source are retained.

## Validation pathway

See [`docs/VALIDATION.md`](docs/VALIDATION.md).

The recommended sequence is:

1. bench timing / event fidelity;
2. test-retest reliability;
3. construct validity;
4. responsiveness;
5. transfer beyond trained tasks;
6. predictive modelling only after external validation.

## Data and privacy

The current build stores demo data in memory only and exports synthetic/pseudonymised session events. Do not commit identifiable participant or patient data to this repository.

## Status

Research and product-development prototype. Not a medical device. Not for diagnosis or treatment.
