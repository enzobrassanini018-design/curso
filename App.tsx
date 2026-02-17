
import React, { useState, useEffect } from 'react';
import { ALIENS, TESTIMONIALS, MODULES, CERTIFICATE_URL, LOGO_URL } from './constants';
import OmnitrixDial from './components/OmnitrixDial';
import CourseCard from './components/CourseCard';

const App: React.FC = () => {
  const [isTransforming, setIsTransforming] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [enrollProgress, setEnrollProgress] = useState(0);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnroll = () => {
    setShowEnrollModal(true);
    setEnrollProgress(0);
    const interval = setInterval(() => {
      setEnrollProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const handleTransformation = () => {
    setIsTransforming(true);
    setTimeout(() => setIsTransforming(false), 2000);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CERTIFICATE_URL;
    link.download = 'certificado_encanador.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Iniciando transferência segura de dados do certificado...');
  };

  return (
    <div className={`min-h-screen selection:bg-green-500 selection:text-black bg-circuits transition-colors duration-300 ${isTransforming ? 'bg-green-500/30' : ''}`}>
      {/* Cartoon Network Logo - Fixed Bottom Right */}
      <div className="fixed bottom-6 right-6 z-[60] group pointer-events-none md:pointer-events-auto">
        <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] group-hover:border-green-500/50 transition-all duration-500">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg" 
            alt="Cartoon Network" 
            className="w-16 md:w-20 h-auto filter brightness-110"
          />
        </div>
      </div>

      {/* Transformation Overlay */}
      {isTransforming && (
        <div className="fixed inset-0 z-[100] bg-green-500 animate-pulse flex items-center justify-center">
          <h2 className="text-black font-orbitron font-black text-6xl md:text-9xl animate-ping uppercase italic">Transformando!</h2>
        </div>
      )}

      {/* Enrollment Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl">
          <div className="max-w-md w-full bg-neutral-900 border-2 border-green-500 p-8 rounded-3xl shadow-[0_0_50px_rgba(34,197,94,0.4)] relative">
            <button onClick={() => setShowEnrollModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 className="text-2xl font-orbitron font-bold text-green-500 mb-4">RECRUTAMENTO INICIADO</h3>
            <p className="text-gray-400 mb-6">Sincronizando seu DNA com a Base de Dados dos Encanadores...</p>
            <div className="w-full bg-neutral-800 h-4 rounded-full overflow-hidden border border-green-500/20 mb-6">
              <div className="h-full bg-green-500 transition-all duration-300" style={{ width: `${enrollProgress}%` }}></div>
            </div>
            {enrollProgress < 100 ? (
              <p className="text-center font-orbitron text-xs animate-pulse">ENVIANDO DADOS PARA O SETOR 2814...</p>
            ) : (
              <div className="text-center">
                <p className="text-green-500 font-bold mb-6">BEM-VINDO AO CURSO, RECRUTA!</p>
                <button 
                  onClick={() => setShowEnrollModal(false)}
                  className="w-full bg-green-600 text-black font-black py-3 rounded-xl font-orbitron hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                  ACESSAR ÁREA DE MEMBROS
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* HUD Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="bg-pattern absolute inset-0 opacity-20"></div>
        <div className="scan-line"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
              <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-orbitron font-black text-2xl tracking-tighter uppercase">
              O <span className="text-green-500">CURSO</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 font-orbitron text-xs font-bold tracking-widest uppercase text-gray-400">
            <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')} className="hover:text-green-500 transition-colors">Início</a>
            <a href="#curso" onClick={(e) => handleScroll(e, 'curso')} className="hover:text-green-500 transition-colors">Grade</a>
            <a href="#depoimentos" onClick={(e) => handleScroll(e, 'depoimentos')} className="hover:text-green-500 transition-colors">Relatórios</a>
            <a href="#certificado" onClick={(e) => handleScroll(e, 'certificado')} className="hover:text-green-500 transition-colors">Certificado</a>
          </div>
          <button 
            onClick={handleEnroll}
            className="bg-green-600 hover:bg-green-500 text-black font-black px-6 py-2 rounded-full font-orbitron text-sm transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
          >
            MATRICULE-SE
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 bg-green-500/10 border border-green-500 text-green-500 rounded-full text-xs font-bold font-orbitron mb-6 animate-pulse">
              PROTOCOLO DE ENCANADOR ATIVADO
            </span>
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 leading-tight">
              DOMINE O <br />
              <span className="text-neon uppercase">CURSO</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              Deixe de ser apenas um portador e torne-se um mestre. Aprenda com os melhores Encanadores da galáxia como usar cada transformação para o bem maior.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleEnroll}
                className="px-8 py-4 bg-green-600 text-black font-black rounded-xl font-orbitron hover:bg-green-500 transition-all shadow-[0_0_25px_rgba(34,197,94,0.4)]"
              >
                COMEÇAR AGORA
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('curso')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border border-white/20 hover:border-green-500 hover:text-green-500 font-bold rounded-xl font-orbitron transition-all"
              >
                VER CRONOGRAMA
              </button>
            </div>
          </div>

          <div className="relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-500/20 blur-[100px] rounded-full"></div>
             <OmnitrixDial onSelect={handleTransformation} />
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section id="curso" className="py-24 px-6 bg-black/40 backdrop-blur-sm border-y border-green-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold mb-4 uppercase tracking-widest">Currículo <span className="text-neon">Galáctico</span></h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Nossa grade curricular técnica inspirada nos arquivos de Azmuth. Clique em acessar para iniciar seu treinamento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod) => (
              <CourseCard key={mod.id} module={mod} onAccess={handleEnroll} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Full sized images in list) */}
      <section id="depoimentos" className="py-24 px-6 relative bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-orbitron font-black mb-6 uppercase tracking-tighter">Relatórios de <span className="text-neon">Desempenho</span></h2>
            <p className="text-gray-400 text-lg">Depoimentos verificados de agentes em campo.</p>
          </div>

          <div className="flex flex-col gap-32">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="group relative max-w-5xl mx-auto w-full">
                <div className="absolute -inset-4 bg-green-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative bg-neutral-900/90 border border-green-500/20 p-6 md:p-12 rounded-[2rem] transition-all flex flex-col items-center shadow-2xl overflow-hidden backdrop-blur-md">
                  <div className="w-full mb-12 rounded-2xl overflow-hidden border-2 border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.1)]">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-[2s] ease-out" 
                    />
                  </div>
                  <div className="text-center w-full">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="h-[2px] w-12 bg-green-500/50"></div>
                      <h4 className="font-orbitron font-black text-3xl text-green-500 uppercase tracking-widest">{t.name}</h4>
                      <div className="h-[2px] w-12 bg-green-500/50"></div>
                    </div>
                    <div className="flex justify-center gap-2 mb-8 text-green-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-8 h-8 fill-current drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-2xl text-gray-300 italic leading-relaxed max-w-3xl mx-auto font-medium">
                      "{t.text}"
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rotate-45 translate-x-12 -translate-y-12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificado" className="py-24 px-6 bg-gradient-to-b from-transparent to-green-900/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-orbitron font-black mb-6 uppercase tracking-tighter leading-tight">Mestre do <br /><span className="text-neon">Omnitrix</span></h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              O reconhecimento oficial da Academia para aqueles que provaram sua honra e habilidade técnica com o dispositivo mais poderoso do universo.
            </p>
            <div className="space-y-4">
               <div className="flex items-center gap-4 bg-black/60 p-4 rounded-xl border-l-4 border-green-500 backdrop-blur-sm">
                  <div className="text-green-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h5 className="font-bold font-orbitron text-sm">CÓDIGO DE DNA VERIFICADO</h5>
                    <p className="text-xs text-gray-500 italic">Cada certificado possui uma assinatura molecular única.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 bg-black/60 p-4 rounded-xl border-l-4 border-green-500 backdrop-blur-sm">
                  <div className="text-green-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h5 className="font-bold font-orbitron text-sm">CARIMBO DOS ENCANADORES</h5>
                    <p className="text-xs text-gray-500 italic">Documento diplomático válido em toda a Federação Galáctica.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-green-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative bg-neutral-900/90 p-4 rounded-3xl border-4 border-green-500/50 shadow-2xl transform transition-transform group-hover:rotate-1 scale-95 md:scale-100 backdrop-blur-sm">
               <img 
                 src={CERTIFICATE_URL} 
                 alt="Certificado do Curso Ben 10" 
                 className="w-full rounded-xl"
               />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-xl">
                  <button 
                    onClick={handleDownload}
                    className="bg-green-600 text-black px-8 py-3 rounded-full font-black font-orbitron shadow-[0_0_20px_rgba(34,197,94,1)]"
                  >
                    BAIXAR AGORA
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-green-500/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-green-500 shadow-[0_0_10px_rgba(34,197,94,1)]">
               <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-orbitron font-black text-xl tracking-tighter uppercase">O <span className="text-green-500">CURSO</span></span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Base do Setor 2814. Protocolos de Encanador Ativos.</p>
          <div className="flex gap-6">
             <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Instagram</a>
             <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Twitter</a>
             <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Galactic-Net</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
