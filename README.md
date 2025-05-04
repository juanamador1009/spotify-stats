# 🎵 Spotify Stats

**Spotify Stats** is a web application built with Next.js that allows users to view their top tracks and artists on Spotify, organized by different time ranges. The project uses the official Spotify API, integrates `Auth.js` for secure authentication, and is styled with TailwindCSS and ShadCN UI components.

## 📌 Features

- 🔐 Spotify authentication via `Auth.js`, requesting secure permissions to access personal listening statistics.
- 📈 Displays Top 50 most listened tracks and Top 20 most listened artists.
- ⏳ Time filters: last 4 weeks (short term), last 6 months (medium term), and all-time (long term).
- 👤 Shows the name and profile picture of the authenticated user.
- 🏆 Each track/artist includes a ranking number (position).
- 🎨 Built with TailwindCSS and shadcn/ui for a responsive and modern interface.
- 🔄 Logout option available at any time.
- 💁️ Horizontal carousel navigation for top cards.

## 🚀 Technologies Used

- **Next.js 15** + **React 19**
- **Auth.js** for secure OAuth authentication
- **Spotify Web API**
- **TailwindCSS** for rapid and responsive styling
- **shadcn/ui** for modern, accessible UI components

## 📸 Screenshots

#### View before logging in

![View before logging in](/assets/design/unauthenticated-view.png)

#### Authenticated view

![Authenticated view](/assets/design/authenticated-view.png)

## 🛠 Local Installation

### Requirements

- Node.js 18+
- npm (or pnpm/yarn)

### Environment Variables

Create a `.env.local` file at the root of the project with the following:

```env
AUTH_SECRET=your_auth_secret
AUTH_SPOTIFY_ID=your_spotify_client_id
AUTH_SPOTIFY_SECRET=your_spotify_client_secret
```

### Steps

```bash
git clone https://github.com/yourusername/spotify-stats.git
cd spotify-stats
npm install --force
npm run dev
```

> ⚠️ `--force` is used for compatibility with React 19 and Next.js 15.

## 🔴 Token Expiration

The token provided by Spotify lasts for approximately 1 hour. After expiration, users need to log in again to continue using the app.

## 💡 Future Ideas

- ▶️ Add option to play a preview when clicking a card
- 🔗 Or redirect directly to the track/artist on Spotify
- ⬅️➡️ Add navigation buttons to the carousel (in addition to mouse scroll)
- 🧱 Consider switching layout to a vertical list instead of a horizontal carousel for better mobile UX

## 🔍 Testing

Manual testing covered:

- Authentication and correct retrieval of user data
- Validating that Spotify endpoints respond correctly to filters
- Verifying that the Top updates based on selected category and time range
- Basic control of token expiration
