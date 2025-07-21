import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Mock data for projects
export const mockProjects = [
  {
    id: 1,
    title: "CANAL -",
    description: "Conceptualisation d'une expérience audiovisuelle révolutionnaire qui réinvente l'interaction avec le contenu multimédia. Cette plateforme minimaliste propose une approche 'moins mais mieux' en utilisant des algorithmes avancés d'analyse comportementale et d'intelligence artificielle pour offrir une sélection ultra-personnalisée de contenus premium.",
    details: "Nous avons conceptualisé Canal -, une version minimaliste et immersive de Canal+ basée sur l'idée de 'moins mais mieux'. Au lieu d'un catalogue infini et souvent déroutant, Canal - propose une sélection réduite, mais hautement personnalisée, grâce à des algorithmes avancés analysant les humeurs et préférences des utilisateurs. La plateforme exploite la réalité augmentée (AR) et la réalité virtuelle (VR) pour transformer le visionnage en une expérience immersive et interactive. Des salles de cinéma virtuelles permettent aux utilisateurs de partager une séance en ligne avec d'autres cinéphiles, renforçant l'aspect social du cinéma. Ce projet a remporté le coup de cœur du jury de Canal+ qui a salué son audace et son innovation.",
    image: "https://i.imgur.com/Je7I6jQ.jpeg",
    additionalImage: "https://i.imgur.com/8VpNFhs.jpeg",
    category: "Expérience Immersive",
    year: "2024",
    client: "Canal+ Innovation Lab"
  },
  {
    id: 2,
    title: "HOGWARTS LEGACY",
    description: "Collaboration révolutionnaire entre patrimoine culturel et divertissement interactif. Cette expérience transgénérationnelle fusionne l'art classique du Louvre avec l'univers magique d'Harry Potter, créant un pont innovant entre culture traditionnelle et gaming moderne pour attirer une nouvelle génération vers l'art.",
    details: "Dans le cadre d'un projet scolaire, nous avons imaginé une collaboration entre le musée du Louvre et le jeu vidéo Hogwarts Legacy. L'objectif : attirer un jeune public au musée grâce à une expérience vidéoludique immersive qui fusionne art et magie. Nous avons conçu un arc narratif inédit intitulé 'Les mystères du Louvre' où des tableaux emblématiques du musée, animés par un puissant sort s'échappent pour s'installer dans les murs de Poudlard. Les joueurs doivent partir à leur recherche en utilisant le sortilège de Revelio pour découvrir l'histoire de chaque œuvre. Cette collaboration mêlant histoire de l'art et univers magique offre une nouvelle dimension au jeu, tout en valorisant le patrimoine culturel du Louvre.",
    image: "https://i.imgur.com/mmkfk3T.jpeg",
    additionalImage: "https://i.imgur.com/MgVT8UE.jpeg",
    category: "Gamification Culturelle",
    year: "2023",
    client: "Projet Académique"
  },
  {
    id: 3,
    title: "SPOTIFY FEELS",
    description: "Pionnier dans l'interface cerveau-ordinateur appliquée à l'expérience musicale. Cette innovation technologique révolutionne la personnalisation musicale en analysant les réactions cérébrales en temps réel pour créer des playlists parfaitement adaptées à l'état émotionnel de l'utilisateur.",
    details: "Nous avons imaginé Spotify Feels, une expérience immersive qui repousse les limites de la technologie et de la personnalisation musicale. L'objectif était de connecter les émotions de l'utilisateur à son expérience musicale de manière inédite. Grâce au casque Mentalista, les réactions cérébrales de l'utilisateur sont analysées en temps réel pour identifier son mood. Ce mood devient la clé pour une personnalisation musicale unique : une playlist sur-mesure, parfaitement adaptée à ses émotions, et une interface interactive qui s'adapte et se transforme en fonction de son état émotionnel. Cette fusion entre la technologie, la musique et les émotions a captivé les participants du salon, illustrant l'engagement de Spotify pour l'innovation.",
    image: "https://i.imgur.com/wYLLDej.jpeg",
    additionalImage: "https://i.imgur.com/qVmv56v.jpeg",
    category: "Interface Neurotechnologique",
    year: "2024",
    client: "Spotify Innovation"
  },
  {
    id: 4,
    title: "PANERAI",
    description: "Création d'une expérience sensorielle exclusive pour l'horlogerie de luxe suisse. Cette installation immersive multi-sensorielle recrée l'essence de la plongée sous-marine, univers emblématique de la marque, à travers une scénographie spectaculaire qui fusionne artisanat traditionnel et innovation technologique.",
    details: "Dans le cadre d'un projet pour le studio Kankyo, nous avons conçu une expérience immersive pour Panerai lors d'une soirée VIP. L'objectif était de plonger les invités dans l'univers marin emblématique de Panerai. Nous avons imaginé une expérience sophistiquée recréant l'essence d'une plongée sous-marine grâce à une combinaison d'éléments physiques et digitaux. L'expérience incluait un couloir immersif avec visuels sous-marins, odeur d'iode et brumisateurs, un dîner à 360 degrés avec projection panoramique des profondeurs océaniques, des installations interactives avec pilotage de mini sous-marins, et une application smartphone pour achats discrets. Bien que non réalisé, ce projet a été salué pour son approche innovante par le studio Kankyo.",
    image: "https://i.imgur.com/NIEM9o3.jpeg",
    additionalImage: "https://i.imgur.com/BX2XZQ0.jpeg",
    category: "Expérience Luxe",
    year: "2024",
    client: "Studio Kankyo"
  },
  {
    id: 5,
    title: "CHILI-PIX",
    description: "Agence de communication digitale parisienne spécialisée dans la création d'expériences numériques innovantes. Notre approche stratégique combine créativité, technologie et expertise marketing pour développer des solutions digitales sur-mesure qui amplifient l'impact des marques dans l'écosystème numérique contemporain.",
    details: "Chili-pix est mon projet entrepreneurial actuel : une agence de communication digitale basée à Paris qui se positionne à l'intersection entre créativité et technologie. Nous proposons une approche moderne de la communication numérique, allant de la stratégie de marque à l'exécution technique. Notre expertise couvre le développement web, le design d'expérience utilisateur, la stratégie de contenu et l'optimisation des performances digitales. Chaque projet est conçu comme une expérience unique, adaptée aux objectifs spécifiques de nos clients et aux tendances émergentes du marché digital.",
    image: "https://i.imgur.com/RMJadEE.png",
    additionalImage: "https://i.imgur.com/0YtgVIf.png",
    category: "Agence Digitale",
    year: "2024",
    client: "Projet Entrepreneurial"
  }
];

