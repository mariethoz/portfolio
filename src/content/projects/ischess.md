---
title: 'ISChess Bot'
shortDescription: 'A Python chess-bot project with configurable search strategies and a PyQt6 interface.'
month: 01
year: 2025
technologies:
  - Python
  - NumPy
  - PyQt6
  - Breadth-first search
  - Depth-limited search
  - Heuristic evaluation
logo: '/images/projects/ischess/logo.png'
github: 'https://github.com/NatXiao/ISChess'
---

## Overview

### Description

ISChess is a Python chess-bot project for an algorithmic programming course. It provides a PyQt6 interface and a configurable bot framework for playing custom board layouts, with several progressively more informed strategies.

### Status

The repository contains a working project prototype with registered bot implementations and example board maps as of January 2025.

### My role

I contributed as a developer, primarily responsible for bot algorithms, move generation, board-state exploration, debugging, and testing.

## My Works

### Challenge 1: Bot framework and move generation

The bots needed a shared way to represent moves, register implementations, and generate legal movement patterns across different pieces. Without reusable helpers, each algorithm would duplicate board updates and movement rules.

I contributed to the base bot and move abstractions, bot registration, and helper functions for generating legal movement patterns for pawns, knights, bishops, rooks, queens, and kings. I also added capture-priority behavior and refactored board updates into reusable functions.

This established a common framework that allowed multiple bot strategies to operate in the same application and on the provided board maps.

### Challenge 2: Search algorithms

The project needed strategies with different levels of sophistication so their behavior could be compared. Search over board states also had to preserve move sequences and support both simple and recursive approaches.

I implemented a random baseline bot and developed recursive depth-limited search, naive breadth-first search, and breadth-first search with visited-state tracking. The visited-state version retained a move sequence for the root move, and I connected each algorithm to the bot registry so it could be selected in the application.

The project therefore moved from a random baseline to several selectable search strategies with progressively stronger state exploration.

### Challenge 3: Evaluation and game-state handling

Search results needed a way to distinguish strategically useful moves and correctly handle game-specific transitions such as captures, promotion, turns, and terminal states.

I added heuristic piece values to score captures and other relevant moves. The search logic handled captures, king removal, pawn promotion to queens, turn sequencing, opposing-player responses, and check-related scoring. I also added a test board and corrected invalid or null move outcomes during debugging.

These changes made the bots more useful than a purely structural search and improved the reliability of their move results.

### Challenge 4: Algorithm refinement

The first visited-state search provided a basis for experimentation, but it did not fully account for search depth and the opponent's strongest response. The scoring behavior needed refinement before it could compare candidate moves more meaningfully.

I developed a follow-up scoring algorithm for beta testing that refined visited-state search, adjusted scores by search depth, considered the opponent's strongest response, and selected among equally scored moves. Later changes extracted board-creation helpers and corrected sequence and depth conditions.

The resulting algorithm provided a more informed strategy while keeping the bot implementations selectable through the shared registry.

## Results

The delivered repository contains the ISChess GUI project together with multiple selectable bot implementations: random, recursive, BFS, visited-state BFS, and the later scored algorithm. The bots are integrated through the shared registration mechanism and can operate on the provided board maps.

The project implemented progressively more informed bot strategies, board-state exploration with visited-state tracking, material-based evaluation, capture handling, king-targeting behavior, and pawn promotion. The complete implementation is available in the [GitHub repository](https://github.com/NatXiao/ISChess).

Overall, the work demonstrated how search algorithms and heuristics can be integrated into the course-provided chess environment and compared through a common application interface.

## Retrospective

ISChess was a technically challenging project because it required me to apply search algorithms to a changing game environment. Implementing the bots involved more than generating valid moves: the code also had to preserve board states, avoid unnecessary repeated exploration, evaluate moves, and handle captures, promotion, turns, and terminal conditions.

The project was also frustrating at times because the aggressive king in the game environment exposed weaknesses in our play logic. The BFS algorithm itself was correct, and the resulting moves were sound and fast, but the bot did not always make intelligent strategic decisions. This showed me that algorithmic correctness and execution speed are not enough for a decision-making system; the rules used to evaluate and select moves must also represent the goals of the game.

If I continued the project, I would refine the play logic rather than replace the BFS algorithm. I would improve the evaluation rules, make the bot account more explicitly for the opponent's responses, and test the resulting behaviour on positions designed to expose poor strategic choices. This would help bridge the gap between efficiently exploring possible moves and selecting moves that lead to better play.
