function openGift() {
  const gift = document.getElementById("gift-box");
  const message = document.getElementById("message-card");

  gift.style.display = "none";
  message.classList.remove("hidden");
}
