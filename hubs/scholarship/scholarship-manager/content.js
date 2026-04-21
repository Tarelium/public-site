/* ============================================================
   Scholarship Hub - Scholarship Manager
   Demo Content

   HOW TO EDIT:
   - Update step titles and descriptions below.
   - To add a screenshot: drop the file in
       assets/screenshots/scholarship/scholarship-manager/
     then set  file: "your-filename.png"  in the step.
   - To add a step: copy one object and add it to the array.
   - To reorder steps: move the objects in the array.
   ============================================================ */

window.DEMO = {
  hub:         "Scholarship Hub",
  hubSlug:     "scholarship",
  persona:     "Scholarship Manager",
  personaSlug: "scholarship-manager",
  color:       "#1A6644",

  steps: [
    {
      title: "View Active Scholarships",
      screenshots: [
        {
          file: "step-01-viewscholarships-a.png",
          caption: "Scholarships list - all active scholarships",
          description: "The <strong>Scholarships</strong> list gives the Scholarship Manager a complete view of every scholarship in the system. <br><br>The list makes it straightforward to audit the full scholarship portfolio at a glance - checking which scholarships are currently open, their monetary value, and how they are structured before drilling into any individual record."
        },
        {
          file: "step-01-viewscholarships-b.png",
          caption: "Scholarship record - General tab overview",
          description: "Opening a scholarship record displays the full scholarship details where key information is surfaced right at the top of the record. <br><br> This view consolidates all the core scholarship information in one place, including the scholarship name, linked institution, selection criteria, and eligibility criteria. This allows the manager to quickly review the scholarship's key details and requirements without needing to navigate through multiple tabs or records."
        }
      ]
    },
    {
      title: "Scholarship Details & Eligibility Configuration",
      screenshots: [
        {
          file: "step-02-scholarshipdetails-a.png",
          caption: "Scholarship record - key areas callout overview",
          description: "The scholarship record consolidates all configuration in one place. Key areas: <ol><li><strong>Navigation:</strong> The left panel provides quick access to all areas of the Scholarship App - Scholarship Intakes, Scholarship Applications, Requests for Information, Payments, Student Data, and Scholarship Data (Scholarships, Reviewers, Donors).</li><li><strong>Scholarship Name & Institution:</strong> The record header shows the scholarship's full name and its linked institution, making it easy to confirm ownership at a glance.</li><li><strong>Selection Criteria:</strong> A rich-text field capturing the detailed selection criteria used to assess applicants beyond eligibility rules - including background, financial need, and placement requirements.</li><li><strong>Eligibility Criteria:</strong> Structured fields for <strong>Faculty</strong> and <strong>Programs (Courses)</strong> that the system uses for automated eligibility checking.</li><li><strong>Tabs:</strong> The record is organised into <strong>General</strong>, <strong>Intake Information</strong>, <strong>Questions & Documents</strong>, <strong>Scoring Matrix</strong>, <strong>Payment Configuration</strong>, and <strong>Record Details</strong> tabs, each managing a distinct aspect of the scholarship.</li></ol>"
        },
        {
          file: "step-02-scholarshipdetails-b.png",
          caption: "Scholarship record - detailed eligibility criteria configuration",
          description: "Scrolling down the <strong>General</strong> tab reveals the full eligibility configuration used by the system's automated eligibility engine. The manager sets a <strong>Minimum GPA</strong> threshold (e.g. 5.00) and specifies whether the scholarship targets <strong>First Nation</strong> students. <br><br>The <strong>Eligibility Criteria</strong> text field captures the formal criteria in plain language, which the AI agent also uses when assessing applications. In this example, the criteria specify: <strong>Citizenship</strong> (domestic), <strong>Campus</strong> (Canberra, on campus), current enrolment with an upcoming placement in Semester 1 2025, <strong>Faculty</strong> (Health Science), and the specific <strong>Courses</strong> eligible - Bachelor of Nursing, Bachelor of Nursing (Enrolled Nurses), and Bachelor of Occupational Therapy. <br><br>An <strong>Additional information and special conditions</strong> field is available for any supplementary notes that fall outside the structured fields."
        }
      ]
    },
    {
      title: "Manage Scholarship Intakes",
      screenshots: [
        {
          file: "step-03-viewscholarshipintakes-a.png",
          caption: "Intake Information tab - current intake and intake history",
          description: "The <strong>Intake Information</strong> tab manages the scholarship's application rounds. The <strong>Current Intake</strong> field shows which round is currently open and accepting applications. <br><br>The <strong>Intake History</strong> panel lists all past and present intakes with their key configuration: <strong>Name</strong>, <strong>Start Date</strong>, <strong>End Date</strong>, <strong>Number of Scholarships Available</strong>, and <strong>Number of Applications</strong> received. In this example, the <em>ACT Government Nursing and Allied Health Placement – 2025</em> intake ran from 27/07/2025 to 27/11/2025, with 10 scholarships available and 5 applications submitted. <br><br>New intakes can be created directly from this tab using the <strong>New Scholarship Intake</strong> button, or an existing intake record can be linked using <strong>Add Existing Scholarship Intake</strong> - allowing managers to reuse intake configurations across years without rebuilding from scratch."
        }
      ]
    },
    {
      title: "Configure Application Questions",
      screenshots: [
        {
          file: "step-04-configurequestions-a.png",
          caption: "Questions & Documents tab - scholarship question list",
          description: "The <strong>Questions & Documents</strong> tab defines the application questions students must answer when applying for this scholarship. Each question is listed with its <strong>Question Title</strong> and whether <strong>Supporting Documents</strong> are required. <br><br>In this example, three questions are configured: a 200-word written statement on financial challenges, evidence of financial hardship (with supporting documents required), and confirmation of Aboriginal and/or Torres Strait Islander status (with supporting documents required). <br><br>The right panel displays the three questions as <strong>Question Lookup</strong> fields, giving managers a quick summary of what is linked. New questions can be added using the <strong>New Scholarship Question</strong> button, allowing the question bank to be built and reused across scholarships."
        },
        {
          file: "step-04-configurequestions-b.png",
          caption: "Scholarship Question record - question text and AI agent instructions",
          description: "Each question is its own record with a dedicated configuration screen. The <strong>Question Details</strong> panel captures the full <strong>Question</strong> text and whether <strong>Supporting Documents</strong> are required for that question. <br><br>The <strong>AI Agent Instructions</strong> panel is where the manager configures how the AI should review responses to this question. Two AI prompts are linked: <ol><li><strong>AI Prompt – Review answer to question:</strong> Points to the AI prompt that assesses the student's written response. An <strong>Answer Review Instructions</strong> field allows the manager to add specific guidance for how the AI should evaluate answers to this particular question.</li><li><strong>AI Prompt – Review uploaded document:</strong> Points to the AI prompt that reviews any attached supporting documentation. A <strong>Supporting Documents Review Instructions</strong> field provides context-specific instructions for document assessment.</li></ol> This structure gives managers fine-grained control over how the AI agent evaluates each question without modifying the underlying prompt templates."
        }
      ]
    },
    {
      title: "Configure Scoring Matrix",
      screenshots: [
        {
          file: "step-04-configurescoring-a.png",
          caption: "Scoring Matrix tab - weighted scoring configuration",
          description: "The <strong>Scoring Matrix</strong> tab defines how the AI calculates the total score for each application. Each scoring component is listed with its <strong>Name</strong>, <strong>Weight (In %)</strong>, and a plain-language <strong>Description</strong> of how that component is scored. <br><br>In this example, the matrix is configured with four components: <strong>GPA</strong> weighted at 40%, with a banding description covering the full GPA scoring scale (1 for GPA 5.00–5.49, 2 for 5.50–5.99, 3 for 6.00–6.19, 4 for 6.20–6.39, 5 for 6.40+), and each of <strong>Question 1</strong>, <strong>Question 2</strong>, and <strong>Question 3</strong> weighted at 20% each. <br><br>Weights must total 100%, ensuring the AI's scoring is fully transparent and auditable. The matrix can be adjusted at any time to reflect changes in scholarship priorities or review committee requirements."
        }
      ]
    },
    {
      title: "Configure Payment",
      screenshots: [
        {
          file: "step-05-configurepayments-a.png",
          caption: "Payment Configuration tab - payment recurrence and amount",
          description: "The <strong>Payment Configuration</strong> tab sets up the disbursement details for approved scholarship recipients, so payments can be processed automatically once an application is approved. <br><br>The manager configures three fields: <strong>Payment Recurrence</strong> (e.g. Per Month) to define the payment frequency, <strong>Number of recurrences</strong> (e.g. 1) to set how many payment instalments will be made, and <strong>Payment Amount</strong> (e.g. $500.00) to specify the value of each instalment. <br><br>Once configured at the scholarship level, these payment settings are automatically applied to approved applications, eliminating manual payment setup for each individual recipient."
        }
      ]
    }
  ]
};
