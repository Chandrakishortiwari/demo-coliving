'use client';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
    const getCall = () => {
  window.location.href = "tel:+91000000000";
};

const getEmail = () => {
 window.location.href = 'mailto:feedback@flatmate.in';
};
const getAddresh = () => {
 window.location.href = 'https://www.google.co.in/maps/search/Unit+no.+1227,+1228,+Tower+C+in+Alphathum,+Sector+90,+Noida+-+201305/@28.5131112,77.4087976,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D';
};
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-green-600 font-semibold text-lg mb-4 tracking-wide">
            CONTACT US
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Get In <span className="text-green-600">Touch</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Ready to find your perfect co-living space? We're here to help you every step of the way.
          </p>
          
          {/* Progress indicator */}
          <div className="flex items-center justify-center space-x-3 mb-16">
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <div className="w-16 h-1 bg-green-600 rounded-full"></div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <article onClick={()=> getCall()} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-green-600" alt="Phone Icon" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone</h3>
            <p className="text-gray-600 text-lg">+91-9958571522</p>
          </article>

          {/* Email */}
          <div  onClick={()=> getEmail()} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-green-600" alt="Email Icon" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
            <p className="text-gray-600 text-lg">feedback@flatmate.in</p>
          </div>

          {/* Address */}
          <article onClick={()=> getAddresh()} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-purple-600" alt="Address Icon" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Address</h3>
            <address className="text-gray-600 text-lg not-italic">
              Unit no. 1227, 1228,<br />
              Tower C in Alphathum,<br />
              Sector 90, Noida -<br />
              201305
            </address>
          </article>
        </div>
      </div>
    </section>
  );
}
