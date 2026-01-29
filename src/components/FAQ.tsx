
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex justify-between items-center group ${
          isOpen 
            ? 'bg-dark-800 border-pixe-500/50 shadow-[0_0_20px_rgba(20,184,166,0.1)]' 
            : 'bg-dark-950 border-dark-700 hover:border-dark-600 hover:bg-dark-800/50'
        }`}
      >
        <span className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-pixe-400 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 shrink-0 group-hover:text-gray-300" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 text-gray-400 leading-relaxed bg-dark-900/50 rounded-2xl border border-dark-800/50 mx-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como vocês são diferentes de apenas adicionar os scripts nativos das plataformas?",
      answer: "Scripts nativos e até a API de Conversão padrão rastreiam apenas cerca de 40% dos dados devido a cookies bloqueados e restrições de navegadores. O Pixerun utiliza rastreamento cookieless e first-party, sendo resiliente ao iOS 14+ e adblockers, garantindo quase 100% de precisão na jornada do cliente."
    },
    {
      question: "Qual a diferença entre Pixerun e a API de Conversão (CAPI) do Meta?",
      answer: "O CAPI é apenas um canal de comunicação. Ele só envia o que sua loja consegue capturar, que geralmente é incompleto. O Pixerun captura muito mais pontos de dados, costura as sessões no servidor e entrega uma imagem completa, resultando em ROAS real e estável, não os números inflados ou aleatórios do CAPI padrão."
    },
    {
      question: "Isso funciona se o cliente usar bloqueadores de anúncios ou iOS 14+?",
      answer: "Sim. É exatamente por isso que o Pixerun existe. Como processamos tudo no lado do servidor (Server-Side) e usamos domínios próprios, os bloqueadores e as restrições de privacidade do iOS não conseguem impedir a captura dos dados de conversão."
    },
    {
      question: "Por que não usar apenas um rastreamento server-side básico?",
      answer: "Um rastreamento server-side básico envia apenas os dados brutos que sua plataforma já coleta. O Pixerun enriquece e completa esses dados usando nossa tecnologia de Fingerprinting, permitindo que os algoritmos de anúncio entendam o perfil real do comprador, o que melhora a performance das campanhas drasticamente."
    },
    {
      question: "Vocês oferecem garantia de satisfação?",
      answer: "Sim! Estamos tão confiantes na nossa tecnologia que, se você não notar uma melhora na precisão dos seus dados ou na performance das suas campanhas em comparação com o rastreamento padrão, nós devolvemos o seu investimento. Sem letras miúdas."
    },
    {
      question: "O Pixerun é compatível com a LGPD?",
      answer: "Sim, operamos em total conformidade com a LGPD e GDPR. O Pixerun foi desenhado para respeitar a privacidade do usuário enquanto garante que as empresas recebam os dados necessários para otimizar seus investimentos de forma ética e segura."
    },
    {
      question: "Preciso de experiência técnica ou de um desenvolvedor?",
      answer: "Não! Oferecemos uma integração perfeita com Shopify, WooCommerce, diversos plugins de checkout e em breve outras plataformas."
    },
    {
      question: "Por que vocês são melhores que outras soluções de rastreamento?",
      answer: "Outras soluções costumam usar modelagem computacional para estimar conversões. Nós usamos apenas dados reais e números concretos, rastreando com precisão sem qualquer modelagem. Garantimos que esses dados precisos sejam enviados de volta para os gerenciadores de anúncios conectados à sua conta, sem a necessidade de dashboards adicionais. Tudo isso nos torna a solução mais confiável disponível."
    },
    {
      question: "Vocês usam modelagem computacional para estimar conversões?",
      answer: "Não. Garantimos a maior precisão de rastreamento coletando pontos de dados extensos, enriquecendo-os com nosso software proprietário e integrando diretamente com os gerenciadores de anúncios para resultados precisos e confiáveis."
    },
    {
      question: "Como vocês garantem a maior precisão de rastreamento do mercado?",
      answer: "Nós garantimos a maior precisão de rastreamento ao coletar pontos de dados extensos, enriquecendo-os com nosso software proprietário e integrando diretamente com gerenciadores de anúncios para resultados precisos e confiáveis."
    },
    {
      question: "Isso pode bloquear meu gerenciador de anúncios?",
      answer: "Não. Garantido. Nós apenas enviamos eventos de volta para o seu pixel nativo na plataforma escolhida no formato exato exigido pela API. Somos invisíveis para as plataformas de anúncios. Quer um backup? Você pode adicionar múltiplos pixels ao Pixerun para ter os mesmos dados em várias contas."
    },
    {
      question: "Quais plataformas o Pixerun suporta?",
      answer: "Shopify, WooCommerce, Funnelish, Checkify, CheckoutChamp, BetterCart, UnifyCheckout, Sticky.io Checkout e integrações personalizadas de terceiros. Em termos de canais de anúncios: Meta, TikTok, X, Pinterest, Snapchat e Google Ads. Mais estão chegando em breve! Sinta-se à vontade para nos enviar uma mensagem para verificar se uma integração específica está disponível."
    },
    {
      question: "Vocês oferecem suporte 24/7?",
      answer: "Sim! Estamos disponíveis para ajudar a qualquer hora, qualquer dia. Sinta-se à vontade para nos enviar uma mensagem no chat da plataforma ou um e-mail para suporte@pixerun.com.br."
    }
  ];

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-pixe-400 font-semibold tracking-widest text-xs uppercase mb-4">FAQ</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Perguntas? Temos respostas.
          </h2>
          <p className="text-gray-400 text-lg">
            Tem mais dúvidas? Entre em contato com nosso time de suporte em{' '}
            <a href="mailto:suporte@pixerun.com.br" className="text-pixe-400 hover:underline">
              suporte@pixerun.com.br
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
