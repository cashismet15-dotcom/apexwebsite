export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">Asistan360</div>
          <nav>
            <a
              href="#hizmetler"
              className="text-white ml-8 hover:opacity-80 transition-opacity duration-300"
            >
              Hizmetler
            </a>
            <a
              href="#iletisim"
              className="text-white ml-8 hover:opacity-80 transition-opacity duration-300"
            >
              İletişim
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
