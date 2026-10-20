---
title: "CMMC Phase 2 Paused: What It Means for CUI and AI Tools"
date: 2026-10-13T08:00:00-04:00
author: "Kendall Miller"
eyebrow: "Defense"
slug: "cmmc-phase-2-paused-ai-tools"
summary: "DoD suspended CMMC Phase 2 in July 2026. Your DFARS 7012 and NIST 800-171 obligations did not pause. What changed, what didn't, and how AI fits."
draft: false
---

*The November 10 deadline is off the table, but DFARS 7012 still applies.*

**In short**
- On July 13, 2026, the Department suspended CMMC Phase 2, which was due November 10, 2026.
- Phase 1 self-assessments, DFARS 252.204-7012 and the 110 NIST SP 800-171 Rev 2 requirements remain in force.
- Any AI tool that touches CUI, including its index, expands your assessment scope.

*Status as of October 2026. See the update log at the end.*

### What changed

On July 13, 2026, the Department of War, formerly DoD, suspended Phase 2 and launched a 60-day reform review. Phase 2 would have made a Level 2 certification from a third-party assessor (C3PAO) a condition of award for many contractors handling CUI. Phases 3 and 4 are frozen. A Reform Task Force reviewed more than 1,100 comments. Its report was due September 11. As of October 20 we couldn't find it released publicly.

On September 3, Class Deviation 2026-O0025 Rev. 3 directed contracting officers to remove third-party CMMC requirements from solicitations. Certificates already issued still stand. The Cyber AB reported 1,391 final Level 2 certificates as of May 2026.

### What did not change

Only the certification gate moved. Phase 1 self-assessments and SPRS affirmations continue. DFARS 252.204-7012 still requires adequate security and incident reporting, and NIST SP 800-171 Rev 2, with its 110 requirements, is still the yardstick. So is False Claims Act exposure for inaccurate affirmations. With no assessor involved, the affirmation is your own statement to the government, and if the controls aren't real, the paperwork becomes the liability.

### The precedent

The 2021 pause ended in a streamlined CMMC 2.0, and the program was reshaped rather than repealed. I'd argue a contractor who spends this pause fixing architecture is ahead in every plausible outcome. Estimates of how many companies need Level 2 differ widely, roughly 80,000 by the Department's figures and 118,000 by a figure CyberSheath cites, but nobody disputes the direction.

### Where AI expands your scope

Every AI tool that processes, stores or indexes CUI joins the system you have to assess: the model, the interface, the logs and, as we cover in {{< postlink "why-the-index-is-the-leak" "Why the Index Is the Leak" >}}, the search index. If those live in a vendor's cloud, your boundary now includes that environment. Adding AI after you've documented your boundary means revisiting your system security plan, diagrams and data flows. Unsanctioned use, like a browser tab to a consumer chatbot, is a data flow no diagram shows ({{< postlink "shadow-ai-regulated-firms" "Shadow AI" >}}). The cleanest fix is AI inside the boundary you already defend.

### A no-regrets checklist for Q4

1. Confirm your CUI boundary in writing, on one page.
2. Inventory every AI tool in use, sanctioned or not.
3. Decide where AI may touch CUI, and give people a sanctioned option.
4. Check every "implemented" control in your SPRS affirmation against evidence.
5. Ask each AI vendor where prompts, files, embeddings and logs live, in writing.
6. Put the Task Force report on your calendar and re-check monthly.

### How DPLYD fits

DPLYD is built to the standard of NIST SP 800-171 controls. The model, index, embeddings and logs run inside your network, so adding AI doesn't add a third-party environment to your boundary. Sentinel produces exportable evidence for an assessor or to back your own affirmation. See our [defense case study](/case-studies/defense-cmmc/).

### Using the pause well

Sequence the work. In the first 30 days, settle the boundary and inventory your AI tools. In days 30 to 60, close the gaps you find: multi-factor authentication, logging, segmentation and a written AI policy. In days 60 to 90, test your evidence by asking someone outside the project to produce it for a random week. Contractors who do this can answer a prime's or customer's questions in hours when requirements return. Those who wait will do the same work under a deadline, with less say in how it's done and probably at a higher price.

### Frequently asked questions

**Is CMMC canceled?** No. Phase 2 is suspended and third-party requirements are being removed from solicitations for now. The underlying clauses and standards remain.

**Do I need to act by November 10?** That date no longer triggers new requirements. Existing DFARS 7012 and SPRS obligations continue.

**Is my Level 2 certificate still valid?** Issued certificates remain in place. Ask your assessor about maintenance as the review concludes.

### Get AI inside your boundary

**[Book a 30-minute walkthrough](https://cal.com/kdplyd/30min)** or visit our [defense page](/solutions/defense/).

**Sources:** Crowell & Moring (July 2026); Covington, Inside Government Contracts (September 2026); governmentcontractslaw.com; DoD CIO CMMC page; 32 CFR Part 170; Class Deviation 2026-O0025 Rev. 3.

**Update log:** October 20, 2026: re-checked; Task Force report still not publicly released and no new DFARS change beyond Class Deviation 2026-O0025 Rev. 3. September 28, 2026: published. Add an entry when the Task Force report or a DFARS change is released.
