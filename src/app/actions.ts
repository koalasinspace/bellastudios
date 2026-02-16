'use server';

import { adminAuth } from '@/lib/firebase/admin';

export async function setRole(email: string, role: string) {
  try {
    const user = await adminAuth.getUserByEmail(email);
    await adminAuth.setCustomUserClaims(user.uid, { role });
    return { success: true, message: `Successfully set role of ${email} to ${role}.` };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
