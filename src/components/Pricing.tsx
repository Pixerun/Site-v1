
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface PricingTier {
  label: string;
  price: string;
  description: string;
}

const pricingTiers: PricingTier[] = [
  { label: '5k', price: '69', description: 'Ideal para iniciantes validando o funil.' },
  { label: '10k', price: '129', description: 'Perfeito para lojas em crescimento constante.' },
  { label: '20k', price: '230', description: 'Para operações que já escalam com consistência.' },
  { label: '40k', price: '353', description: 'Foco total em otimização de ROAS agressivo.' },
  { label: '83k', price: '583', description: 'Alta performance com suporte prioritário.' },
  { label: '250k', price: '999', description: 'Solução robusta para grandes volumes de dados.' },
  { label: '750k', price: '1.499', description: 'Escala industrial com processamento dedicado.' },
  { label: '1m+', price: 'Sob Consulta', description: 'Plano enterprise com infraestrutura exclusiva.' },
];

export const PricingPage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(1); // Default to 10k

  const currentTier = pricingTiers[selectedIndex];

  return (
    <div className="pt-32 pb-24 bg-dark-900 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-bg z-0 opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-pixe-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dark-800 border border-dark-700 text-pixe-400 text-xs font-bold uppercase tracking-widest mb-6">
            Planos e Preços
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Escala real baseada em dados reais.
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha o plano baseado no faturamento mensal que você deseja rastrear com precisão cirúrgica.
          </p>
        </div>

        {/* Interactive Pricing Container */}
        <div className="bg-dark-950 border border-dark-700/50 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Side: Selection */}
          <div className="flex-1 p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl font-bold text-white mb-8">Faturamento Pixerun</h2>
            <div className="w-20 h-1 bg-pixe-500 mb-12 rounded-full"></div>

            <div className="mb-10">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">
                Faturamento Mensal Rastreado (até)
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {pricingTiers.map((tier, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedIndex(idx)}
                    className={`py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 border-2 ${
                      selectedIndex === idx
                        ? 'bg-transparent border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                        : 'bg-dark-900/50 border-dark-800 text-gray-500 hover:border-dark-700 hover:text-gray-300'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-dark-800">
              <p className="text-gray-500 italic text-sm">
                * Todos os planos incluem rastreamento server-side ilimitado e suporte especializado.
              </p>
            </div>
          </div>

          {/* Right Side: Price Display Card */}
          <div className="w-full lg:w-[480px] p-4 lg:p-8 bg-dark-900/50">
            <div className="h-full relative group">
              {/* Glow Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-pixe-500 to-blue-600 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative h-full bg-dark-950 border border-pixe-500/30 rounded-[2rem] p-8 md:p-10 flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Tráfego VIP Pago</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed mb-8">
                    {currentTier.description} Este plano inclui suporte VIP completo e todas as funcionalidades do Pixerun. Cada conta é personalizada para o seu modelo de negócio.
                  </p>
                  <div className="w-full h-px bg-dark-800 mb-8"></div>
                </div>

                <div className="mt-auto">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Total do Plano:</p>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-5xl md:text-6xl font-black text-pixe-400">
                      {currentTier.price === 'Sob Consulta' ? '' : 'R$ '}
                      {currentTier.price}
                    </span>
                    {currentTier.price !== 'Sob Consulta' && (
                      <div className="flex flex-col">
                        <span className="text-gray-500 font-bold text-lg leading-tight">/mês</span>
                        <span className="text-gray-600 font-medium text-[10px] leading-tight uppercase tracking-tighter">no plano anual</span>
                      </div>
                    )}
                  </div>

                  <Button 
                    variant="primary" 
                    className="w-full !py-5 rounded-2xl text-lg font-black shadow-none hover:scale-[1.02] transition-transform"
                  >
                    Marque uma demo
                  </Button>
                </div>

                <div className="mt-8 space-y-3">
                  {['Setup Assistido', 'Consultoria de Atribuição', 'Suporte 24/7'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-pixe-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Precisa de algo mais específico? 
            <button className="text-pixe-400 font-bold hover:underline flex items-center gap-1">
              Fale com um especialista <ArrowRight className="w-4 h-4" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
