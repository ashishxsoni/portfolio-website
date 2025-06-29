import { Client, Databases, Storage, Query } from "appwrite";
import config from "../config/config";

export class ProjectService {
  client = new Client();
  databases;
  storage; // Renamed from Projectbucket for consistency

  constructor() {
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectId);
      
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client); // Initialize Storage
  }

  async getAllProjects() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteProjectCollectionId,
        [Query.orderDesc('$updatedAt')]
      );
    } catch (error) {
      console.error("Appwrite Error :: getAllProjects ::", error);
      return { documents: [] };
    }
  }

  async getProjectImage(fileId) {
    try {
      return this.storage.getFileView( // Use the initialized storage instance
        config.appwriteProjectImagesBucketId,
        fileId
      );
    } catch (error) {
      console.error("Appwrite Error :: getProjectImage ::", fileId, error);
      return null;
    }
  }
}

const projectService = new ProjectService();
export default projectService;