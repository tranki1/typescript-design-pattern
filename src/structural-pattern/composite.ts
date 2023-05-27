interface FileSystemItem {
  display(indent: string): void;
}

class CustomFile implements FileSystemItem {
  constructor(private name: string) {}
  display(indent = ""): void {
    console.log(`${indent}${this.name}`);
  }
}

class CustomDirectory implements FileSystemItem {
  private items: FileSystemItem[] = [];
  constructor(private name: string) {}
  add(item: FileSystemItem): void {
    this.items.push(item);
  }
  display(indent = ""): void {
    console.log(`${indent}${this.name}/`);
    this.items.forEach((item) => item.display(indent + "  "));
  }
}

// Client
function compositeClient() {
  const root = new CustomDirectory("root");
  const file1 = new CustomFile("file1.txt");
  const file2 = new CustomFile("file2.txt");
  const subDir = new CustomDirectory("subdir");
  const file3 = new CustomFile("file3.txt");

  root.add(file1);
  root.add(file2);
  subDir.add(file3);
  root.add(subDir);

  root.display("");
}

compositeClient();
