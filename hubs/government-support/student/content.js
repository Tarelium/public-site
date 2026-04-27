/* ============================================================
   Government Support Hub - Student
   Demo Content
   ============================================================ */

window.DEMO = {
  hub:         "Government Support Hub",
  hubSlug:     "government-support",
  persona:     "Student",
  personaSlug: "student",
  color:       "#2B5F9E",

  steps: [
    {
      title: "Commonwealth Prac Payment Portal",
      screenshots: [
        {
          file: "step-01-studentportal-a.png",
          caption: "CPP Portal - student landing page",
          description: "Students access the <strong>Commonwealth Prac Payment (CPP)</strong> portal after logging in with their university credentials. The landing page explains that the Australian Government is establishing a new CPP to help students manage the costs of mandatory placements in teaching, nursing, midwifery, social work, and nursing in vocational education and training (VET) courses.<br><br>From July 2025, eligible students can access <strong>$319.50 per week</strong>, benchmarked to the single Austudy rate, while undertaking a placement. The payment is means-tested to target students who need it most. Clicking <strong>Apply Here</strong> takes the student directly into a new application."
        }
      ]
    },
    {
      title: "My Applications",
      screenshots: [
        {
          file: "step-02-myapplications-a.png",
          caption: "My Applications - student application history",
          description: "The <strong>My Applications</strong> page gives students a consolidated view of all their CPP submissions. Each row in the table shows the application <strong>Number</strong>, <strong>Created On</strong> date, <strong>Student Course</strong>, <strong>Application Status</strong> (e.g. Draft, Submitted, Finalized), <strong>Approval Status</strong>, and <strong>Payment Status</strong>.<br><br>An <strong>AI Insight</strong> column surfaces any automated flags against an application. For example, where a Statement of Benefit could not be verified, the system will alert the student so they can take action. The <strong>Create a New Application</strong> button at the top of the page allows students to begin a fresh submission at any time."
        }
      ]
    },
    {
      title: "Create a New Application - Eligibility",
      screenshots: [
        {
          file: "step-03-createanapplication-a.png",
          caption: "New Application - Eligibility tab",
          description: "Clicking <strong>Create a New Application</strong> opens the application wizard. The first tab, <strong>Eligibility</strong>, asks the student to confirm two key pieces of information before proceeding.<br><br>Under <strong>Residency Status</strong>, the student confirms whether they are a domestic student enrolled in a <strong>Commonwealth Supported Place (CSP)</strong>, with a link to further information if needed. Under <strong>Course &amp; Placement Details</strong>, the student selects their <strong>Course (or Unit)</strong> via a searchable field, for example <em>NUR300 - Nursing Internship (2 Placements in Future)</em>.<br><br>The <strong>Eligibility</strong> section then asks whether the student currently receives a <strong>Commonwealth income support payment (ISP)</strong> such as ABSTUDY, Austudy, Youth Allowance, or DVA Education Allowance, with a link to the full list of qualifying ISPs. Once confirmed, the student clicks <strong>Next</strong> to proceed to the Documents step."
        }
      ]
    },
    {
      title: "Upload Evidence",
      screenshots: [
        {
          file: "step-04-uploadevidences-a.png",
          caption: "New Application - Upload Evidence modal",
          description: "The <strong>Documents</strong> tab requires students to upload official proof of their income support payment. Clicking <strong>Upload Evidence</strong> opens a modal where the student selects their <strong>Type of Benefit</strong> (e.g. Abstudy, Youth Allowance, DVA) and attaches a <strong>PDF file up to 5MB</strong>.<br><br>The page provides clear guidance on acceptable evidence depending on the payment source: if the payment is from <strong>Centrelink</strong>, students can upload a Centrelink Payment Summary or an Income Statement; if from the <strong>DVA</strong>, a DVA Payment Summary or General Statement of Pension and Benefits is required. Once the file is selected, the student clicks <strong>Submit</strong> to attach the document to their application."
        }
      ]
    },
    {
      title: "Submit Your Application",
      screenshots: [
        {
          file: "step-05-submityourapplication-a.png",
          caption: "New Application - Declaration and submission",
          description: "The final step before submission is the <strong>Declaration</strong> tab. Students are first asked whether they have any <strong>caregiving responsibilities</strong>, which may be relevant to their eligibility assessment.<br><br>An important notice reminds students that their application will not be processed unless all required documentation has been submitted. The <strong>University Privacy Policy</strong> is presented, explaining how personal information is collected and used in accordance with Queensland's Information Privacy Act 2009.<br><br>Students then agree to a formal <strong>Declaration</strong> confirming that: the information provided is correct, complete, and authentic; they take responsibility for providing all necessary documentary evidence; incomplete information may result in the application being returned; and submitting incorrect or false information may result in disciplinary action. After checking the <strong>Acknowledgement</strong> checkbox, the student clicks <strong>Submit</strong> to lodge the application."
        }
      ]
    },
    {
      title: "End-of-Year Report Generation",
      screenshots: [
        {
          file: "step-06-requestendofyearreport-a.png",
          caption: "EoFY Report Generation - CPP payment summary",
          description: "The <strong>EoFY Report Generation</strong> page allows students to generate a complete record of all CPP payments received during a selected financial year. The report covers all CPP payments made up to today's date for the chosen year, and is delivered via email once generation is complete, typically within a few minutes.<br><br>Students can request one report per day; if a report has already been generated today, the system prompts them to try again tomorrow. The report is also available through the Portal once generated.<br><br>The table on the page lists previously generated reports, showing the student's name, financial year, created date and time, and generation status. A <strong>Completed</strong> status (shown with a green indicator) confirms the report is ready. Clicking <strong>Request EoFY Report</strong> initiates a new generation for the current financial year."
        }
      ]
    }
  ]
};
