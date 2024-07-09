# Cypress Project

This project is set up to run end-to-end tests using Cypress.

## Table of Contents

- [Setup](#setup)
- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)

## Setup

Before you can run the tests, ensure you have Node.js and Yarn installed on your machine. You can download Node.js from [nodejs.org](https://nodejs.org/) and install Yarn by following the instructions on [yarnpkg.com](https://yarnpkg.com/).

## Installation

To install the dependencies, run:

```bash
yarn install
```

## Scripts
You can find predefined scripts in the package.json file. Below are the available scripts:

Open Cypress Test Runner
To open the Cypress Test Runner with the base URL set to https://demo.1crmcloud.com/, run:

```bash
yarn cy:open:demo:chrome
```

Run Cypress Tests in Headless Mode
To run all Cypress tests in headless mode with the base URL set to https://demo.1crmcloud.com/, run:

```bash
yarn cy:run:demo:chrome
```