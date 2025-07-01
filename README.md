<p align="center">
  <img src="https://api.project-furina.xyz/storage/images/logo.jpg" alt="Project Furina Logo" width="180"/>
</p>

# 📖 Project Furina Documentation
> [!IMPORTANT]
> Project Nahida (Project Furina's Developers) do not NOT regularly use GitHub, please allow a few days for Project Nahida Staff to get back to your requests. Thank you!

*The official documentation hub for Project Furina — your go-to resource for setup, guidance, and support.*

---

## 🚀 Getting Started

Install dependencies:

```bash
yarn
```

> [!INFO]
> This installs all required packages using Yarn. Make sure you have it installed globally via `npm install -g yarn`.

---

## 💻 Local Development

Start the development server:

```bash
yarn start
```

> [!TIP]
> This will launch the site at `http://localhost:3000`. Changes you make to source files will automatically reflect in the browser.

---

## 🏗️ Build for Production

Generate static files for deployment:

```bash
yarn build
```

> [!NOTE]
> Output will be placed in the `build/` directory. You can serve this folder using any static site hosting provider (like Render, Vercel, or GitHub Pages).

---

## 🌐 Deployment

Deploy the site to GitHub Pages:

### Using SSH

```bash
USE_SSH=true yarn deploy
```

### Using HTTPS (GitHub Token)

```bash
GIT_USER=<your-github-username> yarn deploy
```

> [!CAUTION]
> Ensure your GitHub repo is set up with Pages support, and that the default branch has publishing enabled.

---

## 🆘 Need Help?

Check the [documentation site](https://docs.project-furina.xyz) or open an [issue](https://github.com/project-furina/docs/issues) if you're stuck.

> [!WARNING]
> Please don’t use the issue tracker for personal support requests. Use it only for bugs or documentation improvements.

---

> 📧 [E-Mail Project Furina](mailto:press@project-furina.xyz)
> ✨ Made with ❤️ by [Project Furina](https://project-furina.xyz)