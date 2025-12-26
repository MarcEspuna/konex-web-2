'use client';

import { useState } from 'react';

type RegistrationFormProps = {
  locale: 'es' | 'en';
  eventId: string;
  eventTitle: string;
  priceEur: number;
  refundPolicy: string;
};

export default function RegistrationForm({
  locale,
  eventId,
  eventTitle,
  priceEur,
  refundPolicy
}: RegistrationFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const labels = {
    name: locale === 'es' ? 'Nombre' : 'Name',
    email: locale === 'es' ? 'Email' : 'Email',
    phone: locale === 'es' ? 'Teléfono (opcional)' : 'Phone (optional)',
    team: locale === 'es' ? 'Equipo (opcional)' : 'Team (optional)',
    notes: locale === 'es' ? 'Notas (opcional)' : 'Notes (optional)',
    policy: locale === 'es' ? 'Acepto la politica de reembolsos' : 'I accept the refund policy',
    submit: locale === 'es' ? 'Enviar registro' : 'Submit registration',
    success:
      locale === 'es'
        ? 'Registro recibido. Te contactaremos para confirmar.'
        : 'Registration received. We will contact you to confirm.',
    error:
      locale === 'es'
        ? 'No se pudo enviar el registro. Inténtalo de nuevo.'
        : 'Could not send registration. Please try again.'
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventId,
          eventTitle,
          locale,
          ...payload
        })
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      event.currentTarget.reset();
    } catch (submitError) {
      setStatus('error');
      setError(labels.error);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        {labels.name}
        <input className="input" name="name" required />
      </label>
      <label>
        {labels.email}
        <input className="input" type="email" name="email" required />
      </label>
      <label>
        {labels.phone}
        <input className="input" name="phone" />
      </label>
      <label>
        {labels.team}
        <input className="input" name="team" />
      </label>
      <label>
        {labels.notes}
        <textarea className="textarea" name="notes" />
      </label>
      <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input type="checkbox" name="policyAccepted" required />
        <span>{labels.policy}</span>
      </label>
      <div className="form-note">{refundPolicy}</div>
      <div className="card" style={{ padding: 16 }}>
        <strong>
          {locale === 'es' ? 'Precio de inscripción' : 'Registration price'}: {priceEur} EUR
        </strong>
        <p style={{ marginBottom: 12 }}>
          {locale === 'es'
            ? 'Pagos online próximamente. Te enviaremos un enlace cuando esté disponible.'
            : 'Online payments coming soon. We will send a payment link once available.'}
        </p>
        <button className="button button-ghost" type="button" disabled>
          {locale === 'es' ? 'Pago no disponible' : 'Payment unavailable'}
        </button>
      </div>
      <button
        className="button button-primary"
        type="submit"
        disabled={status === 'submitting'}
      >
        {labels.submit}
      </button>
      {status === 'success' ? <p>{labels.success}</p> : null}
      {status === 'error' ? <p>{error}</p> : null}
    </form>
  );
}
