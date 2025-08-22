import React from 'react';
import { Clock, Users, Star, BookOpen } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '12 weeks',
      students: 2500,
      rating: 4.9,
      level: 'Beginner to Advanced',
      price: '$299',
      features: ['React & Redux', 'Node.js & Express', 'MongoDB Database', 'Real Projects'],
    },
    {
      id: 2,
      title: 'Data Science & Machine Learning',
      description: 'Learn Python, data analysis, and machine learning algorithms. Transform data into actionable insights.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '16 weeks',
      students: 1800,
      rating: 4.8,
      level: 'Intermediate',
      price: '$399',
      features: ['Python & Pandas', 'Machine Learning', 'Data Visualization', 'Real Datasets'],
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      description: 'Master SEO, social media marketing, content strategy, and analytics to grow any business online.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '8 weeks',
      students: 3200,
      rating: 4.7,
      level: 'Beginner',
      price: '$199',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'Analytics'],
    },
    {
      id: 4,
      title: 'UX/UI Design Fundamentals',
      description: 'Create beautiful, user-friendly designs. Learn Figma, design principles, and user research methods.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '10 weeks',
      students: 2100,
      rating: 4.9,
      level: 'Beginner',
      price: '$249',
      features: ['Figma Mastery', 'User Research', 'Wireframing', 'Prototyping'],
    },
    {
      id: 5,
      title: 'Cybersecurity Essentials',
      description: 'Protect systems and networks from digital threats. Learn ethical hacking and security best practices.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '14 weeks',
      students: 1500,
      rating: 4.8,
      level: 'Intermediate',
      price: '$349',
      features: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Compliance'],
    },
    {
      id: 6,
      title: 'Mobile App Development',
      description: 'Build native iOS and Android apps using React Native. Deploy to app stores successfully.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '12 weeks',
      students: 1900,
      rating: 4.7,
      level: 'Intermediate',
      price: '$329',
      features: ['React Native', 'iOS Development', 'Android Development', 'App Store Deploy'],
    },
  ];

  const categories = [
    'All Courses',
    'Programming',
    'Data Science',
    'Design',
    'Marketing',
    'Business',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Courses
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our extensive catalog of expert-designed courses and start your learning journey today.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200 border border-gray-200 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-900">{course.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {course.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Enroll Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200">
            Load More Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;