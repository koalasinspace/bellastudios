# Project Blueprint

## Overview

This is a Next.js application with a role-based authentication system. It includes a dashboard with different views for admins, developers, and testers. The application uses a custom set of UI components and features a private routing system.

## Implemented Features

*   **Authentication:** A client-side authentication system with a login page and a private routing system. The authentication state is managed using a React Context.
*   **Dashboard:** A dashboard layout with a sidebar and a header. The navigation links in the sidebar change based on the user's role.
*   **UI Components:** A set of custom UI components, including `Card`, `DashboardLayout`, `NavItem`, `MobileNavItem`, `StatCard`, `TimelineItem`, `ActionCard`, `AgentMessage`, and `TaskCard`.
*   **Styling:** The application is styled with Tailwind CSS and has a modern, dark theme.

## Plan for New Feature: Billing Page

1.  **Create the billing page:** A new page will be created at `/billing` that displays billing information.
2.  **Add navigation link:** A link to the billing page will be added to the main navigation for all user roles.
3.  **Design the page:** The billing page will have a clean and modern design, consistent with the rest of the application. It will include:
    *   A heading
    *   A section for the current plan with an option to upgrade
    *   A section for payment history
    *   A section for payment method
4.  **Deploy the application:** The application will be deployed to Firebase Hosting.
