import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ContentArea } from '@/components/ContentArea';
import { Footer } from '@/components/Footer';
import { SubModule } from '@/types/module';

const Index = () => {
  const [selectedSubModule, setSelectedSubModule] = useState<SubModule | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-1">
        <Sidebar
          selectedSubModule={selectedSubModule}
          onSelectSubModule={setSelectedSubModule}
        />
        <ContentArea subModule={selectedSubModule} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
