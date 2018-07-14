---
title: Policy Paper Automation
description: What happens when you attempt to  automate policy paper layout for a  think tank?
date: 2018-07-03
live: true
---

---

Last year (2017) New America published 70 policy papers. This year (2018), they're slated to publish 90.

---

Policy papers are ultimately just Word documents formatted as a PDF. But each is laid out in InDesign by a New America communications staff member and, depending on the length and number of images, can take anywhere from 3 hours to a day and a half.

In addition to being a huge rate-limiting step during the publishing process, PDFs are also simply not that popular. Historically, download rates could be as low as 5 - 10 downloads for a New America policy paper. And they aren't mobile-friendly, so they ultimately result in the majority of New America content being inaccessible.

In April 2018, our communications team made the decision to automate that process.

> ## **I'm going to take a moment to impress upon you just how big of a deal this is for a think tank.**

<br/> Policy papers are a think tank's bread & butter. They are historically what analysts circulate on the hill almost like currency, and they are what define a research team's work. An argument can be made that, although only 5 people downloaded a PDF, if it was the right 5 people, it was worth it. We knew we could be facing a full-on staff revolt if this panned out poorly.

Before going down this route, we weighed the pros and cons and settled that the gains from automating far outstripped the losses. Our PDF Generator (known internally as **Petey F.**) has shortened the publishing time from final copy to PDF to as little as half an hour, allowing the comms team to focus on what ultimately matters: helping to produce high quality, well researched content, developing compelling graphics/data viz, and sharing it with the world.

## Primary Motivation

The decision to automate wasn't just about staff time. The full contents of a paper only existed in a PDF, making it inaccessible on mobile and not easily shareable. We wanted to also support publishing the paper's entire contents online but also still publish PDFs, doubling our output without also doubling our staff (in fact, 2 staff that regularly laid out PDFs left the organization after launch, but we were still able to meet output demands).

We wanted the primary focus of publishing to be creating engaging web products. Our magazine-style "In Depth" series were some of our most trafficked content as it allowed for wide-column interactives/graphics and provided a chapter-based interface&mdash;enabling writers to split their work into digestable chunks. There's no reason all policy papers couldn't have these features, so our focus was on building a publishing platform that was flexible enough to accommodate chapter-based, narrative work but also full-fledged interactives.

---

**Technical sidenote**

It turns out that the X in `.docx` stands for `XML` (who knew?! I didn't until this project), so Word documents are structured data that can be parsed and imported into a CMS. This was an important step as it allows comms staff to only have to worry about editing a Word document, the publishing (from final copy to web version to PDF version) is handled almost entirely by our Python-based CMS, [Wagtail](https://wagtail.io). The PDF lay out is handled by [WeasyPrint](https://weasyprint.org/).

The front-end is build with react&mdash;effectively it's own SPA&mdash;which allows me to easily swap out components based on the needs of the project.   

---

## Sacrifices

We did an audit of around 30 policy papers from the last year, 75% of which were just text with few custom-designed elements that couldn't be accommodated by an automated layout.

There were, however, some policy papers that were meticulously laid out. We're talking tweaking leading and kerning on specific pages to make the copy fit, or creating photo grids for image-heavy pieces. These are things that, as of now, we can not be accommodate with *Petey*. We settled that for the projects where the primary deliverable was a well-crafted PDF, we could rely on contracts with graphic designers. These are relatively rare and allow us to more efficiently allocate staff time.  

## Conclusion

We'll be collecting analytics data to determine just how much more engagement we get with policy papers. As far as staff reception, we did a lot of groundwork trying to reorient staff to a more digital-focused content strategy. There were many that felt that the handcrafted PDFs were central to New America's brand, but we believe that focusing on handcrafted online experiences will ultimately result in more exposure.  
