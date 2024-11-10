// Initialize car models based on brand selection
const carModels = {
  Toyota: ["Corolla", "Camry", "Yaris"],
  Peugeot: ["208", "308", "3008"],
  BMW: ["X3", "X5", "M3"],
  Mobius: ["II"],
  Tesla: ["Model S", "Model X", "Model 3", "Model Y"]
};

const carBrandSelect = document.getElementById("car-brand");
const carModelSelect = document.getElementById("car-model");
const newCategoryInput = document.getElementById("new-category");
const saveCategoryButton = document.getElementById("save-category");
const clearCategoryButton = document.getElementById("clear-category");

// Populate the model dropdown based on selected brand
carBrandSelect.addEventListener("change", function () {
  const selectedBrand = carBrandSelect.value;

  if (selectedBrand === "add-new-category") {
    // Show input for adding a new category if "Add New Category" is selected
    newCategoryInput.classList.remove("hidden-input");
    saveCategoryButton.classList.remove("hidden-button");
    clearCategoryButton.classList.remove("hidden-button");
    newCategoryInput.focus();
  } else {
    newCategoryInput.classList.add("hidden-input");
    saveCategoryButton.classList.add("hidden-button");
    clearCategoryButton.classList.add("hidden-button");
    carModelSelect.innerHTML = '<option value="">Choose Model</option>';

    // Populate models for the selected brand
    if (carModels[selectedBrand]) {
      carModels[selectedBrand].forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        carModelSelect.appendChild(option);
      });
    }
  }
});

// Save new category
saveCategoryButton.addEventListener("click", function () {
  const newCategory = newCategoryInput.value.trim();

  if (newCategory) {
    // Add the new category as an option
    const option = document.createElement("option");
    option.value = newCategory;
    option.textContent = newCategory;
    carBrandSelect.insertBefore(option, carBrandSelect.lastChild); // Insert before "Add New Category" option
    carModels[newCategory] = [];  // Initialize empty models array for new category
    carBrandSelect.value = newCategory; // Select the new category

    // Hide input fields after saving
    newCategoryInput.classList.add("hidden-input");
    saveCategoryButton.classList.add("hidden-button");
    clearCategoryButton.classList.add("hidden-button");
    newCategoryInput.value = "";  // Clear input field
  }
});

// Clear input for new category when X button is clicked
clearCategoryButton.addEventListener("click", function () {
  newCategoryInput.classList.add("hidden-input");
  saveCategoryButton.classList.add("hidden-button");
  clearCategoryButton.classList.add("hidden-button");
  newCategoryInput.value = "";  // Clear input field
});

// Clear model selection when clear model button is clicked
clearModelButton.addEventListener("click", function () {
  carModelSelect.value = "";
});
