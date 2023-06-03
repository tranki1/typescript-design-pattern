interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(title: string): void;
}

interface Observer {
  update(videoTitle: string): void;
}

class YouTubeChannel implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(title: string): void {
    this.observers.forEach((observer) => observer.update(title));
  }

  uploadVideo(title: string): void {
    console.log(`New video uploaded: ${title}`);
    this.notify(title);
  }
}

class Subscriber implements Observer {
  constructor(private name: string) {}

  update(title: string): void {
    console.log(`${this.name} received notification about new video: ${title}`);
  }
}

function observerClient(): void {
  const channel = new YouTubeChannel();

  const subscriber1 = new Subscriber("Alice");
  const subscriber2 = new Subscriber("Bob");

  channel.subscribe(subscriber1);
  channel.subscribe(subscriber2);

  channel.uploadVideo("Design Patterns in TypeScript");

  channel.unsubscribe(subscriber1);

  channel.uploadVideo("Observer Pattern Explained");
}

observerClient();
