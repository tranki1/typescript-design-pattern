class TV {
  turnOn(): void {
    console.log("TV is now ON");
  }
  turnOff(): void {
    console.log("TV is now OFF");
  }
}

class SoundSystem {
  turnOn(): void {
    console.log("Sound System is now ON");
  }
  turnOff(): void {
    console.log("Sound System is now OFF");
  }
}

class Light {
  turnOn(): void {
    console.log("Lights are now ON");
  }
  turnOff(): void {
    console.log("Lights are now OFF");
  }
}

class HomeTheaterFacade {
  private tv = new TV();
  private soundSystem = new SoundSystem();
  private light = new Light();

  watchMovie(): void {
    console.log("Get ready to watch a movie...");
    this.tv.turnOn();
    this.soundSystem.turnOn();
    this.light.turnOff();
  }

  endMovie(): void {
    console.log("Shutting down the home theater...");
    this.tv.turnOff();
    this.soundSystem.turnOff();
    this.light.turnOn();
  }
}

function facadeClient() {
  const homeTheater = new HomeTheaterFacade();
  homeTheater.watchMovie();

  // Simulate watching a movie for a while
  setTimeout(() => {
    homeTheater.endMovie();
  }, 5000);
}
facadeClient();
