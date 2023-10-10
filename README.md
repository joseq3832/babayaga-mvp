# Admin

Admin is a vehicle management application designed for dealers and clients who list their vehicles on a marketplace. The application allows dealers to manage their vehicles in a single platform.

## 🚀 Features for mvp

- User registration and authentication
- Admin Root / manage profile
- Dealer Dashboard / vehicles administration

## 🥇 Technologies Used

- React v18
- Node v16 LTS
- Vite v4
- TailwindCss v3
- Zustand
- TanStack Query
- Biome

## 🏗️ Installation

- Clone the repository with: git clone https://github.com/joseq3832/babayaga-mvp.git
- cd babayaga-mvp/
- npm i -g pnpm
- npm i -g ./babayaga-cli
- Run `pnpm install.` to install the dependencies.
- Run `pnpm dev` to start the application in development mode.
- Open http://localhost:5173 in your browser.

## 🔅 Linter & format
- Install Biome dependencies on your computer
  - ### macOS arm (M1 or newer)
    curl -L https://github.com/biomejs/biome/releases/download/cli%2Fv1.2.2/biome-darwin-arm64 -o biome
    chmod +x biome
  -  ### Linux (x86_64)
    curl -L https://github.com/biomejs/biome/releases/download/cli%2Fv1.2.2/biome-linux-x64 -o biome
    chmod +x biome
  -  ### Windows (x86_64, Powershell)
    Invoke-WebRequest -Uri "https://github.com/biomejs/biome/releases/download/cli%2Fv1.2.2/biome-win32-x64.exe" -OutFile "biome.exe"

- Run `pnpm lint` or `pnpm lint:fix`  to run biome linter on all files in the project.
- Run `pnpm format` to `pnpm format:fix` run format with biome on all files in the project.

## 📄 Babayaga-cli

To create files easily, don't worry, you can use your favorite structure.

- run `babayaga make:component`, this create a componen on new folder with barrel and update components barrel, example: `babayaga make:component Button` <Name of new component with firts letter on uppercase>
- run `babayaga make:page`, this create a page on new folder with barrel and update pages barrel, example: `babayaga make:page Login` <Name of new page with firts letter on uppercase>
- run `babayaga make:layout`, this create a layout on new folder with barrel and update layouts barrel, example: `babayaga make:layout BaseLayout` <Name of new layout with firts letter on uppercase and subfix Layout>
- run `babayaga make:service`, this create a service on new folder with barrel, example: `babayaga make:service UserService` <Name of new service with firts letter on uppercase and subfix Service>
- run `babayaga make:store`, this create a store on new folder with barrel, example: `babayaga make:store UserStore` <Name of new store with firts letter on uppercase and subfix Store>, add --all option to create type files and --persist to make zustan state persist and saved to local or session storage, example `babayaga make:store UserStore --all --persist`
- run `babayaga make:query`, this create a hook to fetch data on new folder with barrel, and update hooks barrel, example: `babayaga make:query useFetchUsers` <Name of new hook with firts letter on uppercase and prefix useFetch>

