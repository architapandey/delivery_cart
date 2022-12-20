import React, { useContext, useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import { Pincode } from "./deliveryPin";
import PlaceIcon from '@mui/icons-material/Place';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Footer from "./footer";


const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  const [discountPrice, setDiscountPrice] = useState('');
  const [orderTotal, setOrderTotal] = useState('');
  const [shippingCost, setShippingCost] = useState(0);
  const [pinCode, setPinCode] = useState('');
  const [freeDelivery, setFreeDelivery] = useState('false');
  const [standardShipping, setStandardShipping] = useState('NA');
  const [cod, setCOD] = useState('true');
  const [minTime, setMinTime] = useState('');
  const [maxTime, setMaxTime] = useState('');

  const checkOrderTotal = () => {
    setDiscountPrice(totalAmount > 5000 ? totalAmount*0.1 : 0);
    setOrderTotal(totalAmount - discountPrice + shippingCost);
  }

  useEffect(() => {
    setDiscountPrice(totalAmount > 5000 ? totalAmount*0.1 : 0);
    setOrderTotal(totalAmount - discountPrice + shippingCost);
    for(const details of Pincode){
      if(details.deliveryPin === Number(pinCode)){
        setFreeDelivery(details.deliveryPrice === 0 ? 'true' : 'false');
        console.log(freeDelivery);
        setCOD(details.cashOnDelivery);
        setMinTime(details.estimatedDays.min);
        setMaxTime(details.estimatedDays.max);
        setStandardShipping(details.deliveryPrice === 0 ? 'FREE' : `${details.deliveryPrice}₹`)
        setShippingCost(details.deliveryPrice)
      }
    }
    checkOrderTotal();
  }, [pinCode,totalAmount,discountPrice,shippingCost])
  

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
    setShippingCost(0)
  }

  const clearDelivery = () => {
    setPinCode('');
    setMinTime('')
    setMaxTime('')
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="delivery-order-summary">
          <div className="delivery-price">
              <div className="delivery-title">Delivery Availability</div>
              <div >
                <span className="delivery-icon"><PlaceIcon/></span>
                <input 
                  type='number'
                  id="pincode"
                  name="pincode"
                  onChange={handlePinCodeChange}
                  value={pinCode}
                  className="delivery-input"
                />
                <span className="delivery-change" onClick={clearDelivery}>CHANGE</span>
              </div>
              <div className="delivery-status">
                <span className="free-delivery">{freeDelivery === String(true) ? <CheckIcon className="tick-icon"/> : <ClearIcon className="cross-icon"/> }Free Delivery</span>
                <span className="cash-on-delivery">{cod ? <CheckIcon className="tick-icon"/> : <ClearIcon className="cross-icon"/> }COD</span>
                <span className="estimated-delivery"><CheckIcon className="tick-icon"/>Estimated delivery in {minTime} - {maxTime} days</span>
              </div>
          </div>
          <div className="card-total">
            <div className="order-summary-title">Order Summary(xx items)</div>
            <div className="subtotal-title">Sub Total <span className="subtotal-amount">{totalAmount}₹</span></div>
            <div className="subtotal-title">Total Discount <span className="subtotal-amount">{discountPrice}₹</span></div>
            <div className="subtotal-title">Standard Shipping <span className="subtotal-amount">{standardShipping}</span></div>
            <div className="order-total">Order Total<span className="ordertotal-amount">{orderTotal}₹</span></div>
            <div className="buttons"><button>Continue Shopping</button><button>Checkout</button></div>
          </div>
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default ContextCart;
