---
title: 'LaTeX to Typst Conversion'
shortDescription: 'A technical comparison of LaTeX, Typst, and Markdown based on the Duckify reports.'
project: 'Duckify'
projectSlug: 'duckify'
---

## Purpose

This report presents the methodology and principles used to convert a scientific document written in LaTeX into Typst, while also comparing both formats to Markdown.

The goals were to understand the structure of a complex LaTeX document, migrate it while preserving formatting, equations, and structure, compare the three writing paradigms, and produce clear technical documentation.

The practical example comes from Duckify, where the initial calibration and conversion reports were drafted in LaTeX before being rewritten in Typst.

- **Typst:** [calibration](https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/architecture/robot/calibration/calibration.typ), [conversion](https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/architecture/robot/conversion/conversion.tex)
- **LaTeX:** [calibration](https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/architecture/robot/calibration/calibration.tex), [conversion](https://github.com/Toys-R-Us-Rex/Duckify/blob/main/docs/architecture/robot/conversion/conversion.tex)
- **PDF:** [calibration](https://toys-r-us-rex.github.io/Duckify/architecture/robot/calibration/calibration.pdf), [conversion](https://toys-r-us-rex.github.io/Duckify/architecture/robot/conversion/conversion.pdf)

## Introduction

LaTeX has long been a reference for scientific and technical writing. Typst is a modern language designed to offer LaTeX-level power with simpler and more consistent syntax. Markdown is minimalist and focused on readability.

Converting LaTeX to Typst requires understanding LaTeX environments for mathematics, figures, sections, and lists, their Typst equivalents, and the conceptual differences between the formats.

## General structure

### Document declaration

| Feature       | LaTeX                     | Typst                     | Markdown                          |
| ------------- | ------------------------- | ------------------------- | --------------------------------- |
| Document type | `\documentclass{article}` | None (implicit structure) | None                              |
| Preamble      | Required                  | Optional                  | None                              |
| Packages      | `\usepackage{...}`        | No external packages      | Extensions depend on the renderer |

Typst simplifies document setup by avoiding a heavy preamble and package management.

### Titles and sections

LaTeX uses commands such as `\\section`, `\\subsection`, and `\\subsubsection`. Typst uses heading markers such as `=`, `==`, and `===`. Markdown uses heading markers such as `##`, `###`, and `####`.

Typst and Markdown share a similar readable structure, while Typst adds features such as automatic numbering and table-of-contents generation.

### Abstract and table of contents

LaTeX provides dedicated environments and commands such as `abstract` and `\\tableofcontents`. Typst can create an abstract with alignment and an outline with `#outline()`. Markdown has no native equivalent for either without renderer extensions.

### Mathematical equations

Typst preserves the spirit of LaTeX mathematics with a more consistent syntax. For example, a transformation matrix can be represented as follows:

LaTeX:

```latex
T = \begin{bmatrix}
  R & t \\
  0 & 1
\end{bmatrix}
```

Typst:

```typst
$ T = mat(
  R, t;
  0, 1;
) $
```

Markdown relies on an external engine such as MathJax or KaTeX, while Typst and LaTeX integrate mathematical notation into their document workflows.

### Figures and diagrams

LaTeX provides figure environments with captions and positioning. Typst uses `#figure` with an image and caption. Markdown provides a simple image syntax but does not natively manage captions or positioning.

### Lists and source code

LaTeX uses `itemize`, `enumerate`, and `lstlisting` environments. Typst and Markdown use readable list syntax and fenced code blocks. Typst additionally provides controls for list indentation and numbering.

### Comments and appendices

LaTeX uses `%` for comments, Typst uses `//` and block comments, and Markdown relies on HTML-style comments. LaTeX and Typst both provide explicit appendix workflows; Markdown has no native appendix concept.

## Conclusion

This work demonstrates the ability to adapt technical documentation between LaTeX, Typst, and Markdown while preserving the structure and intent of scientific content. It also shows how tool choice affects document setup, equations, figures, lists, source code, and long-term maintainability.
