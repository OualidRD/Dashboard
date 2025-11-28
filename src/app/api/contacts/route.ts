import { NextResponse } from 'next/server';
import { readCsv } from '@/lib/readCsv';

export async function GET() {
  try {
    // Middleware protects this route, so no auth checks needed
    const contacts = await readCsv('contacts_contact_rows.csv');
    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return NextResponse.json(
      { error: 'Failed to read contacts', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
