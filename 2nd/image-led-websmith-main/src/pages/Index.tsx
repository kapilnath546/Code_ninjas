
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Smart Financial Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering your financial journey with advanced tools and intelligent analysis
          </p>
        </section>

        {/* Services Section */}
        <section className="space-y-8">
          <ServiceCard
            title="Loan analysis"
            description="Loan analysis helps assess a borrower's financial health, repayment capacity, and risk factors to ensure informed lending decisions."
            buttonText={
              <a href="http://localhost:8501/#loan-prediction-app" className="text-white-600 ">
                Give Loan analysis
               </a> 
            }
            imagePath="/lovable-uploads/image9.png"
          />
          
          <ServiceCard
            title="Tax Tracker"
            description="A tax tracker helps individuals and businesses monitor tax payments, deadlines, deductions, and filings, ensuring compliance and avoiding penalties."
            buttonText={
              <a href="http://127.0.0.1:5500/Tax-Calculator-main/indexTax.html" className="text-white-600 ">
                Start now
               </a> 
            }
            imagePath="/lovable-uploads/image10.png"
          />

          
          <ServiceCard
            title="Churn Predictor"
            description="Predict customer churn with data-driven insights to enhance retention and boost business growth."
            buttonText={
              <a href="http://localhost:8502/" className="text-white-600 ">
                Explore Now
               </a> 
            }
            imagePath="/lovable-uploads/image11.png"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
