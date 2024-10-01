const orders = [
    { orderId: 0, customer: { name: 'John', email: 'John@' }, items: [], total: 3333 },
    { orderId: 1, customer: { name: 'Victor', email: 'John@' }, items: [], total: 5344 },
    { orderId: 2, customer: { name: 'John', email: 'John@' }, items: [], total: 3333 },
    { orderId: 3, customer: { name: 'John', email: 'John@' }, items: [], total: 3333 },
];

function getTotalSpentByCustomer(orders, clientName) {
    let filteredOrders = orders.filter(order => order.customer.name == clientName);
    return filteredOrders.reduce((sum, current) => sum + current.total, 0);
}

console.log('getTotalSpentByCustomer -', getTotalSpentByCustomer(orders, 'John'));

const products = [
    { productId: 0, name: 'product', price: 323 },
    { productId: 1, name: 'product2', price: 113 },
];
const purchases = [
    { purchaseId: 0, productId: 0, quantity: 1 },
    { purchaseId: 1, productId: 0, quantity: 2 },
    { purchaseId: 2, productId: 1, quantity: 2 },
];

function getTotalSales(productName, products, purchases) {
    desiredProduct = products.find(product => product.name == productName);
    return purchases.reduce((total, purchase) => {
        const currentProduct = products[purchase.productId];
        if (currentProduct.productId == desiredProduct.productId) {
            total += currentProduct.price * purchase.quantity;
        }
        return total;
    }, 0);

}

console.log('getTotalSales -', getTotalSales('product', products, purchases));