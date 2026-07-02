# Overall System - Simplified

> Bluelearn's underlying structure is a **directed acyclic graph (DAG)** of guides connected by prerequisite edges. Not a tree. Not a collection of separate hierarchies. One graph.

## Definitions
### Guide
A guide is the atomic unit of knowledge in Bluelearn.
- Each guide covers one specific concept or skill, whether practical ("how to") or theoretical ("understanding").
- Guides exist only once within the platform and are designed to be reused throughout the knowledge graph.

### Variant
A variant is an alternative form of the same guide that preserves the core concept but changes how it is presented or applied.

Variants exist to adapt a single guide to different needs without duplicating knowledge.
They may:
- present different practical approaches to achieving the same outcome
- offer different explanations or conceptual framings of the same idea
- reflect cultural, regional, or contextual differences in how the concept is taught or used
- adapt the same concept to different tools, systems, or environments

Despite these differences in presentation or application, all variants connect to the same underlying guide (canonical guide).

### Subject
A subject is a flat, non-hierarchical tag used to label and group related guides within the knowledge graph.

Subjects function similarly to tags on blog posts or social media content. They exist purely for organisation, filtering, and discovery purposes, rather than defining structure or learning flow.

### Knowledge Graph
A Knowledge Graph is the complete structured network that represents all learning content in BLUE and the relationships between them.

It consists of:
- **Nodes**: entities such as guides, variants, subjects, learning paths, and other learning structures
- **Edges**: the relationships between those nodes, such as:
  - **prerequisite dependencies** - what must be learned first (a **dependent** refers to a node (guide) that relies on another node (guide) to come first.)
  - **related guides** - inline links and references
  - **variants link** to the canonical guide 
  - **subject membership** - which subjects a guide belongs to
  - **learning paths memberships** - connections between guides and curated learning paths

### Walkthrough
A walkthrough is an automatically generated learning journey derived from the knowledge graph when a learner selects a specific goal guide. It represents all prerequisite knowledge required to understand that goal and organises it into a structured hierarchy of levels. These levels are not determined by the author - it is determined by the system based on prerequisites.

Each level contains a set of guides that:
- can be learned in any order within that level
- are independent of one another
- only depend on guides from lower levels

As a result, a walkthrough is not a linear sequence but a layered structure that progressively builds from foundational concepts up to the selected guide, always reflecting the current state of the knowledge graph.

### Level
A level groups together guides that can be learned in any order before progressing further.

Levels are calculated automatically based on prerequisite relationships rather than being assigned by authors. Because walkthroughs are generated dynamically, the same guide may appear at different levels depending on the learner's chosen goal.

### Hierarchy (Walkthrough)
Hierarchy is the layered structure of a walkthrough.

Guides are arranged into levels:
- Lower levels contain the basic prerequisites
- Higher levels contain more advanced guides

A walkthrough is built like steps or layers - a user can finish all the lower steps before moving up, but they can do things in the same step in any order.

### Learning Path
A learning path is a curated linear sequence of guides built from the knowledge graph created for a specific audience or objective. They can include multiple end goals, recommend particular teaching approaches, and intentionally simplify or tailor the learning journey.

Unlike walkthroughs, which include every prerequisite automatically, learning paths allow curators to select specific guides, choose preferred variants, and intentionally omit guides that are unnecessary for the intended audience or learning objective, and reorder guided within the same level.

## Roles
The roles are not a hierarchy of power, it is used to split up roles and responsibilities.

### Creator
A community member who creates the guides and variants, they can also create new subject areas when creating a guide or variant.

### Curator
A community member authorized to create learning paths. A curator picks targets, skips topics, pins guide variants, and writes path metadata before submitting a revision for review. Granted directly by an admin, like the other roles.

### Verifier
A community member authorized to review guide submissions and modifications before publish. Verifiers are not required to be subject experts; their job is to check hierarchy soundness, catch obvious errors, prevent duplication, and apply the same structural checks to new methods and alternatives parented under a guide. Verifier discretion is deliberately constrained: decisions are rubric-bound, panel-based, justified in writing, and publicly logged. See the Guide Creation & Verification section.

### Moderator
A community member who handles post-publish guide review. Moderators see the full vote-rubric breakdown (both whole-guide and per-section), sit on re-review panels when a guide trips a re-review trigger, and sit on dispute panels. Moderator panels are odd-numbered, randomly drawn from the eligible pool, rubric-bound, and require written justifications on the same discipline as verifier panels. Subject-expert credentialing for moderators (and verifiers) is layered on later as the verifier-style credentialing system comes online.

## How knowledge is organised
BLUE stores knowledge as a directed acyclic graph (DAG).

Unlike a tree, a guide can belong to multiple subjects and be reused in many learning journeys. Subjects don't own guides - they simply provide different ways to browse the same knowledge graph.

## Walkthroughs (TODO)
<!-- Diagramed Example -->
### Constraints (TODO)

## Learning Paths
<!-- Diagramed Example -->
### Traits
- **Versioned paths**: A learning path has saved versions. Each version is created, reviewed, and published.
-**Multiple goals**: A learning path can aim at more than one endpoint (e.g. Machine Learning and Statistics together), not just one like a walkthrough.
- **Can skip steps**: Curators can leave out prerequisites if they’re not needed for the audience, even if the graph would normally include them.
- **Choose variants**: Curators pick which version of a guide to use based on the audience or teaching style.
- **Frozen after publish**: Once a version is published, it cannot change. If anything needs updating, a new version must be created.

### Contribution Flow

## Guide Creation (TODO)
### Contribution Flow
<!-- Diagram -->

### Verification Gate
<!-- Verifier Checklist table -->

#### Conduct and Bias Prevention

### Post-Publish: Vote-Based Verification
<!-- Downvote rubric table -->

### Reachability

### Disputes
