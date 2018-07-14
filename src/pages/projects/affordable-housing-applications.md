---
title: Affordable Housing “MegaApp”
description: How would you integrate a single  housing application into an existing  nonprofit infrastructure?
date: 2018-07-04
live: true
---
## Overview

Applying to affordable (Section 8) housing is a laborious process in DC. There are around 20 buildings in the city, each with their own room options, availability, eligibility, and paper application process. [Bread for the City](http://breadforthecity.org) (Bread) staffs case managers to help applicants navigate this process which involves filling out multiple paper applications with duplicate information.

To simplify this process, a group of developers and designers at Code for DC <a href="http://sarahfathallah.com/district-housing/" target="\_blank">studied the problem</a> and developed an initial <a href="https://github.com/codefordc/districthousing" target="\_blank">rails app</a> (affectionately known inside Bread as “MegaApp”) that allows an applicant to fill out information once and generate a PDF application for each housing unit.

## Integrating with Existing Software

Tasked with implementing the Code for DC rails app at Bread, I ran into a number of issues:

1. **Resources**

> Where should the app be hosted? On internal servers? Or should we provision a heroku instance? How would either be maintained?

2. **Workflow**

> At what step in Bread's housing application process should the rails app come in? And how would a case manager seamlessly move from their case management software interface (a Salesforce app) to the rails app, then back to Salesforce to upload the PDFs?  

3. **Sharing Data**

> The rails app comes with its own postgres database. I didn't want case managers to have to fill in information that already exists in Salesforce, so data would have to be shared between Salesforce and the rails app.

<!-- Once to `POST` client information to the rails app, then again from the rails app to confirm and maybe even send back a PDF payload. -->

<video autoplay muted loop playsinline>
  <source src="/static/images/post-images/megaapp.mp4" type="video/mp4">
  <source src="/static/images/post-images/megaapp.ogg" type="video/ogg">
</video>

After talking and iterating through options with Code for DC and Bread's case managers, I concluded the best solution had 3 parts:

1. A react interface for the form (above) that can be hosted anywhere
2. A PDF-filling microservice built off of Code for DC's codebase and hosted on AWS lambda. (This takes client data and returns a PDF)
3. A Salesforce controller that stitches the 2 together and handles uploading PDFs to Salesforce

This setup allowed me to use Bread's existing infrastructure by simply throwing a react app into a salesforce (visualforce) page that was neatly integrated into Bread's workflow&mdash;passing salesforce data as the app's initial state. The data is sent from Salesforce to the lambda service to fill out the PDF, and Salesforce also handles the response, uploading the PDFs in the background. No new interface, no extra database, minimal overhead from a lambda service, and a single API endpoint that ties it all together 👐.

Code for DC's implementation, while developed for Bread, was open and available for anyone to use outside of the organization since it wasn't tightly integrated with some private software&mdash;a huge benefit that I didn't want to lose. This setup was designed with the idea that the front end can be used freely by the public as a static site ([see a demo](https://lomaxrx.github.io/districthousing-force/)), and the microservice is also available for any organization to integrate with their software.

## Lessons Learned: What would a healthy ecosystem of civic/human services tech look like?  

According to [NTEN's 2017 survey](https://www.nten.org/wp-content/uploads/2017/05/Staffing_Report2016_v13.pdf), most nonprofits are doing pretty well with tech. 70% are happy with their current information systems, and most of those have at least 1 FTE dedicated to maintaining it.

Going through this process with Bread, **I've come to think that that if we solve very specific problems with standalone, siloed apps, we miss an opportunity for other nonprofits to integrate what we've built more seamlessly into their existing business processes.**

I'm imagining a future with tech-enabled nonprofits solving the problems they know how to and are good at solving, generalizing that solution as software, and making the service available to others as a series of microservices. Like Google's APIs, but for human services needs.

In the case of Bread, the case managers there know when DC Section 8 housing is available and maintain up-to-date PDF applications with fillable fields. They know what data needs to be collected, who's eligible, and how to submit the applications. And now they can package all that up as an app with an endpoint for everyone to use. That feels like the future of nonprofits to me: part social services agency, part tech company.  
