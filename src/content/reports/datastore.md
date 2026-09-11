---
title: 'DataStore: Reliable Data Management and Experiment Traceability'
shortDescription: 'A detailed report on the versioned storage layer used for robot calibration and experiment data.'
project: 'Duckify'
projectSlug: 'duckify'
---

## Overview

In robotics and calibration workflows, managing experimental data reliably is critical. I designed a lightweight [`DataStore`](https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/src/logger.py) class to handle structured logging, versioned data storage, and flexible save/load mechanisms.

The goal was to support reproducibility, traceability, and safety when working with calibration data.

## Architecture

The class separates internal mechanisms, such as file indexing and path handling, from the public API used by calibration and other robotics modules.

<img class="report-image-light" src="/portfolio/images/projects/duckify/uml_datastore.svg" alt="DataStore UML diagram" />
<img class="report-image-dark" src="/portfolio/images/projects/duckify/uml_datastore_dark.svg" alt="DataStore UML diagram" />

The design uses a small interface so robotics code can save and load data without depending on the details of the storage layout.

## Data flow

### Saving calibration data

<img class="report-image-light" src="/portfolio/images/projects/duckify/uml_seq_datastore.svg" alt="DataStore save sequence UML diagram" />
<img class="report-image-dark" src="/portfolio/images/projects/duckify/uml_seq_datastore_dark.svg" alt="DataStore save sequence UML diagram" />

### Loading calibration data

<img class="report-image-light" src="/portfolio/images/projects/duckify/uml_seq_load_datastore.svg" alt="DataStore load sequence UML diagram" />
<img class="report-image-dark" src="/portfolio/images/projects/duckify/uml_seq_load_datastore_dark.svg" alt="DataStore load sequence UML diagram" />

## Key features

### Structured logging

Operations are timestamped to support debugging and experiment tracking.

### Automatic versioning

Calibration data is stored in indexed files such as:

```md
calibration_0.pkl
calibration_1.pkl
calibration_2.pkl
```

This prevents accidental overwrites and enables rollback to earlier states.

### Flexible storage

The DataStore supports both indexed history, which is the default, and custom file paths when a workflow needs a specific output location.

### Robust file handling

Directories are created automatically, and loading includes fallback handling for missing or invalid data.

## Robot calibration use case

The system stores TCP poses and computed calibration offsets. This makes it possible to reproduce experiments, compare calibration runs, and investigate discrepancies between expected and observed robot behavior.

## Design highlights

- Minimal dependencies through a pure Python implementation
- Clear separation of concerns
- Extensible design for metadata, cloud storage, or other persistence backends
- Support for complex objects through `pickle`

## Limitations and future improvements

The current implementation could replace `pickle` with a more portable format such as JSON with explicit adapters. Other improvements include timestamps, tags, experiment identifiers, a CLI or UI for browsing history, and remote storage integration.

## Conclusion

The DataStore acts as infrastructure for experimental systems by providing data reliability, traceability, and reproducibility. It demonstrates how a small, focused component can make calibration and robot-control workflows safer to operate and easier to analyze afterward.
