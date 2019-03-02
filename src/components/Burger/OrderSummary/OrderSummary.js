import React, { Component } from "react";

import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("[OrderSummery] will update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredient:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxiliary>
    );
  }
}

export default OrderSummary;
