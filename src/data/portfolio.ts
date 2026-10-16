import type { LucideIcon } from 'lucide-react';
import {
  Brain, ShoppingCart, Sprout, MessageSquareText,
  FileText, BarChart3, Activity,
} from 'lucide-react';

export const personal = {
  name: 'Gajapriya S.',
  title: 'Aspiring Data Analyst | AI & Data Science',
  intro:
    'An enthusiastic fresher passionate about data analytics, artificial intelligence, and solving real-world problems through data-driven insights. I love turning raw data into meaningful stories that drive decisions.',
  email: 'gajap785@gmail.com',
  phone: '8940886347',
  resumePath: '/resume.pdf',
  linkedinUrl: 'https://www.linkedin.com/in/gaja-priya-65b5a8434',
  githubUrl: 'https://github.com/Gajapriya-AI',
};

export const about = {
  paragraphs: [
    'I am an enthusiastic fresher with a deep interest in data analytics, artificial intelligence, and solving real-world problems through technology. My journey into data science is driven by curiosity — the desire to understand patterns hidden in data and translate them into actionable insights.',
    'Through hands-on projects in machine learning, business intelligence, and data visualization, I have built a strong foundation in the end-to-end data pipeline — from data cleaning and exploratory analysis to model building and dashboard storytelling. I am eager to bring this energy to a collaborative team where I can learn, contribute, and grow.',
  ],
  highlights: [
    'Data Analytics & Visualization',
    'Machine Learning & AI',
    'Real-World Problem Solving',
  ],
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Programming & Databases',
    items: ['Python', 'SQL', 'MySQL', 'HTML', 'CSS', 'React.js'],
  },
  {
    category: 'Data Analysis & Visualization',
    items: ['Excel', 'Power BI', 'Tableau', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    category: 'Machine Learning & AI',
    items: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'SciPy'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Jupyter Notebook', 'VS Code', 'Git'],
  },
];

export const projects: {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  url: string;
}[] = [
  {
    title: 'E-Commerce Customer Churn Prediction',
    description:
      'A machine learning project that analyzes customer behavior patterns to predict which customers are likely to churn, helping businesses take proactive retention actions.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Classification'],
    icon: ShoppingCart,
    url: 'https://github.com/Gajapriya-AI/ecommerce-customer-churn',
  },
  {
    title: 'FMCG Product Demand Prediction',
    description:
      'A forecasting model that predicts product demand for the FMCG sector using historical sales data, enabling better inventory planning and supply chain decisions.',
    tags: ['Python', 'Time Series', 'XGBoost', 'Forecasting'],
    icon: Activity,
    url: 'https://github.com/Gajapriya-AI/FMCG-Demand-Forecasting-LSTM',
  },
  {
    title: 'AI-Powered Crop Disease Detection',
    description:
      'A deep learning solution that identifies crop diseases from leaf images, supporting early intervention and helping farmers protect their yields.',
    tags: ['TensorFlow', 'Keras', 'OpenCV', 'CNN'],
    icon: Sprout,
    url: 'https://github.com/Gajapriya-AI/Crop-disease-detection-CNN',
  },
  {
    title: 'AI-Powered Voice of the Customer Review Intelligence Platform',
    description:
      'A natural language processing platform that analyzes customer reviews to extract sentiment, themes, and actionable insights for product improvement.',
    tags: ['NLP', 'Python', 'Sentiment Analysis', 'Scikit-learn'],
    icon: MessageSquareText,
    url: 'https://github.com/Gajapriya-AI/voc-review-intelligence',
  },
  {
    title: 'AI-Powered ATS Resume Analyzer',
    description:
      'An AI tool that evaluates resumes against job descriptions, scoring keyword match and relevance to help candidates optimize their applications for Applicant Tracking Systems.',
    tags: ['Python', 'NLP', 'Automation', 'Text Processing'],
    icon: FileText,
    url: 'https://github.com/Gajapriya-AI/ATS-resume-intelligence',
  },
  {
    title: 'HR Analysis Dashboard',
    description:
      'An interactive Power BI dashboard that visualizes key HR metrics — attrition, demographics, and performance — to support data-driven people decisions.',
    tags: ['Power BI', 'DAX', 'Data Visualization', 'HR Analytics'],
    icon: BarChart3,
    url: 'https://github.com/Gajapriya-AI/HR-Analytics-PowerBI',
  },
  {
    title: 'India COVID-19 Analysis Dashboard',
    description:
      'A data visualization dashboard tracking COVID-19 trends across Indian states, presenting case, recovery, and vaccination data in an accessible format.',
    tags: ['Tableau', 'Data Visualization', 'Pandas', 'Analytics'],
    icon: Activity,
    url: 'https://github.com/Gajapriya-AI/Corona-Data-Analysis-Tableau',
  },
];

export const education = [
  {
    degree: 'M.Com',
    institution: 'Srimat Andavan Arts & Science College, Trichy',
    cgpa: '7.9',
  },
  {
    degree: 'B.Com',
    institution: 'Srimat Indira Gandhi College, Trichy',
    cgpa: '7.5',
  },
];

export const experience = [
  {
    role: 'Artificial Intelligence Internship',
    organization: 'Biglearn IT Training Institute, Trichy',
    period: '01 April 2026 – 30 September 2026',
    description:
      'Hands-on training in artificial intelligence, machine learning, and deep learning, working on real-world AI projects.',
  },
  {
    role: 'HR Analysis & Business Intelligence Training',
    organization: 'Futurewise IT Training Institute, Trichy',
    period: '09–10 February 2026',
    description:
      'Intensive training in HR analytics and business intelligence, building dashboards and analytical workflows.',
  },
];

export const certifications = [
  {
    title: 'Master in Artificial Intelligence',
    description: 'Comprehensive program covering machine learning, deep learning, and AI application development.',
  },
  {
    title: 'Full Stack Web Development',
    description: 'End-to-end web development covering frontend and backend technologies and deployment.',
  },
  {
    title: 'Stock Market',
    description: 'Foundational understanding of stock market mechanics, analysis, and investment strategies.',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
