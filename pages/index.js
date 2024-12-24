export default function Home() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <h1 className="text-3xl text-center py-10">Multi-Step Form</h1>
        {/* Form components will go here */}
      </div>
    );
  }
  
  import MultiStepForm from '../components/MultiStepForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <h1 className="text-3xl text-center py-10">Multi-Step Form</h1>
      <MultiStepForm />
    </div>
  );
}
