import React, { useState } from "react";
import thiagoPic from "../assets/thiago-profile.jpg";
import andrewPic from "../assets/andrew-profile.jpg";
import AlePic from "../assets/marina-profile.jpg";
import peterPic from "../assets/peter-profile.jpg";
import gusPic from "../assets/gus-profile.jpg";
import paulaPic from "../assets/paula-profile.jpg";

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "problem",
      title: "The Problem",
      component: <ProblemSlide />
    },
    {
      id: "market",
      title: "Market Opportunity",
      component: <MarketSlide />
    },
    {
      id: "team",
      title: "Our Team",
      component: <TeamSlide />
    },
    {
      id: "business-model",
      title: "Business Model",
      component: <BusinessModelSlide />
    },
    {
      id: "gtm",
      title: "Go-to-Market",
      component: <GTMSlide />
    },
    {
      id: "timeline",
      title: "Evolution Timeline",
      component: <TimelineSlide />
    },
    {
      id: "how-it-works",
      title: "How it Works",
      component: <HowItWorksSlide />
    },
    {
      id: "features",
      title: "Platform Features",
      component: <FeaturesSlide />
    },
    {
      id: "pricing",
      title: "Pricing",
      component: <PricingSlide />
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Header with slide indicators */}
      <div className="bg-white shadow-sm border-b border-gray-200 z-50 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-[#453CCE]">Jobbyo Pitch Deck</h1>

            {/* Slide indicators */}
            <div className="flex items-center space-x-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-[#453CCE] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Slide counter */}
            <div className="text-xs text-gray-600">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </div>

      {/* Main slide content */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full flex items-center justify-center p-2">
          {slides[currentSlide].component}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`fixed left-2 top-1/2 transform -translate-y-1/2 z-40 p-2 rounded-full shadow-lg transition-all ${
            currentSlide === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#453CCE] text-white hover:bg-[#3c34b5]"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`fixed right-2 top-1/2 transform -translate-y-1/2 z-40 p-2 rounded-full shadow-lg transition-all ${
            currentSlide === slides.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#453CCE] text-white hover:bg-[#3c34b5]"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Footer with slide title and navigation */}
      <div className="bg-white border-t border-gray-200 z-40 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900">
              {slides[currentSlide].title}
            </h2>

            <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  currentSlide === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Previous
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  currentSlide === slides.length - 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-[#453CCE] text-white hover:bg-[#3c34b5]"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual slide components
const ProblemSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center px-4 py-2 max-w-5xl mx-auto">
    <div className="flex flex-col items-center gap-3 relative z-10">
      {/* Tech-inspired badge */}
      <div className="inline-flex items-center px-2 py-1 rounded-full bg-[#D3FFB9]/50 text-[#453CCE] text-xs font-medium">
        <span className="flex h-1.5 w-1.5 rounded-full bg-[#453CCE] mr-1"></span>
        The Problem
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
        Job hunting is <span className="text-[#453CCE] relative inline-block">
          broken
          <span className="absolute bottom-0.5 left-0 w-full h-1 bg-[#D3FFB9] rounded-full"></span>
        </span>
      </h2>

      <p className="text-sm md:text-base text-gray-600 text-center max-w-xl mb-4">
        Multiple disconnected platforms, redundant work, and mental stress
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-[#453CCE]/20 transition-all hover:shadow-xl hover:scale-[1.02]">
          <div className="text-[#453CCE] font-bold text-2xl mb-2 flex items-center">
            <span className="bg-[#D3FFB9]/30 w-8 h-8 flex items-center justify-center rounded-full text-sm">1</span>
          </div>
          <h3 className="font-bold text-sm text-[#453CCE] mb-2">Time Drain</h3>
          <p className="text-gray-600 font-medium text-xs">60% quit mid-application due to complexity</p>
          <div className="text-xs text-[#453CCE]/70 mt-2 font-medium">Source: SHRM, 2022</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-[#453CCE]/20 transition-all hover:shadow-xl hover:scale-[1.02]">
          <div className="text-[#453CCE] font-bold text-2xl mb-2 flex items-center">
            <span className="bg-[#D3FFB9]/30 w-8 h-8 flex items-center justify-center rounded-full text-sm">2</span>
          </div>
          <h3 className="font-bold text-sm text-[#453CCE] mb-2">Data Repetition</h3>
          <p className="text-gray-600 font-medium text-xs">Job seekers fill out the same information repeatedly</p>
          <div className="text-xs text-[#453CCE]/70 mt-2 font-medium">Source: SHRM, 2022</div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-[#453CCE]/20 transition-all hover:shadow-xl hover:scale-[1.02]">
          <div className="text-[#453CCE] font-bold text-2xl mb-2 flex items-center">
            <span className="bg-[#D3FFB9]/30 w-8 h-8 flex items-center justify-center rounded-full text-sm">3</span>
          </div>
          <h3 className="font-bold text-sm text-[#453CCE] mb-2">Generic Applications</h3>
          <p className="text-gray-600 font-medium text-xs">63% don't customize resumes for specific positions</p>
          <div className="text-xs text-[#453CCE]/70 mt-2 font-medium">Source: HBR, 2022</div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-[#453CCE]/20 transition-all hover:shadow-xl hover:scale-[1.02]">
          <div className="text-[#453CCE] font-bold text-2xl mb-2 flex items-center">
            <span className="bg-[#D3FFB9]/30 w-8 h-8 flex items-center justify-center rounded-full text-sm">4</span>
          </div>
          <h3 className="font-bold text-sm text-[#453CCE] mb-2">Mental Burden</h3>
          <p className="text-gray-600 font-medium text-xs">72% report job search negatively impacts mental health</p>
          <div className="text-xs text-[#453CCE]/70 mt-2 font-medium">Source: Job Seeker Statistics, 2023</div>
        </div>
      </div>
    </div>
  </div>
);

const MarketSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center px-4 py-2 overflow-hidden max-w-5xl mx-auto">
    <div className="flex flex-col items-center gap-3 relative z-10">
      {/* Tech-inspired badge */}
      <div className="inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-[#D3FFB9]/30 to-[#D3FFB9]/50 text-[#453CCE] text-xs font-medium backdrop-blur-sm border border-white/20 shadow-lg">
        <span className="flex h-1.5 w-1.5 rounded-full bg-[#453CCE] mr-1 animate-pulse"></span>
        Market Opportunity
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center max-w-2xl">
        Our Market <span className="text-[#453CCE] relative inline-block">
          Potential
          <span className="absolute bottom-0.5 left-0 w-full h-1 bg-[#D3FFB9] rounded-full transform transition-transform group-hover:scale-x-110"></span>
        </span>
      </h2>

      <p className="text-gray-600 text-sm text-center max-w-xl mb-4">
        Understanding our market segments and growth potential
      </p>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Market Size Circles Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* TAM Circle */}
          <div className="relative group transform transition-all duration-300 hover:scale-105">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-4 w-32 h-32 sm:w-40 sm:h-40 flex flex-col items-center justify-center text-center shadow-2xl border border-[#453CCE]/10 transition-all">
              <div className="relative z-10">
                <div className="text-[#453CCE] font-bold text-sm mb-1">TAM</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 bg-gradient-to-r from-[#453CCE] to-[#684bff] bg-clip-text text-transparent">$43.1B</div>
                <p className="text-gray-600 text-xs px-2">People searching for work</p>
              </div>
            </div>
          </div>

          {/* SAM Circle */}
          <div className="relative group transform transition-all duration-300 hover:scale-105">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-4 w-28 h-28 sm:w-36 sm:h-36 flex flex-col items-center justify-center text-center shadow-2xl border border-[#453CCE]/10 transition-all">
              <div className="relative z-10">
                <div className="text-[#453CCE] font-bold text-sm mb-1">SAM</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 bg-gradient-to-r from-[#453CCE] to-[#684bff] bg-clip-text text-transparent">$8B</div>
                <p className="text-gray-600 text-xs px-2">Addressable segment using digital tools</p>
              </div>
            </div>
          </div>

          {/* SOM Circle */}
          <div className="relative group transform transition-all duration-300 hover:scale-105">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-3 w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center text-center shadow-2xl border border-[#453CCE]/10 transition-all">
              <div className="relative z-10">
                <div className="text-[#453CCE] font-bold text-sm mb-1">SOM</div>
                <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1 bg-gradient-to-r from-[#453CCE] to-[#684bff] bg-clip-text text-transparent">$1.8B</div>
                <p className="text-gray-600 text-xs px-2">Job switchers & recent grads</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Context */}
      <div className="mt-4 max-w-2xl text-center bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-[#453CCE]/10 shadow-lg">
        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
          Our platform targets a significant portion of the global job search market, with a focused approach on digital-first job seekers in key markets. Through innovative AI-powered solutions, we're positioned to capture and grow our market share.
        </p>
      </div>
    </div>
  </div>
);

const TeamSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center px-4 py-2 overflow-hidden max-w-5xl mx-auto">
    <div className="absolute top-10 right-6 w-24 h-24 bg-[#D3FFB9]/10 rounded-full blur-2xl"></div>
    <div className="absolute bottom-10 left-6 w-24 h-24 bg-[#453CCE]/5 rounded-full blur-2xl"></div>

    <div className="relative z-10 w-full">
      {/* Section Header */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center px-2 py-1 rounded-full bg-[#D3FFB9]/50 text-[#453CCE] text-xs font-medium border border-[#453CCE]/10">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#453CCE] mr-1 animate-pulse"></span>
          Team
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-2">
          Meet Our <span className="text-[#453CCE] relative inline-block">
            Team
            <span className="absolute bottom-0.5 left-0 w-full h-1 bg-[#D3FFB9] rounded-full"></span>
          </span>
        </h2>
      </div>

      {/* Core Team */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-[#453CCE] mb-4">Core</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Thiago Braz - CEO */}
          <div className="flex items-start gap-3">
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={thiagoPic}
                alt="Thiago Braz"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Thiago Braz</h4>
              <div className="text-[#453CCE] font-medium text-xs mb-2">CEO</div>
              <ul className="space-y-1 text-xs text-gray-600">
                <li className="flex items-center">
                  <span className="w-1 h-1 rounded-full bg-[#453CCE] mr-1"></span>
                  7y software engineering
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 rounded-full bg-[#453CCE] mr-1"></span>
                  Technical manager after 3y
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 rounded-full bg-[#453CCE] mr-1"></span>
                  Web dev course with 5k profit
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 rounded-full bg-[#453CCE] mr-1"></span>
                  Won aerospace competition
                </li>
              </ul>
            </div>
          </div>

          {/* Andrew Khalel - CTO */}
          <div className="flex items-start gap-3">
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={andrewPic}
                alt="Andrew Khalel"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Andrew Khalel</h4>
              <div className="text-[#453CCE] font-medium text-xs mb-2">CTO</div>
              <ul className="space-y-1 text-xs text-gray-600">
                <li className="flex items-center">
                  <span className="w-1 h-1 rounded-full bg-[#453CCE] mr-1"></span>
                  7y software engineering
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 rounded-full bg-[#453CCE] mr-1"></span>
                  MSc Computer Science
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 rounded-full bg-[#453CCE] mr-1"></span>
                  5y at Amazon
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 rounded-full bg-[#453CCE] mr-1"></span>
                  Won 3 aerospace competitions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Advisors */}
      <div>
        <h3 className="text-sm font-bold text-[#453CCE] mb-4">Advisors</h3>
        <div className="grid grid-cols-4 gap-2">
          {/* Alexandre Vandon */}
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden mx-auto mb-1">
              <img
                src={AlePic}
                alt="Alexandre Vandon"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xs font-bold text-gray-900">Alexandre</h4>
            <div className="text-[#453CCE] font-medium text-xs mb-0.5">COO</div>
            <div className="text-gray-600 text-xs">European BC</div>
          </div>

          {/* Peter */}
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden mx-auto mb-1">
              <img
                src={peterPic}
                alt="Peter"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xs font-bold text-gray-900">Peter</h4>
            <div className="text-[#453CCE] font-medium text-xs mb-0.5">CEO</div>
            <div className="text-gray-600 text-xs">Digital Virtues</div>
          </div>

          {/* Gus */}
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden mx-auto mb-1">
              <img
                src={gusPic}
                alt="Gus"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xs font-bold text-gray-900">Gus</h4>
            <div className="text-[#453CCE] font-medium text-xs mb-0.5">Ex CEO</div>
            <div className="text-gray-600 text-xs">LeWagon</div>
          </div>

          {/* Paula */}
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden mx-auto mb-1">
              <img
                src={paulaPic}
                alt="Paula"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xs font-bold text-gray-900">Paula</h4>
            <div className="text-[#453CCE] font-medium text-xs mb-0.5">CMO</div>
            <div className="text-gray-600 text-xs">Quixotic</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Placeholder components for other slides
const BusinessModelSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-[#453CCE] mb-2">Business Model</h2>
    <p className="text-gray-600 text-sm">Revenue streams and monetization strategy</p>
  </div>
);

const GTMSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-[#453CCE] mb-2">Go-to-Market Strategy</h2>
    <p className="text-gray-600 text-sm">Our path to market dominance</p>
  </div>
);

const TimelineSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-[#453CCE] mb-2">Evolution Timeline</h2>
    <p className="text-gray-600 text-sm">The evolution of HR tech and job hunting</p>
  </div>
);

const HowItWorksSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-[#453CCE] mb-2">How it Works</h2>
    <p className="text-gray-600 text-sm">Step by step process</p>
  </div>
);

const FeaturesSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-[#453CCE] mb-2">Platform Features</h2>
    <p className="text-gray-600 text-sm">One platform for your entire job search</p>
  </div>
);

const PricingSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-[#453CCE] mb-2">Pricing</h2>
    <p className="text-gray-600 text-sm">Feature comparison and pricing plans</p>
  </div>
);

export default PitchDeck;
