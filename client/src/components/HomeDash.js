import React from 'react'
import "../Scss/homedash.css";
import {MdOutlineAddShoppingCart } from "react-icons/md";
import {BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

function HomeDash() {
  return (
    <div>
        <section className="home-section">
  {/* <nav>
    <div className="sidebar-button">
      <i className="bx bx-menu sidebarBtn" />
      <span className="dashboard">Dashboard</span>
    </div>
    <div className="search-box">
      <input type="text" placeholder="Search..." />
      <i className="bx bx-search" />
    </div>
    <div className="profile-details">
      <img src="images/profile.jpg" alt="" />
      <span className="admin_name">Prem Shahi</span>
      <i className="bx bx-chevron-down" />
    </div>
  </nav> */}
  <div className="home-content">
    <div className="overview-boxes">
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total Order</div>
          <div className="number">40,876</div>
          <div className="indicator">
            <i className="bx bx-up-arrow-alt" ><BiUpArrowAlt/></i>
            <span className="text">Up from yesterday</span>
          </div>
        </div>
        <i className="bx bx-cart-alt cart" ><MdOutlineAddShoppingCart/></i>
      </div>
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total Sales</div>
          <div className="number">38,876</div>
          <div className="indicator">
            <i className="bx bx-up-arrow-alt" ><BiUpArrowAlt/></i>
            <span className="text">Up from yesterday</span>
          </div>
        </div>
        <i className="bx bxs-cart-add cart two" ><MdOutlineAddShoppingCart/></i>
      </div>
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total Profit</div>
          <div className="number">$12,876</div>
          <div className="indicator">
            <i className="bx bx-up-arrow-alt" ><BiUpArrowAlt/></i>
            <span className="text">Up from yesterday</span>
          </div>
        </div>
        <i className="bx bx-cart cart three" ><MdOutlineAddShoppingCart/></i>
      </div>
      <div className="box">
        <div className="right-side">
          <div className="box-topic">Total Return</div>
          <div className="number">11,086</div>
          <div className="indicator">
            <i className="bx bx-down-arrow-alt down" ><BiDownArrowAlt/></i>
            <span className="text">Down From Today</span>
          </div>
        </div>
        <i className="bx bxs-cart-download cart four" ><MdOutlineAddShoppingCart/></i>
      </div>
    </div>
  
  <div className="sales-boxes">
  <div className="recent-sales box" >
    <div className="title">Recent Sales</div>
    <div className="sales-details" >
      <ul className="details" >
        <li className="topic" >Date</li>
        <li>
          <a href="#">02 Jan 2021</a>
        </li>
        <li>
          <a href="#">02 Jan 2021</a>
        </li>
        <li>
          <a href="#">02 Jan 2021</a>
        </li>
        <li>
          <a href="#">02 Jan 2021</a>
        </li>
        <li>
          <a href="#">02 Jan 2021</a>
        </li>
        <li>
          <a href="#">02 Jan 2021</a>
        </li>
        <li>
          <a href="#">02 Jan 2021</a>
        </li>
        <li>
          <a href="#">02 Jan 2021</a>
        </li>
        <li>
          <a href="#">02 Jan 2021</a>
        </li>
      </ul>
      <ul className="details">
        <li className="topic">Customer</li>
        <li>
          <a href="#">Alex Doe</a>
        </li>
        <li>
          <a href="#">David Mart</a>
        </li>
        <li>
          <a href="#">Roe Parter</a>
        </li>
        <li>
          <a href="#">Diana Penty</a>
        </li>
        <li>
          <a href="#">Martin Paw</a>
        </li>
        <li>
          <a href="#">Doe Alex</a>
        </li>
        <li>
          <a href="#">Aiana Lexa</a>
        </li>
        <li>
          <a href="#">Rexel Mags</a>
        </li>
        <li>
          <a href="#">Tiana Loths</a>
        </li>
      </ul>
      <ul className="details">
        <li className="topic">Sales</li>
        <li>
          <a href="#">Delivered</a>
        </li>
        <li>
          <a href="#">Pending</a>
        </li>
        <li>
          <a href="#">Returned</a>
        </li>
        <li>
          <a href="#">Delivered</a>
        </li>
        <li>
          <a href="#">Pending</a>
        </li>
        <li>
          <a href="#">Returned</a>
        </li>
        <li>
          <a href="#">Delivered</a>
        </li>
        <li>
          <a href="#">Pending</a>
        </li>
        <li>
          <a href="#">Delivered</a>
        </li>
      </ul>
      <ul className="details">
        <li className="topic">Total</li>
        <li>
          <a href="#">$204.98</a>
        </li>
        <li>
          <a href="#">$24.55</a>
        </li>
        <li>
          <a href="#">$25.88</a>
        </li>
        <li>
          <a href="#">$170.66</a>
        </li>
        <li>
          <a href="#">$56.56</a>
        </li>
        <li>
          <a href="#">$44.95</a>
        </li>
        <li>
          <a href="#">$67.33</a>
        </li>
        <li>
          <a href="#">$23.53</a>
        </li>
        <li>
          <a href="#">$46.52</a>
        </li>
      </ul>
    </div>
    <div className="button">
      <a href="#">See All</a>
    </div>
  </div>
  <div className="top-sales box">
    <div className="title">Top Seling Product</div>
    <ul className="top-sales-details">
      <li>
        <a href="#">
          <img src="data:image/jpeg;base64,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" alt="" />
          <span className="product">Vuitton Sunglasses</span>
        </a>
        <span className="price">$1107</span>
      </li>
      <li>
        <a href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvMtjMNLOgPJS44HEysYsYHO6chrqsyTRT0tYnIKekSVWpWRnsseYImtFDWs9su7vW1o&usqp=CAU" alt="" />
          <span className="product">Hourglass Jeans </span>
        </a>
        <span className="price">$1567</span>
      </li>
      <li>
        <a href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslLznkf4dned-9o7a69CGgCtE76TSLwBJQA&usqp=CAU" alt="" />
          <span className="product">Nike Sport Shoe</span>
        </a>
        <span className="price">$1234</span>
      </li>
      <li>
        <a href="#">
          <img src="data:image/jpeg;base64,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" alt="" />
          <span className="product">Hermes Silk Scarves.</span>
        </a>
        <span className="price">$2312</span>
      </li>
      <li>
        <a href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVMyDg5Zq0XCJruD8aD8pCnM_dgTAQw4R-w&usqp=CAU" alt="" />
          <span className="product">Succi Ladies Bag</span>
        </a>
        <span className="price">$1456</span>
      </li>
      <li>
        <a href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NUaF-qh7dAL2UWgfq0W2QERiwA3594jYlQOdUG0-nrRTxa1oOZf6LlXAdRihdKcip5M&usqp=CAU" alt="" />
          <span className="product">Gucci Womens's Bags</span>
        </a>
        <span className="price">$2345</span>
      </li>
      <li>
        <a href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhfBjv9_R_8r7qpQ4KZ1nXu_Ld6cXSUfErg&usqp=CAU" alt="" />
          <span className="product">Addidas Running Shoe</span>
        </a>
        <span className="price">$2345</span>
      </li>
      <li>
        <a href="#">
          <img src="data:image/jpeg;base64,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" alt="" />
          <span className="product">Bilack Wear's Shirt</span>
        </a>
        <span className="price">$1245</span>
      </li>
    </ul>
  </div>
</div>
</div>
</section>

    </div>
  )
}

export default HomeDash