# Deployment Guide: Next.js on Render

Follow these steps to deploy your portfolio to Render.

## 1. Prepare your Code
Ensure your code is pushed to a **GitHub** or **GitLab** repository.

## 2. Create a New Web Service on Render
1. Go to [Render Dashboard](https://dashboard.render.com).
2. Click **"New +"** and select **"Web Service"**.
3. Connect your GitHub account and select your `portfolio` repository.

## 3. Configuration Settings
Use these settings during the setup:

| Setting | Value |
| :--- | :--- |
| **Name** | `your-portfolio-name` |
| **Region** | `Oregon (US West)` (or closest to you) |
| **Branch** | `main` |
| **Root Directory** | `myfolio` (since your app is in a subfolder) |
| **Runtime** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |

## 4. Resource Provider
- Select the **"Free"** instance type (ideal for portfolios).

## 5. Environment Variables
If you have any sensitive information (like API keys), add them in the **"Environment"** tab on Render.

## 6. Deploy
Click **"Create Web Service"**. Render will start building your app. Once done, you'll get a URL like `my-portfolio.onrender.com`.

> [!TIP]
> Since you are using a subfolder `myfolio`, make sure the **Root Directory** is set correctly in Render's settings so it knows where to look for `package.json`.
