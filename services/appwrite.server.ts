import { Movie, TrendingMovie } from "@/interfaces/interfaces";
import { Client, Databases, ID, Query } from "react-native-appwrite";
import { COLLECTION_ID, DATABASE_ID, PROJECT_ID } from "@/constants/config";

export class AppWriteService {
  client: any;
  databaseModel: any;
  constructor() {
    this.client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(PROJECT_ID);
    this.databaseModel = new Databases(this.client);
  }

  public async updateSearchCount(query: string, movie: Movie): Promise<any> {
    try {
      const exist = await this.databaseModel.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("searchTerm", query)],
      );
      if (exist.documents.length > 0) {
        await this.databaseModel.updateDocument(
          DATABASE_ID,
          COLLECTION_ID,
          exist.documents[0].$id,
          {
            count: exist.documents[0].count + 1,
          },
        );
      } else {
        await this.databaseModel.createDocument(
          DATABASE_ID,
          COLLECTION_ID,
          ID.unique(),
          {
            searchTerm: query,
            poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            movie_id: movie.id,
            title: movie.title,
            count: 0,
          },
        );
      }
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  }
  public async getTrendingMovies(): Promise<TrendingMovie[]> {
    try {
      const result = await this.databaseModel.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.orderDesc("$createdAt"), Query.limit(5)],
      );
      return result.documents;
    } catch (err: any) {
      console.error(err);
      throw err;
    }
  }
}
