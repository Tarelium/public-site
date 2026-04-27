/* ============================================================
   Credit Transfer (RPL) Hub - RPL Assessor
   Demo Content
   ============================================================ */

window.DEMO = {
  hub:         "Credit Transfer (RPL) Hub",
  hubSlug:     "credit-transfer",
  persona:     "RPL Assessor",
  personaSlug: "rpl-assessor",
  color:       "#1F7F7D",

  steps: [
    {
      title: "Active Credit Applications Queue",
      screenshots: [
        {
          file: "step-01-applicationslist-a.png",
          caption: "Active Credit Applications - assessor queue with Agent feed",
          description: "The RPL Assessor lands on the <strong>Active Credit Applications</strong> list, which displays all applications currently requiring assessment. The list includes columns for <strong>Number</strong>, <strong>Type of Credit</strong> (University Qualification, VET Qualification, Work Experience), <strong>Applicant</strong>, <strong>Student ID</strong>, <strong>Student Program</strong>, <strong>Student Application No.</strong>, <strong>Assessment Status</strong>, <strong>Triage</strong>, and <strong>Outcome</strong>, giving the assessor an at-a-glance view of the entire queue. <br><br>On the left, the <strong>Agent feed</strong> panel surfaces AI-generated <strong>Course Outline Reviews</strong> in real time. These automated summaries compare course outlines between academic years (e.g. 2021 vs 2024), highlight key differences, and flag where changes may impact a credit decision, allowing assessors to stay current with institutional course updates without manually reviewing syllabi."
        }
      ]
    },
    {
      title: "Review a Credit Application",
      screenshots: [
        {
          file: "step-02-reviewcreditapplication-a.png",
          caption: "Credit Application record - General tab with AI Insights panel",
          description: "Opening an application record (e.g. <strong>CA-01014</strong>) displays the full detail view. The <strong>General</strong> tab captures core application metadata: <strong>Applicant</strong>, <strong>Student Program</strong>, <strong>Application Origin</strong> (Portal), <strong>Cohort Type</strong> (Domestic), <strong>Application Status</strong>, and <strong>Urgency</strong>. <br><br>A <strong>Timeline</strong> panel tracks all notes and communications related to the application in chronological order, with notes added by administrators visible inline. <br><br>The right-hand <strong>AI Insights</strong> panel runs automatically and provides three key intelligence sections: <ul><li><strong>Document Checklist:</strong> Flags whether all required supporting documents have been submitted and passed authenticity checks.</li><li><strong>Eligibility Checks:</strong> Evaluates whether the applicant meets eligibility criteria based on their student record.</li><li><strong>Precedents:</strong> Surfaces matching credit precedents and flags whether any have been approved, declined, or are still pending for the courses in this application.</li></ul>"
        },
        {
          file: "step-02-reviewcreditapplication-b.png",
          caption: "AI Insights Details - University Studies with document authenticity and eligible courses",
          description: "The <strong>AI Insights Details</strong> tab provides a deep view of the evidence submitted. The <strong>University Studies</strong> section shows the prior study details including <strong>Country</strong>, <strong>Program</strong>, <strong>Institution</strong>, and <strong>Level</strong> drawn from the application. The attached official transcript is visible, with a link to the <em>My eQuals Resource</em> for authenticated verification. <br><br>The <strong>Courses</strong> table maps each prior student course to its proposed <strong>Target Student Course</strong> and <strong>Target Course Code</strong>, giving the assessor a clear side-by-side alignment. <br><br>The AI Insights panel on the right provides: <ul><li><strong>Document Authenticity</strong> checks, verifying whether the Institution Check, Course Outline, Transcript, and Proposal Check all pass or require attention.</li><li><strong>Eligible Courses/Units for Credit Transfer</strong> — an automatically generated list of courses the AI considers eligible based on the precedent database and academic equivalence analysis.</li></ul>"
        },
        {
          file: "step-02-reviewcreditapplication-c.png",
          caption: "Triage tab - University Studies courses with AI Triage Agent",
          description: "The <strong>Triage</strong> tab provides the assessor with a structured view for initial qualification of the application. The <strong>University Studies</strong> section lists the prior study record including <strong>University Study Name</strong>, <strong>Prior Country</strong>, <strong>Prior Institution</strong>, <strong>Prior Program</strong>, and the <strong>Transcript</strong> file. <br><br>The <strong>University Study Courses</strong> table maps each <strong>Prior Student Course</strong> to a <strong>Target Student Course</strong> with a <strong>Link to Course Outline</strong> and <strong>Year Completed</strong>, enabling the assessor to verify academic equivalency directly from source documents. <br><br>The <strong>AI Insights Triage Agent</strong> panel on the right runs automated checks against each course: <ul><li><strong>Course-ID checks</strong> confirm whether prior course IDs can be verified.</li><li><strong>Course Outline</strong> flags whether an outline is available and current.</li><li><strong>Qualification above AQF Level 8</strong> and <strong>Completed within 10 years</strong> checks enforce program-level credit rules.</li><li><strong>Indication on subject list</strong> verifies whether the course appears on the approved subject list.</li></ul> A <strong>Ready to Proceed</strong> or <strong>Human Review Required</strong> recommendation is generated based on the combined triage checks."
        },
        {
          file: "step-02-reviewcreditapplication-d.png",
          caption: "Assessment & Outcome tab - course-level precedent outcomes",
          description: "The <strong>Assessment & Outcome</strong> tab is where the assessor records the final credit decisions for each course in the application. The <strong>University Studies</strong> table lists each academic unit with its <strong>Academic Assessment</strong> status, <strong>Precedent Outcome</strong>, and <strong>Outcome</strong>, allowing the assessor to individually approve or decline credit for each mapped course. <br><br>The <strong>Outcome Details</strong> panel on the right provides additional fields for documenting <strong>Source of Credit</strong>, <strong>Target Course Code</strong>, <strong>Target Course Name</strong>, <strong>Credit Grade</strong>, and <strong>Outcome</strong> at the unit level. <br><br>At the bottom, the <strong>Application Outcome</strong> section captures the overall result with fields for <strong>Outcome</strong>, <strong>Outcome Date</strong>, <strong>Outcome Reason Template</strong>, and <strong>Outcome Reason</strong> — which are used to generate the formal communication back to the student."
        }
      ]
    },
    {
      title: "Application Details Walkthrough",
      screenshots: [
        {
          file: "step-03-applicationdetails-a.png",
          caption: "Application record - stage pipeline and key action areas",
          description: "This view highlights the key workflow elements of the credit application record. The <strong>Stage pipeline</strong> at the top of the record tracks the application through its lifecycle: <strong>Triage → Pending Assessment → In Assessment → Precedent → Academic Assessment → Finalise</strong>, giving the assessor and any other stakeholders an immediate view of where the application currently sits. <br><br>The <strong>Application Status</strong> and <strong>Urgency</strong> fields drive the assessor's prioritisation. The <strong>Next Stage</strong> button allows the assessor to advance the application to the next pipeline stage once the current step is complete, ensuring a consistent and auditable workflow for every credit decision."
        },
        {
          file: "step-03-applicationdetails-b.png",
          caption: "Application record - full General tab with annotated key areas",
          description: "A fully annotated view of the application record's <strong>General</strong> tab highlights the key areas an assessor interacts with: <ol><li><strong>Navigation breadcrumb</strong>: shows the current record path within the ACM application hierarchy.</li><li><strong>Cohort Type</strong>: indicates whether the applicant is Domestic or International, which determines which credit rules apply.</li><li><strong>Urgency</strong>: set to Low, Medium, or High to help prioritise the assessor's workload.</li><li><strong>Applicant</strong>: a linked contact record for the student, providing quick access to their full profile.</li><li><strong>Student Program</strong>: the enrolled program record, with credit rules applied automatically based on program configuration.</li><li><strong>Timeline</strong>: a chronological log of all notes, status changes, and communications for the application.</li><li><strong>Created On date and assigned Credit Officer</strong>: visible in the top-right corner for accountability and audit purposes.</li><li><strong>Notes in Timeline</strong>: admin notes and system-generated entries are recorded here, including document verification outcomes and communication logs.</li><li><strong>AI Insights panel</strong>: the live AI analysis sidebar that runs Document Checklist, Eligibility Checks, and Precedent matching automatically whenever the record is opened.</li></ol>"
        }
      ]
    },
    {
      title: "Working with AI Agents",
      screenshots: [
        {
          file: "step-04-workingwithaiagents-a.png",
          caption: "Copilot AI Agent - Credit Application Overview summary",
          description: "The <strong>Tarelium × Bayshann Copilot</strong> panel can be opened alongside any credit application to provide on-demand AI assistance. In this view, the assessor has prompted the Copilot to generate a detailed summary of the current open credit application. <br><br>The Copilot responds with a structured <strong>Credit Application Overview</strong> containing: <ul><li><strong>Application Number</strong> and <strong>Record Type</strong>: identifying the application uniquely within the system.</li><li><strong>Applicant Information</strong>: confirming the student contact record, program of study, year of study, and purpose (e.g. to reduce higher education costs associated with a prior nursing qualification).</li><li><strong>Program & Qualification</strong> details, drawn from the student record and the submitted evidence.</li></ul> The <strong>Agent feed</strong> on the left panel continues to surface AI-generated course outline reviews in real time, providing assessors with the latest academic intelligence alongside their case work, reducing manual research time and supporting more consistent assessment decisions."
        }
      ]
    }
  ]
};
