---
name: feature
description: Manage current feature workflow - start, review, explain or complete
argument-hint: load|start|review|explain|complete
---

# Feature Workflow

Manages the full lifecycle of a feature from spec to merge.

## Task

Execute the requested action: $ARGUMENTS

| Action | Description |
|--------|-------------|
| `load` | Load a feature spec or inline description |
| `start` | Begin implementation |
| `review` | Check goals met, code quality |
| `explain` | Document what changed and why |
| `complete` | Commit and finish up |

See [actions/](actions/) for detailed instructions.

If no action provided, explain the available options.
