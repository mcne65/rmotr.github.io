---
layout: post
title: "First Demo Day wrap up"
category: announcements
description: "We hosted our first Demo Day. We tell you what happened."
fbauthor: "https://www.facebook.com/santiago.basulto"
author:
    name: "Santiago Basulto"
    link: "https://twitter.com/santiagobasulto"
---

Yesterday we had our first Demo Day ever. It was an amazing and exciting experience that we want to share with all the community. Demo Day is the culmination of our Advanced Python Programming course. It is a final project that our students have to build to graduate from the course where we try to teach things that are not just taught in books. If you want to know more about Demo Day, you can read [this post](http://blog.rmotr.com/announcements/2015/03/10/introducing-demo-day/).

One important trait of Demo Day is that the projects **must** use a public API (twitter, reddit, whatever) because we're sick of _"build a library"_ type of projects. The students decide what project they want to build and work together to get it done with good estimations. Team work is key.

For this edition there were 2 groups with three students each:

### The Aussie fellowship

![glocal preview](/public/imgs/2015-04-06-first-demo-day-summary/glocal-preview.png)

* **Team:** Brendan (Australian), Mike and Paulo.
* **Project Name:** Glocal.
* **Scope:** A simple web application that allows the user to view Tweets and Instagram images connected to a predefined geographic area based on proximity to an address input by the user.
* **Demo:** http://glocal-app.herokuapp.com/
* **Project Repo:** [https://github.com/rmotr/002-pyp-demoday-g2](https://github.com/rmotr/002-pyp-demoday-g2)

**The Good**

This project was particularly interesting because the team focused on social networks. They used the most common APIs out there (Twitter, Instagram, Foursquare) and they did it particularly well. After they felt comfortable they also included an "event tracking" feature to track events near a geographic area using Last.fm, Eventbrite and Eventful APIs; which means that they went well beyond the expectation and their initial scope.

Generally, the product looks amazing; well polished and professional. All the APIs they used exceeded our expectations greatly.

**The Bad**

The jury focused mainly in the ability to test so many services that needed a common interface (after all, they are all events). The team didn't focus too much on testing so this was their lower point. We also saw some internal team issues because they couldn't coordinate extremely well to work together.


### Charlie's Angels

![steamscout preview](/public/imgs/2015-04-06-first-demo-day-summary/steamscout-preview.png)

* **Team:** Charlie, Alan and Martin.
* **Project Name:** Steam Scout
* **Scope:** "[Steam](http://store.steampowered.com/) sales are a daily occurrence but there are way too many games to keep track of. Use SteamScout to alert you when a game that you're interested in drops down to the price you set".
* **Demo:** http://steamscout.herokuapp.com/
* **Project Repo:** [https://github.com/rmotr/002-pyp-demoday-g1](https://github.com/rmotr/002-pyp-demoday-g1)

**The Good**

This team had by far the best communication possible. Everyone knew where they teammates where. Everyone knew every part of the system and they got along with each other amazingly. The API they had to use was partially "hidden" and that introduced a bit of complications, which they managed to solve without major issues. Some other simple features they introduced took the project to a more professional level: different users (admin, regular users), possibility to set alerts; getting emails when the prices dropped, etc. They even considered adding Twilio to send SMS when a price dropped under the user's expectation.

**The Bad**

Testing was also an important aspect that they couldn't cover enough. The amount of features introduced was large, and the testing code base didn't got along with that number.
They also missed the deadline; Demo Day was initially planned to be two weeks before but the project was still unusable. Estimation were not perfect.

## Conclusions

As a co-founder of rmotr.com I'm extremely touched by this Demo Day. Our students exceeded our expectations greatly. In 1 month they managed to build amazing, usable, real world applications; far better that whatever we were expecting. These guys are real hustlers, which we believe is key in order to succeed in software development. I believe we succeed in communicating and transferring other important things aside from just "development stuff" (team work, estimations, documentation, presenting to a jury, etc); we're really happy.

We finally want to thank them because of the work they have done and the effort they have put. **They are the real MVPs.**
