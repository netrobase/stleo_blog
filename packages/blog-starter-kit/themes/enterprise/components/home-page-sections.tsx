import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="bg-slate-950 py-10 dark:border-neutral-800 dark:bg-neutral-900 text-white rounded-lg mt-3">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="w-full md:w-1/2 text-center mb-6 mx-3 md:mb-0">
          <h1 className="text-3xl text-primary-500 font-bold mb-4 mx-3">
            Welcome to Saint Leo the Great
          </h1>
          <p className="text-lg mb-8 text-justify mx-3">
            Saint Leo the Great Parish is a catholic parish in the diocese of Enugu, Nigeria.
            Located in Trans Ekulu, Enugu, the parish is dedicated to serving the spiritual needs of the faithful.
            The parish also has a Group of Schools that provide quality education to children in the community.
          </p>
          <Link href="/about" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </Link>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 mx-3">
          <div className="relative w-full h-96">
            <Image
              src="/stleo_logo.jpg"
              alt="Image"
              className='rounded-lg'
              layout="fill" // Fill the parent container
              objectFit="cover" // Maintain aspect ratio and cover the container
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProgramsSection = () => {
  const programs = [
    {
      title: "Spiritual Growth",
      description: "At Saint Leo the Great Parish, we offer a variety of programs to help our parishioners grow spiritually. From daily mass and confession to retreats and spiritual direction, we provide the resources and support needed to deepen your relationship with God."
    },
    {
      title: "Education",
      description: "Our group of schools offers quality education from creche to secondary level. We are committed to providing a safe and nurturing environment where students can learn and grow academically, socially, and spiritually. Our dedicated teachers and staff work tirelessly to ensure that each child receives the individualized attention they need to succeed."
    },
    {
      title: "Community Development",
      description: "Saint Leo the Great Parish is committed to serving the community and fostering positive change. Through our community development program, we undertake initiatives aimed at improving infrastructure, promoting economic empowerment, and enhancing the overall well-being of our parishioners."
    }
  ];

  return (
    <section className="bg-gray-200 text-black py-12 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-primary-500 font-bold mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-3">
          {programs.map((program, index) => (
            <ProgramCard key={index} title={program.title} description={program.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ title, description }: any) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4 text-primary-500">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export const GroupOfSchoolsSection = () => {
  return (
    <section className="bg-gray-200 text-black py-12 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl text-primary-500 font-bold mb-4">Group of Schools</h2>
        <p className="text-lg mb-8">Welcome to our group of schools offering quality education from creche to secondary level.</p>
        <div className="flex justify-center space-x-4">
          <Link href="https://portal.saintleothegreat.com/" target='_blank' className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
            Result Portal
          </Link>
          <Link href="/slggs" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export const ParishActivity = () => {
  // Initialize state for each question
  const [questionStates, setQuestionStates] = useState([
    { question: 'Parish Priest Office Hours', answer: 'Wednesday, 9:00 AM - 5:00 PM', open: true },
    { question: 'Weekly Time Table: Monday to Friday', answer: 'Morning Mass - 7:00 AM, Evening Prayer - 6:00 PM', open: false },
    { question: 'Weekly Time Table: Saturday', answer: 'Morning Mass - 7:00 AM, Confession - 4:00 PM', open: false },
    { question: 'Weekly Time Table: Sunday', answer: 'Mass - 7:00 AM, 9:00 AM, 11:00 AM, 6:00 PM, Benediction - 5:00 PM', open: false },
  ]);

  // Function to toggle the state of a specific question
  const toggleQuestion = (index: number) => {
    setQuestionStates(prevState => {
      const newState = [...prevState]; // Create a copy of the state array
      newState[index].open = !newState[index].open; // Toggle the state of the clicked question
      // Close other questions when one is opened
      newState.forEach((question, i) => {
        if (i !== index) {
          question.open = false;
        }
      });
      return newState;
    });
  };

  return (
    <div className="bg-gray-200 rounded-lg p-6 shadow-md text-center">
      <h3 className="text-2xl text-primary-500 font-bold">Parish Activities</h3>
      <div>
        <ul className='space-y-2 mt-2'>
          {questionStates.map((question, index) => (
            <li key={index}>
              <h4 className="text-primary-500 cursor-pointer" onClick={() => toggleQuestion(index)}>
                {question.question}: {question.open ? "👆" : "👇"}
              </h4>
              {question.open && (
                <p className="ml-4">{question.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const FAQ = () => {
  // Initialize state for each question
  const [questionStates, setQuestionStates] = useState([
    { question: 'What are the Parish Office hours?', answer: 'Monday to Friday, 9:00 AM - 5:00 PM', open: true },
    { question: 'What classes does the group of schools have?', answer: 'The group of schools has classes from creche to secondary level.', open: false },
    { question: 'What are the school timings?', answer: 'School starts at 8:00 AM and ends at 2:00 PM.', open: false }
  ]);

  // Function to toggle the state of a specific question
  const toggleQuestion = (index: number) => {
    setQuestionStates(prevState => {
      const newState = [...prevState]; // Create a copy of the state array
      newState[index].open = !newState[index].open; // Toggle the state of the clicked question
      // Close other questions when one is opened
      newState.forEach((question, i) => {
        if (i !== index) {
          question.open = false;
        }
      });
      return newState;
    });
  };

  return (
    <div className="bg-gray-200 rounded-lg p-6 shadow-md text-center" id="faq">
      <h3 className="text-2xl text-primary-500 font-bold">FAQ</h3>
      <div>
        <ul className='space-y-2 mt-2'>
          {questionStates.map((question, index) => (
            <li key={index}>
              <h4 className="text-primary-500 cursor-pointer" onClick={() => toggleQuestion(index)}>
                {question.question}: {question.open ? "👆" : "👇"}
              </h4>
              {question.open && (
                <p className="ml-4">{question.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const EventsSection = () => {
  return (
    <section className="bg-gray-200 text-black py-12 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl text-primary-500 font-bold mb-4">Saint Leo Events</h2>
        <p className="text-lg mb-4">Stay updated on our latest school/ parish events, updates and activities.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/series/school-events" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
            School Events
          </Link>
          <Link href="/series/school-updates" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
            School Updates
          </Link>
          <Link href="/series/parish-events" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
            Parish Events
          </Link>
          <Link href="/series/parish-updates" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
            Parish Updates
          </Link>
        </div>
      </div>
    </section >
  );
};

export const ContactUsSection = () => {
  return (
    <section className="bg-gray-200 text-black py-12 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl text-primary-500 font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">Have questions? Reach out to us for more information.</p>
        <p className="text-lg mb-4">
          Email:&nbsp;
          <a href="mailto:stleothegreatenugu@gmail.com?subject=I have a question about ..."
            className="hover:underline hover:text-primary-700 text-primary-500">
            stleothegreatenugu@gmail.com
          </a></p>
        <p className="text-lg mb-4">
          Phone:&nbsp;
          <a href="tel:+2348064710438"
            className="hover:underline hover:text-primary-700 text-primary-500">
            +234 806 471 0438
          </a></p>
        <p className="text-lg">Address: Housing Estate, Trans Ekulu, Enugu, Nigeria</p>
      </div>
    </section>
  );
};
