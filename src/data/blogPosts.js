/**
 * Blog posts data file.
 *
 * To add a new blog post:
 *   1. Add an object to the array below.
 *   2. Give it a unique `slug` (used in the URL: /blog/<slug>).
 *   3. Fill in title, date, excerpt, tags, and content sections.
 *   4. The card on the homepage will appear automatically.
 *
 * Each content section can optionally include an `image` and `imageAlt`
 * to render an inline image below the heading (like the reference blog).
 */

import csharpecommerceImg from "../assets/csharpecommerce.png";
import csharpswaggerImg from "../assets/csharpswagger.png";
import miniblogapiImg from "../assets/miniblogapi.png";

const blogPosts = [
  {
    slug: "csharp-ecommerce-learning",
    title:
      "What I Learned Building a Small C# ASP.NET Core MVC E-Commerce App",
    date: "April 2026",
    excerpt:
      "A personal walkthrough of building a small e-commerce prototype with ASP.NET Core MVC, EF Core and SQLite — from project scaffold to checkout page.",
    tags: ["C#", "ASP.NET Core", "MVC", "EF Core", "SQLite"],
    repoUrl: "https://github.com/bron322/csharpecommerce",
    coverImage: csharpecommerceImg,
    content: [
      {
        heading: "Why I Built This",
        body: `I've been wanting to get more comfortable with C# and the .NET ecosystem for a while. Most of my experience has been in JavaScript and Python, so picking up a statically-typed, opinionated framework felt like a good way to stretch. I decided to build something concrete instead of just following tutorials — a small e-commerce app that has products, a cart, checkout, and an admin panel. Nothing production-grade, just enough to force me through the full stack.

The idea was simple: build a store where you can browse products, add them to a cart, go through a mock checkout, and manage products from an admin page. That scope hit enough surface area — database modelling, routing, form handling, CRUD — without being overwhelming.`,
      },
      {
        heading: "What the Project Does",
        image: csharpecommerceImg,
        imageAlt: "Product listing page of the C# e-commerce app",
        body: `The app is a small ASP.NET Core MVC e-commerce prototype. Here's what it covers:

• **Home page** — a basic landing page.

• **Product listing** — browse all products with search and category filtering.

• **Product details** — view individual product info.

• **Cart** — add products, adjust quantities, see totals.

• **Mock checkout** — a simple form that simulates placing an order.

• **Admin CRUD** — create, edit, and delete products from an admin-facing page.

On first run, the app seeds the database with categories and eight sample products, so you have something to work with immediately.`,
      },
      {
        heading: "The Stack",
        body: `The technology choices were straightforward:

• **ASP.NET Core MVC** (.NET 10) — the web framework and project structure.

• **Entity Framework Core** — the ORM for all database operations.

• **SQLite** — lightweight file-based database, no server setup needed.

• **Razor Views** — server-side HTML templating.

• **Bootstrap** — quick UI styling so I could focus on backend logic.

I also enabled Swagger for API exploration, which was helpful when I wanted to test endpoints in isolation.`,
      },
      {
        heading: "How MVC Helped Me Understand the Layout",
        body: `Before this project, MVC was just an acronym I could recite but hadn't truly internalised. Building the app made the separation click.

**Models** live in the \`Models/\` folder and represent database entities — \`Product\`, \`Category\`, \`CartItem\`, etc. They map directly to database tables via EF Core. I realised early on that models should stay lean; they describe *what* the data looks like, not how it's displayed.

**Views** are Razor \`.cshtml\` files in the \`Views/\` folder. Each controller gets its own subfolder. The templating syntax felt a bit unfamiliar at first — mixing C# directly into HTML — but it grew on me. It's powerful once you get used to the \`@model\` directive and how data flows from controllers.

**Controllers** are the traffic cops. Each action method handles an HTTP request, fetches or modifies data through EF Core, and returns a view. The routing conventions (\`/Controller/Action/Id\`) made the URL structure predictable, which helped a lot when debugging.

The thing that surprised me most: once you follow the conventions, the framework does a lot for you. I didn't have to manually wire routes for most pages — the default \`[controller]/[action]/{id?}\` pattern just worked.`,
      },
      {
        heading: "Models, DTOs, ViewModels — Why So Many Shapes?",
        body: `This was genuinely confusing at first. I kept asking: why can't I just pass the database model straight to the view?

Turns out, you *can* — but you probably shouldn't. Here's how I ended up thinking about it:

• **Models** (\`Models/\` folder) — these are your EF Core entities. They mirror the database schema. You don't want your views depending on database column names or navigation properties they shouldn't know about.

• **ViewModels** (\`ViewModels/\` folder) — these are shapes tailored for a specific page. For example, the product listing page needs the product list *and* the list of categories for the filter dropdown. Neither the \`Product\` model nor the \`Category\` model alone has both, so a \`ProductListViewModel\` combines them.

• **DTOs** — I didn't use formal DTOs everywhere, but the concept clicked: they're the bridge between layers. If I had an API returning JSON, I'd shape the output as a DTO rather than leaking my entity structure.

Once I understood that each "shape" exists to serve a specific boundary (database ↔ logic ↔ view), the extra classes stopped feeling like boilerplate and started feeling like guardrails.`,
      },
      {
        heading: "Entity Framework Core + SQLite",
        body: `EF Core was the biggest learning curve in this project. Coming from MongoDB and Mongoose, the whole migrations-and-schema approach felt very different.

For this prototype, I used \`Database.EnsureCreated()\` in \`Program.cs\` instead of proper migrations. This auto-creates the database and seeds it with initial data on first run. It's simple and works great for prototyping, but I know that in production you'd switch to \`dotnet ef migrations\` to track schema changes properly.

The \`AppDbContext\` in \`Data/AppDbContext.cs\` defines all the \`DbSet<>\` properties and overrides \`OnModelCreating\` to seed categories and sample products. Writing the seed data felt satisfying — you define it once, and EF takes care of inserting it.

SQLite was a good pick for this project. No server process, no connection strings to configure — just a file called \`ecommerce.db\` that appears in the project root. For a learning project, that simplicity matters a lot.

One thing that tripped me up: lazy loading isn't on by default. The first time I accessed \`product.Category\` in a view and got null, I spent a while debugging before realising I needed to \`.Include(p => p.Category)\` in my query. Small thing, but it's the kind of gotcha that tutorials gloss over.`,
      },
      {
        heading: "How the Features Fit Together",
        body: `Building each feature gave me a different angle on the framework:

**Product listing + search + filters** — taught me how to compose LINQ queries conditionally. If there's a search term, add a \`.Where()\`; if there's a category filter, add another. Chain them together and EF translates it all to SQL.

**Product details** — simple but reinforced the \`Include()\` pattern. The detail page needs the product and its category name, so that's a natural join.

**Cart** — this was trickier than expected. I stored cart data in the session (in-memory for now). The cart controller manages adding, removing, and updating quantities. The trickiest bit was keeping the cart total in sync as items change.

**Mock checkout** — intentionally minimal. It captures a name and address, "places" the order, and clears the cart. No payment integration, but it completed the user flow from browsing to purchase.

**Admin CRUD** — the most educational feature. The create and edit forms use \`asp-for\` tag helpers to bind form fields directly to model properties. Model validation attributes (\`[Required]\`, \`[Range]\`) handle input checking. It was satisfying to see how much plumbing the framework handles — binding, validation, error messages — all from annotations.`,
      },
      {
        heading: "What I Learned About Swagger UI",
        image: csharpswaggerImg,
        imageAlt: "Swagger UI showing the API endpoints for the e-commerce app",
        body: `One of the pleasant surprises in this project was Swagger. I'd heard of it before but never set it up myself. In ASP.NET Core, it's almost trivially easy — you add \`builder.Services.AddEndpointsApiExplorer()\` and \`builder.Services.AddSwaggerGen()\` in \`Program.cs\`, and just like that you get a full interactive API docs page at \`/swagger\`.

What made it genuinely useful was being able to test API endpoints directly from the browser without writing a single line of frontend code or using Postman. I could fire off GET, POST, PUT, and DELETE requests right from the Swagger UI, see the response payloads, and verify my controllers were returning the right data. It felt like having a built-in debugging dashboard.

It also helped me understand how ASP.NET Core maps controller actions to HTTP endpoints. Seeing the auto-generated route list made the relationship between \`[HttpGet]\`, \`[HttpPost]\`, and the URL patterns much more concrete. I could see exactly which parameters each endpoint expected and what the response schema looked like.

For a learning project, Swagger removed a lot of friction. Instead of switching between tools, I could stay in the browser and iterate quickly. If I were building something bigger, I'd also look into customising the Swagger docs with XML comments and operation summaries — but for a prototype, the defaults were more than enough.`,
      },
      {
        heading: "What Confused Me at First",
        body: `A few things that took longer than I expected to figure out:

**Routing conventions vs. explicit routes.** I initially tried to define every route manually before realising that the conventional routing (\`{controller=Home}/{action=Index}/{id?}\`) handles 90% of cases. I only needed explicit \`[Route]\` attributes for a couple of edge cases.

**The difference between \`ViewBag\`, \`ViewData\`, and \`TempData\`.** They all pass data to views, but in different ways. I ended up using ViewModels for almost everything, which made the other three less relevant — but I wasted time experimenting with each before landing on that conclusion.

**Dependency injection.** ASP.NET Core uses DI heavily. At first I was confused about *when* and *how* services get injected. After building a few controllers that receive \`AppDbContext\` through their constructor, the pattern became second nature. Register in \`Program.cs\`, inject in the constructor, use everywhere.

**\`async/await\` in controllers.** Coming from JavaScript, the syntax felt familiar but the necessity wasn't obvious at first. Then I learned that EF Core queries should be awaited (\`ToListAsync()\`, \`FirstOrDefaultAsync()\`) to avoid blocking threads. Once that clicked, it made sense.`,
      },
      {
        heading: "What I'd Improve Next",
        body: `If I continued working on this project, here's what I'd tackle:

• **Switch to proper EF Core migrations** instead of \`EnsureCreated()\`. This would let me evolve the schema without dropping and recreating the database.

• **Add authentication** — right now the admin page is openly accessible. Adding ASP.NET Identity would be a good next step.

• **Persist the cart to the database** instead of session storage, so it survives server restarts.

• **Add order history** — actually save completed orders and let users view past purchases.

• **Write unit tests** for the controllers and service layer. I didn't write tests for this prototype, but I'd want them before adding more features.

• **Try deploying to Azure App Service** to learn the deployment pipeline for .NET apps.

Overall, building this project gave me a much stronger mental model of how MVC web apps are structured. The framework does a lot of heavy lifting once you understand the conventions, and the strict separation of concerns keeps things manageable even as features grow.`,
      },
    ],
  },
  {
    slug: "mini-blog-api-learning",
    title:
      "What I Learned Building a Mini Blog API with ASP.NET Core",
    date: "April 2026",
    excerpt:
      "My notes from building a small RESTful blog API with ASP.NET Core Minimal APIs, the repository pattern, and Swagger — and what finally made concepts like DTOs and dependency injection click.",
    tags: ["C#", "ASP.NET Core", "Web API", "REST", "Swagger"],
    repoUrl: "https://github.com/bron322/mini-blog-api",
    coverImage: miniblogapiImg,
    content: [
      {
        heading: "Why I Built This Project",
        body: `After building my e-commerce MVC app, I felt comfortable with controllers and Razor views — but I realised I hadn't really built a pure API before. Most of the work I'd done in .NET still had the server rendering HTML. I wanted to strip all of that away and build something that only speaks JSON.

A mini blog API felt like the right scope. It's small enough to finish in a couple of sessions, but it covers the important patterns: CRUD endpoints, data persistence, request validation, and clean separation between layers. The goal wasn't to build something feature-complete — it was to force myself to think about API design from scratch.`,
      },
      {
        heading: "What the Project Does",
        body: `The Mini Blog API is a simple RESTful API for managing blog posts. It supports five operations:

• **GET /posts** — list all blog posts.

• **GET /posts/{id}** — get a single post by its ID.

• **POST /posts** — create a new post (expects a title and content).

• **PUT /posts/{id}** — update an existing post.

• **DELETE /posts/{id}** — delete a post.

Under the hood it uses Entity Framework Core with SQLite for persistence, the repository pattern for data access, and DTOs to shape incoming request bodies. Swagger UI is enabled for interactive testing.`,
      },
      {
        heading: "What I Learned About ASP.NET Core Web API",
        body: `The biggest shift from my MVC project was realising that a Web API doesn't return views — it returns data. There are no Razor templates, no \`ViewModels\` shaped for a specific page. Every endpoint returns a status code and a JSON payload. That simplicity was refreshing.

I also decided to try **Minimal APIs** instead of the traditional controller-based approach. In Minimal APIs, you define routes directly in \`Program.cs\` using methods like \`app.MapGet()\`, \`app.MapPost()\`, etc. There's no controller class, no \`[HttpGet]\` attributes — just inline route handlers.

At first it felt a bit strange having everything in one file. But for a small API like this, it actually made the code easier to follow. I could see all five endpoints at a glance without jumping between files. I can see how this would get messy for a larger project, though — that's probably where controllers earn their keep.

The other thing I appreciated was how lightweight the setup is. The entire \`Program.cs\` is short — register services, map routes, run. No \`Startup.cs\`, no verbose configuration. It felt very modern.`,
      },
      {
        heading: "What I Learned About RESTful API Design",
        body: `Building this API made REST conventions feel less abstract. Before, I knew the theory — use nouns for resources, verbs come from HTTP methods — but I hadn't applied it end-to-end.

Here's what clicked:

**Resource naming matters.** The endpoint is \`/posts\`, not \`/getPost\` or \`/createBlogPost\`. The HTTP method already tells you the action. Once I committed to that convention, the API felt immediately more consistent.

**Status codes carry meaning.** A successful creation returns \`201 Created\` with a \`Location\` header, not just \`200 OK\`. A missing resource returns \`404\`. A bad request body returns \`400\`. Getting these right felt like a small thing, but it made the API much more predictable to work with in Swagger.

**Idempotency matters for PUT.** I initially treated PUT and POST almost interchangeably. Then I read that PUT should be idempotent — calling it twice with the same data should produce the same result. That made me think more carefully about what "update" really means vs. "create".`,
      },
      {
        heading: "What I Learned About DTOs and Why They Matter",
        body: `In my MVC project, I used ViewModels to shape data for views. DTOs serve a similar purpose but for APIs — they define what the client sends to you, separate from what your database model looks like.

In this project I created two DTOs: \`CreatePostDto\` and \`UpdatePostDto\`. Both have \`Title\` and \`Content\` fields. The \`Post\` model, on the other hand, also has an \`Id\` and timestamps that the client shouldn't set directly.

At first it felt like unnecessary duplication. The DTO and the model look almost the same. But the moment I added the \`Id\` field to the model and realised the client should never provide it on creation, the separation made sense. DTOs are a contract with the outside world. Models are a contract with the database. Keeping them separate means you can change one without breaking the other.

I also added basic validation using data annotations — \`[Required]\` on the title and content. Minimal APIs pick these up automatically when you use the \`[AsParameters]\` or model binding approach, which saved me from writing manual checks.`,
      },
      {
        heading: "What I Learned About Dependency Injection",
        body: `dependency injection finally clicked in this project. In the MVC app, I used it without fully understanding it — the framework injected \`AppDbContext\` into my controllers and I just accepted it. Here, I had to set it up more deliberately because of the repository pattern.

The flow is:

1. Define an interface: \`IPostRepository\` with methods like \`GetAllAsync()\`, \`GetByIdAsync()\`, \`CreateAsync()\`, etc.
2. Write an implementation: \`EfCorePostRepository\` that uses \`BlogDbContext\` to talk to the database.
3. Register the binding in \`Program.cs\`: \`builder.Services.AddScoped<IPostRepository, EfCorePostRepository>()\`.
4. In my route handlers, I receive \`IPostRepository\` as a parameter — the framework resolves it automatically.

What made it click was the realisation that my endpoint code never mentions Entity Framework directly. It only talks to the repository interface. If I wanted to swap SQLite for Postgres, I'd write a new repository implementation and change one line in \`Program.cs\`. The endpoints wouldn't change at all.

That's the real payoff of DI: your code depends on *abstractions*, not on specific implementations. It also makes testing easier — in theory, I could inject a fake repository for unit tests without needing a real database.`,
      },
      {
        heading: "What I Learned About Swagger",
        image: miniblogapiImg,
        imageAlt: "Swagger UI showing the Mini Blog API endpoints",
        body: `Swagger was even more useful in this project than in the MVC one, because with a pure API there's no UI to interact with — Swagger *is* the UI during development.

I could create a blog post, copy the ID from the response, fetch it, update it, and delete it — all from the browser. The request/response schemas were auto-generated from my DTOs, so I could see exactly what fields were expected without reading the code.

One neat thing I noticed: Swagger picks up the \`201 Created\` status code and the \`Location\` header from \`Results.Created()\`. It displays the response headers section with the URL of the newly created resource. That helped me verify that my REST conventions were wired correctly.

For a project like this where there's no frontend, Swagger is basically indispensable. It turns your API into something you can actually use and test immediately.`,
      },
      {
        heading: "Problems I Ran Into",
        body: `A few things tripped me up during the build:

**Route parameter binding in Minimal APIs.** I initially forgot to add the correct parameter names in my lambda handlers. If the route is \`/posts/{id}\` but my parameter is named \`postId\`, the binding silently fails. Matching the parameter name to the route template fixed it, but it took me a while to figure out why I kept getting nulls.

**EF Core migrations vs. EnsureCreated.** I used \`Database.EnsureCreated()\` in my first project and it worked fine. This time I decided to try proper migrations with \`dotnet ef migrations add\` and \`dotnet ef database update\`. It worked well, but I made the mistake of modifying my model after the initial migration without creating a new one. The resulting schema mismatch threw runtime errors that weren't immediately obvious.

**Forgetting to return the right status code.** I initially returned \`Results.Ok()\` for everything — including POST creation. It technically works, but it's not correct REST. Switching to \`Results.Created()\` with the proper URI taught me to be more intentional about HTTP semantics.

**Repository registration order.** At one point I registered the repository after \`app.Build()\`, which meant the DI container didn't know about it when the endpoints tried to resolve it. Moving the registration before \`Build()\` fixed the crash. Small thing, but the error message wasn't very helpful.`,
      },
      {
        heading: "How I Would Improve It Next",
        body: `If I kept building on this project, here's what I'd add:

• **Pagination for GET /posts** — right now it returns everything. A real API should support \`?page=1&limit=10\` and return pagination metadata.

• **Search and filtering** — let users filter posts by title or content keywords using query parameters.

• **Timestamps** — add \`CreatedAt\` and \`UpdatedAt\` fields to the model so I can sort by recency and track edits.

• **Structured validation errors** — return a proper error response body with field-level messages instead of a generic 400.

• **Authentication** — add JWT-based auth so only authorised users can create, update, or delete posts. Read operations could stay public.

• **Automated tests** — write unit tests for the repository and integration tests for the endpoints. Injecting a mock repository through DI would make this straightforward.`,
      },
      {
        heading: "Final Reflection",
        body: `Building this API was a good complement to the MVC project. Where the e-commerce app taught me about views, layouts, and server-rendered HTML, this project forced me to think purely in terms of data contracts and HTTP semantics.

The two biggest takeaways for me were: first, that the repository pattern and dependency injection aren't just academic concepts — they genuinely make your code easier to reason about and change. And second, that REST conventions exist for a reason — once you follow them consistently, your API becomes predictable to anyone who's worked with APIs before.

It also reinforced that small, focused projects are the best way for me to learn. I didn't need a complex app with authentication, file uploads, and background jobs. A five-endpoint blog API was enough to make several important ideas click. I'd rather understand five things deeply than ten things superficially.`,
      },
    ],
  },
];

export default blogPosts;
