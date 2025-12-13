import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapPin, Briefcase, GraduationCap, Code, Database, Link as LinkIcon } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="About" />
      <main className="flex-1 px-6 lg:px-8 py-8 max-w-4xl mx-auto w-full">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Prathap Karaka
          </h1>
          <p className="text-lg text-primary font-medium mb-2">
            Frontend Developer (React) | Full Stack (Node.js) | Blockchain Enthusiast
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>India</span>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            Professional Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Frontend-focused software developer with strong experience in <strong className="text-foreground">React</strong> and practical exposure to <strong className="text-foreground">Node.js, Express, and MongoDB</strong>. Currently working at <strong className="text-foreground">Kotak Mahindra Bank</strong>, with hands-on experience in building real-world applications including <strong className="text-foreground">KYC systems, OTP authentication, invoicing modules, and blockchain-based identity projects</strong>. Pursuing a <strong className="text-foreground">Master's specialization in Blockchain</strong>, with knowledge of <strong className="text-foreground">Hyperledger Fabric</strong> and decentralized identity concepts.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            Technical Skills
          </h2>
          <div className="grid gap-4">
            <SkillCategory 
              title="Frontend" 
              skills="React.js, React Native (Expo), JavaScript (ES6+), HTML5, CSS3, Tailwind CSS" 
            />
            <SkillCategory 
              title="Backend" 
              skills="Node.js, Express.js" 
            />
            <SkillCategory 
              title="Database" 
              skills="MongoDB, Firebase" 
            />
            <SkillCategory 
              title="Blockchain" 
              skills="Hyperledger Fabric (Node.js chaincode), Blockchain-based KYC concepts" 
            />
            <SkillCategory 
              title="Tools & Platforms" 
              skills="Git, REST APIs, Firebase OTP, DataTables, Linux basics" 
            />
            <SkillCategory 
              title="Other" 
              skills="Functional Components, API Integration, Authentication Flows" 
            />
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            Professional Experience
          </h2>
          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="text-lg font-semibold text-foreground">Kotak Mahindra Bank</h3>
            <p className="text-primary font-medium mb-3">Frontend Developer</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Developed and maintained <strong className="text-foreground">React-based user interfaces</strong> for internal banking applications.</li>
              <li>Integrated frontend components with backend APIs.</li>
              <li>Worked on secure workflows involving <strong className="text-foreground">authentication and data handling</strong>.</li>
              <li>Followed best practices for clean UI, reusable components, and performance optimization.</li>
            </ul>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Key Projects
          </h2>
          <div className="space-y-4">
            <ProjectCard
              title="Blockchain-based KYC System"
              subtitle="Academic & Personal Project"
              points={[
                "Designed a Self-KYC and Financial Institution KYC sharing system.",
                "Implemented backend using Node.js, MongoDB, and Hyperledger Fabric.",
                "Used Firebase OTP for user authentication.",
                "Focused on decentralized identity, consent-based data sharing, and smart contracts."
              ]}
            />
            <ProjectCard
              title="Sales Invoicing System"
              points={[
                "Built invoice logic with auto-increment and financial-year reset handling.",
                "Managed offline-to-online invoice sequencing."
              ]}
            />
            <ProjectCard
              title="React Native Walkie-Talkie App"
              subtitle="Concept Project"
              points={[
                "Planned an offline communication app using hotspot/Bluetooth.",
                "Focused on user authentication, unique identification, and secure connections."
              ]}
            />
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Education
          </h2>
          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="text-lg font-semibold text-foreground">Master's Degree – Blockchain Specialization</h3>
            <p className="text-muted-foreground">Upgrade Online</p>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <LinkIcon className="h-5 w-5 text-primary" />
            Additional Information
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Strong preference for <strong className="text-foreground">functional components</strong> in React</li>
            <li>Experience with <strong className="text-foreground">real-world banking and KYC use cases</strong></li>
            <li>Interested in <strong className="text-foreground">FinTech, Blockchain, and Secure Systems</strong></li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

function SkillCategory({ title, skills }: { title: string; skills: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
      <span className="font-medium text-foreground min-w-[140px]">{title}:</span>
      <span className="text-muted-foreground">{skills}</span>
    </div>
  );
}

function ProjectCard({ title, subtitle, points }: { title: string; subtitle?: string; points: string[] }) {
  return (
    <div className="border border-border rounded-lg p-4 bg-card">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {subtitle && <p className="text-primary text-sm mb-2">{subtitle}</p>}
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
