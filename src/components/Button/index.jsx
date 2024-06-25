import "./style.css";
import iconCart from "../../assets/images/icon-cart.svg";

export default function Button() {
	return (
		<button className="cart-button">
			<img
				src={iconCart}
				alt="icon-cart"
			/>
			Add to Cart
		</button>
	);
}
