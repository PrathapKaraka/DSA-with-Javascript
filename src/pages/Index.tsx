import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ContentArea } from '@/components/ContentArea';
import { SubModule } from '@/data/dsaModules';

const Index = () => {
  const [selectedSubModule, setSelectedSubModule] = useState<SubModule | null>(null);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        selectedSubModule={selectedSubModule}
        onSelectSubModule={setSelectedSubModule}
      />
      <ContentArea subModule={selectedSubModule} />
    </div>
  );
};

export default Index;
