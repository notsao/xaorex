import React from 'react';

function HowItWorks() {
  const steps = [
    {
      number: '1',
      text: 'Select one of our plans and complete our onboarding process.',
    },
    {
      number: '2',
      text: 'We will reach out to you within 24 hours with details of your domain acquisition and any other services.',
    },
    {
      number: '3',
      text: 'Planning of your online platform will begin, taking constant feedback from you to get everything perfect!',
      note: '*If growth plan or business max plan was purchased',
    },
    {
      number: '4',
      text: 'Gain admin access to your dashboard to manage domains, service usage, and hosting details all in one place.',
      note: '*If growth plan or business max plan was purchased',
    },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">How it works...</h1>
      <div className="flex flex-wrap justify-center space-x-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-64 bg-[#101066] text-white p-6 m-2 rounded-lg shadow-lg w-1/5"
          >
            <div className="bg-[#BF6CFF] rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold mb-4">
              {step.number}
            </div>
            <p className="mb-2">{step.text}</p>
            {step.note && <p className="text-sm italic">{step.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;