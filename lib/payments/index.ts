export type CheckoutPayload = {
  registrationId: string;
  amountEur: number;
  provider?: 'stripe' | 'paypal';
  locale?: 'es' | 'en';
};

export type CheckoutSession = {
  id: string;
  url: string;
};

export interface PaymentProvider {
  createCheckoutSession(payload: CheckoutPayload): Promise<CheckoutSession>;
  retrieveSession(sessionId: string): Promise<CheckoutSession | null>;
  handleWebhook(request: Request): Promise<{ ok: boolean }>;
}

class StripeProvider implements PaymentProvider {
  async createCheckoutSession(payload: CheckoutPayload): Promise<CheckoutSession> {
    return {
      id: `stripe_${payload.registrationId}`,
      url: `/payments/stripe/placeholder/${payload.registrationId}`
    };
  }

  async retrieveSession(sessionId: string): Promise<CheckoutSession | null> {
    return { id: sessionId, url: `/payments/stripe/placeholder/${sessionId}` };
  }

  async handleWebhook(): Promise<{ ok: boolean }> {
    return { ok: true };
  }
}

class PayPalProvider implements PaymentProvider {
  async createCheckoutSession(payload: CheckoutPayload): Promise<CheckoutSession> {
    return {
      id: `paypal_${payload.registrationId}`,
      url: `/payments/paypal/placeholder/${payload.registrationId}`
    };
  }

  async retrieveSession(sessionId: string): Promise<CheckoutSession | null> {
    return { id: sessionId, url: `/payments/paypal/placeholder/${sessionId}` };
  }

  async handleWebhook(): Promise<{ ok: boolean }> {
    return { ok: true };
  }
}

export function getPaymentProvider(provider?: 'stripe' | 'paypal'): PaymentProvider {
  if (provider === 'paypal' || process.env.PAYMENTS_PROVIDER === 'paypal') {
    return new PayPalProvider();
  }

  return new StripeProvider();
}
