# Plan Action

1. Confirm feature goals are loaded (from "load"). If none, error: "Run /feature load first"

2. Gather context by running these agents in parallel:
   - **Explore agent** — scan the repo structure: components, pages, hooks, utilities, naming conventions, file placement patterns
   - **Explore agent** — read the PRD and any existing related files that overlap with feature goals

3. From the gathered context, produce a concrete implementation plan:
   - List every file to create or modify (with path)
   - For each file, describe what changes — specific component names, props, data structures, function signatures
   - Note which HeroUI v3 components to use (fetch docs via `heroui-react` MCP if needed)
   - Flag any decisions or open questions that need a choice before coding starts

4. Present the plan as a numbered checklist the user can review and amend

5. Do NOT write any code. Stop here and wait for the user to approve or adjust the plan before running `/feature start`
