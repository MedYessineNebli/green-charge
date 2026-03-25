import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './Slide';

// Icons
import { BatteryCharging, Zap, MapPin, Leaf, TrendingUp, Users, Target, CheckCircle2, Factory, LineChart } from 'lucide-react';

// Sections
const slides = [
  // 1. Introduction
  ({ isActive }) => (
    <div className="text-center max-w-4xl mx-auto space-y-8">
      <div className="flex justify-center mb-8">
        <div className="p-6 bg-greencharge-100 rounded-full shadow-lg border border-greencharge-200">
          <Leaf className="w-24 h-24 text-greencharge-600" />
        </div>
      </div>
      <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-greencharge-500 to-greencharge-800">
        GreenCharge
      </h1>
      <p className="text-2xl md:text-4xl text-slate-600 font-light tracking-wide">
        Le Futur de la Mobilité Électrique en Tunisie
      </p>
      <div className="mt-12 text-sm text-slate-400 animate-pulse">
        Appuyez sur 'Entrée' ou les flèches pour naviguer
      </div>
    </div>
  ),

  // 2. Our Profiles
  () => (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-slate-800 mb-16 text-center">L'Équipe Fondatrice</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <Users size={40} />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-2">Le Manager</h3>
          <p className="text-blue-600 text-lg font-semibold mb-4">Visionnaire & Stratégiste</p>
          <ul className="space-y-4 text-slate-600 text-lg">
            <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500" /> Gestion experte des opérations</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500" /> Planification financière</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-500" /> Relations avec les partenaires</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow">
          <div className="w-20 h-20 bg-greencharge-100 text-greencharge-600 rounded-2xl flex items-center justify-center mb-6">
            <Zap size={40} />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-2">L'Innovateur</h3>
          <p className="text-greencharge-600 text-lg font-semibold mb-4">Directeur Technique</p>
          <ul className="space-y-4 text-slate-600 text-lg">
            <li className="flex items-center gap-3"><CheckCircle2 className="text-greencharge-500" /> Conception d'infrastructures</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-greencharge-500" /> Intégration énergétique</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-greencharge-500" /> R&D sur la recharge rapide</li>
          </ul>
        </div>
      </div>
    </div>
  ),

  // 3. Problem in Tunisia
  () => (
    <div className="w-full max-w-5xl mx-auto text-center">
      <h2 className="text-5xl font-bold text-red-600 mb-12">Le Problème en Tunisie</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-red-50 p-8 rounded-2xl">
          <BatteryCharging className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Infrastructures Inexistantes</h3>
          <p className="text-slate-600">Manque flagrant de bornes de recharge publiques pour véhicules électriques.</p>
        </div>
        <div className="bg-red-50 p-8 rounded-2xl">
          <Factory className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Dépendance Fossile</h3>
          <p className="text-slate-600">Une économie fortement liée aux carburants importés et polluants.</p>
        </div>
        <div className="bg-red-50 p-8 rounded-2xl">
          <TrendDownWarningIcon className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Retard Technologique</h3>
          <p className="text-slate-600">Transition énergétique entravée par le manque d'investissements.</p>
        </div>
      </div>
    </div>
  ),

  // 4. Our Solution
  () => (
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-5xl font-bold text-greencharge-700 mb-6">Notre Solution</h2>
        <h3 className="text-3xl font-semibold text-slate-800 mb-8">Réseau de Bornes GreenCharge</h3>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Nous déployons un réseau intelligent, solaire et réparti de bornes de recharge ultra-rapides pour véhicules électriques à travers toute la Tunisie, propulsé par les énergies renouvelables.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-4 text-lg text-slate-700 bg-greencharge-50 p-4 rounded-xl">
            <Leaf className="text-greencharge-600" /> Énergie 100% Verte
          </li>
          <li className="flex items-center gap-4 text-lg text-slate-700 bg-greencharge-50 p-4 rounded-xl">
            <Zap className="text-greencharge-600" /> Recharge Ultra-Rapide
          </li>
          <li className="flex items-center gap-4 text-lg text-slate-700 bg-greencharge-50 p-4 rounded-xl">
            <MapPin className="text-greencharge-600" /> Couverture Nationale
          </li>
        </ul>
      </div>
      <div className="flex-1 drop-shadow-2xl">
        <div className="w-full aspect-square bg-gradient-to-tr from-greencharge-400 to-greencharge-600 rounded-full flex items-center justify-center p-12 shadow-[0_0_100px_rgba(34,197,94,0.3)]">
          <BatteryCharging className="w-full h-full text-white" />
        </div>
      </div>
    </div>
  ),

  // 5. Features
  () => (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-slate-800 mb-16 text-center">Principales Fonctionnalités</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: <Zap />, title: "Supercharge 150kW" },
          { icon: <Leaf />, title: "Alimentation Solaire" },
          { icon: <MapPin />, title: "App de Localisation" },
          { icon: <BatteryCharging />, title: "Monitoring Batterie" },
          { icon: <Users />, title: "Programme Fidélité" },
          { icon: <LineChart />, title: "Analyse en Temps Réel" },
          { icon: <Target />, title: "Réservation de Borne" },
          { icon: <Factory />, title: "Stockage Sur Site" },
        ].map((feat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="w-16 h-16 bg-greencharge-50 text-greencharge-600 rounded-full flex items-center justify-center mb-4">
              {feat.icon}
            </div>
            <h4 className="text-lg font-bold text-slate-700">{feat.title}</h4>
          </div>
        ))}
      </div>
    </div>
  ),

  // 6. Business Model
  () => (
    <div className="w-full max-w-5xl mx-auto text-center">
      <h2 className="text-5xl font-bold text-slate-800 mb-12">Modèle Économique</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-b from-white to-greencharge-50 p-8 rounded-3xl shadow-xl border border-greencharge-100">
          <h3 className="text-2xl font-bold text-greencharge-700 mb-4">Pay-Per-Use</h3>
          <p className="text-slate-600 text-lg">Facturation au kWh rechargé, avec des tarifs dynamiques basés sur l'heure de pointe.</p>
        </div>
        <div className="bg-gradient-to-b from-greencharge-500 to-greencharge-700 p-8 rounded-3xl shadow-xl text-white transform md:-translate-y-4">
          <h3 className="text-2xl font-bold mb-4">Abonnement Pro</h3>
          <p className="text-greencharge-100 text-lg">Forfaits mensuels pour les compagnies de taxis, flottes de livraison et VTC.</p>
        </div>
        <div className="bg-gradient-to-b from-white to-greencharge-50 p-8 rounded-3xl shadow-xl border border-greencharge-100">
          <h3 className="text-2xl font-bold text-greencharge-700 mb-4">Pub & Partenaires</h3>
          <p className="text-slate-600 text-lg">Écrans digitaux sur les bornes pour les annonceurs et partenariats avec centres commerciaux.</p>
        </div>
      </div>
    </div>
  ),

  // 7. Market & Competition
  () => (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-slate-800 mb-12 text-center">Marché et Concurrence</h2>
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
        <div className="flex items-center gap-6 mb-8">
          <Target className="w-12 h-12 text-blue-500" />
          <h3 className="text-3xl font-bold text-slate-800">Cible Première</h3>
        </div>
        <p className="text-xl text-slate-600 mb-12">
          Propriétaires de VE en Tunisie (croissance attendue de 40% par an), flottes d'entreprises, et touristes éco-responsables.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-4 text-xl font-bold text-slate-800">Acteur</th>
                <th className="py-4 text-xl font-bold text-slate-800">Énergie Verte</th>
                <th className="py-4 text-xl font-bold text-slate-800">Vitesse</th>
                <th className="py-4 text-xl font-bold text-slate-800">Couverture</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-4 text-lg font-semibold text-slate-600">Stations classiques</td>
                <td className="py-4 text-red-500">Non</td>
                <td className="py-4 text-slate-600">Standard / Lente</td>
                <td className="py-4 text-yellow-500">Faible</td>
              </tr>
              <tr className="bg-greencharge-50 rounded-lg">
                <td className="py-4 px-2 text-lg font-bold text-greencharge-700">GreenCharge</td>
                <td className="py-4 px-2 text-greencharge-600 font-bold">100% Solaire</td>
                <td className="py-4 px-2 text-greencharge-600 font-bold">Ultra-Rapide (150kW)</td>
                <td className="py-4 px-2 text-greencharge-600 font-bold">Nationale visée</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),

  // 8. Financial Plan
  () => (
    <div className="w-full max-w-5xl mx-auto text-center">
      <h2 className="text-5xl font-bold text-slate-800 mb-12">Plan Financier (Année 1-3)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
          <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">Investissement Initial</p>
          <h3 className="text-4xl font-bold text-slate-800">500k TND</h3>
          <p className="text-slate-400 mt-2 text-sm">Bornes & Tech</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-500">
          <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">Seuil de Rentabilité</p>
          <h3 className="text-4xl font-bold text-slate-800">Mois 18</h3>
          <p className="text-slate-400 mt-2 text-sm">Break-even</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-greencharge-500">
          <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">CA Année 3 (Proj.)</p>
          <h3 className="text-4xl font-bold text-greencharge-600">2.5M TND</h3>
          <p className="text-slate-400 mt-2 text-sm">Croissance exponentielle</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
          <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">Marge Nette visée</p>
          <h3 className="text-4xl font-bold text-slate-800">28%</h3>
          <p className="text-slate-400 mt-2 text-sm">Haut rendement</p>
        </div>
      </div>
    </div>
  ),

  // 9. Future Vision
  () => (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-greencharge-800 mb-12 text-center">Vision d'Avenir</h2>
      <div className="relative border-l-4 border-greencharge-200 ml-6 md:ml-12 space-y-12 pb-8">
        <div className="relative">
          <div className="absolute -left-[2.15rem] bg-greencharge-500 w-8 h-8 rounded-full border-4 border-white shadow"></div>
          <div className="ml-8 bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-800">Phase 1 (2026) : Déploiement</h4>
            <p className="text-slate-600 mt-2">Installation de 50 bornes dans le grand Tunis et les grandes villes côtières.</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-[2.15rem] bg-greencharge-400 w-8 h-8 rounded-full border-4 border-white shadow"></div>
          <div className="ml-8 bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-800">Phase 2 (2028) : Maillage National</h4>
            <p className="text-slate-600 mt-2">Liaisons directes autoroutières: Bizerte, Sousse, Sfax, Gabès avec énergie 100% solaire propre.</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-[2.15rem] bg-greencharge-300 w-8 h-8 rounded-full border-4 border-white shadow"></div>
          <div className="ml-8 bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-800">Phase 3 (2030) : Expansion Maghreb</h4>
            <p className="text-slate-600 mt-2">Modèle franchisé exporté vers les pays voisins et intégration V2G (Vehicle-to-Grid).</p>
          </div>
        </div>
      </div>
    </div>
  ),

  // 10. Conclusion
  () => (
    <div className="w-full max-w-4xl mx-auto text-center">
      <div className="inline-block p-4 bg-greencharge-100 rounded-full mb-8">
        <Leaf className="w-16 h-16 text-greencharge-600" />
      </div>
      <h2 className="text-6xl font-extrabold text-slate-800 mb-8">Merci de l'attention !</h2>
      <p className="text-3xl text-slate-600 mb-12 font-light">
        Prêt à électrifier l'avenir avec <span className="text-greencharge-600 font-bold">GreenCharge</span> ?
      </p>
      <div className="space-x-6">
        <button className="px-8 py-4 bg-greencharge-600 text-white rounded-full text-xl font-bold shadow-lg shadow-greencharge-200 hover:bg-greencharge-700 transition">
          Investir Maintenant
        </button>
        <button className="px-8 py-4 bg-white text-greencharge-600 border-2 border-greencharge-100 rounded-full text-xl font-bold shadow-sm hover:bg-greencharge-50 transition">
          Contactez Nous
        </button>
      </div>
    </div>
  ),
];

// Helper icon for missing one
const TrendDownWarningIcon = ({ className }) => (
  <svg className={className} box-sizing="border-box" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
    <polyline points="16 17 22 17 22 11"></polyline>
  </svg>
)

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(nextSlide);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        paginate(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-screen h-screen bg-slate-50 overflow-hidden font-sans">
      <AnimatePresence initial={false} custom={direction}>
        <Slide key={currentSlide} direction={direction}>
          <CurrentSlideComponent isActive={true} />
        </Slide>
      </AnimatePresence>

      {/* Progress / Navigation indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-50">
        <div className="flex gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => {
                setDirection(idx > currentSlide ? 1 : -1);
                setCurrentSlide(idx);
              }}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${idx === currentSlide ? 'bg-greencharge-500 w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