export const aboutContent = {
  title: "JULIEN GOMEZ",
  location: "Paris, France",
  description: "Designer et développeur front-end passionné par la création d'expériences numériques innovantes qui repoussent les limites entre art, technologie et interaction humaine.",
  bio: "Spécialisé dans la conception d'expériences digitales haut de gamme, je combine expertise technique en développement front-end, sensibilité artistique en design et compétences stratégiques en community management. Mon approche moderne me permet de créer des solutions numériques qui ne se contentent pas d'être fonctionnelles, mais qui racontent une histoire et créent une connexion émotionnelle avec les utilisateurs. Basé à Paris, je travaille avec des marques exigeantes qui cherchent à se démarquer dans l'écosystème numérique.",
  services: [
    "Développement Front-end",
    "Design d'Expérience Utilisateur",
    "Direction Artistique Digitale",
    "Stratégie de Communication",
    "Community Management"
  ],
  clients: [
    "Marques de Luxe",
    "Startups Innovantes",
    "Institutions Culturelles",
    "Agences Créatives",
    "Entreprises Technologiques"
  ]
};

// Navigation Component
export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-start px-8 py-6">
        <button 
          onClick={() => navigate('/')}
          className="text-white hover:opacity-70 transition-opacity duration-300 text-left"
        >
          <div className="text-lg font-light tracking-[0.3em]">JULIEN GOMZ</div>
          <div className="text-xs font-light tracking-[0.2em] opacity-60">Paris, France</div>
        </button>
        <div className="flex space-x-12 mt-1">
          <button 
            onClick={() => navigate('/about')}
            className="text-white text-sm font-light tracking-[0.2em] hover:opacity-70 transition-opacity duration-300"
          >
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
};

