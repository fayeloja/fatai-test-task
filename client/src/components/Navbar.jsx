export default function Navbar() {
  return (
    <nav className="bg-navbar-bg text-text-dark">
      <div className="py-5 px-5 md:px-20 flex justify-between shadow-lg">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src="./logo.svg"
              className="h-8 w-auto"
              alt="ABZ Agency Logo"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div>
          <button className="button mr-2">Users</button>
          <button className="button">Sign up</button>
        </div>
      </div>
    </nav>
  );
}
