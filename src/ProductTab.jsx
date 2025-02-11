import Product from "./Product.jsx";
import Title from "./Title.jsx"; 

function ProductTab(){
    let features = ["good","bad","average"];
return (
    <>
    <Title />
    <Product title="phone" price="30000" features = {features}/> 
    <Product title="laptop" price="50000"/>
    <Product title="pen" price="10000"/>
     </>
);
}

export default ProductTab;