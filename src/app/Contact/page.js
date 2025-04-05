'use client';

export default function ContactPage() {
  return (
    <div className="flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg p-8 bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <span>📬</span> Contact Us
        </h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              required
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              required
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Write subject here"
              required
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2"
          >
            📤 Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
