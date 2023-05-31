abstract class DataExporter {
  export(): void {
    this.fetchData();
    this.transformData();
    this.saveData();
    this.notifyUser();
  }

  fetchData(): void {
    console.log("Fetching data...");
  }

  abstract transformData(): void;

  saveData(): void {
    console.log("Saving data...");
  }

  notifyUser(): void {
    console.log("Notifying user...");
  }
}

class CsvDataExporter extends DataExporter {
  transformData(): void {
    console.log("Transforming data to CSV format...");
  }
}

class JsonDataExporter extends DataExporter {
  transformData(): void {
    console.log("Transforming data to JSON format...");
  }
}

function templateClient() {
  const csvExporter = new CsvDataExporter();
  csvExporter.export();

  const jsonExporter = new JsonDataExporter();
  jsonExporter.export();
}

templateClient();
