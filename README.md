# NVIDIA FLARE GitHub Pages Website

## Installation

### 1. Clone the repo

```bash
git clone https://github.com/zephyrie/nvflare-web.git
```

The `.` will clone it to the current directory so make sure you are inside your project folder first.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start development Server

```bash
npm run dev
```

### Preview & Build

```bash
npm run preview
npm run build
```

## Project Structure

Inside of the project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## TailwindCSS

TailwindCSS is already configured in this repo, so you can start using it without any installation.