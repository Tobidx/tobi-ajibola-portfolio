import React, { useState } from 'react';
import { Menu, X, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-slate-800 border-b border-teal-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-teal-400">Tobi Ajibola</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-teal-400 transition-colors">Projects</a>
              <a href="#resume" className="text-gray-300 hover:text-teal-400 transition-colors">Resume</a>
              <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-teal-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-teal-400">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-teal-400">Projects</a>
              <a href="#resume" className="block px-3 py-2 text-gray-300 hover:text-teal-400">Resume</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-teal-400">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Data Scientist
              <span className="block text-teal-400">& ML Specialist</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Transforming data into actionable insights through advanced analytics and machine learning.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Tobidx" 
                className="text-gray-400 hover:text-teal-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tobi-ajibola-data2003/" 
                className="text-gray-400 hover:text-teal-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon size={24} />
              </a>
              <a 
                href="mailto:ajibolabolanle768@gmail.com" 
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <MailIcon size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full p-1">
              <div className="w-full h-full bg-slate-900 rounded-full p-2">
                <img
                src="/profile.jpg"
                alt="Tobi Ajibola"
                className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">Data Scientist</h3>
              <p className="text-gray-300 mb-6">
                An innovative Data Scientist with demonstrated experience in predictive modeling and machine learning. I specialize in developing and implementing data-driven solutions, from automated pipelines to interactive dashboards. With experience at the Bureau of Public Procurement and Federal Airports Authority in Nigeria, I've consistently delivered projects that merge analytical expertise with practical business impact, achieving significant improvements in efficiency and cost savings.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-teal-500/20">
                  <h4 className="font-semibold text-white mb-2">Technical Skills</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Python & R</li>
                    <li>SQL & BigQuery</li>
                    <li>HTML & CSS</li>
                    <li>Tableau</li>
                    <li>Docker</li>
                    <li>Google Cloud Run</li>
                  </ul>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg border border-teal-500/20">
                  <h4 className="font-semibold text-white mb-2">Domain Expertise</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Statistical Analysis</li>
                    <li>Data Visualization</li>
                    <li>EDA</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-700/50 p-6 rounded-lg border border-teal-500/20">
                <h4 className="font-semibold text-white mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-200">Master of Science, Big Data Analytics</p>
                    <p className="text-gray-400">Trent University | 2024</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-200">Bachelor of Science, Mathematics</p>
                    <p className="text-gray-400">Babcock University | 2022</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg border border-teal-500/20">
                <h4 className="font-semibold text-white mb-4">Current Focus</h4>
                <p className="text-gray-300">
                  Currently focused on advanced machine learning applications, particularly in predictive modeling and deep learning. Passionate about developing AI solutions that drive business value and exploring cutting-edge developments in machine learning algorithms and their practical applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Mass Spectrometry Project */}
            <div className="bg-slate-800 rounded-lg border border-teal-500/20 overflow-hidden hover:border-teal-500/40 transition-colors h-full">
              <div className="p-6 flex flex-col h-full">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mass Spectrometry Classifier</h3>
                  <p className="text-gray-300 mb-4">Full-stack web application leveraging machine learning to compare mass spectrometry data with 98% accuracy</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">Flask</span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">XGBoost</span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">Docker</span>
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <a 
                    href="https://mass-spectrometry-classifier-application-289208564214.us-central1.run.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            {/* Breast Cancer Detection */}
            <div className="bg-slate-800 rounded-lg border border-teal-500/20 overflow-hidden hover:border-teal-500/40 transition-colors h-full">
              <div className="p-6 flex flex-col h-full">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Breast Cancer Detection</h3>
                  <p className="text-gray-300 mb-4">ML model achieving 97% accuracy in classifying breast cancer, featuring advanced preprocessing and hyperparameter optimization</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">XGBoost</span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">Scikit-learn</span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">HuggingFace</span>
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <a 
                    href="https://huggingface.co/spaces/Tobidx/Breast-cancer-prediction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            {/* Email Spam Classification */}
            <div className="bg-slate-800 rounded-lg border border-teal-500/20 overflow-hidden hover:border-teal-500/40 transition-colors h-full">
              <div className="p-6 flex flex-col h-full">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Spam Classification</h3>
                  <p className="text-gray-300 mb-4">High-precision email spam classifier using XGBoost and TF-IDF vectorization, achieving 96% accuracy with optimized performance</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">XGBoost</span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">NLP</span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">HuggingFace</span>
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <a 
                    href="https://huggingface.co/spaces/Tobidx/Spam-email-classifier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            {/* Retail Sales Analysis */}
            <div className="bg-slate-800 rounded-lg border border-teal-500/20 overflow-hidden hover:border-teal-500/40 transition-colors h-full">
              <div className="p-6 flex flex-col h-full">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Canada Retail Sales Analysis</h3>
                  <p className="text-gray-300 mb-4">Comprehensive analysis of retail sales data using SQL and Tableau, extracting meaningful insights through data transformation</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                   <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">Tableau</span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">Data Analysis</span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">SQL</span>
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <a 
                    href="https://public.tableau.com/app/profile/tobi.ajibola/viz/Canadaretailsalesdashboard/Dashboard1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            {/* NHL Pipeline */}
            <div className="bg-slate-800 rounded-lg border border-teal-500/20 overflow-hidden hover:border-teal-500/40 transition-colors h-full">
              <div className="p-6 flex flex-col h-full">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">NHL Data Pipeline</h3>
                  <p className="text-gray-300 mb-4">Robust data pipeline for NHL game and player data using Python, featuring automated updates and error handling</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">API Integration</span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">DAG</span>
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <a 
                    href="https://github.com/Tobidx/nhl-data-pipeline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Resume</h2>
          
          <div className="text-center mb-12">
            <a 
              href="https://drive.google.com/file/d/1KENjy6TpA6bcL46UKeXp5jMPZ40LbFBW" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-colors font-medium"
            >
              Download Full Resume
            </a>
          </div>

          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Work Experience</h3>
            
            <div className="space-y-8">
              {/* BPP Role */}
              <div className="bg-slate-700/50 p-6 rounded-lg border border-teal-500/20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Data Scientist</h4>
                    <p className="text-gray-300">Bureau of Public Procurement, Nigeria</p>
                  </div>
                  <span className="text-teal-400">Sept. 2022 to Aug. 2023</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Developed predictive models using Python and R, achieving 85% accuracy in spend forecasting</li>
                  <li>• Built automated data pipelines processing 1M+ procurement records</li>
                  <li>• Created interactive Tableau dashboards for real-time monitoring of 1000+ vendors</li>
                  <li>• Implemented data quality frameworks reducing anomalies by 20%</li>
                  <li>• Conducted cluster analysis on 10,000+ vendors improving efficiency by 25%</li>
                </ul>
              </div>

              {/* FAAN Role */}
              <div className="bg-slate-700/50 p-6 rounded-lg border border-teal-500/20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Statistical Assistant</h4>
                    <p className="text-gray-300">Federal Airports Authority of Nigeria</p>
                  </div>
                  <span className="text-teal-400">April 2021 to Sept. 2021</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Analyzed cargo data using Excel, reducing processing time by 20%</li>
                  <li>• Conducted root cause analysis reducing delays by 30%</li>
                  <li>• Developed performance dashboards improving efficiency by 20%</li>
                  <li>• Implemented data cleansing reducing errors by 25%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
          <div className="max-w-2xl mx-auto bg-slate-800 rounded-lg shadow-lg p-8 border border-teal-500/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MailIcon className="text-teal-400" size={24} />
                <a href="mailto:ajibolabolanle768@gmail.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                  ajibolabolanle768@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <LinkedinIcon className="text-teal-400" size={24} />
                <a 
                  href="https://www.linkedin.com/in/tobi-ajibola-data2003/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <GithubIcon className="text-teal-400" size={24} />
                <a 
                  href="https://github.com/Tobidx" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-teal-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Tobi Ajibola. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
