# 📁 Portfolio — Source Code Repository

## 🌐 Live Website
This repository hosts the source code for my personal portfolio, published via **GitHub Pages**.

👉 [**Live site**](https://mariethoz.github.io/portfolio/)

The portfolio itself is designed for visitors; this README focuses on the technical side of the repository.

---

## 🎯 About This Repository
This repo contains everything needed to build and deploy my portfolio website, including:

- Documentation pages stored in the docs/ directory
- A GitHub Actions workflow for automated deployment
- Configuration files used to generate and publish the site
- Version history and ongoing improvements

If you're exploring how the site is built or want to understand the structure behind the portfolio, this is the place.

---

## 📂 Repository Structure

```
.
├── .github/workflows/docs.yaml
├── docs/
│   ├── about.md
│   ├── index.md
│   └── skills/
│       ├── skills.md        # Soft and others skills
│       └── technical.md     # Technical skills
├── zensical.toml
└── README.md
```

---

## 📦 Deployment (GitHub Pages)
This site is deployed automatically using **GitHub Pgae/Action**.

If you want to reuse this setup:

1. Create your **public** GitHub repository 
2. Go to **Settings → Pages**  
3. Bellow *Build and deployment* select **GitHub Actions**
4. Check the [docs.yml](.github/workflows/docs.yml)
5. Adapt the [zensical.toml](./zensical.toml) to you need
6. Next time you `push` into your `main` or `master` branch  
