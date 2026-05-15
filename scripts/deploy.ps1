# Werrex — GitHub upload + Vercel deploy
# Run after: gh auth login (complete browser login first)

$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $ProjectRoot

Write-Host "`n=== Checking GitHub login ===" -ForegroundColor Cyan
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "Please login first: gh auth login -h github.com -p https -w" -ForegroundColor Yellow
    exit 1
}

$RepoName = "werrex"

Write-Host "`n=== Creating GitHub repo and pushing ===" -ForegroundColor Cyan
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    gh repo create $RepoName --public --source=. --remote=origin --push --description "Werrex premium agency website (React + Vite + Tailwind)"
} else {
    git branch -M main 2>$null
    git push -u origin main
}

Write-Host "`n=== Deploying to Vercel ===" -ForegroundColor Cyan
npx vercel@latest --prod --yes

Write-Host "`n=== Done! ===" -ForegroundColor Green
gh repo view --web 2>$null
Write-Host "GitHub repo created. Vercel URL shown above."
