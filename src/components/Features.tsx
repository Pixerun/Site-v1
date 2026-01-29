import React from 'react';
import { ScanEye, Fingerprint, BarChart3, Cpu, Lock, Target } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    title: "Print Fingerprinting",
    description: "Nossa tecnologia proprietária identifica usuários mesmo quando trocam de dispositivo, garantindo atribuição cross-device impecável.",
    icon: Fingerprint
  },
  {
    title: "Server-Side Tracking",
    description: "Ignore bloqueadores de anúncios e as restrições do iOS 14+. Enviamos os dados diretamente do servidor, sem perdas.",
    icon: Lock
  },
  {
    title: "IA Training Data",
    description: "Alimente os algoritmos do Facebook e Google com dados de conversão reais, treinando sua IA para encontrar compradores, não curiosos.",
    icon: Cpu
  },
  {
    title: "Visão do Funil Completo",
    description: "Acompanhe a jornada do cliente desde o primeiro clique até o LTV de 12 meses. Saiba exatamente quanto vale cada lead.",
    icon: ScanEye
  },
  {
    title: "LTV Real",
    description: "Entenda o lucro a longo prazo. O Pixerun calcula automaticamente o Lifetime Value por fonte de tráfego.",
    icon: BarChart3
  },
  {
    title: "Atribuição Científica",
    description: "Pare de adivinhar. Use modelos de atribuição baseados em dados para saber qual anúncio realmente gerou a venda.",
    icon: Target
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-dark-900 scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pixe-900/20 via-dark-900 to-dark-900 opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-pixe-400 font-semibold tracking-wide uppercase text-sm mb-3">Tecnologia Superior</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Veja o que as plataformas de anúncios <span className="text-transparent bg-clip-text bg-gradient-to-r from-pixe-400 to-blue-500">escondem de você</span>.
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            O Pixel padrão falha em até 30% das conversões. O Pixerun captura tudo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative p-8 bg-dark-800/50 border border-dark-700 rounded-2xl hover:border-pixe-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-pixe-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pixe-900/50 transition-colors">
                  <feature.icon className="w-6 h-6 text-pixe-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};