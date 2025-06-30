import React from 'react';
import { motion } from 'framer-motion';
import { Store, Users, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Store,
      title: 'Physical Store',
      description: 'Trusted offline presence with years of experience serving customers in Nepal'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional technicians and sales experts ready to help with your tech needs'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'All products tested and verified for quality, with warranty on new items'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick delivery across Kathmandu valley with installation support'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            About Nexgen
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Founded offline, evolving online. Your trusted partner in the digital revolution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Journey</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Nexgen started as a small computer shop with a big vision - to make technology 
                    accessible to everyone in Nepal. What began as a humble offline store has now 
                    evolved into a comprehensive online platform.
                  </p>
                  <p>
                    We understand that technology moves fast, and so do we. Whether you're looking 
                    for the latest gaming rig or a budget-friendly second-hand laptop for work, 
                    we've got you covered.
                  </p>
                  <p>
                    Our commitment to quality, trust, and customer satisfaction has made us a 
                    preferred choice for tech enthusiasts across Nepal. We don't just sell products; 
                    we build relationships and power digital dreams.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: '500+', label: 'Happy Customers' },
                { number: '5+', label: 'Years Experience' },
                { number: '100+', label: 'Products Available' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                "To be Nepal's most trusted technology partner, bridging the gap between 
                cutting-edge innovation and everyday accessibility. We envision a future where 
                every Nepali has the power to participate in the digital revolution."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;