#!/bin/bash

# Function to safely execute commands
safe_execute() {
    if ! $@; then
        echo "Warning: Command '$@' failed, skipping..."
    fi
}

# Create analysis file
echo "# React Project Analysis" > project_analysis.md

# Project Structure
echo "## Project Structure" >> project_analysis.md
echo "\`\`\`" >> project_analysis.md
safe_execute find . -maxdepth 3 -type d \( -name ".git" -o -name "node_modules" \) -prune -o -type f -print | sed -e "s/[^-][^\/]*\// |/g" -e "s/|\([^ ]\)/|-\1/" >> project_analysis.md
echo "\`\`\`" >> project_analysis.md

# Package Information
echo "## Package Information" >> project_analysis.md
echo "### package.json" >> project_analysis.md
echo "\`\`\`json" >> project_analysis.md
safe_execute cat package.json >> project_analysis.md
echo "\`\`\`" >> project_analysis.md

# Dependencies
echo "### Dependencies" >> project_analysis.md
echo "\`\`\`" >> project_analysis.md
safe_execute npm list --depth=0 >> project_analysis.md
echo "\`\`\`" >> project_analysis.md

# List of JavaScript/JSX files in src
echo "## Potential React Component Files" >> project_analysis.md
echo "List of .js and .jsx files in the src directory:" >> project_analysis.md
echo "\`\`\`" >> project_analysis.md
safe_execute find src -type f \( -name "*.js" -o -name "*.jsx" \) >> project_analysis.md
echo "\`\`\`" >> project_analysis.md

echo "Analysis complete. Check project_analysis.md for results."