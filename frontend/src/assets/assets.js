import about_image from './about_image.jpg';
import appointment_img from './appointment_img.png';
import arrow_icon from './arrow_icon.svg';
import chats_icon from './chats_icon.svg';
import contact_image from './contact_image.jpg';
import cross_icon from './cross_icon.png';
import Dermatologist from './Dermatologist.svg';
import doc1 from './doc1.png';
import doc10 from './doc10.png';
import doc11 from './doc11.png';
import doc12 from './doc12.png';
import doc13 from './doc13.png';
import doc14 from './doc14.png';
import doc15 from './doc15.png';
import doc2 from './doc2.png';
import doc3 from './doc3.png';
import doc4 from './doc4.png';
import doc5 from './doc5.png';
import doc6 from './doc6.png';
import doc7 from './doc7.png';
import doc8 from './doc8.png';
import doc9 from './doc9.png';
import dropdown_icon from './dropdown_icon.svg';
import Gastroenterologist from './Gastroenterologist.svg';
import General_physician from './General_physician.svg';
import group_profiles from './group_profiles.png';
import Gynecologist from './Gynecologist.svg';
import header_img from './header_img.png';
import info_icon from './info_icon.svg';
import logo from './logo.png';
import menu_icon from './menu_icon.svg';
import Neurologist from './Neurologist.svg';
import Pediatricians from './Pediatricians.svg';
import profile_pic from './profile_pic.png';
import razorpay_logo from './razorpay_logo.png';
import stripe_logo from './stripe_logo.png';
import upload_icon from './upload_icon.png';
import verified_icon from './verified_icon.svg';

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: 'General physician',
    image: General_physician,
  },
  {
    speciality: 'Gynecologist',
    image: Gynecologist,
  },
  {
    speciality: 'Dermatologist',
    image: Dermatologist,
  },
  {
    speciality: 'Pediatricians',
    image: Pediatricians,
  },
  {
    speciality: 'Neurologist',
    image: Neurologist,
  },
  {
    speciality: 'Gastroenterologist',
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Rajesh Sharma',
    image: doc1,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Sharma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 500,
    address: {
      line1: '17th Cross, MG Road',
      line2: 'Bangalore, India',
    },
  },
  {
    _id: 'doc2',
    name: 'Dr. Priya Iyer',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about:
      'Dr. Iyer specializes in women’s health, providing expert care in obstetrics and gynecology.',
    fees: 600,
    address: {
      line1: '27th Cross, Anna Salai',
      line2: 'Chennai, India',
    },
  },
  {
    _id: 'doc3',
    name: 'Dr. Kavita Patel',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Year',
    about: 'Dr. Patel is an expert in skincare and dermatological treatments.',
    fees: 300,
    address: {
      line1: '37th Cross, Bandra',
      line2: 'Mumbai, India',
    },
  },
  {
    _id: 'doc4',
    name: 'Dr. Arjun Verma',
    image: doc4,
    speciality: 'Pediatrician',
    degree: 'MBBS',
    experience: '2 Years',
    about:
      'Dr. Verma provides compassionate care for infants, children, and adolescents.',
    fees: 400,
    address: {
      line1: '47th Cross, Jubilee Hills',
      line2: 'Hyderabad, India',
    },
  },
  {
    _id: 'doc5',
    name: 'Dr. Sneha Mehta',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Mehta specializes in diagnosing and treating neurological disorders.',
    fees: 500,
    address: {
      line1: '57th Cross, Connaught Place',
      line2: 'New Delhi, India',
    },
  },
  {
    _id: 'doc6',
    name: 'Dr. Anand Reddy',
    image: doc6,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about:
      'Dr. Reddy is a renowned neurologist with a keen interest in neurodegenerative diseases.',
    fees: 500,
    address: {
      line1: '57th Cross, Banjara Hills',
      line2: 'Hyderabad, India',
    },
  },
  {
    _id: 'doc7',
    name: 'Dr. Vishal Kapoor',
    image: doc7,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '5 Years',
    about:
      'Dr. Kapoor focuses on holistic patient care and preventive medicine.',
    fees: 500,
    address: {
      line1: '17th Cross, Karol Bagh',
      line2: 'New Delhi, India',
    },
  },
  {
    _id: 'doc8',
    name: 'Dr. Nisha Desai',
    image: doc8,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '6 Years',
    about:
      'Dr. Desai is a trusted expert in maternity and reproductive health.',
    fees: 600,
    address: {
      line1: '27th Cross, Park Street',
      line2: 'Kolkata, India',
    },
  },
  {
    _id: 'doc9',
    name: 'Dr. Anjali Nair',
    image: doc9,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Nair provides comprehensive skincare solutions.',
    fees: 300,
    address: {
      line1: '37th Cross, Vashi',
      line2: 'Navi Mumbai, India',
    },
  },
  {
    _id: 'doc10',
    name: 'Dr. Suresh Menon',
    image: doc10,
    speciality: 'Pediatrician',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Menon is dedicated to children’s health and well-being.',
    fees: 400,
    address: {
      line1: '47th Cross, JP Nagar',
      line2: 'Bangalore, India',
    },
  },
  {
    _id: 'doc11',
    name: 'Dr. Abhijit Banerjee',
    image: doc11,
    speciality: 'Cardiologist',
    degree: 'MBBS, MD',
    experience: '8 Years',
    about:
      'Dr. Banerjee is a leading cardiologist specializing in heart health and disease prevention.',
    fees: 700,
    address: {
      line1: 'Salt Lake, Sector 5',
      line2: 'Kolkata, India',
    },
  },
  {
    _id: 'doc12',
    name: 'Dr. Sunanda Ghosh',
    image: doc12,
    speciality: 'Endocrinologist',
    degree: 'MBBS, DM',
    experience: '7 Years',
    about: 'Dr. Ghosh specializes in diabetes and hormonal disorders.',
    fees: 650,
    address: {
      line1: 'Howrah, Shibpur',
      line2: 'West Bengal, India',
    },
  },
  {
    _id: 'doc13',
    name: 'Dr. Bibhuti Bhusan Das',
    image: doc13,
    speciality: 'Orthopedic Surgeon',
    degree: 'MBBS, MS',
    experience: '9 Years',
    about:
      'Dr. Das is an expert in joint replacement and orthopedic trauma surgeries.',
    fees: 800,
    address: {
      line1: 'Saheed Nagar',
      line2: 'Bhubaneswar, Odisha',
    },
  },
  {
    _id: 'doc14',
    name: 'Dr. Prakash Mohanty',
    image: doc14,
    speciality: 'Nephrologist',
    degree: 'MBBS, DM',
    experience: '6 Years',
    about: 'Dr. Mohanty specializes in kidney diseases and dialysis treatment.',
    fees: 750,
    address: {
      line1: 'Cuttack Road',
      line2: 'Cuttack, Odisha',
    },
  },
  {
    _id: 'doc15',
    name: 'Dr. Ramesh Pattnaik',
    image: doc15,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, DM',
    experience: '10 Years',
    about: 'Dr. Pattnaik is an expert in digestive system disorders.',
    fees: 850,
    address: {
      line1: 'Unit 9',
      line2: 'Bhubaneswar, Odisha',
    },
  },
];
