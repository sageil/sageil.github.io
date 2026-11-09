---
title: The AI agents were working in parallel. I wasn’t.
date: 2025-08-19
description: A Saga-style approach to coordinating Codex agents across multiple repositories without making the developer track every session.
---

A friend was telling me how his team uses AI across hundreds of microservices, some shared by several business units.

<div class="article-dialogue" aria-label="A conversation with a friend">
  <p><span class="dialogue-speaker">Friend</span><q>The problems start when one feature touches five or six repositories.</q></p>
  <p><span class="dialogue-speaker">Me</span><q>So what do you do?</q></p>
  <p><span class="dialogue-speaker">Friend</span><q>We tried running an agent in each one.
  It looked great at first.
  Then the developers became agent coordinators.
  They were moving decisions between terminals and trying to remember which agent owned what.</q></p>
</div>

I wanted to see how bad that could get, so I opened Codex across five repositories.
A couple of hours later, my eyes hurt, and I couldn’t remember a decision I had made 20 minutes earlier.
I’ve never used `git log` and `git reflog` so much in my career.
The agents were working in parallel, but I was bouncing between them and trying to keep the whole change in my head.

<figure class="article-visual article-visual-wide">
  <img src="/images/writing/five-agents-one-human.png" alt="Five repository agents converge on one human coordinator, who must track changes, resolve conflicts, make decisions, retain context, and carry the load." width="1883" height="835" loading="eager" decoding="async">
  <figcaption>Parallel execution moved the bottleneck from the repositories to the person coordinating them.</figcaption>
</figure>

## Parallel is not the problem

Around the same time, I found a LinkedIn article by someone who had processed 40.81 billion tokens with Claude and Codex in ten working days.
The number that stayed with me wasn’t 40 billion.
It was eleven agents per session.
I was struggling with five, so who was tracking the work of eleven?

Managing that many agents across repositories turns the developer into the scheduler for a small distributed system.
Each agent has its own context, decisions, progress, and failures.
Someone still has to keep the work aligned and notice when an assumption in one repository breaks another.

## A coordinator instead of a juggler

I kept coming back to the Saga pattern.
A Saga coordinator manages the larger process while each participant owns its local work.
What if multi-repository development could work the same way?

That question became RepoChord.

## One plan, several repositories

Instead of getting better at juggling terminals, I moved the coordination into one Codex session.
I describe the feature once, and the coordinator turns it into a shared contract and a task for each repository.
I review the complete plan in one place, correct anything that is wrong, and approve it.
Only then do the repository agents start.

Each agent works inside an isolated repository and returns its result to the coordinator.
When they finish, I get one report with the commits, test results, blockers, retries, and token use.
I can see what completed, what failed, and what still needs a decision before I choose whether to integrate the work.

Moving everything into one session could have created another kind of overload.
If the coordinator collected every command, diff, and intermediate result, its context would grow with every agent.
Instead, each agent keeps that detail inside its own session and returns only a compact result.
The coordinator sees enough to manage the feature without carrying every step that produced it.

## Failure stays visible

Failure needed a different rule.
A traditional Saga can run an automated compensation when one participant fails.
Agent work is nondeterministic, so I left compensation out.
Changes remain isolated until I approve them, and nothing is pushed automatically.

## Measure value, not activity

I can limit how many agents run in parallel, choose their models and reasoning effort, and control retries.
Those settings tell me how the work is running, but not whether it is useful.

The number I care about is the cost of producing one reviewed and integrated feature.
That includes Codex usage, coordinator overhead, human review, failed attempts, and rework.
Agent count and token volume are interesting, but they do not tell me whether the work was worth doing.

I built RepoChord so I could stay focused while several agents worked across the system.
The agents can work in parallel without making the developer track every session or keep the entire change in their head.
