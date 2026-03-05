"use client";

import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = ['All Courses', 'Marketing', 'Finance', 'Tech', 'Design'];

const COURSES = [
  {
    id: 1,
    featured: true,
    title: 'Digital Marketing Mastery 2024',
    description: 'Learn the end-to-end strategies to scale your startup from zero to hero in the digital space.',
    instructor: 'Sarah Jenkins',
    duration: '24h Course',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp7WjPFreCMIwIi08d5J8IjDglqnGauiqG0BiNPIItWYpTXw2aPbCNhQL08UON8lFu1Ofnuv7ZC3YSnwAmnLxDYWqDQf2A2zwhgxGoKkH-31zc1Ot0L10PKJkcEGsNlvmaZdlSXNewSbZv47zW2TTFF43-xdQCwRdT_5opoMHlm3gg9F6jJLEMeoA6Y3aP-ZNK2bht4oRaKtWCa84uJ-RyhLk8QVYZxMocuOkfm76pPLIbPOqLc0Q_sxTEKqfY5DCRpENAJaraTnY',
    category: 'Marketing',
  },
  {
    id: 2,
    featured: false,
    title: 'Financial Planning for Startups',
    description: '',
    instructor: 'Michael Chen',
    duration: '8h Course',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLCCnKuyitlf1fYbUTuCcYtZvYqoLXVfrYfw2CoK5_OgGjh10tGFQffIzQ7iDRV0Y2x9BTq35A-J5kjkMRlxKXlrkXnW74tBH9TgR-bT0GFMVwT-GyXZhIoDOhAiWFlKPryW5XI6uGoP1LtFmc6rNlNk9QZE7t3igGJNbPRn5VWKVDvoRGjhjME6kO95A5PxJE-4I3nnn_dnC7ala2j7jkqVPTI-WFwnaDFY1QByQIEFQkAuIag_0FsrE1UunMv8cfLjzklNqh5Es',
    category: 'Finance',
    layout: 'horizontal',
  },
  {
    id: 3,
    featured: false,
    title: 'Full-Stack Web Dev Bootcamp',
    description: '',
    instructor: 'Alex Rivera',
    duration: '45h Course',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXtyxiWhiQtWS15BymSBuvPkGWt372uYz3r_xyZdSeRLaYcG6xD6stBxVcTCLuBq76kLazFeTjR77p1iW1VPeQo4lvvEn-1sWCHB7VrPxXZd_x9ahj_Pn0S3Za9eZx-L0Lpv6FKfKlJd8VEjb1RepPVZ5EY8rEmQi5vy7dT6Vlvdnx74XkFwsNTeipEbbVXRAjCgfBRHOIPKfDmA2NBfmvNB5nE8EA8BZjOOw3V-Gef5CYw4sw9NJJJXiodXYn0Hk4x6s5RKiMZcs',
    category: 'Tech',
    layout: 'horizontal',
  },
  {
    id: 4,
    featured: false,
    title: 'Social Media Strategy',
    description: 'Master TikTok, IG Reels and viral growth hacks.',
    instructor: 'Elena Rodriguez',
    duration: '10h Course',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHWDMUkI2c4zY01voZPNiX1Uqz3BX3kezvSktLvsBYvo_VPNrEyPEEScdyhIo8gzMpKamVY9a7Q-byOAC7kCc5B7VTNkyVFW7T4nw0xClZU3dJmHMLu8r3XKnE_5Pkx1KTk6WPiH4b8wxtZk_9Be5EoqGuSNWWWOK6FtacqYxdyLhbvjIwr6EFXCBQIWVg1FzySh561GmqsIINHJQJfaSZM9etw4Kjf4wDyLVNH1Xd3WziaeDxSDF92LBbU81BMfoPfU78FqZY7No',
    category: 'Marketing',
    layout: 'small',
  },
  {
    id: 5,
    featured: false,
    title: 'Venture Capital Essentials',
    description: 'How to pitch and raise your first seed round.',
    instructor: 'David Smith',
    duration: '6h Course',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvQnDmP6NHVCeMx8XRE5og_2YjtX_-fLOrNcJ0zhMbMgc57Yk3_lLBJKOCxnmiEsq3G_ALDeHbIJsLGtKeY6aXUU00dErusisIRvrNWWpmU_gmDl_o2yHDgdHImbCIODR1NDldQszCOq4lSAS20SmZKeNkZAa8jmMnUbBrLQnTDtbTCewLrMF_005IRJv_gOjXvBbOvFB2LqH3cDp57kNeIUyaWxzx08rzaD07gYxgzS0MH9uZmcXhkzhj35mSZB-eeaWunyBDXbg',
    category: 'Finance',
    layout: 'small',
  },
  {
    id: 6,
    featured: false,
    title: 'Cloud Architecture',
    description: 'Scalable infrastructure for SaaS products.',
    instructor: 'Jordan Lee',
    duration: '20h Course',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKDCnYGB0z-COfCK85p7D4lFVu_e-O7qsFU2lBYDoOd4Cs-DCUZtLFKCfFakIjLYq_p7Z8J2m8nNh5b6J2TZSJ_BDS6ZXHEEX1YTVs89ltcAxUdpdlG4cm1qcId9cUq_8KjGNgWKpM87iWqWrODTRfh8JmI894a2YR9_c8JzmDLPvCiR2zYfx3U5SAYsDVqf8Wcgu51TATF5hmStNttAMVJPSKPZ1zgdPh4suThP74xr3zqZtVz1gvsXZPSQWwNxfUOrGrL8Qwk9o',
    category: 'Tech',
    layout: 'small',
  },
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All Courses');
  const [search, setSearch] = useState('');

  const filtered = COURSES.filter((c) => {
    const matchCat = activeCategory === 'All Courses' || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find((c) => c.featured);
  const rest = filtered.filter((c) => !c.featured);
  const horizontal = rest.filter((c) => c.layout === 'horizontal');
  const small = rest.filter((c) => c.layout === 'small');

  return (
    <div className="min-h-screen flex flex-col bg-background-light text-deep-slate">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">rocket_launch</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Emprende Digital</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="/courses">Cursos</Link>
              <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Instructores</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Precios</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Recursos</a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="hidden sm:block text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Iniciar Sesión
              </Link>
              <Link href="/login" className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-primary/25">
                Empezar
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Catálogo de Cursos
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Domina las habilidades digitales necesarias para escalar tu negocio con masterclasses impartidas por expertos.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="w-full md:max-w-md">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
              <input
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"
                placeholder="Buscar cursos..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {/* Featured */}
          {featured && (
            <div className="md:col-span-2 lg:col-span-3 lg:row-span-2 bg-white rounded-xl overflow-hidden border border-slate-200 flex flex-col group shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url("${featured.image}")` }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">Destacado</span>
                  <span className="px-3 py-1 bg-accent-rose text-white text-xs font-bold rounded-full">Más Vendido</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{featured.title}</h3>
                  <p className="text-slate-600 mb-6">{featured.description}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">person</span>
                      {featured.instructor}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">schedule</span>
                      {featured.duration}
                    </div>
                  </div>
                </div>
                <button className="w-full py-3.5 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2">
                  Ver más <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* Horizontal cards */}
          {horizontal.map((course) => (
            <div key={course.id} className="md:col-span-2 lg:col-span-3 bg-white rounded-xl overflow-hidden border border-slate-200 flex flex-col sm:flex-row group hover:shadow-lg transition-shadow">
              <div className="w-full sm:w-2/5 relative h-48 sm:h-auto overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${course.image}")` }}
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                    <span>{course.instructor}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <button className="w-full py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-lg transition-all text-sm">
                  Ver más
                </button>
              </div>
            </div>
          ))}

          {/* Small cards */}
          {small.map((course) => (
            <div key={course.id} className="md:col-span-2 lg:col-span-2 bg-white rounded-xl overflow-hidden border border-slate-200 flex flex-col group hover:shadow-lg transition-shadow">
              <div className="h-40 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${course.image}")` }}
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{course.title}</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{course.description}</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-400">{course.instructor}</span>
                    <span className="text-xs text-primary font-bold">{course.duration}</span>
                  </div>
                  <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-20 text-slate-400">
              <span className="material-symbols-outlined text-5xl mb-4 block">search_off</span>
              <p className="text-lg font-semibold">No se encontraron cursos</p>
              <p className="text-sm">Intenta con otra búsqueda o categoría</p>
            </div>
          )}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:border-primary transition-colors flex items-center gap-2">
            Ver más cursos
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="size-6 bg-primary rounded-md flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
            </div>
            <span className="font-bold tracking-tight">Emprende Digital</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Emprende Digital. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
