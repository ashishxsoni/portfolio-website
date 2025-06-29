import { Client, Databases, Storage, Query } from "appwrite";
import config from "../config/config";

export class ProjectService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectId);
      
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async getAllProjects() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteProjectCollectionId,
        [Query.orderDesc("$createdAt")] // Newest projects first
      );
    } catch (error) {
      console.error("Appwrite Error :: getAllProjects ::", error);
      return { documents: [] }; // Return empty array on error
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