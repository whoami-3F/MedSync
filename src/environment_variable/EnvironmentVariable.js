const EnvironmentVariable = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITEURL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITEDATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITECOLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITEBUCKET_ID),
};

export default EnvironmentVariable;
