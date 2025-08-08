import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic2.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Cardiologist from './Cardiologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynaecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


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
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynaecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatrician',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Cardiologist',
        image: Cardiologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Vinay Rastogi',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Vinay Rastogi is a dedicated general physician focused on holistic health, disease prevention, and effective treatment strategies for all age groups.',
        fees: 1000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Meena Chopra',
        image: doc2,
        speciality: 'Gynaecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Meena Chopra specializes in women"s health, offering expert care in pregnancy, menstrual disorders, and reproductive health.',
        fees: 1000,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Chirag Desai',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Sakshi Patel provides advanced dermatological care for all skin types, focusing on acne, eczema, pigmentation, and cosmetic concerns.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Nakul Sharma',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Kunal Verma is a caring pediatrician with a focus on child development, vaccinations, and acute pediatric illnesses.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Radhika Sharma',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Radhika Sharma offers expert care for neurological disorders such as epilepsy, migraines, and stroke rehabilitation.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Gaurav Gupta',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gaurav Gupta specializes in treating complex neurological conditions with a patient-centric approach and thorough diagnosis.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Lee',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Chirag Desai focuses on family medicine, managing chronic diseases and promoting healthy lifestyle practices.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Rahul Agarwal',
        image: doc8,
        speciality: 'Gynaecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Tanvi Agarwal is committed to providing compassionate gynecological care, with a focus on fertility and prenatal health.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Anaya Singh',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Anaya Singh is a skilled dermatologist offering treatment for skin infections, hair loss, and cosmetic dermatology.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Rohan Mehta',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Rohan Mehta provides attentive pediatric care, ensuring the healthy growth and development of children and infants.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoya Kapoor',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Zoya Kapoor is a neurologist with expertise in brain and spinal conditions, offering personalized neurological care.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Pranav Bhatt',
        image: doc12,
        speciality: 'Cardiologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Pranav Bhatt treats a wide range of digestive disorders, with a focus on gastrointestinal wellness and endoscopic procedures.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Kavita Joshi',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kavita Joshi provides primary care services with a focus on preventive medicine and patient education.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Rajeev Sinha',
        image: doc14,
        speciality: 'Gynaecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Rajeev Sinha offers specialized care in women’s reproductive health, gynecologic surgeries, and hormonal issues.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Aishwarya Nair',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Aishwarya Nair is passionate about skin care, treating a wide range of skin and cosmetic conditions with modern techniques.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]