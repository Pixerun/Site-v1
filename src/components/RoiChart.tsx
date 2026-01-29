
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Target, CreditCard } from 'lucide-react';
import { ChartData } from '../types';

const data: ChartData[] = [
  { name: 'Campanha A', Facebook: 4000, Pixerun: 5800 },
  { name: 'Campanha B', Facebook: 3000, Pixerun: 4200 },
  { name: 'Campanha C', Facebook: 2000, Pixerun: 3100 },
  { name: 'Campanha D', Facebook: 2780, Pixerun: 3908 },
  { name: 'Campanha E', Facebook: 1890, Pixerun: 2800 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-900 border border-dark-700 p-4 rounded-lg shadow-2xl backdrop-blur-md">
        <p className="font-bold text-white mb-2">{label}</p>
        <div className="space-y-1">
          <p className="text-gray-400 text-xs flex justify-between gap-4">
            Ads Manager: <span className="text-gray-300 font-mono">R$ {payload[0].value}</span>
          </p>
          <p className="text-pixe-400 text-xs font-bold flex justify-between gap-4">
            Pixerun: <span className="font-mono">R$ {payload[1].value}</span>
          </p>
        </div>
        <div className="mt-2 pt-2 border-t border-dark-700">
          <p className="text-[10px] text-green-400 font-bold uppercase tracking-wider">
            + {Math.round(((payload[1].value - payload[0].value) / payload[0].value) * 100)}% Atribuição Recuperada
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export const RoiChart: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Browser Window UI */}
      <div className="bg-dark-950 rounded-3xl border border-dark-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Title Bar */}
        <div className="bg-dark-900/80 px-6 py-4 border-b border-dark-700/50 flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="bg-dark-800 rounded-md px-4 py-1 text-[11px] text-gray-500 font-mono flex-1 max-w-md mx-auto text-center border border-dark-700/30">
            pixerun.app/dashboard
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Chart Header */}
          <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="text-2xl font-bold text-white tracking-tight">Comparativo de Atribuição</h4>
              <p className="text-sm text-gray-400">Receita reportada vs. Receita real rastreada</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#4b5563] rounded-sm"></div>
                <span className="text-xs text-gray-400 font-medium">Ads Manager</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pixe-500 rounded-sm shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                <span className="text-xs text-pixe-400 font-bold">Pixerun</span>
              </div>
            </div>
          </div>

          {/* Main Chart */}
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                barGap={12}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#404040" 
                  tick={{fill: '#737373', fontSize: 11}} 
                  axisLine={false} 
                  tickLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="#404040" 
                  tick={{fill: '#737373', fontSize: 11}} 
                  axisLine={false} 
                  tickLine={false} 
                  tickFormatter={(value) => `R$${value/1000}k`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.03)'}} />
                <Bar dataKey="Facebook" fill="#4b5563" radius={[4, 4, 0, 0]} barSize={24} />
                <Bar dataKey="Pixerun" fill="#14b8a6" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {/* Card 1 */}
            <div className="bg-dark-900/50 border border-dark-700/50 p-6 rounded-2xl hover:border-pixe-500/30 transition-colors">
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2 block">Vendas Rastreadas</span>
              <div className="text-3xl font-bold text-white mb-2">1,248</div>
              <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
                <TrendingUp className="w-3 h-3" />
                +24% vs Ads Mgr
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-dark-900/50 border border-dark-700/50 p-6 rounded-2xl hover:border-pixe-500/30 transition-colors">
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2 block">ROAS Real</span>
              <div className="text-3xl font-bold text-white mb-2">4.8x</div>
              <div className="flex items-center gap-2 text-pixe-400 text-xs font-bold">
                <Target className="w-3 h-3" />
                Otimizado
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-dark-900/50 border border-dark-700/50 p-6 rounded-2xl hover:border-pixe-500/30 transition-colors">
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2 block">Custo/Lead</span>
              <div className="text-3xl font-bold text-white mb-2">R$ 4,20</div>
              <div className="flex items-center gap-2 text-pixe-400 text-xs font-bold">
                <CreditCard className="w-3 h-3" />
                Atribuição Correta
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
