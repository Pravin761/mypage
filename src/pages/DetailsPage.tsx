import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Terminal, Code } from 'lucide-react';
import { Layout } from '../components/Layout';

export function DetailsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Black Hat Hacking</h1>
            <p className="text-xl text-gray-300 mb-12">Understanding the Dark Side of Cybersecurity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 mb-4">
                <Shield className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Security Testing</h3>
              <p className="text-gray-300">Understanding vulnerabilities and security loopholes in systems.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 mb-4">
                <Terminal className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Penetration Testing</h3>
              <p className="text-gray-300">Simulating cyber attacks to identify system weaknesses.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 mb-4">
                <Code className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Exploit Development</h3>
              <p className="text-gray-300">Creating and understanding security exploits.</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">What is Black Hat Hacking?</h2>
            <p className="text-gray-300 mb-4">
              Black hat hacking refers to the act of breaking into computer systems or networks with malicious intent.
              Unlike white hat hackers who help organizations improve their security, black hat hackers exploit
              vulnerabilities for personal gain or malicious purposes.
            </p>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2070&q=80"
              alt="Cybersecurity Concept"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300">
              Understanding black hat techniques is crucial for cybersecurity professionals to better protect systems
              and networks from potential threats. However, it's important to note that actually performing these
              activities without authorization is illegal and unethical.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                localStorage.removeItem('isAuthenticated');
                navigate('/login');
              }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}