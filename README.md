#  Lina Almutrafi – Personal Portfolio Website (2025)
![Status](https://img.shields.io/badge/status-in_progress-blue)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JS](https://img.shields.io/badge/JavaScript-ES6-yellow)


A modern, responsive, and fully animated personal portfolio website designed and developed using **HTML**, **CSS**, and **JavaScript**. This project serves as a digital résumé and showcase for my skills, certifications, projects, and contact information — all styled with attention to detail, animations, and interactivity.

---

## 1.  Project Description 🧠 :

This personal portfolio aims to professionally present my background in **Computer Science**, with a focus on:

- **Data Science**
- **Artificial Intelligence**
- **Front-End Development**
- **UX/UI Design**

The website is fully client-side, built from scratch without frameworks, and includes responsive design, animated sections, interactive modals, and a contact form.

---

## 2.  Tools & Technologies Used 🛠️ :

| Tool/Library             | Purpose                                |
|--------------------------|----------------------------------------|
| **HTML5**                | Structure and semantic layout          |
| **CSS3**                 | Styling with custom variables, grid, responsive layout |
| **JavaScript (ES6)**     | Interactivity, DOM manipulation, event handling |
| **GSAP**                 | Smooth animations and transitions      |
| **ScrollTrigger**        | Animations triggered by scroll         |
| **Typed.js**             | Typing effect in the hero section      |
| **AOS**                  | Scroll-based animation library         |
| **Particles.js**         | Particle effects in the hero and loading screen |
| **Font Awesome**         | Icons throughout the interface         |

---

## 3.  Project Structure 📂 :

 ```text
 
portfolio-website📦/
├── index.html
├── styles.css
├── script.js
├── images/
│ ├── BSF.jpeg
│ ├── Courser.jpeg
│ ├── Sater.jpeg
│ ├── Hakthon.jpeg
│ ├── UQU.jpeg
│ └── Other.jpeg
├── Pdf/
│ ├── BSF.pdf
│ ├── Coursera.pdf
│ ├── Sater.pdf
│ ├── Hakthon.pdf
│ ├── UQU.pdf
│ └── Other.pdf
└── README.md
 ```
---

## 4.  Key Features 🎨:

- ✅ Fully responsive layout (mobile, tablet, desktop)
- ✅ Glassmorphism UI and modern visual design
- ✅ Animated hero section with custom avatar
- ✅ Interactive soft/technical skills section
- ✅ Certificates with filter and preview modal (PDF & images)
- ✅ Typing animation using Typed.js
- ✅ Scroll-triggered animations via AOS and GSAP
- ✅ Custom cursor and dynamic scroll behavior
- ✅ Contact form with validation and alerts

---

## 5.  Screenshots 📸 : 


##  Screenshots🖼️

| Section          | Screenshot                              | Description                             |
|------------------|------------------------------------------|-----------------------------------------|
| Hero Section     | ![Hero](Interface.jpeg)                  | Landing section with animated greeting and particles |
| Skills Section   | ![Skills](Skills.jpeg)                   | Technical & soft skills with progress bars |
| Certificate Modal| ![Modal](Certificates.jpeg)              |       Modal preview for certificate images/PDF |
| Flowchart        | ![Flowchart](Flowchart.png)              | Visual flow of how the site operates    |


---

## 6.  Flowchart - Website 🧭 :

This chart illustrates the interactive behavior and structure of the website:



##  Step-by-Step Breakdown 🔄

This outlines the user flow and structure of the website:

1. **Start** – User opens the site (`index.html`)
2. **Loading Screen** – Animated logo and progress bar triggered via JS & GSAP
3. **Hero Section** – Animated greeting with Typed.js, GSAP transitions, and custom cursor
4. **Scrolling Down** – Triggers AOS scroll-based animations; sticky navigation bar activated
5. **Section Highlights** – Navigation through:
   - About
   - Skills
   - Projects
   - Certificates
   - Contact
6. **Click Certificate** – Modal popup displays certificate (PDF/image)
7. **Form Interaction** – Contact form appears; footer with additional info
8. **End** – Seamless finish of user journey


---

## 8.  Included Assets 📂 

The portfolio contains real assets used by the author, including:

-  Personal avatar/logo 🧍‍♀️
-  PDF Certificates 📄 
  - BSF.pdf – banquesaudifransi
  - Sater.pdf – Sater Academy
  - Coursera.pdf
- 🖼️ Coursera Certificates (Images):
- ![coursera](Cou%20Fu.jpeg)

-  ![coursera](Cou%20Ask.jpeg)

- ![coursera](Cou%20Pre.jpeg)


 - AI, Data Base, and more...

Each certificate is displayed in a filterable grid and opens in a preview modal when clicked.


---

## 9.  Future Enhancements 📈 :

-  Deploy with custom domain (e.g., lina.dev) 🌐
-  Backend integration for contact form (EmailJS / Firebase) 📩
-  Light/Dark mode toggle 🎨
-  Allow download of résumé/CV PDF 💾
-  Add blog or article publishing section 📝


----

## 10.  About the Author 👩‍💼:

**Lina Saud Almatrafi**  
📍 Makkah, Saudi Arabia  
🎓 B.Sc. in Computer Science – Umm Al-Qura University  
🎯 Passionate about Data Science, AI, UX/UI, and creative front-end design.

📧 Email: linasaud@outlook.sa  
📱 Phone: --

---



## 11. Challenges I Faced 🧱

During the development of this interactive personal portfolio, I encountered several technical and design challenges. Here are the most notable ones:

### 1. Managing Multiple JavaScript Libraries  
Integrating libraries such as GSAP, AOS, Typed.js, and Particles.js required careful script order and configuration to avoid animation conflicts and ensure smooth loading.

### 2. Building a Custom Loading Screen  
Creating a responsive loading screen with animated rings, a logo, and a progress bar was a challenge — especially syncing it with the actual DOM content load without delays.

### 3. Implementing the Custom Cursor  
Designing and animating a dual-layer custom cursor (cursor + follower) using JS and CSS transitions while keeping performance fluid was technically demanding.

### 4. Scroll-Based Animations  
Balancing AOS and GSAP scroll animations across multiple sections required fine-tuning of timing, easing, and trigger points for the best UX.

### 5. Certificate Filter System  
Creating a fully filterable certificate section with custom tags involved DOM manipulation and event handling with pure JavaScript.

### 6. Modal for Certificate Preview  
Building a full-screen modal overlay with proper open/close behavior, image handling, and scroll-lock added complexity to UI control logic.

### 7. Responsive Layout for All Devices  
Ensuring the site looked great and functioned well on all screen sizes meant extensive use of media queries and layout testing.

### 8. Right-to-Left (RTL) Design Considerations  
Designing in Arabic with RTL direction introduced layout challenges, especially when working with animation libraries that default to LTR behavior.

### 9. Animation Timing Conflicts  
Managing animation queues and preventing overlaps between AOS, GSAP, and custom triggers needed precise coordination and structure.

### 10. Keeping Code Clean and Scalable  
As the project grew, it became important to maintain clean code practices, reuse CSS variables, and structure scripts into logical blocks for scalability.

---

###  12. Solutions & Improvements ✅
- Regular use of browser dev tools and console for debugging
- Modular code structure with comments for easier navigation
- Deep reading of library documentation (GSAP, AOS, Typed.js)
- Testing responsiveness using Chrome DevTools across breakpoints
- Gradual performance optimizations (image sizing, animation limits)

---
