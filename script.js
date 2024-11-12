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
const modelSection = document.getElementById("model-section");
const clearModelButton = document.getElementById("clear-model");

// Populate the model dropdown based on selected brand
carBrandSelect.addEventListener("change", function () {
  const selectedBrand = carBrandSelect.value;

  if (selectedBrand === "add-new-category") {
    // Show input for adding a new category if "Add New Category" is selected
    newCategoryInput.classList.remove("hidden-input");
    saveCategoryButton.classList.remove("hidden-button");
    clearCategoryButton.classList.remove("hidden-button");
    newCategoryInput.focus();
    modelSection.style.display = "none"; // Hide model section when adding a new category
  } else {
    // Hide the new category input fields
    newCategoryInput.classList.add("hidden-input");
    saveCategoryButton.classList.add("hidden-button");
    clearCategoryButton.classList.add("hidden-button");
    
    // Reset and populate models for the selected brand
    carModelSelect.innerHTML = '<option value="">Choose Model</option>';
    if (carModels[selectedBrand]) {
      carModels[selectedBrand].forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        carModelSelect.appendChild(option);
      });
    }
    modelSection.style.display = selectedBrand ? "block" : "none"; // Show model section if a valid brand is selected
  }
});

// Save new category
saveCategoryButton.addEventListener("click", function () {
  const newCategory = newCategoryInput.value.trim();

  if (newCategory) {
    // Add the new category as an option before "Add New Category" option
    const option = document.createElement("option");
    option.value = newCategory;
    option.textContent = newCategory;
    carBrandSelect.insertBefore(option, carBrandSelect.querySelector(".add-category-option"));
    carModels[newCategory] = []; // Initialize empty models array for new category
    carBrandSelect.value = newCategory; // Select the new category
    
    // Show model section after saving new category
    modelSection.style.display = "block";

    // Hide input fields and clear the new category input
    newCategoryInput.classList.add("hidden-input");
    saveCategoryButton.classList.add("hidden-button");
    clearCategoryButton.classList.add("hidden-button");
    newCategoryInput.value = ""; // Clear input field
  }
});

// Clear input for new category when X button is clicked
clearCategoryButton.addEventListener("click", function () {
  newCategoryInput.classList.add("hidden-input");
  saveCategoryButton.classList.add("hidden-button");
  clearCategoryButton.classList.add("hidden-button");
  newCategoryInput.value = ""; // Clear input field
});

// Clear model selection and reset brand selection when clear model button is clicked
clearModelButton.addEventListener("click", function () {
  carBrandSelect.value = ""; // Reset brand selection
  carModelSelect.innerHTML = '<option value="">Choose Model</option>'; // Reset models
  modelSection.style.display = "none"; // Hide model section
});
