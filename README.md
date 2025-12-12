# I14Y Handbook

This repository contains the source for the online manual of the interoperability platform **I14Y**.

The interoperability platform **I14Y** is Switzerland's national data catalog, serving as a central directory for data, electronic interfaces, and public services. Developed by the Federal Statistical Office (FSO), the platform acts as the technical backbone for harmonizing administrative data and enabling its reuse.

## Technical Setup

The documentation content is written in **Markdown** files and processed by [Hugo](https://gohugo.io), a static site generator.  
The Hugo build produces a static website that is automatically published via **GitHub Pages**. This process is automatically triggered by a GitHub Actions. No manual action is required from contributors.

## How to Contribute

Contributions are welcome. You can help by:

- Fixing typos or improving wording
- Adding or updating documentation pages
- Providing examples and best practices

Before contributing, make sure you:

1. Have a GitHub account.
2. Are familiar with basic Git and Markdown (optional but helpful).
3. Follow any contribution guidelines or style rules defined in this repository (if present).

To contribute via the GitHub web interface, open the repository in your browser and navigate to the `content` directory. Locate the file you want to edit, click the pencil icon (✏️), and make your changes. Scroll down to propose your changes, provide a title and optional description, and create a new branch with a meaningful name (e.g., `fix-typo-intro`). Then, open a pull request, ensuring the base branch is correct (e.g., `main`). Project maintainers will review your changes, and you may need to make adjustments before they are merged.

```markdown
### Local Contributions Using Git

For local contributions using Git, follow these steps:

1. **Fork the Repository**  
    Go to the repository on GitHub and click the "Fork" button in the top-right corner. This creates a copy of the repository under your GitHub account.

2. **Clone Your Fork**  
    Clone your fork to your local machine:
    ```bash
    git clone https://github.com/<your-username>/I14Y-Handbook.git
    cd I14Y-Handbook
    ```

3. **Set Upstream Remote (Optional)**  
    Add the original repository as an upstream remote to keep your fork in sync:
    ```bash
    git remote add upstream https://github.com/original-owner/I14Y-Handbook.git
    ```

4. **Update Your Local Branch**  
    Ensure your local `main` branch is up to date:
    ```bash
    git fetch upstream
    git checkout main
    git merge upstream/main
    ```

5. **Create and Switch to a New Branch**  
    Create a new branch for your changes:
    ```bash
    git checkout -b update-intro-docs
    ```

6. **Make Your Changes**  
    Edit the files as needed. For example, you can use a text editor or IDE to modify Markdown files.

7. **Stage and Commit Your Changes**  
    Stage and commit your changes with a clear message:
    ```bash
    git add .
    git commit -m "Update introduction section in the documentation"
    ```

8. **Push Your Branch**  
    Push your branch to your fork:
    ```bash
    git push origin update-intro-docs
    ```

9. **Open a Pull Request**  
    Go to your fork on GitHub, navigate to the branch you just pushed, and click "Compare & pull request." Provide a clear title and description for your pull request.

10. **Respond to Review Feedback**  
     If reviewers request changes, make the updates locally, commit them, and push to the same branch. The pull request will update automatically:
     ```bash
     git add .
     git commit -m "Address review feedback"
     git push
     ```

Once your pull request is approved and merged, you can delete your branch both locally and on GitHub:
```bash
git branch -d update-intro-docs
git push origin --delete update-intro-docs
```
```
