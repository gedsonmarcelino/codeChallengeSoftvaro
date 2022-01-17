import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Billing from "../../../components/container/Billing";
import ImgSect4 from '../../../images/ImageSection4.png';

describe("Testing App.jsx", () => {
	it("should be able to show the h1 element", () => {
		render(<Billing />);

		const imageElement = screen.getByAltText('Billing Dashboard')
		expect(imageElement).toBeInTheDocument()
		expect(imageElement.getAttribute('src')).toEqual(ImgSect4)

		const section = imageElement.closest('section')
		expect(section?.className).toEqual('billing')
	});
});