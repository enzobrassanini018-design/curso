
import React from 'react';
import { Module } from '../types';

interface CourseCardProps {
  module: Module;
  onAccess: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ module, onAccess }) => {
  return (
    <div className="bg-neutral-900/50 border border-green-500/30 p-6 rounded-xl hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all group">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-xl font-orbitron">
          {module.id}
        </div>
        <h3 className="text-xl font-bold font-orbitron group-hover:text-neon transition-colors">
          {module.title}
        </h3>
      </div>
      <p className="text-gray-400 mb-6 leading-relaxed">
        {module.description}
      </p>
      <ul className="space-y-3">
        {module.topics.map((topic, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            {topic}
          </li>
        ))}
      </ul>
      <button 
        onClick={onAccess}
        className="w-full mt-8 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold rounded-md transition-all text-sm uppercase tracking-wider font-orbitron"
      >
        Acessar Aulas
      </button>
    </div>
  );
};

export default CourseCard;
