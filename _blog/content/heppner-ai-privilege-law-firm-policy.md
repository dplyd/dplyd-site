---
title: "After Heppner: A Law Firm AI Policy That Protects Privilege"
date: 2026-10-20T08:00:00-04:00
author: "Kendall Miller"
eyebrow: "Legal"
slug: "heppner-ai-privilege-law-firm-policy"
summary: "A federal judge held a defendant's chats with a consumer AI tool were not privileged. What Heppner does and doesn't mean, and what your AI policy should say."
draft: false
---

*A federal judge read a defendant's AI chats. Here's why, and what your policy should say on Monday.*

**In short**
- In *United States v. Heppner* (S.D.N.Y.), Judge Rakoff held that a defendant's exchanges with a consumer AI tool were neither privileged nor work product.
- The ruling is fact-specific and commentators disagree on its reach, but it names a risk every firm should manage.
- Whether an AI tool protects confidentiality depends largely on architecture and contract.

*General information, not legal advice. Discuss your obligations with ethics counsel.*

### What happened

*United States v. Heppner*, No. 25-cr-00503-JSR, was decided by Judge Jed Rakoff in the Southern District of New York. The defendant used a consumer AI tool, Claude, to generate roughly 31 documents related to his defense, and the government sought them. Judge Rakoff ruled from the bench on February 10, 2026 and issued a written opinion on February 17 (2026 WL 436479). As summarized by Orrick, McDermott and White & Case, he found no protection because the tool isn't an attorney, the exchanges weren't confidential under the service's terms, and the defendant acted on his own instead of at counsel's direction. Heppner was convicted May 7, 2026.

### What it does not hold

McDermott, Ogletree and the Harvard Law Review blog read the ruling narrowly: a client using a consumer product on his own, under terms that gave the provider broad data rights. Vendors like Legora argue that an attorney-directed, confidential enterprise tool stands on different footing. That may be right — but it's untested. *Heppner* didn't say lawyers can't use AI. It said privilege isn't automatic when the setup is casual, non-confidential and not directed by counsel — so make sure yours is none of those.

### Confidentiality depends on architecture

Ask these questions of any AI tool. Who can read prompts and outputs, including provider staff and subprocessors? Is your data retained or used for training? Where does the index live? A hosted index is a second copy of client material ({{< postlink "why-the-index-is-the-leak" "Why the Index Is the Leak" >}}). Who controls matter-level access, so ethical walls apply to AI retrieval? What's logged, and can you produce it? What do your engagement terms say? They're the questions you'd ask any vendor that touches client files.

### What your AI policy should say

1. Sanctioned tools only. Name them, and state that consumer AI isn't among them.
2. A clear data rule. Client names, matter facts and privileged communications never go into an unsanctioned tool.
3. Attorney direction. AI assists client work by or at the direction of an attorney.
4. Matter-level access control. Retrieval respects the same walls as your document system.
5. Logging and retention. Decide what's recorded, who sees it and for how long.
6. Client guidance. *Heppner* involved a client. Tell clients not to run their own AI conversations about their matters, and update engagement letters.
7. Training and a quarterly review while the law develops.

### Where private AI fits

Running AI on hardware inside the firm covers several of these at once. Prompts and documents don't go to a third-party model provider, the index stays where documents are governed, access can follow matter permissions, and an immutable log shows who used the system and when. That's how we built DPLYD: the model, index, embeddings and logs inside your environment, Lighthouse for identity and segmentation, and Sentinel for an exportable audit trail. No vendor can guarantee privilege — I'd be wary of any that says it can. A setup you control gives your ethics counsel much better facts to work with.

### Beyond the firm's walls

The policy has to reach past your own lawyers. Contract attorneys, expert witnesses, e-discovery and litigation-support providers and co-counsel may all use AI on your client's material, and each is another place a confidentiality argument can weaken. Ask them what tools they use, where data and indexes are stored, and whether client information is retained or used for training, then put the answers in your engagement terms. Clients matter here too. A client who pastes your advice into a consumer chatbot has created the kind of record *Heppner* described, and a short note at the start of the engagement is cheap insurance.

### Frequently asked questions

**Does *Heppner* mean we can't use AI for client work?** No. It concerned a client using a consumer tool independently. It's a reason to choose tools and write policy carefully.

**Is an enterprise subscription automatically safe?** No. Check retention, training rights, provider access, where data and indexes live, and your contract, and get the answers in writing.

**Should we tell clients we use AI?** Requirements vary. Ask your ethics counsel, and expect clients to ask first.

### See it on a sample matter set

**[Schedule a 30-minute demo](https://cal.com/kdplyd/30min)** or see our [legal page](/solutions/legal/).

**Sources:** *United States v. Heppner*, No. 25-cr-00503-JSR (S.D.N.Y.), 2026 WL 436479; Harvard Law Review blog (March 2026); Orrick; White & Case; McDermott; Ogletree; Legora.
