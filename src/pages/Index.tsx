
import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import CategoryList from '@/components/CategoryList';
import FeaturedProducts from '@/components/FeaturedProducts';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div>
      <HeroSlider />
      <div className="section-padding bg-gradient-to-b from-white to-furniture-light/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Welcome to FurnishHaven</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover beautiful, high-quality furniture for every room in your home. From modern sofas to elegant dining sets,
            we have everything you need to create your dream space.
          </p>
        </div>
      </div>
      <CategoryList />
      <FeaturedProducts />
      <section className="section-padding bg-gradient-to-r from-furniture-light to-furniture-beige/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-6">
                Have questions about our products or need help with your order? 
                Our customer service team is here to help. Fill out the form and 
                we'll get back to you as soon as possible.
              </p>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="mb-4">
                  <h4 className="font-bold text-lg mb-1">Store Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9am - 8pm</p>
                  <p className="text-gray-600">Saturday: 10am - 6pm</p>
                  <p className="text-gray-600">Sunday: 11am - 5pm</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-gray-600">
                    123 Furniture Avenue<br />
                    Design District, CA 90210
                  </p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
