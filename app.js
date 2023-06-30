const meals = {
	breakfast: {
		entrees: ['waffles', 'a granola bar', 'pancakes', 'a breakfast burrito', 'an omelette', 'scrambled eggs', 'fried eggs', 'hard-boiled eggs', 'a bowl of Honey O\'s', 'a bowl of Fruit Loops', 'Cheerios', 'Mac-N-Cheese', 'corned-beef hash'],
		sides: ['bananas', 'apples', 'berries', 'bacon', 'socks', 'sausage links', 'potatoes', 'hash browns'],
		drinks: ['milk', 'water', 'orange juice', 'apple juice', 'cranberry juice', 'smoothie', 'sea water', 'black coffee', 'creamer with some coffee in it', 'sugar with a hint of coffee'],
	},

	lunch: {
		entrees: ['Lunch-ables', 'Mac-N-Cheese', 'a ham and turkey sandwich', 'a gourmet PBJ sandwich', ' a grilled cheese sandwich', 'a chicken wrap', 'booger salad', 'meat and cheese roll-ups', 'a power salad', 'gas station egg-salad sandwich', 'tuna crackers', 'McDonalds'],
		sides: ['baby carrots', 'baby corn', 'potato chips', 'yogurt', 'dog treats', 'bell peppers', 'cucumbers', 'strawberries', 'blueberries', 'raspberries', 'string-cheese', 'circle cheese', 'anchovies', 'dill pickle'],
		drinks: ['fruit punch', 'water', 'milk', 'juice-box', 'lemonade', 'iced tea', 'arnold palmer', 'booger sauce', 'soda-pop', 'more coffee', 'pool water'],
	},

	dinner: {
		entrees: ['salmon', 'drum-sticks', 'steak', 'chicken tenders', 'chicken breast', 'tacos', 'more tacos', 'deconstructed tacos', 'korean lettuce wraps', 'beef burritos', 'hamboogers', 'spaghetti', 'enchiladas', 'Mac-N-Cheese', 'tater-tot hot-dish', 'chicken pot-pies', 'pepperoni pizza', 'supreme pizza', 'hawaiian pizza', 'sardine, eggplant and molasses pizza', 'gourmet soup', 'grilled cheese', 'Chick-fil-a', 'stromboli', 'chicken alfredo', 'tee-pee-tiiip-a-dill-a-dop-dil-ooh', 'chef salad', 'everything-salad'],
		sides: ['roasted carrots', 'rice', 'peas', 'green beans', 'roasted potatoes', 'meatballs', 'mashed potatoes', 'sweet potatoes', 'french fries', 'soup', 'fried toothpaste wraps', 'caesar salad', 'side salad', 'bowl of ranch dressing'],
		drinks: ['water', 'beer', 'red wine', 'white wine', 'milk', 'iced tea', 'vodka', 'tea', 'even more coffee'],
	},

	dessert: {
		bases: ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream', 'bubble-gum ice cream', 'turtle ice cream', 'chocolate chip cookies', 'ice cream sandwiches', 'peanut butter cookies', 'apple pie', 'pecan pie', 'pumpkin pie', 'cheesecake', 'chocolate cake', 'birthday cake', 'plumb pie', 'Hantzel and Grettle pie', 'strawberry pie', 'mag pie', 'candy bars', 'lollipops', 'frozen yogurt', 'popsicles'],
		toppings: ['whipped cream', 'chocolate syrup', 'chopped nuts', 'caramel', 'something rainbow-y', 'party sprinkles', 'cherries', 'blueberry sauce', 'strawberry sauce', 'awesome sauce', 'sour cream', 'powdered sugar', 'regular ol\' sugar', 'brown sugar', 'icing', 'M&Ms', 'chocolate chips'],
		hintOf: ['hazelnut', 'cinnamon', 'fart', 'wet dog', 'curry', 'basil', 'brown sugar', 'coffee', 'hot pepper', 'lemon', 'lime', 'sea salt', 'sherry', 'cognac', 'bourbon']
	}
};

/**
 * getRandomIngredient
 * @param {Array} options An array of ingredients
 * @returns	A string containing the randomly chosen ingredient
 */
const getRandomIngredient = (options) => {
	console.log("Options", options)
	let index = Math.floor(Math.random()*options.length);
	return options[index];
}

/**
 * getMeal
 * @param {String} type The meal that was selected (breakfast, lunch, dinner or dessert)
 * @param {Bool} withDessert Whether to include desert with the meal selection
 * @returns A string with the randomly chosen meal ingredients
 */
const getMeal = (type, withDessert = false) => {
	console.log("Type:", type, "Dessert", withDessert);
	if(!['breakfast', 'lunch', 'dinner', 'dessert'].includes(type)) return 'Invalid Meal Type!';
	let meal = '';

	const entree = getRandomIngredient(meals[type].entrees);
	const side = getRandomIngredient(meals[type].sides);
	const drink = getRandomIngredient(meals[type].drinks);

	meal += `Your ${type} today will be ${entree} with a side of ${side} and a tall glass of ${drink}.`;

	if(withDessert) {
		const dessert = getRandomIngredient(meals.dessert.bases);
		const topping = getRandomIngredient(meals.dessert.toppings);
		const hintOf = getRandomIngredient(meals.dessert.hintOf);
		meal += `<br><br>For dessert, your taste buds should enjoy our signature ${dessert} topped with ${topping} and finished with a hint of ${hintOf}.`;
	}
	return meal;
}

/**
 * initMealPlan
 * @param {Event} evt The event interface from the button click
 */
const initMealPlan = (evt) => {
	const mealType = document.querySelector('input[name="meal-type"]:checked')?.value ?? "breakfast";
	const includeDessert = document.getElementById('include-dessert')?.checked ?? false;
	const message = getMeal(mealType, includeDessert);
	document.getElementById('meal-output').innerHTML = message;
}

document.addEventListener("DOMContentLoaded", function() {
	let goButton = document.getElementById('get-meal');
	goButton.addEventListener('click', function(evt) {
		initMealPlan(evt);
	});
});