import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  return NextResponse.json({
    id,
    status: 'draft',
    message: 'Invoice PDF generation will be enabled once payments go live.'
  });
}
