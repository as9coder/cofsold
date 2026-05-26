// app.ts
interface Coffee {
    name: string;
    price: number;
}

const menu: Coffee[] = [
    { name: "Espresso", price: 3.00 },
    { name: "Latte", price: 4.00 },
    { name: "Cappuccino", price: 4.50 },
    { name: "Americano", price: 3.50 },
    { name: "Mocha", price: 4.75 }
];

function displayMenu(): void {
    const menuList = document.getElementById('menu-list');
    if (menuList) {
        menuList.innerHTML = menu.map(coffee =>
            `<li><span class="name">${coffee.name}</span><span class="price">$${coffee.price.toFixed(2)}</span></li>`
        ).join('');
    }
}

document.addEventListener('DOMContentLoaded', displayMenu);

// Additional basic functionality
function greetCustomer(name: string): string {
    return `Welcome to our coffee shop, ${name}! Enjoy our freshly brewed coffee.`;
}

console.log(greetCustomer('Guest'));
console.log('Coffee shop website loaded successfully.');