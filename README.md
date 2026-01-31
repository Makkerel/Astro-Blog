# 🚀 Project Structure
Inside of your Astro project, you'll see the following folders and files, reflecting a well-organized structure for a content-rich site:

```text
/
├── public/
│   └── (static assets like favicon, images not processed by Astro)
├── src
│   ├── assets/
│   │   ├── CoreKeeper/
│   │   ├── stick_figures/
│   │   ├── clown_face.jpg
│   │   ├── github-brands-solid.svg
│   │   ├── happy_face.png
│   │   ├── sbhacks.png
│   │   └── spiral.png
│   ├── components/
│   │   ├── blogpost.astro
│   │   ├── footer.astro
│   │   ├── hamburger.astro
│   │   ├── header.astro
│   │   ├── link.astro
│   │   └── navigation.astro
│   ├── layouts/
│   │   ├── baseLayout.astro
│   │   └── markdownLayout.astro
│   ├── pages/
│   │   ├── posts/
│   │   ├── tags/
│   │   ├── about.astro
│   │   ├── blogs.astro
│   │   └── index.astro
│   ├── scripts/
│   │   └── menu.js
│   └── styles/
        └── global.css
```

**Key Directories and Files:**

*   **`src/pages/`**: Contains your `.astro` pages and Markdown files for routing.
    *   `index.astro`: The homepage of your website.
    *   `about.astro`: An about page.
    *   `blogs.astro`: A page listing blog posts.
    *   `pages/posts/`: Likely contains individual blog post entries (e.g., Markdown files).
    *   `pages/tags/`: Could be used for tag-based filtering of content.
*   **`src/layouts/`**: Houses Astro layout components that define the common structure and styling for your pages.
    *   `baseLayout.astro`: A fundamental layout used across multiple pages.
    *   `markdownLayout.astro`: A specific layout for rendering Markdown content.
*   **`src/components/`**: Reusable Astro components.
    *   `header.astro`, `footer.astro`, `navigation.astro`: Common UI elements.
    *   `blogpost.astro`: A component specifically for displaying blog post content.
    *   `hamburger.astro`, `link.astro`: Smaller, utility components.
*   **`src/assets/`**: Stores static assets like images and SVGs that are typically processed by Astro's build pipeline.
    *   Includes various image files (`.jpg`, `.png`, `.svg`) and subdirectories for organized assets.
*   **`src/styles/`**: Contains global stylesheets for your project.
    *   `global.css`: Your main CSS file for project-wide styling.
*   **`src/scripts/`**: For client-side JavaScript that may be needed for interactive elements.
    *   `menu.js`: Likely handles navigation menu functionality.
*   **`public/`**: For static assets that should not be processed by Astro, such as `favicon.svg`.

## 🧞 Commands
All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                           |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
