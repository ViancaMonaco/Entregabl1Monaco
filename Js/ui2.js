function hideSection(hiddenSection){
    document.getElementById(hiddenSection).style.display = "none"
}

function showSection(showenSection){
    document.getElementById(showenSection).style.display = "flex"
}

function renderRecipes(recipesArray) {
    let recipesContainer = document.getElementById("recipesContainer")
    recipesContainer.innerHTML = ""

    recipesArray.forEach(recipe => {
        const card = document.createElement("div")
        card.className = "recipe-card"
        
        card.innerHTML = `
            <div class="recipe-badge">${recipe.mealType}</div>
            <h3>${recipe.name}</h3>
            <div class="recipe-actions">
                <a href="${recipe.link}" target="_blank" class="link-recipe">Ver receta</a>
                <button class="recipeAdd btn-add" id="${recipe.id}">Agregar</button>
            </div>
        `
        recipesContainer.appendChild(card)
    })
}

function renderCart(cartArray) {
    console.log(cartArray)
    const cartContainer = document.getElementById("cartContainer")
    cartContainer.innerHTML = ""

    if (cartArray.length === 0) {
        cartContainer.innerHTML = '<p class="empty-msg">Aún no has seleccionado ninguna receta.</p>'
        return;
    }

    cartArray.forEach(item => {
        const div = document.createElement("div")
        div.className = "cart-item"
        div.innerHTML = `
            <div class="cart-item-info">
                <span>${item.mealType}</span>
                <h4>${item.name}</h4>
            </div>
            <button class="btn-remove" onclick="removeFromCart('${item.id}')">✕</button>
        `
        cartContainer.appendChild(div)
    })
}