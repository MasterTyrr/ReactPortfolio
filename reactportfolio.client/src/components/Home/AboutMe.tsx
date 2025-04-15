//import profilePic from './src/assets/MasterTyrrLogo.jpg';

const About: React.FC = () => (
    <section id="about" className="px-6 py-20 text-center">
        <img src={'./src/assets/MasterTyrrLogo.jpg'} alt="Your Name" className="w-32 h-32 rounded-full mx-auto mb-6" />
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a designer and developer based in Fishers, Indiana, specializing in creating exceptional digital experiences.
            With a passion for clean design and user-centric solutions, I aim to bring ideas to life through thoughtful and effective design.
        </p>
    </section>
);

export default About;