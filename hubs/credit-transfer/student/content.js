/* ============================================================
   Credit Transfer (RPL) Hub - Student
   Demo Content
   ============================================================ */

window.DEMO = {
  hub:         "Credit Transfer (RPL) Hub",
  hubSlug:     "credit-transfer",
  persona:     "Student",
  personaSlug: "student",
  color:       "#1F7F7D",

  steps: [
    {
      title: "Credit Transfer Portal",
      screenshots: [
        {
          file: "step-01-studentportal-a.png",
          caption: "Academic Credit Management - student landing page",
          description: "Students access the <strong>Academic Credit Management</strong> portal after logging in with their university credentials. The landing page introduces the credit transfer process and explains that students with prior study or relevant work experience may be eligible for credit toward their degree, potentially reducing the time and cost required to complete their program. <br><br>The <strong>Type of Credits</strong> section presents three clear starting points: <strong>Understand how Credit works</strong>, <strong>How to Apply for Credit</strong>, and <strong>Search the Credit Precedent</strong>, guiding students to the right resources before they begin an application."
        }
      ]
    },
    {
      title: "Credit Precedent Search",
      screenshots: [
        {
          file: "step-02-precedentsearch-a.png",
          caption: "Credit Precedent Search - study type selector",
          description: "The <strong>Credit Precedent Search</strong> allows students to look up previously approved credit decisions before lodging a formal application. A disclaimer reminds students that precedents are a guide only: the University reserves the right to alter or source or amount of credit granted, and students should check for amendments directly with the University prior to submitting an application. <br><br>Students first select <strong>What did you study?</strong> by choosing between <strong>University Study</strong> (for students who have completed a recognised degree or part of a degree) and <strong>Vocational Education and Training (VET)</strong>, for students with formal VET qualifications from Australian or comparable overseas providers."
        },
        {
          file: "step-02-precedentsearch-b.png",
          caption: "Credit Precedent Search - University Studies results",
          description: "After selecting <strong>University Study</strong>, the system presents a filterable table of credit precedents. Students can search by <strong>Institution, Program or Course Name</strong> to locate relevant precedents quickly. <br><br>Each row shows the <strong>Prior Institution</strong>, <strong>Prior Course</strong>, <strong>Target Course</strong>, <strong>Target Course Code</strong>, and <strong>Outcome</strong>, giving students an immediate indication of whether a given prior course has previously been approved for credit. Precedents marked <strong>Approved</strong> indicate a positive historical decision, helping students assess their likelihood of success before starting their application."
        }
      ]
    },
    {
      title: "My Credit Applications Dashboard",
      screenshots: [
        {
          file: "step-03-mycreditapplications-a.png",
          caption: "My Credit Applications - student applications overview",
          description: "The <strong>My Credit Applications</strong> dashboard gives students a personalised view of all their credit transfer activity. The page displays the student's name, email address, and Student ID for reference, along with an introductory note explaining that students can create new applications, view existing ones, and add additional information if requested by members of staff. <br><br>The applications table lists each application with its <strong>Number</strong>, <strong>Program</strong>, <strong>Student Application Status</strong> (e.g. Submitted, Withdrawn, Assessment in progress), <strong>Outcome</strong>, and <strong>Created On</strong> date. The <strong>Create a new Credit Application</strong> button at the top right allows students to begin a new request at any time, though the system limits students to one draft application at a time."
        }
      ]
    },
    {
      title: "Create a New Credit Application",
      screenshots: [
        {
          file: "step-04-createanapplication-a.png",
          caption: "Create a new Application - Before you start",
          description: "Clicking <strong>Create a new Credit Application</strong> opens the <strong>Create a new Application</strong> wizard. The first tab, <strong>Before you start</strong>, sets clear expectations before the student proceeds. Students are advised to allow up to <strong>thirty working days</strong> for their application to be assessed, with a note that this timeframe may be extended during peak periods and for complex applications. <br><br>A key notice explains that where a credit application needs to be reviewed by the school, an outcome may be delayed when the designated School staff member is on leave. A link to the <strong>credit transfer calculator</strong> is provided to help students understand which areas of credit may be awarded. Students are also asked to confirm whether they have <strong>chosen their major and minors</strong> before proceeding, as this is required to assess credit eligibility accurately."
        },
        {
          file: "step-04-createanapplication-b.png",
          caption: "Create a new Application - Current Program and Credit Rules",
          description: "The <strong>Current Program</strong> tab displays the student's details and the credit rules applicable to their enrolled program. The <strong>My Details</strong> section confirms the student name and the selected program (e.g. <em>SC391 - Bachelor of Nursing Science</em>). <br><br>The <strong>Program Credit Rules</strong> section outlines the specific conditions that apply, including: <ul><li><strong>Credit for Enrolled Nurses:</strong> Students may receive credit transfer for up to 8 courses if they hold current AHPRA registration as an Enrolled Nursing (Division 2) without restrictions or conditions and have completed a Diploma of Nursing from an accredited Australian education provider within 10 years prior to admission.</li><li><strong>Credit from Overseas Study:</strong> No credit is permitted from studies undertaken in any of the identified countries as outlined in NMBA Criterion 2.</li><li><strong>Credit from Informal or Non-Formal Learning:</strong> Credit may be awarded for clinical courses taken outside the nursing discipline if they have different Standards for Practice from the NMBA.</li><li><strong>Credit Restrictions:</strong> Additional restrictions apply based on GPA, AQF level, and qualification type.</li></ul>"
        },
        {
          file: "step-04-createanapplication-c.png",
          caption: "Create a new Application - Application Details and Type of Credit",
          description: "The <strong>Application Details</strong> tab is where students document their prior learning. The <strong>Type of Credit</strong> section presents three distinct categories of evidence students can submit: <br><br><ul><li><strong>University Qualifications:</strong> For students who have completed a degree or part of a degree. Prior studies must demonstrate substantial equivalence with course(s) in the target program.</li><li><strong>VET Qualifications:</strong> For students with Vocational Education and Training (VET) qualifications from Australia or a comparable overseas qualification.</li><li><strong>Professional and Work Experience:</strong> For students with relevant experience such as work history that can be recognised as credit toward a qualification.</li></ul> Students can add one or more qualifications across any of these categories using the <strong>Add a NEW…</strong> buttons, with each entry tracked in the table below."
        },
        {
          file: "step-04-createanapplication-d.png",
          caption: "Create a new Application - Declaration and submission",
          description: "The final <strong>Declaration</strong> tab presents the University Privacy Policy and a formal declaration that must be acknowledged before the application can be submitted. The policy explains how the University collects and uses personal information, and that this information is managed responsibly and will not be reviewed by third parties without consent. <br><br>Students declare that: the information provided is correct, complete, and authentic (including academic transcripts); they have provided all necessary documentary evidence of their qualifications; incomplete information may result in the application being returned; submission of incorrect or false information may result in disciplinary action; and they authorise the University to obtain further information. Students check the <strong>Acknowledgement</strong> checkbox to confirm they have read and understood the declaration, then click <strong>Submit</strong> to lodge the application."
        }
      ]
    }
  ]
};
