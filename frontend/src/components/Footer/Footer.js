import React from "react";
import { Container, Grid2, Typography, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <Container maxWidth="lg">
        <Grid2 container spacing={4} justifyContent="space-between">
          {/* Contact Section */}
          <Grid2 item xs={12} sm={6} md={3} className="space-y-2">
            <Typography variant="h6" className="font-bold text-gray-800">
              LS Collections
            </Typography>
            <Typography variant="body2">
              <a
                href="mailto:lscollections@gmail.com"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                lscollections@gmail.com
              </a>
            </Typography>
            <Typography variant="body2">
              <a
                href="tel:8639876898"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Tel: 8639876898
              </a>
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Follow us on
            </Typography>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon
                  className="text-gray-700 hover:text-gray-900"
                  fontSize="large"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon
                  className="text-gray-700 hover:text-gray-900"
                  fontSize="large"
                />
              </a>
            </div>
          </Grid2>

          {/* Shop Section */}
          <Grid2 item xs={12} sm={6} md={3} className="space-y-2">
            <Typography variant="h6" className="font-bold text-gray-800">
              Shop
            </Typography>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Sarees
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Jewellery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Customized Bangles
                </a>
              </li>
            </ul>
          </Grid2>

          {/* Our Store Section */}
          <Grid2 item xs={12} sm={6} md={3} className="space-y-2">
            <Typography variant="h6" className="font-bold text-gray-800">
              Our Store
            </Typography>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Subscribe
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </a>
              </li>
            </ul>
          </Grid2>

          {/* Terms & Conditions Section */}
          <Grid2 item xs={12} sm={6} md={3} className="space-y-2">
            <Typography variant="h6" className="font-bold text-gray-800">
              T&C
            </Typography>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Store Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Payment Methods
                </a>
              </li>
            </ul>
          </Grid2>
        </Grid2>

        <div className="flex justify-center items-center mt-8">
          <a
            href="https://wa.me/8639876898"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-200"
          >
            <WhatsAppIcon fontSize="large" className="mr-2" />
            Chat with Us on WhatsApp
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
