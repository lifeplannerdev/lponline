import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Glowing accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-8 rounded-full shadow-lg shadow-purple-500/50"></div>

          {/* Main heading */}
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              LIFE PLANNER PAGES
            </span>
            
            
          </h3>


          
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mt-12 px-4">
          {/* Card 1: LifePlanner */}
          <a
            href="https://lifeplanneruniversal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-gray-700 hover:border-purple-500/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 text-left h-full text-white"
            style={{
              boxShadow: '0 0 30px rgba(147, 51, 234, 0.1)',
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text text-transparent">
              lifeplanneruniversal.com
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
            Official website for Lifeplanner Studies and Opportunities
                        </p>
            <div className="mt-4 text-purple-300 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
              Explore →
            </div>
          </div>
          </a>

          {/* Card 2: Filmaatic */}
          <a
            href="https://filmaatic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-gray-700 hover:border-blue-500/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 text-left h-full text-white"
            style={{
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.1)',
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
              filmaatic.com
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
            Official website for   F . I . F . A . C
                        </p>
            <div className="mt-4 text-blue-300 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
              Explore →
            </div>
          </div>
          </a>

          {/* Card 3: Flaggurukulam */}
          <a
            href="https://flaggurukulam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-gray-700 hover:border-pink-500/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 text-left h-full text-white"
            style={{
              boxShadow: '0 0 30px rgba(236, 72, 153, 0.1)',
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-pink-300 to-red-200 bg-clip-text text-transparent">
              flaggurukulam.com
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
Official website for flaggurukulam            </p>
            <div className="mt-4 text-pink-300 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
              Explore →
            </div>
          </div>
          </a>

          {/* Card 4: LPCRM App */}
          <a
            href="https://lpcrm.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-gray-700 hover:border-green-500/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 text-left h-full text-white"
            style={{
              boxShadow: '0 0 30px rgba(34, 197, 94, 0.1)',
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-300 to-teal-200 bg-clip-text text-transparent">
              lpcrm
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
New CRM app for backend workflow ( beta-stage )            </p>
            <div className="mt-4 text-green-300 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
              Open App →
            </div>
          </div>
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default Hero;