import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { TiltImage } from "./components/TiltImage";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="text-center p-8">
        <TiltImage
          src="/image-of-me-square.webp"
          alt="Alfred Lieth Årøe, aka Appfred"
          className="w-48 h-48 mx-auto mb-8"
        />

        <h1 className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">
          Alfred Lieth Årøe
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
          aka Appfred
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Mobile App Developer
          <br />
          <span className="text-lg">
            React Native · Expo · TypeScript · Swift
          </span>
        </p>

        <div
          className="flex justify-center gap-6"
          role="navigation"
          aria-label="Social media links"
        >
          <a
            href="https://x.com/appfr3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Follow me on X (formerly Twitter)"
          >
            <FaXTwitter aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/alfred-lieth-aroe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Connect with me on LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href="https://github.com/appfr3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="View my projects on GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
