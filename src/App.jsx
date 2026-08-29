import React, { useState } from 'react';
import InvoicePage from './components/InvoicePage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import ReelsSection from './components/ReelsSection';
import Treatments from './components/Treatments';
import AlignerQuiz from './components/AlignerQuiz';
import EMICalculator from './components/EMICalculator';
import WhyUs from './components/WhyUs';
import Doctors from './components/Doctors';
import Technology from './components/Technology';
import ClinicTour from './components/ClinicTour';
import Reviews from './components/Reviews';
import Locations from './components/Locations';
import FAQSection from './components/FAQSection';
import SpecialOfferBanner from './components/SpecialOfferBanner';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';

export default function App() {
  const [view, setView] = useState('invoice'); // 'invoice' by default
  const [bookingModalState, setBookingModalState] = useState({
    isOpen: false,
    initialData: {}
  });

  const handleOpenBooking = (initialData = {}) => {
    setBookingModalState({
      isOpen: true,
      initialData
    });
  };

  const handleCloseBooking = () => {
    setBookingModalState({
      isOpen: false,
      initialData: {}
    });
  };

  if (view === 'invoice') {
    return <InvoicePage onPreviewWebsite={() => setView('portfolio')} />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-sky-500 selection:text-white flex flex-col justify-between">
      {/* Top Banner to Switch Back to Invoice */}
      <div className="bg-slate-900 text-white px-4 py-2 text-xs flex items-center justify-between">
        <span>Previewing Siva Tooth Care Dental Website</span>
        <button 
          onClick={() => setView('invoice')}
          className="px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-[11px] transition-all"
        >
          ← Back to Invoice Page
        </button>
      </div>

      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1 pb-20 lg:pb-0">
        <Hero onOpenBooking={handleOpenBooking} />
        <TrustBadges />
        <ReelsSection onOpenBooking={handleOpenBooking} />
        <Treatments onOpenBooking={handleOpenBooking} />
        <AlignerQuiz onOpenBooking={handleOpenBooking} />
        <EMICalculator onOpenBooking={handleOpenBooking} />
        <WhyUs onOpenBooking={handleOpenBooking} />
        <Doctors onOpenBooking={handleOpenBooking} />
        <Technology onOpenBooking={handleOpenBooking} />
        <ClinicTour />
        <Reviews onOpenBooking={handleOpenBooking} />
        <Locations onOpenBooking={handleOpenBooking} />
        <SpecialOfferBanner onOpenBooking={handleOpenBooking} />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Action Triggers */}
      <FloatingActions onOpenBooking={handleOpenBooking} />

      {/* Global Priority Booking Modal */}
      <BookingModal
        isOpen={bookingModalState.isOpen}
        onClose={handleCloseBooking}
        initialData={bookingModalState.initialData}
      />
    </div>
  );
}
