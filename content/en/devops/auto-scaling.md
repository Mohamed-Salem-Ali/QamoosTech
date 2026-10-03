---
id: auto-scaling
category: devops
level: intermediate
related: [load-balancer, scalability]
term: "Auto-scaling"
pronunciation: "AW-toh SKAY-ling"
---

## Definition

Auto-scaling is a cloud computing feature that automatically adjusts the number of active server instances based on current traffic or resource demand. It helps maintain performance during spikes while reducing costs during quiet periods.

## Where you hear it

During infrastructure planning, cloud cost optimization discussions, or when setting up production environments.

## Examples

- We configured auto-scaling to handle the traffic spike during the holiday sale.
- The system uses auto-scaling to spin up new instances when CPU usage exceeds 80%.

## Common mistake

Assuming that auto-scaling is an instant process; it often takes a few minutes for new instances to boot up and register with the load balancer, which can lead to temporary performance degradation if not planned correctly.
