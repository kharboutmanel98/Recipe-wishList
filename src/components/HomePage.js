import Footer from "./Footer";
import Content from "./Content";
import styles from "../App.module.scss";
import Header from "./Header";

function HomePage (){

   return (
    <div className={`d-flex flex-column  ${styles.appContainer}`}>
    <Header/>
    <Content />
    <Footer />
  </div>  
   );
}

export default HomePage;