// Project Card Component
export const ProjectCard = ({ project, index, isActive }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive) {
      setImageLoaded(false);
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.src = project.image;
    }
  }, [isActive, project.image]);

  const handleOpenProject = () => {
    navigate(`/project/${project.id}`);
  };

  if (!isActive) return null;

  return (
    <div 
      className="fixed inset-0 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleOpenProject}
    >
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.01]'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
              isHovered ? 'scale-[1.005]' : 'scale-100'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-[1000ms] ease-out ${
            isHovered ? 'opacity-20' : 'opacity-30'
          }`}
        />
      </div>

      {!imageLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-40">
          <div className="flex flex-col items-center">
            <div className="w-px h-16 bg-white opacity-40 animate-pulse"></div>
            <div className="text-white text-xs font-light tracking-[0.3em] opacity-50 mt-4">
              CHARGEMENT
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
        <div 
          className={`text-center transition-all duration-[1500ms] ease-out ${
            imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
  className={`text-white font-light tracking-[0.4em] mb-8 transition-all duration-[800ms] ease-out ${
    isHovered 
      ? 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl scale-105' 
      : 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl scale-100'
  } ${project.title === 'CANAL -' ? 'flex items-center justify-center min-h-[120px]' : ''} ${
    project.title === 'HOGWARTS LEGACY' ? 'text-2xl sm:text-4xl md:text-5xl lg:text-6xl' : ''
  }`}
>
  {project.title}
</h2>
          
          <div 
  className={`transition-all duration-[700ms] ease-out ${
    isHovered ? 'opacity-100 translate-y-0' : 'md:opacity-0 md:translate-y-4 opacity-100 translate-y-0'
  }`}
>
  <div className="text-white text-sm font-light tracking-[0.2em] mb-8 opacity-80">
    {project.category}
  </div>
  
  <button className="group relative inline-flex items-center overflow-hidden">
    <span className="text-white text-xs font-light tracking-[0.25em] border border-white/40 px-10 py-4 transition-all duration-[600ms] ease-out group-hover:border-white group-hover:bg-white group-hover:text-black">
      VOIR PROJET
    </span>
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

// Home Component
export const Home = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 1000);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const changeProject = (direction) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    setCurrentProject((prev) => {
      if (direction === 'next') {
        return (prev + 1) % mockProjects.length;
      } else {
        return (prev - 1 + mockProjects.length) % mockProjects.length;
      }
    });
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      if (e.deltaY > 0) {
        changeProject('next');
      } else {
        changeProject('prev');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isScrolling]);

  // 4. NOUVEAU useEffect pour le tactile - AJOUTEZ ICI ⬇️
