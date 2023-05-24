import NavBar from "./components/Nav/NavBar";
import "./App.css";

import ItemListContainter from "./components/ItemList/ItemListContainter";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import CartWidget from "./components/Cart/CartWidget";
import CartContainer from "./components/Cart/CartContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Login from "./components/Login";
import Register from "./components/Register";
import Alquiler from "./components/alquiler";
import Taller from "./components/taller";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";



function App() {
  const storeInfo = {
    storeName: "BicisVal",
    categories: [
      { id: 1, title: "Tienda", link: "/tienda" },
      
      
      
     
    ],
  };
  const token = localStorage.getItem("token");


    if(token != null) {

      

    

     

  return (
    <>
      <NavBar storeInfo={storeInfo} />
      
      
      <div className="cart-widget">
        <CartWidget></CartWidget>
      
      </div>
      
      
      <Switch>
        <Route exact path="/">
          <HomeContent />
        </Route>

        
      
        <Route exact path="/cart">
          <CartContainer />
        </Route>

        <Route exact path="/alquiler">
          <Alquiler />
        </Route>

        <Route exact path="/taller">
          <Taller />
        </Route>

        {storeInfo.categories.map((elem, idx) => (
          <Route exact path={elem.link} key={idx}>
            <ItemListContainter data={elem.title} />
          </Route>
        ))}

        {storeInfo.categories.map((elem, idx) => (
          <Route path={`${elem.link}/:itemID`} key={idx}>
            <ItemDetailContainer />
          </Route>
        ))}
      </Switch>
      <Footer />
    </>
  );
}else {
  return (
  <>



  <Switch>
  <Route exact path="/">
  <Login />
  </Route>

  <Route exact path="/register">
  <Register/>
  </Route>
  </Switch>

</>
  );

}
}

export default App;
