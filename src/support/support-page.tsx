export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-200 dark:bg-gray-900 dark:text-gray-100">
      <main className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Company: <span className="font-medium">Appfred AS</span>
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            App Support
          </h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Official support page for Appfred apps on the App Store.
          </p>
        </header>

        <section className="space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="text-lg font-semibold">How to contact support</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Contact Appfred for app issues, bug reports, general feedback,
              billing questions, and feature enhancement requests.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:alfred@appfred.no"
                className="inline-flex min-h-11 items-center rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
              >
                Email support
              </a>
              <a
                href="tel:+4797504209"
                className="inline-flex min-h-11 items-center rounded-full border border-teal-700 px-5 py-2.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50 dark:border-teal-300 dark:text-teal-300 dark:hover:bg-teal-950/40"
              >
                Call support
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Support topics</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-200">
              <li>Questions about how an Appfred app works</li>
              <li>Reports about bugs or unexpected behavior</li>
              <li>General feedback and feature enhancement requests</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Contact information</h2>
            <dl className="space-y-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div>
                <dt className="font-medium text-gray-900 dark:text-gray-100">
                  Email
                </dt>
                <dd className="mt-1 text-gray-700 dark:text-gray-200">
                  <a
                    href="mailto:alfred@appfred.no"
                    className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    alfred@appfred.no
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900 dark:text-gray-100">
                  Telephone
                </dt>
                <dd className="mt-1 text-gray-700 dark:text-gray-200">
                  <a
                    href="tel:+4797504209"
                    className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    +47 975 04 209
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900 dark:text-gray-100">
                  Legal address
                </dt>
                <dd className="mt-1 text-gray-700 dark:text-gray-200">
                  Osterhaus&apos; gate 25
                  <br />
                  0183 Oslo
                  <br />
                  Norway
                </dd>
              </div>
            </dl>
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