# BruinSpace

A Swiss Army knife room booking tool for UCLA students. View real-time study room availability across five UCLA Library locations (Powell Library, the Charles E. Young Research Library, the Louise M. Darling Biomedical Library, the Science and Engineering Library, and the Powell Media Lab), filter by floor/capacity, and jump straight to booking.

## Features

- **Real-time availability**: fetches live data from the UCLA Library reservation system
- **Card view**: room cards showing available time blocks, longest consecutive slot, and capacity
- **Grid view**: timeline grid showing 30-minute slot availability across all rooms
- **Smart filters**: filter by floor, minimum capacity, or available-only rooms
- **Direct booking links**: click any available slot to open the UCLA Library booking page
- **Auto-refresh**: refreshes every 2 minutes to stay current
- **Date navigation**: browse availability for any date

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Architecture

- `app/api/availability/route.ts`: API proxy to the UCLA Library SpringShare availability endpoint
- `app/lib/rooms.ts`: static room metadata (IDs, names, floors, capacities)
- `app/components/BookingDashboard.tsx`: main dashboard with date navigation, filters, view toggle
- `app/components/TimeGrid.tsx`: grid view with per-room timeline
- `app/components/RoomCards.tsx`: card view with availability blocks
- `app/components/QuickStats.tsx`: summary statistics bar

## Room Data

| Library                              | Spaces | Groups                                                        |
| ------------------------------------- | ------ | -------------------------------------------------------------- |
| Powell Library                        | 6      | Group Study Rooms                                               |
| Charles E. Young Research Library     | 33     | Group Study Rooms, Collaboration Pods                           |
| Louise M. Darling Biomedical Library  | 22     | Main Floor Study Room, Collaboration Hub, Presentation Space, Study Commons |
| Science and Engineering Library       | 3      | Group Study Rooms (Boelter Hall and the Geology building)       |
| Powell Media Lab                      | 4      | Study Rooms                                                      |

## Note on Booking Identity

The UCLA Library API does **not** expose who booked a room. The API response only contains:

- Time slots with a className marking them unavailable, or no className for available slots
- A bookings array that is always empty for unauthenticated requests
- No patron names, emails, or identifiers are returned

This is by design, the system (SpringShare LibCal) protects user privacy. There is no public endpoint to see who booked a given room.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
