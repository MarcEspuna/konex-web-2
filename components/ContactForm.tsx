'use client';

import { useState } from 'react';

type ContactFormProps = {
  locale: 'es' | 'en';
  labels: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitLabel: string;
    note: string;
  };
};

export default function ContactForm({ locale, labels }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        {labels.nameLabel}
        <input className="input" name="name" required />
      </label>
      <label>
        {labels.emailLabel}
        <input className="input" type="email" name="email" required />
      </label>
      <label>
        {labels.messageLabel}
        <textarea className="textarea" name="message" required />
      </label>
      <button
        className="button button-primary"
        type="submit"
        disabled={status === 'submitting'}
      >
        {labels.submitLabel}
      </button>
      <div className="form-note">{labels.note}</div>
      {status === 'success' ? (
        <p>{locale === 'es' ? 'Mensaje enviado.' : 'Message sent.'}</p>
      ) : null}
      {status === 'error' ? (
        <p>{locale === 'es' ? 'No se pudo enviar.' : 'Could not send.'}</p>
      ) : null}
    </form>
  );
}
