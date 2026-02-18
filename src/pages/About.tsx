import { Star } from 'lucide-react';
import { achievements, testimonials } from '../data/clientData';
import ScrollReveal from '../components/ScrollReveal';
import { Helmet } from 'react-helmet-async';

const About = () => {

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>About Us | Rudra Digital Studio</title>
        <meta name="description" content="Learn more about Rudra Digital Studio, our journey, and the passionate team behind your beautiful memories. Over 15 years of experience." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ABOUT <span className="text-gradient">RUDRA DIGITAL STUDIO</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate storytellers dedicated to preserving your most precious memories through the art of photography.
            </p>
          </div>
        </ScrollReveal>

        {/* Studio Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2010, Rudra Digital Studio began as a passion project born from a love of capturing
                life's fleeting moments. What started as a small studio has grown into a trusted name in
                professional photography, serving clients across the region with dedication and artistic vision.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe every image tells a story, and our mission is to help you tell yours beautifully.
                Whether it's the joy of a wedding day, the professionalism of a corporate headshot, or the
                warmth of a family portrait, we bring technical expertise and creative vision to every shoot.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 gradient-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">To capture authentic moments with artistic vision and professional excellence.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 gradient-accent rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Vision</h3>
                    <p className="text-gray-600">To be the most trusted photography studio, creating timeless memories for generations.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden hover-lift">
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Studio workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
            </div>
          </ScrollReveal>
        </div>

        {/* Achievements */}
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Our <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Milestones that reflect our commitment to excellence
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="up">
                  <div className="text-center group glass p-8 rounded-2xl hover-glow transition-all duration-300">
                    <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Team Section */}
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Meet Our <span className="text-gradient-accent">Team</span>
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Talented professionals dedicated to capturing your perfect moments
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center glass p-8 rounded-2xl">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold">
                  RD
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Rudra Patel</h3>
                <p className="text-cyan-600 font-semibold mb-4">Lead Photographer & Founder</p>
                <p className="text-gray-600">
                  With over 15 years of experience, Rudra brings artistic vision and technical expertise
                  to every shoot, ensuring your memories are captured beautifully.
                </p>
              </div>
              <div className="text-center glass p-8 rounded-2xl">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold">
                  DS
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Digital Studio Team</h3>
                <p className="text-rose-600 font-semibold mb-4">Creative Professionals</p>
                <p className="text-gray-600">
                  Our talented team of photographers, editors, and creative professionals work together
                  to deliver exceptional results for every client.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Hear what our clients say about their experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="scale">
                  <div className="glass p-8 rounded-2xl hover-lift">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal>
          <div className="text-center gradient-dark p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-transparent to-cyan-900/30" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work <span className="text-gradient-accent">Together?</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Let's create something beautiful. Get in touch to discuss your photography needs.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg font-semibold hover-glow transition-all duration-300 hover:scale-105"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;