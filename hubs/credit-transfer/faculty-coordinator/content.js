/* ============================================================
   Credit Transfer (RPL) Hub - Faculty Coordinator
   Demo Content
   ============================================================ */

window.DEMO = {
  hub:         "Credit Transfer (RPL) Hub",
  hubSlug:     "credit-transfer",
  persona:     "Faculty Coordinator",
  personaSlug: "faculty-coordinator",
  color:       "#1F7F7D",

  steps: [
    {
      title: "Active Credit Precedents List",
      screenshots: [
        {
          file: "step-01-creditprecedentlist-a.png",
          caption: "Active Credit Precedents - Course to Course list",
          description: "The Faculty Coordinator works within the Tarelium back-office environment and begins on the <strong>Active Credit Precedents</strong> list — a managed register of all approved and active credit decisions that can be applied to future student applications. <br><br>The list is filterable and displays key fields for each precedent: <strong>Number</strong>, <strong>Status</strong>, <strong>Relationship Type</strong> (e.g. 1 to 1, Many to 1), <strong>Prior Institution</strong>, <strong>Prior Course</strong>, <strong>Prior Course Code</strong>, <strong>Other Prior Course Codes</strong>, <strong>Target Program</strong>, <strong>Target Program Code</strong>, and <strong>Target Course</strong>. This view, filtered to <strong>Course to Course</strong> precedents, shows mapped equivalencies from institutions such as Australian Catholic University, giving coordinators a complete picture of all active decisions across the faculty's subject areas."
        },
        {
          file: "step-01-creditprecedentlist-b.png",
          caption: "Active Credit Precedents - RPL and VET precedent list",
          description: "Switching the filter reveals <strong>RPL and VET precedents</strong>, where the Prior Institution is recorded as <strong>Any RTO</strong> or a specific TAFE provider rather than a university. These precedents define the credit outcomes available to students who have completed vocational qualifications such as Certificates or Diplomas in areas like <em>Information Technology</em>, <em>Accounting</em>, <em>Business</em>, <em>Marketing</em>, and <em>Hospitality Management</em>. <br><br>Each row maps a <strong>Prior Program</strong> and <strong>Prior Course Code</strong> to a <strong>Target Program</strong> and <strong>Target Program Code</strong>, with the <strong>Outcome</strong> column confirming all listed precedents as <strong>Approved</strong>. The Faculty Coordinator uses this list to verify that existing VET-to-degree precedents are current and to identify any gaps that may require a new precedent to be established."
        }
      ]
    },
    {
      title: "Credit Precedent Search",
      screenshots: [
        {
          file: "step-02-creditprecedentsearch-a.png",
          caption: "Credit Precedent Search - results for a specific course code",
          description: "The <strong>Credit Precedent Search</strong> allows the Faculty Coordinator to quickly locate existing precedents by searching across any combination of institution, program, or course name. Searching for a specific course code (e.g. <strong>NRSG267</strong>) returns all matching precedent records instantly. <br><br>The results table shows the <strong>Number</strong>, <strong>Status Reason</strong>, <strong>Outcome</strong>, <strong>Year Completed</strong>, <strong>Prior Institution</strong>, <strong>Prior Program</strong>, <strong>Prior Course</strong>, <strong>Prior Course Code</strong>, <strong>Other Prior Course Codes</strong>, <strong>Target Program</strong>, <strong>Target Program Code</strong>, and <strong>Target Course</strong>. In this example, two precedents are returned: one <strong>Active</strong> and one <strong>Expired</strong>, both mapping the same prior course to the same target program, allowing the coordinator to identify whether a precedent needs to be renewed or a new one created."
        },
        {
          file: "step-02-creditprecedentsearch-b.png",
          caption: "Credit Precedent Search - multi-field search with institution and course code",
          description: "The search also supports combined queries using institution name and course code together (e.g. <strong>Griffith + 2000</strong>), returning all precedents that match across both fields simultaneously. In this example, three precedents are returned from <strong>Griffith University</strong>: one <strong>Declined</strong> and two <strong>Approved</strong>, covering Psychology of Criminology and Research Methods courses mapped to Bachelor of Behavioural Science and Bachelor of Criminology programs at different target institutions. <br><br>This multi-field search capability allows Faculty Coordinators to quickly audit all precedents from a specific institution and course code combination, supporting consistent application of credit decisions across similar applications."
        }
      ]
    },
    {
      title: "Credit Precedent Record Details",
      screenshots: [
        {
          file: "step-03-creditprecedentdetails-a.png",
          caption: "Credit Precedent record - full detail view",
          description: "Opening a precedent record (e.g. <strong>CP-003478</strong>) displays the complete details of the approved credit mapping. Key fields include: <br><br><ul><li><strong>Precedent Type:</strong> University (Course to Course), defining the nature of the prior and target qualifications.</li><li><strong>Relationship Type:</strong> 1 to 1, indicating a direct course-to-course equivalency.</li><li><strong>Status Reason:</strong> Active, currently in use and applied automatically to matching student applications.</li><li><strong>Dates:</strong> Effective Date and Review Date define the validity window (e.g. effective 4/18/2023, reviewed 4/18/2026), ensuring precedents are periodically re-evaluated for continued academic equivalency.</li><li><strong>Prior:</strong> The source institution (Griffith University), prior course (Research Methods & Statistics 2), and course code (2000PSY).</li><li><strong>Target:</strong> The destination institution (University of the Sunshine Coast), target program (Bachelor of Behavioural Science (Psychology)), target course (Research Methods 2), and course code (PSY207).</li><li><strong>Outcome and Notes:</strong> Outcome is recorded as <strong>Approved</strong>, with the Outcome Date confirming when the decision was made. The Academic Assessor and Precedent Owner fields attribute accountability for the decision.</li></ul>"
        }
      ]
    }
  ]
};
