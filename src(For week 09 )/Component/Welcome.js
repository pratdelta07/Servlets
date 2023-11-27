// Welcome.js
import React from "react";
import MainNavbar from "./MainNavbar";
import { Carousel, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Welcome.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" className="fa fa-search" placeholder="Search your product here" /><i class="fa fa-search"></i>
      <button type="submit"></button>
    </div>
  );
}
function Welcome() {
  const imagePaths1 = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ifxx79AaXv-DUZdJtHWpXvgJCB8YgtVpdQ&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cipla_logo.svg/375px-Cipla_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pfizer_%282021%29.svg/375px-Pfizer_%282021%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Alembic_Pharmaceuticals_Ltd_logo.png/330px-Alembic_Pharmaceuticals_Ltd_logo.png",
    ]
  
  const carouselImages1 = [
    "https://storage-prtl-co.imgix.net/endor/articles/2807/images/1592226476_volodymyr-hryshchenko-e8yfkjn2czy-unsplash_c.jpg",
    "https://as1.ftcdn.net/v2/jpg/05/28/72/94/1000_F_528729467_7SYhqTTWk4KG33OO3PkQNHiuLg5LQDDM.jpg",
    "https://img.freepik.com/free-vector/telemedicine-isometric-composition-doctor-studying-information-about-patient-health-laptop-screen-blue_1284-31462.jpg?size=626&ext=jpg&ga=GA1.1.40795630.1700712467&semt=ais",
    "https://img.freepik.com/free-vector/medicine-delivery-courier-service-flat-set-five-isolated-compositions-with-app-order-bicycle-delivery-vector-illustration_1284-74351.jpg?size=626&ext=jpg&ga=GA1.1.40795630.1700712467&semt=ais",
    ]

  const carouselImages = [
    "https://img.freepik.com/free-vector/professional-pharmaceutical-science-pharmacist-checking-medicaments-pharmacy-store-pharmacy-business-medicine-drug-store-character-flat-cartoon-vector-illustration_1150-58792.jpg?size=626&ext=jpg&ga=GA1.1.40795630.1700712467&semt=sph",
    "https://img.freepik.com/free-photo/good-health-message-board-with-green-apple-stethoscope-white-background_23-2147883739.jpg?size=626&ext=jpg&ga=GA1.1.40795630.1700712467&semt=ais",
    "https://img.freepik.com/free-vector/tablet-pharmacy-online-concept_1284-16210.jpg?size=626&ext=jpg&ga=GA1.1.40795630.1700712467&semt=ais",
    "https://img.freepik.com/free-vector/midgets-medication-concept_1284-16209.jpg?size=626&ext=jpg&ga=GA1.1.40795630.1700712467&semt=sph",
  ];

  const imagePaths = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3o3ng_uTMS9TdKvAt-E5P_Pms0X3yX6ya5w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZsHT4_toyElEhQ4WsNYPzJazCJre1QVQPA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbremFmhxPRd4NbDSmt4Qa91beR85wak2Bqw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3yu0l02HGU5v_A5qmcZpNXN31IxkAiOdbA&usqp=CAU",
    "https://www.thekarelab.com/cdn/shop/products/auto-disable-syringes-with-safety-needle-381192_800x800.png?v=1613322463",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ecvmTyVgXJa9PRjcALCLFG2wKXTMPSaGmA&usqp=CAU",
    ];
  const additionalTexts = ["Tablets", "Syrups", "Protien Powders", "First Aids", "Emergency Supplies", "Skincare"];

  return (
    <div>
      <MainNavbar />
      <header className="header">
        <h1 className="page-heading">"GET YOUR MEDICINES AND ESSENTIALS DELIVERED AT YOUR DOORSTEP"</h1>
        <SearchBar />
      </header>

      <Carousel>
        {carouselImages1.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Carousel ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      
      <div className="today-offers">  
        <p className="shop-category today-offers">Today's Offers</p>
        <img src="https://topflightapps.com/wp-content/uploads/2022/06/PharmEasy-pharmacy-mobile-app-example-1.png" alt="Today's Offer Image" />
      <br></br>
      </div>
      <div className="center-align-container">
        <p className="center-align shop-category">
          Unlock the door to wellness with Pharma-Easy "Where Good Health Meets Convenience"
        </p>
      </div>

      <Container>
        <Carousel>
          {carouselImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image} alt={`Carousel ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        <br></br>
        <p className="shop-category">Popular Brands</p>
        <div className="image-container">
          {imagePaths1.map((path, index) => (
            <div key={index} className="image-wrapper">
              <img key={index} src={path} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>

        <p className="shop-category">Shop By Category</p>
        <div className="image-container">
          {imagePaths.map((path, index) => (
            <div key={index} className="image-wrapper">
              <img key={index} src={path} alt={`Image ${index + 1}`} />
              <div className="additional-text">{additionalTexts[index]}</div>
              <br></br>
            </div>
          ))}
        </div>
      </Container>

      <footer className="footer">
  <Container>
    <Row>
    
      <Col md={4}>
        <h5>Contact Us</h5>
        <p>Email: support@PharmaEasy.com</p>
        <p>Phone: +91 020-26333163</p>
        <p>Address: 404 Health Street, Vizag</p>
      </Col>

      
      <Col md={4}>
        <h5>Quick Links</h5>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </Col>

      
      <Col md={4}>
        <h5>Legal</h5>
        <ul>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#disclaimer">Disclaimer</a></li>
        </ul>
      </Col>
    </Row>
    
  </Container>

  
  <div className="copyright">
    <br></br><p>&copy; 2023 Pharma Easy. All rights reserved.</p>
    <p>Trademarks: [List of trademarks]</p>
  </div>
</footer>

    </div>
  );
}

export default Welcome;