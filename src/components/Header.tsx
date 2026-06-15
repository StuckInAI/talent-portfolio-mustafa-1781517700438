import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Users } from 'lucide-react';
import clsx from 'clsx';
import { nav, profile } from '@/lib/data';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-lg bg-brand text-white flex items-center justify-center shadow-sm group-hover:bg-brand-dark transition">
            <Users size={18} />
          </span>
          <div className="leading-tight">
            <div className="font-semibold text-ink">{profile.name}</div>
            <div className="text-xs text-slate-500">{profile.role}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                clsx(
                  'px-3 py-2 rounded-md text-sm font-medium transition',
                  isActive
                    ? 'text-brand bg-teal-50'
                    : 'text-slate-600 hover:text-brand hover:bg-slate-50'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-4 py-2 rounded-md bg-brand text-white text-sm font-medium hover:bg-brand-dark transition"
          >
            Get in touch
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-3 flex flex-col gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    'px-3 py-2 rounded-md text-sm font-medium',
                    isActive ? 'text-brand bg-teal-50' : 'text-slate-700 hover:bg-slate-50'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
