---
title: 'Mini Project'
shortDescription: 'A reusable Python package for dataset analysis and regression modeling.'
month: 04
year: 2022
technologies:
  - Python
  - pandas
  - NumPy
  - scikit-learn
  - pytest
  - Sphinx
  - GitHub
logo: '/images/projects/mini-project/logo.png'
github: 'https://github.com/M05-project-group5/mini-project'
buttons:
  - text: 'Documentation'
    link: 'https://m05-project-group5.github.io/mini-project/index.html'
    icon: '/images/projects/mini-project/logo.png'
  - text: 'Package'
    link: 'https://test.pypi.org/project/Mini-Project/'
    icon: '/images/logo/pypi.svg'
---

## Overview

### Description

Mini-project is an extensible and reproducible Python system for analyzing datasets with machine-learning regression techniques. It supports the wine-quality and housing datasets, configurable preprocessing, model selection, and mean absolute error evaluation. The project turns a collection of analysis scripts into a documented command-line package that others can install and run.

### Status

The project was completed and packaged as version 2.0.1 in April 2022 under the BSD-3-Clause license. It includes automated tests, online Sphinx documentation, continuous integration, a final presentation, and a TestPyPI distribution. The source project is now archived as a completed academic project.

### My role

I was a developer in a two-person team. My work covered data loading and preparation, preprocessing and regression experiments, automated testing, technical documentation, and the transition from a source tree to an installable Python package. I also contributed to packaging and continuous-integration changes that made the project reproducible outside the development environment.

## My Works

### Data loading and preparation

The project needed to support more than one dataset while keeping the analysis workflow predictable. Data files also had to remain available after the code was installed as a package, and train/test splitting needed to be reproducible.

I added the wine-quality dataset files, updated the loading workflow to read packaged data, and implemented the train/test split. I separated feature columns from the target column and added a random-state argument so that experiments could be repeated with the same data partition.

This gave the rest of the pipeline a stable input contract: each dataset could be loaded, split, and passed to later processing steps without depending on the developer's local directory layout.

### Preprocessing and regression experiments

Different regression experiments required consistent transformations without leaking information from the test data into training. The preprocessing functions also needed to handle negative values, preserve expected output shapes, and support polynomial feature expansion without losing the target column.

I implemented min-max scaling, z-score normalization, and polynomial feature generation with scikit-learn. The transformations were applied consistently to training and test data, while regression-tree and linear-regression experiments helped validate the pipeline during development.

The resulting preprocessing API made experiments easier to compare and gave the models clean, predictable inputs instead of duplicating transformation logic in each experiment.

### Automated testing

Numerical transformations can appear to work while still producing incorrect ranges, dimensions, or statistics. Changes to the project structure also risked breaking data loading and main application behavior.

I wrote and refined pytest tests for preprocessing and data splitting. The tests covered expected ranges, negative input values, output shapes, normalization statistics, polynomial degrees, reproducibility, and non-mutating input behavior. I also updated main and data-loading tests as the package structure evolved.

These tests made the pipeline safer to refactor and provided concrete checks for the edge cases most likely to affect downstream model results.

### Documentation and packaging

The project had to become usable by someone who did not share the team's source tree. That meant documenting the API and workflow, packaging data files correctly, exposing useful commands, and ensuring the installed package behaved like the development version.

I set up the Sphinx documentation structure, converted the README to reStructuredText, updated NumPy-style docstrings, and added installation, API, usage, licensing, links, troubleshooting, dataset citations, and data-description content. I also contributed `setup.py`, package-data configuration, requirements files, console-script entry points, and fixes for imports and packaged data paths.

The final workflow could be installed, tested, documented, and built through automation rather than relying on undocumented local steps. The published [Sphinx documentation](https://m05-project-group5.github.io/mini-project/index.html) explains the installation and API, while the [TestPyPI package](https://test.pypi.org/project/Mini-Project/) proves that the project was packaged for installation.

## Results

The team delivered a command-line Python package that loads supported datasets, splits and preprocesses them, trains selectable regression models, and reports mean absolute error. The final project included:

- reusable data-loading and preprocessing functions for min-max scaling, z-score normalization, and polynomial features
- regression experiments using linear and tree-based models
- automated tests covering numerical behavior, edge cases, and data-splitting behavior
- packaged dataset resources and command-line entry points for analysis and dataset download
- user and API documentation published with Sphinx and GitHub Pages
- GitHub Actions workflows for tests across Python versions, coverage reporting, documentation builds, and package builds
- a version 2.0.1 package distributed through TestPyPI.

Overall, the project moved from a small machine-learning prototype to a reproducible package that another user could install, run, test, and consult through published documentation. The complete implementation is available in the [GitHub repository](https://github.com/M05-project-group5/mini-project).

## Retrospective

This project was not especially challenging from a technical perspective, but it was my first opportunity to use GitHub in a structured and collaborative way. I was already familiar with Git and similar tools, but this was my first experience applying branches, pull requests, reviews, unit tests, coverage, CI, documentation, licensing, and TestPyPI packaging as part of one complete workflow.

The project strengthened my commitment to reproducibility and separation of concerns. Keeping data loading, preprocessing, modelling, testing, documentation, and packaging distinct made the code easier to understand and change. It also showed me that a project is more than its implementation: it should be testable, documented, distributable, and usable outside the original development environment.

I do not use every part of this workflow automatically when working alone, where a simpler process is often sufficient. However, collaboration makes practices such as branches, pull requests, and continuous integration more valuable, especially when branches diverge. I learned to adapt the workflow to the project's requirements and team structure rather than applying every practice mechanically.
