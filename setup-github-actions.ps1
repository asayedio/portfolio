# ?? Quick GitHub Actions Setup Script

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  GitHub Actions + Vercel Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Vercel CLI is installed
Write-Host "Checking Vercel CLI..." -ForegroundColor Yellow
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel@latest
} else {
    Write-Host "? Vercel CLI already installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 1: Login to Vercel" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Running: vercel login" -ForegroundColor Yellow
vercel login

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 2: Link Vercel Project" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Running: vercel link" -ForegroundColor Yellow
vercel link

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 3: Get Your IDs" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

if (Test-Path ".vercel/project.json") {
    $projectJson = Get-Content ".vercel/project.json" | ConvertFrom-Json
    
    Write-Host ""
    Write-Host "? Project Linked Successfully!" -ForegroundColor Green
    Write-Host ""
  Write-Host "?? Your Vercel IDs:" -ForegroundColor Cyan
    Write-Host "-----------------------------------" -ForegroundColor Gray
    Write-Host "Organization ID: " -NoNewline -ForegroundColor Yellow
    Write-Host $projectJson.orgId -ForegroundColor White
    Write-Host "Project ID:      " -NoNewline -ForegroundColor Yellow
    Write-Host $projectJson.projectId -ForegroundColor White
    Write-Host "-----------------------------------" -ForegroundColor Gray
    Write-Host ""
  
    # Save IDs to a file for reference
    $idsContent = @"
# Vercel IDs - Add these to GitHub Secrets

VERCEL_ORG_ID=$($projectJson.orgId)
VERCEL_PROJECT_ID=$($projectJson.projectId)

# Also need to add:
# VERCEL_TOKEN=<your-vercel-access-token>
# Get token from: https://vercel.com/account/tokens
"@
    
    $idsContent | Out-File -FilePath ".vercel/github-secrets.txt" -Encoding UTF8
  Write-Host "? IDs saved to: .vercel/github-secrets.txt" -ForegroundColor Green
} else {
    Write-Host "? Could not find .vercel/project.json" -ForegroundColor Red
    Write-Host "Please run 'vercel link' manually" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Next Steps" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Get Vercel Access Token:" -ForegroundColor Yellow
Write-Host "   ? Visit: https://vercel.com/account/tokens" -ForegroundColor Gray
Write-Host "   ? Create new token" -ForegroundColor Gray
Write-Host " ? Copy the token" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Add Secrets to GitHub:" -ForegroundColor Yellow
Write-Host "   ? Visit: https://github.com/asayedio/portfolio/settings/secrets/actions" -ForegroundColor Gray
Write-Host "   ? Add three secrets:" -ForegroundColor Gray
Write-Host "     - VERCEL_TOKEN (from step 1)" -ForegroundColor Gray
Write-Host "     - VERCEL_ORG_ID (shown above)" -ForegroundColor Gray
Write-Host "     - VERCEL_PROJECT_ID (shown above)" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Push GitHub Actions Workflow:" -ForegroundColor Yellow
Write-Host "   ? Run: git add .github/workflows/deploy.yml" -ForegroundColor Gray
Write-Host "   ? Run: git commit -m 'Add GitHub Actions workflow'" -ForegroundColor Gray
Write-Host "   ? Run: git push" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Check Deployment:" -ForegroundColor Yellow
Write-Host "   ? Visit: https://github.com/asayedio/portfolio/actions" -ForegroundColor Gray
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "?? See GITHUB-ACTIONS-SETUP.md for detailed instructions" -ForegroundColor Cyan
Write-Host ""
