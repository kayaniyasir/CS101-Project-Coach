# CS101 Project Coach — Project 1

**Build · Practice · Test** — a free, browser-based guided learning site for **Project 1: Student Grade Management System** from the CS101 Project Showcase Student and Instructor Guides.

This is an independent, **student-facing learning aid**. It does not replace the two official guides, the instructor-provided letter-grading scale, a student's Java work, or the instructor's assessment.

## What is included

- Seven short learning stages following the project's developmental milestones.
- **21 formative quizzes:** exactly **14 Java concept questions** and **7 application/tracing questions**, with brief reasons and retry hints.
- A NetBeans coding challenge and clear evidence checkpoint for each stage.
- A visual simulator showing ten fixed-capacity student slots and parallel-array indexes.
- An official **10-mark rubric**: 6 shared team marks and 4 individually assessed marks, including CLO references. Proposed small subdivisions are labeled as guidance, not official modifications.
- A **seven-case testing worksheet** based on the Project 1 test cases, with actual outputs and pass/fail recording. At least six documented tests must cover normal, invalid and boundary cases.
- A project readiness checklist, team plan notes, progress saving in the browser, progress backup import/export, and downloadable test evidence.
- A **minimal Java starter** only: no finished project source code or unauthorized reference solution.

## Official project requirements to preserve

A Java console application in NetBeans, built by teams of 4–5, with a repeating menu (at least five meaningful operations plus Exit), at least four meaningful parameterized methods with return values, two or more related one-dimensional arrays with an active-record counter, a maximum of 10 fictional student records, search/update/summary operations and input validation. Project 1 also requires unique IDs and student names, two marks in the range 0–100, equally weighted averages, an **instructor-provided letter-grade scale**, and class average/highest/lowest results. Submit at least six documented tests, the NetBeans source folder, a 2–3-page report, team demonstration and an individual walkthrough.

The website's training checkpoints and quizzes are **formative**; they do not add marks to the official 10-mark rubric.

## Run locally

1. Download and extract the complete ZIP.
2. Open `index.html` in Chrome, Edge or Firefox. All application files are local and there are **no runtime dependencies, paid APIs, AI models or sign-ins**.
3. Use the sidebar or follow the seven stages in order.
4. Work on your actual Java program separately in **NetBeans**. Each stage provides only a small teaching snippet, not a finished solution.
5. Export your progress as JSON if you may switch browsers or computers. Progress is otherwise stored only in the current browser's `localStorage`.

## Start in NetBeans

In NetBeans, create a **Java Application** project named `StudentGradeManagement`, using a suitable JDK. You may refer to `starter/StudentGradeManagement.java` for the minimum class structure, then write each feature yourself. The starter is **not the completed assessed submission**.

## Publish this as a separate GitHub repository

Create a public repository called **`CS101-Project-Coach`** (initially empty), then upload all the files **including** `.github/workflows/deploy-pages.yml`. In the repository's **Settings → Pages**, choose **GitHub Actions** as the source. The provided workflow deploys the static site on pushes to `main`.

Expected link **after a successful deployment**:

`https://kayaniyasir.github.io/CS101-Project-Coach/`

A live URL is **not** established merely by generating these files; the GitHub repository must be created and deployed first.

## File layout

```text
CS101-Project-Coach/
├── index.html                       # Main student-facing website
├── styles.css                       # Responsive interface and print styling
├── data.js                          # Official requirements, 7 stages, 21 questions, 10-mark rubric
├── app.js                           # Navigation, quiz logic, progress and worksheet
├── README.md
├── starter/
│   └── StudentGradeManagement.java # Compilable minimal starter, no complete answer
├── tests/
│   └── validate.js                 # Data integrity and content-count checks
└── .github/workflows/
    └── deploy-pages.yml            # Deployment for GitHub Pages
```

## Limitations and academic safeguards

- A quiz answer can be checked in the website, but **Java code written in NetBeans is not compiled or automatically verified by the website**.
- Test results and requirement completion are **self-recorded**, not validated by a Java test service. The instructor confirms code correctness and awards marks.
- Quiz answers are visible in the distributed JavaScript because this is a free static website; the quizzes are **practice only, not secure examinations**.
- No complete reference program is distributed. All submitted programming must be students' own work and comply with course rules on collaboration and outside assistance.
- The student guide requires a **common instructor-provided grade scale**, which is intentionally **not hard-coded**.
- Enter only fictional student IDs, names and marks into the Java project. Locally stored learning notes should not contain sensitive personal information.

## Source alignment

Based on the supplied `CS101_Project_Showcase_Student_Guide(1).docx` and `CS101_Project_Showcase_Instructor_Guide.docx` (Project 1, common requirements, milestones, and rubric). In case of any differences, the current course instructor's approved project guide and directions take precedence.