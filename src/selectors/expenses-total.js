export default (expenses) => {
    return expenses.reduce(function(a, b) { return a + b.amount; }, 0);
};
