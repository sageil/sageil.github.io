---
title: Faster Code Won't Fix a Slow Pipeline
date: 2026-01-20
description: "AI speeds up one stage of delivery. The teams that benefit are the ones that rebuild the rest around it."
---

Most teams adopted AI the same way. They kept the software development life cycle they had, with its stages, handoffs and ceremonies, and gave developers a coding assistant. Code got faster. Delivery mostly didn't.

That's not a failure of the tools. It's what happens when you speed up one station on an assembly line. The parts pile up at the next one.

<figure class="article-visual article-visual-wide">
  <img src="/images/writing/assembly-line-pile-up.svg" alt="A delivery line with four stations. Coding with AI runs fast, work piles up in front of review and QA, and release waits with little reaching it." width="1800" height="620" loading="eager" decoding="async">
  <figcaption>Speeding up coding doesn't speed up delivery. It moves the queue to the next station.</figcaption>
</figure>

## The bottleneck moves

A traditional SDLC is a series of queues. Requirements wait for clarification, code waits for review, changes wait for testing, releases wait for a window. Each queue was sized for how fast humans wrote code.

Drop a coding agent into that pipeline and the code queue empties. Every queue after it fills. Reviewers face twice the pull requests. QA gets changes faster than it can test them. Product owners get asked questions they haven't thought about yet, because the developer reached the edge of the requirement on day one instead of day eight.

The organizations getting real value don't just add AI to the pipeline. They resize the pipeline so review, testing and release can keep pace with what's now being produced. Sometimes that means more automated checks. Sometimes it means smaller changes. Sometimes it means admitting that the slowest part was never the typing.

## From stages to loops

Some teams are going further and dropping the staged model altogether. AWS has been publishing its [AI-Driven Development Life Cycle](https://aws.amazon.com/blogs/devops/open-sourcing-adaptive-workflows-for-ai-driven-development-life-cycle-ai-dlc), or AI-DLC, which replaces handoffs between phases with continuous collaboration between people and AI.

Two of its practices are worth borrowing even if you never adopt the rest. In mob elaboration, the team sits together while AI turns a business intent into requirements, stories and units of work, and the team challenges every proposal as it appears. In mob construction, the team works through architecture and code with AI agents in real time, settling design questions as they come up instead of in a review three days later.

What I like about both is that they put human judgment at the moment it's cheapest to apply. A wrong assumption caught while the requirement is being written costs a sentence. The same assumption caught in QA costs a sprint.

<figure class="article-visual article-visual-wide">
  <img src="/images/writing/stages-vs-loops.svg" alt="Staged handoffs pass work from requirements through design, code and review to QA, where a wrong assumption is found and sent back to the start. In mob elaboration, the team and AI loop continuously and challenge the assumption as it is written." width="1800" height="600" loading="lazy" decoding="async">
  <figcaption>The earlier a person can challenge an assumption, the less it costs to fix.</figcaption>
</figure>

## Measure the outcome, not the output

AI makes output metrics useless overnight. Lines of code, commits and pull requests were always weak signals. Now an agent can inflate any of them in an afternoon.

The measures that still mean something are the ones about the system: how often changes fail in production, how long it takes to recover, how quickly an idea reaches a customer, and whether the codebase is getting easier or harder to change. If AI is helping, those numbers improve. If they don't move while activity goes up, you're generating work, not value.

McKinsey's recent research on AI in software development points the same way. The organizations it classed as top performers had tied their AI goals directly to how developers and product managers are evaluated, rather than treating AI as a side experiment. I'd read the exact numbers with care, since the top performers are defined by the same self-reported outcomes the study then uses to explain them. But the underlying point holds: what you measure is what AI ends up optimizing.

## Draw the line clearly

The teams I've seen do this well are explicit about who does what.

AI handles the execution-heavy, repetitive work: boilerplate, test scaffolding, migrations, log analysis, first drafts of documentation. It's fast, it doesn't get bored, and mistakes in this work are usually easy to catch.

People keep the work where being wrong is expensive and hard to detect: architectural direction, edge cases the tests don't cover, security sign-off, and the business context that decides whether a feature should exist at all.

<figure class="article-visual article-visual-wide">
  <img src="/images/writing/ai-human-division.svg" alt="AI handles boilerplate, test scaffolding, migrations, log analysis and first-draft documentation. People keep architectural direction, edge cases the tests miss, security sign-off and whether a feature should exist. The line between them moves only where a reliable check exists." width="1800" height="720" loading="lazy" decoding="async">
  <figcaption>Delegate the work you can check. Keep the work that is expensive to get wrong.</figcaption>
</figure>

That line will move as the tools improve. It should move deliberately, though, and only where the team has a reliable way to check the result. Without that check, you haven't delegated the work. You've stopped looking at it.

## The life cycle is the product now

For years the SDLC was background, the process you followed so the real work could happen. With AI it's the thing that decides whether the investment pays off. The same tools produce very different results depending on the system around them.

So the question for engineering leaders isn't which AI provider and models to give your team. It's what your delivery system looks like when writing code is no longer the slow part, and whether you're willing to rebuild it around that.
