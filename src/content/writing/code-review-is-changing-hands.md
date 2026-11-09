---
title: Code Review Isn't Dying. It's Changing Hands.
date: 2026-10-13
description: "When code gets cheap to produce, checking it becomes the expensive part, and the important one."
---

Thorsten Ball recently published [*What I believe about the future of software development*](https://thorstenball.com/blog/2026/09/19/what-i-believe-about-the-future-of-software-development/), predicting the end of code review, unit tests, the terminal, open source as we know it, and "good code". It's a fun read and it gets a few big things right. But I think it draws the wrong conclusion from the right observation.

The observation: models now write more code than any human can read. Agreed. Line-by-line review of every pull request by a person is already fading, and it won't come back.

The conclusion: so checking the code stops mattering. That's where it goes wrong. When code gets cheap to produce, checking it becomes the expensive part, and the important one.

## Tests aren't training wheels

The post calls unit tests training wheels: why keep them if you never fall over? The evidence is 900 lines of Arduino C that compiled cleanly and ran first time. I believe it. I've seen the same. But compiling isn't the same as being right, and running once isn't the same as running correctly next month, after the next change.

Tests aren't there because the author might fall over. They're how you say precisely what the software should do, in a form a machine can check. That matters more when an agent writes the code, not less. An agent with a good test suite can try, fail, fix and try again without you. Without one, it can only tell you it's done.

The post also says, rightly, that most future bugs will be "you asked for the wrong thing" bugs. Tests are one of the best tools we have against exactly that. You can't delete the tests and keep the insight.

## Review moves, it doesn't disappear

Humans will review less code by hand. Agreed. But someone still has to ask whether the change is correct, whether it's secure, whether it does what was intended. More and more that someone will be a model, with a human checking the intent and the shape of the system rather than the semicolons.

That isn't the death of review. It's review that finally scales to the amount of code being written.

<figure class="article-visual article-visual-wide">
  <img src="/images/writing/review-moves.svg" alt="Before, code went straight to a person who read every line and could not keep up. Now, code passes through tests and model review before a person checks intent and shape." width="1800" height="640" loading="lazy" decoding="async">
  <figcaption>Machines check the lines. People check whether it was the right change.</figcaption>
</figure>

## "Good code" was never just for humans

The 80-column jab is fair. Plenty of style rules were about human comfort. But clear structure, sensible names and small, well-separated pieces help models too. A model reading a tangled codebase burns more tokens, fills its context with noise and makes worse edits. Good code turns out to be cheaper code, whoever reads it.

## The terminal isn't going anywhere

People may type fewer commands. The tools aren't going away, though; they're becoming what agents use. Agents run shells, call CLIs, read logs and run builds all day. Models are great at deciding what to do. Deterministic tools are how anyone, model or human, finds out whether it worked.

## Cheap models aren't a contradiction

The post says some people will be priced out by token costs, then a few paragraphs later asks why anyone would use a cheaper model. Both can't be true. In practice what decides it is the cost of a finished task, not the price per token. A capable model planning the work and a cheaper one doing the routine parts, with the result checked, is already a very good deal.

## Where I agree completely

Knowing what to build, and why, matters more than ever. Big-company process copied into a five-person startup looks sillier every month. And a lot of the UI we've built really is a workaround for software that couldn't understand what we meant.

So yes, the craft is changing. But the answer to "models write most of the code" isn't to stop checking it. It's to make checking automatic, constant and built into how the work gets done.
