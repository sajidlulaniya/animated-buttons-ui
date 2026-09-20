document.addEventListener("DOMContentLoaded", () => {

  /* ========================================================
     01 — MAGNETIC BUTTON
  ======================================================== */

  const magneticButtons =
    document.querySelectorAll(".magnetic-btn");

  magneticButtons.forEach((button) => {

    const glow =
      button.querySelector(".magnetic-glow");

    button.addEventListener("mousemove", (event) => {

      const rect =
        button.getBoundingClientRect();

      const mouseX =
        event.clientX - rect.left;

      const mouseY =
        event.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const moveX =
        (mouseX - centerX) * 0.14;

      const moveY =
        (mouseY - centerY) * 0.14;

      button.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

      glow.style.left =
        `${mouseX}px`;

      glow.style.top =
        `${mouseY}px`;

    });

    button.addEventListener("mouseleave", () => {

      button.style.transform =
        "translate(0px, 0px)";

    });

  });


  /* ========================================================
     04 — RIPPLE BUTTON
  ======================================================== */

  const rippleButtons =
    document.querySelectorAll(".ripple-btn");

  rippleButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

      const oldRipple =
        button.querySelector(".ripple-element");

      if (oldRipple) {
        oldRipple.remove();
      }

      const ripple =
        document.createElement("span");

      ripple.classList.add("ripple-element");

      const rect =
        button.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      ripple.style.left =
        `${x}px`;

      ripple.style.top =
        `${y}px`;

      button.appendChild(ripple);

      ripple.addEventListener(
        "animationend",
        () => ripple.remove()
      );

    });

  });


  /* ========================================================
     05 — SUCCESS BUTTON
  ======================================================== */

  const successButtons =
    document.querySelectorAll(".success-btn");

  successButtons.forEach((button) => {

    let running = false;

    button.addEventListener("click", () => {

      if (running) return;

      running = true;

      button.classList.remove("completed");
      button.classList.add("loading");

      /*
       * Simulated async operation.
       * Replace this timeout with your real API request.
       */

      setTimeout(() => {

        button.classList.remove("loading");
        button.classList.add("completed");

        setTimeout(() => {

          button.classList.remove("completed");

          running = false;

        }, 1800);

      }, 1200);

    });

  });

});