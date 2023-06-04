interface AuthStrategy {
  authenticate(): boolean;
}

class EmailPasswordAuth implements AuthStrategy {
  constructor(
    private email: string,
    private password: string,
  ) {}

  authenticate(): boolean {
    console.log(`Authenticating with email: ${this.email}`);

    return this.email.includes("@") && this.password.length >= 6;
  }
}

class GoogleAuth implements AuthStrategy {
  constructor(private googleToken: string) {}

  authenticate(): boolean {
    console.log("Authenticating with Google");

    return this.googleToken.length > 0;
  }
}

class FacebookAuth implements AuthStrategy {
  constructor(private facebookToken: string) {}

  authenticate(): boolean {
    console.log("Authenticating with Facebook");

    return this.facebookToken.length > 0;
  }
}

//Context

class AuthService {
  constructor(private strategy: AuthStrategy) {}

  setStrategy(strategy: AuthStrategy): void {
    this.strategy = strategy;
  }

  login(): void {
    const isAuthenticated = this.strategy.authenticate();

    if (isAuthenticated) {
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  }
}

function strategyClient(): void {
  const authService = new AuthService(
    new EmailPasswordAuth("kim@example.com", "secret123"),
  );

  authService.login();

  authService.setStrategy(new GoogleAuth("valid-google-token"));

  authService.login();

  authService.setStrategy(new FacebookAuth("valid-facebook-token"));

  authService.login();
}

strategyClient();
