//import projectImg from './src/assets/MasterTyrrLogo.jpg';

const Work: React.FC = () => (
    <section id="work" className="px-6 py-12 bg-gray-50">
        <h3 className="text-2xl font-semibold mb-8 text-center">Selected Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src={'./src/assets/MasterTyrrLogo.jpg'} alt="Project" className="rounded-t-lg w-full h-64 object-cover" />
                <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Project Title</h4>
                    <p className="text-gray-600 mb-4">A brief description of the project highlighting key features and technologies used.</p>
                    <a href="#" className="text-blue-600 hover:underline">View Project →</a>
                </div>
            </div>
        </div>
    </section>
);

export default Work;