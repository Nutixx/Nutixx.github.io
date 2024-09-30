const orders = [
    {orderId: 0, customer: {name: 'John', email: 'John@'}, items: [], total: 3333},
    {orderId: 1, customer: {name: 'Victor', email: 'John@'}, items: [], total:5344},
    {orderId: 2, customer: {name: 'John', email: 'John@'}, items: [], total: 3333},
    {orderId: 3, customer: {name: 'John', email: 'John@'}, items: [], total: 3333},
];

function getTotalSpentByCustomer(orders, clientName){
    let filteredOrders = orders.filter(order => order.customer.name == clientName);
    return filteredOrders.reduce((sum, current) => sum + current.total, 0);
}

console.log(getTotalSpentByCustomer(orders, 'John'));