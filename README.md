# r11s.com.br

[![](https://github.com/rapha-borges/rapha-borges.github.io/workflows/publish/badge.svg)](https://github.com/rapha-borges/rapha-borges.github.io/actions?query=workflow%3Apublish)

Sources for the [r11s.com.br](hhttps://www.r11s.com.br/) website:
- created with [Hugo](https://gohugo.io/)
- using the [Resume](https://themes.gohugo.io/hugo-resume/) theme
- built with [GitHub Actions](https://github.com/features/actions)
- and deployed on [GitHub Pages](https://pages.github.com/)

Forked from [vbehar/vbehar.github.io](https://github.com/vbehar/vbehar.github.io)

## Local setup

- The [hugo-resume](https://github.com/eddiewebb/hugo-resume) theme is setup as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules), so you should clone this repository with the `--recurse-submodules` flag.
- Install [Hugo](https://gohugo.io/) - see the [.github/workflows/publish.yml](.github/workflows/publish.yml) file for the supported version of Hugo to use.
- Run `hugo` to build the HTML pages in the `_site` directory - see the [config.toml](config.toml) file for the `publishDir` configuration.
- Run `hugo server` to start a server on <http://localhost:1313/>.

## Continuous Delivery

Every push to the `sources` branch will rebuild the whole website and the PDF resume, and write the result in the [master](https://github.com/rapha-borges/rapha-borges.github.io/tree/master) branch.

### About branches

The default branch is `sources` (instead of `master`) because GitHub Pages only supports reading HTML content from the `master` branch - for user's pages. This is why I'm writing the sources in the `sources` branch, and publishing the generated HTML pages to the `master` branch.