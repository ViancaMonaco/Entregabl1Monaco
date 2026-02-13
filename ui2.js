function hideSection(hiddenSection){
    document.getElementById(hiddenSection).style.display = "none"
}

function showSection(showenSection){
    document.getElementById(showenSection).style.display = "flex"
}

function renderRecipes(recipesArray) {
    let recipesContainer = document.getElementById("recipesContainer");
    recipesContainer.innerHTML = ""; // Limpiar antes de renderizar

    recipesArray.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card"; // Clase para el diseño de tarjeta
        
        card.innerHTML = `
            <div class="recipe-badge">${recipe.mealType}</div>
            <h3>${recipe.name}</h3>
            <div class="recipe-actions">
                <a href="${recipe.link}" target="_blank" class="link-recipe">Ver receta</a>
                <button class="recipeAdd btn-add" id="${recipe.id}">Agregar</button>
            </div>
        `;
        recipesContainer.appendChild(card);
    });
}