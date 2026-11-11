---
title: Code Review Isn't Dying. It's Changing Hands.
date: 2026-10-13
description: "When code gets cheap to produce, checking it becomes the expensive part, and the important one."
---

Thorsten Ball recently published [*What I believe about the future of software development*](https://thorstenball.com/blog/2026/09/19/what-i-believe-about-the-future-of-software-development/), predicting the end of code review, unit tests, the terminal, UI, and "good code". It's a fun read and it gets a few big things right. But I think it draws the wrong conclusion from the right observation.

Thorsten's starting point is that models now write more code than any human can read. Agreed. Line-by-line review of every pull request by a person is already fading, and it won't come back.

From there he concludes that code review and unit tests are on their way out. That's where it goes wrong. When code gets cheap to produce, checking it becomes the expensive part, and the important one.

## Tests aren't training wheels

The post calls unit tests training wheels: why keep them if you never fall over? The evidence is 900 lines of Arduino C that compiled cleanly and ran first time. I believe it. I've seen the same. But compiling isn't the same as being right, and running once isn't the same as running correctly next month, after the next change.

Tests aren't there because whoever wrote the code might fall over. They're how we say precisely what the software should do, in a form a machine can check. That matters more when an agent writes the code, not less. An agent with a good test suite can try, fail, fix and try again on its own. Without one, all it can do is tell you, confidently, that it's done.

The post also says, rightly, that most future bugs will be "you asked for the wrong thing" bugs. Tests are one of the best tools we have against exactly that. You can't delete the tests and keep the insight.

## Review moves, it doesn't disappear

Humans will review less code by hand. Agreed. But someone or something still has to ask whether the change is correct, whether it's secure, whether it does what was intended. More and more, that something will be a model, with a human checking the intent and the shape of the system rather than the semicolons.

Consider this scenario: an agent refactors the rate lookup in a mortgage application. To cut API calls, it caches the lender's prime rate for 24 hours. It compiles, the quotes look right, the demo goes fine. Then the Bank of Canada moves its rate at 9:45am, prime follows, and for the rest of the day every applicant is quoted yesterday's rate. Nobody reading a 2,000-line diff notices a cache setting. A test that says "a quote uses the rate in effect when the application is submitted" catches it every time. A model reviewer asking "does this change when the rate is read?" might too. The person's job is knowing that rate-change days matter at all.

That isn't the death of review. It's review evolving into something that finally scales to the amount of code being written.

<figure class="article-visual article-visual-wide">
  <img src="/images/writing/review-moves.svg" alt="Before, code went straight to a person who read every line and could not keep up. Now, code passes through tests and model review before a person checks intent and shape." width="1800" height="640" loading="lazy" decoding="async">
  <figcaption>Machines check the lines. People check whether it was the right change.</figcaption>
</figure>

## "Good code" was never just for humans

The 80-column jab is fair. Plenty of style rules were about human comfort. But clear structure, sensible names and small, well-separated pieces help models too. A model reading a tangled codebase burns more tokens, fills its context with noise and makes worse edits. Good code turns out to be cheaper code, whoever reads it.

## The terminal isn't going anywhere

People may type fewer commands. The tools aren't going away, though; they're becoming what agents use. Agents run shells, call CLIs, read logs and run builds all day. Models are great at deciding what to do. Deterministic tools are how anyone, model or human, finds out whether it worked.

## UI is for people

The post also predicts that UI will be generated on the fly, because so much of it only exists to help software understand what we want. I don't buy that. We've been generating UI on the fly for years, from schemas, server-driven layouts and page builders. What's new is generating it from intent, and that gives up what made the old way work: the same input gave the same screen every time, so people could learn it and teams could test it.

Most UI exists because people need to see things: compare flights side by side, check a form before they sign it, glance at a dashboard without asking it anything. A smarter model doesn't remove that need.

Where I think he's onto something is the layer underneath. More organizations are putting MCP servers in front of their APIs, which gives agents one way in to all of them instead of a custom integration for each. The APIs stay. MCP becomes the front door. What it doesn't do is make two systems agree on what a "customer" is. That reconciliation still has to happen somewhere, and now it happens inside an agent, which is one more thing that needs checking.

## Cheap models aren't a contradiction

The post says some people will be priced out by token costs, then a few paragraphs later asks why anyone would use a cheaper model. Both can't be true. In practice what decides it is the cost of a finished task, not the price per token. A capable model planning the work and a cheaper one doing the routine parts, with the result checked, is already a very good deal.

The cheaper end also keeps getting better. Open-weight models and the fast, low-cost tiers from the big labs are closing in on the closed frontier models, and work that needed a top model a year ago often runs fine on one of them today. Open weights can also run on your own hardware, which makes "priced out" even harder to argue.

## Where I agree completely

Knowing what to build, and why, matters more than ever. No test or model would have thought to ask about rate-change days; someone who understood mortgages did. That's also why copying another organization's process without the knowledge and skills behind it looks sillier every month: the process travels, the knowledge doesn't.

So yes, the craft is changing. When models write most of the code, the answer is to make checking automatic, constant and built into how the work gets done, so the stale rate gets caught by a test on an ordinary Tuesday, not by an applicant on the day the Bank of Canada moves.
