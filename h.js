const cards = document.querySelectorAll(".card");

locationSelect.addEventListener("change", () => {
  const selected = locationSelect.value;

  cards.forEach(card => {
    if (selected === "all" || card.dataset.location === selected) {
      card.style.display = "block";
      card.style.animation = "fadeIn 0.8s ease-in-out";
    } else {
      card.style.display = "none";
    }
  });
});
