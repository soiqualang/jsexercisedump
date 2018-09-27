function solve(meal_cost, tip_percent, tax_percent) {
    console.log(Math.round(meal_cost + (tip_percent/100)*meal_cost + (tax_percent/100)*meal_cost))
}

const meal_cost = 10.25;
const tip_percent = 17;
const tax_percent = 5;

solve(meal_cost, tip_percent, tax_percent);
