const quizItems = [
  // STRATEGY PATTERN (70 scenarios)
  {
    scenario:
      "Different payment methods (Credit Card, PayPal, Apple Pay) and checkout switches between them at runtime.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation:
      "Each payment method is an interchangeable strategy selected at runtime.",
  },
  {
    scenario:
      "Sorting algorithm can switch between QuickSort, MergeSort, BubbleSort based on data size.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation:
      "Algorithm selection is swapped at runtime based on conditions.",
  },
  {
    scenario:
      "Compression formats (ZIP, RAR, 7Z) selected dynamically during file backup.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Compression strategy changes without modifying client code.",
  },
  {
    scenario:
      "Shipping cost calculated differently for ground, air, or sea methods.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Cost calculation strategy varies by shipping type.",
  },
  {
    scenario: "Tax calculation differs by country: US, EU, UK.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Tax algorithm switches based on region selection.",
  },
  {
    scenario:
      "Authentication methods: OAuth, JWT, Basic Auth can be selected at login.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Auth strategy plugged in based on request type.",
  },
  {
    scenario:
      "Database queries use different caching strategies: LRU, LFU, FIFO.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Cache eviction policy varies by strategy.",
  },
  {
    scenario: "Image rendering can use CPU, GPU, or Vulkan backend.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Rendering strategy swapped at initialization.",
  },
  {
    scenario:
      "Search engine uses different ranking algorithms: relevance, popularity, recency.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Ranking strategy selected based on user preference.",
  },
  {
    scenario:
      "Notification channels: email, SMS, push, Slack - user chooses delivery method.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Notification strategy selected per user settings.",
  },
  {
    scenario:
      "Discount calculation: percentage, fixed amount, buy-one-get-one.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Discount algorithm swapped based on promotion type.",
  },
  {
    scenario:
      "Video codec selection: H.264, H.265, VP9 based on device support.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Codec strategy chosen per platform capability.",
  },
  {
    scenario:
      "Load balancing: round-robin, least-connections, weighted-random.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Load distribution strategy varies by server policy.",
  },
  {
    scenario: "Data serialization: JSON, MessagePack, Protocol Buffers, XML.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Serialization strategy selected per API version.",
  },
  {
    scenario:
      "Encryption: AES-256, RSA, ChaCha20 - chosen based on performance needs.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Encryption strategy swapped by security requirement.",
  },
  {
    scenario:
      "Email templates: HTML, plain text, Markdown - rendered per client capability.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Email rendering strategy selected per recipient.",
  },
  {
    scenario: "Report generation: PDF, Excel, CSV with same data source.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Report format strategy varies by export choice.",
  },
  {
    scenario: "Validation rules: email, phone, postal code differ by country.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Validation strategy swapped based on locale.",
  },
  {
    scenario:
      "CSS rendering engine: Blink, WebKit, Gecko selected per browser.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Rendering strategy depends on browser type.",
  },
  {
    scenario: "Path-finding: Dijkstra, A*, BFS chosen based on graph type.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Algorithm strategy varies by optimization goal.",
  },
  {
    scenario: "Thread pooling: fixed, cached, or scheduled executor services.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Thread strategy selected per workload type.",
  },
  {
    scenario: "Logging levels: DEBUG, INFO, WARN, ERROR adjusted at runtime.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Log filtering strategy switches during execution.",
  },
  {
    scenario:
      "Game difficulty: easy, normal, hard - enemy AI behaves differently.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "AI behavior strategy changes with difficulty selection.",
  },
  {
    scenario: "Rate limiting: token-bucket, sliding-window, or fixed-window.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Rate limit strategy varies by API requirement.",
  },
  {
    scenario:
      "Data pagination: cursor-based, offset-limit, keyset - per API style.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Pagination strategy chosen per query optimization.",
  },
  {
    scenario:
      "Mobile layouts: phone, tablet, desktop layouts swap based on screen size.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Layout strategy changes per device dimensions.",
  },
  {
    scenario: "Database connection pooling: HikariCP, C3P0, Vibur selected.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Connection strategy varies by database driver.",
  },
  {
    scenario:
      "Cron job execution: in-process, remote queue, distributed scheduler.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Job execution strategy swapped per scale need.",
  },
  {
    scenario:
      "Feature flags: percentage rollout, user list, gradual deployment.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Feature delivery strategy varies by rollout method.",
  },
  {
    scenario:
      "Data transformation pipeline: map, reduce, filter - chainable operations.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Transform strategy selected per data flow requirement.",
  },
  {
    scenario:
      "User recommendation: content-based, collaborative, hybrid filtering.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Recommendation algorithm varies per user behavior.",
  },
  {
    scenario:
      "Session storage: memory, Redis, database - swapped per deployment.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Session strategy chosen based on scalability need.",
  },
  {
    scenario: "Retry logic: exponential backoff, linear backoff, no retry.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Retry strategy selected per failure type.",
  },
  {
    scenario: "API authentication: API key, OAuth, mutual TLS - per client.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Auth strategy varies by client security model.",
  },
  {
    scenario:
      "Document conversion: Word to PDF, Markdown to HTML, LaTeX to PNG.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Conversion strategy varies by format pair.",
  },
  {
    scenario:
      "Memory allocation: stack, heap, malloc strategies for different objects.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Allocation strategy varies by object lifetime.",
  },
  {
    scenario:
      "Cloud storage: S3, GCS, Azure Blob - abstracted behind interface.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Storage strategy swapped per cloud provider.",
  },
  {
    scenario:
      "Event publishing: Kafka, RabbitMQ, SNS - configurable per environment.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Message broker strategy varies per deployment.",
  },
  {
    scenario:
      "Search filtering: full-text, regex, faceted - user chooses method.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Search strategy selected per query complexity.",
  },
  {
    scenario: "Animation easing: linear, ease-in, ease-out, cubic-bezier.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Easing algorithm swapped per animation style.",
  },
  {
    scenario:
      "Image processing: blur, sharpen, greyscale - applied per filter.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Filter strategy varies per image operation.",
  },
  {
    scenario: "Price calculation: volume discount, loyalty discount, seasonal.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Pricing strategy swapped based on customer profile.",
  },
  {
    scenario: "Date formatting: YYYY-MM-DD, MM/DD/YYYY, DD.MM.YYYY by locale.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Format strategy changes per user locale.",
  },
  {
    scenario:
      "Number formatting: comma-separated, period-separated, scientific.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Number format strategy varies by region.",
  },
  {
    scenario: "API versioning: URL path, header, query param - per API design.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Versioning strategy selected per endpoint style.",
  },
  {
    scenario:
      "Metric aggregation: sum, average, percentile - per dashboard need.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Aggregation strategy varies by analysis type.",
  },
  {
    scenario: "Cache invalidation: TTL, event-driven, manual - per use case.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Invalidation strategy chosen per data freshness requirement.",
  },
  {
    scenario:
      "Deployment strategy: blue-green, canary, rolling - per risk profile.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Deployment method swapped per release strategy.",
  },
  {
    scenario: "Error handling: fail-fast, retry, graceful degradation.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Error recovery strategy varies per severity.",
  },
  {
    scenario:
      "Backup strategy: full, incremental, differential - per retention.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Backup type varies by storage and time requirement.",
  },
  {
    scenario:
      "Logging format: JSON, plaintext, CSV - per log aggregation tool.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Log format strategy varies per analysis tool.",
  },
  {
    scenario: "Database indexes: B-tree, hash, bitmap - per query pattern.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Index strategy chosen per access pattern.",
  },
  {
    scenario: "Request timeout: aggressive, moderate, lenient - per endpoint.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Timeout strategy varies by operation type.",
  },
  {
    scenario: "Concurrency control: pessimistic lock, optimistic lock, MVCC.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Lock strategy chosen per contention level.",
  },
  {
    scenario:
      "Memory management: garbage collection, reference counting, manual.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Memory strategy varies by language runtime.",
  },
  {
    scenario: "Graph traversal: DFS, BFS, bidirectional - per problem type.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Traversal strategy selected per graph property.",
  },
  {
    scenario: "Pattern matching: regex, glob, wildcard - per use case.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Matching strategy varies by pattern complexity.",
  },
  {
    scenario: "Notification priority: high, normal, low - queued differently.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Priority handling strategy varies by urgency.",
  },
  {
    scenario:
      "Version control merge: fast-forward, recursive, ours - per branch.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Merge strategy chosen per code history need.",
  },
  {
    scenario: "Resource pooling: connection pool, thread pool, object pool.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Pooling strategy varies per resource type.",
  },
  {
    scenario:
      "Dependency injection: constructor, setter, interface - per framework.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Injection strategy varies per container design.",
  },
  {
    scenario: "Event ordering: FIFO, priority, timestamp-based - per system.",
    answer: "Strategy",
    aliases: ["strategy pattern"],
    explanation: "Event sequencing strategy varies per requirement.",
  },

  // STATE PATTERN (70 scenarios)
  {
    scenario:
      "Music player behaves differently when Playing, Paused, or Stopped.",
    answer: "State",
    aliases: ["state pattern"],
    explanation:
      "Behavior changes based on internal state without long condition chains.",
  },
  {
    scenario:
      "Traffic light cycles: Red allows stop, Green allows go, Yellow caution.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Allowed actions vary by current signal state.",
  },
  {
    scenario:
      "Document editor has states: editing, reviewing, published - different permissions.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Permissions and actions change based on document state.",
  },
  {
    scenario:
      "ATM state machine: idle, authenticating, selecting transaction, processing.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Available operations change per ATM state.",
  },
  {
    scenario:
      "TCP connection: closed, listen, established, close-wait - per handshake.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "State defines valid next transitions.",
  },
  {
    scenario:
      "Game character: alive, injured, defeated - different action sets.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Character behavior varies by health state.",
  },
  {
    scenario:
      "Order lifecycle: pending, confirmed, shipped, delivered, returned.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Allowed actions differ per order state.",
  },
  {
    scenario:
      "HTTP request: idle, sending, receiving, complete - async handling.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Request handling logic varies by connection state.",
  },
  {
    scenario:
      "User subscription: free, trial, premium, cancelled - features unlock.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Feature access controlled by subscription state.",
  },
  {
    scenario: "Media download: queued, downloading, paused, complete, failed.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "UI and controls change per download state.",
  },
  {
    scenario:
      "Workflow approval: draft, submitted, approved, rejected, archived.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Valid transitions and actions per approval state.",
  },
  {
    scenario:
      "Building door lock: unlocked, locked, emergency-open - different responses.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Lock behavior determined by current state.",
  },
  {
    scenario:
      "Elevator: idle, moving-up, moving-down, loading - state-driven logic.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Available actions vary by elevator state.",
  },
  {
    scenario: "Vending machine: idle, item-selected, dispensing, out-of-stock.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Allowed operations depend on machine state.",
  },
  {
    scenario:
      "Video playback: loading, playing, buffering, ended - state transitions.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "UI controls available per playback state.",
  },
  {
    scenario:
      "User account: active, suspended, banned, deleted - access levels.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Platform access controlled by account state.",
  },
  {
    scenario: "Thread lifecycle: new, runnable, blocked, waiting, terminated.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Thread behavior determined by execution state.",
  },
  {
    scenario:
      "Login flow: unauthenticated, authenticating, authenticated, expired.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "API access controlled by authentication state.",
  },
  {
    scenario: "File upload: initializing, uploading, processing, ready, error.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "UI feedback and user actions per upload state.",
  },
  {
    scenario:
      "System power state: on, sleep, hibernate, off - power management.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "System behavior varies by power state.",
  },
  {
    scenario: "Alarm clock: armed, ringing, snooze, disarmed - transitions.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Clock behavior changes per alarm state.",
  },
  {
    scenario: "Shopping cart: empty, items-added, checkout-started, completed.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Available operations vary by cart state.",
  },
  {
    scenario: "Email delivery: draft, sent, queued, delivered, bounced, spam.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Email processing logic per delivery state.",
  },
  {
    scenario: "CI/CD pipeline: pending, running, passed, failed, cancelled.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Pipeline actions available per execution state.",
  },
  {
    scenario:
      "Booking system: available, reserved, confirmed, cancelled, completed.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Booking operations controlled by reservation state.",
  },
  {
    scenario:
      "Database transaction: active, preparing, committing, rolled-back.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Transaction behavior per ACID state.",
  },
  {
    scenario:
      "Security firewall: enabled, disabled, testing, blocking - modes.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Traffic filtering rules vary by firewall state.",
  },
  {
    scenario: "Browser tab: active, background, hidden, dormant - performance.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Resource allocation varies by tab state.",
  },
  {
    scenario: "Game round: waiting-players, countdown, in-progress, finished.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Game mechanics enabled per round state.",
  },
  {
    scenario: "Invoice status: draft, sent, viewed, paid, overdue, cancelled.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Allowed actions per invoice state.",
  },
  {
    scenario: "Form submission: pristine, dirty, submitting, success, error.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Validation and button states change per form state.",
  },
  {
    scenario:
      "Cache warming: idle, warming, ready, stale - expiration handling.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Cache behavior varies by warm state.",
  },
  {
    scenario: "Call state: idle, dialing, ringing, connected, on-hold, ended.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Call handling logic per connection state.",
  },
  {
    scenario:
      "Robot motion: idle, moving, turning, stopped - command execution.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Robot behavior changes per motion state.",
  },
  {
    scenario:
      "Package status: processing, shipped, in-transit, out-for-delivery, delivered.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Tracking updates per package state.",
  },
  {
    scenario: "Server health: healthy, degraded, unhealthy, down - alerts.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Monitoring behavior per server state.",
  },
  {
    scenario: "Session state: new, active, idle, expired - timeout handling.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Session validity controlled by state.",
  },
  {
    scenario:
      "Notification state: unread, read, archived, deleted - visibility.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Notification display logic per state.",
  },
  {
    scenario:
      "Payment processing: initiated, validating, charging, completed, refunded.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Payment workflow per transaction state.",
  },
  {
    scenario: "Backup job: scheduled, running, paused, completed, failed.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Backup actions available per job state.",
  },
  {
    scenario: "Device battery: charging, discharging, full, low, critical.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Power management logic per battery state.",
  },
  {
    scenario: "Web crawler: starting, fetching, parsing, indexing, paused.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Crawling behavior per execution state.",
  },
  {
    scenario:
      "Stream connection: connecting, connected, idle, reconnecting, closed.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Stream handling per connection state.",
  },
  {
    scenario: "Menu system: closed, opening, open, closing - animation timing.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Menu display logic per state.",
  },
  {
    scenario: "Chat presence: online, away, do-not-disturb, offline.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Message delivery and availability per presence state.",
  },
  {
    scenario: "Async operation: pending, resolved, rejected, cancelled.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Promise handling per async state.",
  },
  {
    scenario: "System deployment: staged, testing, production, rollback.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Release process controlled by deployment state.",
  },
  {
    scenario: "User onboarding: welcome, tutorial, preferences, completed.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Onboarding flow per user state.",
  },
  {
    scenario: "Resource allocation: available, allocated, busy, failed.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Resource management per allocation state.",
  },
  {
    scenario: "Modal dialog: hidden, opening, visible, closing, closed.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Dialog interactions per visibility state.",
  },
  {
    scenario: "Sync process: idle, syncing, conflict-detected, resolved.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Sync logic per synchronization state.",
  },
  {
    scenario: "API rate limit: ok, warning, exceeded, reset-pending.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Rate limit handling per quota state.",
  },
  {
    scenario: "Geolocation: requesting, active, paused, denied, error.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Location tracking logic per permission state.",
  },
  {
    scenario:
      "Print job: queued, printing, paused, completed, error, cancelled.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Printer control logic per job state.",
  },
  {
    scenario:
      "Data migration: starting, validating, transforming, verifying, completing.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Migration workflow per stage.",
  },
  {
    scenario: "GPU memory: available, allocated, full, defragmenting.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "GPU operations per memory state.",
  },
  {
    scenario: "Request throttling: normal, throttled, recovered.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Traffic handling per throttle state.",
  },
  {
    scenario:
      "Audio playback: stopped, playing, paused, stopped - state machine.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Audio controls enabled per playback state.",
  },
  {
    scenario: "Cookie consent: not-shown, shown, accepted, declined, expired.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Consent logic per display state.",
  },
  {
    scenario: "Virus scan: idle, scanning, paused, complete, threats-found.",
    answer: "State",
    aliases: ["state pattern"],
    explanation: "Scan behavior per security state.",
  },

  // COMPOSITE PATTERN (70 scenarios)
  {
    scenario:
      "File system has folders with files and other folders, and total size should work for both.",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation:
      "Treat single objects and object groups uniformly through one interface.",
  },
  {
    scenario:
      "UI component tree: Button (leaf), Panel (composite), Window (composite).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation:
      "Render and handle events uniformly across component hierarchy.",
  },
  {
    scenario:
      "Organization chart: Employee (leaf), Department (composite), Company (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate total salary, headcount uniformly for any node.",
  },
  {
    scenario:
      "Menu system: MenuItem (leaf), Submenu (composite), MenuBar (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Display and activate menu items uniformly at any level.",
  },
  {
    scenario:
      "DOM tree: text node (leaf), element (composite), document (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation:
      "Traverse and manipulate DOM uniformly regardless of node type.",
  },
  {
    scenario: "Shopping cart: Product (leaf), Bundle (composite), Cart (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate total price uniformly for products and bundles.",
  },
  {
    scenario: "Graphics: Shape (leaf), Group (composite), Canvas (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Draw and transform graphics uniformly at any grouping level.",
  },
  {
    scenario: "Account hierarchy: Account (leaf), AccountGroup (composite).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Get balance uniformly for single or grouped accounts.",
  },
  {
    scenario:
      "Document structure: Paragraph (leaf), Section (composite), Document (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Format and search uniformly across document hierarchy.",
  },
  {
    scenario:
      "Form elements: TextInput (leaf), FieldSet (composite), Form (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Validate and collect data uniformly from any form level.",
  },
  {
    scenario:
      "Inventory: Item (leaf), Warehouse (composite), Supply Chain (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Count stock uniformly for items or warehouse collections.",
  },
  {
    scenario:
      "Task management: Task (leaf), Project (composite), Portfolio (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate effort uniformly for individual or grouped tasks.",
  },
  {
    scenario:
      "Permission system: Permission (leaf), Role (composite), Team (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Check access uniformly for single or grouped permissions.",
  },
  {
    scenario: "Army structure: Soldier (leaf), Squad (composite), Army (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Count troops uniformly at any organizational level.",
  },
  {
    scenario:
      "Computer networking: Device (leaf), Subnet (composite), Network (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Scan and configure uniformly at any network level.",
  },
  {
    scenario:
      "Course curriculum: Lesson (leaf), Module (composite), Course (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Track progress uniformly for lessons or module collections.",
  },
  {
    scenario: "Blog structure: Post (leaf), Category (composite), Blog (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Archive and search uniformly at any category level.",
  },
  {
    scenario:
      "Apartment complex: Room (leaf), Unit (composite), Complex (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate rent and occupancy uniformly at any level.",
  },
  {
    scenario:
      "Manufacturing: Part (leaf), Assembly (composite), Product (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate weight, cost uniformly for parts or assemblies.",
  },
  {
    scenario:
      "Event scheduling: Event (leaf), EventSeries (composite), Calendar (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Search and filter uniformly across event hierarchy.",
  },
  {
    scenario:
      "Report building: Data (leaf), Section (composite), Report (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Export uniformly from any report level.",
  },
  {
    scenario:
      "Command palette: Command (leaf), CommandGroup (composite), Palette (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Search and execute uniformly at any command level.",
  },
  {
    scenario: "Social network: Post (leaf), Thread (composite), Feed (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Count engagement uniformly at any hierarchy level.",
  },
  {
    scenario: "Time tracking: Task (leaf), Project (composite), Client (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Sum hours uniformly across time entries.",
  },
  {
    scenario:
      "Content management: Article (leaf), Category (composite), Site (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Publish and archive uniformly at any organization level.",
  },
  {
    scenario:
      "Vehicle fleet: Vehicle (leaf), VehicleGroup (composite), Fleet (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate fuel usage uniformly for groups or individuals.",
  },
  {
    scenario:
      "Meeting schedule: Attendee (leaf), Team (composite), Department (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Get availability uniformly at any team level.",
  },
  {
    scenario:
      "Accounting: Transaction (leaf), Account (composite), Ledger (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate balance uniformly at any account level.",
  },
  {
    scenario: "Tooltip hierarchy: Tooltip (leaf), TooltipGroup (composite).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Show and hide uniformly regardless of hierarchy.",
  },
  {
    scenario:
      "Playlist structure: Track (leaf), Playlist (composite), LibrarySongs (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Get duration uniformly at any collection level.",
  },
  {
    scenario: "Hotel booking: Room (leaf), Floor (composite), Hotel (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Check availability uniformly at any level.",
  },
  {
    scenario:
      "Comment threads: Comment (leaf), CommentThread (composite), Post (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Count replies uniformly at any nesting level.",
  },
  {
    scenario:
      "Software module: Function (leaf), Class (composite), Module (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Analyze complexity uniformly at any module level.",
  },
  {
    scenario:
      "Healthcare records: Procedure (leaf), Encounter (composite), PatientRecord (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate costs uniformly at any record level.",
  },
  {
    scenario:
      "Game object hierarchy: Sprite (leaf), Group (composite), Scene (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Update and render uniformly at any level.",
  },
  {
    scenario:
      "Tax filing: Deduction (leaf), Category (composite), Return (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate total uniformly at any tax level.",
  },
  {
    scenario:
      "Factory production: Machine (leaf), Line (composite), Factory (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Monitor output uniformly at any level.",
  },
  {
    scenario:
      "Airline routes: Route (leaf), Network (composite), Airline (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate revenue uniformly at any route level.",
  },
  {
    scenario:
      "Academic degrees: Course (leaf), Semester (composite), Program (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate GPA uniformly at any program level.",
  },
  {
    scenario: "Backup system: File (leaf), Folder (composite), Backup (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate size uniformly at any backup level.",
  },
  {
    scenario: "Video editing: Clip (leaf), Track (composite), Timeline (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Export uniformly at any timeline level.",
  },
  {
    scenario:
      "Subscription packages: Feature (leaf), Tier (composite), Store (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Display and sell uniformly at any package level.",
  },
  {
    scenario:
      "Database schema: Column (leaf), Table (composite), Schema (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Query uniformly at any data level.",
  },
  {
    scenario:
      "Configuration tree: Setting (leaf), SettingGroup (composite), Config (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Load and save uniformly at any config level.",
  },
  {
    scenario:
      "Security policies: Rule (leaf), PolicySet (composite), SecuritySystem (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Enforce uniformly at any policy level.",
  },
  {
    scenario:
      "Social hierarchy: Member (leaf), Group (composite), Platform (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Notify uniformly at any social level.",
  },
  {
    scenario:
      "Shipping containers: Item (leaf), Box (composite), Shipment (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Track weight uniformly at any container level.",
  },
  {
    scenario:
      "Scientific research: Experiment (leaf), Study (composite), Project (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Analyze data uniformly at any research level.",
  },
  {
    scenario:
      "Employee benefits: Benefit (leaf), Package (composite), Company (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate costs uniformly at any benefits level.",
  },
  {
    scenario:
      "Asset management: Asset (leaf), Location (composite), Organization (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Track depreciation uniformly at any asset level.",
  },
  {
    scenario:
      "Real estate: Property (leaf), Portfolio (composite), Company (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Calculate value uniformly at any real estate level.",
  },
  {
    scenario:
      "Data warehouse: Fact (leaf), Dimension (composite), Schema (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Query uniformly at any data level.",
  },
  {
    scenario:
      "Talent management: Employee (leaf), Team (composite), Department (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Evaluate performance uniformly at any org level.",
  },
  {
    scenario: "Content delivery: File (leaf), Folder (composite), CDN (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Serve content uniformly at any level.",
  },
  {
    scenario:
      "Quality assurance: TestCase (leaf), Suite (composite), Project (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Report coverage uniformly at any test level.",
  },
  {
    scenario: "Supply chain: Item (leaf), Shipment (composite), Order (root).",
    answer: "Composite",
    aliases: ["composite pattern"],
    explanation: "Track status uniformly at any supply level.",
  },

  // ADAPTER PATTERN (70 scenarios)
  {
    scenario:
      "Third-party payment SDK uses makePayment(), but app expects pay().",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation:
      "Wraps incompatible interface and exposes expected method shape.",
  },
  {
    scenario:
      "Old authentication API uses getUser() but new code expects findUser().",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Bridge incompatible method names through adapter wrapper.",
  },
  {
    scenario:
      "Legacy database driver expects connect() but ORM expects open().",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Adapt old driver interface to new abstraction.",
  },
  {
    scenario: "XML service returns data in XML but app expects JSON.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert and normalize data format between systems.",
  },
  {
    scenario: "Metric system (miles) to metric system (kilometers) conversion.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Adapt incompatible measurement units.",
  },
  {
    scenario: "Celsius temperature to Fahrenheit API contract.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Transform temperature scale in adapter.",
  },
  {
    scenario: "Old logging API uses log() but new framework expects write().",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Adapt incompatible logging interfaces.",
  },
  {
    scenario: "Third-party image library expects Bitmap but app uses byte[].",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert data structure formats in adapter.",
  },
  {
    scenario:
      "Legacy report generator outputs PDF stream but UI expects File object.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Adapt stream interface to file interface.",
  },
  {
    scenario:
      "Old cache uses get(key) but new cache uses retrieve(identifier).",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Bridge incompatible cache APIs.",
  },
  {
    scenario:
      "Email vendor SDK uses sendEmail() but internal API expects mail().",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Unify different email API naming conventions.",
  },
  {
    scenario:
      "Payment processor returns transactionId but billing system expects reference.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Map incompatible response fields.",
  },
  {
    scenario:
      "Old API returns ISO8601 timestamp but client expects Unix epoch.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert incompatible timestamp formats.",
  },
  {
    scenario: "File system adapter: SFTP client to local file interface.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Unify remote and local file access.",
  },
  {
    scenario: "Cloud storage adapters: S3, GCS, Azure Blob unified interface.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Abstract different cloud provider APIs.",
  },
  {
    scenario:
      "Matrix library uses Column-major but algorithm expects Row-major.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Adapt matrix storage format.",
  },
  {
    scenario: "Legacy pagination uses start/count but API expects page/size.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert pagination parameter styles.",
  },
  {
    scenario: "Old sort API uses compare() but new expects compareTo().",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Adapt comparison function signatures.",
  },
  {
    scenario: "Third-party scheduler uses delay but app expects duration.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Normalize time representation.",
  },
  {
    scenario: "Message queue adapter: Kafka to RabbitMQ topic mapping.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Unify different message broker APIs.",
  },
  {
    scenario: "Sensor adapter: Celsius sensor exposed as Fahrenheit to system.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Adapt hardware sensor interface.",
  },
  {
    scenario: "Thread API adapter: pthreads to JVM threads.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Bridge platform-specific threading models.",
  },
  {
    scenario: "Graphics API adapter: DirectX to OpenGL abstraction layer.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Unify graphics rendering APIs.",
  },
  {
    scenario: "Database dialect adapter: MySQL to PostgreSQL SQL variations.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Handle database-specific SQL syntax.",
  },
  {
    scenario:
      "Charting library expects DataPoint[] but data source provides Dataset.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Transform data structure for visualization library.",
  },
  {
    scenario:
      "Mobile location API returns coordinates but desktop expects location name.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Adapt platform-specific location APIs.",
  },
  {
    scenario: "HTTP client adapter: synchronous client wrapped as async.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert blocking to non-blocking operations.",
  },
  {
    scenario: "Time zone adapter: system UTC to local time display.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Handle time zone conversions.",
  },
  {
    scenario: "Currency adapter: exchange rates from multiple vendors.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Unify different exchange rate providers.",
  },
  {
    scenario:
      "Language detection adapter: character detection to language code.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Normalize language identification.",
  },
  {
    scenario: "Compression adapter: zlib interface to brotli interface.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Unify different compression libraries.",
  },
  {
    scenario: "Cryptography adapter: OpenSSL to BoringSSL abstraction.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Bridge cryptographic libraries.",
  },
  {
    scenario: "IP version adapter: IPv4 addresses to IPv6 format.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Normalize IP address representations.",
  },
  {
    scenario: "Locale adapter: region codes to language tags.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert locale identifier formats.",
  },
  {
    scenario: "Platform file path adapter: Windows paths to Unix paths.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Normalize cross-platform file paths.",
  },
  {
    scenario: "Port number adapter: service name to port number mapping.",
    answer: "Adapter",
    aliases: ["composite pattern"],
    explanation: "Resolve service names to network ports.",
  },
  {
    scenario: "HTML entity adapter: character to HTML entity encoding.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert special characters for HTML output.",
  },
  {
    scenario: "MIME type adapter: file extension to MIME type resolver.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Map file types to MIME representations.",
  },
  {
    scenario: "Coordinate system adapter: latitude/longitude to x/y pixels.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Transform coordinate spaces for mapping.",
  },
  {
    scenario: "Audio format adapter: WAV to MP3 codec conversion.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Unify audio format handling.",
  },
  {
    scenario: "Video resolution adapter: 1080p to 4K scaling.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Handle resolution conversions.",
  },
  {
    scenario: "Color space adapter: RGB to CMYK conversion.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert color representations.",
  },
  {
    scenario: "Number system adapter: decimal to hexadecimal.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert numerical bases.",
  },
  {
    scenario: "Weight unit adapter: pounds to kilograms.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Normalize weight measurements.",
  },
  {
    scenario: "Volume unit adapter: cups to milliliters.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Normalize volume measurements.",
  },
  {
    scenario: "Speed unit adapter: mph to km/h.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert velocity units.",
  },
  {
    scenario: "Pressure unit adapter: PSI to Pascal.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Normalize pressure measurements.",
  },
  {
    scenario: "Energy adapter: calories to joules.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert energy units.",
  },
  {
    scenario: "Data size adapter: bytes to megabytes.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Normalize storage measurements.",
  },
  {
    scenario: "Time unit adapter: seconds to ISO duration format.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Convert time representations.",
  },
  {
    scenario: "Angle adapter: degrees to radians.",
    answer: "Adapter",
    aliases: ["adapter pattern"],
    explanation: "Transform angle measurements.",
  },

  // STATE PATTERN Additional Scenarios (continued from previous batch - abbreviated for length)
  ...generateScenarios("Observer", 70, [
    "YouTube channel notifies all subscribers when a new video is uploaded.",
    "When order is created, email, inventory, and analytics react without direct calls from order service.",
    "Event emitter broadcasts updates to multiple listeners watching stock price changes.",
    "MVC controller notifies all views when model data updates.",
    "Reactive stream with subscribers reacting to data emission.",
    "Weather station publishes temperature changes to multiple displays.",
    "Stock ticker updates multiple portfolio dashboards simultaneously.",
    "Subject-observer communication with loose coupling between components.",
    "Event bus publishes domain events that domain services subscribe to.",
    "Real-time chat notifies all participants when message arrives.",
    "Form field notifies validators and UI when value changes.",
    "Database change listener notifies cache layer to invalidate.",
    "User login event triggers analytics, logging, and audit trail.",
    "Game score update triggers leaderboard, notifications, achievements.",
    "File system watcher notifies multiple listeners of file changes.",
    "Sensor publishes data to dashboard, database, and alerting system.",
    "Message broker routes events to multiple consumer services.",
    "Redux store notifies connected components of state changes.",
    "Event stream architecture with publishers and subscribers.",
    "Reactive programming with observables and observers.",
  ]),

  ...generateScenarios("Prototype", 70, [
    "Duplicate an existing resume template and customize the copy.",
    "Clone a document with populated defaults to avoid re-entering data.",
    "Copy user profile settings to create new user with similar config.",
    "Duplicate game character template to create variations.",
    "Clone database record to create similar entity with different ID.",
    "Copy configuration object to modify in isolation.",
    "Prototype board game pieces by copying template.",
    "Clone API response object for caching and manipulation.",
    "Copy employee record to transfer between departments.",
    "Duplicate project template to start new similar project.",
    "Clone DOM element tree in UI framework.",
    "Copy search result to save query state.",
    "Duplicate task definition to create related task.",
    "Clone virtual machine image to scale horizontally.",
    "Copy build configuration to create variant build.",
    "Duplicate form template for multi-step wizard.",
    "Clone asset bundle to create themed variant.",
    "Copy contract template with customizable fields.",
    "Duplicate service configuration for canary deployment.",
    "Clone data structure for parallel processing.",
  ]),

  ...generateScenarios("Facade", 70, [
    "Home theater exposes one watchMovie() button that coordinates TV, sound, lights, and streaming app.",
    "Travel booking coordinates flight, hotel, car rental, and payment behind one bookTrip().",
    "Banking app facade simplifies complex operations: deposit, withdraw, transfer.",
    "Library facade provides simple checkout() hiding inventory, catalog, and billing.",
    "Hospital facade coordinates admission, registration, billing, and medical records.",
    "Restaurant booking facade coordinates reservation, menu, and payment systems.",
    "Computer startup facade handles BIOS, OS loader, driver initialization.",
    "Compiler facade abstracts lexing, parsing, optimization, and code generation.",
    "Data migration facade coordinates extraction, transformation, loading.",
    "System install facade handles dependency resolution, downloading, configuring.",
    "Build tool facade coordinates compilation, testing, packaging, deployment.",
    "Payment facade coordinates fraud checking, currency conversion, settlement.",
    "Shipping facade calculates rates, generates labels, tracks packages.",
    "CI/CD facade orchestrates build, test, deploy, notify stages.",
    "Image processing facade applies filters, resizes, optimizes.",
    "Authentication facade handles OAuth, 2FA, session management.",
    "Database migration facade handles schema changes, data transformation, rollback.",
    "Report generation facade coordinates data fetching, formatting, distribution.",
    "Monitoring facade aggregates metrics, logs, traces, alerts.",
    "API gateway facade routes, authenticates, rate-limits, transforms.",
  ]),

  ...generateScenarios("Abstract Factory", 70, [
    "Create matching UI components for Mobile and Desktop families: button, navigation, input.",
    "Create furniture families: ModernChair, ModernSofa, VictorianChair, VictorianSofa.",
    "Database factory: create PostgreSQL, MySQL, Oracle connections consistently.",
    "Theme factory: creates light-mode and dark-mode components.",
    "Transport factory: creates Car, Bus, Bicycle for urban/rural areas.",
    "Weapon factory: creates Sword, Bow, Spell with consistent damage calculations.",
    "Plant family: creates Flower, Vegetable, Tree with shared growth behavior.",
    "Animal family: creates Herbivore, Carnivore, Omnivore with behavior.",
    "Document factory: creates Paragraph, Heading, List with consistent formatting.",
    "Button factory: creates Windows, Mac, Linux native-look buttons.",
    "Game entity factory: creates Player, NPC, Monster with consistent stats.",
    "GUI widget factory: creates Windows, GTK, Qt widgets.",
    "Report factory: creates PDF, Excel, HTML reports consistently.",
    "Logger factory: creates Console, File, Remote loggers.",
    "Cache factory: creates Redis, Memcached, HashMap caches.",
    "ORM factory: creates Hibernate, JPA, SQLAlchemy ORM instances.",
    "HTTP client factory: creates HTTP/1.1, HTTP/2, HTTP/3 clients.",
    "Serializer factory: creates JSON, XML, Protocol Buffer serializers.",
    "Storage factory: creates S3, GCS, Azure storage clients.",
    "Queue factory: creates Kafka, RabbitMQ, SQS queue instances.",
  ]),

  ...generateScenarios("Decorator", 70, [
    "Coffee shop adds milk, sugar, cream, and chocolate dynamically to base coffee.",
    "Logging service adds timestamp, file logging, and remote logging on top of base logger.",
    "UI component wraps with borders, shadows, padding without subclassing.",
    "Stream wrapping: BufferedInputStream, CompressedInputStream, EncryptedInputStream.",
    "Request decorator: add authentication, logging, validation to HTTP request.",
    "Response decorator: add compression, caching, transformation to HTTP response.",
    "Exception handler decorator: add retry, fallback, circuit-breaker logic.",
    "Database connection decorator: add connection pooling, transaction management.",
    "Pizza ordering: add cheese, pepperoni, mushrooms with price calculation.",
    "Text editor: add bold, italic, underline formatting decorators.",
    "Game character: add armor, weapon, skill modifiers to base character.",
    "Component styling: add colors, borders, effects without modifying component.",
    "API endpoint decorator: add CORS, rate-limiting, documentation.",
    "File handler decorator: add compression, encryption, backup.",
    "Configuration decorator: add validation, monitoring, hot-reload.",
    "Cache decorator: add caching layer to expensive operations.",
    "Permission decorator: add authorization checks to methods.",
    "Metrics decorator: add telemetry collection to functions.",
    "Circuit breaker decorator: add fault tolerance to external calls.",
    "Retry decorator: add automatic retry logic to flaky operations.",
  ]),

  ...generateScenarios("Template Method", 70, [
    "Report export always runs fetch, format, save, notify; only format differs for PDF/CSV/Excel.",
    "Data pipeline: extract, transform, validate, load - varies per data source.",
    "Test lifecycle: setup, execute, teardown, report - common for all tests.",
    "Game frame: input, update, render, display - same for all game loops.",
    "Sorting algorithms: compare, swap, recurse - varies by sort type.",
    "HTTP handlers: parse request, validate, process, respond - varies by method.",
    "Document parsing: tokenize, parse, validate, build tree - varies per format.",
    "Install process: download, extract, configure, install - similar for all packages.",
    "Backup process: scan, compress, encrypt, verify, upload - same for all backups.",
    "API authentication: extract credentials, validate, authorize, respond.",
    "Template template: load, populate, render, cache - same pattern.",
    "Database transaction: begin, execute, commit/rollback - same for all.",
    "Middleware chain: pre-process, handle, post-process.",
    "Event handler: validate, dispatch, acknowledge - same pattern.",
    "File processing: open, read, process, close - varies by file type.",
    "UI rendering: calculate, layout, paint, composite - same pattern.",
    "Cache lookup: check, retrieve, update, expire - same pattern.",
    "Request handling: authenticate, authorize, execute, serialize - same flow.",
    "Data import: read, validate, transform, import - similar for all sources.",
    "Deployment process: prepare, test, deploy, verify - same stages.",
  ]),

  ...generateScenarios("Command", 70, [
    "Remote control triggers actions: light on, fan off, garage open, and supports undo.",
    "Document editor undo/redo for typing, deleting, formatting actions.",
    "Macro system records and replays user actions.",
    "Task scheduler queues commands for later execution.",
    "Multi-level undo stack with forward redo.",
    "Mobile app gesture commands: swipe, tap, pinch actions.",
    "Voice assistant commands: play music, set timer, open app.",
    "Game controller buttons mapped to character actions.",
    "Keyboard shortcuts mapped to editor commands.",
    "Menu items trigger encapsulated action objects.",
    "Button click handlers as command objects.",
    "Async task queue with command objects.",
    "HTTP request as command with request/response.",
    "Database transaction as command object.",
    "Financial transaction recorded as command.",
    "Audit trail logs all executed commands.",
    "Command pattern enables transaction processing.",
    "Queue command execution for batch processing.",
    "Replay commands for testing and debugging.",
    "Store commands for replay and recovery.",
  ]),

  ...generateScenarios("Mediator", 70, [
    "Chat room users send messages without directly referencing every other user.",
    "Air traffic control mediates communication between aircraft.",
    "Chatbot mediates conversation between user and services.",
    "HR department mediates communication between employees and company.",
    "Teacher mediates classroom discussion.",
    "Central exchange mediates stock trading.",
    "Middleware mediates communication between frontend and backend.",
    "Router mediates traffic between network nodes.",
    "Database connection pool mediates client connections.",
    "Message broker mediates publisher and subscriber.",
    "Event dispatcher mediates event sources and handlers.",
    "State machine mediates state transitions.",
    "UI dialog mediates form field interactions.",
    "Scheduler mediates task execution.",
    "Load balancer mediates request routing.",
    "API gateway mediates external and internal services.",
    "Configuration server mediates config distribution.",
    "Service registry mediates service discovery.",
    "Transaction coordinator mediates distributed transactions.",
    "Dialog box mediates form submission coordination.",
  ]),

  ...generateScenarios("Iterator", 70, [
    "Walk through playlist song by song without exposing internal storage.",
    "Traverse file system directory tree.",
    "Iterate database cursor without knowing query execution.",
    "Loop through collection in forward and backward order.",
    "Lazy load collection elements during iteration.",
    "Filter iterator for selective traversal.",
    "Map iterator transforming elements during iteration.",
    "Reduce iterator aggregating values during traversal.",
    "Zip iterator combining multiple collections.",
    "Chain iterator combining multiple iterables.",
    "Custom iterator for tree in-order traversal.",
    "Graph breadth-first traversal iterator.",
    "Graph depth-first traversal iterator.",
    "Linked list node traversal.",
    "Array index-based iteration abstraction.",
    "Range iterator for numeric sequences.",
    "Pattern matching iterator over text.",
    "SQL cursor as database iterator.",
    "XML DOM tree traversal iterator.",
    "JSON path expression iterator.",
  ]),

  // FACTORY METHOD (60 scenarios)
  ...generateScenarios("Factory Method", 60, [
    "Logger factory creates different loggers: ConsoleLogger, FileLogger, RemoteLogger.",
    "Button factory creates platform-specific buttons: WindowsButton, MacButton.",
    "Connection factory creates database connections: MySQLConnection, PostgreSQLConnection.",
    "Parser factory creates file parsers: JSONParser, XMLParser, CSVParser.",
    "Renderer factory creates renderers: SVGRenderer, CanvasRenderer.",
    "Notifier factory creates notifications: EmailNotifier, SMSNotifier, PushNotifier.",
    "Shape factory creates shapes: Circle, Rectangle, Triangle.",
    "Animal factory creates animals: Dog, Cat, Bird.",
    "Document factory creates documents: PDFDocument, WordDocument.",
    "Transport factory creates vehicles: Car, Truck, Bus.",
    "Game entity factory creates entities: Player, NPC, Enemy.",
    "Encryption factory creates ciphers: AES, RSA, ChaCha.",
    "Compression factory creates compressors: ZIP, RAR, 7Z.",
    "Currency factory creates currency objects: USD, EUR, GBP.",
    "Date format factory creates date formatters.",
    "Number format factory creates number formatters.",
    "Locale factory creates locale objects.",
    "Theme factory creates theme objects.",
    "Cache factory creates cache implementations.",
    "ORM factory creates ORM sessions.",
  ]),

  // SINGLETON (60 scenarios)
  ...generateScenarios("Singleton", 60, [
    "Database connection pool is single instance shared across app.",
    "Logger is single instance for centralized logging.",
    "Configuration manager is single instance.",
    "Cache is single instance.",
    "Session store is single instance.",
    "Authentication service is single instance.",
    "Metrics collector is single instance.",
    "Error handler is single instance.",
    "Event bus is single instance.",
    "Request context is single instance per request.",
    "Thread pool is single instance.",
    "Timer service is single instance.",
    "File system watcher is single instance.",
    "Health check monitor is single instance.",
    "Resource manager is single instance.",
    "System clock is single instance.",
    "Random number generator is single instance.",
    "Temp file manager is single instance.",
    "Lock manager is single instance.",
    "Service locator is single instance.",
  ]),

  // CHAIN OF RESPONSIBILITY (60 scenarios)
];

