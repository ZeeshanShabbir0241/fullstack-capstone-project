# User Stories for GiftLink Application

## Epic: User Authentication & Profile Management
### User Story 1: User Registration
- **As a** new user,
- **I want to** create an account with my name, email, and password,
- **So that** I can access the platform and list or claim items.
- **Acceptance Criteria:**
  - Password must be securely hashed on the backend.
  - Email must be unique.
  - Upon successful registration, a JWT token is returned.

### User Story 2: User Login
- **As a** registered user,
- **I want to** log in with my credentials,
- **So that** I can access protected features like listing and editing items.
- **Acceptance Criteria:**
  - System validates email and password.
  - Generates a JWT token stored client-side for authenticated sessions.

---

## Epic: Item Management & Search
### User Story 3: Browse Available Items
- **As a** visitor,
- **I want to** view a list of all available household items on the landing page,
- **So that** I can find items I might need.
- **Acceptance Criteria:**
  - Items display image, title, condition, and location.
  - Page fetches data from `/api/gifts`.

### User Story 4: View Item Details
- **As a** user,
- **I want to** click on a specific item to view its detailed page,
- **So that** I can read a full description and check item age/condition.
- **Acceptance Criteria:**
  - Fetches details from `/api/gifts/:id`.
  - Displays comments, detailed condition, and image gallery.

### User Story 5: Search Items by Category & Keyword
- **As a** user,
- **I want to** search and filter items by category and name,
- **So that** I can quickly locate specific items without scrolling through all listings.
- **Acceptance Criteria:**
  - API endpoint `/api/search` filters MongoDB query based on query parameters.