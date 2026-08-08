# Architecture

## Design objective

VivantePlexus CMI is structured as a measurement instrument before it becomes an adaptive training or AI product. A session must be reconstructable from canonical events, independent of the motor device.

## Prototype flow

```text
Cognitive task generator      Motor simulator / future adapter
          │                              │
          └──────────────┬───────────────┘
                         ↓
                 Local session clock
                         ↓
                Canonical event stream
                         ↓
               In-memory session model
                         ↓
              CMI analytics + reports
                   ↙             ↘
          Capacity Map         JSON/CSV
```

## Canonical events

Current event families:

- `protocol.transition`
- `motor.sample`
- `cognitive.stimulus`
- `cognitive.response`

Events retain session and pseudonymous participant IDs, protocol ID/version, event ID/type, monotonic and wall-clock time, clock source and timing uncertainty, phase payload, and device provenance where applicable.

## Timing

`performance.now()` is used for within-session latency because it is monotonic. Wall-clock timestamps are also retained for readability and future cross-system reconciliation. The prototype's timing-quality label is demonstrative and must be bench-validated on target hardware/browser combinations before research claims are made.

## Device abstraction

The motor simulator is the first adapter. Production integrations should emit canonical motor events without altering protocol or analytics code. Candidate adapters include BLE cadence sensors, FES/rehabilitation cycles, treadmills, IMUs, balance systems, rehabilitation robots and exoskeletons.

A production hardware strategy should not depend only on Web Bluetooth; native or desktop bridges may be required depending on platform support and device interfaces.

## Production separation

A clinical/enterprise version should separate the PWA/clinician interface, local session engine, device bridge, secure API, operational database, immutable raw-event storage, research snapshots, tenant/identity controls, audit services and observability.

This repository intentionally does not imply that those production controls are already implemented.
