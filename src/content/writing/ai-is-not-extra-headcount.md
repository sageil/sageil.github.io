---
title: AI Is Not Extra Headcount
date: 2026-03-24
description: AI multiplies the team and delivery system around it, producing gains only when the work, feedback, and judgment support it.
---

When I talk to executives about AI, they tend to fall into two camps.
Some can’t justify the cost against the value they’re getting.
Others are paying for it and see their teams barely getting more done.
When I ask either group whether they changed their processes to fit AI, the answer has always been the same: no, they like how they work.

That answer explains most of the disappointment.
AI is a multiplier, but that only helps if we’re clear about what it’s multiplying.

The headline numbers make it easy to reach the wrong conclusion.
An [analysis of 2,172 developer-weeks](https://gitkraken.com/reports/ai-multiplier-effect) found that heavy AI users produced 14 times more commit activity than non-users, while regular users opened 3.7 times more pull requests.
Read those as productivity and an AI licence starts to look like several extra developers.

The analysis gets more useful when it compares developers with themselves a year earlier.
Regular AI users improved by about 25 percent.
The much larger activity gap also included differences in experience, company environment, codebase access, and the kind of work happening during periods of heavy AI use.

AI was part of the gain, but it didn’t create the whole gap.
It multiplied developers and teams that were already working under different conditions.

<figure class="article-visual article-visual-wide">
  <img src="/images/writing/ai-productivity-by-work.png" alt="Three developer studies show different AI outcomes: 26 percent more completed tasks for code completion, 21 percent less time on a defined enterprise task, and 19 percent more time for experienced developers working in mature open-source repositories." width="1774" height="887" loading="eager" decoding="async">
  <figcaption>The studies measured different work in different settings. Together, they show why AI cannot be converted into one fixed productivity rate.</figcaption>
</figure>

## The result changes with the work

Controlled studies give us a better view of what AI contributes.

[Three randomized field experiments involving 4,867 developers](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/) found that developers with access to an AI coding assistant completed about 26 percent more tasks.
The experiments took place at Microsoft, Accenture, and another large company, and the tool primarily supplied code completions.
Less-experienced developers adopted it more often and received larger gains.

A [separate randomized study of 96 Google developers](https://arxiv.org/abs/2410.12944) found that AI reduced the time spent on a complex enterprise task by about 21 percent.
The confidence interval was wide, but the direction was positive.
Developers who spent more of their day working with code received the larger benefit.

Then [METR studied 16 experienced open-source developers](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) working on 246 real issues in repositories they had known for years.
The developers used early-2025 versions of Cursor and Claude while completing bug fixes, features, and refactoring work.
With AI, they took 19 percent longer.

The developers expected AI to make them 24 percent faster before the study.
After the study, they still believed it had made them 20 percent faster.
The measured result went in the opposite direction.

These findings don’t contradict each other.
Code completion inside a large company, a defined enterprise task, and issue-level work in a mature open-source repository are not the same kind of work.
The value of AI changed with the task, the developer’s familiarity with it, and the effort required to verify the result.

A [randomized field experiment with 758 consultants](https://www.hbs.edu/ris/Publication%20Files/dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier_5c589c8c-fbb5-458f-b285-c944746cd717.pdf) helps explain this difference.
For tasks that were within the model’s capability, people using AI worked more than 25 percent faster and produced results rated more than 40 percent higher in quality.
For a task outside that capability, the people using AI were 19 percentage points less likely to reach the correct answer.

They completed the work faster and produced persuasive answers.
The answers were simply wrong more often.

For an engineering team, this makes the feedback loop more important than the amount of code an agent can generate.
When a compiler, automated test, static check, benchmark, or small production experiment can expose a bad result quickly, the team can safely give AI more room to work.
When correctness depends on an architectural trade-off, an unclear product decision, or behaviour that cannot be tested cheaply, AI can still help explore the problem, but it should not choose the direction.

## The multiplier includes the delivery system

What happens after AI produces a change depends on the engineering system the team already has.

The [2025 DORA research](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report) collected survey responses from nearly 5,000 technology professionals.
It found a positive relationship between AI adoption, software delivery throughput, and product performance.
It also found that increased AI adoption continued to have a negative relationship with delivery stability.

DORA’s evidence is observational, so it doesn’t prove that AI caused either result.
It does show that teams did not receive the same benefit from the same category of tools.
Teams working with loosely coupled systems and fast feedback reported better results, while teams constrained by tightly connected systems and slow processes saw less benefit.

DORA then examined which existing capabilities were associated with better AI outcomes.
Its [AI Capabilities Model](https://cloud.google.com/blog/products/ai-machine-learning/introducing-doras-inaugural-ai-capabilities-model) identified mature version control, frequent rollback and recovery, small batches, a clear focus on user needs, accessible internal information, and good internal platforms as important conditions.

None of those practices began with AI.
They already helped teams change software safely.
AI increases their value because it increases the speed and volume of possible changes.

A team with fast automated checks can reject a bad change while it is still small.
A team with reliable deployment and rollback can test a change without turning every release into a major event.
A team with a good internal platform can give developers and agents the same supported path into testing, security, deployment, and operations.

A team without those capabilities gets the same faster generation, but it has no faster way to decide whether the result belongs in production.
The multiplier still works.
It’s just multiplying unfinished work, instability, and the cost of finding mistakes later.

## Keep the team where judgment matters

Using AI as a multiplier doesn’t mean putting a person at the end of the process to approve whatever the agent produced.
People need to remain involved in framing the problem, comparing options, and deciding which risks are acceptable.

A [randomized experiment with 791 professionals at Procter & Gamble](https://pubsonline.informs.org/doi/pdf/10.1287/orsc.2025.20702) tested that distinction.
Participants worked on real product-development problems either alone or in teams, with or without AI.
An individual using AI performed about as well as a two-person team without it, but teams using AI produced the strongest overall results and were roughly three times more likely than the control group to produce a top-decile solution.

The researchers then separated the generation of ideas from the selection of the best idea.
AI increased the average quality of the ideas people produced.
Human-only teams were better at identifying their strongest idea, choosing correctly about 50 percent of the time compared with roughly 37 percent in the AI-assisted conditions.

<figure class="article-visual article-visual-wide">
  <img src="/images/writing/ai-team-generation-selection.png" alt="A three-stage view of the teamwork experiment: AI assistance raised average idea quality, human-only teams selected their best idea about 50 percent of the time compared with roughly 37 percent in AI-assisted conditions, and teams using AI were about three times more likely to produce a top-decile solution." width="1774" height="887" loading="lazy" decoding="async">
  <figcaption>AI improved the quality of generated ideas, while human collaboration retained an edge in selecting the best one. Teams using AI produced the strongest exceptional outcomes.</figcaption>
</figure>

The study was about product innovation, not software development, so it doesn’t prove that engineering teams will behave the same way.
It does offer a useful division of work.
AI can increase the number and quality of options available to a team, while the team applies the product knowledge, system understanding, and judgment required to select one.

In software work, that can mean using AI to investigate several approaches, trace how each one affects the system, and build enough of a solution to make the trade-offs visible.
The engineers aren’t waiting for a finished pull request so they can approve it.
They are using AI while they shape the change and decide what should be built.

That human capability still has to be developed.

A [small randomized study of 52 software developers](https://www.anthropic.com/research/AI-assistance-coding-skills) examined what happened when people used AI while learning an unfamiliar Python library.
The developers using AI finished slightly faster, but the difference was not statistically significant.
They scored 17 percent lower when tested on the code and concepts they had just used.

The people who delegated the task completely finished fastest and understood the least.
Developers who asked conceptual questions, requested explanations, or examined the generated code showed better understanding, although the study was too small to prove that those interaction patterns caused the difference.

This is where the multiplier argument matters most for leaders.
[Jeremy Utley argues](https://www.jeremyutley.com/blog/the-ai-multiplier) that organizations should not reduce investment in human capability while increasing investment in AI.
The available evidence makes that concern specific for engineering teams: AI can help less-experienced developers complete bounded work sooner, but careless delegation can also remove the debugging, code-reading, and problem-solving experience through which they become experienced developers.

If I were introducing AI to a team today, I’d start with kinds of work, not a target number of licences.

Start with work that has a clear result and a short path to proving whether that result is correct.
Measure how long the same team takes to complete it today, how often it returns as rework, and which failures appear after release.
Then introduce AI and compare the complete outcome, including verification and correction, rather than counting generated code or asking whether the developers felt faster.

When the result improves, make the working pattern available to the rest of the team.
When the result does not improve, change the way AI is being used or stop using it for that work.
As the team builds evidence across more kinds of work, the useful boundary will become clearer.

AI can multiply a team’s ability to explore and execute.
Whether that extra work can be verified and released safely depends on the team’s engineering practices.
Deciding which work should exist still takes the judgment of its people.

That’s a better basis for investment than turning licences into imaginary headcount.
