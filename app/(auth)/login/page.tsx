"use client";

import { useState } from 'react';
import Link from 'next/link';

type Tab = 'login' | 'register';

export default function LoginPage() {
  const [tab, setTab] = useState<Tab>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (tab === 'login') {
      if (email === 'test@example.com' && password === 'password') {
        alert('Inicio de sesión exitoso');
      } else {
        setError('Credenciales inválidas. Prueba con test@example.com / password');
      }
    } else {
      if (email && password && name) {
        alert('Cuenta creada. ¡Bienvenida!');
      } else {
        setError('Por favor, completa todos los campos.');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light text-deep-slate">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 md:px-20 py-4 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3 text-primary">
          <div className="size-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">Emprende Digital</h2>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="/">Inicio</Link>
            <Link className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="/courses">Cursos</Link>
            <a className="text-slate-600 text-sm font-medium hover:text-primary transition-colors" href="#">Comunidad</a>
          </nav>
          <button
            onClick={() => setTab('login')}
            className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-11 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95"
          >
            Iniciar Sesión
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: image + stats */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden group shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbXM1tpjWLtozZI0qypWy8ZxPaiaBtv4wJykPpnyMSJAKMRzNagbG93WnLDP15KIFAvkZnVkYPr8UzMLayulhX6Rji76opmMVgUh2lGXEAjN8BnxPKBqkN8HSoIkFm41lkVXOXRggIxtZAuVnNYfvadU42la9Yt6RaBXh62ETZMjE_2Ibzkj5HWERZG4UMgWDO2AEEWaRPA68LOpkomtjOJ57bQGrvQz6tvjdsomV1FiNlkWQ4OT8Ic53rjuLJ-IuEcRjZHaibLU8"
                alt="Confident female entrepreneur working with digital technology"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-4">
                  Plataforma Premium
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                  Bienvenida a tu <br /><span className="text-primary">futuro digital</span>
                </h1>
                <p className="text-slate-200 text-lg max-w-md">
                  Únete a la red más exclusiva de mujeres líderes que están transformando la industria tecnológica.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl mb-2">groups</span>
                <p className="text-2xl font-bold">15k+</p>
                <p className="text-slate-500 text-sm">Emprendedoras</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl mb-2">auto_awesome</span>
                <p className="text-2xl font-bold">4.9/5</p>
                <p className="text-slate-500 text-sm">Rating Global</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl mb-2">rocket_launch</span>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-slate-500 text-sm">Proyectos Lanzados</p>
              </div>
            </div>
          </div>

          {/* Right: auth form */}
          <div className="lg:col-span-5 flex flex-col order-1 lg:order-2">
            <div className="glass p-8 md:p-10 rounded-3xl shadow-xl flex flex-col h-full border border-white/40">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 mb-2">Empezar Ahora</h2>
                <p className="text-slate-500">Gestiona tu negocio digital desde un solo lugar.</p>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-200 mb-8">
                <button
                  onClick={() => { setTab('login'); setError(null); }}
                  className={`flex-1 pb-4 text-sm font-bold border-b-2 transition-colors ${tab === 'login' ? 'border-primary text-primary' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                >
                  Iniciar Sesión
                </button>
                <button
                  onClick={() => { setTab('register'); setError(null); }}
                  className={`flex-1 pb-4 text-sm font-bold border-b-2 transition-colors ${tab === 'register' ? 'border-primary text-primary' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                >
                  Crear Cuenta
                </button>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {error && (
                  <p className="text-sm text-red-500 bg-red-50 px-4 py-3 rounded-xl">{error}</p>
                )}

                {tab === 'register' && (
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Nombre completo</label>
                    <input
                      className="w-full h-14 px-4 rounded-xl bg-white border border-slate-200 text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400"
                      placeholder="Tu nombre"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Correo Electrónico</label>
                  <input
                    className="w-full h-14 px-4 rounded-xl bg-white border border-slate-200 text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400"
                    placeholder="ejemplo@correo.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-sm font-semibold text-slate-700">Contraseña</label>
                    {tab === 'login' && (
                      <a className="text-xs font-bold text-primary hover:underline" href="#">¿Olvidaste tu contraseña?</a>
                    )}
                  </div>
                  <input
                    className="w-full h-14 px-4 rounded-xl bg-white border border-slate-200 text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400"
                    placeholder="••••••••"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all mt-4"
                >
                  {tab === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
                </button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-3 text-slate-400 font-bold">O continúa con</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 h-12 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8cpnSyQgr3zk9zpl_RHnIfIxIJhAthBLntKJ04ihsTo9je9OjOHibnvLkPA5aPbES4GhHDk3IGBbE_zj_hkA3uGiDCKyVsRXKHQtn1U41iiw24SuMVhUNPimbV8DYldFaBptzBImVUUaXb_krjClHH3hgvQheMZVb5_cqyfKxF4GNNIUWiWD8My8WONZ52SolQBREfYitQ74B88XuL1Yw_-_OwP3LL58fwPS-8aDb_WjiyxOx2E7mqHt6d8aeTbRZ-AuiOcwLbjY" />
                  <span className="text-sm font-bold text-slate-700">Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 h-12 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="LinkedIn" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4ZqUNi_s0OdsldPkhv7ZNFJgDMY7dMhAdAjDc5PwvHohhpgFMsP7vqJsAXBzhZCm5eseFHrK7YEfdfjPn2es7lphei4StB2dugNZhuhgZhYaso8WoPqB-dlqGL5Poc-Eoxxyb57N1e_79suv0DdOyiz_8Y6Y9AcTXNoItKyqz0p7qzmtIOutSR-iTy5Kn9-uABj_889IfFVRGo-VVYVE1CMnjZWJJuon_p4O95V69kQxgV0wFrjthippcVrdF8XX3_nCjjn_eGHM" />
                  <span className="text-sm font-bold text-slate-700">LinkedIn</span>
                </button>
              </div>

              <p className="mt-auto pt-8 text-center text-xs text-slate-400">
                Al registrarte, aceptas nuestros{' '}
                <a className="underline text-slate-500" href="#">Términos de Servicio</a>{' '}y{' '}
                <a className="underline text-slate-500" href="#">Política de Privacidad</a>.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 py-8 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-bold tracking-widest text-xs uppercase">Branding Partner</span>
            <span className="text-slate-900 font-black text-sm italic">LagunaHack 2026</span>
          </div>
          <div className="flex gap-8">
            <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Soporte</a>
            <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Privacidad</a>
            <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Cookies</a>
          </div>
          <p className="text-slate-400 text-sm">© 2026 Emprende Digital. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}