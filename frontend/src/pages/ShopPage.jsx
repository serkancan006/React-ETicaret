import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"
import { Fragment } from "react"

const ShopPage = () => {
  return (
    <Fragment>
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
    </Fragment>
  )
}

export default ShopPage