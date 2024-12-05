import React from 'react';

function Pricing() {
  const plans = [
    {
      title: 'Starter Plan',
      price: '£7.79',
      frequency: 'then £10/Month',
      features: [
        'Business Email',
        'Custom Domain',
        'Cloudflare Domain Protection',
        'Custom Website (includes Database, Hosting, and Analytics)',
        'Admin Dashboard on notsao.com',
        'Monthly Reports on Website (website metrics, attack summary, etc.)',
        'Regular Site Maintenance',
      ],
      unavailable: [
        'Custom Integrations (e.g., payment systems, user authentication)',
        'SEO and Performance Optimization',
        'Quarterly Strategic Meetings to review site performance and set future goals',
        'Unlimited Content Updates',
        'Uptime Monitoring',
        'Priority Email and Phone Support',
        'Enhanced Security Features (WAF, DDoS protection)',
      ],
    },
    {
      title: 'Growth Plan',
      price: '£47.79',
      frequency: 'then £25/Month',
      label: 'MOST POPULAR',
      features: [
        'Business Email',
        'Custom Domain',
        'Cloudflare Domain Protection',
        'Custom Website (includes Database, Hosting, and Analytics)',
        'Admin Dashboard on notsao.com',
        'Monthly Reports on Website (website metrics, attack summary, etc.)',
        'Regular Site Maintenance',
        'Custom Integrations (e.g., payment systems, user authentication)',
        'SEO and Performance Optimization'
      ],
      unavailable: [
        'Quarterly Strategic Meetings to review site performance and set future goals',
        'Unlimited Content Updates',
        'Uptime Monitoring',
        'Priority Email and Phone Support',
        'Enhanced Security Features (WAF, DDoS protection)',
      ],
    },
    {
      title: 'Business Max Plan',
      price: '£97.79',
      frequency: 'then £50/Month',
      features: [
        'Business Email',
        'Custom Domain',
        'Cloudflare Domain Protection',
        'Custom Website (includes Database, Hosting, and Analytics)',
        'Admin Dashboard on notsao.com',
        'Monthly Reports on Website (website metrics, attack summary, etc.)',
        'Regular Site Maintenance',
        'Custom Integrations (e.g., payment systems, user authentication)',
        'SEO and Performance Optimization',
        'Quarterly Strategic Meetings to review site performance and set future goals',
        'Unlimited Content Updates',
        'Uptime Monitoring',
        'Priority Email and Phone Support',
        'Enhanced Security Features (WAF, DDoS protection)',
      ],
      unavailable: [],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-10 py-10">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative bg-white text-black p-6 rounded-[30px] shadow-lg ${
            plan.label ? 'transform scale-105' : ''
          }`}
          style={{ width: '500px', height: 'fit-content' }}
        >
          {plan.label && (
            <div className="absolute top-[-20px] left-0 right-0 h-[50px] text-center bg-pink-500 text-white py-1 rounded-t-[20px] font-bold text-2xl align-middle">
              {plan.label}
            </div>
          )}
          <h2 className="text-2xl font-bold text-center mt-8">{plan.title}</h2>
          <p className="text-center font-bold text-xl my-2">{plan.price}</p>
          <p className="text-center text-lg mb-4">{plan.frequency}</p>
          <ul className="mb-4">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-lg">
                <span className="text-green-500 mr-2">✔</span> {feature}
              </li>
            ))}
            {plan.unavailable.map((feature, idx) => (
              <li key={idx} className="flex items-center text-lg">
                <span className="text-red-500 mr-2">✖</span> {feature}
              </li>
            ))}
          </ul>
          <button
            className={`w-full py-3 rounded-[20px] font-bold text-lg ${
              index === 0
                ? 'bg-gradient1 text-white hover:bg-[#A72A69] duration-300'
                : index === 1
                ? 'bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 text-white hover:bg-gradient-to-r hover:from-[#A72A69] hover:via-[#A775E1] hover:to-[#3C18A7] duration-500'
                : 'bg-gradient3 text-white hover:bg-[#3C18A7] duration-300'
            }`}
          >
            Subscribe Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Pricing;
