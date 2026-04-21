/* ============================================================
   Scholarship Hub - Student
   Demo Content

   HOW TO EDIT:
   - Update step titles and descriptions below.
   - To add a screenshot: drop the file in
       assets/screenshots/scholarship/student/
     then set  file: "your-filename.png"  in the step.
   - To add a step: copy one object and add it to the array.
   - To reorder steps: move the objects in the array.
   ============================================================ */

window.DEMO = {
  hub:         "Scholarship Hub",
  hubSlug:     "scholarship",
  persona:     "Student",
  personaSlug: "student",
  color:       "#1A6644",

  steps: [
    {
      title: "Scholarship Portal & Scholarship Finder",
      screenshots: [
        {
          file: "step-01-studentportal-a.png",
          caption: "Scholarship Portal - home page",
          description: "Students land on the Talerium Scholarship Portal after logging in with their university credentials. The home page provides a clear introduction to what scholarships are and how they work, along with a 'Scholarships explained' guide. <br><br>The <strong>Types of Scholarships</strong> section highlights the three main categories available: <strong>International student scholarships</strong>, <strong>Higher Degree by Research scholarships</strong>, and <strong>External scholarships</strong>, giving students an instant orientation before they start searching."
        },
        {
          file: "step-01-studentportal-b.png",
          caption: "Scholarship Finder - filtered scholarship list",
          description: "The <strong>Scholarship Finder</strong> allows students to narrow down available opportunities using a rich set of filters on the left panel: <strong>Status</strong>, <strong>Faculty</strong>, <strong>Scholarship Type</strong> (Academic excellence, Accommodation, Diversity, Financial hardship, First Nations students, Regional and remote, Research, Sporting excellence), <strong>Citizenship Status</strong>, <strong>Study Level</strong>, and <strong>Programs</strong>. <br><br>The results list each scholarship with a brief description, donor, value, duration, and maximum value, making it easy for students to quickly identify which opportunities are worth exploring further."
        }
      ]
    },
    {
      title: "My Scholarship Applications Dashboard",
      screenshots: [
        {
          file: "step-02-scholarshipapplications-a.png",
          caption: "My Scholarship Applications - student dashboard overview",
          description: "The <strong>My Scholarship Applications</strong> dashboard gives students a personalised overview in one place. Key areas of the dashboard: <ol><li><strong>My Details:</strong> Displays the key eligibility attributes drawn from the student record - Citizenship Status, GPA Score, First Nations status, and enrolled Programs - so students always know how their profile will be assessed by the system.</li><li><strong>My Scholarships:</strong> Highlights scholarships the student has been matched to, including the scholarship name and grant value.</li><li><strong>My Applications:</strong> Lists every application with its submission date, scholarship name, Application Status, and Approval Status, giving a complete at-a-glance view of all activity.</li></ol>"
        },
        {
          file: "step-02-scholarshipapplications-b.png",
          caption: "Starting a new application - Applicant Details",
          description: "Clicking <strong>Apply for Scholarships</strong> from the dashboard launches the <strong>New Multi Scholarships Application</strong> wizard. The wizard opens on the <strong>Applicant Details</strong> tab, which pre-populates key eligibility criteria pulled directly from the student record: <strong>GPA</strong>, <strong>Citizenship Status</strong>, <strong>First Nation</strong> status, and enrolled <strong>Programs</strong>. <br><br>Students are prompted to review and confirm this information is correct before proceeding, as these details directly determine which scholarships they are eligible for."
        }
      ]
    },
    {
      title: "Create a New Multi-Scholarship Application",
      screenshots: [
        {
          file: "step-03-createscholarshipapplication-a.png",
          caption: "Scholarship Selection - choose scholarships to include",
          description: "The <strong>Scholarship Selection</strong> tab presents the full list of available scholarships with their values and real-time <strong>Eligibility</strong> status. Eligible scholarships are clearly marked and can be added to the application with a single click. Scholarships already added are shown with an <strong>Added</strong> badge. <br><br>Ineligible scholarships remain visible but are labelled <strong>Not Eligible</strong>, giving students full transparency about why certain opportunities are unavailable to them based on their profile."
        },
        {
          file: "step-03-createscholarshipapplication-b.png",
          caption: "Scholarship Selection - View Details modal with eligibility breakdown",
          description: "Clicking <strong>View Details</strong> on any scholarship opens a modal with the full scholarship description, donor, value, and duration, alongside a detailed <strong>Eligibility</strong> breakdown. <br><br>The system shows exactly which criteria the student meets: <strong>Citizenship</strong>, <strong>GPA Eligibility</strong>, and <strong>First Nation Eligibility</strong> are each listed with a clear pass/fail indicator. Students can then click <strong>Add Scholarship to your Application</strong> directly from the modal without navigating away."
        },
        {
          file: "step-03-createscholarshipapplication-c.png",
          caption: "Scholarship Details - scholarship-specific questions",
          description: "The <strong>Scholarship Details</strong> tab presents all scholarship-specific questions that must be answered as part of the application. Each question is linked to the scholarship it belongs to via the <strong>Eligible Scholarship</strong> column, making it clear which responses are required for which award. <br><br>The <strong>Status</strong> column tracks completion in real time: questions are marked <strong>Not Filled</strong> or <strong>Answered</strong> as students work through them. The Previous and Next buttons allow students to move through the wizard at their own pace, with progress saved automatically."
        },
        {
          file: "step-03-createscholarshipapplication-d.png",
          caption: "Declaration - review, acknowledge, and submit",
          description: "The final <strong>Declaration</strong> tab presents the University Privacy Policy and a formal declaration that the information provided is correct, complete, and authentic. Students are reminded to ensure all supporting documentation has been submitted before finalising, as applications will not be processed otherwise. <br><br>A free-text <strong>Scholarship Notes</strong> field allows students to include any additional context. The student checks the <strong>Acknowledgement</strong> checkbox to confirm they have read and understood the declaration, then clicks <strong>Submit</strong> to lodge the application."
        }
      ]
    },
    {
      title: "Track Application Status",
      screenshots: [
        {
          file: "step-04-myapplications-a.png",
          caption: "My Scholarship Applications - full applications list",
          description: "Once submitted, all applications appear immediately in the <strong>My Scholarship Applications</strong> dashboard. The table shows each application's number, submission date and time, scholarship name, Application Status, and Approval Status, giving students a single place to monitor every application they have lodged. <br><br>Applications in <strong>Draft</strong> status are visible alongside submitted ones, allowing students to return and complete any in-progress work at any time."
        },
        {
          file: "step-04-myapplications-b.png",
          caption: "My Scholarship Applications - application status callouts",
          description: "Key areas of the applications list: <ol><li><strong>Application Number & Submitted Date:</strong> Each application is assigned a unique reference number (e.g. APP-01066) with the exact date and time of submission recorded for reference.</li><li><strong>Application Status:</strong> Shows the current processing stage. <strong>Submitted</strong> confirms the application has been received and is under review. <strong>More info required</strong> flags that the assessor has requested additional documentation, prompting the student to respond. <strong>Finalized</strong> indicates the review is complete.</li><li><strong>Approval Status:</strong> Reflects the final outcome. <strong>Approved</strong> indicates the scholarship has been awarded. Students can monitor both statuses in real time without needing to contact the scholarships office.</li></ol>"
        }
      ]
    }
  ]
};
