import "./style.css";
import Button from "../Button";

export default function Div() {
	return (
		<div className="product-details">
			<p className="product-type">PERFUME</p>
			<div className="product-name-description">
				<h1>Gabrielle Essence Eau De Parfum</h1>
				<p>
					A floral, solar and voluptuous interpretation composed by Olivier
					Polge, Perfumer-Creator for the House of CHANEL.
				</p>
			</div>
			<div className="product-price">
				<h1>$149.99</h1>
				<p>$169.99</p>
			</div>
			<Button />
		</div>
	);
}
