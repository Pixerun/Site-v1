
import React from 'react';
import { MousePointer2, ShieldAlert, BarChart3, Share2, Infinity, Facebook, Instagram, Twitter, MessageSquare } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pixe-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-pixe-400 font-semibold tracking-widest text-xs uppercase mb-4">Recursos</p>
          <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Pare de perder dinheiro para cookies bloqueados, <br className="hidden lg:block" /> trackers e modelagem de IA ruim
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Card 1: Know which ads generate revenue */}
          <div className="md:col-span-2 bg-dark-950 border border-dark-700/50 rounded-3xl p-8 flex flex-col h-full hover:border-pixe-500/30 transition-all group">
            <div className="relative h-48 mb-8 bg-dark-900 rounded-2xl overflow-hidden border border-dark-800 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-pixe-500/10 to-transparent opacity-50"></div>
              {/* Mockup Ad Card */}
              <div className="relative w-48 bg-dark-800 rounded-xl border border-dark-700 p-3 shadow-2xl transform group-hover:scale-105 transition-transform">
                <div className="h-24 bg-gradient-to-tr from-pixe-900 to-blue-900 rounded-lg mb-3 flex items-center justify-center">
                   <div className="w-10 h-10 bg-white/10 rounded-full blur-sm"></div>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-gray-500 font-bold uppercase">Conjunto 17</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-500 text-[8px] font-bold tracking-tighter uppercase">Ao Vivo</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-gray-400">ROAS: <span className="text-white font-bold">3.7x</span></span>
                  <span className="text-gray-400">CPA: <span className="text-white font-bold">R$12</span></span>
                </div>
                <div className="mt-2 pt-2 border-t border-dark-700 flex justify-between items-center">
                  <span className="text-[9px] text-gray-500 font-medium">Receita</span>
                  <span className="text-[10px] text-pixe-400 font-black">R$ 782,03</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Saiba quais anúncios geram receita</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Identifique quais criativos escalar e quais desligar. Rastreie todas as vendas de volta para o anúncio exato em cada plataforma.
            </p>
          </div>

          {/* Card 2: 40% to 100% accuracy */}
          <div className="md:col-span-2 bg-dark-950 border border-dark-700/50 rounded-3xl p-8 flex flex-col h-full hover:border-pixe-500/30 transition-all group">
            <div className="relative h-48 mb-8 bg-dark-900 rounded-2xl overflow-hidden border border-dark-800 p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 rounded bg-green-500/20 flex items-center justify-center"><div className="w-2 h-2 rounded bg-green-500"></div></div>
                <div className="w-4 h-4 rounded bg-blue-500/20 flex items-center justify-center"><div className="w-2 h-2 rounded bg-blue-500"></div></div>
              </div>
              <div className="space-y-2">
                {[
                  { d: 'Dia 1', p: '47%', c: 'text-red-500' },
                  { d: 'Dia 2', p: '53%', c: 'text-red-400' },
                  { d: 'Dia 3', p: '100%', c: 'text-pixe-400 font-bold', highlight: true },
                  { d: 'Dia 4', p: '100%', c: 'text-pixe-400 font-bold' },
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center p-2 rounded-lg text-xs ${item.highlight ? 'bg-pixe-500/10 border border-pixe-500/20' : 'bg-dark-800/30'}`}>
                    <span className="text-gray-500">{item.d}</span>
                    <span className={item.c}>{item.p}</span>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pixe-500 to-transparent opacity-30"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">De 40% para 100% de precisão</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              O rastreamento via First-party e o enriquecimento de dados 360° eliminam o "ponto cego" do iOS, resolvendo seus desafios de tracking.
            </p>
          </div>

          {/* Card 3: No additional dashboards */}
          <div className="md:col-span-2 bg-dark-950 border border-dark-700/50 rounded-3xl p-8 flex flex-col h-full hover:border-pixe-500/30 transition-all group">
            <div className="relative h-48 mb-8 bg-dark-900 rounded-2xl overflow-hidden border border-dark-800 p-4 flex flex-col">
              <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-dark-800/80 rounded-xl p-3 border border-dark-700">
                  <div className="text-[10px] text-gray-500 uppercase mb-1">Receita</div>
                  <div className="text-sm font-black text-white">R$ 4.704,34</div>
                </div>
                <div className="flex-1 bg-dark-800/80 rounded-xl p-3 border border-dark-700">
                  <div className="text-[10px] text-gray-500 uppercase mb-1">Taxa Conv.</div>
                  <div className="text-sm font-black text-white">16.5%</div>
                </div>
              </div>
              <div className="flex-1 bg-dark-800/40 rounded-xl p-2 flex items-end gap-1 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-[10px] text-gray-600">Performance Real</div>
                {[30, 45, 35, 60, 55, 80, 70, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-pixe-500/20 border-t border-pixe-500/50 rounded-t-sm transition-all group-hover:bg-pixe-500/40" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sem novos dashboards necessários</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enviamos os dados precisos diretamente para o seu gerenciador de anúncios. Assim, o algoritmo aprende a otimizar para o que importa.
            </p>
          </div>

          {/* Card 4: No coding or UTMs */}
          <div className="md:col-span-3 bg-dark-950 border border-dark-700/50 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center hover:border-pixe-500/30 transition-all group">
            <div className="w-full md:w-1/2 relative">
               <div className="bg-dark-900 rounded-2xl border border-dark-800 p-6 flex flex-col items-center justify-center overflow-hidden">
                  <div className="flex items-center gap-3 bg-dark-800 px-4 py-2 rounded-lg border border-dark-700 w-full mb-4">
                    <MousePointer2 className="w-4 h-4 text-gray-500" />
                    <div className="text-[10px] text-gray-400 truncate font-mono">meusite.com/checkout<span className="text-red-500/50">&utm_medium=facebook...</span></div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform">
                    <ShieldAlert className="w-8 h-8 text-red-500" />
                  </div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <h3 className="text-xl font-bold text-white mb-3">Sem código ou UTMs complexas</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Rastreie a atividade do cliente sem precisar configurar centenas de parâmetros UTM ou lidar com scripts complicados. Eficiência máxima.
               </p>
            </div>
          </div>

          {/* Card 5: Correct data in all ad platforms */}
          <div className="md:col-span-3 bg-dark-950 border border-dark-700/50 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center hover:border-pixe-500/30 transition-all group">
            <div className="w-full md:w-1/2 relative h-48 flex items-center justify-center">
              {/* Central Node Visual */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-tr from-pixe-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.4)] group-hover:rotate-12 transition-transform">
                <Share2 className="text-white w-8 h-8" />
              </div>
              {/* Branching Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 200 200">
                <line x1="100" y1="100" x2="40" y2="60" stroke="#14b8a6" strokeWidth="1" />
                <line x1="100" y1="100" x2="160" y2="60" stroke="#14b8a6" strokeWidth="1" />
                <line x1="100" y1="100" x2="160" y2="140" stroke="#14b8a6" strokeWidth="1" />
                <line x1="100" y1="100" x2="40" y2="140" stroke="#14b8a6" strokeWidth="1" />
              </svg>
              {/* Platform Icons */}
              <div className="absolute top-8 left-8 w-10 h-10 bg-dark-800 rounded-xl border border-dark-700 flex items-center justify-center group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform">
                <Facebook className="w-5 h-5 text-blue-500" />
              </div>
              <div className="absolute top-8 right-8 w-10 h-10 bg-dark-800 rounded-xl border border-dark-700 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <Instagram className="w-5 h-5 text-pink-500" />
              </div>
              <div className="absolute bottom-8 right-8 w-10 h-10 bg-dark-800 rounded-xl border border-dark-700 flex items-center justify-center group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                <MessageSquare className="w-5 h-5 text-green-500" />
              </div>
              <div className="absolute bottom-8 left-8 w-10 h-10 bg-dark-800 rounded-xl border border-dark-700 flex items-center justify-center group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform">
                <Twitter className="w-5 h-5 text-sky-400" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
               <h3 className="text-xl font-bold text-white mb-3">Dados corretos em todas as plataformas</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Envie os dados de conversão para as principais redes com um clique. De Meta e Google Ads a TikTok e Pinterest.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
