# ApexPlanet Task 1 — Personal Portfolio

**Student:** Vyshnavi Ramisetty  
**Internship:** Full Stack Web Development — ApexPlanet Software Pvt. Ltd.  
**Task:** Task 1 — Foundation & Environment Setup

## Project

A responsive personal portfolio website built with:

- HTML5 semantic structure
- CSS3, Flexbox, Grid and media queries
- Vanilla JavaScript
- DOM manipulation and event handling
- Client-side form validation
- Git and GitHub
- GitHub Pages deployment

## Folder Structure

```text
ApexPlanet_Task1_Portfolio/
├── index.html
├── README.md
├── TASK-1-CHECKLIST.md
├── DEMO-SCRIPT.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── script.js
└── php/
    └── hello.php
```

## Run Locally

### Option 1 — VS Code Live Server
1. Open this folder in VS Code.
2. Install/use Live Server.
3. Right-click `index.html`.
4. Choose **Open with Live Server**.

### Option 2 — XAMPP
The internship task asks you to set up XAMPP/WAMP/LAMP and test PHP. The included `php/hello.php` can be tested through Apache.

For XAMPP:
1. Install XAMPP.
2. Start **Apache** and **MySQL** from XAMPP Control Panel.
3. Copy this project into:
   `C:\xampp\htdocs\ApexPlanet_Task1_Portfolio`
4. Open:
   `http://localhost/ApexPlanet_Task1_Portfolio/`
5. Test PHP:
   `http://localhost/ApexPlanet_Task1_Portfolio/php/hello.php`

## GitHub

The project is designed for GitHub Pages because it is a static HTML/CSS/JS website.

```bash
git status
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git branch -M main
git push -u origin main
```

Then on GitHub:

**Repository → Settings → Pages → Deploy from branch → main → / (root) → Save**

Your site will be available at the GitHub Pages URL shown by GitHub.

## Before Submission

Replace the placeholder email in `index.html`:

```text
your.email@example.com
```

You can also add your actual GitHub/LinkedIn links when you are ready.

## Important

The contact form is intentionally frontend-only for Task 1. It validates the input using JavaScript but does not send an email because no backend is included in this task.

The repository is prepared with **10 meaningful local Git commits** to satisfy the internship's minimum-commit requirement. If you use this folder's existing `.git` history and push it to a new repository, the history will be retained.

<!-- Task 1 final documentation milestone -->
