export async function GET() {
  const readme = `
# Cooper Gadd

- **GitHub:** [cooper-gadd](https://github.com/cooper-gadd)
- **LinkedIn:** [Cooper Gadd](https://www.linkedin.com/in/coopergadd/)
- **Email:** [coopergadd@yahoo.com](mailto:coopergadd@yahoo.com)
- **Portfolio:** [cooper-gadd.io](https://www.cooper-gadd.io/)

## Objective

Seeking a software engineering position where I can leverage my experience in full-stack development to create innovative solutions to complex problems.

## Education

**Rochester Institute of Technology**
Bachelor's degree, Computing and Information Technologies
GPA: 3.8

## Experience

**Software Engineer**
*Attica Package Company Inc. · Freelance*
December 2022 – Present
Attica, New York, United States · Hybrid
- Developed and hosted a React app.
- Created a SQL database application with Microsoft Access for material tracking.

**Software Engineer**
*Excellus BCBS · Internship*
June 2024 - Present
Rochester, New York, United States · Hybrid
- Developed a proof of concept Next.js app utilizing artificial intelligence for document routing, aimed at potentially increasing company revenue by millions of dollars.

**Software Engineer**
*Touchstone Technology, Inc. · Internship*
March 2023 - May 2024
Rochester, New York, United States · On-site
- Developed a Blazor WebAssembly app for employee assignments, reports, and inventory tracking, with a SQL database.

## Projects

**Cows**
June 2024 - Present
Developed a sleek and modern weather app that presents data from my weather station API in a visually appealing way, offering real-time conditions, forecasts, and historical trends.
[GitHub](https://github.com/cooper-gadd/cows)

**Savr**
June 2024 - Present
Developed an intuitive recipe manager using Postgres and Next.js with CI/CD, user authentication, error management, analytics, and rate limiting.
[GitHub](https://github.com/cooper-gadd/savr)

**Professional Society Election Platform**
February 2024 - May 2024
Developed a multi-tenant election app using Postgres, Express, and Next.js for professional societies, with robust roles and admin controls, and a multi-layered server architecture.
[GitHub](https://github.com/RIT-iSchool/election-project-the_balkans)
  `;

  return new Response(readme, {
    status: 200,
    headers: { "Content-Type": "text/markdown" },
  });
}
