import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="text-center p-8">
        <img
          src="/image-of-me-square.jpeg"
          alt="Alfred Lieth Årøe, aka Appfred"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover ring-2 ring-gray-200 dark:ring-gray-700"
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

        <div className="flex justify-center gap-6">
          <a
            href="https://x.com/appfr3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://linkedin.com/in/alfred-lieth-aroe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/appfr3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
