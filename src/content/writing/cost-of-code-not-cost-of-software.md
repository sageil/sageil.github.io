---
title: AI Changed the Cost of Code, Not the Cost of Software
order: 8
description: "Fifty years of software economics in one equation, and what AI does to each part of it."
---

In 1998 Walker Royce summed up software economics in a single equation. It multiplies the people you have, the tools they work with and the quality you need by how much software you're building, raised to a power set by your process.

<p class="equation">Effort = Personnel × Environment × Quality × Size<sup>Process</sup></p>

That exponent is usually greater than one. Software has a diseconomy of scale: double the size and you more than double the effort, because every new piece has to fit with every piece already there.

It's a useful lens for AI, because it shows which parts of the cost AI actually touches, and which parts it doesn't.

## Three generations of writing less code

Royce described three generations of software economics.

In the conventional era, the 1960s and 70s, nearly everything was custom: custom languages, custom tools, custom everything. Projects were reliably over budget and behind schedule.

In the transition era of the 80s and 90s, teams started building on commercial components such as operating systems, databases, networking and GUI frameworks. Roughly 30% of a system came off the shelf. Formal estimation models like [COCOMO](https://en.wikipedia.org/wiki/COCOMO) appeared, but systems were getting complex faster than estimates were getting better.

In the modern era the ratio flipped. Open source, frameworks, cloud services and automated pipelines meant around 70% of a system was assembled rather than written. Iterative delivery and early attention to architecture made projects far more predictable.

<figure class="article-visual article-visual-wide">
  <img src="/images/writing/software-generations.svg" alt="Royce's three generations: conventional software was 100 percent custom code, the transition era about 70 percent custom and 30 percent components, and the modern era about 30 percent custom and 70 percent components. A fourth column for the AI era notes that custom code is now cheap to write and asks whether it is cheap to own." width="1800" height="670" loading="lazy" decoding="async">
  <figcaption>Every gain came from writing less custom code. AI makes custom code cheap to write again.</figcaption>
</figure>

Notice what drove each improvement. Not faster typing. Less custom code. The biggest lever on the size term was never writing it in the first place.

## AI pulls the size lever the other way

AI changes this in an odd direction. It makes custom code nearly free to produce. Need a parser, a client, a migration script? Ask for one. The pressure to reuse, to reach for a library, to keep the system small, quietly weakens.

But the exponent applies to size no matter who wrote the code. A system that grows because generating code is cheap still has to be understood, integrated, tested, secured and maintained. The diseconomy of scale was never about typing. It came from coordination, from every new piece interacting with every old one. AI doesn't remove that. If anything, it lets teams reach the expensive end of the curve faster.

## Term by term

Going through the equation makes the picture clearer.

**Personnel.** Smaller teams produce far more than they used to. Royce already argued that a balanced team of capable people beats a large one, and AI strengthens that argument. As I wrote in [AI Multiplies What You Bring](/writing/ai-multiplies-what-you-bring/), it scales whatever the team brings, good and bad.

**Environment.** This is where AI helps most cleanly. Automated review, test generation, faster feedback in the editor and in the pipeline all make catching mistakes cheaper. The best use of AI may be in the checks, not the code.

**Quality.** Here AI adds a new kind of risk. Generated code looks finished. It compiles, it's well formatted, it comes with a confident explanation. When it's wrong, it's wrong plausibly. That shifts budget toward review, security and validation, work that used to be a smaller share of the cost.

**Size.** As above, it goes up unless someone pushes back.

**Process.** The exponent is where the outcome is decided. A team that rebuilds delivery around fast generation, with small changes, strong automated checks and quick feedback, can keep the exponent in check while the other terms improve. A team that drops AI into an old pipeline gets more code, more queues and a steeper curve. I made that case in [Faster Code Won't Fix a Slow Pipeline](/writing/faster-code-wont-fix-a-slow-pipeline/).

<figure class="article-visual article-visual-wide">
  <img src="/images/writing/effort-equation.svg" alt="Royce's equation, Effort equals Personnel times Environment times Quality times Size to the power of Process. AI helps personnel and environment, adds risk to quality, and pushes size up. The process exponent decides the outcome." width="1800" height="600" loading="lazy" decoding="async">
  <figcaption>AI improves some terms and worsens others. The process exponent decides which wins.</figcaption>
</figure>

## A new line on the budget

AI also adds a cost the equation never had: the model itself. Tokens, API calls, licences and compute are now a real share of engineering spend, and unlike salaries they move with every change in how people work. Spending shifts from people hired up front toward usage billed every month. I covered where that money goes in [What Are AI Tokens, and Why Do They Cost So Much?](/writing/what-are-ai-tokens/)

That changes what estimation has to measure. Story points and velocity estimated the effort of writing code. The constraints now are elsewhere: how fast the team can review, how much the model work costs, and how clearly the requirement was understood before anyone generated anything.

## The five levers, revisited

Royce listed five ways to improve software economics. All five still hold. AI just changes how you pull them.

1. **Reduce size.** Still the strongest lever, and now the one most at risk. Generate less, reuse more, delete freely.
2. **Improve the process.** Rebuild delivery so review and testing keep pace with generation.
3. **Improve the team.** Invest in judgment and domain knowledge, which AI multiplies.
4. **Improve the environment.** Put AI into the checks, not only the editor.
5. **Settle quality early.** Get architecture and requirements right before code is cheap to produce in volume.

## Cheap code, expensive software

Every generation in Royce's model got cheaper by writing less code. AI is the first one that makes writing code itself cheap, and that's genuinely new. But code was never the expensive part. Understanding, integrating and owning it was.

Writing the wrong feature faster still wastes money. It just wastes it sooner.
