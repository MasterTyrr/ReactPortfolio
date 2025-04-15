import htmlIcon from '/src/assets/htmlIcon.png';
import cssIcon from '/src/assets/CSSIcon.png';
import gitIcon from '/src/assets/GitIcon.png';
import CSharpIcon from '/src/assets/CsharpIcon.png';
import SQLIcon from '/src/assets/SQLIcon.png';
import VBNetIcon from '/src/assets/VBNetIcon.png';
import VSIcon from '/src/assets/VSIcon.png';
import bootstrapIcon from '/src/assets/BootStrapIcon.png';
import TypescriptIcon from '/src/assets/TypescriptIcon.png';
import RestAPIIcon from '/src/assets/RestAPIIcon.png';

interface Tool {
    name: string;
    icon: string;
}

const tools: Tool[] = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'C#', icon: CSharpIcon },
    { name: 'SQL', icon: SQLIcon },
    { name: 'VB.NET', icon: VBNetIcon },
    { name: 'Visual Studio', icon: VSIcon },
    { name: 'Bootstrap', icon: bootstrapIcon },
    { name: 'TypeScript', icon: TypescriptIcon },
    { name: 'API', icon: RestAPIIcon },
];

const TechnicalToolbox: React.FC = () => {
    return (
        <section id="technical-toolbox" className="px-6 py-20">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold">Technical Toolbox</h3>
                <p className="text-gray-400 mt-2 max-w-xl mx-auto">
                    A collection of tools, libraries, and frameworks I frequently use to build awesome projects.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                {tools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center space-y-0">
                        <div className="hover:bg-gray-700 transition p-4 rounded-lg w-30 h-30 flex items-center justify-center">
                            <img src={tool.icon} alt={tool.name} className="w-24 h-24 object-contain" />
                        </div>
                        <p className="text-sm text-center">{tool.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnicalToolbox;