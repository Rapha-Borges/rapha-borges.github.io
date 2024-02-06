---
title: "OKE-FREE"
date: 2024-01-13
featured: true
description: "An easy way to ensure your own Kubernetes cluster for free and forever."
tags: ["Kubernetes", "Oracle", "OKE", "Terraform", "OpenTofu", "IaC"]
image: "/img/oke.webp"
link: "https://github.com/Rapha-Borges/oke-free"
weight: 100
sitemap:
  priority : 0.8
---

During my studies on Kubernetes, I encountered some limitations when using Kind and other tools to run a Kubernetes cluster locally. Due to these typical limitations of a local cluster, I went looking for a cost-free alternative. While there was some material talking about the creation of a cluster, I couldn't find any that were up-to-date and easily replicable. For this reason, I decided to utilize the Oracle Cloud Infrastructure with its Always Free resources to launch the OKE-FREE project during the [#MêsDoKubernetes](https://github.com/linuxtips/MesDoKubernetes) by Linuxtips.

The project represents a practical implementation of Infrastructure as Code (IaC) using OpenTofu (Terraform) to create all the necessary resources for a real and cost-free Kubernetes cluster.