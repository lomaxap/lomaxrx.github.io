---
title: Predicate
description: What would the holy grail of case management software look like?
date: 2018-07-05
background: white
live: true
---
---
*'predəkət* - the part of a sentence or clause containing a verb and stating something about the subject

---

I'm one of those folks that wants everyone to know how to build software to solve their problems. But then I find myself spiraling into dependency hell with npm, and I think, "No, yea. Not everyone should have to go through this."

But my underlying philosophy remains: **the people best equipped to solve a problem are more often the people knee-deep in it.** And a lot of the times those people aren't software engineers. When it comes to social services software, it would be better if the people with degrees or experience in social work devised the software solutions. So what would software that allowed social workers to solve their own problems look like?

I guess an easier question for me is: **after all the workflow/process design, at the end of the day, isn't this all we need? :**

![screen shot of predicate app](/static/images/post-images/pdt-input.png)

<img src="/static/images/post-images/pdt-actions.png" style="max-width: 250px" class="right" />

It's an app with a contact page and contact information. And attached to that are "actions" you can take with that contact. Maybe submit a referral, or start the application process for affordable housing. Or just have a conversation. You'll want to take notes, and document outcomes or conclusions, and maybe take subsequent actions. But isn't it just: people with needs and the things you do to meet them?

**And shouldn't the social worker be the one to define what those things being done are?**

As a part of my part time product management course at General Assembly (GA), I decided to see if this idea had any legs. I wanted to come up with an app that is somewhere between the flexibility of completely custom software and an off-the-shelf solution with baked-in workflows, like [Efforts to Outcomes](https://www.socialsolutions.com/software/eto/).

In other words, **how could I make an app that was potentially as expressive as programming, but provided enough guidance to keep you from going off the rails?**

[Demo](http://lomaxrx.github.io/pdt)

## Speak naturally about your work

My central idea was to create three types of data that map well to how we naturally talk about what we do: People, Actions, and Things. Subjects, verbs, and objects.

<video  autoplay muted loop playsinline class="right" style="margin-top:60px;">
  <source src="/static/images/post-images/pdt-relate.mp4" type="video/mp4">
  <source src="/static/images/post-images/pdt-relate.ogg" type="video/ogg">
</video>

The social worker begins by developing a glossary of terms that are relevant to organization as well attributes (data) for those terms. Maybe they call people who come in looking for services a **Client** with a **name**, **address**, **gender** etc, and maybe they call people who take up leadership opportunities a **Leader** that has **interest areas** and **availability.** They define some actions those people take, like **Receives** or **Submits.** And finally define some things: **Affordable Housing Application**, **Rental Assistance.**

It then becomes a process of constructing simple sentences that describe what you do. **Client** > **Receives** > **Rental Assistance.** And those sentences translate into an interface (image \#1) you can use.

<video autoplay muted loop playsinline class="right">
  <source src="/static/images/post-images/pdt-glossary.mp4" type="video/mp4">
  <source src="/static/images/post-images/pdt-glossary.ogg" type="video/ogg">
</video>

## Potential Benefits

I'm still kind of excited about this idea.

It would provide a framework to solve the specific needs of an organization with a general solution. The bulk of work shifts from the technical implementation to focusing on describing and designing your processes. This would also allow us to create portable, shareable schemas for an organization's processes (the sentences are just JSON objects after all), and give social workers the ability to share their current processes with colleagues and collaborate (imagine a github for social work processes).

Additionally, with this sort of solution, your software *is* your knowledge base. **Your software would reflect how you speak instead of how you speak reflecting your software.** So when you onboard new staff and they log in for the first time, they can discover how your organization works and thinks just by exploring your glossary of terms and your software.

I kind of think of nonprofits as laboratories for good government policy and programs. They're scrappy places where people innovate on doing good. I'd like to see software that enables nonprofits to experiment, iterate, and change as quickly as they have in the past, but with modern tooling.
