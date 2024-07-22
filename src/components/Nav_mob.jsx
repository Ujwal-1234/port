import { React, useState} from 'react'
import pclogo from '../assets/logo.png'

export default function Nav_mob() {
    const [activeLink, setActiveLink] = useState(''); 

    const handleLinkClick = (id) => {
        setActiveLink(id);
    };

    const isActive = (id) => {
        return activeLink === id ? 'overline' : '';
    };
  return (
    <div class=" ">
        <nav className="fixed bottom-32 right-5 z-50 lg:p-1 shadow-primary-sm lg:hidden">
            <div className="flex flex-col h-full justify-between align-middle items-center text-secondary">
                <div className="lg:ml-10 mt-5">
                    <img src={pclogo} style={{ width: "50px" }} alt="Logo" />
                </div>
                <div className="font-bold text-lg bg-white shadow-md bg-opacity-90 rounded-2xl flex flex-col items-center p-5">
                    <div className="flex flex-col items-center">
                        <h2
                            className={`mb-5 decoration-2 text-2xl hover:overline font-bungee ${isActive('home')}`}
                            onClick={() => handleLinkClick('home')}
                        >
                            <a href="#home" className="text-teal-800">Home</a>
                        </h2>
                        <h2
                            className={`mb-5 decoration-2 text-2xl hover:overline font-bungee ${isActive('products')}`}
                            onClick={() => handleLinkClick('products')}
                        >
                            <a href="#products" className="text-teal-800">Products</a>
                        </h2>
                        <h2
                            className={`mb-5 decoration-2 text-2xl hover:overline font-bungee ${isActive('services')}`}
                            onClick={() => handleLinkClick('services')}
                        >
                            <a href="#services" className="text-teal-800">Skills</a>
                        </h2>
                        <h2
                            className={`mb-5 decoration-2 text-2xl hover:overline font-bungee ${isActive('about')}`}
                            onClick={() => handleLinkClick('about')}
                        >
                            <a href="#about" className="text-teal-800">About</a>
                        </h2>
                        <h2
                            className={`mb-5 decoration-2 text-2xl hover:overline font-bungee ${isActive('contact')}`}
                            onClick={() => handleLinkClick('contact')}
                        >
                            <a href="#contact" className="text-teal-800">Contact</a>
                        </h2>
                    </div>
                </div>
            </div>
        </nav>

    </div>
  )
}
