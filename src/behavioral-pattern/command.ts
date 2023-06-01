interface JobCommand {
  execute(): void;
}

class SendEmailCommand implements JobCommand {
  constructor(private email: string) {}
  execute(): void {
    console.log(`Sending email to ${this.email}`);
  }
}

class GenerateReportCommand implements JobCommand {
  constructor(private reportType: string) {}
  execute(): void {
    console.log(`Generating ${this.reportType} report`);
  }
}
//Invoker
class JobScheduler {
  private jobQueue: JobCommand[] = [];

  addJob(job: JobCommand): void {
    this.jobQueue.push(job);
  }

  runJobs(): void {
    while (this.jobQueue.length > 0) {
      const job = this.jobQueue.shift();
      if (job) {
        job.execute();
      }
    }
  }
}

// Client
function commandClient() {
  const scheduler = new JobScheduler();
  scheduler.addJob(new SendEmailCommand("test@example.com"));
  scheduler.addJob(new GenerateReportCommand("sales"));
  scheduler.runJobs();
}
commandClient();
