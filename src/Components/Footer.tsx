function Footer() {
  return (
    <footer className="p-6 bg-gray-200 dark:bg-gray-900 text-gray-600 dark:text-gray-400 ">
      <div className="dark:bg-gray-900 bg-white shadow-[0_0_15px] dark:shadow-gray-950  shadow-blue-100 rounded-lg p-3 text-gray-600 flex flex-col gap-3 items-center ">
        <div>FocusRoom</div>

        <div>© {new Date().getFullYear()} FocusRoom. All rights reserved.</div>
        <div>
          <a
            href="https://github.com/chimamartins"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          |
          <a
            href="https://www.linkedin.com/in/chimamartins"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          |
          <a href="#" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
