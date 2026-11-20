---
title: Your Engineering Metrics Assumed a Human
date: 2026-11-12
description: "Most engineering metrics quietly assumed a person wrote the code. Some still work. Some now measure something else, and the dashboard won't tell you which."
---

Nobody ever really wanted to know how many pull requests a team opened. They wanted to know whether the team was making progress, and PR count was a cheap number that seemed to move with it.

That link was always weak, and plenty of people said so long before AI wrote code. But it rested on an assumption nobody wrote down: a pull request took a person real effort, roughly in proportion to its size and difficulty. Cheap code generation removes that assumption, and with it the one thing keeping the number loosely honest.

What bothers me is how quietly it happens: the metric still computes, the dashboard still renders and the number might even go up, but it's no longer tracking the thing you cared about.

## A team that got faster

Take a team of six running a payments service. Before they adopted coding agents, a typical month looked like this:

- 12 deployments, about three a week
- 4 days from commit to production
- 1 deployment that caused a failure in production
- 3 hours to recover from it
- 60 pull requests merged
- 30 story points of velocity
- 3 hours, median, from opening a PR to approval

Six months after adopting agents, the same team's month looks like this:

- 40 deployments, about two a day
- Under a day from commit to production
- 6 deployments that caused a failure in production
- 1 hour to recover, on average
- 140 pull requests merged
- 48 story points of velocity
- 20 minutes, median, from opening a PR to approval

Show the first list to a leadership team and the second one looks like a win. Most of the numbers moved the right way. But one went from 1 to 6, and whether this team is better off depends almost entirely on that number.

## Which metrics still work

The question I ask of any metric now is simple: does it measure the system, or the people?

**DORA's throughput metrics still work.** Since 2024, DORA has grouped three metrics as throughput:

- **Deployment frequency** is how often you ship. Our team went from 12 a month to 40.
- **Change lead time** is how long a change takes from commit to production. Four days became less than one.
- **Failed deployment recovery time** is how long it takes to recover when a deployment breaks something. Three hours became one, partly because small changes are easier to roll back.

All three describe the pipeline, the gates and the organization. The clock starts at commit, so none of them cares whether a person or a model wrote the code. If anything, they matter more now.

On these numbers, though, a faster pipeline and a thinner review look exactly the same. DORA's 2025 research found that AI adoption improves throughput but often costs stability where the foundations aren't solid. That's why DORA has always said not to read throughput alone.

**The instability metrics still work too, with a caveat.** DORA tracks two:

- **Change fail rate** is the share of deployments that cause a failure in production. Our team went from 1 in 12, about 8%, to 6 in 40, 15%. The rate nearly doubled. In absolute terms it's worse: six incidents a month instead of one.
- **Deployment rework rate**, added in 2024, is the share of deployments that were unplanned and happened because of a production incident. If five of those 40 deployments were hotfixes nobody planned, that's 12.5%, or one deployment in every eight spent cleaning up after the others.

These still measure something real. The caveat is what's feeding them. When the same model writes a change and its tests, logic that's wrong but looks right can pass a test suite that shares the same blind spots. That isn't a new failure mode, but agents make it easy to produce at volume. Your change fail rate can hold steady while the mix of reasons behind it shifts completely.

**Activity counts don't work.** Commits, lines changed and PRs merged were always, in practice, readings of human effort. Our team's merged PRs more than doubled, from 60 to 140. Is that more value shipped, or the same work cut into smaller pieces, or a lot of code nobody really read? The count can't tell you. Lines changed now measures how much text was generated. Commit and PR counts measure how finely it was sliced.

Story points break in a different way. They were calibrated against how hard work felt to a person. When an agent does the hard-feeling part, the same estimates finish faster, and velocity climbs from 30 to 48 without the work getting any bigger.

**Review metrics have become ambiguous.** Time-to-approval used to mean responsiveness, and lower was better. Our team's dropped from three hours to twenty minutes. Picture a 600-line generated PR approved four minutes after it opened. Maybe the reviewer knew that code well and the change really was simple. Maybe they skimmed the summary and clicked approve. Both have always happened. What's changed is how often it's the second one. The same number now covers a strength and a failure, and you can't tell which from the number alone.

## What I'd measure instead

Three things, and one warning.

**Reverts per change, and how long after merge they happen.** Change fail rate counts failures per deployment. When one deployment bundles a dozen agent-written changes, that hides a lot. Counting reverts per change, and how long they took to happen, tells you whether code is getting backed out after the review that should have caught it. A revert two weeks after merge says something very different from one two hours after. Watch the denominator, though: a flood of trivial changes will push the rate down without anything improving.

**The share of changes with a complete provenance record.** For every change: what it was meant to do, who or what wrote it, who accepted it and on what basis, and what effect it was expected to have. Whether all four are filled in is something you can count. Whether the "accepted on what basis" answer is honest isn't. So this tells you whether a team is ready to answer questions about its code, not whether the code is good.

**How often changes surprise you.** Before merge, write down what you expect a change to do in production. Afterwards, count how often something happened that nobody predicted. Our payments team might predict that "checkout latency stays under 200ms and refund volume doesn't change," then find refunds doubled because an agent changed a rounding rule. It's the only metric here that directly measures whether the team understood what it shipped. Watch for predictions getting vaguer over time. "Nothing should break" can never be wrong.

The warning: don't turn any of these into targets. Every one of them can be gamed. The metrics they replace failed twice, first when they became targets and again when the assumption underneath them disappeared. Use these when a number moves and you want to know why, not to grade teams.

## The failure I worry about

A metric that visibly breaks gets noticed. The dangerous one keeps producing believable numbers while it measures something else. Velocity up 60%, PRs merged more than doubled, approvals in twenty minutes instead of three hours. That's a team that got faster. It's also a team building up code nobody has really looked at. On those three numbers alone, you can't tell them apart.

More metrics alone won't fix that. What I'd do is go through every number on the wall, ask what it assumed about who was doing the work, retire the ones whose assumption no longer holds, and make sure no speed number goes up without a consequence number next to it. If our payments team had seen 12 deployments become 40 alongside 1 failure becoming 6, the conversation would have been very different.
