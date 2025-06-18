// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Skill bar animation on scroll
  window.addEventListener("scroll", () => {
    const skills = document.querySelectorAll(".progress");
    skills.forEach(bar => {
      const top = bar.getBoundingClientRect().top;
      if (top < window.innerHeight) {
        bar.style.animation = "fill 2s forwards";
      }
    });
  });

  // Image modal logic
  window.openModal = function (imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
  };

  window.closeModal = function () {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  };

  // Bubble background animation
  const bubbleContainer = document.querySelector(".bubble-container");

  function createBubble() {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
    bubble.style.opacity = Math.random();
    bubble.style.width = bubble.style.height = `${Math.random() * 10 + 10}px`;
    bubble.style.background = `rgba(0, 212, 255, ${Math.random() * 0.4 + 0.2})`;

    bubbleContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), 5000);
  }

  setInterval(createBubble, 200);
});
