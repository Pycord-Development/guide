# Pycord Guide
[![Netlify Status](https://api.netlify.com/api/v1/badges/c6976714-2c3d-4ff5-a30f-cf784045062a/deploy-status)](https://app.netlify.com/sites/pycord/deploys)

The official Guide for Pycord, explaining Pycord's features and how to use them.

The website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 

## Purpose

The Guide is meant to serve as a professional guide to **all** of Pycord's features.
This also means that everything is critiqued to end up at the best quality.
If a part of the guide doesn't make these expectations
it will either be refactored, or redone.

## Contributing

For contributing rules, please visit [this page](./.github/CONTRIBUTING.md).

The Guide is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 

[`/src`](./src) contains styling (`.scss`) and the index (`.tsx`/`jsx`).

[`/docs`](./docs) contains the pages for the guide. The Guide Pages are writtern in the `mdx` file format, a combination of Markdown syntax and JSX/React.

## Local Development

First, you need to clone the repository:

    git clone https://github.com/Pycord-Development/guide

### Installing Requirements

You need to install the requirements for the guide, which you may do by running the following command:

    yarn

### Starting the Server

Then, you can start the server by running the following command:

    yarn start

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Building the Website

Then, you can build the website by running the following command:

    yarn build

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

    USE_SSH=true yarn deploy

Without SSH:

    GIT_USER=<Your GitHub username> yarn deploy

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