useEffect(() => {
  let startY = 0;
  let startTime = 0;

  const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
    startTime = Date.now();
  };

  const handleTouchEnd = (e) => {
    if (isScrolling) return;
    
    const endY = e.changedTouches[0].clientY;
    const endTime = Date.now();
    const deltaY = startY - endY;
    const deltaTime = endTime - startTime;
    
    const minDistance = 50;
    const maxTime = 1000;
    
    if (Math.abs(deltaY) > minDistance && deltaTime < maxTime) {
      if (deltaY > 0) {
        console.log('Swipe up - next project');
        changeProject('next');
      } else {
        console.log('Swipe down - previous project');
        changeProject('prev');
      }
    }
  };

  document.addEventListener('touchstart', handleTouchStart, { passive: true });
  document.addEventListener('touchend', handleTouchEnd, { passive: true });

  return () => {
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchend', handleTouchEnd);
  };
}, [isScrolling]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling) return;
      
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        changeProject('next');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        changeProject('prev');
      }
    };

    

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isScrolling]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-white text-2xl font-light tracking-[0.3em] mb-8">
            {Math.round(loadingProgress)}%
          </div>
          <div className="w-96 h-px bg-gray-900 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-500 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <ProjectCard
        key={mockProjects[currentProject].id}
        project={mockProjects[currentProject]}
        index={currentProject}
        isActive={true}
      />

      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-5">
          {mockProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => !isScrolling && setCurrentProject(index)}
              className={`w-1 transition-all duration-700 ease-out ${
                index === currentProject 
                  ? 'h-8 bg-white opacity-100' 
                  : 'h-4 bg-gray-600 opacity-30 hover:opacity-60'
              }`}
              disabled={isScrolling}
            />
          ))}
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div 
          className={`text-white text-xs font-light tracking-[0.25em] transition-opacity duration-1000 ${
            isScrolling ? 'opacity-30' : 'opacity-60'
          }`}
        >
          <span className="animate-pulse">( défiler vers le bas )</span>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-40">
        <div className="flex space-x-8">
          
        </div>
      </div>
    </div>
  );
};

