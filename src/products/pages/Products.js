import ProductList from "../components/ProductList";

import DUMMY_Products from "../components/DUMMY_PRODUCT";
const Products = () => {
    return (
        <ProductList items={DUMMY_Products} />
    );
}

export default Products;