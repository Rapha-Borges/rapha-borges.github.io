---
title: "Digestabot"
date: 2023-12-19
featured: false
description: "I contributed by correcting the documentation and fixing a typo."
tags: ["Digestabo","Chainguard","GitHub","GitHub Actions","Docker","Image"]
image: "/img/digestabot.webp"
link: "https://github.com/chainguard-dev/digestabot/"
weight: 300
sitemap:
  priority : 0.8
---

I contributed by suggesting a [correction](https://github.com/chainguard-dev/digestabot/pull/6) in the documentation where the wrong version reference was used. Additionally, I pointed out a typographical error in the code that prevented the 'create_pr_update' variable from changing its value to 'true,' causing the bot to fail in opening the pull request for image updates. The correction [pull request](https://github.com/chainguard-dev/digestabot/pull/7) was created by the project maintainer, [Carlos Panato](https://github.com/cpanato), after we discussed the issue on Twitter.

After using it a few times, I missed the option to customize the pull request message. So, I examined the code and, after discussing it with [Carlos Panato](https://github.com/cpanato), who agreed it was a good idea, I added the field through [PR #9](https://github.com/chainguard-dev/digestabot/pull/9).