TestCICD

A simple demo repository to demonstrate CI/CD with GitHub Actions and deployment to GitHub Pages.

Features





Simple web app with HTML and JavaScript



Unit tests with Jest



Automated testing and deployment to GitHub Pages via GitHub Actions

Setup





Clone the repository:

git clone https://github.com/your-username/TestCICD.git
cd TestCICD



Install dependencies:

npm install



Run tests locally:

npm test



Enable GitHub Pages:





Go to your repository settings on GitHub.



Under "Pages", set the source to the gh-pages branch.



Push changes:





Commit and push your changes to the main branch.



The GitHub Actions workflow will run tests and deploy to GitHub Pages.

Accessing the Site

Once deployed, the site will be available at:

https://your-username.github.io/TestCICD/

Workflow Details





CI: Runs Jest tests on every push or pull request to the main branch.



CD: Deploys the dist folder to the gh-pages branch if tests pass on the main branch.