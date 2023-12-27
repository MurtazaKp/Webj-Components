import React, { useState } from 'react';

const ContactTwo = ({heading,contactDetails,form}) => {
  const pageContent = {
    heading: {
      title: "Contact Us",
      description: "Clarity gives you the blocks & components you need to create a truly professional website.",
    },
    contactDetails: [
      {
        office: "USA",
        hours: "Monday-Friday\n8:00 am to 5:00 pm",
        address: "8502 Preston Rd. Ingle,\nMaine 98380, USA",
        phoneNumbers: ["+1-246-888-0653", "+1-222-632-0194"],
      },
      {
        office: "Canada",
        hours: "Monday-Friday\n8:00 am to 5:00 pm",
        address: "8502 Preston Rd. Ingle,\nMaine 98380, USA",
      },
    ],
    form: {
      fields: [
        {
          name: 'fullName',
          label: 'Your Name',
          type: 'text',
          placeholder: 'Enter your full name',
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          placeholder: 'Enter your email',
        },
        {
          name: 'message',
          label: 'Your Message',
          type: 'textarea',
          placeholder: 'Write us your question here...',
        },
      ],
      buttonLabel: 'Send Message',
    },
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-36">
          <div className="flex flex-col self-stretch justify-between">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                {heading.title}
              </h2>
              <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
                {heading.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:mt-auto">
              {contactDetails.map((contactDetail, index) => (
                <div key={index}>
                  <h3 className="text-xs font-medium tracking-widest text-blue-600 uppercase">
                    {contactDetail.office} OFFICE Hours
                  </h3>
                  <p className="mt-5 text-base font-medium text-gray-900">
                    {contactDetail.hours}
                  </p>

                  <h3 className="text-xs font-medium tracking-widest text-blue-600 uppercase">
                    Our Address
                  </h3>
                  <p className="mt-5 text-base font-medium text-gray-900">
                    {contactDetail.address}
                  </p>

                  {contactDetail.phoneNumbers && (
                    <>
                      <h3 className="text-xs font-medium tracking-widest text-blue-600 uppercase">
                        Get In Touch
                      </h3>
                      <p className="mt-5 text-base font-medium text-gray-900">
                        {contactDetail.phoneNumbers.map((phoneNumber, idx) => (
                          <React.Fragment key={idx}>
                            {phoneNumber}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-2xl">
            <div className="p-6 sm:p-10">
              <form action="#" method="POST" className="space-y-6">
                {form.fields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="text-base font-medium text-gray-900">
                      {field.label}
                    </label>
                    <div className="mt-2">
                      {field.type === 'textarea' ? (
                        <textarea
                          name={field.name}
                          id={field.name}
                          placeholder={field.placeholder}
                          rows="4"
                          className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 resize-y rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                          onChange={handleInputChange}
                          value={formData[field.name]}
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          placeholder={field.placeholder}
                          className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                          onChange={handleInputChange}
                          value={formData[field.name]}
                        />
                      )}
                    </div>
                  </div>
                ))}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                  onClick={handleSubmit}
                >
                  {form.buttonLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTwo;
