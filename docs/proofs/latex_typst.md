# LaTeX to Typst Conversion

*With Markdown Comparison*

### Purpose of the Document

This report presents the methodology and principles used to convert a scientific document written in **LaTeX** into **Typst**, while also comparing both formats to **Markdown**.  
The goal is to demonstrate the ability to:

- understand the structure of a complex LaTeX document  
- migrate it to Typst while preserving formatting, equations, and structure  
- compare the writing paradigms of LaTeX, Typst, and Markdown  
- produce a clean and coherent documentation  

## Introduction

LaTeX has long been the reference for scientific and technical writing.  
Typst is a modern language designed to offer LaTeX‑level power with a simpler and more consistent syntax.  
Markdown, meanwhile, is minimalist and focused on readability.

Converting LaTeX → Typst requires understanding:

- LaTeX environments (math, figures, sections, lists…)  
- their Typst equivalents  
- conceptual differences and limitations  


## General Structure: LaTeX vs Typst vs Markdown

#### Document Declaration

| Feature | LaTeX | Typst | Markdown |
|---------|-------|-------|----------|
| Document type | `\documentclass{article}` | None (implicit structure) | None |
| Preamble | Required | Optional | None |
| Packages | `\usepackage{...}` | No external packages | Extensions depending on renderer |

Typst greatly simplifies document setup: no heavy preamble, no package management.


#### Titles and Sections

*LateX*

```latex
\section{Introduction}
\subsection{Principle}
\subsubsection{Part A}
```

*Typst*

```typst
= Introduction
== Principle
=== Part A
```

*Markdown*

```md
## Introduction
#### Principle
###### Part A
```

Typst and Markdown share a similar syntax, but Typst supports automatic numbering and table of contents generation.


#### Abstract

*LateX*

```latex
\begin{abstract}
...
\end{abstract}
```

*Typst*

```typst
#align(center)[*Abstract*]
Summary text…
```

*Markdown*

No native equivalent.


#### Table of Contents

*LateX*

```latex
\tableofcontents
```

*Typst*

```typst
#outline()
```

*Markdown*

No automatic table of contents without extensions.


#### Mathematical Equations

Typst preserves the spirit of LaTeX math with a more consistent syntax.

*LateX*

```latex
\[
T =
\begin{bmatrix}
R & t \\
0 & 1
\end{bmatrix}
\]
```

*Typst*

```typst
$
T = mat(
  R, t;
  0, 1,
)
$
```

*Markdown*

```md
$$
T = \begin{bmatrix} R & t \\ 0 & 1 \end{bmatrix}
$$
```

Markdown relies on external engines (MathJax, KaTeX).  
Typst and LaTeX integrate math rendering natively.


#### Figures and Diagrams

*LateX*

```latex
\begin{figure}
\includegraphics{image.png}
\caption{Caption}
\end{figure}
```

*Typst*

```typst
#figure(
  image("image.png", width: 50%),
  caption: [Caption],
)
```

*Markdown*

```md
![Caption](image.png)
```

Markdown cannot handle captions or positioning.


#### Lists and Enumerations

*LateX*

```latex
\begin{itemize}
\item Item
\end{itemize}

\begin{enumerate}
\item First
\item Second
\end{enumerate}
```

*Typst*

```typst
- item
- item

1. first
2. second
```

Typst allows fine‑tuning of indentation:

```typst
#set list(indent: 2em)
#set enum(indent: 2em)
```

*Markdown*

```md
- item
- item

1. first
2. second
```

👉 LaTeX manages list spacing automatically.  
Typst and Markdown may require manual adjustments.


#### Comments (Language Differences)

*LateX*

```latex
% This is a comment
```

*Typst*

Single‑line:
```typst
// This is a comment
```

Multi‑line:
```typst
/*
   Multi-line
   comment
*/
```

*Markdown*

```md
<!-- HTML-style comment -->
```

Typst uses modern comment syntax similar to C/Rust/JavaScript.  
LaTeX uses `%`.  
Markdown relies on HTML comments.


#### Appendices

*LateX*

```latex
\appendix
\section{Appendix A}
```

*Typst*

```typst
#set heading(numbering: "A.1")
#counter(heading).update(0)
= Appendix A
```

*Markdown*

No appendix concept.


#### Source Code

*LateX*

```latex
\begin{lstlisting}
...
\end{lstlisting}
```

*Typst*

```typst
    ```python
    ...
    ```
```

*Markdown*

Same syntax as Typst.
```md
    ```python
    ...
    ```
```

## Conclusion

This work demonstrates comprension in:

- Adaptability to new tools and languages  
- LaTeX environments  
- Typst’s modern syntax  
- Markdown’s minimalist structure  
- Migrating a complete scientific document between formats  

