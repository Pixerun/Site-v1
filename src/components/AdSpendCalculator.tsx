
import React, { useState } from 'react';
import { DollarSign, User, TrendingUp } from 'lucide-react';
import { Button } from './Button';

export const AdSpendCalculator: React.FC = () => {
  const [spend, setSpend] = useState(10000);

  // Based on the reference image: $10,000 spend = $1,870 monthly recovery (18.7%)
  const recoveryFactor = 0.187;
  const monthlyRecovery = spend * recoveryFactor;
  const annualRecovery = monthlyRecovery * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-pixe-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <p className="text-pixe-400 font-semibold tracking-widest text-xs uppercase mb-4">Calculadora</p>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Calcule seu faturamento <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pixe-400 to-blue-500">recuperável</span>
        </h2>
        <p className="text-gray-400 text-lg mb-16">Spoiler alert: é muito mais do que você imagina.</p>

        <div className="relative max-w-2xl mx-auto">
          {/* Floating Icons */}
          <div className="absolute -top-10 -left-12 w-14 h-14 bg-green-500/20 rounded-full border border-green-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)] animate-bounce hidden md:flex">
            <DollarSign className="text-green-400 w-6 h-6" />
          </div>
          <div className="absolute top-10 -right-16 w-16 h-16 bg-blue-600/20 rounded-full border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.2)] animate-pulse hidden md:flex">
            <div className="w-8 h-8 bg-gradient-to-tr from-pixe-400 to-blue-500 rounded flex items-center justify-center">
               <TrendingUp className="text-white w-4 h-4" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-12 w-14 h-14 bg-pixe-500/20 rounded-full border border-pixe-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.2)] hidden md:flex">
            <User className="text-pixe-400 w-6 h-6" />
          </div>

          {/* Calculator Card */}
          <div className="bg-dark-950 border border-dark-700/50 rounded-[2.5rem] p-10 md:p-14 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
            
            <div className="text-left relative z-10">
              <label className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-4 block">Seu Gasto Mensal com Anúncios</label>
              <div className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                {formatCurrency(spend)}
              </div>

              {/* Custom Slider */}
              <div className="relative h-12 flex items-center mb-12">
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={spend}
                  onChange={(e) => setSpend(parseInt(e.target.value))}
                  className="w-full h-2 bg-dark-800 rounded-lg appearance-none cursor-pointer accent-pixe-400"
                  style={{
                    background: `linear-gradient(to right, #14b8a6 0%, #14b8a6 ${(spend / 100000) * 100}%, #171717 ${(spend / 100000) * 100}%, #171717 100%)`
                  }}
                />
              </div>

              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">Receita adicional média usando Pixerun</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-dark-800/40 border border-dark-700/50 p-6 rounded-2xl flex flex-col items-start hover:border-pixe-500/30 transition-colors">
                  <span className="text-[10px] text-gray-500 font-black uppercase mb-2">Anual</span>
                  <span className="text-3xl font-black text-white tracking-tight">{formatCurrency(annualRecovery)}</span>
                </div>
                <div className="bg-dark-800/40 border border-dark-700/50 p-6 rounded-2xl flex flex-col items-start hover:border-pixe-500/30 transition-colors">
                  <span className="text-[10px] text-gray-500 font-black uppercase mb-2">Mensal</span>
                  <span className="text-3xl font-black text-white tracking-tight">{formatCurrency(monthlyRecovery)}</span>
                </div>
              </div>

              <p className="text-gray-500 text-[11px] leading-relaxed mb-10 text-center px-4">
                Empresas que investem <span className="text-gray-300 font-bold">{formatCurrency(spend)}</span> em anúncios recuperam em média <span className="text-pixe-400 font-bold">{formatCurrency(monthlyRecovery)}/mês</span> ao melhorar o ROAS e reduzir o desperdício de dados em 64%.
              </p>

              <Button size="lg" className="w-full rounded-2xl !py-5 text-lg font-black tracking-tight shadow-xl shadow-pixe-500/20">
                Começar a lucrar hoje
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
