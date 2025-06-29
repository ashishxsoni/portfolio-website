import { Client, Databases, Query } from "appwrite";
import config from "../config/config";

export class ProjectService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async getAllProjects() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteProjectCollectionId,
        [
          Query.orderDesc('$updatedAt'), // Sort by most recently updated
          Query.limit(100) // Optional: limit results
        ]
      );
    } catch (error) {
      console.error("Appwrite Error :: getAllProjects ::", error);
      return { documents: [] };
    }
  }

  async getProjectImage(imageId) {
    try {
      return this.storage.getFileView(
        config.appwriteProjectImagesBucketId,
        imageId
      );
    } catch (error) {
      console.error("Appwrite Error :: getProjectImage ::", imageId, error);
      return null;
    }
  }
}

const projectService = new ProjectService();
export default projectService;