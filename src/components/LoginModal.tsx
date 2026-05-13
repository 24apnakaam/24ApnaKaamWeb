import { useState, useRef, useEffect } from 'react';
import { X, DeviceMobile, Lock } from '@phosphor-icons/react';
import { supabase } from '../lib/supabase';

type Step = 'phone' | 'otp';

interface Props {
  onClose: () => void;
  onSuccess: (session: unknown) => void;
}

export function LoginModal({ onClose, onSuccess }: Props) {
  const [step, setStep] = useState<Step>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  // Close on backdrop click
  function handleBackdrop(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  async function sendOtp() {
    const normalized = phone.startsWith('+') ? phone : `+91${phone}`;
    if (!/^\+\d{10,15}$/.test(normalized)) {
      setError('Enter a valid 10-digit phone number');
      return;
    }
    setLoading(true);
    setError('');
    const { error: err } = await supabase.auth.signInWithOtp({ phone: normalized });
    setLoading(false);
    if (err) { setError(err.message); return; }
    setStep('otp');
  }

  async function verifyOtp() {
    const normalized = phone.startsWith('+') ? phone : `+91${phone}`;
    if (otp.length < 4) { setError('Enter the OTP sent to your phone'); return; }
    setLoading(true);
    setError('');
    const { data, error: err } = await supabase.auth.verifyOtp({
      phone: normalized,
      token: otp,
      type: 'sms',
    });
    setLoading(false);
    if (err) { setError(err.message); return; }
    onSuccess(data.session);
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdrop} role="dialog" aria-modal="true" aria-label="Login">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={20} weight="bold" />
        </button>

        <div className="modal-brand">
          <img src="/app-icon.jpeg" alt="ApnaKaam" className="modal-brand-icon" />
          <span className="modal-brand-name">ApnaKaam</span>
        </div>

        {step === 'phone' ? (
          <>
            <h2 className="modal-title">Login to ApnaKaam</h2>
            <p className="modal-sub">Enter your mobile number to receive an OTP</p>

            <div className="modal-field">
              <label htmlFor="phone-input">Mobile number</label>
              <div className="input-group">
                <span className="input-prefix">+91</span>
                <input
                  id="phone-input"
                  ref={inputRef}
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="9876543210"
                  value={phone}
                  onChange={e => { setPhone(e.target.value.replace(/\D/g, '')); setError(''); }}
                  onKeyDown={e => e.key === 'Enter' && sendOtp()}
                  className="modal-input"
                />
              </div>
            </div>

            {error && <p className="modal-error">{error}</p>}

            <button className="modal-btn" onClick={sendOtp} disabled={loading}>
              <DeviceMobile size={18} weight="bold" />
              {loading ? 'Sending…' : 'Send OTP'}
            </button>
          </>
        ) : (
          <>
            <h2 className="modal-title">Enter OTP</h2>
            <p className="modal-sub">Sent to +91 {phone}{' '}
              <button className="link-btn" onClick={() => { setStep('phone'); setOtp(''); setError(''); }}>
                Change
              </button>
            </p>

            <div className="modal-field">
              <label htmlFor="otp-input">One-time password</label>
              <input
                id="otp-input"
                ref={inputRef}
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="• • • • • •"
                value={otp}
                onChange={e => { setOtp(e.target.value.replace(/\D/g, '')); setError(''); }}
                onKeyDown={e => e.key === 'Enter' && verifyOtp()}
                className="modal-input otp-input"
              />
            </div>

            {error && <p className="modal-error">{error}</p>}

            <button className="modal-btn" onClick={verifyOtp} disabled={loading}>
              <Lock size={18} weight="bold" />
              {loading ? 'Verifying…' : 'Verify & Login'}
            </button>

            <button className="resend-btn" onClick={sendOtp} disabled={loading}>
              Resend OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
