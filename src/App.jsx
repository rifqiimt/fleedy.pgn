import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  FileText, 
  Car, 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Apple,
  Play,
  Instagram,
  Facebook,
  User // Import icon baru untuk Driver/Supir
} from 'lucide-react';

// --- BAGIAN 1: DATA & KONFIGURASI ---

const services = [
  {
    title: "Sewa Kendaraan",
    description: "Layanan penyewaan unit kendaraan terbaru lepas kunci untuk kebutuhan operasional harian atau jangka panjang perusahaan Anda.",
    icon: <Car size={32} className="text-[#1f4374]" />,
  },
  {
    title: "Sewa Kendaraan dengan Supir",
    description: "Paket penyewaan lengkap dengan pengemudi profesional yang terlatih, bersertifikasi, dan berpengalaman.",
    icon: <User size={32} className="text-[#1f4374]" />,
  },
  {
    title: "Fleet Management",
    description: "Solusi lengkap mencakup administrasi handal, bengkel resmi, kartu BBM Pertamina nasional, driver bersertifikasi, serta opsi converter kit.",
    icon: <MapPin size={32} className="text-[#1f4374]" />,
  },
];

// Data untuk section "Why Us?"
const features = [
  {
    title: "Asuransi All-Risk",
    description: "Perlindungan menyeluruh untuk setiap unit kendaraan.",
    icon: <ShieldCheck size={40} className="text-white" />,
  },
  {
    title: "Servis Berkala",
    description: "Jadwal servis rutin di bengkel resmi.",
    icon: <Wrench size={40} className="text-white" />,
  },
  {
    title: "Toolkit Lengkap",
    description: "Setiap unit dilengkapi peralatan darurat standar.",
    icon: <Car size={40} className="text-white" />,
  },
  {
    title: "Dokumen Lengkap",
    description: "Jaminan kelengkapan surat-surat kendaraan.",
    icon: <FileText size={40} className="text-white" />,
  },
];

