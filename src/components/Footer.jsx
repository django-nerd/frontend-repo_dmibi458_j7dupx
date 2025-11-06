export default function Footer() {
  return (
    <footer id="kontakt" className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-900">Nachfolge.Mittelstand</h3>
            <p className="mt-3">Die Community für Unternehmensnachfolge im Mittelstand.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Angebot</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#vorteile" className="hover:text-gray-900">Vorteile</a></li>
              <li><a href="#wissen" className="hover:text-gray-900">Wissenshub</a></li>
              <li><a href="#dialog" className="hover:text-gray-900">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Rechtliches</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-gray-900">Impressum</a></li>
              <li><a href="#" className="hover:text-gray-900">Datenschutz</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Kontakt</h4>
            <p className="mt-3">E-Mail: hallo@nachfolge-mittelstand.de</p>
            <p>LinkedIn: @nachfolgemittelstand</p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Nachfolge.Mittelstand</p>
          <p>Made with ❤️ in DACH</p>
        </div>
      </div>
    </footer>
  );
}
