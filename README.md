# Keep the Future Human — Searchable Essay

This project is a searchable, web-based version of the **Keep the Future Human** essay. It breaks down the essay into chapters and appendices and provides a full-text search feature to improve accessibility and ease of navigation.

---

## About

I developed this as a contribution to the AI safety community to enhance access to important governance materials.

---

## Features

- Full-text search across the entire essay content
- Clear chapter and appendix structure for easy navigation
- Responsive and clean user interface with attention to usability
- Easily maintainable using [Fumadocs](https://fumadocs.com) — a modern documentation tool

---

## Getting Started

### Prerequisites

- Node.js (version X or higher)
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jlsodai/keepthefuturehuman.git
```

2. Run development server:
```bash
cd keepthefuturehuman
npm install
npm run dev
```

---

## How to Update Content

All essay content is stored in the `content/` directory as MDX files. To update or add new chapters, appendices, or sections:

1. Edit or add `.mdx` files in the `content/` directory.
2. Save your changes. The site will automatically update the navigation and search index on the next build or development run.
3. For advanced features (like custom components), refer to the `src/mdx-components.tsx` file.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository and create a new branch for your feature or fix.
2. Make your changes and ensure the project builds and runs locally.
3. Submit a pull request with a clear description of your changes.

For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.