import React from 'react';
import { ArrowUpRight, Filter, Download } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const campaigns = [
    { name: 'FB - Escala Fria - Q3', platform: 'Facebook', spend: 'R$ 5.420', reported: 'R$ 6.100', reportedRoas: '1.12', actual: 'R$ 14.890', actualRoas: '2.75' },
    { name: 'GG - Search Brand', platform: 'Google', spend: 'R$ 1.200', reported: 'R$ 3.500', reportedRoas: '2.91', actual: 'R$ 3.800', actualRoas: '3.16' },
    { name: 'FB - Remarketing Oferta', platform: 'Facebook', spend: 'R$ 2.800', reported: 'R$ 4.200', reportedRoas: '1.50', actual: 'R$ 9.100', actualRoas: '3.25' },
    { name: 'TT - Topo de Funil', platform: 'TikTok', spend: 'R$ 800', reported: 'R$ 0', reportedRoas: '0.00', actual: 'R$ 2.400', actualRoas: '3.00' },
  ];

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pixe-900/10 via-dark-900 to-dark-900 opacity-50 pointer-events-none"></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seus dados, <span className="text-pixe-400">finalmente claros</span>.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Uma interface limpa desenhada para decisores. Veja o ROI real de cada clique em segundos, não em horas de planilhas.
            </p>
         </div>

         <div className="rounded-xl border border-dark-700 bg-dark-800/50 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Mockup Header */}
            <div className="border-b border-dark-700 p-4 flex items-center justify-between bg-dark-900/50">
               <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <span className="hidden sm:inline text-sm text-gray-400 font-mono ml-4">Dashboard Geral &gt; Performance de Campanhas</span>
               </div>
               <div className="flex gap-3">
                  <button className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded transition-colors"><Filter className="w-4 h-4"/></button>
                  <button className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded transition-colors"><Download className="w-4 h-4"/></button>
               </div>
            </div>

            {/* Mockup Body */}
            <div className="p-6 overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                     <tr className="text-xs font-semibold text-gray-500 border-b border-dark-700 uppercase tracking-wider">
                        <th className="pb-4 pl-4">Campanha</th>
                        <th className="pb-4">Plataforma</th>
                        <th className="pb-4 text-right">Gasto (R$)</th>
                        <th className="pb-4 text-right text-gray-600">Reportado (Ads)</th>
                        <th className="pb-4 text-right text-gray-600">ROAS (Ads)</th>
                        <th className="pb-4 text-right text-pixe-400">Faturamento Real</th>
                        <th className="pb-4 text-right text-pixe-400">ROAS Real</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-gray-300">
                     {campaigns.map((campaign, idx) => (
                        <tr key={idx} className="group hover:bg-dark-700/30 transition-colors border-b border-dark-700/50 last:border-0">
                           <td className="py-4 pl-4 font-medium text-white">{campaign.name}</td>
                           <td className="py-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                ${campaign.platform === 'Facebook' ? 'bg-blue-900/30 text-blue-200' : 
                                  campaign.platform === 'Google' ? 'bg-red-900/30 text-red-200' : 
                                  'bg-pink-900/30 text-pink-200'}`}>
                                 {campaign.platform}
                              </span>
                           </td>
                           <td className="py-4 text-right font-mono text-gray-400">{campaign.spend}</td>
                           <td className="py-4 text-right font-mono text-gray-500 decoration-red-500/30 line-through decoration-2">{campaign.reported}</td>
                           <td className="py-4 text-right font-mono text-gray-500">{campaign.reportedRoas}x</td>
                           <td className="py-4 text-right font-mono font-bold text-white relative">
                              {campaign.actual}
                              {idx === 3 && (
                                <div className="absolute -top-3 -right-2 bg-green-500 text-black text-[10px] px-2 py-0.5 rounded-full font-bold shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse">
                                   Recuperado
                                </div>
                              )}
                           </td>
                           <td className="py-4 text-right pr-4">
                              <div className="flex items-center justify-end gap-1 text-green-400 font-bold font-mono">
                                 {campaign.actualRoas}x
                                 <ArrowUpRight className="w-4 h-4" />
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
         
         {/* Caption */}
         <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 rounded-full bg-pixe-500 animate-pulse"></div>
            <span>Dados atualizados em tempo real via Server-Side API</span>
         </div>
       </div>
    </section>
  );
};