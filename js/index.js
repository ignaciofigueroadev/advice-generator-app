"use strict";

const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceButton = document.getElementById("advice-button");
const apiUrl = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  try {
    const response = await fetch(apiUrl, { cache: "no-cache" });
    const data = await response.json();
    adviceId.innerHTML = `Advice #${data.slip.id}`;
    adviceText.innerHTML = `"${data.slip.advice}"`;
  } catch (error) {
    adviceText.innerHTML = `Error`;
  }
};

getAdvice();

adviceButton.addEventListener("click", getAdvice);
