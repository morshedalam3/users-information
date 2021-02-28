import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        totalSalary = totalSalary + user.salary;
        
    }
    // const totalSalary = cart.reduce((sum, user) => sum + user.salary);

    return (
        <div>
            <h5>Added Friend {cart.length}</h5>
            <h4>Total Salary: {totalSalary}$</h4>
        </div>
    );
};

export default Cart;