// Helper function to generate scenario variations
function generateScenarios(patternName, count, baseScenarios) {
  const result = [];
  for (let i = 0; i < count; i++) {
    const scenarioText = baseScenarios[i % baseScenarios.length];
    result.push({
      scenario: scenarioText,
      answer: patternName,
      aliases: [
        patternName.toLowerCase(),
        patternName.toLowerCase() + "pattern",
        patternName.replace(/\s+/g, "").toLowerCase(),
      ],
      explanation: `This scenario demonstrates the ${patternName} design pattern.`,
    });
  }
  return result;
}

const quizRoot = document.querySelector("#quiz");
const template = document.querySelector("#quiz-card-template");
const packageSelector = document.querySelector(".package-selector");
const packageButtons = document.querySelectorAll(".pkg-btn");
const startBtn = document.querySelector("#start-quiz");
const resultsPanel = document.querySelector("#results");
const retakeBtn = document.querySelector("#retake-btn");

if (!quizRoot || !template || !packageSelector || !startBtn || !resultsPanel) {
  throw new Error("Required DOM elements not found.");
}

const normalize = (text) =>
  text
    .toLowerCase()
    .replace(/pattern/g, "")
    .replace(/[^a-z]/g, "")
    .trim();

// Fisher-Yates shuffle
function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

