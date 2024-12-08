import React from 'react';
import customDomainIcon from '../assets/customDomain.svg';
import businessEmailIcon from '../assets/businessEmail.svg';
import cloudflareIcon from '../assets/cloudflare.svg';
import customWebsiteIcon from '../assets/customWebsite.svg';
import adminDashboardIcon from '../assets/adminDashboard.svg';
import monthlyReportsIcon from '../assets/monthlyReports.svg';
import seoIcon from '../assets/seo.svg';
import supportIcon from '../assets/support.svg';
import maintenanceIcon from '../assets/maintenance.svg';

function Services() {
  const services = [
    {
      icon: customDomainIcon,
      title: 'Custom Domains',
      description: 'Secure a unique domain name for your business.',
    },
    {
      icon: businessEmailIcon,
      title: 'Business Email',
      description: 'Professional email for your business or brand!',
    },
    {
      icon: cloudflareIcon,
      title: 'Cloudflare Domain Protection',
      description: 'Shield your website with top-tier security and faster loading times!',
    },
    {
      icon: customWebsiteIcon,
      title: 'Custom Websites',
      description: 'Fully personalized, responsive and scalable websites.',
    },
    {
      icon: adminDashboardIcon,
      title: 'Admin Dashboard',
      description: 'Manage your website and metrics all from one place!',
    },
    {
      icon: monthlyReportsIcon,
      title: 'Monthly Site Reports',
      description: 'Receive detailed monthly insights into your website.',
    },
    {
      icon: seoIcon,
      title: 'SEO Optimisation',
      description: 'Enhance your site\'s search engine rankings!',
    },
    {
      icon: supportIcon,
      title: 'Priority Support',
      description: 'Fast and reliable customer support for your needs.',
    },
    {
      icon: maintenanceIcon,
      title: 'Regular Site Maintenance',
      description: 'Regular updates and monitoring to ensure your website is running smoothly.',
    },
  ];

  return (
    <div className="bg-[#002262] py-10">
  <h2 className="text-center text-white text-3xl font-bold mb-8">Our services include:</h2>
  <div className="grid grid-cols-3 gap-x-0 gap-y-8 justify-items-center w-1/2 mx-auto">
    {services.map((service, index) => (
      <div key={index} className="flex flex-col items-center bg-[#3F16BB] p-4 rounded-lg shadow-md w-80">
        <div className='flex flex-row items-center justify-center'>
          <img src={service.icon} alt={service.title} className="mb-4 mr-4" />
          <h3 className="text-lg font-bold mb-2">{service.title}</h3>
        </div>
        <p className="text-center">{service.description}</p>
      </div>
    ))}
  </div>
</div>


  );
}

export default Services;