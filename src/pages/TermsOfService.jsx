import React from 'react';
import LegalLayout from '@/components/legal/LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout title="Agreement and Terms of Use" lastUpdated="Last updated: July 14, 2026">
      <p className="text-lg">
        Welcome to DreamPathPrep. These Terms of Use ("Terms") are a legal agreement between you and
        DreamPathPrep, LLC ("Company," "we," or "us") and govern your access to and use of our Website
        and Services, including all content, tools, and services materials, whether you are associating
        with us as a student, parent, or registered user.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>1. Acceptance of Terms</h2>
      <p>
        By accessing the Website, purchasing any services, or clicking "accept" when prompted, you
        confirm that you have read, understood, and agree to these Terms and our Privacy Policy,
        incorporated herein by reference. If you do not agree, please do not access or use the Website
        or its services.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>2. Who Can Use Our Services</h2>
      <p>
        Our services are designed to support students in exploring their strengths, planning strategic
        courses and extracurriculars, and navigating the college admissions process. Some services are
        intended for minors:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Parents or legal guardians agree to these Terms on behalf of students under 18.</li>
        <li>Students may use the Website directly under parental supervision when required.</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>3. Use of the Website</h2>
      <p>You may use our Website or services for lawful purposes only. This includes:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Accessing content, tools, and services provided by DreamPathPrep.</li>
        <li>Communicating with our team for guidance and support.</li>
      </ul>
      <p className="mt-2">You agree not to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Use the Website for any illegal or unauthorized purpose.</li>
        <li>Copy, reproduce, or distribute content without permission.</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>4. Services and Purchases</h2>
      <p>When you purchase services through the Website:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>You agree to provide accurate information and maintain your account securely.</li>
        <li>All payments are subject to the terms outlined at the point of purchase.</li>
        <li>Services are provided as described; no guarantees are made regarding admissions outcomes.</li>
        <li>You and the student using our services agree to maintain cooperative relationships and follow up on instructions, requirements and requests in timely manner.</li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>5. Privacy and Data</h2>
      <p>
        We value your privacy. By using the Website, you agree to the terms of our Privacy Policy,
        which explains how we collect, use, and protect information. We expect you to respect privacy of
        your personal, fellow participants and the company and notify us of any breach of privacy.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>6. Limitation of Liability</h2>
      <p>
        The Website and services are provided "as is" and without warranties. We are not responsible for
        any indirect, incidental, or consequential damage resulting from the use of the Website or services.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>7. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. Updates will be posted on the Website, and your
        continued use constitutes acceptance of any changes.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: '#0A192F' }}>8. Contact Us</h2>
      <p>If you have questions about these Terms, please contact us at:</p>
      <ul className="list-none pl-0 space-y-1">
        <li>Email: <a href="mailto:contact@dreampathprep.com" className="font-medium underline" style={{ color: '#C5A059' }}>contact@dreampathprep.com</a></li>
        <li>Website: www.dreampathprep.com</li>
      </ul>
    </LegalLayout>
  );
}