---
title: It’s Hard to Learn a Tool You Think Might Replace You
date: 2025-05-13
description: How understanding context and tools helped my teams experiment with AI and trust their own judgment around it.
---

After introducing AI to my teams at MCAP, I started seeing the same pattern.
For most developers on those teams, using AI meant generating unit tests.
If the output worked, they kept it and moved on.
If it didn’t, they changed the prompt and tried again.
Before long, most of our conversations were about phrasing: how to ask the question, get a better answer, or make the result usable.
We were using AI, but the prompt-and-retry loop was not teaching us how it actually worked.

At the same time, some team members were worried that AI was there to replace them.
That changed how they approached it.
Experimenting no longer felt like learning a new tool.
It felt like helping prove that the tool could do their job.

## What the team needed

Telling the team to use AI more would not have solved either problem.
They needed to understand what was happening well enough to make their own decisions about it.
A prompt was only one part of that.
The model also needed the right context for the task, and an agent needed tools before it could read a file, run a command, or change code.

I started wondering whether the way to make developers curious about AI was to stop explaining it and give them code they could take apart.
So I wrote KodaCode.

<figure class="article-visual article-visual-wide">
  <img src="/images/writing/agent-harness-visible.svg" alt="A developer request enters the harness, where context and tools feed the model. The model produces a code change, the developer judges it, and review loops back to the request by changing the context or tools and trying again." width="1800" height="680" loading="eager" decoding="async">
  <figcaption>KodaCode showed the team the context, the model and the tools between a request and a code change.</figcaption>
</figure>

## Following a result backward

KodaCode made the hidden machinery of AI-assisted coding visible: the context sent to the model, the tools available to the agent, and the steps that turned a request into a code change.
Instead of having another conversation about prompts, we could trace the whole path together and separate what the model contributed from what the surrounding system made possible.

Once we could see those pieces, a failed attempt stopped looking like a bad prompt.
We could follow the result backward.
What context had the model received?
Did it contain the information the task required?
Did the agent have a tool that could act on the model’s suggestion?
Each question gave us something concrete to investigate instead of another prompt to rewrite.

## Judgment stays with the developer

Good results became easier to question too.
A useful answer did not prove that AI could replace a developer, and a poor answer did not prove that it was useless.
Both showed us how the model, the surrounding system, and the developer’s judgment shaped the result.

No explanation from me was going to remove the worry about being replaced, and I did not want to dismiss it.
Understanding the system gave them better footing.
They could decide where AI helped, where it needed supervision, and where it did not belong.
