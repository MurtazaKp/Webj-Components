import React, { useState } from 'react';

const Contact = () => {
  
  const contactData = {
    title: 'Contact Us',
    description: 'Clarity gives you the blocks & components you need to create a truly professional website.',
    usaOffice: {
      title:"Usa Office Hours",
      hours: 'Monday-Friday\n8:00 am to 5:00 pm',
      address: '8502 Preston Rd. Ingle,\nMaine 98380, USA',
    },
    canadaOffice: {
      hours: 'Canada Office Hours',
      address: '8502 Preston Rd. Ingle,\nMaine 98380, USA',
    },
    contactInfo: {
      phone1: '+1-246-888-0653',
      phone2: '+1-222-632-0194',
    },
    formFields: {
    title:"Our Address",
   fields: [
      {
        label: 'Your name',
        type: 'text',
        name: 'fullName',
        id: 'fullName',
        placeholder: 'Enter your full name',
      },
      {
        label: 'Email address',
        type: 'email',
        name: 'email',
        id: 'email',
        placeholder: 'Enter your email',
      },
      {
        label: 'Write your message',
        type: 'textarea',
        name: 'message',
        id: 'message',
        placeholder: 'Write us your question here...',
      },
    ],
  }
  };

  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  // Handler to update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission (you can replace the console.log with actual form submission logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic for actual form submission here
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-36">
          <div className="flex flex-col self-stretch justify-between">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                {contactData.title}
              </h2>
              <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
                {contactData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:mt-auto">
              <div>
                <h3 className="text-xs font-medium tracking-widest text-blue-600 uppercase">
                  {contactData.usaOffice.title}
                </h3>
                <p className="mt-5 text-base font-medium text-gray-900">{contactData.usaOffice.hours}</p>
              </div>

              <div>
                <h3 className="text-xs font-medium tracking-widest text-blue-600 uppercase">
                  {contactData.formFields.title}
                </h3>
                <p className="mt-5 text-base font-medium text-gray-900">{contactData.usaOffice.address}</p>
              </div>

              <div>
                <h3 className="text-xs font-medium tracking-widest text-blue-600 uppercase">
                  {contactData.canadaOffice.hours}
                </h3>
                <p className="mt-5 text-base font-medium text-gray-900">{contactData.canadaOffice.address}</p>
              </div>

              <div>
                <h3 className="text-xs font-medium tracking-widest text-blue-600 uppercase">
                  Get In Touch
                </h3>
                <p className="mt-5 text-base font-medium text-gray-900">
                  {contactData.contactInfo.phone1}
                  <br />
                  {contactData.contactInfo.phone2}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-2xl">
            <div className="p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {contactData.formFields.fields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.id} className="text-base font-medium text-gray-900">
                      {field.label}
                    </label>
                    <div className="mt-2">
                      {field.type === 'textarea' ? (
                        <textarea
                          name={field.name}
                          id={field.id}
                          placeholder={field.placeholder}
                          rows="4"
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 resize-y rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.id}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      )}
                    </div>
                  </div>
                ))}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
