"use client"
import React from "react";
import Image from "next/image";
import about from "../../public/images/about.webp";

const AboutMain = () => {
  return (
    
    <main className="about-main" id="about">
      <section className=""></section>
      <section>
        <hr /><hr />
      <h1 style={{
        fontSize: '2.5rem', 
        fontFamily: 'san-serif',
        fontWeight: 'bold', 
        textAlign: 'center', 
        color: '#3f4851', 
        marginTop: '3rem', 
        marginBottom: '3rem',
        textDecoration: 'underline'
      }}>
        About Us.. Discover Our Passion for Electronics
      </h1>
        <div className="about-content">
          <div className="image-container">
            <Image
              src={about}
              height={500}
              width={500}
              alt="electronics"
              className="about-image"
              style={{
                transition: "transform 0.5s ease",
                objectFit: "cover",
                width: "100%",
                height: "430px",
              }}
            />
             <style jsx>{`
        div:hover img {
          transform: scale(1.1);
        }
      `}</style>
          </div>

          <div className="about-details">
            <h1 className="about-title">ElectroMart</h1>

            <p className="about-description">
              we are dedicated to providing top-quality electronics at
              affordable prices. Offering a wide range of products from
              smartphones and laptops to home appliances, we cater to all your
              tech needs. Our mission is to deliver exceptional customer
              service, ensuring that each product meets the highest standards of
              performance and reliability. With expert advice and a commitment
              to your satisfaction, we strive to make your shopping experience
              seamless. Whether you are a tech enthusiast or just upgrading your
              devices, we are here to help you find the perfect product that
              fits your lifestyle. Join us today!
            </p>
          </div>
        </div>
      </section>
      <section className=""></section>
    </main>
  );
};

export default AboutMain;
