import React from 'react';
import '../../app.css'
import svg1 from '../../assets/svg1.svg';
import svg2 from '../../assets/svg2.svg';
import svg3 from '../../assets/svg3.svg';
import HeroIMG from '../../assets/heroimg.svg'
import NavBar from '../../Standalone/NavBar';
import Pricing from '../../Standalone/Pricing';
import HowItWorks from '../../Standalone/HowItWorks';
import WhySVG from '../../assets/why.svg'
import Services from '../../Standalone/Services';
import icon from '../../assets/icon.svg'
import Card from '../../Standalone/BlogCards';
import imgplaceholder from '../../assets/imgplaceholder.svg'
import Footer from '../../Standalone/Footer';
import online from '../../assets/online.svg';
import ContactUs from '../../Standalone/ContactUs';

function Home() {
  return (
    <div className="min-h-screen bg-[#0d0c3d] text-white">
      <NavBar />
      <main className="flex flex-col items-center justify-center text-center mt-5">
        <div> <img src={HeroIMG} alt="Hero Image" /></div>
        <h1 className="text-4xl font-bold mb-4 flex flex-row items-center justify-center">
          Get your business <span className="text-green-500 ml-3"> online </span><span> <img src={online} alt="Online" /></span>
        </h1>
        <p className="mb-8">From idea to impact, build your online presence with ease </p>
        <div className="flex space-x-4">
          <button className="text-white border-[#531AFD] border px-4 py-2 rounded hover:bg-[#EB499B] duration-300">Learn More</button>
          <button className="bg-[#531AFD] px-4 py-2 rounded hover:bg-[#3F16BB] duration-300">Get Started</button>
        </div>
      </main>
      <div className="flex justify-around py-8 mt-10 bg-[#002262] my-6">
  <div className="text-center">
    <img src={svg1} alt="Scalable plans" className="mx-auto mb-2" />
    <p>Scalable plans</p>
  </div>
  <div className="text-center">
    <img src={svg2} alt="Comprehensive Solutions" className="mx-auto mb-2" />
    <p>Comprehensive Solutions</p>
  </div>
  <div className="text-center">
    <img src={svg3} alt="Top Tier Security" className="mx-auto mb-2" />
    <p>Top Tier Security</p>
  </div>
</div>
      <Pricing />
      <HowItWorks />
      <div className='flex flex-row items-center justify-center space-x-[100px] my-10'>
        <div className='flex flex-col w-1/2 '> <div className='font-bold text-white text-5xl'>Why choose <span className='bg-clip-text text-transparent bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3'> us? </span> </div><div className='mt-5'>Choosing us means partnering with a dedicated team committed to helping your business thrive online. Unlike other providers, we offer more than just domains and hosting—we provide comprehensive, scalable solutions tailored to your business size and goals. From secure Cloudflare protection and custom websites to admin dashboards and proactive site monitoring, we deliver everything you need for a strong online presence. With transparent pricing, priority support, and a focus on security and performance, we ensure your success every step of the way. Let us handle the technical details so you can focus on growing your business.</div></div>
        <div> <img src={WhySVG} alt="Secondary Image" /></div>
      </div>
      <Services />
      <div className='text-5xl font-bold text-center p-10'>
  <span className='bg-clip-text text-transparent bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3'>
    Explore our Blog
  </span>
</div>
      <div className='flex flex-row items-center justify-around space-x-[-200px]'>
        <Card icon={icon} title="Why a website is important for your brand" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed consequat enim, nec accumsan dui. In nec dui suscipit nisi auctor ornare a in eros. Pellentesque tempor dignissim elit, quis lacinia nulla pulvinar vitae. Morbi ac molestie nibh, ac blandit ex. Pellentesque habitant morbi tristique senectus ... 
" author={"John Doe"} />
        <Card icon={icon} title="What is SEO" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed consequat enim, nec accumsan dui. In nec dui suscipit nisi auctor ornare a in eros. Pellentesque tempor dignissim elit, quis lacinia nulla pulvinar vitae. Morbi ac molestie nibh, ac blandit ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus venenatis justo urna, nec placerat lacus ornare non. Fusce luctus et lorem volutpat ullamcorper. Mauris et velit quam... " author={"John Doe"} />
        <Card icon={icon} title="Understanding SEO" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed consequat enim, nec accumsan dui. In nec dui suscipit nisi auctor ornare a in eros. Pellentesque tempor dignissim elit, quis lacinia nulla pulvinar vitae. Morbi ac molestie nibh, ac blandit ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus venenatis justo urna, nec placerat lacus ornare non. Fusce luctus et lorem volutpat ullamcorper. Mauris et velit quam... " author={"John Doe"} />
      </div>
      <div className='flex items-center justify-center'><div className='bg-[#002262] rounded-[33px] w-1/2 p-10 mt-10'><div className='text-5xl font-bold text-center mb-5'> About Us </div>
      <div className='mx-32 text-center text-[18px]'>At <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 animate-pulse'>XAOREX,</span> we're a forward-thinking startup dedicated to helping businesses establish and grow their online presence with ease. Whether you're a small business taking your first steps online or a large company looking to enhance your digital footprint, we provide tailored solutions to meet your needs.
We specialize in domain acquisition, website creation, optimization, and comprehensive hosting services. What sets us apart is our commitment to security, transparency, and a seamless user experience. From setting up your custom domain to managing your website's analytics and security, we ensure every step is handled with care and expertise.
As a startup, we understand the challenges of building something from the ground up. That's why we focus on delivering affordable, scalable solutions backed by personalized support. At Xaorex, your success is our priority, and we're here to help you thrive in the digital world.</div></div></div>

    <div className='text-center mt-10'> <span className='bg-clip-text text-transparent bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 text-5xl font-bold text-center'>Meet the founders</span>
    <div className='mt-5'> At the heart of <span className='bg-clip-text text-transparent bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 animate-pulse font-bold'>XAOREX,</span> are two passionate founders: Abdel and Warwick, a dynamic duo dedicated to providing exceptional digital solutions for businesses of all sizes.</div>
    </div>
    <div className='flex flex-row items-center justify-around mx-10'> 
        <div className='flex flex-col p-10 w-[646px]'>
            <img src={imgplaceholder} alt="Secondary Image" className='h-[700px]'/>
            <div className='font-bold italic py-2'> Abdel, our Co- Founder & Digital Solutions Specialist </div>
            <div> 
            Abdel brings expertise in web development, server management, and client relations. With a keen eye for detail, Abdel creates professional, responsive, and secure websites tailored to clients' unique needs, while also managing hosting servers, domain setups, and advanced security measures like DDoS protection. Abdel is the go-to for ensuring seamless onboarding, guiding clients through everything from domain acquisition to dashboard training, and providing ongoing site maintenance and support. Beyond his technical skills, he oversees XAOREX’s business operations, constantly innovating service offerings and crafting tailored solutions for our clients.</div>
        </div>
        <div className='flex flex-col p-10 w-[646px]'>
            <img src={imgplaceholder} alt="Secondary Image" className='h-[700px]'/>
            <div className='font-bold italic py-2 '> Warwick, our Co-Founder & Marketing and Data Specialist </div>
            <div className=''> Warwick plays a pivotal role in managing the business's strategic growth. He writes weekly blogs to keep our audience informed, maintains our client database, and generates detailed monthly website performance reports. Warwick leads business outreach efforts through email campaigns and lead generation while overseeing finances to ensure sustainable growth. His ability to analyze data and market trends allows Xaorex to stay ahead of the curve and provide actionable insights to clients.
            Together, Abdel and Warwick combine technical expertise and strategic insight to drive Xaorex forward, ensuring every client gets the tools and support they need to thrive online.</div>
        </div>
    </div>
    <ContactUs />
    <Footer />
    </div>
  );
}

export default Home;