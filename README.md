<!-- @format -->

# Couch User Directory (My Home Work)

## Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This repository contains a NextJS app that lists the names of users, which can be fetched from an API call to a NextJS API route (/api/users). This fetched data is used on a user page (/users). The data for the users is from mocked data. A user can click on another user and go to their profile page (/users/:id). On the profile page you will see user details. The profile information also comes from an API endpoint (/api/user/:id) served from the NextJS app. On a user's profile page (/user/:id), you can click on one of the friends to be routed to that friend's profile page.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running](#Running)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following:

- NodeJS (v18 or later)
- npm (v8 or later)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/jdavault/couch-user-directory
   cd cs-user-directory
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

## Running

1. Start the services locally:

   ```sh
   npm run dev
   ```

2. The Users API will be accessible at `http://localhost:3000/api/users`
3. The User API will be accessible at `http://localhost:3000/api/users/id`
4. The Users Page will be accessible at `http://localhost:3000/users`
5. The User Page will be accessible at `http://localhost:3000/users/id`

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. ```

## Usage

- To fetch all users, send a GET request to `http://localhost:3000/api/users`.
- To fetch specific user, send a GET request to `http://localhost:3000/api/users/:id`.

## API Endpoints

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