// About Component
export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-8">
        <div 
          className={`transition-all duration-[1500ms] ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-light tracking-[0.4em] mb-6">
              {aboutContent.title}
            </h1>
            <p className="text-base text-gray-400 font-light tracking-[0.25em] mb-8">
              {aboutContent.location}
            </p>
            <div className="w-24 h-px bg-gray-700 mx-auto"></div>
          </div>

          <div className="text-center mb-32 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-12">
              {aboutContent.description}
            </p>
            <p className="text-gray-300 text-base font-light leading-relaxed">
              {aboutContent.bio}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-24 mb-32">
            
            <div className="text-center">
              <h2 className="text-xl font-light tracking-[0.3em] mb-12 pb-4 border-b border-gray-800">
                SERVICES
              </h2>
              <div className="space-y-6">
                {aboutContent.services.map((service, index) => (
                  <div 
                    key={index}
                    className="text-gray-300 text-base font-light tracking-[0.1em] hover:text-white transition-colors duration-700 cursor-default"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-xl font-light tracking-[0.3em] mb-12 pb-4 border-b border-gray-800">
                CLIENTS
              </h2>
              <div className="space-y-6">
                {aboutContent.clients.map((client, index) => (
                  <div 
                    key={index}
                    className="text-gray-300 text-base font-light tracking-[0.1em] hover:text-white transition-colors duration-700 cursor-default"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-light tracking-[0.3em] mb-12 pb-4 border-b border-gray-800">
              CONTACT
            </h2>
            <div className="space-y-6">
              <a 
                href="mailto:juliengomez413@gmail.com"
                className="block text-gray-300 text-base font-light tracking-[0.1em] hover:text-white transition-colors duration-700"
              >
                juliengomez413@gmail.com
              </a>
              <a 
                href="https://instagram.com/juliengomez"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 text-base font-light tracking-[0.1em] hover:text-white transition-colors duration-700"
              >
                @juliengomez
              </a>
              <div className="text-gray-300 text-base font-light tracking-[0.1em]">
                +33781580237
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Project Detail Component
export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const project = mockProjects.find(p => p.id === parseInt(id));
  const currentIndex = mockProjects.findIndex(p => p.id === parseInt(id));
  const nextProject = mockProjects[(currentIndex + 1) % mockProjects.length];
  const prevProject = mockProjects[(currentIndex - 1 + mockProjects.length) % mockProjects.length];

  useEffect(() => {
    if (project) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 300);

      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.src = project.image;

      return () => clearTimeout(timer);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light tracking-[0.3em] mb-8">PROJET NON TROUVÉ</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-white text-sm font-light tracking-[0.2em] border border-white/40 px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            RETOUR À L'ACCUEIL
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top hero section with VR headset */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(100,100,100,0.1)_0%,_transparent_50%)]"></div>
          </div>
        </div>

        {/* Navigation buttons in corners */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20">
          <div></div>
          <div></div>
        </div>

        {/* Main VR headset and project title */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative max-w-4xl">
            {/* VR Headset with project content */}
            <div className="relative">
              <div 
                className={`transition-all duration-[1500ms] ease-out ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[70vh] object-cover rounded-2xl shadow-2xl"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              
              {/* Project title overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-5xl md:text-7xl font-light tracking-[0.4em] text-white drop-shadow-2xl mb-4">
                  {project.title}
                </h1>
                <div className="text-white text-sm font-light tracking-[0.2em] opacity-80">
                  {project.category} • {project.year}
                </div>
                <div className="text-white text-sm font-light tracking-[0.2em] opacity-80 mt-2">
                  {project.client}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-light tracking-[0.25em] opacity-60">
          <span>( défiler vers le bas )</span>
        </div>
      </div>

      {/* Project details section */}
      <div className="relative bg-black">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left column - Project details */}
            <div 
              className={`transition-all duration-[1500ms] ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl font-light tracking-[0.3em] mb-12 border-b border-gray-700 pb-4">
                DÉTAILS DU PROJET
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-light tracking-[0.2em] text-gray-400 mb-3">CATÉGORIE</h3>
                  <div className="text-lg font-light text-white">{project.category}</div>
                </div>
                
                <div>
                  <h3 className="text-sm font-light tracking-[0.2em] text-gray-400 mb-3">ANNÉE</h3>
                  <div className="text-lg font-light text-white">{project.year}</div>
                </div>
                
                <div>
                  <h3 className="text-sm font-light tracking-[0.2em] text-gray-400 mb-3">CLIENT</h3>
                  <div className="text-lg font-light text-white">{project.client}</div>
                </div>
                
                <div>
                  <h3 className="text-sm font-light tracking-[0.2em] text-gray-400 mb-3">DESCRIPTION</h3>
                  <div className="text-base font-light text-gray-300 leading-relaxed">{project.details}</div>
                </div>
              </div>
            </div>

            {/* Right column - Additional project images */}
            <div className="flex flex-col items-center justify-center lg:justify-start space-y-6">
              <div 
                className={`relative transition-all duration-[1500ms] ease-out delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-w-lg h-auto object-cover rounded-lg shadow-xl opacity-80"
                />
              </div>
              
              {/* Additional image */}
              <div 
                className={`relative transition-all duration-[1500ms] ease-out delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <img
                  src={project.additionalImage}
                  alt={`${project.title} additional`}
                  className="w-full max-w-lg h-auto object-cover rounded-lg shadow-xl opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation to other projects */}
      <div className="relative bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Previous project */}
<div className="text-center md:text-left">
  <div className="text-sm font-light tracking-[0.2em] text-gray-400 mb-4">
    PROJET PRÉCÉDENT
  </div>
  <button 
    onClick={() => {
      navigate(`/project/${prevProject.id}`);
      window.scrollTo(0, 0);
    }}
    className="text-2xl font-light tracking-[0.3em] text-white hover:opacity-70 transition-opacity duration-300"
  >
    {prevProject.title}
  </button>
</div>

{/* Next project */}
<div className="text-center md:text-right">
  <div className="text-sm font-light tracking-[0.2em] text-gray-400 mb-4">
    PROJET SUIVANT
  </div>
  <button 
    onClick={() => {
      navigate(`/project/${nextProject.id}`);
      window.scrollTo(0, 0);
    }}
    className="text-2xl font-light tracking-[0.3em] text-white hover:opacity-70 transition-opacity duration-300"
  >
    {nextProject.title}
  </button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};