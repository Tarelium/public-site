/* ============================================================
   Scholarship Hub — Application Reviewer
   Demo Content

   HOW TO EDIT:
   - Update step titles and descriptions below.
   - To add a screenshot: drop the file in
       assets/screenshots/scholarship/application-reviewer/
     then set  file: "your-filename.png"  in the step.
   - To add a step: copy one object and add it to the array.
   - To reorder steps: move the objects in the array.
   ============================================================ */

window.DEMO = {
  hub:         "Scholarship Hub",
  hubSlug:     "scholarship",
  persona:     "Application Reviewer",
  personaSlug: "application-reviewer",
  color:       "#1A6644",

  steps: [
    {
      title: "Reviewer's Dashboard",
      screenshots: [
        {
          file: "step-01-dashboard-a.png",
          caption: "SCMS Reviewer's Dashboard - analytics and review queue",
          description: "The <strong>SCMS Reviewer's Dashboard</strong> is the Application Reviewer's starting point. It surfaces live analytics and a prioritised work queue in a single view. <br><br><strong>Active Scholarship Applications To Review:</strong> lists only the applications that require immediate reviewer action, flagged with their current internal status - <strong>Eligibility Failed</strong> or <strong>Eligibility To Review</strong> - so reviewers can go directly to the records that need a decision without searching through the full queue."
        }
      ]
    },
    {
      title: "Active Scholarship Applications List",
      screenshots: [
        {
          file: "step-02-viewapplications-a.png",
          caption: "Scholarship App - Active Scholarship Applications list",
          description: "The <strong>Active Scholarship Applications</strong> list is the reviewer's primary work queue. Every application in the system is listed with its application number, student ID, student name, scholarship name, <strong>Internal Status Details</strong>, <strong>To Review</strong> flag, <strong>Application Status</strong>, <strong>Approval Status</strong>, and submission date. <br><br>The <strong>Internal Status Details</strong> column shows exactly where each application sits in the pipeline: from <strong>Eligibility Failed</strong> and <strong>Eligibility Checked</strong> through to <strong>Questions & Docs Reviewed</strong>, <strong>In assessment</strong>, and <strong>Finalized</strong>. The <strong>To Review</strong> flag highlights applications that require immediate human attention, allowing reviewers to triage their workload at a glance."
        },
        {
          file: "step-02-viewapplications-b.png",
          caption: "Application record - General tab overview",
          description: "Opening an application record reveals more details about the scholarship application. <br><br><strong>A progress tracker</strong> shows the application's current stage across all steps - Draft, Submitted, Eligibility Checked, Questions & Documents Reviewed, Assigned to Reviewers, Scored, and Finalized."
        }
      ]
    },
    {
      title: "Review Application - Eligibility & Questions",
      screenshots: [
        {
          file: "step-03-reviewapplication-a.png",
          caption: "Eligibility tab - AI-powered eligibility check",
          description: "The <strong>Eligibility</strong> tab presents a three-panel view that makes it straightforward to understand exactly why an application passed or failed eligibility. <br><br><strong>Eligibility Check (Feedback from AI Agent):</strong> The AI assesses the application against the scholarship's criteria and returns a clear verdict - in this case <strong>Not Eligible</strong> - with a full written breakdown of its reasoning. Each criterion is assessed individually: <strong>Citizenship</strong> (Meets), <strong>Campus</strong> (Meets), <strong>Faculty</strong> (Does not meet - the student's enrolled program is not in the required list), <strong>GPA</strong> (Cannot assess - not provided), and <strong>Other requirements</strong> (Unclear/To Review - placement semester could not be confirmed). <br><br><strong>Student Data for Eligibility:</strong> The student's actual profile data used in the assessment is shown in the centre panel for transparency. <br><br><strong>Scholarship Requirements:</strong> The right panel displays the scholarship's formal eligibility rules, so reviewers can verify the AI's reasoning against the source criteria at any time."
        },
        {
          file: "step-03-reviewapplication-b.png",
          caption: "Questions & Documents tab - AI scoring and reviewer scores",
          description: "The <strong>Questions & Documents</strong> tab lists every question in the application alongside the student's answer, an <strong>AI Answer Score</strong>, and an <strong>Average Score</strong> across all human reviewers. <br><br>Expanding a question row reveals the individual scores submitted by each assigned reviewer - Anusha Param, Dani Kahil, and Sendur Kathir - with their completion status shown inline. This allows coordinators to spot scoring gaps (a reviewer who has not yet scored) and identify significant divergences between reviewer scores and the AI benchmark, prompting a closer look before the application moves to the scoring stage."
        }
      ]
    },
    {
      title: "Review Specific Answers",
      screenshots: [
        {
          file: "step-04-reviewspecificanswers-a.png",
          caption: "Review tab - reviewer assignments and per-question progress",
          description: "The <strong>Review</strong> tab provides a structured view of all assigned reviewers and their progress across every question. Each reviewer row shows their overall <strong>Review Status</strong> (Completed, Not Started, or In Progress) and any notes left by the coordinator. <br><br>Expanding a reviewer's row reveals their question-by-question completion status and the score they have submitted for each answer. In this example, Sendur Kathir is In Progress: the first question is Completed with a score of 4.00, while the remaining two are still To Do. This granular view allows coordinators to follow up precisely on outstanding items rather than chasing reviewers for a generic status update."
        },
        {
          file: "step-04-reviewspecificanswers-b.png",
          caption: "Individual question review - student answer, AI insights, and reviewer scoring",
          description: "Clicking into a specific question opens a full-screen review view. The <strong>question</strong> is displayed at the top, followed by the student's complete written <strong>answer</strong> so the reviewer can read the full response in context. <br><br>The <strong>Reviewer's Input</strong> panel on the right allows the reviewer to enter a numeric <strong>Score</strong>, add <strong>Comments</strong>, and set their <strong>Review Status</strong> to Completed once finished. <br><br>Below the student's answer, the <strong>AI Insights</strong> section provides an overall AI score out of 5 along with a detailed summary comment evaluating the quality of the response - highlighting strengths, weaknesses, and the degree to which the answer meets the scholarship's stated criteria. This gives reviewers an independent benchmark to calibrate their own scoring decisions."
        }
      ]
    },
    {
      title: "Application Scoring",
      screenshots: [
        {
          file: "step-05-applicationscoring-a.png",
          caption: "Score tab - AI-calculated total score with full workings",
          description: "The <strong>Score</strong> tab presents the AI-generated total score for the application with complete, auditable workings shown in three panels. <br><br><strong>Score Check (Feedback from AI Agent):</strong> The left panel walks through the scoring calculation step by step: first determining the GPA score based on the scholarship's banding rules (GPA 5.50-5.99 = Score 2), then applying the configured weights (GPA 40%, each Question 20%), computing weighted contributions for each component, and arriving at the <strong>Total Scholarship Application Score</strong> - in this case 54.0%. <br><br><strong>Student Data for Score:</strong> The centre panel confirms the raw input values used: the student's GPA and the average reviewer score for each question. <br><br><strong>Scholarship Data for Score:</strong> The right panel displays the scholarship's scoring rules and weight configuration, so reviewers can verify the AI has applied the correct formula. No black-box scoring - every number is fully explainable."
        }
      ]
    },
    {
      title: "Application Details & Final Decision",
      screenshots: [
        {
          file: "step-06-applicationsdetails-a.png",
          caption: "General tab - finalised application with full callout overview",
          description: "Once all review stages are complete, the <strong>General</strong> tab reflects the finalised state of the application. Key areas: <ol><li><strong>General Information:</strong> Student details, submission date, linked Scholarship Intake and Scholarship Details, additional student notes, and the record owner are all visible in one place.</li><li><strong>Timeline:</strong> A full audit trail of every action - automated system events, emails sent, and manual notes - is captured chronologically and searchable.</li><li><strong>Progress Tracker:</strong> All seven stages are marked complete with a confirmation message: 'All steps completed - you're finished.'</li><li><strong>Statuses:</strong> Application Status shows <strong>Finalized</strong> and Approval Status shows <strong>Approved</strong>, confirming the scholarship has been awarded.</li><li><strong>Payments:</strong> Payment details are configured directly on the record - recurrence (Per Month), number of recurrences, payment amount ($500.00), payment start date, and payment status (Automatic) - ensuring disbursement is set up without leaving the application.</li><li><strong>Requests for Info tab:</strong> Available for raising or tracking any information requests sent to the student during the review process.</li><li><strong>Payments tab:</strong> Provides a dedicated view of all payment transactions linked to this application.</li><li><strong>Form Assist:</strong> A quick-access panel for guided form completion and contextual help.</li></ol>"
        }
      ]
    },
    {
      title: "Scholarship Intake Review",
      screenshots: [
        {
          file: "step-07-applicationintakereview.png",
          caption: "Scholarship Intake record - pipeline and applications overview",
          description: "The <strong>Scholarship Intake</strong> record provides a coordinator-level view of a specific scholarship round. The left panel captures the intake configuration: intake name, linked scholarship, <strong>Start Date</strong>, <strong>Application Close Date</strong>, <strong>End Date</strong>, <strong>Number of Scholarships Available</strong>, and the current <strong>Number of Applications</strong> received. <br><br>The intake has its own pipeline: Draft, Open, Application Closed, Assigned to Reviewers, Scored, and Finalized - giving coordinators a clear view of where the round sits overall. <br><br>The <strong>Applications</strong> panel lists every application linked to this intake with each student's name, internal status, To Review flag, Application Status, Approval Status, Total Score, and submission date. In this example, two applications are Scored and in assessment, one is Finalized and Approved with a score of 54.00, and one is still at the Questions & Docs Reviewed stage with an eligibility flag raised - all visible without opening individual records."
        }
      ]
    },
    {
      title: "Reviewer Dashboard & Working with AI Agents",
      screenshots: [
        {
          file: "step-08-userinterfaceandworkingwithagents-a.png",
          caption: "SCMS Reviewer's Dashboard - Agent Feed, analytics, and Copilot",
          description: "The <strong>SCMS Reviewer's Dashboard</strong> brings together AI activity, live analytics, and natural-language querying in a single view. Key areas: <ol><li><strong>Navigation:</strong> The left panel shows the navigation in the App. </li><li><strong>Agent Feed:</strong> Completed and in-progress AI tasks are grouped for easy scanning, so reviewers know what has been processed automatically and what may still need attention.</li><li><strong>Analytics charts:</strong> Live charts break down active scholarship applications by status over time, by approval status (Approved, Rejected), and by scholarship name - giving coordinators an instant pipeline health check without running a report.</li><li><strong>Copilot sidebar:</strong> Available across every view, the AI chat panel lets reviewers and coordinators ask natural-language questions such as 'Give me an overview of all the scholarship applications.' The AI returns a structured <strong>Scholarship Applications Summary</strong> listing counts by status - Submitted, Finalized, Draft, More Info Required, Cancelled - and highlights which applications need immediate attention, all without any report configuration or query syntax required.</li></ol>"
        }
      ]
    }
  ]
};
