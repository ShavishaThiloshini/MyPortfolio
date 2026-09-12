const projects = [
  {
    id: 'frogfocus',
    title: 'FrogFocus',
    category: 'Productivity',
    shortDescription: 'Study session timer application with focus tracking',
    fullDescription: 'A productivity application designed to help students manage their study sessions effectively. The app provides timed focus sessions, breaks, and progress tracking to optimize learning patterns.',
    problem: 'Students often struggle with maintaining focus during study sessions and managing their time effectively across different subjects.',
    solution: 'Built a timer-based application with customizable session lengths, break reminders, and progress visualization to help users develop better study habits.',
    technologies: ['React', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    features: [
      'Customizable focus and break timers',
      'Session history and statistics',
      'Progress tracking across multiple subjects',
      'Responsive design for mobile and desktop',
      'User authentication and data persistence'
    ],
    contribution: 'Developed the complete frontend interface, implemented timer functionality, designed the UI/UX, and integrated with Supabase for data management.',
    image: '/images/projects/frogfocus.jpg',
    links: {
      github: 'https://github.com/ShavishaThiloshini/FrogFocus',
      live: null
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
    image: '/images/projects/smart-clinic.jpg',
    links: {
      github: null,
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
    image: '/images/projects/zoneedan.jpg',
    links: {
      github: null,
      live: null
    },
    featured: true
  },
  {
    id: 'cosmokeys',
    title: 'CosmoKeys',
    category: 'Interactive',
    shortDescription: 'Interactive music and piano application',
    fullDescription: 'An interactive web application that allows users to explore music through a virtual piano interface and interactive musical experiences.',
    problem: 'Many people want to explore music and piano playing but lack access to instruments or structured learning environments.',
    solution: 'Created an accessible web-based piano interface with interactive features that make music exploration engaging and educational.',
    technologies: ['React', 'Web Audio API', 'Tailwind CSS'],
    features: [
      'Virtual piano keyboard with realistic sounds',
      'Interactive music lessons and tutorials',
      'Recording and playback functionality',
      'Visual feedback for note learning',
      'Accessible touch and keyboard controls'
    ],
    contribution: 'Implemented the virtual piano interface using Web Audio API, designed the interactive lessons, and ensured responsive accessibility.',
    image: '/images/projects/cosmokeys.jpg',
    links: {
      github: null,
      live: null
    },
    featured: true
  },
  {
    id: 'penny-forest',
    title: 'Penny Forest',
    category: 'Finance',
    shortDescription: 'Personal finance tracking application',
    fullDescription: 'A personal finance tracking application that helps users monitor expenses, set savings goals, and visualize their financial health.',
    problem: 'Individuals often struggle to track their spending habits and maintain awareness of their financial goals and progress.',
    solution: 'Built a user-friendly finance tracker with expense categorization, goal setting, and visual dashboards for financial awareness.',
    technologies: ['React', 'Chart.js', 'LocalStorage'],
    features: [
      'Expense tracking and categorization',
      'Savings goal setting and progress tracking',
      'Visual charts and financial dashboards',
      'Monthly and yearly reports',
      'Local data storage for privacy'
    ],
    contribution: 'Developed the expense tracking interface, implemented chart visualizations, and created the goal-setting functionality.',
    image: '/images/projects/penny-forest.jpg',
    links: {
      github: null,
      live: null
    },
    featured: false
  },
  {
    id: 'habity',
    title: 'Habity',
    category: 'Productivity',
    shortDescription: 'Habit tracking and building application',
    fullDescription: 'A habit tracking application designed to help users build and maintain positive habits through consistent tracking and motivation.',
    problem: 'Building new habits is challenging, and many people struggle with consistency and motivation when trying to establish positive routines.',
    solution: 'Created a habit tracker with streak tracking, reminders, progress visualization, and motivational elements to support habit formation.',
    technologies: ['React', 'Tailwind CSS', 'LocalStorage'],
    features: [
      'Daily habit tracking and check-ins',
      'Streak counting and motivation',
      'Custom habit creation and management',
      'Progress visualization and statistics',
      'Reminder notifications'
    ],
    contribution: 'Built the habit tracking interface, implemented streak logic, and designed the progress visualization components.',
    image: '/images/projects/habity.jpg',
    links: {
      github: null,
      live: null
    },
    featured: false
  }
]

export default projects
