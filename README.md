# Pycord Guide
The official Guide for Pycord.
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

# Purpose
This guide is meant to serve as a professional guide to **all** of Pycord's features,
this also mean's everything is critiqued to end up at the best quality.
If a part of the guide doesn't make these expectations 
it will either be refactored, or redone.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
