/* eslint-disable react/no-unescaped-entities */
export default function Terms() {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
          <p className="text-gray-600 text-lg mb-8">Last updated: 11/25/2024</p>
  
          <div className="space-y-8 text-gray-800">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing or using the AlgoRhythm mobile application ("the App"), you agree to be bound by these Terms. 
                If you disagree with any part of the Terms, you do not have permission to access or use the App.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Educational Purpose</h2>
              <p className="leading-relaxed">
                AlgoRhythm is an educational platform designed to teach data structures, algorithms, and programming concepts. 
                While we strive to provide accurate and helpful content, we make no guarantees about the effectiveness of the 
                learning experience or its impact on your programming skills or career prospects.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Code Execution and Safety</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Code Playground</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="leading-relaxed">The App provides a code execution environment ("Code Playground") for practice and learning</li>
                <li className="leading-relaxed">We implement security measures but cannot guarantee complete safety of code execution</li>
                <li className="leading-relaxed">You agree not to submit malicious code or attempt to compromise the system</li>
                <li className="leading-relaxed">We reserve the right to terminate access to the Code Playground for any suspicious activity</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Progress Tracking and Gamification</h2>
              <p className="leading-relaxed">
                Our platform includes various gamification elements and progress tracking features. These are provided 
                "as is" and we reserve the right to modify or remove these features at any time.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                The App, including its source code, design, functionality, features, educational content, visual elements, 
                and user interface, is the exclusive intellectual property of AlgoRhythm. All rights are reserved.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Accounts</h2>
              <p className="leading-relaxed">
                You are responsible for maintaining the security of your account credentials and for all activities 
                that occur under your account.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prohibited Uses</h2>
              <p className="leading-relaxed">You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li className="leading-relaxed">Use the App for any illegal purposes</li>
                <li className="leading-relaxed">Attempt to gain unauthorized access to any part of the App</li>
                <li className="leading-relaxed">Interfere with or disrupt the App's functionality</li>
                <li className="leading-relaxed">Upload malicious code or harmful content</li>
                <li className="leading-relaxed">Impersonate other users or entities</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                The App is provided "as is" without warranties of any kind, whether express or implied.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="leading-relaxed">
                For questions about these Terms, please contact us at: <br />
                <a href="mailto:hello@algorhythmapp.org" className="text-blue-600 hover:underline">hello@algorhythmapp.org</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }