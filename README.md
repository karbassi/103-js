# 103-JS
[![Build Status](https://travis-ci.org/CoderDojoChi/103-js.svg?branch=gh-pages)](https://travis-ci.org/CoderDojoChi/103-js)

## Quick start


Fork and clone the repo locally then...

```console
git submodule update --init --recursive
gem install jekyll bundler
bundle install
bundle exec jekyll serve -wIo
```

## Where are things?

### _pages

Files contained in the `_pages` directory will be rendered as HTML pages. Two files should always be in there: `index.md` and `slides.html`.

`index.md` will be what is shown to anyone who goes to the main url.

`slides.html` creates the slides using the `_slides` directory.

### _slides

Add markdown files in `000` to `999` order inside the `_slides` directory. The `999-reference` directory is for reference only and should be deleted before site is published.
