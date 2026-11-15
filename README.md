# stephenmcmurtry.org

My personal website, built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages.

## Run it locally

Requires Node 20 or newer.

```sh
npm install
npm start
```

Then open http://localhost:8080/. The page reloads when files change.

## Where things are

| What | Where |
| --- | --- |
| Home page | `src/index.njk` |
| Project lists (personal, work, earlier work) | `src/_data/projects.json` |
| Resume content | `src/_data/resume.json` |
| Blog posts | `src/blog/posts/` |
| Page layout, header and footer | `src/_includes/base.njk` |
| Styles | `src/assets/site.css` |
| Name, email, social links | `src/_data/site.json` |
| Old visualization pages (2015–2016) | `legacy/` |

Everything in `legacy/` is copied to the site root unchanged, so those pages keep
their original URLs (for example `legacy/income_tax.html` is served at `/income_tax`).

## Writing a blog post

Add a Markdown file to `src/blog/posts/` named `YYYY-MM-DD-some-slug.md`:

```md
---
title: My post title
description: One optional sentence shown in the post list.
---

Post content in Markdown.
```

It is published at `/blog/some-slug/`. Add `draft: true` to the front matter to
preview a post locally without publishing it.

## Resume

Edit `src/_data/resume.json`. Each job has a `highlights` list; add sentences
there and they appear as bullet points. The resume page has a print stylesheet,
so "Print or save as PDF" produces a clean PDF.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. The repository's Pages source must be set to
"GitHub Actions" (Settings → Pages → Build and deployment).
