import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import '../styles/team.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Anderson',
    role: 'Creative Director',
    bio: 'Leads the creative vision with passion and innovation at the heart of every project.',
    skills: ['Design', 'Strategy', 'Leadership', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'UX/UI Designer',
    bio: 'Crafts intuitive user experiences that delight and engage our audience.',
    skills: ['Figma', 'Prototyping', 'User Research', 'Typography'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'Elena Rossi',
    role: 'Brand Strategist',
    bio: 'Develops compelling brand narratives that resonate with global audiences.',
    skills: ['Branding', 'Strategy', 'Communication', 'Research'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop',
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Visual Designer',
    bio: 'Creates stunning visual compositions that bring ideas to life.',
    skills: ['Illustration', 'Animation', 'Motion', 'Conceptualization'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
  },
  {
    id: 5,
    name: 'Jessica Martinez',
    role: 'Design Researcher',
    bio: 'Uncovers insights through human-centered research methodologies.',
    skills: ['Research', 'Analysis', 'Testing', 'Insights'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babf7d?w=500&h=500&fit=crop',
  },
  {
    id: 6,
    name: 'Alex Thompson',
    role: 'Art Director',
    bio: 'Directs visual storytelling across all mediums and platforms.',
    skills: ['Direction', 'Composition', 'Color Theory', 'Storytelling'],
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&h=500&fit=crop',
  },
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const itemsPerPage = 3;
  const maxIndex = Math.ceil(teamMembers.length / itemsPerPage) - 1;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const timer = setTimeout(() => setIsScrolling(false), 500);
      return () => clearTimeout(timer);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleMembers = teamMembers.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="team-page bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            DESIGN by <span className="text-blue-500">TEAM</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-500 transition">DESIGN PROCESS</a>
            <a href="#" className="hover:text-blue-500 transition">OUR TEAM</a>
            <a href="#" className="hover:text-blue-500 transition">FUTURE</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="ken-burns-container w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
              alt="Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-2xl animate-fade-in">
          <span className="section-tag text-blue-500 text-sm font-semibold tracking-widest mb-4 block">
            SECTION 2
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Immersion at the heart of our teams
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Behind the scenes of our creative process: passion, inclusiveness and team spirit
            at the heart of our innovations.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 bg-black border-b border-white/10">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-gray-500">Creative Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              A diverse group of talented designers, strategists, and innovators working
              together to create exceptional experiences.
            </p>
          </div>

          {/* Team Grid with Navigation */}
          <div className="relative">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {visibleMembers.map((member) => (
                <div
                  key={member.id}
                  className={cn(
                    'team-card group cursor-default transition-all duration-500',
                    isScrolling && 'opacity-75'
                  )}
                >
                  {/* Image Container */}
                  <div className="relative mb-6 overflow-hidden rounded-lg aspect-square bg-white/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-xs font-semibold text-white bg-black/70 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.role}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-500 font-semibold text-sm">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-white/5 border border-white/10 text-white px-3 py-1 rounded-full hover:bg-white/10 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-12">
              <button
                onClick={() => navigate('prev')}
                disabled={currentIndex === 0}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                  currentIndex === 0
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:bg-white/10 hover:text-blue-500'
                )}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      i === currentIndex ? 'bg-blue-500 w-8' : 'bg-white/20'
                    )}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => navigate('next')}
                disabled={currentIndex === maxIndex}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                  currentIndex === maxIndex
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:bg-white/10 hover:text-blue-500'
                )}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-black border-b border-white/10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-gray-500">Core Values</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Passion',
                description:
                  'We bring passion to every project, believing that great design comes from genuine care and enthusiasm.',
              },
              {
                title: 'Inclusiveness',
                description:
                  'We design for everyone, ensuring our work is accessible, respectful, and celebrates diversity.',
              },
              {
                title: 'Innovation',
                description:
                  'We push boundaries and explore new possibilities, constantly evolving our creative approaches.',
              },
              {
                title: 'Team Spirit',
                description:
                  'We believe in the power of collaboration, where diverse talents combine to create something extraordinary.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="border border-white/10 rounded-lg p-6 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 bg-black/50">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Get in touch with our team to discuss your next creative project.
          </p>
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300">
            Contact Us
          </button>
          <p className="text-gray-500 text-sm mt-8">
            © 2024 Design Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
