export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:4200/sign-in-complete',
  // This must be true.
  handleCodeInApp: true,
  // The domain must be configured in Firebase Hosting and owned by the project.
  linkDomain: 'dndprofessions.web.app',
};
