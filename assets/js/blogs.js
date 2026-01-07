const cards = document.querySelectorAll(".blog-card");
const detail = document.getElementById("blogDetail");
const detailImg = document.getElementById("detailImage");
const detailText = document.getElementById("detailText");
const closeBtn = document.querySelector(".close-detail");

cards.forEach((card) => {
  card.querySelector(".btn-detail").addEventListener("click", () => {
    detailImg.src = card.dataset.image;
    detailText.innerHTML = document.querySelector(
      card.dataset.content
    ).innerHTML;

    detail.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

closeBtn.addEventListener("click", () => {
  detail.classList.remove("active");
});
