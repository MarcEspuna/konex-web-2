import { NextResponse } from 'next/server';

import { getPaymentProvider } from '@/lib/payments';

export async function POST(request: Request) {
  const payload = await request.json();

  if (typeof payload.registrationId !== 'string' || typeof payload.amountEur !== 'number') {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const provider = getPaymentProvider(payload.provider);
  const session = await provider.createCheckoutSession(payload);

  return NextResponse.json({
    ok: true,
    session
  });
}
