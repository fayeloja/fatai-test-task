---
# 📌 Frontend Developer Test Assignment

This project is a solution to the **ABZ Agency Frontend Developer Test Assignment**. It is built with **React (Vite)** and **TailwindCSS v4.1** using the provided Figma mockups and style guide.
---

## 🚀 Live Demo

🔗 [Deployed Project Link](https://your-deployment-link.com)

---

## 📂 Repository

🔗 [GitHub Repository](https://github.com/fayeloja/fatai-test-task)

---

## ✅ Completed Tasks

### 1. Working with Mockups (HTML/CSS)

- Implemented pixel-perfect layout from Figma mockups
- Applied TailwindCSS v4.1 with `@theme {}` for design tokens (colors, fonts, radii, etc.)
- Created responsive layout (desktop, tablet, mobile)

### 2. Working with REST API (GET)

- Fetched users list via API (`GET /users`)
- Displayed **6 users initially**, sorted by registration date (newest first)
- Implemented **"Show More"** functionality until no more results are available
- Used **`GET /positions`** to populate radio buttons in registration form

### 3. Working with REST API (POST)

- Built a registration form with **frontend validation** (name, email, phone, position, photo upload)
- Implemented `POST /users` API request
- After successful registration:

  - User list refreshed with the **new user at the top**
  - “Show More” list collapsed back to first page

### 4. Website Optimization (Bonus Task)

- Minimized and optimized **CSS/JS bundles** (via Vite build)
- Optimized images (WebP where possible)
- Performance validated using:

  - ✅ Google PageSpeed Insights (green zone)
  - ✅ Chrome Lighthouse (Performance, SEO, Best Practices)
  - ✅ Webpagetest (close to AAAAAA ratings)

---

## 🛠 Tools & Libraries Used

- **React 18 + Vite** → frontend framework + build tool
- **TailwindCSS v4.1** → utility-first CSS with `@theme {}` config
- **Lucide-react** → modern icons
- **React Hook Form** → form handling + validation
- **Fetch API** → for GET and POST requests
- **Vercel / Netlify** → deployment

---

## 📦 Installation & Setup

1. Clone repository:

   ```bash
   git clone https://github.com/fayeloja/fatai-test-task
   cd fatai-test-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

---

## 📊 Dataset Example (GET /users)

```json
{
  "users": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "phone": "+1 (555) 123-4567",
      "position": "Frontend Developer",
      "registration_timestamp": 1685797200,
      "photo": "https://example.com/photos/alice.jpg"
    }
  ],
  "total_users": 50,
  "page": 1,
  "total_pages": 9
}
```

---

## 📱 Browser Support

Tested on the following (per requirements):

- Windows: Chrome, Firefox, Edge, Safari
- macOS: Chrome, Firefox, Safari
- iOS: Safari, Chrome
- Android: Chrome

---

## 🕒 Time & Challenges

- ⏱ Total hours spent: **X hours**
- ⚠️ Challenges faced:

  - Understanding new Tailwind v4.1 `@theme {}` setup
  - Fine-tuning pixel-perfect alignment from Figma
  - Handling API errors gracefully

---

## 📜 Important Notes

- All materials (mockups, API) are property of **ABZ Agency** and may not be reused for any other purpose.
- This project is **only for evaluation** and **must not** be used in commercial or non-commercial projects.

---

## 👥 HR Contacts

- **Polina**
  📧 [hr_polina_b@abz.agency](mailto:hr_polina_b@abz.agency)
  📱 +380 95 945 5227
  🔗 [LinkedIn](https://www.linkedin.com/in/hr-abz-agency-polina/)

- **Nastya**
  📧 [hr_nastya_p@abz.agency](mailto:hr_nastya_p@abz.agency)
  📱 +380 95 945 5227
  🔗 [LinkedIn](https://www.linkedin.com/in/hr-abz-agency-nastya/)

📧 [hr@abz.agency](mailto:hr@abz.agency)
🌍 [abz.agency](https://www.abz.agency)

---
