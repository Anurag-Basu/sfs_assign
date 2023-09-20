import React from "react";
import { Typography, Input, Button } from "antd";

const { Title } = Typography;

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="py-10 bg-gray-200">
      <div className="container flex mx-auto direction-row">
        <div className="pr-4 faq-container">
          <div className="mb-6 text-4xl text-center">Contact Us</div>
        </div>

        <div className="pl-4 faq-container">
          <div className="flex flex-col">
            <div className="mb-4">
              <Title level={4}>About Us</Title>
            </div>
            <div className="mb-4">
              <Title level={4}>Services</Title>
            </div>
            <div className="mb-4">
              <Title level={4}>Privacy Policy</Title>
            </div>
          </div>
          <div className="mt-6">
            <Title level={4}>Contact Information</Title>
          </div>
        </div>

        <div className="pl-4 faq-container">
          <div className="flex flex-col">
            <div className="mb-4">
              <Title level={4}>Newsletter Signup</Title>
            </div>
            <div className="flex items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border rounded-md"
              />
              <Button type="primary" className="ml-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
