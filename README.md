# Cypress Test Automation Framework

[![Cypress E2E Tests](https://github.com/<your-github-username>/<your-repo-name>/actions/workflows/pipeline.yml/badge.svg)](https://github.com/<your-github-username>/<your-repo-name>/actions/workflows/pipeline.yml)

A scalable, modular Cypress framework testing the SauceDemo UI and JSONPlaceholder API.

## Architecture
This project utilizes a **Modular Action-Based Architecture**, bypassing traditional Page Object Models (POM) in favor of feature-grouped Custom Commands and object-literal Selector dictionaries.

## Prerequisites
- Node.js (v18+)
- npm 

## Setup Instructions
1. Clone the repository: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and add required secrets:
   ```env
   CYPRESS_SAUCE_PASSWORD=secret_sauce