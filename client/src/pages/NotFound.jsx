import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function NotFound() {
    return (
        <div className="bg-neutral min-h-screen flex flex-col items-center justify-center text-center px-4">
            <Helmet>
                <title>404 - Side ikke fundet | Racha Beauty & Wellness</title>
            </Helmet>

            <h1 className="font-lora text-6xl md:text-8xl font-bold text-primary mb-4">
                404
            </h1>
            <p className="font-roboto text-xl text-text-light mb-8">
                Beklager, siden du leder efter findes ikke.
            </p>
            <Link
                to="/"
                className="font-lora bg-primary text-text-dark px-6 py-3 rounded hover:bg-primary-dark transition focus:outline-none focus:ring-2 focus:ring-accent"
            >
                Tilbage til forsiden
            </Link>
        </div>
    );
}

export default NotFound;
