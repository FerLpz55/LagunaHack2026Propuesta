export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-indigo-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <h2 className="text-deep-slate text-xl font-extrabold tracking-tight">Emprende Digital</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#">Cursos</a>
            <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#">Mentorías</a>
            <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#">Herramientas</a>
            <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#">Comunidad</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center rounded-xl h-11 px-6 bg-primary text-white text-sm font-bold shadow-soft hover:opacity-90 transition-all">
              Empezar Ahora
            </button>
            <button className="md:hidden text-deep-slate">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-16 md:py-24 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              LagunaHack 2026 Innovation
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-deep-slate">
              Impulsa tu visión <span className="text-primary">digital</span> con propósito.
            </h1>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              Combinamos tecnología de vanguardia con empoderamiento humano para formar a la próxima generación de líderes digitales.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="h-14 px-8 bg-primary text-white rounded-2xl font-bold text-lg shadow-soft hover:translate-y-[-2px] transition-all">
                Explorar Programas
              </button>
              <button className="h-14 px-8 bg-white border border-slate-200 text-deep-slate rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                Ver Demo
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full">
            <div className="aspect-[4/5] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-deep-slate/40 to-transparent"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Modern female entrepreneur in a clean workspace"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMjpPYjteoXwTng2vfRMwiwGMIH-S-D6L6sjhBq9JhnluY-_Zn9SQmCgxbP1ARc-uEk6NwHkyF8Z44S51jZ0P7CtNqPIDxxGaluGPHrIrxidVSP4sy9cneHJAf0p0OBytBLKQ7QHhx6nbGMphOZhqgzq0GUbskIbKt4SEfxV8SRHw0Tlz6mL5AZuT94OffhvnlrP23GsNH1c9CJnrlD6pFia_MzXaOMoeJYf5mxJYN2BbkVa2JICrZovV72zwy_6uTNJmBKnL4zw"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-indigo-100 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <p className="font-bold text-deep-slate">Metodología Comprobada</p>
                    <p className="text-sm text-slate-500">+10k Graduados exitosos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 size-24 bg-accent-peach rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 size-40 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
          </div>
        </section>

        {/* Bento Grid Pillars */}
        <section className="py-20">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-deep-slate mb-4">Nuestros Pilares</h2>
            <p className="text-slate-500">Todo lo que necesitas para escalar tu negocio en un solo lugar.</p>
          </div>
          <div className="bento-grid">
            {/* Large Tile: Cursos */}
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-deep-slate rounded-2xl p-10 flex flex-col justify-between text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[120px]">school</span>
              </div>
              <div className="relative z-10">
                <span className="px-4 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest border border-white/20">Academia</span>
                <h3 className="text-4xl font-bold mt-6 mb-4">Cursos Prácticos</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                  Aprende haciendo con proyectos reales diseñados por expertos de la industria tecnológica actual.
                </p>
              </div>
              <div className="relative z-10 pt-8">
                <button className="px-6 py-3 bg-white text-deep-slate rounded-xl font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Ver catálogo <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Tile: Mentorías */}
            <div className="col-span-1 md:col-span-2 bg-accent-peach rounded-2xl p-8 flex flex-col justify-between border border-pink-100 relative overflow-hidden">
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-deep-slate mb-2">Mentorías 1 a 1</h3>
                  <p className="text-slate-600 max-w-xs">Acceso directo a fundadores y especialistas para desbloquear tu crecimiento.</p>
                </div>
                <div className="size-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">diversity_3</span>
                </div>
              </div>
              <div className="flex -space-x-4 mt-6">
                <div className="size-12 rounded-full border-4 border-accent-peach bg-slate-300 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Mentor 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWoD8hYWPfaztU3tBzY7tA7--PvKGNn7nqiZJQz9IXnixj7V2Caz70CHkW_SnnmVv9rLKOGiof0r1En0V9SoIsGAkLmvXqnsuyyJqpUzJeHDBJhaCD7hd2hJ2rSeYw7_pwMekwD4_-Z67c8qrgKWp3vf34xLlcrv7ysWLtgBIhay-uusAWyLXiVuAApcwsjpMtMa8ZEE2rSEu4lozLQjFVFg-Sk44Oegv58OpDo8bELni5X5UMq7V3E3UOikFNlN07RKvP8D8BvC4" />
                </div>
                <div className="size-12 rounded-full border-4 border-accent-peach bg-slate-400 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Mentor 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqmJ1xsOqTP4XSxlfxRz0nP8tpiJHQgmePHqgellpw35eThHO1aia8tU-pMMoN3LLHAcWSP8wlFru8Ihd5l1-gY3gLc7XB0Wx0nlD7dMw-h0JIKpg-UkD6v8De-JP94sqFR0MtzZw8iSnpu8pDvdY4pzlOp81q3kg0lnmTd02kL5tEMtkoDCrsH9YuFg-aQIwdmaGRBxewnULdgs-JRoCXhJhfFkEQxMnfYBPeEwbg3hHPK_5Cldb6MMFSlQVJiuH8YjY7ihkhoDg" />
                </div>
                <div className="size-12 rounded-full border-4 border-accent-peach bg-slate-500 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Mentor 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9ISFl468s5XUOQ8CSv1GmQvICt3jy6aLrpl-Q07dSGnSS7H_MGhEQLdL7iXWJpa6BJjvQ2VzfMAiHPBOYdzReJpxikxRalon77Tz80UUMhdHvaNmHv5NfzhTJWKbO01nK0uUd-jg1t75-vvlnkZteX_8IgrKOebdU3ZyBSdE_h-d4f3cOj_3X1u0FFIxS8LSVPTwE_v2Wt48iakTIWTjfbhCoFFFSXQ-Nd3kXSjudwbxIrlnK00fvorg5wZqSFc4X7jUdRI5ApEI" />
                </div>
                <div className="size-12 rounded-full border-4 border-accent-peach bg-primary flex items-center justify-center text-white text-xs font-bold">+50</div>
              </div>
            </div>

            {/* Tile: Herramientas */}
            <div className="col-span-1 bg-white border border-slate-100 rounded-2xl p-8 flex flex-col gap-4 shadow-soft">
              <div className="size-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">construction</span>
              </div>
              <h3 className="text-xl font-bold text-deep-slate">Herramientas Pro</h3>
              <p className="text-slate-500 text-sm">Templates, frameworks y software exclusivo para tu startup.</p>
            </div>

            {/* Tile: Comunidad */}
            <div className="col-span-1 bg-primary rounded-2xl p-8 flex flex-col justify-between text-white overflow-hidden relative">
              <div className="absolute bottom-0 right-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1),transparent)]"></div>
              <h3 className="text-xl font-bold relative z-10">Comunidad Global</h3>
              <div className="flex items-center gap-2 relative z-10">
                <span className="text-3xl font-extrabold tracking-tighter">150k</span>
                <span className="text-xs font-medium text-white/80 uppercase">Miembros</span>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20">
          <div className="bg-white rounded-2xl p-8 md:p-16 shadow-soft border border-slate-100 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-deep-slate">Calcula tu Potencial</h2>
              <p className="text-slate-500 leading-relaxed">
                Visualiza el impacto de escalar tus habilidades digitales. Nuestra herramienta de proyección estima tu retorno de inversión basado en datos del mercado actual.
              </p>
              <div className="p-6 bg-accent-peach/50 rounded-2xl border border-pink-50">
                <div className="flex items-center gap-4 text-indigo-900 font-medium">
                  <span className="material-symbols-outlined">info</span>
                  <p className="text-sm">Datos actualizados según LagunaHack Report 2026.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md bg-slate-50 p-8 rounded-2xl space-y-10">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Inversión Mensual</label>
                  <span className="text-primary font-bold text-lg">$499</span>
                </div>
                <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Tiempo de estudio</label>
                  <span className="text-primary font-bold text-lg">6 Meses</span>
                </div>
                <input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
              </div>
              <div className="pt-6 border-t border-slate-200">
                <div className="bg-deep-slate text-white p-8 rounded-2xl text-center space-y-2 transform hover:scale-105 transition-transform">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Ingresos proyectados</p>
                  <h3 className="text-5xl font-black text-white">$12,450<span className="text-primary text-2xl">/mo</span></h3>
                </div>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:opacity-90 transition-all">
                Obtener mi Plan Personalizado
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-deep-slate">Historias de éxito</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full md:w-80 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
              <p className="text-slate-600 italic">&quot;Emprende Digital cambió por completo mi enfoque sobre cómo lanzar un producto SAAS. Las mentorías son invaluables.&quot;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Ana Martínez" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXgTzfdpZDowHbugR8GGCH5abKUDA3pbdhnhHfWcOWDDP8prygGd060k9tuBvSrsjYPttT0JJIqe6owrJWPJU-i-FbpGMhxcNuMXzCM_WLKdDEs3vBGI77Ec69ODYJFHJzOcEYMNtXGz7HzCbic_bn7GFgVhrC22yChMHy0O3xThFuhPa7EeYkFSaEruQDoFnm8R-LcuLI_YXW6MMSYKdMaA1R0OAyNvMB5JDHPxhGkNt9rtk31mae9fR291LMFD6D2YTf55SxmUk" />
                </div>
                <div>
                  <p className="text-sm font-bold text-deep-slate">Ana Martínez</p>
                  <p className="text-xs text-slate-400">Founder @ TechGrow</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-80 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
              <p className="text-slate-600 italic">&quot;El acceso a las herramientas Pro me ahorró miles de dólares en suscripciones y meses de investigación.&quot;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Carlos Ruiz" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCruE503e59OyTmClH1d1Ra-r-_6kOg5OBasGtlEBE-nXy789Iry4AY6BVH6oNJ3yC4OlYfZ89OETBKc82gAgIV87wFe4sjQEi4tbxvQjlSieMD9AAbN9T6ysq-NG1ri2O_Cl51Cqh_QOap0JrEcdQxmwpWHduEpvnJUWjwA13SUzv-U9e_AhftroJ7moFOTiZo-Jcks9REAMVlqOydAc07uzOVSifsE6mZYyoWOsZR1KsOMV9w7ZzW5b-rg4-wF8PJj26-A0n0qRo" />
                </div>
                <div>
                  <p className="text-sm font-bold text-deep-slate">Carlos Ruiz</p>
                  <p className="text-xs text-slate-400">Digital Nomad</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-80 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
              <p className="text-slate-600 italic">&quot;La comunidad es vibrante. Encontré a mis co-fundadores en el canal de Slack de Emprende Digital.&quot;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Lucía Domínguez" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5YM6I_KdmU1x6As38n0RaF7n9eqlBvegowpIH-ABt__s_rOD3fmRNJe6bG2_MzjCLu3V9CEVbkokGJbFSBpLGakLzC8s33YrXn_uexoqzZ37f0Jt0fss8e2d_cSI_On8-MOlPZ1Q0KfdYFBLbU9ceg5lzW51ZMwWu0EpiwkcBH9iQU2Gx1UsnICMogkNxEWWVum5mu9319RrkL41HogpLsPPqlwaW3Dz0GOKzZnThUzkuF2ZI96Fr6W4oJqNT2_WU8qVkNE_um6U" />
                </div>
                <div>
                  <p className="text-sm font-bold text-deep-slate">Lucía Domínguez</p>
                  <p className="text-xs text-slate-400">CEO @ InnovaApp</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
            </div>
            <h2 className="text-deep-slate text-lg font-extrabold">Emprende Digital</h2>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-400 text-sm">© 2024 Emprende Digital. Todos los derechos reservados.</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-200">
              Proyecto para <span className="text-primary">LagunaHack 2026</span>
            </div>
          </div>
          <div className="flex gap-6 text-slate-400">
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">hub</span></a>
          </div>
        </div>
      </footer>
    </>
  );
}
