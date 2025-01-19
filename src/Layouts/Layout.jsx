/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Layout = ({title, children}) => {
    return (
      <section style={{ width: 440 }}>
        <div style={{ backgroundColor: "#888" }}>Header</div>
        <h3>{title}</h3>
        {children}
        <div style={{ backgroundColor: "#888" }}>Footer <Link to= "/support">고객센터</Link></div>
      </section>
    );
  }
  
  export default Layout;