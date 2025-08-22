import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Gallery = () => {
  const events = [
    {
      title: 'Annual Tech Conference 2024',
      date: 'March 15, 2024',
      location: 'Main Campus Auditorium',
      attendees: 500,
      image: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Industry leaders sharing insights on emerging technologies and career opportunities.',
    },
    {
      title: 'Student Graduation Ceremony',
      date: 'June 20, 2024',
      location: 'University Hall',
      attendees: 300,
      image: 'https://images.pexels.com/photos/7944194/pexels-photo-7944194.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Celebrating our graduates and their achievements in various fields.',
    },
    {
      title: 'Coding Bootcamp Workshop',
      date: 'February 10, 2024',
      location: 'Computer Lab Building',
      attendees: 150,
      image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Intensive hands-on coding workshop for beginners and intermediate learners.',
    },
    {
      title: 'Career Fair 2024',
      date: 'April 5, 2024',
      location: 'Student Center',
      attendees: 800,
      image: 'https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Connecting students with top employers and career opportunities.',
    },
    {
      title: 'AI & Machine Learning Symposium',
      date: 'May 18, 2024',
      location: 'Technology Center',
      attendees: 400,
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Exploring the latest developments in artificial intelligence and machine learning.',
    },
    {
      title: 'Student Innovation Showcase',
      date: 'January 25, 2024',
      location: 'Innovation Hub',
      attendees: 250,
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Students presenting their innovative projects and startup ideas.',
    },
  ];

  const campusImages = [
    {
      src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Modern Campus Library',
      title: 'State-of-the-art Library',
    },
    {
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Computer Lab',
      title: 'Advanced Computer Laboratory',
    },
    {
      src: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Modern Classroom',
      title: 'Interactive Learning Spaces',
    },
    {
      src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Study Areas',
      title: 'Collaborative Study Areas',
    },
    {
      src: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Campus Exterior',
      title: 'Beautiful Campus Grounds',
    },
    {
      src: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Students Learning',
      title: 'Engaged Learning Environment',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gallery & Events
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the vibrant campus life at SmartLearn through our events, activities, and beautiful learning spaces.
          </p>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Events & Activities
            </h2>
            <p className="text-xl text-gray-600">
              Take a look at some of our memorable events and student activities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-900">{event.attendees}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Campus Life & Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Explore our modern facilities and vibrant campus environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campus Life by Numbers</h2>
            <p className="text-blue-100 text-lg">The vibrant community that makes SmartLearn special</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Events Per Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Student Organizations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Campus Facilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated on Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't miss out on exciting events, workshops, and networking opportunities at SmartLearn.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200">
            Subscribe to Event Updates
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;