import { useNavigate } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <Helmet>
                <title>Page Not Found | Rudra Digital Studio</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Helmet>

            <div className="text-center max-w-lg">
                <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                    <AlertTriangle className="h-12 w-12 text-yellow-600" />
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Oops! The page you're looking for seems to have wandered off.
                    Let's get you back to capturing beautiful moments.
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
                >
                    <Home className="h-5 w-5" />
                    <span>Back to Home</span>
                </button>
            </div>
        </div>
    );
};

export default NotFound;
