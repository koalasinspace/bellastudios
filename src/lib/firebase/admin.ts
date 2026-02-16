import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp();
}

const adminAuth = admin.auth();

export { adminAuth };
