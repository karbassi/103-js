## Quick start

```shell
git clone --recursive https://github.com/CoderDojoChi/101-html.git 101-html
cd $_
gem install jekyll bundler
bundle install
bundle exec jekyll serve
```

## Where are things?

### _pages

Files contained in the `_pages` directory will be rendered as HTML pages. Two files should always be in there: `index.md` and `slides.html`.

`index.md` will be what is shown to anyone who goes to the main url.

`slides.html` creates the slides using the `_slides` directory.

### _slides

Add markdown files in `000` to `999` order inside the `_slides` directory. The `999-reference` directory is for reference only and should be deleted before site is published.
