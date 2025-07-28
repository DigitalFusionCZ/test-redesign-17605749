"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Vše pro stavby s.r.o. | Tepelně-izolační materiály";
    
    const faviconUrl = "https://via.placeholder.com/32x32/10b981/ffffff?text=V";
    
    let faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
      (faviconLink as HTMLLinkElement).href = faviconUrl;
    } else {
      const newFaviconLink = document.createElement('link');
      newFaviconLink.rel = 'icon';
      newFaviconLink.href = faviconUrl;
      document.head.appendChild(newFaviconLink);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#o-nas', label: 'O nás' },
    { href: '#produkty', label: 'Produkty' },
    { href: '#reference', label: 'Reference' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#uvod" className="flex-shrink-0">
              <Image src="/images/logo-vseprostavby.png" alt="Vše pro stavby s.r.o. logo" width={180} height={50} priority />
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="font-medium text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                <span className="sr-only">Otevřít menu</span>
                <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg" alt="Menu" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="uvod" className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white bg-gray-700">
          <Image 
            src="/images/project-rdpo-modern-house.jpg"
            alt="Moderní dům po rekonstrukci"
            fill
            className="z-0 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in-down">Prodej a aplikace tepelně-izolačních materiálů</h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up">Specializujeme se na materiály značky Thermo, které přináší úspory a komfort pro vaši stavbu.</p>
            <a href="#produkty" className="inline-block bg-emerald-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-emerald-600 transition-transform duration-300 transform hover:scale-105">
              Zobrazit naše produkty
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section id="o-nas" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/project-tanvald-finished-house.jpg" alt="Dokončený dům v Tanvaldu" width={600} height={450} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Přes 15 let zkušeností ve stavebnictví</h2>
                <p className="text-xl text-gray-600 mb-6">Společnost VŠE PRO STAVBY s.r.o. se sídlem v Havlíčkově Brodě byla založena v roce 2007. Zabýváme se prodejem a aplikací tepelně-izolačních a sanačních materiálů značky Thermo a prodejem ostatních stavebních materiálů.</p>
                <p className="text-gray-600">Poskytujeme kompletní servis pro stavebníky a stavební firmy, od poradenství až po realizaci. Naším cílem je vaše maximální spokojenost a kvalitně odvedená práce.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produkty" className="py-16 lg:py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Naše produkty značky Thermo</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">Nabízíme ucelenou řadu ověřených materiálů pro zateplení a sanaci.</p>
            </div>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <img src="https://api.iconify.design/ph/buildings-bold.svg?color=%2310b981" alt="ThermoUM ikona" className="h-16 w-16 mb-4"/>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ThermoUM</h3>
                <p className="text-gray-600">Kvalitní tepelně izolační omítka pro efektivní zateplení fasád a interiérů.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <Image src="/images/product-thermoin-packaging.png" alt="ThermoIN obal produktu" width={100} height={100} className="h-16 w-auto object-contain mb-4"/>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ThermoIN</h3>
                <p className="text-gray-600">Tepelně izolační štuková omítka pro finální úpravy s izolačními vlastnostmi.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <Image src="/images/product-thermosan-packaging.png" alt="ThermoSAN obal produktu" width={100} height={100} className="h-16 w-auto object-contain mb-4"/>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ThermoSAN</h3>
                <p className="text-gray-600">Tepelně izolační sanační omítka ideální pro vlhké zdivo a historické objekty.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <img src="https://api.iconify.design/ph/paint-roller-bold.svg?color=%2310b981" alt="ThermoPRIM ikona" className="h-16 w-16 mb-4"/>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ThermoPRIM</h3>
                <p className="text-gray-600">Spolehlivý penetrační nátěr pro sjednocení savosti podkladu a zvýšení přilnavosti.</p>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="reference" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Referenční stavby</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">Podívejte se na ukázky naší práce a přesvědčte se o kvalitě našich realizací.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative block bg-black rounded-lg overflow-hidden shadow-lg">
                  <Image src="/images/project-rdpo-modern-house.jpg" alt="Moderní dům s tmavou střechou" width={800} height={600} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"/>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-xl font-bold text-white">Rekonstrukce RDPO</h3>
                      <p className="text-sm text-gray-300">Komplexní zateplení fasády</p>
                  </div>
              </div>
              <div className="group relative block bg-black rounded-lg overflow-hidden shadow-lg">
                  <Image src="/images/project-tanvald-finished-house.jpg" alt="Dokončený dům v zeleni" width={800} height={600} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"/>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-xl font-bold text-white">Projekt Tanvald</h3>
                      <p className="text-sm text-gray-300">Aplikace sanačních omítek</p>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 lg:py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Kontaktujte nás</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">Rádi vám poradíme s výběrem vhodných materiálů a připravíme nabídku na míru.</p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div className="flex items-start space-x-4">
                <img src="https://heroicons.com/24/solid/map-pin.svg" alt="Adresa" className="w-8 h-8 text-emerald-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Sídlo firmy</h3>
                  <p className="text-gray-600">VŠE PRO STAVBY s.r.o.</p>
                  <p className="text-gray-600">Pražská 2406</p>
                  <p className="text-gray-600">580 01 Havlíčkův Brod</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src="https://heroicons.com/24/solid/phone.svg" alt="Telefon" className="w-8 h-8 text-emerald-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Telefon</h3>
                  <p className="text-gray-600">Jan Kletečka</p>
                  <a href="tel:+420724026250" className="text-emerald-600 hover:text-emerald-800 font-medium">+420 724 026 250</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src="https://heroicons.com/24/solid/envelope.svg" alt="Email" className="w-8 h-8 text-emerald-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <a href="mailto:info@vseprostavby.cz" className="text-emerald-600 hover:text-emerald-800 font-medium">info@vseprostavby.cz</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src="https://heroicons.com/24/solid/information-circle.svg" alt="Fakturační údaje" className="w-8 h-8 text-emerald-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Fakturační údaje</h3>
                  <p className="text-gray-600">IČ: 27532309</p>
                  <p className="text-gray-600">DIČ: CZ27532309</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Vše pro stavby s.r.o. Všechna práva vyhrazena.</p>
          <p className="text-sm text-gray-400 mt-2">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
