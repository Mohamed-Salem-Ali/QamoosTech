Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$baseDir = "d:\work\Career\Projects\web\QamoosTech\01-Technical-Engineering"
Set-Location $baseDir

# Languages
New-Item -ItemType Directory -Force "Languages\Python"
New-Item -ItemType Directory -Force "Languages\TypeScript"

Move-Item "Languages\python.md" "Languages\Python\core.md"
Move-Item "Languages\django.md" "Languages\Python\django.md"
Move-Item "Languages\typescript.md" "Languages\TypeScript\core.md"
Move-Item "Languages\nodejs.md" "Languages\TypeScript\nodejs.md"

# Architecture & Security & DevOps
New-Item -ItemType Directory -Force "Architecture"
New-Item -ItemType Directory -Force "Security"
New-Item -ItemType Directory -Force "DevOps"

Move-Item "Backend\apis.md" "Architecture\apis.md"
Move-Item "Backend\authentication.md" "Architecture\authentication.md"
Move-Item "Backend\design-patterns.md" "Architecture\design-patterns.md"

Move-Item "Backend\security.md" "Security\security.md"
Move-Item "Backend\compliance.md" "Security\compliance.md"

Move-Item "Backend\infrastructure.md" "DevOps\infrastructure.md"
Move-Item "Backend\git.md" "DevOps\git.md"
Move-Item "Backend\workflow.md" "DevOps\workflow.md"

Remove-Item "Backend"

# AI and Data
New-Item -ItemType Directory -Force "AI-and-Data\Machine-Learning"
Move-Item "AI-and-Data\ai-concepts.md" "AI-and-Data\Machine-Learning\core.md"

# Frontend
New-Item -ItemType Directory -Force "Frontend\Architecture"
New-Item -ItemType Directory -Force "Frontend\Design"

Move-Item "Frontend\patterns.md" "Frontend\Architecture\patterns.md"
Move-Item "Frontend\tools.md" "Frontend\Architecture\tools.md"
Move-Item "Frontend\ui.md" "Frontend\Design\ui.md"
Move-Item "Frontend\ux.md" "Frontend\Design\ux.md"

Write-Host "Restructuring Complete!"
