import React from "react";
import { Row, Col, Typography, Button, Menu , Card, Progress , Carousel, Avatar } from "antd";
import { CalendarOutlined, UserOutlined, HeartOutlined , CaretDownOutlined} from "@ant-design/icons";
import img1 from "./img1.png";
import icon1 from "./icon1.png"
import icon2 from "./icon2.png"
import icon3 from "./icon3.png"
import icon4 from "./icon4.png"
import italy from "./italy.png"
import london from "./london.jpg"
import europe from "./europe1.png"
import book1 from "./book1.png"
import book2 from "./book2.png"
import book3 from "./book3.png"
import card from "./card-img.jpg"
import play from "./play-button.png"
import logo1 from "./logo1.png.crdownload"
import logo2 from "./logo2.png.crdownload"
import logo3 from "./logo3.png.crdownload"
import logo4 from "./logo4.png.crdownload"
import "./App.css";
const { Title, Text } = Typography;

const App = () => {

  const testimonials = [
    {
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      feedback:
        "On the Windows talking painted posture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      position: "CEO of Red Button",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg", // Example URL
    },
    {
      name: "Chris Thomas",
      location: "New York, USA",
      feedback:
        "The quick brown fox jumps over the lazy dog. Windows painted posture yet its express parties use.",
      position: "CTO of Blue Widgets",
      avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg", // Example URL
    },
  ];
  



  return (
    <div className="travel-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo-container">
          <h3 className="logo">
            Jad
            <span className="coloured-o">o</span>
            <span className="coloured-o">o</span>
          </h3>
        </div>
        <Menu mode="horizontal" className="nav-menu">
          <Menu.Item key="1">Destinations</Menu.Item>
          <Menu.Item key="2">Hotels</Menu.Item>
          <Menu.Item key="3">Flights</Menu.Item>
          <Menu.Item key="4">Bookings</Menu.Item>
        </Menu>
        <div className="nav-buttons">
          <Button type="text" className="login-btn">
            Login
          </Button>
          <Button type="text" className="sign-up-btn">
            Sign up
          </Button>
          <div className="language">
            EN <CaretDownOutlined />
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="travel-section">
        <Row justify="center" align="middle" className="travel-content">
          {/* Text Section */}
          <Col xs={24} md={12} className="text-section">
            <Text className="subtitle">BEST DESTINATIONS AROUND THE WORLD</Text>
            <Title level={1} className="main-title">
              Travel, enjoy and live a new and full life
            </Title>
            <Text className="description">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </Text>
            <div className="button-group">
              <Button type="primary" size="large" className="find-out-more">
                Find out more
              </Button>
              <Button size="large" className="play-demo">
                <img
                  src={play}
                  alt="Play Demo"
                  className="play-icon"
                />
                Play Demo
              </Button>
            </div>
          </Col>

          {/* Image Section */}
          <Col xs={24} md={12} className="image-section">
            <div className="background-circle"></div>
            <img src={img1} alt="Traveler" className="responsive-image" />
          </Col>
        </Row>
      </div>
     {/* ==================== second section==================== */}

     {/* New Responsive Section */}
<div className="services-section">
  <div className="services-header">
    <Text className="category-title">CATEGORY</Text>
    <Title level={2} className="services-title">
      We Offer Best Services
    </Title>
  </div>
  <Row justify="center" gutter={[16, 16]} className="services-cards">
    <Col xs={24} sm={12} md={6}>
      <div className="card">
        <img src={icon1} alt="Icon 1" className="card-icon" />
        <Title level={4} className="card-title">Calculated Weather</Title>
        <Text className="card-description">
          Built Wicket longer admire do barton vanity itself do in it.
        </Text>
      </div>
    </Col>
    <Col xs={24} sm={12} md={6}>
      <div className="card">
        <img src={icon2} alt="Icon 2" className="card-icon" />
        <Title level={4} className="card-title">Best Flights</Title>
        <Text className="card-description">
          Engrossed listening. Park gate sell they west hard for the.
        </Text>
      </div>
    </Col>
    <Col xs={24} sm={12} md={6}>
      <div className="card">
        <img src={icon3} alt="Icon 3" className="card-icon" />
        <Title level={4} className="card-title">Local Events</Title>
        <Text className="card-description">
          Barton vanity itself do in it. Preferred to men it engrossed
          listening.
        </Text>
      </div>
    </Col>
    <Col xs={24} sm={12} md={6}>
      <div className="card">
        <img src={icon4} alt="Icon 4" className="card-icon" />
        <Title level={4} className="card-title">Customization</Title>
        <Text className="card-description">
          We deliver outsourced aviation services for military customers.
        </Text>
      </div>
    </Col>
  </Row>
</div>

{/* ===================third section ================ */}
{/* Top Destinations Section */}
<div className="destinations-section">
  <div className="destinations-header">
    <Text className="destinations-subtitle">Top Selling</Text>
    <Title level={2} className="destinations-title">
      Top Destinations
    </Title>
  </div>
  <Row justify="center" gutter={[16, 16]} className="destinations-cards">
    <Col xs={24} sm={12} md={8}>
      <div className="destination-card">
        <img
          src={italy}   
          alt="Rome"
          className="destination-image"
        />
        <div className="destination-content">
          <Title level={4} className="destination-name">
            Rome, Italy
          </Title>
          <Text className="destination-price">$5,42k</Text>
          <Text className="destination-duration">10 Days Trip</Text>
        </div>
      </div>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <div className="destination-card">
        <img
          src={london}
          alt="London"
          className="destination-image"
        />
        <div className="destination-content">
          <Title level={4} className="destination-name">
            London, UK
          </Title>
          <Text className="destination-price">$4.2k</Text>
          <Text className="destination-duration">12 Days Trip</Text>
        </div>
      </div>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <div className="destination-card">
        <img
          src={europe}
          alt="Full Europe"
          className="destination-image"
        />
        <div className="destination-content">
          <Title level={4} className="destination-name">
            Full Europe
          </Title>
          <Text className="destination-price">$15k</Text>
          <Text className="destination-duration">28 Days Trip</Text>
        </div>
      </div>
    </Col>
  </Row>
</div>
  {/* =============fourth section ======================= */}
  <div className="steps-container">
      <Row gutter={[32, 32]} align="middle">
        {/* Left Section */}
        <Col xs={24} md={12} className="steps-text">
        
          <Text className="steps-subtitle">Easy and Fast</Text>
          <Title level={1} className="steps-title">
            Book Your Next Trip In 3 Easy Steps
          </Title>
          <div className="step-item" style={{display:"flex" , justifyContent:"space-between", gap:"10px"}}>
        
          
                <img src={book1} alt="" />
            <div>
              <Text className="step-title">Choose Destination</Text>
              <Text className="step-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </Text>
            </div>
          </div>
          <div className="step-item" style={{display:"flex" , justifyContent:"space-between", gap:"10px"}}>
            <img src={book2} alt="" />
            <div>
              <Text className="step-title">Make Payment</Text>
              <Text className="step-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </Text>
            </div>
          </div>
          <div className="step-item"style={{display:"flex" , justifyContent:"space-between", gap:"10px"}} >
           
            <img src={book3} alt="" />
            <div>
              <Text className="step-title">Reach Airport on Selected Date</Text>
              <Text className="step-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </Text>
            </div>
          </div>
        </Col>

        {/* Right Section */}
        <Col xs={24} md={12} className="steps-card">
          <Card className="trip-card" hoverable>
            <img
              src={card}
              alt="Trip to Greece"
              className="trip-image"
            />
            <div className="card-content">
              <Title level={4}>Trip To Greece</Title>
              <Text>14-29 June | By Robbin Jokes</Text>
              <div className="card-icons">
                <CalendarOutlined />
                <UserOutlined />
                <HeartOutlined />
                <Text>24 people going</Text>
              </div>
            </div>
            <Card className="status-card">
              <Text>Ongoing</Text>
              <Title level={5}>Trip to Rome</Title>
              <Progress percent={40} showInfo={false} />
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
 
 {/* ==================second last section================= */}
 <div style={{ padding: "40px 20px" }}>
      <div style={{ display: "flex", marginBottom: "40px" }}>
        {/* Left Side Text */}
        <div style={{ flex: 1, textAlign: "left", paddingRight: "40px" }}>
          <h2
            style={{
              fontWeight: "bold",
              fontSize: "36px", // Heading size increased
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            What People Say <br /> About Us.
          </h2>
          <p style={{ color: "#777", fontSize: "16px", lineHeight: "1.6" }}>
            Here's what our happy clients have to say about our services and
            products. We value their feedback and strive to improve with every
            experience.
          </p>
        </div>

        {/* Right Side Carousel */}
        <div style={{ flex: 2 }}>
          <Carousel
            autoplay
            dotPosition="right"
            vertical
            dots={{ className: "custom-dots" }}
          >
            {testimonials.map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    background: "#f9f9f9",
                    borderRadius: "10px",
                    padding: "20px",
                    margin: "20px auto",
                    maxWidth: "600px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Avatar
                    size={64}
                    src={item.avatarUrl}
                    icon={<UserOutlined />}
                    style={{ marginBottom: "10px" }}
                  />
                  <p style={{ fontStyle: "italic", color: "#555" }}>
                    "{item.feedback}"
                  </p>
                  <h4>{item.name}</h4>
                  <p style={{ color: "#777" }}>{item.location}</p>
                  <p style={{ fontWeight: "bold", color: "#333" }}>
                    {item.position}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Logos Section */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <img
          src={
            logo1
          }
          alt="Axon"
          style={{ height: "40px", filter: "grayscale(1)" }}
        />
        <img
          src={logo2}
          alt="Jetstar"
          style={{ height: "40px", filter: "grayscale(1)" }}
        />
        <img
          src={logo3}
          alt="Expedia"
          style={{ height: "40px", filter: "grayscale(1)" }}
        />
        <img
          src={logo4}
          alt="Qantas"
          style={{ height: "40px", filter: "grayscale(1)" }}
        />
        <img
          src={logo5}
          alt="Alitalia"
          style={{ height: "40px", filter: "grayscale(1)" }}
        />
      </div>
    </div>
 
   </div>
  );
};

export default App;
