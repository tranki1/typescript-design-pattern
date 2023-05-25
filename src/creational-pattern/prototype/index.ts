// Prototype Interface
abstract class Prototype<T> {
  abstract clone(): T;
  abstract print(): void;
}
// Concrete Resume

class Resume extends Prototype<Resume> {
  public title: string;
  public sections: string[] = [];
  public theme: string;

  constructor(title: string, sections: string[], theme: string) {
    super();
    this.title = title;
    this.sections = sections;
    this.theme = theme;
  }

  clone(): Resume {
    console.log(
      `Cloning resume of ${this.title} with sections: ${this.sections.join(", ")}`,
    );
    return new Resume(this.title, [...this.sections], this.theme);
  }

  print(): void {
    console.log(
      `Title: ${this.title}, Sections: ${this.sections.join(", ")}, Theme: ${this.theme}`,
    );
  }
}

// Client
function resumeClient() {
  const developerResume = new Resume(
    "John Doe",
    ["Experience", "Education"],
    "Modern",
  );
  const designerResume = new Resume(
    "Jane Smith",
    ["Portfolio", "Skills"],
    "Creative",
  );
  const clonedDeveloperResume = developerResume.clone();
  const clonedDesignerResume = designerResume.clone();
  clonedDesignerResume.sections.push("Awards");

  developerResume.print();
  clonedDeveloperResume.print();
  designerResume.print();
  clonedDesignerResume.print();
}

resumeClient();