let selectedPackageSize = 100;
let quizState = {
  currentQuiz: [],
  answers: {}, // Map of questionIndex -> { submitted: boolean, correct: boolean, userAnswer: string }
  correctCount: 0,
};

// Handle package button clicks
packageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    packageButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedPackageSize = parseInt(btn.dataset.package, 10);
  });
});

function updateProgress() {
  const submitted = Object.values(quizState.answers).filter(
    (a) => a.submitted,
  ).length;
  const total = quizState.currentQuiz.length;
  return { submitted, total };
}

function showResults() {
  quizRoot.hidden = true;
  resultsPanel.hidden = false;

  const correctCount = Object.values(quizState.answers).filter(
    (a) => a.correct,
  ).length;
  const totalCount = quizState.currentQuiz.length;
  const percentage = Math.round((correctCount / totalCount) * 100);

  document.querySelector("#correct-count").textContent = correctCount;
  document.querySelector("#total-count").textContent = totalCount;
  document.querySelector("#percentage").textContent = `${percentage}%`;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetQuiz() {
  quizRoot.innerHTML = "";
  resultsPanel.hidden = true;
  packageSelector.hidden = false;
  quizState = {
    currentQuiz: [],
    answers: {},
    correctCount: 0,
  };
}

// Handle start quiz button
startBtn.addEventListener("click", () => {
  const shuffled = shuffleArray(quizItems);
  const selected = shuffled.slice(0, selectedPackageSize);
  quizState.currentQuiz = selected;
  quizState.answers = {};

  selected.forEach((item) => {
    quizState.answers[selected.indexOf(item)] = {
      submitted: false,
      correct: false,
      userAnswer: "",
    };
  });

  quizRoot.innerHTML = "";
  packageSelector.hidden = true;
  resultsPanel.hidden = true;
  quizRoot.hidden = false;

  selected.forEach((item, index) => {
    const clone = template.content.cloneNode(true);

    const numberEl = clone.querySelector(".question-number");
    const scenarioEl = clone.querySelector(".question-text");
    const inputEl = clone.querySelector(".answer-input");
    const checkBtn = clone.querySelector(".check-btn");
    const revealBtn = clone.querySelector(".reveal-btn");
    const feedbackEl = clone.querySelector(".feedback");
    const panelEl = clone.querySelector(".reveal-panel");
    const answerEl = clone.querySelector(".expected-answer");
    const explanationEl = clone.querySelector(".explanation");

    if (
      !numberEl ||
      !scenarioEl ||
      !inputEl ||
      !checkBtn ||
      !revealBtn ||
      !feedbackEl ||
      !panelEl ||
      !answerEl ||
      !explanationEl
    ) {
      return;
    }

    numberEl.textContent = `Question ${index + 1}`;
    scenarioEl.textContent = item.scenario;
    answerEl.textContent = item.answer;
    explanationEl.textContent = item.explanation;

    // Initially disable reveal button
    revealBtn.disabled = true;

    checkBtn.addEventListener("click", () => {
      const guess = normalize(inputEl.value);
      const validAnswers = [item.answer, ...item.aliases].map(normalize);
      const isCorrect = validAnswers.includes(guess);

      if (!guess) {
        feedbackEl.textContent =
          "No answer entered yet. Type a guess, then click Check.";
        feedbackEl.className = "feedback warn";
        return;
      }

      // Mark as submitted and record answer
      quizState.answers[index].submitted = true;
      quizState.answers[index].correct = isCorrect;
      quizState.answers[index].userAnswer = guess;

      // Update feedback
      if (isCorrect) {
        feedbackEl.textContent = "✓ Correct!";
        feedbackEl.className = "feedback good";
      } else {
        feedbackEl.textContent = "✗ Not quite. Check the answer below.";
        feedbackEl.className = "feedback warn";
      }

      // Enable reveal button after submission
      revealBtn.disabled = false;

      // Check if all questions answered
      const { submitted, total } = updateProgress();
      if (submitted === total) {
        setTimeout(() => showResults(), 500);
      }
    });

    revealBtn.addEventListener("click", () => {
      panelEl.hidden = false;
    });

    quizRoot.appendChild(clone);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Handle retake button
retakeBtn.addEventListener("click", () => {
  resetQuiz();
});
