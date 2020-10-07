import React from 'react';
import {connect} from "react-redux";
import './shopping-cart-table.css'
import {allBookRemovedFromCart, bookAddedToCart, bookRemovedFromCart} from "../../actions/actions";

const ShoppingCartTable = ({items, total, onDelete, onIncrease, onDecrease}) => {
    const renderRow = (item, idx) => {
        const {id, title, price, count} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${price}</td>
                <td>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle"/>
                    </button>
                </td>
            </tr>
        )
    };

    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, idx) => {
                        return renderRow(item, idx)
                    })
                }
                </tbody>
            </table>

            <div className='total'>Total: ${total}</div>

        </div>
    );
};

const mapStateToProps = (state) => {
    const {cartItems, orderTotal} = state.shoppingCart;
    return {
        items: cartItems,
        total: orderTotal

    }
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBookRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);