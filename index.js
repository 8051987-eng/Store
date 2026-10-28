document.getElementById("r").addEventListener("input", (event) => {
  const word = "oranges"

  if (event.target.value === word) {
   confirm("Are you sure you want oranges")
    window.location.href="oranges.html"
  } 
});

document.getElementById("r").addEventListener("input", (event) => {
  const word = "pickles"

  if (event.target.value === word) {
   confirm("Are you sure you want pickles")
    window.location.href="pickals.html"
  } 
});

document.getElementById("r").addEventListener("input", (event) => {
  const word = "shoes"
  if (event.target.value === word) {
   confirm("Are you sure you want shoes")
    window.location.href="shoes.html"
  } 
});
