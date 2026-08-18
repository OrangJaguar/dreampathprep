import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Gift, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';

export default function ReferAFriend() {
  const [formData, setFormData] = useState({
    referee_first_name: '', referee_last_name: '', referee_email: '', referee_phone: '',
    friend_first_name: '', friend_last_name: '', friend_email: '', friend_phone: '',
    friend_graduation_year: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await base44.functions.invoke('submitReferral', { formData });
      setSubmitted(true);
    } catch (err) {
      console.error('Referral submission error:', err);
      setError('There was an error submitting your referral. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A059] focus:outline-none";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  if (submitted) {
    return (
      <section id="refer" className="py-24 md:py-32" style={{ backgroundColor: '#F9F8F4' }}>
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-10 shadow-lg" style={{ border: '2px solid #C5A059' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)' }}>
              <CheckCircle2 className="w-10 h-10" style={{ color: '#C5A059' }} />
            </div>
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}>
              Thank You for the Referral!
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Your referral means the world to us. We'll reach out to your friend or family member shortly — and you'll both be rewarded once they join the DreamPathPrep family.
            </p>
            <Button onClick={() => { setSubmitted(false); setFormData({ referee_first_name: '', referee_last_name: '', referee_email: '', referee_phone: '', friend_first_name: '', friend_last_name: '', friend_email: '', friend_phone: '', friend_graduation_year: '' }); }} variant="outline" className="rounded-full">
              Submit Another Referral
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="refer" className="py-24 md:py-32" style={{ backgroundColor: '#F9F8F4' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)' }}>
            <Users className="w-4 h-4" style={{ color: '#C5A059' }} />
            <span className="text-sm font-semibold" style={{ color: '#C5A059' }}>Refer a Friend</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}>
            Share the Path to College Success
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Know a family who could use expert guidance? Refer them to DreamPathPrep — when they join, you both win.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&q=80"
                alt="Two people celebrating a win-win referral partnership"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)' }}>
                <Gift className="w-6 h-6" style={{ color: '#C5A059' }} />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}>A Win-Win for Both Families</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Referrals are how DreamPathPrep grows — and they're the highest compliment a family can give. When you refer a friend or family member, you're giving them the gift of a clearer path to college and a brighter future.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              As our thank-you, both you and your referred friend receive a special reward once they join a DreamPathPrep program. It's our way of celebrating the trust you've placed in us — and sharing that success with the people who matter most to you.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#3E5C76' }}>
              <Heart className="w-4 h-4" />
              <span>Trusted by families, powered by community.</span>
            </div>
          </motion.div>
        </div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl p-6 md:p-10 shadow-lg" style={{ border: '1px solid rgba(197, 160, 89, 0.3)' }}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Referee column */}
            <div>
              <h4 className="text-lg font-bold mb-4 pb-2" style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif", borderBottom: '2px solid #C5A059' }}>
                Your Information
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input name="referee_first_name" required value={formData.referee_first_name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input name="referee_last_name" required value={formData.referee_last_name} onChange={handleChange} className={inputClass} />
                </div>
                <div className="col-span-2">
                  <label className={labelClass}>Email *</label>
                  <input name="referee_email" type="email" required value={formData.referee_email} onChange={handleChange} className={inputClass} />
                </div>
                <div className="col-span-2">
                  <label className={labelClass}>Phone Number *</label>
                  <input name="referee_phone" type="tel" required value={formData.referee_phone} onChange={handleChange} className={inputClass} />
                </div>
              </div>
            </div>

            {/* Friend column */}
            <div>
              <h4 className="text-lg font-bold mb-4 pb-2" style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif", borderBottom: '2px solid #C5A059' }}>
                Friend / Family Member
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input name="friend_first_name" required value={formData.friend_first_name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input name="friend_last_name" required value={formData.friend_last_name} onChange={handleChange} className={inputClass} />
                </div>
                <div className="col-span-2">
                  <label className={labelClass}>Email *</label>
                  <input name="friend_email" type="email" required value={formData.friend_email} onChange={handleChange} className={inputClass} />
                </div>
                <div className="col-span-2">
                  <label className={labelClass}>Phone Number *</label>
                  <input name="friend_phone" type="tel" required value={formData.friend_phone} onChange={handleChange} className={inputClass} />
                </div>
                <div className="col-span-2">
                  <label className={labelClass}>Expected HS Graduation Year or Current Grade *</label>
                  <input name="friend_graduation_year" required value={formData.friend_graduation_year} onChange={handleChange} className={inputClass} placeholder="e.g. 2028 or 10th grade" />
                </div>
              </div>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}

          <div className="text-center mt-6">
            <Button type="submit" disabled={submitting} className="rounded-full px-10 py-6 text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-xl disabled:opacity-60" style={{ backgroundColor: '#3E5C76' }}>
              {submitting ? 'Submitting...' : 'Submit Referral'}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}