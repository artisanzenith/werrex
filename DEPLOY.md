# GitHub + Vercel Deploy Guide

## Step 1. GitHub Login (one time)

Open PowerShell in this folder and run:

```powershell
gh auth login -h github.com -p https -w
```

1. Copy the code shown in terminal
2. Open https://github.com/login/device
3. Paste code and authorize

## Step 2. Upload & Deploy (automatic)

```powershell
cd "c:\Users\Visual Blend\Desktop\werrex"
.\scripts\deploy.ps1
```

This will:
- Create public repo `werrex` on your GitHub
- Push all code
- Deploy to Vercel (first time: browser login for Vercel)

## Manual alternative (Vercel dashboard)

1. Push code to GitHub (step 2)
2. Go to https://vercel.com/new
3. Import your `werrex` repo
4. Framework: **Vite** (auto detected)
5. Click **Deploy**

No environment variables needed for this static site.
