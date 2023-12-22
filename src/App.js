
import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Navigation/Nav';
import Product from './Products/Product';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import data from "../src/db/data"
import Card from './components/Card';
function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [products, setProduct] = useState([])


  // Input Filter
  const [query, setQuery] = useState("")

  const handleInputChange = (event) => {
    console.log(event.target.value); // Corrected typo here
    setQuery(event.target.value);
  }

  //Radio filter
  const handleChange = (event) => {

    setSelectedCategory(event.target.value);
  }

  // button Filter

  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }


  function FilteredData(products, selected, query) {



    let filteredProducts = products;


    if (query) {
      filteredProducts = products.filter(product => product.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);;
    }


    //Selected Filter

    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => category === selected || color === selected
        || company === selected || newPrice === selected || title === selected)
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }, { index }) => (
      <Card key={index}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice} />
    ))
  }

  // useEffect(() => {
  //   const result = FilteredData(products, selectedCategory, query);
  //   setProduct(result);
  // }, [isload])


  useEffect(() => {
    const result = FilteredData(data, selectedCategory, query);
    setProduct(result);

  }, [data, selectedCategory, query])

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product products={products} />

    </>
  );
}

export default App;
