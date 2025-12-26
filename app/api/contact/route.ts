import { NextResponse } from 'next/server';

function isValidPayload(payload: Record<string, unknown>) {
  return (
    typeof payload.name === 'string' &&
    typeof payload.email === 'string' &&
    typeof payload.message === 'string'
  );
}

export async function POST(request: Request) {
  const payload = await request.json();

  if (!isValidPayload(payload)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    receivedAt: new Date().toISOString()
  });
}
