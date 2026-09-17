import gtMinistriesImg from '../assets/images/GT Visuals.png'
import smartClinicImg from '../assets/images/SmartClinic.png'
import zoneEdanImg from '../assets/images/ZoneEdan.png'
import chikolataImg from '../assets/images/Cikolata.png'
import lumoraVexImg from '../assets/images/LumoraVex.png'

const projects = [
  {
    id: 'gt-ministries',
    title: 'GT Ministries',
    category: 'Web Design',
    shortDescription: 'Modern landing page for GT Visual Ministries',
    fullDescription: 'A responsive, beautifully designed landing page created for GT Visual Ministries to showcase their services and improve their online presence.',
    problem: 'The organization lacked a modern, engaging web presence that effectively communicated their mission and visual media services.',
    solution: 'Designed and developed a sleek, fast-loading landing page with high-quality media integration and clear calls to action.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: [
      'Modern, clean UI/UX design',
      'Responsive layout for all devices',
      'Smooth scroll animations',
      'Integrated media galleries',
      'Contact and booking sections'
    ],
    contribution: 'Handled the entire design and frontend development process from conceptualization to deployment.',
    image: gtMinistriesImg,
    links: {
      github: 'https://github.com/ShavishaThiloshini/GT-Visual-Ministries',
      live: 'https://gtvisualministries.netlify.app/'
    },
    featured: true
  },
  {
    id: 'smart-clinic',
    title: 'Smart Clinic',
    category: 'Healthcare',
    shortDescription: 'Healthcare management system for clinics',
    fullDescription: 'A comprehensive healthcare management system designed to streamline clinic operations, patient management, and appointment scheduling.',
    problem: 'Small clinics often struggle with inefficient patient record management, appointment scheduling, and tracking patient history.',
    solution: 'Created a digital management system that centralizes patient information, automates appointment scheduling, and provides easy access to medical history.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Patient registration and profile management',
      'Appointment scheduling system',
      'Medical history tracking',
      'Doctor availability management',
      'Admin dashboard for clinic operations'
    ],
    contribution: 'Contributed to frontend development, patient management interface, and appointment scheduling features.',
    image: smartClinicImg,
    links: {
      github: 'https://github.com/ShavishaThiloshini/Smart_Clinic',
      live: null
    },
    featured: true
  },
  {
    id: 'zoneedan',
    title: 'ZoneEdan',
    category: 'Travel & Tourism',
    shortDescription: 'Travel discovery and planning platform',
    fullDescription: 'A travel and tourism discovery platform that helps users explore destinations, plan trips, and discover local attractions and experiences.',
    problem: 'Travelers often find it challenging to discover authentic local experiences and plan comprehensive itineraries for their trips.',
    solution: 'Built a platform that curates travel destinations, provides local recommendations, and offers tools for trip planning and experience booking.',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    features: [
      'Destination exploration with rich media',
      'Local attraction and experience recommendations',
      'Trip planning and itinerary tools',
      'User reviews and ratings',
      'Responsive mobile-first design'
    ],
    contribution: 'Developed the destination browsing interface, implemented search functionality, and contributed to the trip planning features.',
    image: zoneEdanImg,
    links: {
      github: 'https://github.com/ShavishaThiloshini/ZoneEdan',
      live: 'https://zoneedan.netlify.app/'
    },
    featured: true
  },
  {
    id: 'chikolata',
    title: 'Chikolata',
    category: 'E-Commerce / Dining',
    shortDescription: 'Restaurant landing page for Chikolata',
    fullDescription: 'An elegant, appetizing restaurant landing page built to showcase the menu, atmosphere, and dining experience at Chikolata.',
    problem: 'The restaurant needed a digital storefront that reflected the premium quality of their desserts and dining experience.',
    solution: 'Created an immersive, visually appealing website with menu showcases, reservation information, and location details.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Appetizing visual design and layout',
      'Interactive menu sections',
      'Smooth page transitions',
      'Responsive mobile optimization',
      'Location and reservation details'
    ],
    contribution: 'Led the UI design and frontend implementation, focusing on visual hierarchy and performance.',
    image: chikolataImg,
    links: {
      github: 'https://github.com/ShavishaThiloshini/cikolata-restaurant-website',
      live: 'https://cikolata-portfolio.netlify.app/'
    },
    featured: true
  },
  {
    id: 'lumora-vex',
    title: 'Lumora Vex',
    category: 'Photography',
    shortDescription: 'Photography portfolio website',
    fullDescription: 'A minimalist, image-focused portfolio website designed for a photography studio to display their best work and client sessions.',
    problem: 'The photographer required a platform where the images stood out without being distracted by heavy UI elements.',
    solution: 'Developed a minimalist gallery-style portfolio with optimized image loading and subtle interactive states.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Grid Layout'],
    features: [
      'Minimalist, distraction-free UI',
      'Responsive image grid galleries',
      'Lightweight and fast loading',
      'Accessible image navigation',
      'Contact and booking forms'
    ],
    contribution: 'Responsible for the end-to-end frontend development, ensuring high performance for media-heavy pages.',
    image: lumoraVexImg,
    links: {
      github: 'https://github.com/ShavishaThiloshini/lumora-vex-photography-portfolio',
      live: 'https://lumora-vex.netlify.app/'
    },
    featured: true
  }
]

export default projects
