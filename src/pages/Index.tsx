import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ContentArea } from '@/components/ContentArea';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SubModule } from '@/types/module';
import { topics, Topic } from '@/content/topics';

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic>(topics[0]);
  const [selectedSubModule, setSelectedSubModule] = useState<SubModule | null>(null);

  const handleTopicChange = (topic: Topic) => {
    setSelectedTopic(topic);
    setSelectedSubModule(null); // Reset submodule when topic changes
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header 
        showTopicNav 
        selectedTopic={selectedTopic} 
        onSelectTopic={handleTopicChange} 
      />
      <div className="flex flex-1">
        <Sidebar
          selectedSubModule={selectedSubModule}
          onSelectSubModule={setSelectedSubModule}
          topic={selectedTopic}
        />
        <ContentArea subModule={selectedSubModule} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
