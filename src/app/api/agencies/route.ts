import { NextResponse } from 'next/server';
import { readCsv } from '@/lib/readCsv';

export async function GET() {
  try {
    // Middleware protects this route, so no auth checks needed
    const agencies = await readCsv('agencies_agency_rows.csv');
    return NextResponse.json(agencies);
  } catch (error) {
    console.error('Error reading agencies:', error);
    return NextResponse.json(
      { error: 'Failed to read agencies', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
