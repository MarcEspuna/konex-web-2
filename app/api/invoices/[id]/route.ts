import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({
    id: params.id,
    status: 'draft',
    message: 'Invoice PDF generation will be enabled once payments go live.'
  });
}
