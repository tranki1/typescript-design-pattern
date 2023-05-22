import { ContentBuilder } from "./content/ContentBuilder";

console.log("Start");
const content = new ContentBuilder()
  .title("My First Article")
  .body("This is the body of my first article.")
  .type("article")
  .tags(["typescript", "design patterns"])
  .authorId("author123")
  .published()
  .build();

console.log(content);
