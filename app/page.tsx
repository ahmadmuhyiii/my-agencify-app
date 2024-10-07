'use client';
import Header from './header/header';
import LeftSection from './content/LeftSection';
import RightSection from './content/RightSection';
import ButtonContent from './content/ButtonContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Main Section */}
      <main className="container mx-auto mt-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <LeftSection />
          <RightSection />
          <ButtonContent />
        </div>
        
      </main>
    </div>
  );
}
