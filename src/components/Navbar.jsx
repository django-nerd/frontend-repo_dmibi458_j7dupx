import { Users, MessageSquare } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
            <Users className="h-6 w-6 text-white" />
          </div>
          <span className="font-semibold text-gray-900">Nachfolge.Mittelstand</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#vorteile" className="hover:text-gray-900">Vorteile</a>
          <a href="#wissen" className="hover:text-gray-900">Wissenshub</a>
          <a href="#dialog" className="hover:text-gray-900 flex items-center gap-2"><MessageSquare className="h-4 w-4"/>Dialog</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#mitglied-werden" className="hidden sm:inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50">Mitglied werden</a>
          <a href="#kontakt" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Kontakt</a>
        </div>
      </div>
    </header>
  );
}
