import { Mail, Linkedin, MapPin } from 'lucide-react';
import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-ink">{profile.name}</h3>
          <p className="text-sm text-slate-500 mt-1">{profile.role}</p>
          <p className="text-sm text-slate-500 mt-3 max-w-xs">
            Strategic talent partner helping growing companies build extraordinary teams.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-ink mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-brand" />
              <a href={`mailto:${profile.email}`} className="hover:text-brand">{profile.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={14} className="text-brand" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-brand" />
              <span>{profile.location}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-ink mb-3">Focus areas</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Executive Search</li>
            <li>Hiring Strategy & Workforce Planning</li>
            <li>DEI Recruiting</li>
            <li>Employer Branding</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-slate-500 flex justify-between">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Built with care.</span>
        </div>
      </div>
    </footer>
  );
}
