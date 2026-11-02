# Open-source research for VisFit

## Reference project
OpenPersonalTraining: https://github.com/clawnify/OpenPersonalTraining

The project README describes client management, a searchable exercise library, workout builder, shareable workout links/PDF, scheduling, payment ledger and dashboard. Its repository identifies an MIT licence. See the upstream README and LICENSE before copying any upstream source into this repository.

## Important implementation note
This VisFit package is a modification of the existing VisFit MERN starter. It applies the product workflow ideas described in OpenPersonalTraining's public documentation; it does **not** contain copied source files from that repository. The GitHub repository could not be cloned in the build environment, so this package does not claim to be a fork. If source code from OpenPersonalTraining is later incorporated, preserve its copyright and MIT licence notice in accordance with the licence, and audit third-party assets/dependencies separately.

## VisFit product priority
The main offer is the plan service, not website monetization:
- Workout plan — ₹499 one-time
- Workout + general diet plan — ₹999 one-time
- Plan + follow-up — ₹1,999/month

The website enquiry flow captures a prospective customer's goal and constraints. This build does not accept payments, generate clinical nutrition advice, or send a plan automatically. Those are later features requiring secure payment integration, plan review, customer consent and delivery workflow.
