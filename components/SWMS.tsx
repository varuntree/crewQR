import React, { useState } from 'react';
import Card from './Card';

interface Page {
  title: string;
  content: React.ReactNode;
  image?: string;
}

const SWMS: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [agreed, setAgreed] = useState(false);

  const pages: Page[] = [
    {
      title: "Introduction",
      content: (
        <>
          <p className="mb-4">Welcome! This SWMS outlines the safety procedures for carpentry activities. Please review each section carefully before proceeding.</p>
          <h3 className="text-xl font-semibold mb-2">Key Topics Covered</h3>
          <ol className="list-decimal list-inside">
            <li>High-Risk Construction Work (HRCW)</li>
            <li>Hazards and Associated Risks</li>
            <li>Control Measures</li>
          </ol>
        </>
      ),
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "High-Risk Construction Work (HRCW)",
      content: (
        <ul className="list-disc list-inside">
          <li>Work involving the risk of a person falling more than two meters.</li>
          <li>Work on or near energized electrical installations or services.</li>
          <li>Work involving the use of powered mobile plant.</li>
          <li>Work in areas with potential exposure to asbestos or hazardous substances.</li>
        </ul>
      )
    },
    {
      title: "Hazards and Associated Risks",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Hazard</th>
                <th className="border border-gray-300 p-2">Associated Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Working at heights</td>
                <td className="border border-gray-300 p-2">Falls leading to serious injury or fatality</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Use of power tools</td>
                <td className="border border-gray-300 p-2">Cuts, amputations, electric shock, or burns</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Manual handling</td>
                <td className="border border-gray-300 p-2">Musculoskeletal disorders</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Exposure to noise</td>
                <td className="border border-gray-300 p-2">Hearing loss or impairment</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: "Control Measures",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-2">1. Working at Heights</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Engineering Controls: Guardrails, scaffolds, elevated platforms.</li>
            <li>Administrative Controls: Safe work procedures, limit work duration.</li>
            <li>PPE: Safety harnesses, non-slip footwear.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">2. Use of Power Tools</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Engineering Controls: Maintenance, RCDs.</li>
            <li>Administrative Controls: Pre-start checks, manuals.</li>
            <li>PPE: Gloves, glasses, hearing protection.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Agreement",
      content: (
        <div>
          <p className="mb-4">By selecting "I Agree," you confirm that:</p>
          <ul className="list-disc list-inside mb-4">
            <li>You have read and understood the SWMS.</li>
            <li>You will adhere to the outlined safety measures.</li>
            <li>You will immediately report any safety concerns or incidents.</li>
          </ul>
          <button
            onClick={() => setAgreed(true)}
            className={`px-4 py-2 rounded ${
              agreed ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            disabled={agreed}
          >
            {agreed ? 'Agreed ✅' : 'I Agree'}
          </button>
        </div>
      )
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToEnd = () => {
    setCurrentPage(pages.length - 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 flex justify-between items-center">
          <div className="text-gray-600">
            Page {currentPage + 1} of {pages.length}
          </div>
          <button
            onClick={goToEnd}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full shadow-md hover:bg-gray-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Skip to End
          </button>
        </div>
        <div className="mb-4 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gray-600 rounded-full h-2 transition-all duration-300" 
            style={{width: `${((currentPage + 1) / pages.length) * 100}%`}}
          ></div>
        </div>
        <Card title={pages[currentPage].title} image={pages[currentPage].image}>
          {pages[currentPage].content}
          <div className="mt-6 flex flex-wrap justify-between">
            {currentPage > 0 && (
              <button
                onClick={prevPage}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full shadow-md hover:bg-gray-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 mb-2 sm:mb-0"
              >
                Previous
              </button>
            )}
            {currentPage < pages.length - 1 && (
              <button
                onClick={nextPage}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full shadow-md hover:bg-gray-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ml-auto"
              >
                Next
              </button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SWMS;

