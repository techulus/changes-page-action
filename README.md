# Action to create a changes.page post

To get started, create an account at [changes.page](https://changes.page) and create a page.
Once you have set up your page, you can obtain your integration secret from the page settings. Keep this secret handy, as we will use it during the setup of the action.

Then you can setup your workflow as shown below:

```yaml
update-changelog:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: techulus/changes-page-action@1.0.0
        with:
          page_secret: ${{ secrets.PAGE_SECRET }}
          post_title: "Your post title"
          post_content: "Markdown post content"
          post_type: "Post type enum"
          post_status: "Post status enum"
```

Note.
- Type of the post, can be 'fix', 'new', 'improvement', 'announcement' or 'alert'"
- Status of the post, can be 'draft' or 'published'
