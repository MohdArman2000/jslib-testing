import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-white text-xl font-bold">FormHub</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/jslib-testing/services.html" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/jslib-testing/portfolio.html" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
              <a href="/jslib-testing/pricing.html" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              <a href="/contact" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Portfolio</h1>
          <p className="text-xl text-white/90">Showcasing our best work and successful projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">E-commerce Platform</h3>
            <p className="text-white/80 mb-4">A modern e-commerce solution with advanced features and seamless user experience.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">React</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">MongoDB</span>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Mobile App</h3>
            <p className="text-white/80 mb-4">Cross-platform mobile application with real-time features and offline capabilities.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">React Native</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">Firebase</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">TypeScript</span>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-full h-48 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Web Dashboard</h3>
            <p className="text-white/80 mb-4">Analytics dashboard with real-time data visualization and reporting features.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">Vue.js</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">D3.js</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">Python</span>
            </div>
          </div>

          {/* Portfolio Item 4 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-full h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">API Integration</h3>
            <p className="text-white/80 mb-4">Seamless integration of multiple third-party APIs with custom middleware.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">Express.js</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">PostgreSQL</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">Redis</span>
            </div>
          </div>

          {/* Portfolio Item 5 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-full h-48 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Cloud Migration</h3>
            <p className="text-white/80 mb-4">Complete migration of legacy systems to modern cloud infrastructure.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">AWS</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">Docker</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">Kubernetes</span>
            </div>
          </div>

          {/* Portfolio Item 6 */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-green-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Data Analytics</h3>
            <p className="text-white/80 mb-4">Advanced data processing and machine learning pipeline for business insights.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">Python</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">TensorFlow</span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">Apache Spark</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8">Let's discuss how we can help bring your ideas to life</p>
          <a href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
