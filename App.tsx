
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Icon } from './components/Icon';
import { PLANS, PILLARS, CHART_DATA } from './constants';

const DAILY_STORIES = [
  {
    day: 'Segunda',
    morning: 'Bastidor + Insight: "Por que a coluna trava mais na segunda?"',
    afternoon: 'Box de Perguntas: "O que você sentiu no fim de semana?"',
    night: 'Vídeo curto respondendo a dúvida mais comum do box.',
    focus: 'Consciência'
  },
  {
    day: 'Terça',
    morning: 'Review de caso clínico (Anônimo): Da dor à mobilidade.',
    afternoon: 'Mostrando técnica: "A diferença entre massagear e manipular."',
    night: 'Enquete: "Você sente dor ao acordar ou ao deitar?"',
    focus: 'Autoridade'
  },
  {
    day: 'Quarta',
    morning: 'Teaser do Reels: "A mágica da osteopatia acontece aqui."',
    afternoon: 'Mito ou Verdade: "Hérnia de disco é sentença de cirurgia?"',
    night: 'Repost de feedback ou depoimento de paciente feliz.',
    focus: 'Desejo'
  },
  {
    day: 'Quinta',
    morning: 'Minha rotina: Exercício de mobilidade que eu faço todos os dias.',
    afternoon: 'Dica de Ergonomia: Como ajustar sua cadeira em 30 segundos.',
    night: 'Lembrete: "Sinais que seu corpo dá antes da crise chegar."',
    focus: 'Educação'
  },
  {
    day: 'Sexta',
    morning: 'Clínica pronta! "Agenda de hoje lotada, vamos aliviar dores."',
    afternoon: 'CTA Antecipado: "Vagas para semana que vem. Link na Bio."',
    night: 'Humanização: Momento lazer ou indicação de livro/estudo.',
    focus: 'Conexão'
  }
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'stories'>('feed');
  const [activePlan, setActivePlan] = useState<'essential' | 'premium'>('essential');
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  const togglePlan = () => setActivePlan(prev => prev === 'essential' ? 'premium' : 'essential');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col scroll-smooth text-slate-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-metaline rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
              P
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">Dr. Pedro Lima</h1>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Planejamento Estratégico 2026</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#diagnostico" className="hover:text-indigo-600 transition-colors">Diagnóstico</a>
            <a href="#estrategia" className="hover:text-indigo-600 transition-colors">Estratégia</a>
            <a href="#cronograma" className="hover:text-indigo-600 transition-colors">Cronograma</a>
            <a href="#investimento" className="hover:text-indigo-600 transition-colors">Investimento</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => window.print()} className="p-2 text-slate-400 hover:text-slate-800 transition-colors">
              <Icon name="Printer" size={20} />
            </button>
            <button className="md:hidden p-2 text-slate-400">
              <Icon name="Menu" size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-16 grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  Estratégia Ativa
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                  Transformando competência em <span className="text-metaline italic">autoridade clínica.</span>
                </h2>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                  Um plano sob medida para consolidar sua presença digital em Terapia Manual, utilizando sua naturalidade em vídeo para garantir uma agenda cheia e qualificada.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['Foco em Vídeo', 'Osteopatia', 'Autoridade Clínica'].map(tag => (
                    <div key={tag} className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 border border-slate-200 px-4 py-2 rounded-full uppercase tracking-wider">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                      <Icon name="Target" size={120} />
                   </div>
                   <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6">Metas 6 Meses</h3>
                   <div className="space-y-6 relative z-10">
                      {[
                        "Agenda com 85% de ocupação média",
                        "Referência local em Terapia Manual",
                        "Pipeline de conteúdo automatizado"
                      ].map((meta, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon name="Check" size={12} className="text-white" />
                          </div>
                          <p className="text-slate-300 font-medium">{meta}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnosis */}
        <section id="diagnostico" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                  <Icon name="Zap" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Potenciais Estratégicos</h3>
              </div>
              <div className="grid gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-slate-900">Naturalidade Audiovisual</h4>
                    <span className="text-xs font-black bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Score 9/10</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">Sua facilidade em gravar e improvisar reduz drasticamente o tempo de produção e aumenta a conversão por humanização.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-900 mb-2">Clareza de Nicho</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">O foco em Terapia Manual elimina ruídos. Falamos diretamente com quem sofre de dor crônica ou aguda.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
                  <Icon name="AlertTriangle" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Bloqueio Crítico</h3>
              </div>
              <div className="bg-rose-50 border border-rose-200 p-8 rounded-3xl space-y-4">
                <div className="flex gap-4 items-start">
                   <div className="p-3 bg-white rounded-2xl shadow-sm text-rose-600">
                      <Icon name="FileWarning" size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-rose-900 mb-1">Termo de Uso de Imagem</h4>
                      <p className="text-sm text-rose-700 leading-relaxed">
                        A ausência deste documento é o único risco jurídico para começarmos a gravar depoimentos de pacientes e manobras reais.
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase text-rose-600 border border-rose-100">
                        Ação: Modelo Jurídico Pronto no Bônus
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy */}
        <section id="estrategia" className="bg-slate-900 text-white py-24 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div>
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Mix de Conteúdo Inteligente</h2>
                  <p className="text-slate-400 text-lg leading-relaxed">Uma abordagem equilibrada entre <span className="text-indigo-400 font-bold">performance algorítmica</span> e <span className="text-sky-400 font-bold">retenção de autoridade</span>.</p>
                </div>
                
                <div className="space-y-4">
                  {PILLARS.map(pillar => (
                    <div 
                      key={pillar.id}
                      className={`cursor-pointer bg-slate-800/50 border border-slate-700 p-6 rounded-2xl transition-all ${expandedPillar === pillar.id ? 'ring-2 ring-indigo-500 border-transparent bg-slate-800' : 'hover:border-slate-500'}`}
                      onClick={() => setExpandedPillar(expandedPillar === pillar.id ? null : pillar.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${pillar.id === 'pillarA' ? 'bg-indigo-500' : pillar.id === 'pillarB' ? 'bg-sky-500' : 'bg-violet-500'}`}></div>
                          <h4 className="font-bold text-lg">{pillar.title}</h4>
                        </div>
                        <Icon name={expandedPillar === pillar.id ? 'ChevronUp' : 'ChevronDown'} className="text-slate-500" />
                      </div>
                      <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-widest">{pillar.focus}</p>
                      {expandedPillar === pillar.id && (
                        <div className="mt-6 space-y-4 animate-fade-in">
                          <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {pillar.examples.map((ex, i) => (
                              <div key={i} className="bg-slate-900/50 px-3 py-2 rounded-lg text-xs text-slate-300 border border-slate-700">
                                • {ex}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center items-center">
                <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 border border-slate-800 rounded-full scale-110"></div>
                  <div className="absolute inset-0 border border-slate-800 rounded-full scale-125 opacity-20"></div>
                  
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={CHART_DATA}
                        cx="50%"
                        cy="50%"
                        innerRadius="65%"
                        outerRadius="85%"
                        paddingAngle={8}
                        dataKey="value"
                        stroke="none"
                        startAngle={90}
                        endAngle={450}
                      >
                        {CHART_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', fontSize: '12px', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                        cursor={{ fill: 'transparent' }}
                      />
                      <Legend 
                        verticalAlign="bottom" 
                        align="center" 
                        iconType="circle"
                        wrapperStyle={{ paddingTop: '32px', fontSize: '12px', fontWeight: '600' }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                    <span className="text-5xl font-black text-white leading-none">100%</span>
                    <span className="text-[10px] text-indigo-400 uppercase tracking-[0.2em] font-black mt-2">Valor Estratégico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar */}
        <section id="cronograma" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 scroll-mt-20">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Sua Rotina Digital</h2>
            <p className="text-slate-600 text-lg">Alterne entre a visão do Feed para construção de marca e Stories para conexão.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1">
              <button 
                onClick={() => setActiveTab('feed')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'feed' ? 'bg-white shadow-lg text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <Icon name="LayoutGrid" size={18} /> Feed (3x Semana)
              </button>
              <button 
                onClick={() => setActiveTab('stories')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'stories' ? 'bg-white shadow-lg text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <Icon name="History" size={18} /> Stories Diários
              </button>
            </div>
          </div>

          {activeTab === 'feed' ? (
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 border-l-8 border-l-sky-500 shadow-sm hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-sky-50 text-sky-600 rounded-2xl">
                    <Icon name="Layout" />
                  </div>
                  <span className="bg-sky-100 text-sky-800 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Carrossel</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Segunda-feira</h4>
                <p className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Educação e Consciência</p>
                <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 italic border border-slate-100">
                  "Sua dor nas costas pode vir do pé? Entenda a biomecânica."
                </div>
                <p className="text-[10px] text-slate-400 mt-6 font-bold uppercase tracking-widest">Objetivo: Utilidade Pública</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 border-l-8 border-l-indigo-500 shadow-sm hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                    <Icon name="PlayCircle" />
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Reels</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Quarta-feira</h4>
                <p className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Técnico e Visual</p>
                <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 italic border border-slate-100">
                   Manipulação de alta velocidade em slow motion com áudio ASMR.
                </div>
                <p className="text-[10px] text-slate-400 mt-6 font-bold uppercase tracking-widest">Objetivo: Prova de Capacidade</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 border-l-8 border-l-violet-500 shadow-sm hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-violet-50 text-violet-600 rounded-2xl">
                    <Icon name="Video" />
                  </div>
                  <span className="bg-violet-100 text-violet-800 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Vlog</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Sexta-feira</h4>
                <p className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Quebra de Objeção</p>
                <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 italic border border-slate-100">
                  "Osteopatia dói? Desmistificando o medo do tratamento."
                </div>
                <p className="text-[10px] text-slate-400 mt-6 font-bold uppercase tracking-widest">Objetivo: Venda Direta</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 animate-fade-in">
              {DAILY_STORIES.map((item) => (
                <div key={item.day} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col">
                   <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
                     <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">{item.day}</h4>
                     <span className="text-[8px] font-black bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded uppercase">{item.focus}</span>
                   </div>
                   <div className="space-y-4 flex-grow">
                      <div className="space-y-1">
                        <span className="block text-[9px] font-black text-indigo-500 uppercase tracking-tighter">Manhã</span>
                        <p className="text-[11px] text-slate-600 leading-snug">{item.morning}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="block text-[9px] font-black text-indigo-500 uppercase tracking-tighter">Tarde</span>
                        <p className="text-[11px] text-slate-600 leading-snug">{item.afternoon}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="block text-[9px] font-black text-indigo-500 uppercase tracking-tighter">Noite</span>
                        <p className="text-[11px] text-slate-600 leading-snug">{item.night}</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Investment */}
        <section id="investimento" className="bg-white border-t border-slate-200 py-24 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Crescimento com Previsibilidade</h2>
              <p className="text-slate-600 text-lg">Escolha o plano que melhor se adapta à sua estrutura atual.</p>
            </div>

            <div className="flex justify-center mb-12">
              <div 
                onClick={togglePlan}
                className="relative w-64 h-14 bg-slate-100 rounded-full p-1.5 flex items-center cursor-pointer border border-slate-200 select-none"
              >
                <div 
                  className={`absolute h-[44px] w-[124px] bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out ${activePlan === 'premium' ? 'translate-x-[124px]' : 'translate-x-0'}`}
                ></div>
                <div className={`flex-1 text-center text-sm font-bold z-10 transition-colors duration-300 ${activePlan === 'essential' ? 'text-indigo-600' : 'text-slate-500'}`}>Essencial</div>
                <div className={`flex-1 text-center text-sm font-bold z-10 transition-colors duration-300 ${activePlan === 'premium' ? 'text-indigo-600' : 'text-slate-500'}`}>Premium</div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden relative transition-all duration-500">
               <div className={`absolute top-0 left-0 w-full h-3 transition-colors duration-500 ${activePlan === 'premium' ? 'bg-indigo-600' : 'bg-slate-300'}`}></div>
               <div className="p-10 md:p-16">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    <div className="space-y-2">
                       <h3 className="text-3xl font-black text-slate-900 leading-none">{PLANS[activePlan].title}</h3>
                       <p className="text-slate-500 font-medium">{PLANS[activePlan].subtitle}</p>
                    </div>
                    <div className="text-left md:text-right">
                       <span className="block text-4xl font-black text-slate-900">{PLANS[activePlan].price}</span>
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Investimento Mensal</span>
                    </div>
                  </div>

                  <hr className="border-slate-100 mb-12" />

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    {PLANS[activePlan].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 group animate-fade-in">
                        <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <Icon name={feature.icon} size={18} />
                        </div>
                        <span className="text-slate-700 font-bold text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 bg-slate-50 -mx-10 md:-mx-16 -mb-16 p-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600">
                          <Icon name="Gift" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Incluso como Cortesia</p>
                          <p className="font-bold text-slate-900">Modelo de Termo de Uso de Imagem (Jurídico)</p>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-center text-slate-500 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-metaline">Metaline Ads</h2>
          <p className="text-sm">Desenvolvido com excelência para <span className="text-white font-bold">Dr. Pedro Lima</span> &copy; 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
