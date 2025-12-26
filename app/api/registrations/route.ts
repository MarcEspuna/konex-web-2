import { NextResponse } from 'next/server';

function isValidPayload(payload: Record<string, unknown>) {
  return (
    typeof payload.eventId === 'string' &&
    typeof payload.eventTitle === 'string' &&
    typeof payload.name === 'string' &&
    typeof payload.email === 'string' &&
    payload.policyAccepted !== undefined
  );
}

export async function POST(request: Request) {
  const payload = await request.json();

  if (!isValidPayload(payload)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const registrationId = `reg_${Math.random().toString(36).slice(2, 10)}`;

  return NextResponse.json({
    ok: true,
    registrationId,
    paymentStatus: 'awaiting_payment'
  });
}
