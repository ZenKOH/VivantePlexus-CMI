# Validation strategy

## 1. Bench validation

Primary question: **Does the software measure what the device actually generated?**

Evaluate event ordering, timestamp precision, stimulus-to-response latency capture, packet loss, reconnect behaviour, device sampling variance, browser/platform timing effects and complete session replay/reconstruction.

## 2. Test-retest reliability

Primary question: **Can CMI reproduce its own measurements?**

Pre-specify priority instruction, familiarisation exposure, protocol/task version, repeated blocks, test/retest interval, exclusion rules, ICC model, standard error of measurement, agreement analysis and practice-effect analysis.

Sample size should be based on desired precision around reliability estimates, not an arbitrary feasibility number.

## 3. Construct validity

Test whether CMI behaves in ways predicted by established constructs and external measures. Do not interpret association as diagnostic validity.

## 4. Responsiveness

Determine whether CMI can distinguish true within-person change from ordinary measurement variation.

## 5. Transfer

Assess whether improvement under the trained protocol generalises to untrained functional or clinical tasks. Training-task improvement alone is not evidence of real-world transfer.

## 6. Prediction

Only after adequate reliability, validity, sample size, external validation and governance should machine-learning prediction be considered.

## Reporting rule

Until validated, use language such as **observed performance pattern** rather than diagnostic labels or patient phenotypes. Do not present a universal CMI score as a neurological biomarker.
