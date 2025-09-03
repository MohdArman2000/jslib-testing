import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/jslib-testing/" className="text-white text-xl font-bold">FormHub</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/jslib-testing/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <Link to="/services" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/portfolio" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
              <Link to="/pricing" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
              <Link to="/contact" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90">Comprehensive solutions to help your business grow and succeed</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
            <p className="text-white/80 mb-4">Custom web applications built with modern technologies and best practices.</p>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• React & Vue.js Applications</li>
              <li>• Node.js Backend Services</li>
              <li>• Database Design & Integration</li>
              <li>• API Development</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Mobile Development</h3>
            <p className="text-white/80 mb-4">Cross-platform mobile apps that deliver exceptional user experiences.</p>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• React Native Development</li>
              <li>• iOS & Android Apps</li>
              <li>• App Store Optimization</li>
              <li>• Push Notifications</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Data Analytics</h3>
            <p className="text-white/80 mb-4">Transform your data into actionable insights and business intelligence.</p>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• Business Intelligence Dashboards</li>
              <li>• Data Visualization</li>
              <li>• Machine Learning Models</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
            <p className="text-white/80 mb-4">Beautiful, intuitive designs that engage users and drive conversions.</p>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• User Interface Design</li>
              <li>• User Experience Research</li>
              <li>• Prototyping & Wireframing</li>
              <li>• Design Systems</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Cloud Solutions</h3>
            <p className="text-white/80 mb-4">Scalable cloud infrastructure and migration services for modern businesses.</p>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• AWS & Azure Migration</li>
              <li>• DevOps & CI/CD</li>
              <li>• Container Orchestration</li>
              <li>• Serverless Architecture</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-500 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Security & Compliance</h3>
            <p className="text-white/80 mb-4">Comprehensive security solutions to protect your digital assets.</p>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• Security Audits</li>
              <li>• Penetration Testing</li>
              <li>• Compliance Consulting</li>
              <li>• Data Protection</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">Let's discuss your project requirements and find the perfect solution</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
