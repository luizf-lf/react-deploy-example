# React Deploy Example.

This repository contains a working react app deployed to GitHub Pages.

See it live at https://luizf-lf.github.io/react-deploy-example/

### What is GitHub Pages?

If you found this repository, you probably already know what GitHub Pages is, but if you don't, you can read more about it [here](https://pages.github.com/).

### Setup

Follow these steps if you want to deploy your React App to GitHub Pages.

> Note: You must have at least Node 8.10.0

Assuming you already have a working React project, just add `gh-pages` as a dev dependency to your project:

`$ yarn add gh-pages -D`

Once gh-pages is added to your project, add the homepage property to your `package.json` file:

`"homepage": "https://{your-username}.github.io/{your-repository-name}/",`

Then, add the deploy script to your `package.json` file.

`"deploy": "gh-pages -d build"`

You probably already have a `build` command in your `package.json` file, but if you don't, add it:

`"build": "react-scripts build",`

Your scripts property in your package.json file should look like this:

```JSON
"scripts": {
  "build": "react-scripts build",
  "deploy": "gh-pages -d build"
},
```

> Don't forget to add the remote GitHub repository to your local repository.

### Deploy

Once everything is set up, just run the `deploy` command and the magic will happen.

`$ yarn deploy`

After that, your app will be available at https://{your-username}.github.io/{your-repo-name}.

For example, this repository is available at: https://luizf-lf.github.io/react-deploy-example/

Every time you make changes to your application, run both `build` and the `deploy` commands.

And that's all.
