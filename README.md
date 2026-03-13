# KushSEO - Professional SEO Portfolio

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://kushan.github.io/seo_optimizer/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A high-performance, responsive portfolio website designed for an SEO Specialist & Consultant. This project demonstrates modern web development practices tailored for digital marketing professionals, featuring technical SEO optimizations, responsive design, and interactive user elements.

## 📖 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Installation & Local Development](#installation--local-development)
- [Project Architecture](#project-architecture)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🔍 Overview

This repository contains the source code for a static portfolio website built to showcase SEO expertise. The site is engineered to be lightweight, fast, and accessible, reflecting the core principles of technical SEO. It serves as a central hub for case studies, service offerings, and client testimonials.

## 🚀 Key Features

*   **Responsive & Adaptive Design**: Seamlessly adapts to all viewport sizes (Desktop, Tablet, Mobile) using CSS Flexbox and Grid.
*   **Performance Optimized**: Minimized layout shifts and optimized asset loading for superior Core Web Vitals scores.
*   **Interactive UI Components**:
    *   Mobile-responsive navigation with toggle functionality.
    *   Smooth scrolling for enhanced user experience.
    *   FAQ Accordion for structured content delivery.
    *   Scroll-triggered fade-in animations.
*   **Lead Generation**: Integrated contact form simulation with validation logic.
*   **SEO Best Practices**: Semantic HTML5 markup, proper meta tag implementation, and structured data readiness.
*   **Dynamic Visuals**: CSS-only animated hero visuals and charts.

## 🛠 Technology Stack

This project utilizes a pure, dependency-free stack to ensure maximum performance and control.

*   **Frontend Core**:
    *   **HTML5**: Semantic structure and accessibility (a11y).
    *   **CSS3**: Custom properties (variables), Flexbox/Grid layouts, and CSS animations.
    *   **JavaScript (ES6+)**: Vanilla JS for DOM manipulation, `IntersectionObserver` API for animations, and event handling.
*   **Assets & Typography**:
    *   **Font Awesome**: Vector icons for UI elements.
    *   **Google Fonts**: Montserrat (Headers) and Open Sans (Body) for typography.
*   **DevOps**:
    *   **GitHub Actions**: CI/CD pipeline for automated deployment to GitHub Pages.

## 💻 Installation & Local Development

To run this project locally on your machine, follow these steps:

### Prerequisites

*   Git installed on your local machine.
*   A modern web browser (Chrome, Firefox, Edge, Safari).
*   A code editor (VS Code recommended).

### Steps

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/kushan/seo_optimizer.git
    ```

2.  **Navigate to Project Directory**
    ```bash
    cd seo_optimizer
    ```

3.  **Launch the Application**
    *   **Option A (Simple)**: Locate `index.html` in your file explorer and double-click to open it in your browser.
    *   **Option B (Recommended)**: Use a local development server (e.g., Live Server extension for VS Code) to mimic a production environment.

## 📂 Project Architecture

```plaintext
seo_optimizer/
├── index.html      # Primary entry point; semantic HTML structure
├── styles.css      # Global styling, responsive rules, and theming
├── main.js         # Client-side logic, routing, and interactions
├── hero.png        # Optimized hero asset
├── deploy.yml      # GitHub Actions workflow configuration
└── README.md           # Project documentation
```

## 🌐 Deployment

This project utilizes **GitHub Actions** for continuous deployment.

*   **Workflow**: Defined in `deploy.yml`.
*   **Trigger**: Pushes to the `main` branch automatically trigger a build and deploy process.
*   **Target**: The static site is hosted via GitHub Pages.

## 🤝 Contributing

Contributions are welcome! If you would like to improve this project:

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kushan**
*   *SEO Specialist & Consultant*
*   [Portfolio](https://kushan.github.io/seo_optimizer/)

---
*© 2026 KushSEO. All Rights Reserved.*
