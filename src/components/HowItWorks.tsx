
import React from 'react';
import { Facebook, Chrome, Music2, ArrowRight, Eye } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const adPlatforms = [
    { name: 'FB', icon: Facebook, report: 'Facebook relata apenas 15 vendas' },
    { name: 'Google', icon: Chrome, report: 'Google relata apenas 22 chamadas' },
    { name: 'Tik Tok', icon: Music2, report: 'Tik Tok relata apenas 19 leads' },
  ];

  const accuracyData = [
    { sales: '20 vendas', tracked: '+30% rastreado' },
    { sales: '32 vendas', tracked: '+29% rastreado' },
    { sales: '26 vendas', tracked: '+33% rastreado' },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-dark-900 relative overflow-hidden scroll-mt-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pixe-500/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Como Funciona</h2>
        </div>

        {/* Central Eye Icon Visual */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative">
             <div className="absolute -inset-4 bg-pixe-500/20 blur-xl rounded-full animate-pulse"></div>
             <div className="relative w-16 h-16 bg-dark-800 rounded-full border border-dark-700 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-pixe-600/40 to-blue-600/40"></div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                   <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
             </div>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-pixe-500/50 to-transparent mt-4"></div>
          <Eye className="w-6 h-6 text-gray-600 -mt-2" />
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-2">
          
          {/* Card 1: Your Ads */}
          <div className="flex-1 group relative">
            {/* Tooltip Balloon */}
            <div className="absolute -top-32 left-0 right-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none">
              <div className="bg-dark-800 border border-dark-700 rounded-2xl p-5 shadow-2xl relative">
                <p className="text-white font-bold text-lg mb-1 leading-tight">Plataformas perdem MUITO.</p>
                <p className="text-yellow-400 font-bold text-sm">Isso mata a escala e desperdiça seu investimento.</p>
                <div className="absolute -bottom-2 left-10 w-4 h-4 bg-dark-800 border-r border-b border-dark-700 rotate-45"></div>
              </div>
            </div>

            <div className="h-full bg-dark-800/40 border border-dark-700 rounded-2xl p-6 flex flex-col justify-between group-hover:border-pixe-500/30 transition-colors">
              <div>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-8">Seus Anúncios</p>
                <div className="space-y-10">
                  {adPlatforms.map((platform, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 rounded bg-dark-700 flex items-center justify-center">
                          <platform.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-lg font-bold text-white tracking-tight">{platform.name}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{platform.report}</p>
                      <div className="h-px w-full bg-dark-700 flex items-center justify-end">
                         <ArrowRight className="w-3 h-3 text-dark-600 -mr-1.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Laser Accurate */}
          <div className="flex-1 group relative">
            {/* Tooltip Balloon */}
            <div className="absolute -top-32 left-0 right-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none">
              <div className="bg-dark-800 border border-dark-700 rounded-2xl p-5 shadow-2xl relative">
                <p className="text-white font-bold text-lg mb-1 leading-tight">Pixerun vê absolutamente TUDO.</p>
                <p className="text-pixe-400 font-bold text-sm">Dados escaláveis para um ROI massivo.</p>
                <div className="absolute -bottom-2 left-10 w-4 h-4 bg-dark-800 border-r border-b border-dark-700 rotate-45"></div>
              </div>
            </div>

            <div className="h-full bg-dark-800/40 border border-dark-700 rounded-2xl p-6 flex flex-col justify-between group-hover:border-pixe-500/30 transition-colors">
              <div>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-8">Precisão Cirúrgica</p>
                <div className="space-y-10">
                  {accuracyData.map((data, idx) => (
                    <div key={idx} className="relative">
                      <p className="text-2xl font-bold text-white mb-2">{data.sales}</p>
                      <p className="text-xs text-pixe-400 font-bold mb-4">{data.tracked}</p>
                      <div className="h-px w-full bg-pixe-500/30 flex items-center justify-end">
                         <ArrowRight className="w-3 h-3 text-pixe-500/50 -mr-1.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Passed to AI */}
          <div className="flex-1 group relative">
            {/* Tooltip Balloon */}
            <div className="absolute -top-32 left-0 right-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none">
              <div className="bg-dark-800 border border-dark-700 rounded-2xl p-5 shadow-2xl relative">
                <p className="text-white font-bold text-lg mb-1 leading-tight">Dados melhores = IA melhor.</p>
                <p className="text-blue-400 font-bold text-sm">As plataformas encontram compradores, não cliques.</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-dark-800 border-r border-b border-dark-700 rotate-45"></div>
              </div>
            </div>

            <div className="h-full bg-dark-800/40 border border-dark-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center group-hover:border-pixe-500/30 transition-colors">
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-auto">Enviado para IA</p>
              <div className="my-auto">
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 leading-tight">
                  Segmentação de IA <br /> Aprimorada
                </h3>
              </div>
              <div className="mt-auto"></div>
            </div>
          </div>

          {/* Separator = */}
          <div className="hidden lg:flex items-center px-2">
            <span className="text-3xl font-black text-dark-700">=</span>
          </div>

          {/* Card 4: Result */}
          <div className="flex-1 group relative">
            {/* Tooltip Balloon */}
            <div className="absolute -top-32 left-0 right-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none">
              <div className="bg-dark-800 border border-dark-700 rounded-2xl p-5 shadow-2xl relative">
                <p className="text-white font-bold text-lg mb-1 leading-tight">Você ganha mais clientes pagando menos nos anúncios.</p>
                <p className="text-yellow-400 font-bold text-sm">Mais escala. Menos desperdício. Melhor segmentação.</p>
                <div className="absolute -bottom-2 right-10 w-4 h-4 bg-dark-800 border-r border-b border-dark-700 rotate-45"></div>
              </div>
            </div>

            <div className="h-full bg-dark-800/40 border border-dark-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center group-hover:border-pixe-500/30 transition-colors">
              <div className="my-auto">
                <h3 className="text-3xl font-black text-white leading-tight">
                  Aumento de <br />
                  <span className="text-4xl">20% no</span> <br />
                  ROI de Anúncios
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
