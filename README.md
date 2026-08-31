# Git Practice

This repository is used to practice Git and GitHub.

## How to use this project

1. Clone the repository.
2. Open the project folder.
3. Make changes on a separate branch.
4. Install the pre-commit hook:
   `.venv/bin/pre-commit install`
5. Commit and push your changes.
6. Create a Pull Request for review.

## Pre-commit

This project uses pre-commit with Gitleaks to detect accidentally committed secrets.

After cloning the repository, each contributor must run:

`.venv/bin/pre-commit install`

This step must be done per clone because Git hooks are stored locally in `.git/hooks` and are not version controlled.