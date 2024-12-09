// JavaScript for adding dynamic recipes
const recipes = [
    {
        title: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish with creamy sauce and crispy bacon.",
        image: "recipe1.jpg"
    },
    {
        title: "Paneer Tikka",
        description: "Marinated paneer grilled to perfection, a delight for vegetarians.",
        image: "recipe2.jpg"
    },
    {
        title: "Chocolate Cake",
        description: "Rich and moist chocolate cake, perfect for dessert lovers.",
        image: "recipe3.jpg"
    }
];

function loadRecipes() {
    const recipeContainer = document.getElementById("recipeContainer");
    recipes.forEach(recipe => {
        const recipeCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                        <p class="card-text">${recipe.description}</p>
                    </div>
                </div>
            </div>
        `;
        recipeContainer.innerHTML += recipeCard;
    });
}

// JavaScript for handling contact form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        document.getElementById("contactResponse").innerHTML = `
            <p class="text-danger">All fields are required!</p>
        `;
        return;
    }

    // Simulate sending the message
    document.getElementById("contactResponse").innerHTML = `
        <p class="text-success">Thank you, ${name}. Your message has been sent!</p>
    `;

    // Clear the form
    document.getElementById("contactForm").reset();
});

// Load recipes on page load
document.addEventListener("DOMContentLoaded", loadRecipes);
