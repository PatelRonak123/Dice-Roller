const dice_result = document.getElementById("dice-result");
const dice_img = document.getElementById("dice-image");
const roll = document.getElementById("roll");

roll.addEventListener("click", () => {
  const input = parseInt(document.getElementById("input").value, 10);

  const result_dice = [];
  const result_img = [];
  for (let i = 0; i < input; i++) {
    const generated_value = Math.floor(Math.random() * 6) + 1;
    result_dice.push(generated_value);
    result_img.push(`<img src="diceimg/${generated_value}.png" alt="Dice ${generated_value}">`)
  }
  dice_result.textContent = `dice: ${result_dice.join(", ")}`;
  dice_img.innerHTML = result_img.join(" ");
  
});

