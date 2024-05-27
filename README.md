# Live Chat App

## Project Overview

This project involves developing a real-time chat application with advanced features. Users will be able to:

- Register, log in, and manage their profiles, including updating their names and avatars.
- Create chatrooms, add members, and exchange messages instantly through GraphQL subscriptions over WebSockets.
- See typing indicators showing when others are typing.
- Track online users in real-time, managed by Redis, which enables real-time updates of the list of users present in a chatroom.

## Technology Stack

- **Backend:** NestJS, Prisma, GraphQL, Redis, Postgres
- **Frontend:** ReactJS, Apollo Client, Zustand, Mantine

## Explanation for Choosing REST, GraphQL, and Event-Driven API for a Real-Time Chat Project

### GraphQL:

- **Query Flexibility:** For complex and dynamic features like chatrooms and profiles, GraphQL allows clients to request exactly the data they need, avoiding over-fetching and under-fetching of data. For example, a client can request specific information about a chatroom without retrieving unnecessary data.
- **Real-Time Subscriptions:** One of the main reasons for choosing GraphQL is its ability to handle subscriptions for real-time features. For our chat application, this means messages can be received instantly, and typing indicators can be updated in real time.
- **Single Endpoint:** GraphQL uses a single endpoint for all queries, simplifying route management and reducing server-side complexity.

### Event-Driven API:

- **Real-Time Responsiveness:** Event-driven APIs are essential for managing real-time updates of online users in chatrooms. By using Redis to store active users and publish events when users join or leave a room, we can maintain a synchronized and up-to-date view of online users.
- **Scalability and Load Management:** Events can be processed asynchronously, which helps in better handling traffic spikes and load, crucial for a real-time chat application with potentially many active users simultaneously.

## Running instructions:

```sh
#install the dependencies:
cd frontend
npm install
cd ../backend
npm install
#start the docker container (contains the databases):
sudo docker compose -f docker-compose.yml up
#In a separate terminal instance, start the backend:
cd backend
npm run start
#in a separate terminal instance, start the frontend:
cd frontend
npm run dev
```

Connect to the app on http://localhost:5173

## Demo Video :
https://drive.google.com/file/d/1wEU5xxyc8qQgX47AqttsSr6GVAnF5hqE/view?usp=drive_link

## Contributors

- Olfa Medimegh
- Asma Elhaj
- Naoures Bzeouich
- Idris Saddi
- Yessine Ellini
