import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const ChecklistItem = ({ item, onToggle }) => {
  const { text, isChecked, suggestion } = item;

  return (
    <div className="flex items-center mb-4" onClick={onToggle}>
      <div className="relative">
        <input
          type="checkbox"
          className="absolute h-6 w-6 opacity-0"
          checked={isChecked}
          onChange={() => {}} // No need for onChange handler
        />
        <div className={`h-6 w-6 flex items-center justify-center border rounded-md mr-3 ${isChecked ? 'bg-indigo-600 border-transparent' : 'border-gray-400'}`}>
          {isChecked && <svg className="h-4 w-4 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.293 15.293a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L9 12.586l9.293-9.293a1 1 0 0 1 1.414 1.414l-10 10z"/></svg>}
        </div>
      </div>
      <div>
        <p className={`text-lg font-medium ${isChecked ? 'line-through text-gray-500' : 'text-gray-900'}`}>
          {text}
        </p>
        {suggestion && (
          <p className="text-sm text-gray-500">{suggestion}</p>
        )}
      </div>
    </div>
  );
};

const Checklist = () => {
  const [items, setItems] = useState([
    { text: 'Check for Box, Bill, or Warranty Card', isChecked: false, suggestion: "Don't buy without Box and Paperwork under any circumstances." },
    { text: 'Never Buy When in Doubt', isChecked: false, suggestion: "If doubt, it's best to avoid the purchase, whatever profit be it." },
    { text: 'Check for Genuine Customers Behaviour', isChecked: false, suggestion: "Only proceed if the customer seems trustworthy. If in doubt, avoid the deal." },
    { text: 'Communication and Trust', isChecked: false, suggestion: 'If customer is not trusting or in doubt avoid the deal.' },
    { text: 'Watch for Pushy or Rushed Sellers', isChecked: false, suggestion: 'Avoid transactions when sellers are overly pushy or hurried.' },
    { text: 'Check if Courier person is Trustworthy', isChecked: false, suggestion: 'If courier person is not communicating well or does not seem genuine avoid and go for another at any cost.' },
    { text: 'Avoid Roadside Deals', isChecked: false, suggestion: 'Don’t make purchases on the road for any reason.' },
    { text: 'Always send Purchase Receipt', isChecked: false, suggestion: 'Send Purchase Invoice instantly after the Deal' },
  ]);

  useEffect(() => {
    // Count the checked items
    const checkedCount = items.filter(item => item.isChecked).length;
    document.title = `Camco - Checked ${checkedCount} items`;
  }, [items]);

  const toggleItem = (index) => {
    const newItems = [...items];
    newItems[index].isChecked = !newItems[index].isChecked;
    setItems(newItems);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Process Checklist</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <ChecklistItem
            key={index}
            item={item}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Checklist;
