document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const logoContainer = document.getElementById("logoContainer");
  const typedEl = document.getElementById("typed");
  const cursor = document.getElementById("cursor");

  // جملاتی که باید تایپ شوند
  const phrases = [
    "Developer Front End",
    "Phoenix Programming Group"
  ];

  /* ------------------- SPLASH ANIMATION -------------------- */

  // لوگو بیفته پایین
  setTimeout(() => {
    logoContainer.style.transform = "translateY(0)";
    logoContainer.style.opacity = "1";
  }, 100);

  // مخفی شدن اسپلاش
  setTimeout(() => {
    splash.classList.add("hidden");
  }, 3000);

  /* ------------------- TYPING EFFECT -------------------- */

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      // نوشتن حرف‌ها
      typedEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        // کلمه کامل شد → توقف
        setTimeout(() => {
          isDeleting = true;
        }, 1500);
      }
    } else {
      // پاک کردن
      typedEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        // رفت به جمله بعد
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    const speed = isDeleting ? 60 : 120;
    setTimeout(type, speed);
  }

  // شروع تایپ بعد از مخفی شدن اسپلاش
  setTimeout(() => {
    type();
  }, 1000);

  cursor.style.opacity = "1";

  /* ------------------- SCROLL BUTTON (اختیاری) -------------------- */
  const exploreBtn = document.getElementById("exploreBtn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
    });
  }
});
