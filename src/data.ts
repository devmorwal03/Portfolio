export const profile = {
  name: 'Dev Morwal',
  role: 'Software Engineer · ML Researcher',
  school: 'IIT Bhubaneswar',
  degree: 'B.Tech + M.Tech (Dual Degree), Electrical Engineering',
  years: '2020 — 2025',
  cgpa: '7.06 / 10',
  email: 'devmorwalwork007@gmail.com',
  phone: '+91 8824839430',
  linkedin: 'https://www.linkedin.com/in/dev-morwal',
  leetcode: 'https://leetcode.com/u/Dev-011_m/',
  gfg: 'https://www.geeksforgeeks.org/user/devmorwal261/',
}

export const resumes = [
  {
    id: 'sde',
    title: 'Software Engineering',
    file: '/resumes/Dev_Resume_sde.pdf',
    downloadName: 'Dev_Morwal_SDE_Resume.pdf',
    blurb: 'Web products, React/Next.js, systems, and SDE-focused experience.',
  },
  {
    id: 'ds',
    title: 'Data Science',
    file: '/resumes/Dev_Resume_data_Science.pdf',
    downloadName: 'Dev_Morwal_Data_Science_Resume.pdf',
    blurb: 'ML research, deep learning, CV, and applied data science work.',
  },
] as const

export const experience = [
  {
    title: 'M.Tech Research Fellow',
    org: 'IIT Bhubaneswar',
    period: 'Jul 2024 — May 2025',
    tags: ['ML', 'Deep Learning'],
    points: [
      'Built neural-network fault-detection models for buck converters and 3-phase inverters to improve system reliability.',
      'Tuned models for accurate classification across varying operating conditions.',
      'Debugged prediction failures and strengthened robustness of fault detection.',
    ],
  },
  {
    title: 'Research Intern',
    org: 'IIT Bhubaneswar',
    period: 'May 2024 — Jul 2024',
    tags: ['ML', 'EV systems'],
    points: [
      'Designed an ML system that detects gate-driver faults in EV chargers from simulated grid, converter, and control-unit data.',
      'Created reusable fault-scenario datasets and reached 95% detection accuracy across conditions.',
      'Implemented real-time monitoring and alert flows between simulation outputs and model inputs.',
    ],
  },
]

export type ProjectTrack = 'software' | 'ml'

export const projects: {
  track: ProjectTrack
  name: string
  stack: string
  points: string[]
}[] = [
  {
    track: 'software',
    name: 'Genius',
    stack: 'Next.js · React · TypeScript · PostgreSQL · Clerk · Stripe',
    points: [
      'AI SaaS for multimedia generation with Gemini and Replicate APIs.',
      'Reusable TypeScript UI libraries and subscription billing with Stripe.',
      'Auth with Clerk and PostgreSQL for application data.',
    ],
  },
  {
    track: 'software',
    name: 'SHREX',
    stack: 'MongoDB · React · Express · Razorpay',
    points: [
      'Hotel booking product with dashboards, filters, and admin panels.',
      'REST APIs for bookings plus Razorpay payments.',
      'Front-end performance via local storage and lean state handling.',
    ],
  },
  {
    track: 'software',
    name: 'Encrypted TCP Chat',
    stack: 'C++ · TCP sockets · RC4 · Diffie–Hellman',
    points: [
      'Client–server chat with RC4 encryption and Diffie–Hellman key exchange.',
      'Presence states (BUSY / FREE), match requests, and isolated channels per pair.',
    ],
  },
  {
    track: 'ml',
    name: 'Curvetopia',
    stack: 'CNN · Random Forest · DFS · DSA',
    points: [
      'Regularizes and auto-completes doodles by detecting geometric shapes.',
      'Graph DFS plus classical ML and CNNs to reconstruct structured curves from noisy drawings.',
    ],
  },
  {
    track: 'ml',
    name: 'Crack Detection',
    stack: 'UNet3++ · TensorFlow · Semantic Segmentation',
    points: [
      'Deep model for structural damage on railway infrastructure.',
      'Semantic segmentation on the Tokaido Railway dataset to cut manual inspection load.',
    ],
  },
  {
    track: 'ml',
    name: 'Stock Forecasting',
    stack: 'LSTM · Python · Neural Networks',
    points: [
      'LSTM price prediction from historical market data.',
      'Preprocessing, hyperparameter search, and 92% evaluated accuracy vs actuals.',
    ],
  },
]

export const skills = {
  languages: ['C++', 'JavaScript', 'TypeScript', 'Python', 'MySQL'],
  web: ['HTML5', 'CSS3', 'Tailwind', 'React', 'Next.js', 'Node.js', 'Express'],
  data: ['MongoDB', 'PostgreSQL', 'MySQL'],
  ml: [
    'Neural Nets',
    'LLMs',
    'NLP',
    'Computer Vision',
    'GenAI',
    'TensorFlow',
    'Keras',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'LangChain',
    'RAG',
  ],
  tools: ['Git', 'GitHub', 'Kaggle', 'Jupyter', 'Postman', 'LaTeX', 'CAD'],
}

export const coursework = [
  'Data Structures & Algorithms',
  'OOP',
  'SDLC',
  'Operating Systems',
  'Probability & Combinatorics',
  'Number Theory',
  'Set Theory',
]

export const extras = [
  'Core Head, Alma Fiesta — socio-cultural fest, IIT Bhubaneswar',
  'Led photography team, Inter IIT Cult Meet 2023',
  'Clix Photography Society, IIT Bhubaneswar',
  '2nd place, Badminton — General Championship',
]

export const marquee = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'TensorFlow',
  'LangChain',
  'C++',
  'Node.js',
  'PostgreSQL',
  'Computer Vision',
  'RAG',
  'Express',
]
