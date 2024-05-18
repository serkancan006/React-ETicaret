import { Fragment } from "react"
import Footer from "../components/Layout/Footer/Footer"
import ProductDetails from "../components/ProductDetails/ProductDetails"
import Header from "../components/Layout/Header/Header"

const ProductDetailsPage = () => {
  return (
    <Fragment>
        <Header />
        <ProductDetails />
        <Footer />
    </Fragment>
  )
}

export default ProductDetailsPage