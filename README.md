# Your Own Personal Codepen!

While sites like codepen and codesandbox are great for whipping up quick demos of small components, they're not the best for demoing entire pages or some proof-of-concept work. Part of this is due to the amount of space the editor UI takes up, and part of it is due to the fact that the demo is served through an iFrame or with all the overhead required by the main application. This results in page demos that are difficult to preview in a full browser window or that can't be profiled in devtools accurately

## A Minimalist Approach

This repo is designed to allow me to get into building demos quickly without hassling with an application to make it possible. Simply serve the HTML, CSS, and JS required for the demo to a browser. Navigation of the files is handled by the server itself, using the server's autoindex features.

## Working Locally

The local version of this uses [DDEV](https://ddev.readthedocs.io/en/stable/) to serve local files. While DDEV is designed for use with PHP, Databases, and other server side technologies, I'm using it simply for the nginx server inside and it's `autoindex` feature, which lets me quickly navigate between projects. Inside the DDEV container we're also running [Vite](https://vitejs.dev/) and proxying requests to it for html files to allow live reloading of *.html files and hot module replacement of css & js assets.

## Publishing

When a demo is ready to share, simply commit it to the repository and let github pages publish through the [github-pages-directory-listing](https://github.com/jayanta525/github-pages-directory-listing) action. This mocks the `autoindex` value and creates that simple server structure
