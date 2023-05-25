class DatabaseConnection {
  private static instance: DatabaseConnection;
  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): DatabaseConnection {
    if (!this.instance) {
      console.log("Creating a single database.");
      this.instance = new DatabaseConnection();
    } else console.log("Database has already been created");
    return this.instance;
  }
}
function singletonClient() {
  for (let i = 0; i < 5; i++) {
    DatabaseConnection.getInstance();
  }
}

singletonClient();
