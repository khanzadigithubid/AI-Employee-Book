'use client';

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useI18n } from '@/i18n/context';
import { chapters } from '@/data/translated-chapters';

export default function Contact() {
  const { language } = useI18n();

  // Get the current language's chapters
  const currentLanguageChapters = chapters.map(chapter => chapter.translations[language]);
  const contactContent = currentLanguageChapters[9]; // Using tenth chapter's content as contact info

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] dark:bg-[#1C1C1C]">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-2xl shadow-xl p-8 mb-12 border border-[#E5E5E5] dark:border-[#2A2A2A]">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-6 text-center">
            {t(TRANSLATION_KEYS.CONTACT)}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">Get in Touch</h2>
              <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-6">
                {contactContent.summary}
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#F0F0EA] dark:bg-[#2A2A2A] p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2A6F97] dark:text-[#8ECae6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FFFFFF]">Email</h3>
                    <p className="text-[#2B2B2B] dark:text-[#DADADA]">contact@aieployeebook.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#F0F0EA] dark:bg-[#2A2A2A] p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2A6F97] dark:text-[#8ECae6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FFFFFF]">Phone</h3>
                    <p className="text-[#2B2B2B] dark:text-[#DADADA]">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#F0F0EA] dark:bg-[#2A2A2A] p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2A6F97] dark:text-[#8ECae6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FFFFFF]">Office</h3>
                    <p className="text-[#2B2B2B] dark:text-[#DADADA]">123 Innovation Drive<br />San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2B2B2B] dark:text-[#DADADA] mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] rounded-lg focus:ring-2 focus:ring-[#2A6F97] focus:border-[#2A6F97] bg-[#FAF7F2] dark:bg-[#2A2A2A] text-[#2B2B2B] dark:text-[#DADADA]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2B2B2B] dark:text-[#DADADA] mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] rounded-lg focus:ring-2 focus:ring-[#2A6F97] focus:border-[#2A6F97] bg-[#FAF7F2] dark:bg-[#2A2A2A] text-[#2B2B2B] dark:text-[#DADADA]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2B2B2B] dark:text-[#DADADA] mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] rounded-lg focus:ring-2 focus:ring-[#2A6F97] focus:border-[#2A6F97] bg-[#FAF7F2] dark:bg-[#2A2A2A] text-[#2B2B2B] dark:text-[#DADADA]"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2B2B2B] dark:text-[#DADADA] mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-[#2A2A2A] rounded-lg focus:ring-2 focus:ring-[#2A6F97] focus:border-[#2A6F97] bg-[#FAF7F2] dark:bg-[#2A2A2A] text-[#2B2B2B] dark:text-[#DADADA]"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2A6F97] hover:bg-[#215978] text-white font-medium py-3 px-4 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E5E5E5] dark:border-[#2A2A2A]">
            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-[#F0F0EA] dark:bg-[#2A2A2A] p-4 rounded-lg">
                <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FFFFFF]">How can I get updates about new AI employee technologies?</h3>
                <p className="text-[#2B2B2B] dark:text-[#DADADA] mt-1">{contactContent.keyTakeaways[0] || 'Subscribe to our newsletter for the latest insights on AI developments and workplace integration strategies.'}</p>
              </div>

              <div className="bg-[#F0F0EA] dark:bg-[#2A2A2A] p-4 rounded-lg">
                <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FFFFFF]">Do you offer consulting services for AI implementation?</h3>
                <p className="text-[#2B2B2B] dark:text-[#DADADA] mt-1">{contactContent.keyTakeaways[1] || 'Yes, we provide consulting services to help organizations implement AI employees effectively. Contact us for more information.'}</p>
              </div>

              <div className="bg-[#F0F0EA] dark:bg-[#2A2A2A] p-4 rounded-lg">
                <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FFFFFF]">Can I request a topic for future editions?</h3>
                <p className="text-[#2B2B2B] dark:text-[#DADADA] mt-1">{contactContent.keyTakeaways[2] || 'Absolutely! We welcome suggestions for topics that would be valuable for our readers. Share your ideas with us.'}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}