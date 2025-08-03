import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Shield, 
  Globe, 
  Users, 
  CreditCard, 
  Lock, 
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Smartphone,
  TrendingUp,
  Zap
} from 'lucide-react';

const PayPalAbout = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isVisible, setIsVisible] = useState({});

  /is/ Auto-translate functionality
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0];
    setCurrentLang(langCode);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="section-"]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const translations = {
    en: {
      heroTitle: "PayPal. Powered Payments.",
      heroSubtitle: "Empowering millions of people and businesses worldwide to send, receive, and manage money safely and securely.",
      individualServices: "Services for Individuals",
      businessServices: "Services for Businesses", 
      globalReach: "Global Reach",
      securityFeatures: "Security Features",
      testimonials: "What Our Customers Say",
      send: "Send",
      receive: "Receive", 
      shop: "Shop",
      checkout: "Checkout",
      invoicing: "Invoicing",
      fraudProtection: "Fraud Protection",
      countries: "countries and regions",
      currencies: "currencies",
      languages: "languages",
      encryption: "256-bit SSL Encryption",
      monitoring: "24/7 Fraud Monitoring",
      protection: "Buyer Protection",
      about: "About",
      careers: "Careers",
      developers: "Developers",
      privacy: "Privacy",
      terms: "Terms"
    },
    es: {
      heroTitle: "PayPal. Pagos Potenciados.",
      heroSubtitle: "Empoderando a millones de personas y empresas en todo el mundo para enviar, recibir y administrar dinero de manera segura.",
      individualServices: "Servicios para Individuos",
      businessServices: "Servicios para Empresas",
      globalReach: "Alcance Global", 
      securityFeatures: "Características de Seguridad",
      testimonials: "Lo que Dicen Nuestros Clientes"
    },
    fr: {
      heroTitle: "PayPal. Paiements Alimentés.",
      heroSubtitle: "Permettre à des millions de personnes et d'entreprises dans le monde d'envoyer, de recevoir et de gérer de l'argent en toute sécurité.",
      individualServices: "Services pour les Particuliers",
      businessServices: "Services pour les Entreprises",
      globalReach: "Portée Mondiale",
      securityFeatures: "Fonctionnalités de Sécurité", 
      testimonials: "Ce que Disent Nos Clients"
    }
  };

  const t = translations[currentLang] || translations.en;

  const individualServices = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: t.send || "Send",
      description: "Send money to friends and family quickly and securely, whether they're across town or around the world."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: t.receive || "Receive", 
      description: "Get paid fast with just an email address or phone number. No need to share your financial details."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: t.shop || "Shop",
      description: "Shop confidently online and in-store with PayPal's secure payment system and buyer protection."
    }
  ];

  const businessServices = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: t.checkout || "Checkout",
      description: "Provide customers with a smooth, secure checkout experience that builds trust and increases conversions."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: t.invoicing || "Invoicing", 
      description: "Create and send professional invoices, track payments, and get paid faster with automated reminders."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t.fraudProtection || "Fraud Protection",
      description: "Advanced security technology and round-the-clock monitoring help protect your business from fraud."
    }
  ];

  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-green-600" />,
      title: t.encryption || "256-bit SSL Encryption",
      description: "Your financial information is protected with industry-leading encryption technology."
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: t.monitoring || "24/7 Fraud Monitoring", 
      description: "Advanced algorithms and dedicated security teams monitor transactions around the clock."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: t.protection || "Buyer Protection",
      description: "Get refunded for eligible unauthorized transactions and items that don't match their description."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "E-commerce Entrepreneur",
      avatar: "SJ",
      rating: 5,
      text: "PayPal has been instrumental in growing my online business. The security and ease of use give both me and my customers confidence in every transaction."
    },
    {
      name: "Miguel Rodriguez", 
      company: "Freelance Designer",
      avatar: "MR",
      rating: 5,
      text: "As a freelancer working with international clients, PayPal makes it incredibly easy to receive payments from anywhere in the world. The invoicing feature saves me so much time."
    },
    {
      name: "Emma Chen",
      company: "Small Business Owner",
      avatar: "EC", 
      rating: 5,
      text: "The fraud protection and monitoring give me peace of mind. I've never had to worry about security issues, and my customers trust the PayPal checkout experience."
    },
    {
      name: "David Thompson",
      company: "Online Retailer", 
      avatar: "DT",
      rating: 5,
      text: "PayPal's checkout integration increased our conversion rates significantly. Customers love the convenience and security of paying with their PayPal account."
    },
    {
      name: "Lisa Park",
      company: "Digital Marketer",
      avatar: "LP",
      rating: 5, 
      text: "I use PayPal for everything - sending money to family, paying for services, and receiving client payments. It's become an essential part of my financial life."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1641350625112-3b1d73c71418?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxwYXlwYWx8ZW58MHx8fHwxNzU0MTg1MDI4fDA&ixlib=rb-4.1.0&q=85"
              alt="PayPal Logo"
              className="w-32 h-16 mx-auto object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 opacity-90 animate-fade-in-delayed">
            {t.heroSubtitle}
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
            Learn More <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Services for Individuals */}
      <section id="section-individuals" className={`py-20 px-4 transition-all duration-1000 ${isVisible['section-individuals'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {t.individualServices}
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Everything you need to send, receive, and manage your money with confidence.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {individualServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Businesses */}
      <section id="section-business" className={`py-20 px-4 bg-gray-50 transition-all duration-1000 ${isVisible['section-business'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {t.businessServices}
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Powerful tools and solutions to help your business grow and succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md bg-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section id="section-global" className={`py-20 px-4 transition-all duration-1000 ${isVisible['section-global'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            {t.globalReach}
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Connecting people and businesses across the globe with secure, reliable payment solutions.
          </p>
          
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1571867424488-4565932edb41?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwcGF5bWVudHN8ZW58MHx8fHwxNzU0MTg1MDM0fDA&ixlib=rb-4.1.0&q=85"
              alt="Global Connectivity"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">200+</h3>
              <p className="text-lg text-gray-600">{t.countries || "Countries & Regions"}</p>
            </div>
            <div className="text-center">
              <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">100+</h3>
              <p className="text-lg text-gray-600">{t.currencies || "Currencies"}</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">56+</h3>
              <p className="text-lg text-gray-600">{t.languages || "Languages"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section id="section-security" className={`py-20 px-4 bg-gray-50 transition-all duration-1000 ${isVisible['section-security'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {t.securityFeatures}
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Your security is our top priority. We use advanced technology to keep your money and information safe.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md bg-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHw0fHxkaWdpdGFsJTIwcGF5bWVudHN8ZW58MHx8fHwxNzU0MTg1MDM0fDA&ixlib=rb-4.1.0&q=85"
              alt="Security Features"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="section-testimonials" className={`py-20 px-4 transition-all duration-1000 ${isVisible['section-testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {t.testimonials}
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their PayPal experience.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarFallback className="bg-blue-600 text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {testimonials.slice(3, 5).map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarFallback className="bg-blue-600 text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.about || "About"}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.careers || "Careers"}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Newsroom</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investor Relations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Personal</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Business</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Developer</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.developers || "Developers"}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.privacy || "Privacy"}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.terms || "Terms"}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fees</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">© 2025 PayPal Inc. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <Badge variant="outline" className="text-gray-400 border-gray-600">
                  Available in 200+ markets
                </Badge>
                <Badge variant="outline" className="text-gray-400 border-gray-600">
                  Trusted by millions
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PayPalAbout;