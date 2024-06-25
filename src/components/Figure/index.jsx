import "./style.css";
import productDesktop from "../../assets/images/image-product-desktop.jpg";
import productMobile from "../../assets/images/image-product-mobile.jpg";

export default function Figure() {
	return (
		<figure className="product-image">
			<picture>
				<source
					srcSet={productMobile}
					media="(max-width: 768px)"
				/>
				<img
					src={productDesktop}
					alt="product-image"
				/>
			</picture>
		</figure>
	);
}
