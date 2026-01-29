
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, BarChart2, CheckCircle2, PlayCircle } from 'lucide-react';
import { Button } from './components/Button';
import { Features } from './components/Features';
import { RoiChart } from './components/RoiChart';
import { AdSpendCalculator } from './components/AdSpendCalculator';
import { ValueProposition } from './components/ValueProposition';
import { FAQ } from './components/FAQ';
import { PricingPage } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [view, setView] = useState<'home' | 'pricing'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: 'home' | 'pricing') => {
    setView(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (view !== 'home') {
      setView('home');
      // Delay slightly to let the home page render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-pixe-500/30 selection:text-pixe-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || view === 'pricing' ? 'bg-dark-900/90 backdrop-blur-md border-b border-dark-700 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigate('home')}>
            <div className="w-8 h-8 bg-gradient-to-tr from-pixe-400 to-blue-500 rounded flex items-center justify-center">
              <BarChart2 className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Pixe<span className="text-pixe-400">run</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Como Funciona
            </a>
            <button 
              onClick={() => handleNavigate('pricing')}
              className={`text-sm font-medium transition-colors ${view === 'pricing' ? 'text-pixe-400' : 'text-gray-300 hover:text-white'}`}
            >
              Preços
            </button>
            <Button variant="outline" size="sm" className="border-gray-600">Login</Button>
            <Button size="sm">Agendar Demo</Button>
          </div>

          <button 
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-800 border-b border-dark-700 p-4 flex flex-col space-y-4 animate-fade-in shadow-2xl">
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="text-gray-300 py-2"
            >
              Como Funciona
            </a>
            <button 
              onClick={() => handleNavigate('pricing')}
              className="text-gray-300 py-2 text-left"
            >
              Preços
            </button>
            <div className="flex flex-col space-y-2 pt-4 border-t border-dark-700">
              <Button variant="outline" className="w-full justify-center">Login</Button>
              <Button className="w-full justify-center">Agendar Demo</Button>
            </div>
          </div>
        )}
      </nav>

      {view === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 grid-bg z-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h={500} bg-pixe-500/20 rounded-full blur-[120px] opacity-30 z-0"></div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
              
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-pixe-900/30 border border-pixe-500/30 text-pixe-300 text-xs font-medium mb-6 backdrop-blur-sm relative z-30">
                  <span className="flex w-2 h-2 bg-pixe-400 rounded-full mr-2 animate-pulse"></span>
                  Nova Tecnologia Server-Side 2.0
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-8 relative z-20">
                  Pare de 
                  <span className="relative inline-block mx-2 sm:mx-3">
                    <span className="relative z-10 text-white">Queimar</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 -skew-y-2 transform scale-105 rounded shadow-lg -z-10 opacity-90"></span>
                  </span> 
                  <br className="hidden sm:block" />
                  Dinheiro em Anúncios.
                </h1>

                <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 relative z-20">
                  Recupere até 30% das conversões ignoradas pelo iOS 14. 
                  Alimente o Google e Facebook com dados reais e escale seu ROI com precisão cirúrgica.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full sm:w-auto relative z-20">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto group whitespace-nowrap !px-8 !py-5 text-base sm:text-lg flex items-center justify-center shadow-lg shadow-pixe-500/20 rounded-xl"
                  >
                    Agendar Demonstração Gratuita
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                  </Button>
                  <button className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors px-6 py-5 font-medium w-full sm:w-auto whitespace-nowrap text-base sm:text-lg rounded-xl hover:bg-white/5 border border-transparent hover:border-dark-700">
                    <PlayCircle className="w-5 h-5" />
                    Ver como funciona
                  </button>
                </div>

                {/* Logos Area */}
                <div className="mt-12 pt-8 border-t border-dark-700/50 flex flex-col items-center lg:items-start relative z-20">
                  <span className="text-sm text-gray-500 mb-6 font-medium">Empresas que escalam conosco</span>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                      <div className="text-base font-bold text-white flex items-center gap-2 tracking-tight"><div className="w-3 h-3 bg-white rounded-full"></div>EcomVibe</div>
                      <div className="text-base font-bold text-white flex items-center gap-2 tracking-tight"><div className="w-3 h-3 bg-white rounded-full"></div>DigitalPro</div>
                      <div className="text-base font-bold text-white flex items-center gap-2 tracking-tight"><div className="w-3 h-3 bg-white rounded-full"></div>ScaleUp</div>
                      <div className="text-base font-bold text-white flex items-center gap-2 tracking-tight hidden xl:flex"><div className="w-3 h-3 bg-white rounded-full"></div>NexusAds</div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full relative z-20">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pixe-500 to-blue-600 rounded-2xl blur opacity-30"></div>
                    <div className="relative bg-dark-900 border border-dark-700 rounded-3xl p-1 shadow-2xl">
                      <div className="p-2 bg-dark-800 rounded-2xl overflow-hidden">
                          <RoiChart />
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </section>

          <ValueProposition />
          
          <div id="calculator">
            <AdSpendCalculator />
          </div>

          <HowItWorks />

          <Features />

          <FAQ />
        </>
      ) : (
        <PricingPage />
      )}

      {/* Final CTA */}
      <section className="py-32 bg-dark-900 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pixe-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pixe-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Pronto para ver o seu lucro real?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Pare de voar às cegas. Junte-se aos gestores de tráfego que recuperaram o controle e aumentaram o ROI em até 30%.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <Button size="lg" className="w-full sm:w-auto !px-10 !py-5 text-lg font-bold rounded-xl bg-pixe-400 hover:bg-pixe-300 text-dark-950 shadow-lg shadow-pixe-500/20">
                Agendar Demonstração Gratuita
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto !px-10 !py-5 text-lg font-bold rounded-xl border-dark-700 text-gray-300 hover:text-white hover:bg-white/5">
                Falar com Especialista
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <div className="w-4 h-4 rounded-full border border-pixe-500/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-pixe-500"></div>
              </div>
              <span>Garantia de satisfação ou seu dinheiro de volta.</span>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-dark-700 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-8" onClick={() => handleNavigate('home')} style={{ cursor: 'pointer' }}>
            <div className="w-8 h-8 bg-gradient-to-tr from-pixe-400 to-blue-500 rounded flex items-center justify-center">
              <BarChart2 className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Pixe<span className="text-pixe-400">run</span></span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Pixerun. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
