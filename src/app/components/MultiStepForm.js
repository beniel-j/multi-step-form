import { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: '',
    addressDetails: '',
    preferences: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="p-5">
      <div>
        {step === 1 && (
          <div>
            <h2>Step 1: Personal Information</h2>
            <input
              type="text"
              name="personalInfo"
              value={formData.personalInfo}
              onChange={handleChange}
              placeholder="Enter your personal info"
            />
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Step 2: Address Details</h2>
            <input
              type="text"
              name="addressDetails"
              value={formData.addressDetails}
              onChange={handleChange}
              placeholder="Enter your address"
            />
            <button onClick={handlePreviousStep}>Back</button>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Step 3: Preferences</h2>
            <input
              type="text"
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
              placeholder="Enter your preferences"
            />
            <button onClick={handlePreviousStep}>Back</button>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2>Step 4: Review & Submit</h2>
            <p>Personal Info: {formData.personalInfo}</p>
            <p>Address: {formData.addressDetails}</p>
            <p>Preferences: {formData.preferences}</p>
            <button onClick={handlePreviousStep}>Back</button>
            <button onClick={() => alert("Form Submitted")}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
