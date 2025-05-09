
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Have questions about our products or need assistance with your order?
          Our team is here to help. Reach out to us using the contact information below
          or fill out the form and we'll get back to you as soon as possible.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-furniture-light p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-furniture-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-gray-600 mb-1">For general inquiries:</p>
                    <a href="mailto:info@furnishhaven.com" className="text-furniture-primary hover:underline">
                      info@furnishhaven.com
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">For support:</p>
                    <a href="mailto:support@furnishhaven.com" className="text-furniture-primary hover:underline">
                      support@furnishhaven.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-furniture-light p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-furniture-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-gray-600 mb-1">Customer Service:</p>
                    <a href="tel:+1234567890" className="text-furniture-primary hover:underline">
                      (123) 456-7890
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Working Hours:</p>
                    <p className="text-gray-700">
                      Monday - Friday: 9am - 8pm<br />
                      Saturday: 10am - 6pm<br />
                      Sunday: 11am - 5pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-furniture-light p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-furniture-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Visit Us</h4>
                    <p className="text-gray-700">
                      123 Furniture Avenue<br />
                      Design District<br />
                      CA 90210
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe 
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130390376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1588812024088!5m2!1sen!2sus"
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
