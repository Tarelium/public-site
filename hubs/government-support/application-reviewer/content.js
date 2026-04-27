/* ============================================================
   Government Support Hub - Application Reviewer
   Demo Content
   ============================================================ */

window.DEMO = {
  hub:         "Government Support Hub",
  hubSlug:     "government-support",
  persona:     "Application Reviewer",
  personaSlug: "application-reviewer",
  color:       "#2B5F9E",

  steps: [
    {
      title: "CPP Analytics Dashboard",
      screenshots: [
        {
          file: "step-01-applicationdashboard-a.png",
          caption: "CPP Analytics - operational overview dashboard",
          description: "Reviewers open the <strong>CPP App</strong> in Tarelium to find a live analytics dashboard, <strong>CPP Analytics</strong>, that provides an at-a-glance view of the entire application pipeline.<br><br>Six charts give reviewers an immediate operational picture: <strong>Active CPP Applications by week</strong> broken down by status (Draft, Submitted, Finalised, More Info Required, In Assessment, Appeal, Cancelled); <strong>applications by month and status</strong>; <strong>applications by program</strong> (Top 10 courses); <strong>applications by type</strong>; <strong>applications by approval status</strong>; and <strong>active requests for information over time</strong>. A <strong>Statement of Benefits by Type</strong> chart is also shown, giving insight into the mix of income support evidence being submitted across the cohort.<br><br>This dashboard allows reviewers to spot bottlenecks, track volumes, and prioritise their work before opening the application queue."
        }
      ]
    },
    {
      title: "Active CPP Applications",
      screenshots: [
        {
          file: "step-02-applicationlist-a.png",
          caption: "CPP Applications - full application queue",
          description: "The <strong>CPP Applications</strong> list view (<em>01. Active CPP Applications</em>) presents the full queue of current submissions in a structured table. Each row shows the application <strong>Number</strong>, submission date, assigned <strong>Seat</strong>, <strong>Student</strong> name, <strong>Student Course</strong>, <strong>Earliest Placement</strong> date, and <strong>Application Status</strong> (colour-coded as Submitted, Draft, or Finalized).<br><br>Two key intelligence columns surface directly in the list view: <strong>On Income Support Pay</strong> (Yes/No) and an <strong>AI Insight</strong> flag that automatically highlights issues, for example <em>\"Statement of Benefit checks failed\"</em>, along with a brief AI recommendation rating. The <strong>Approval Status</strong> (Approved / Rejected) and <strong>Payment Status</strong> (Automatic / Manual) columns show the current outcome for each application. Reviewers can filter, sort, and open any record directly from this view."
        },
        {
          file: "step-02-applicationlist-b.png",
          caption: "CPP Applications - selecting a record to review",
          description: "Reviewers select an application from the queue to open its full detail view. The list provides enough context (AI flags, approval status, and payment mode) that reviewers can triage applications before opening them, prioritising those that require attention over those that have already been approved and are processing automatically."
        }
      ]
    },
    {
      title: "Application Details",
      screenshots: [
        {
          file: "step-03-applicationdetails-a.png",
          caption: "Application Details - Summary tab overview",
          description: "Opening an application reveals the full <strong>Summary</strong> tab. The <strong>Applicant Details</strong> panel on the left shows the student's name, enrolled course, income assistance status, student program, and the programme's maximum paid weeks alongside the course-specific allocation, giving reviewers immediate context on entitlement limits.<br><br>The <strong>Statuses</strong> panel on the right tracks the lifecycle of the application: <strong>Application Status</strong> (e.g. Submitted), <strong>Approval Status</strong>, and toggle controls for <strong>To Review</strong> and <strong>Appealed</strong>.<br><br>The <strong>Placements</strong> table below lists each confirmed placement with its start date, required placement hours, and placement status, enabling reviewers to verify that the student's claimed placements align with what the university has on record. At the bottom of the page, the <strong>AI Insights</strong> panel flags any document issues, and the <strong>Documents</strong> section shows the Active Statement of Benefits with an AI recommendation and Document Approval status ready for the reviewer's decision."
        },
        {
          file: "step-03-applicationdetails-b.png",
          caption: "Application Details - guided walkthrough callouts",
          description: "The Summary tab includes a series of numbered callouts that walk reviewers through the key sections of the application form in sequence. The callouts highlight: the <strong>navigation tabs</strong> (Summary, Documents, Request for Info, Appeal, Payments, AI Insights, Record Details, Related); the <strong>Application Status</strong> and <strong>Approval Status</strong> fields; the <strong>Placements</strong> table; and the <strong>AI Insights</strong> and <strong>Documents</strong> panels at the bottom of the page.<br><br>This guided structure helps new reviewers understand which sections to check and in what order, reducing the risk of overlooking key information during the assessment process."
        }
      ]
    },
    {
      title: "Document Details & AI Insights",
      screenshots: [
        {
          file: "step-04-documentdetails-a.png",
          caption: "Statement of Benefit - General tab with AI extracted data",
          description: "Opening a Statement of Benefit record reveals the full document detail view. The <strong>General</strong> tab is divided into three panels.<br><br>The <strong>Applicant's input</strong> panel on the left confirms the applicant name and type of benefit selected (e.g. Abstudy), and shows any notes or attached files associated with the document, including the uploaded PDF.<br><br>The <strong>AI Extracted Data</strong> panel on the right shows what the system has automatically read from the uploaded document: <strong>AI Customer Name</strong> (with a Name Match indicator confirming whether it matches the applicant record), <strong>Benefit Amount</strong> (with a flag if the amount is zero or missing), <strong>Document Issue Date</strong> (with a currency check), <strong>Application Date</strong>, and whether the document is a PAYG document. Each field is validated automatically, giving reviewers a structured view of the document's key data points without needing to open the PDF manually.<br><br>The <strong>AI Insights</strong> block provides a <strong>Genuine Rating</strong> (out of 10) and an overall <strong>Recommendation</strong> (e.g. Bad, Check, Good). Reviewers use the <strong>Reviewer's input</strong> section to record their <strong>Document Approval</strong> decision and optionally provide feedback on the AI insight to help improve the model over time."
        },
        {
          file: "step-04-documentdetails-b.png",
          caption: "Statement of Benefit - AI Insights Details tab",
          description: "The <strong>AI Insights Details</strong> tab provides full transparency into how the authenticity score was calculated. A <strong>Document Authenticity Score</strong> (e.g. 8/10) is supported by a detailed rationale checklist that evaluates each expected characteristic of a genuine Centrelink document:<br><br><ul><li>Presence of the word \"Centrelink\" ✓</li><li>Correct document title (\"Income Statement\", not \"PAYG Payment Summary\") ✓</li><li>Reference number present ✓</li><li>Customer name present and matching ✓</li><li>Postal address present ✓</li><li>Date of issue present ✓</li><li>Australian coat of arms logo (kangaroo and emu) present ✓</li><li>Consistent formatting, font, alignment, and spacing ✓</li><li>Correct spelling and grammar throughout ✓</li><li>Official contact details (phone numbers, my.gov.au links): NOT visible ✗</li><li>Consistent and realistic dates ✓</li><li>Clean and high-resolution logos and graphics ✓</li><li>Matching details across elements ✓</li></ul>The tab also extracts <strong>Payment Amounts</strong> by benefit type (e.g. Abstudy: $0), document readability, customer name, PAYG status, and issue date, providing reviewers with a complete, auditable basis for their approval decision."
        }
      ]
    },
    {
      title: "Application Approved & Payments Generated",
      screenshots: [
        {
          file: "step-05-applicationapprovedandpaid-a.png",
          caption: "Approved application - Finalized status and payment records",
          description: "Once a reviewer approves an application, the record reflects the finalised state immediately. The <strong>Application Status</strong> updates to <strong>Finalized</strong> and the <strong>Approval Status</strong> to <strong>Approved</strong>. The <strong>Payment Status</strong> is set to <strong>Automatic</strong>, meaning weekly CPP payments are generated without further manual intervention.<br><br>The <strong>Placements</strong> table confirms that the placement is marked as <strong>Completed</strong>, with the required placement hours validated. The <strong>Active CPP Payments</strong> table below lists every payment record generated for the application, each showing a PAY reference number, period start and end dates, amount (e.g. $331.65 per week), payment status (Paid), and the date the record was created. Reviewers can see the full payment schedule at a glance alongside the application record."
        },
        {
          file: "step-05-applicationapprovedandpaid-b.png",
          caption: "Approved application - payment history and activity timeline",
          description: "Scrolling down the approved application reveals the complete payment history and the <strong>Timeline</strong>, a chronological audit trail of all activity on the record.<br><br>The <strong>Active CPP Payments</strong> table shows the full set of weekly payment records generated. Most appear as <strong>Paid</strong>; some are marked <strong>Cancelled</strong> where the maximum payment threshold was reached or placement hours were not met, with notes attached explaining the reason.<br><br>The <strong>Timeline</strong> captures every significant event: an automated <strong>approval email</strong> sent to the student notifying them that their CPP application has been approved; reviewer notes documenting any status changes or decisions (e.g. approval reason updates); and system-generated entries recording when fields were modified and by whom. This gives both reviewers and administrators a complete, transparent record of how the application was processed from submission through to payment."
        }
      ]
    }
  ]
};
