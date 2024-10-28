import React from 'react';
import './About.css';

const About = () => {
  const profiles = [
    {
      photo: '/profile.jpeg', // Replace with the actual path or use a URL
      name: 'John Doe',
      collegeId: 'C123456',
      collegeName: 'XYZ University',
      branch: 'Computer Science',
      courseYear: '3rd Year',
      contact: '+91 9876543210',
      email: 'john.doe@example.com',
      mentor: 'Dr. Smith',
      project: 'E-commerce Platform Development',
      linkedIn: 'https://www.linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe'
    },
    {
      photo: 'path_to_photo2.jpg',
      name: 'Jane Smith',
      collegeId: 'C234567',
      collegeName: 'ABC Institute of Technology',
      branch: 'Information Technology',
      courseYear: 'Final Year',
      contact: '+91 8765432109',
      email: 'jane.smith@example.com',
      mentor: 'Prof. Brown',
      project: 'AI-based Recommendation System',
      linkedIn: 'https://www.linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith'
    },
    {
      photo: 'path_to_photo3.jpg',
      name: 'Alex Johnson',
      collegeId: 'C345678',
      collegeName: 'DEF College of Engineering',
      branch: 'Electronics and Communication',
      courseYear: '2nd Year',
      contact: '+91 7654321098',
      email: 'alex.johnson@example.com',
      mentor: 'Dr. Wilson',
      project: 'IoT-based Smart Home System',
      linkedIn: 'https://www.linkedin.com/in/alexjohnson',
      github: 'https://github.com/alexjohnson'
    }
  ];

  return (
    <div className='about-container'>
      <h1>Our Team Profiles</h1>
      <div className='profile-list'>
        {profiles.map((profile, index) => (
          <div key={index} className='profile-card'>
            <img src={profile.photo} alt={`${profile.name}'s Profile`} className='profile-photo' />
            <h2>{profile.name}</h2>
            <p><strong>College ID:</strong> {profile.collegeId}</p>
            <p><strong>College Name:</strong> {profile.collegeName}</p>
            <p><strong>Branch:</strong> {profile.branch}</p>
            <p><strong>Course Year:</strong> {profile.courseYear}</p>
            <p><strong>Contact:</strong> {profile.contact}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Mentor:</strong> {profile.mentor}</p>
            <p><strong>Project Name:</strong> {profile.project}</p>
            <div className='profile-links'>
              <a href={profile.linkedIn} target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
              <a href={profile.github} target='_blank' rel='noopener noreferrer'>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
