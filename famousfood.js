let foods = [
    "Pizza - ₹150",
    "Burger - ₹80",
    "Sandwich - ₹60",
    "Dosa - ₹50",
    "Idli - ₹40",
    "Biryani - ₹180",
    "French Fries - ₹70",
    "Ice Cream - ₹50",
    "Cake - ₹100",
    "Cold Coffee - ₹80"
];

console.log("Food Item List:");

for (let i = 0; i < foods.length; i++) {
    console.log((i + 1) + ". " + foods[i]);
}