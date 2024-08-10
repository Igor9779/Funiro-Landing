import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative h-[100px] flex items-center p-6 pl-[100px]">
      {/* Основной фон #FCF8F3 */}
      <div className="absolute inset-0 bg-[#FCF8F3] h-full" />

      {/* Наложенный фон #F9F1E7 */}
      <div className="absolute left-0 w-[964px] h-full bg-[#F9F1E7]" />

      <div className="relative flex items-center flex-1 z-10">
        <Link href="/" className="text-2xl font-bold mr-[40px]">Funiro.</Link>
        <div className="flex-1 flex items-center mx-6">
          <nav className="flex space-x-6 mr-[43px]">
            <Link href="/products" className="flex items-center">
              Products
              <span className="ml-2">
                <img src="/assets/Icon/Arrow-down.svg" alt="Arrow Down" className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/rooms" className="flex items-center">
              Rooms
              <span className="ml-2">
                <img src="/assets/Icon/Arrow-down.svg" alt="Arrow Down" className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/inspirations">Inspirations</Link>
          </nav>
          <div className="relative w-[470px] mr-[120px]">
            <input
              type="text"
              placeholder="Search for minimalist chair"
              className="border px-10 py-2 rounded-md w-full focus:outline-none"
            />
            <img
              src="/assets/Icon/Search.svg"
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
        </div>
        <div className="flex space-x-[32px]">
          <button className="bg-transparent p-0 rounded-md">
            <img src="/assets/Icon/Heart.svg" alt="Heart" className="w-6 h-6" />
          </button>
          <button className="bg-transparent p-0 rounded-md">
            <img src="/assets/Icon/Cart.svg" alt="Cart" className="w-6 h-6" />
          </button>
          <a>
            <img src="/assets/avatar.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
          </a>
        </div>
      </div>
    </header>
  );
}
