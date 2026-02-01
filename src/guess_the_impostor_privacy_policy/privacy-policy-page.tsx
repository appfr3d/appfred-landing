export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
      <main className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            App: <span className="font-medium">Guess the Impostor</span>
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Company: <span className="font-medium">Appfred AS</span>
            <span className="mx-2">·</span>
            Effective date: <span className="font-medium">1 February 2026</span>
          </p>
        </header>

        <section className="space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="text-lg font-semibold">Summary</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Guess the Impostor does not collect any user data. The app does not
              connect to the internet.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <p className="text-gray-700 dark:text-gray-200">
              We do not collect, store, or transmit any personal data. This
              includes (but is not limited to) names, email addresses, precise
              location, contacts, identifiers, usage analytics, and crash reports.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Internet and Network Access</h2>
            <p className="text-gray-700 dark:text-gray-200">
              The app is designed to work fully offline and does not connect to
              the internet.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Third-Party Services</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Guess the Impostor does not use third-party analytics, advertising
              SDKs, or other third-party services that collect data.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Data Sharing</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Since we do not collect any data, we do not share any data with
              third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Data Retention</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Not applicable. We do not collect any data.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Children’s Privacy</h2>
            <p className="text-gray-700 dark:text-gray-200">
              We do not knowingly collect personal information from anyone,
              including children.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="text-gray-700 dark:text-gray-200">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:guesstheimposter@appfred.no"
                className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
              >
                guesstheimposter@appfred.no
              </a>
              .
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Changes to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-200">
              If we make changes to this policy, we will update this page and
              revise the effective date above.
            </p>
          </div>
        </section>

        <footer className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-300">
          <a
            href="/"
            className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
          >
            Back to appfred.no
          </a>
        </footer>
      </main>
    </div>
  );
}
