import React from 'react';
import LegalLayout from '@/components/legal/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="Last updated: July 15, 2026">
      <p className="text-lg">
        DreamPathPrep, LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, and safeguard information when you visit our website and use
        our college admissions consulting services.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>1. Information We Collect</h2>
      <p>We collect information that you provide directly to us, including:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Name and contact information (email address, phone number)</li>
        <li>Student's school, grade level, and academic performance</li>
        <li>Career interests, aspirations, and clarity</li>
        <li>Personal narratives and essay content</li>
        <li>Financial aid and scholarship-related information</li>
        <li>Any other information you choose to share during consultations or through our diagnostic quiz</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Provide personalized college admissions consulting services</li>
        <li>Communicate with you about strategy sessions, updates, and recommendations</li>
        <li>Schedule and manage consultations</li>
        <li>Improve our services and develop new offerings</li>
        <li>Send important notices and administrative communications</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>3. Information Sharing</h2>
      <p>
        We do not sell, rent, or trade your personal information to third parties. We may share
        information only in the following circumstances:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>With service providers who assist us in operating our business (e.g., scheduling tools, document storage)</li>
        <li>When required by law or to protect our rights and safety</li>
        <li>With your consent or at your direction</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>4. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal
        information. However, no method of transmission over the internet is completely secure, and we
        cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>5. Children's Privacy</h2>
      <p>
        Our services are designed for students, including those under 18. We collect personal
        information from students only with the consent of a parent or legal guardian. Parents may
        review, request deletion of, or opt out of the collection of their child's information at any
        time by contacting us.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>6. Cookies</h2>
      <p>
        Our website may use cookies and similar technologies to enhance your browsing experience. You
        can configure your browser to refuse cookies, though some features may not function properly.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your personal information</li>
        <li>Opt out of marketing communications</li>
      </ul>
      <p className="mt-2">
        To exercise these rights, please contact us at{' '}
        <a href="mailto:contact@dreampathprep.com" className="font-medium underline" style={{ color: '#C5A059' }}>
          contact@dreampathprep.com
        </a>.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on our Website, and
        your continued use constitutes acceptance of the updated policy.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>9. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact us at:</p>
      <ul className="list-none pl-0 space-y-1">
        <li>Email: <a href="mailto:contact@dreampathprep.com" className="font-medium underline" style={{ color: '#C5A059' }}>contact@dreampathprep.com</a></li>
        <li>Website: www.dreampathprep.com</li>
      </ul>
    </LegalLayout>
  );
}