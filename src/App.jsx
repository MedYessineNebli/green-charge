import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './Slide';

// Icons
import { BatteryCharging, Zap, MapPin, Leaf, TrendingUp, Users, Target, CheckCircle2, Factory, LineChart, Shield, Cloud, Smartphone, Sun } from 'lucide-react';

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
        GreenCharge Tunisia
      </h1>
      <p className="text-2xl md:text-3xl text-slate-600 font-light tracking-wide">
        Une plateforme intelligente de recharge verte pour véhicules électriques
      </p>
      <div className="mt-12 text-sm text-slate-400 animate-pulse">
        Appuyez sur 'Entrée' ou les flèches pour naviguer
      </div>
    </div>
  ),

  // 2. Our Profiles
  () => (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-slate-800 mb-16 text-center">Notre équipe fondatrice</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow flex flex-col items-center">
          <div className="w-64 h-64 bg-slate-100 rounded-full mb-8 overflow-hidden shadow-inner flex items-center justify-center">
            <Users className="w-24 h-24 text-slate-300" />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-6 w-full text-left">Le Manager</h3>
          <p className="text-slate-600 text-lg leading-relaxed w-full text-left">
            Expert en développement commercial et stratégie d'entreprise avec une expérience de 10 ans dans les secteurs innovants et la gestion de projets à forte croissance.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow flex flex-col items-center">
          <div className="w-64 h-64 bg-slate-100 rounded-full mb-8 overflow-hidden shadow-inner flex items-center justify-center">
            <Users className="w-24 h-24 text-slate-300" />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-6 w-full text-left">L'Innovateur</h3>
          <p className="text-slate-600 text-lg leading-relaxed w-full text-left">
            Ingénieur spécialisé en technologies vertes et systèmes intelligents, avec un parcours axé sur les solutions durables et la transformation numérique.
          </p>
        </div>
      </div>
    </div>
  ),

  // 3. Problem in Tunisia
  () => (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="w-1/3">
        <div className="w-full aspect-square bg-gradient-to-br from-greencharge-400 to-greencharge-600 rounded-[2rem] flex items-center justify-center p-12 shadow-[0_0_60px_rgba(34,197,94,0.3)]">
          <BatteryCharging className="w-full h-full text-white opacity-90" />
        </div>
      </div>
      <div className="w-2/3">
        <h2 className="text-5xl font-bold text-slate-800 mb-10 leading-tight">Le défi de la mobilité électrique en Tunisie</h2>
        <div className="space-y-4 text-left">
          <div className="border-l-4 border-greencharge-600 pl-6 py-2">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Infrastructure insuffisante</h3>
            <p className="text-slate-600 text-lg leading-relaxed">Moins de 50 bornes de recharge publiques pour toute la Tunisie, créant une barrière majeure à l'adoption des véhicules électriques.</p>
          </div>
          <div className="border-l-4 border-greencharge-600 pl-6 py-2">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Système décentralisé</h3>
            <p className="text-slate-600 text-lg leading-relaxed">Absence d'une plateforme unifiée pour localiser et accéder aux stations de recharge disponibles, rendant l'expérience utilisateur complexe et frustrante.</p>
          </div>
          <div className="border-l-4 border-greencharge-600 pl-6 py-2">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Énergie non renouvelable</h3>
            <p className="text-slate-600 text-lg leading-relaxed">La majorité des bornes actuelles dépendent du réseau électrique traditionnel, limitant l'impact environnemental positif de la mobilité électrique.</p>
          </div>
        </div>
      </div>
    </div>
  ),

  // 4. Our Solution
  () => (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="w-2/3">
        <h2 className="text-5xl font-bold text-slate-800 mb-12 leading-tight">Notre solution : une plateforme intelligente de recharge verte</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          <div className="border-t-2 border-greencharge-800 pt-4">
            <span className="text-slate-500 font-semibold mb-2 block">01</span>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Application mobile intuitive</h3>
            <p className="text-slate-600 leading-relaxed text-lg">Localisation en temps réel des stations de recharge, réservation instantanée et paiement simplifié via une interface utilisateur moderne.</p>
          </div>
          <div className="border-t-2 border-greencharge-800 pt-4">
            <span className="text-slate-500 font-semibold mb-2 block">02</span>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Énergie solaire intégrée</h3>
            <p className="text-slate-600 leading-relaxed text-lg">Partenariat avec des installations photovoltaïques pour garantir une source d'énergie 100% renouvelable et durable.</p>
          </div>
          <div className="border-t-2 border-greencharge-800 pt-4 col-span-2">
            <span className="text-slate-500 font-semibold mb-2 block">03</span>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Technologie IoT avancée</h3>
            <p className="text-slate-600 leading-relaxed text-lg lg:w-3/4">Système connecté permettant la gestion à distance, la maintenance prédictive et l'optimisation continue des performances.</p>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="w-full aspect-[3/4] bg-stone-100 rounded-3xl flex items-center justify-center p-8 shadow-inner overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 h-3/4 shadow-2xl rounded-3xl border-4 border-slate-800 flex flex-col overflow-hidden">
             <div className="bg-slate-800 h-6 w-full flex justify-center items-center"><div className="w-1/4 h-1 bg-slate-600 rounded-full"></div></div>
             <div className="flex-1 bg-greencharge-50 flex items-center justify-center"><Zap className="text-greencharge-500 w-16 h-16" /></div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 5. Features
  () => (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-slate-800 mb-16 text-center">Technologie et fonctionnalités clés</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16">
        <div className="flex flex-col gap-4">
          <Smartphone className="w-12 h-12 text-greencharge-600 mb-2" strokeWidth={1.5} />
          <h3 className="text-2xl font-medium text-slate-800">Application mobile complète</h3>
          <p className="text-slate-600 text-lg leading-relaxed">Suivi en temps réel de la charge, historique des sessions, géolocalisation GPS et notifications intelligentes pour une expérience utilisateur fluide.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Sun className="w-12 h-12 text-greencharge-600 mb-2" strokeWidth={1.5} />
          <h3 className="text-2xl font-medium text-slate-800">Énergie verte certifiée</h3>
          <p className="text-slate-600 text-lg leading-relaxed">Certification de l'origine renouvelable de l'électricité fournie, avec transparence totale sur l'empreinte carbone de chaque session de recharge.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Cloud className="w-12 h-12 text-greencharge-600 mb-2" strokeWidth={1.5} />
          <h3 className="text-2xl font-medium text-slate-800">Plateforme cloud scalable</h3>
          <p className="text-slate-600 text-lg leading-relaxed">Infrastructure technologique moderne permettant une montée en puissance rapide et une gestion centralisée de l'ensemble du réseau de recharge.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Shield className="w-12 h-12 text-greencharge-600 mb-2" strokeWidth={1.5} />
          <h3 className="text-2xl font-medium text-slate-800">Sécurité et fiabilité</h3>
          <p className="text-slate-600 text-lg leading-relaxed">Protocoles de sécurité avancés pour les transactions, surveillance continue des équipements et assistance technique 24/7 pour garantir la fiabilité du service.</p>
        </div>
      </div>
    </div>
  ),

  // 6. Business Model
  () => (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      <h2 className="text-5xl font-bold text-slate-800 mb-16 text-center">Modèle économique innovant</h2>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 relative w-full mt-4">
        
        <div className="flex-1 bg-greencharge-50/70 p-10 rounded-xl relative flex flex-col group hover:bg-greencharge-100 transition-colors cursor-default">
          <div className="w-full flex justify-center mb-8"><BatteryCharging className="w-8 h-8 text-slate-700" strokeWidth={1.5}/></div>
          <h3 className="text-2xl font-medium text-slate-800 mb-4 text-center">Revenus de recharge</h3>
          <p className="text-slate-600 text-lg leading-relaxed text-center">Tarification par kWh avec formules d'abonnement pour une fidélisation optimale des utilisateurs réguliers.</p>
          <div className="hidden md:block absolute right-[-24px] top-1/2 -translate-y-1/2 border-y-[100px] border-y-transparent border-l-[24px] border-l-greencharge-50/70 group-hover:border-l-greencharge-100 transition-colors z-10 w-0 h-0"></div>
        </div>

        <div className="flex-1 bg-greencharge-50/70 p-10 rounded-xl relative flex flex-col ml-0 md:ml-6 group hover:bg-greencharge-100 transition-colors cursor-default">
          <div className="w-full flex justify-center mb-8"><Users className="w-8 h-8 text-slate-700" strokeWidth={1.5}/></div>
          <h3 className="text-2xl font-medium text-slate-800 mb-4 text-center">Partenariats stratégiques</h3>
          <p className="text-slate-600 text-lg leading-relaxed text-center">Collaboration avec les propriétaires de stations pour mutualiser les investissements et maximiser la couverture géographique.</p>
          <div className="hidden md:absolute right-[-24px] top-1/2 -translate-y-1/2 border-y-[100px] border-y-transparent border-l-[24px] border-l-greencharge-50/70 group-hover:border-l-greencharge-100 transition-colors z-10 w-0 h-0"></div>
          <div className="hidden md:absolute left-0 top-1/2 -translate-y-1/2 border-y-[100px] border-y-transparent border-l-[24px] border-l-slate-50 z-20 w-0 h-0"></div>
        </div>

        <div className="flex-1 bg-greencharge-50/70 p-10 rounded-xl relative flex flex-col ml-0 md:ml-6 group hover:bg-greencharge-100 transition-colors cursor-default">
          <div className="w-full flex justify-center mb-8"><TrendingUp className="w-8 h-8 text-slate-700" strokeWidth={1.5}/></div>
          <h3 className="text-2xl font-medium text-slate-800 mb-4 text-center">Données et analytics</h3>
          <p className="text-slate-600 text-lg leading-relaxed text-center">Vente anonymisée de données de mobilité aux municipalités et entreprises pour l'optimisation de l'urbanisme et de la planification.</p>
          <div className="hidden md:absolute left-0 top-1/2 -translate-y-1/2 border-y-[100px] border-y-transparent border-l-[24px] border-l-slate-50 z-20 w-0 h-0"></div>
        </div>

      </div>
    </div>
  ),

  // 7. Market
  () => (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-slate-800 mb-16 leading-tight">Opportunité de marché en Tunisie</h2>
        <div className="grid grid-cols-3 gap-6 mb-16">
          <div className="flex flex-col text-center">
            <span className="text-5xl font-medium text-slate-800 mb-4">15K</span>
            <span className="text-lg font-medium text-slate-700 mb-2">Véhicules<br/>électriques</span>
            <span className="text-sm text-slate-500 leading-relaxed">Parc de VE actuellement en Tunisie, en croissance de 45% annuelle</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-5xl font-medium text-slate-800 mb-4">500K</span>
            <span className="text-lg font-medium text-slate-700 mb-2">Objectif 2028</span>
            <span className="text-sm text-slate-500 leading-relaxed">Projection du nombre de VE d'ici 5 ans selon les politiques gouvernementales</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-5xl font-medium text-slate-800 mb-4">800+</span>
            <span className="text-lg font-medium text-slate-700 mb-2">Bornes<br/>nécessaires</span>
            <span className="text-sm text-slate-500 leading-relaxed">Infrastructure requise pour accompagner la transition vers l'électrique</span>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            Le marché tunisien de la recharge VE représente un potentiel de <span className="text-greencharge-700 font-bold">15 millions de dinars</span> d'ici 2028, avec un taux de croissance annuel composé de 60%.
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-full h-full min-h-[350px] max-h-[450px] bg-gradient-to-tr from-cyan-100 to-greencharge-100 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center p-8">
           <MapPin className="text-greencharge-500 w-32 h-32 opacity-20" />
        </div>
      </div>
    </div>
  ),

  // 8. Competitive Advantage
  () => (
    <div className="w-full max-w-4xl mx-auto flex flex-col justify-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-10 text-center">Avantage concurrentiel différenciant</h2>
      <div className="space-y-4">
        <div className="p-6 rounded-xl bg-greencharge-50 border border-greencharge-100 shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 shrink-0 bg-greencharge-700 text-white rounded-full flex items-center justify-center"><Leaf className="w-8 h-8" /></div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-1">100% renouvelable</h3>
            <p className="text-slate-600 leading-relaxed text-lg">Seule plateforme intégrant exclusivement de l'énergie solaire, garantissant une empreinte carbone nulle.</p>
          </div>
        </div>
        <div className="p-6 rounded-xl bg-greencharge-50 border border-greencharge-100 shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 shrink-0 bg-greencharge-700 text-white rounded-full flex items-center justify-center"><Zap className="w-8 h-8" /></div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-1">Technologie propriétaire</h3>
            <p className="text-slate-600 leading-relaxed text-lg">Plateforme SaaS développée en interne avec des algorithmes d'optimisation exclusifs.</p>
          </div>
        </div>
        <div className="p-6 rounded-xl bg-greencharge-50 border border-greencharge-100 shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 shrink-0 bg-greencharge-700 text-white rounded-full flex items-center justify-center"><Users className="w-8 h-8" /></div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-1">Réseau collaboratif</h3>
            <p className="text-slate-600 leading-relaxed text-lg">Modèle de partenariat unique permettant une expansion rapide sans investissement massif en capital fixe.</p>
          </div>
        </div>
      </div>
    </div>
  ),

  // 9. Financial Projection
  () => (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-10 whitespace-nowrap">Projection financière à 3 ans</h2>
        <div className="relative border-l border-slate-300 ml-6 pb-6 space-y-16">
          <div className="relative">
            <div className="absolute -left-6 bg-greencharge-100 text-slate-700 w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center font-medium text-xl top-0">1</div>
            <div className="ml-12">
              <h4 className="text-xl font-medium text-slate-700 mb-4">Année 1</h4>
              <p className="font-semibold text-slate-800 mb-3 text-lg">2025 : Lancement de 50 stations</p>
              <div className="space-y-1 text-slate-600">
                <p>Revenus : 800K TND</p>
                <p>Utilisateurs : 5K</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 bg-greencharge-100 text-slate-700 w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center font-medium text-xl top-0">2</div>
            <div className="ml-12">
              <h4 className="text-xl font-medium text-slate-700 mb-4">Année 2</h4>
              <p className="font-semibold text-slate-800 mb-3 text-lg">2026 : Expansion à 200 stations</p>
              <div className="space-y-1 text-slate-600">
                <p>Revenus : 3,5M TND</p>
                <p>Utilisateurs : 25K</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 bg-greencharge-100 text-slate-700 w-12 h-12 rounded-lg border border-slate-200 flex items-center justify-center font-medium text-xl top-0">3</div>
            <div className="ml-12">
              <h4 className="text-xl font-medium text-slate-700 mb-4">Année 3</h4>
              <p className="font-semibold text-slate-800 mb-3 text-lg">2027 : Couverture nationale</p>
              <div className="space-y-1 text-slate-600">
                <p>Revenus : 8M TND</p>
                <p>Utilisateurs : 60K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-full h-full min-h-[350px] max-h-[450px] bg-gradient-to-tr from-greencharge-200 to-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl flex items-end justify-center p-12 relative">
          <TrendingUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-greencharge-400 opacity-20" />
          <div className="w-full h-64 flex items-end justify-around gap-4 z-10">
            <div className="w-1/3 bg-greencharge-200 rounded-t-lg h-1/4"></div>
            <div className="w-1/3 bg-greencharge-400 rounded-t-lg h-1/2"></div>
            <div className="w-1/3 bg-greencharge-600 rounded-t-lg h-full"></div>
          </div>
        </div>
      </div>
    </div>
  ),

  // 10. Future Vision
  () => (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-slate-800 mb-16 leading-tight">Vision future : transformer la mobilité tunisienne</h2>
        <div className="space-y-12">
          <div className="flex items-start gap-6 relative">
            <div className="bg-greencharge-100 text-slate-700 p-4 rounded-full border border-greencharge-200 z-10 shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div className="absolute top-12 left-7 w-px h-16 bg-greencharge-200 -z-0"></div>
            <div className="pt-2">
              <h3 className="text-xl font-medium text-slate-800 mb-2">Couverture nationale</h3>
              <p className="text-slate-600 leading-relaxed">Déployer 500+ stations de recharge à travers toute la Tunisie d'ici 2028, créant le plus grand réseau de mobilité verte du pays.</p>
            </div>
          </div>
          <div className="flex items-start gap-6 relative">
            <div className="bg-greencharge-100 text-slate-700 p-4 rounded-full border border-greencharge-200 z-10 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div className="absolute top-12 left-7 w-px h-16 bg-greencharge-200 -z-0"></div>
            <div className="pt-2">
              <h3 className="text-xl font-medium text-slate-800 mb-2">Expansion régionale</h3>
              <p className="text-slate-600 leading-relaxed">Étendre le modèle vers les marchés méditerranéens et africains, positionnant GreenCharge comme leader régional de la recharge électrique.</p>
            </div>
          </div>
          <div className="flex items-start gap-6 relative">
            <div className="bg-greencharge-100 text-slate-700 p-4 rounded-full border border-greencharge-200 z-10 shrink-0">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="pt-2">
              <h3 className="text-xl font-medium text-slate-800 mb-2">Impact environnemental</h3>
              <p className="text-slate-600 leading-relaxed">Réduire les émissions de CO2 de 50 000 tonnes annuellement d'ici 2030, contribuant activement aux objectifs climatiques de la Tunisie.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-full h-full min-h-[350px] max-h-[450px] bg-gradient-to-tr from-cyan-600 to-greencharge-500 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center relative">
           <Cloud className="absolute top-1/4 right-1/4 text-white w-24 h-24 opacity-30" />
           <Factory className="absolute bottom-1/4 left-1/4 text-white w-32 h-32 opacity-30" />
        </div>
      </div>
    </div>
  ),

  // 11. Conclusion
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
