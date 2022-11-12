# Intro
My own personal website hosted with GitHub Pages.

# Setup
To deploy a ReactJs project to GitHub pages,

 * Create a repo named <your_username>.github.io
 * Clone the repo locally
 * Add your ReactJs project under the repo
 * Add gh-pages as a dev dependency by running `npm install gh-pages --save-dev`
 * In `package.json`, add 
    * under `scripts` 
      * `"predeploy": "npm run build",`
      * `"deploy": "gh-pages -d build",`
    * near `"name"` and `"version"`
      * `"homepage": "<your_url>",`
 * Run in the terminal `npm run deploy`
    * it will build the app
    * create a new branch called `gh-pages` 
    * deploy it in the new branch
 * You may need to go under your repo 
    * `Settings` -> `Pages` -> `Branch` -> change branch to `gh-pages`.

After all the above you should be good to go.
