# DataStore – Reliable Data Management & Experiment Traceability

## Overview

In robotics and calibration workflows, managing experimental data reliably is critical.  
I designed a lightweight [`DataStore`](https://github.com/Toys-R-Us-Rex/ur3e-control/blob/main/src/logger.py)  class to handle:

- Structured logging
- Versioned data storage
- Flexible save/load mechanisms

The goal is to ensure **reproducibility, traceability, and safety** when working with calibration data.

---

## Class Architecture (UML)

![DataStore UML](../assets/uml_datastore.svg#only-light)
![DataStore UML](../assets/uml_datastore_dark.svg#only-dark)

**Key idea:**
The class clearly separates:

* Internal mechanisms (file indexing, path handling)
* Public API (used by calibration and other robotics modules)

---

## Data Flow

### Saving Calibration Data

![DataStore Save Sequence UML](../assets/uml_seq_datastore.svg#only-light)
![DataStore Save Sequence UML](../assets/uml_seq_datastore_dark.svg#only-dark)

---

### Loading Calibration Data

![DataStore Load Sequence UML](../assets/uml_seq_load_datastore.svg#only-light)
![DataStore Load Sequence UML](../assets/uml_seq_load_datastore_dark.svg#only-dark)

---

## Key Features

### Structured Logging

* Timestamped logs for every operation
* Useful for debugging and experiment tracking

### Automatic Versioning

* Files stored as:

  ```
  calibration_0.pkl
  calibration_1.pkl
  calibration_2.pkl
  ```
* Prevents accidental overwrites
* Enables rollback to previous states

### Flexible Storage

* Save to:

  * Indexed history (default)
  * Custom file paths

### Robust File Handling

* Automatic directory creation
* Safe loading with fallback handling

---

## 🤖 Use Case: Robot Calibration

The system is designed to store:

* TCP poses (6D transformations)
* Computed calibration offsets

This allows:

* Reproducing experiments
* Comparing calibration runs
* Debugging discrepancies

---

## Design Highlights

* Minimal dependencies (pure Python)
* Clean separation of concerns
* Easily extensible (metadata, cloud storage, etc.)
* Works with complex objects via `pickle`

---

## Possible Improvements

* Replace `pickle` with a more portable format (JSON + adapters)
* Add metadata (timestamps, tags, experiment IDs)
* Build a CLI or UI to browse history
* Integrate remote storage (database or cloud)

---

## Conclusion

This module acts as a **core infrastructure component** for experimental systems, ensuring:

* Data reliability
* Full traceability
* Reproducibility of results

It demonstrates my approach to building **simple, robust, and production-ready tools** for technical environments.
