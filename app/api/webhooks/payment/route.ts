import { NextResponse } from 'next/server';

import { getPaymentProvider } from '@/lib/payments';

export async function POST(request: Request) {
  const provider = getPaymentProvider();
  const result = await provider.handleWebhook(request);

  return NextResponse.json({ ok: result.ok });
}