// --- BAGIAN 2: KOMPONEN ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk scroll halus saat link diklik
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Tutup menu mobile jika terbuka
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area - Klik logo kembali ke Home */}
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            {/* GANTI SRC DI BAWAH DENGAN FILE LOGO ANDA SENDIRI */}
            {/* Contoh: src="/assets/logo-pgn.png" */}
            <img 
              src="fleedy.png" 
              alt="PGN MAS Logo" 
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu - Standard Web Size (text-base / 16px) */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Services', 'Why Us', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={(e) => handleScroll(e, item.toLowerCase().replace(' ', '-'))}
                className="text-gray-600 hover:text-[#1f4374] text-base font-medium transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1f4374] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="bg-[#1f4374] text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-blue-900 transition shadow-lg shadow-blue-900/20 cursor-pointer"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-[#1f4374]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Home', 'Services', 'Why Us', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={(e) => handleScroll(e, item.toLowerCase().replace(' ', '-'))}
                className="block px-3 py-2 text-base text-gray-600 hover:bg-gray-50 rounded-md"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fefefe]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-[600px] h-[600px] bg-[#67c7ef] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-[#1f4374] font-semibold text-sm">
            <span className="w-2 h-2 bg-[#1f4374] rounded-full animate-pulse"></span>
            Solusi Transportasi Terpercaya
          </div>
          
          {/* Standard Hero Title: 4xl mobile, 6xl desktop (approx 60px) */}
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1f4374] leading-tight font-mark-pro">
            Your Business Partner on <span className="text-[#67c7ef]">The Road</span>
          </h1>
          
          {/* Standard Hero Subtitle: text-lg (18px) */}
          <div className="space-y-3">
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Layanan Sewa Kendaraan dan Fleet Management profesional untuk menunjang operasional bisnis Anda.
            </p>
            <p className="text-lg text-gray-500">
              Powered by <span className="font-bold text-[#1f4374]">@pgnmas</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-[#1f4374] text-white rounded-xl text-base font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 group cursor-pointer"
            >
              Hubungi Kami
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-3.5 bg-white text-[#1f4374] border-2 border-[#1f4374]/10 rounded-xl text-base font-bold hover:bg-gray-50 transition cursor-pointer flex items-center justify-center"
            >
              Lihat Katalog
            </a>
          </div>
        </div>

        {/* Image / Illustration Placeholder */}
        <div className="lg:w-1/2 relative animate-fade-in delay-200 w-full">
           <div className="relative z-10 bg-gradient-to-tr from-[#1f4374] to-[#67c7ef] rounded-[2rem] p-1 shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
             <div className="bg-white rounded-[1.9rem] overflow-hidden h-[300px] lg:h-[450px] flex items-center justify-center relative">
                {/* Abstract Car Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>
                <div className="text-center p-8">
                   <Car size={80} className="mx-auto text-[#1f4374] mb-4 opacity-80" />
                   <p className="text-gray-400 font-medium text-lg">Image Placeholder</p>
                   <p className="text-sm text-gray-300">Tempatkan foto mobil HD di sini</p>
                </div>
             </div>
           </div>
           {/* Decorative dots */}
           <div className="absolute -bottom-10 -left-10 w-24 h-24 flex gap-2 flex-wrap opacity-20">
             {[...Array(16)].map((_, i) => (
               <div key={i} className="w-4 h-4 bg-[#1f4374] rounded-full"></div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Standard Section Heading: 3xl or 4xl */}
          <h2 className="text-[#1f4374] text-3xl lg:text-4xl font-bold mb-4 font-mark-pro">Services</h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto">
            Kami menyediakan solusi komprehensif untuk kebutuhan mobilitas perusahaan Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1f4374] transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              {/* Standard Card Title: 2xl */}
              <h3 className="text-2xl font-bold text-[#1f4374] mb-3 font-mark-pro leading-tight">{service.title}</h3>
              {/* Standard Body: text-base */}
              <p className="text-gray-500 text-base leading-relaxed">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center text-[#67c7ef] text-base font-semibold mt-6 group-hover:gap-2 transition-all">
                Learn more <ChevronRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Title */}
          <div className="lg:w-1/3 sticky top-32">
            <h2 className="text-[#1f4374] text-3xl lg:text-4xl font-bold mb-6 font-mark-pro">Why Us?</h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8">
              Komitmen kami adalah memberikan ketenangan pikiran bagi bisnis Anda. 
              Fokus pada bisnis inti Anda, biarkan kami yang mengurus armadanya.
            </p>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 text-base rounded-lg font-semibold hover:bg-gray-200 transition">
              Download Company Profile
            </button>
          </div>

          {/* Right Side: Grid Features */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden group rounded-[1.5rem] h-[300px] p-8 flex flex-col justify-end transition-all duration-500 hover:shadow-2xl"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#67c7ef]/20 via-transparent to-[#67c7ef]/20 border-2 border-[#f6f6f6] rounded-[1.5rem] z-0"></div>
                
                {/* Hover Background Fill */}
                <div className="absolute inset-0 bg-[#1f4374] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <div className="relative z-20 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-14 h-14 bg-[#1f4374] rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 backdrop-blur-sm shadow-lg">
                    {React.cloneElement(feature.icon, { className: "text-white", size: 28 })}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1f4374] group-hover:text-white mb-2 transition-colors font-mark-pro leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 group-hover:text-blue-100 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Standard CTA Title: 4xl to 5xl */}
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1f4374] leading-tight mb-8 font-mark-pro animate-fade-up">
          Ready for experience <br/> a service of fleedy?
        </h2>
        
        <div className="flex justify-center gap-6 mt-10">
           <a 
             href="#contact" 
             className="bg-[#1f4374] text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform hover:shadow-2xl cursor-pointer"
           >
             Get Started
           </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               {/* GANTI SRC DI BAWAH DENGAN FILE LOGO ANDA SENDIRI */}
               <img 
                 src="fleedy.png" 
                 alt="PGN MAS Logo" 
                 className="h-10 w-auto object-contain"
               />
            </div>
            <p className="text-gray-500 text-base max-w-sm leading-relaxed">
              Memberikan solusi transportasi terbaik dengan standar keselamatan dan kenyamanan tertinggi untuk mitra bisnis kami.
            </p>

            {/* Tombol Download App Store & Play Store - IMG Placeholder agar bisa diganti */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="https://apps.apple.com/us/app/fleedy/id1605578677" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition w-fit"
              >
                {/* Placeholder Image untuk tombol App Store */}
                <img 
                  src="ios.png" 
                  alt="Download on the App Store" 
                  className="h-10 w-auto"
                />
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.pgnmas.fleedy&hl=id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition w-fit"
              >
                 {/* Placeholder Image untuk tombol Play Store */}
                 <img 
                  src="android.png" 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[#1f4374] text-lg mb-6 font-mark-pro">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-base">
              <li><a href="#home" className="hover:text-[#67c7ef] transition">Home</a></li>
              <li><a href="#why-us" className="hover:text-[#67c7ef] transition">About Us</a></li>
              <li><a href="#services" className="hover:text-[#67c7ef] transition">Services</a></li>
              <li><a href="#contact" className="hover:text-[#67c7ef] transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1f4374] text-lg mb-6 font-mark-pro">Contact</h4>
            <ul className="space-y-4 text-gray-500 text-base">
              {/* WhatsApp */}
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#67c7ef]" />
                <a href="https://api.whatsapp.com/send/?phone=6285775407472&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-[#67c7ef] transition">
                  +62 857-7540-7472 (WA)
                </a>
              </li>
              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#67c7ef]" />
                <a href="mailto:commercial@pgnmas.co.id" className="hover:text-[#67c7ef] transition">commercial@pgnmas.co.id</a>
              </li>
              {/* Instagram */}
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-[#67c7ef]" />
                <a href="https://www.instagram.com/fleedy.id/" target="_blank" rel="noopener noreferrer" className="hover:text-[#67c7ef] transition">@fleedy.id</a>
              </li>
              {/* Facebook */}
              <li className="flex items-center gap-3">
                <Facebook size={18} className="text-[#67c7ef]" />
                <a href="https://www.facebook.com/p/Fleedy-100070852897394/?locale=id_ID" target="_blank" rel="noopener noreferrer" className="hover:text-[#67c7ef] transition">Fleedy</a>
              </li>
              {/* Alamat */}
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#67c7ef]" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 PGN MAS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1f4374]">Privacy Policy</a>
            <a href="#" className="hover:text-[#1f4374]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- BAGIAN 3: APP UTAMA ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#67c7ef] selection:text-white">
      {/* Inject Google Font & Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        /* Enable Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Fallback ke Plus Jakarta Sans untuk mensimulasikan Mark Pro */
        body { 
          font-family: 'Mark Pro', 'Plus Jakarta Sans', sans-serif; 
        }
        
        .font-mark-pro {
          font-family: 'Mark Pro', 'Plus Jakarta Sans', sans-serif;
        }

        /* Custom Keyframe Animations */
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>

      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}