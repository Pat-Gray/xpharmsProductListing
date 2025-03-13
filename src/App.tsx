import React, { useState } from 'react';
import { ProgressSteps } from './components/ui/ProgressSteps';
import { Button } from './components/ui/Button';
import { BasicInformation } from './components/ProductForm/BasicInformation';
import { STEPS } from './components/ProductForm/formConfig';
import { ProductFormData } from './types/product';
import StrainGenetics from './components/StrainGenetics';
import ProductForm from './components/ProductForm';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<ProductFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof ProductFormData, string>>>({});

  const handleFieldChange = (field: keyof ProductFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleNext = () => {
    // Validate current step
    const newErrors: Partial<Record<keyof ProductFormData, string>> = {};
    
    // Basic validation for step 1
    if (currentStep === 0) {
      if (!formData.productName) newErrors.productName = 'Product name is required';
      if (!formData.productType) newErrors.productType = 'Product type is required';
      if (!formData.thumbnailImage) newErrors.thumbnailImage = 'Thumbnail image is required';
      if (!formData.certificationGrade) newErrors.certificationGrade = 'Certification grade is required';
      if (!formData.shortDescription) newErrors.shortDescription = 'Short description is required';
      if (!formData.contractType) newErrors.contractType = 'Contract type is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0 && currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSave = () => {
    // Save progress to localStorage
    localStorage.setItem('productFormData', JSON.stringify(formData));
    alert('Progress saved successfully!');
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your API
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Xpharms Xchange Product Listing
          </h1>

          <ProgressSteps
            steps={STEPS}
            currentStep={currentStep}
            className="mb-12"
          />

          <div className="max-w-3xl mx-auto">
            {currentStep === 0 && (
              <BasicInformation
                data={formData}
                onChange={handleFieldChange}
                errors={errors}
              />
            )}
            {currentStep === 1 && (
              <ProductForm />
            )}
            {/* Additional step components will be added here */}

            <div className="mt-8 flex justify-between">
              <Button
                variant="secondary"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                Previous
              </Button>

              <div className="space-x-4">
                <Button variant="outline" onClick={handleSave}>
                  Save Progress
                </Button>
                
                {currentStep === STEPS.length - 1 ? (
                  <Button onClick={handleSubmit}>
                    Submit Listing
                  </Button>
                ) : (
                  <Button onClick={handleNext}>
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;