---
title: Live editing of a dockerized project
date: 2015-08-08 23:24 UTC
tags: docker-compose
---

Docker is awesome. It isolates software in independent containers, which behave like virtual machines, only without huge drain of system resources.

It can be used for web development, too. A Dockerfile placed in the root of the project directory will contain instructions for building a Docker image and, when a container is spun from this image, for starting necessary services in that container.

An important Dockerfile command is [`ADD`](https://docs.docker.com/reference/builder/#add).

```
ADD <src> <dest>
```

for example, `ADD . /app` will add all the contents of the project folder to the folder `/app` of the Docker image. The Docker image will thus contain all the project files, and so will the Docker container.

But here is the catch. A docker image (and, by extension, a docker container) is just a snapshot of the current state of the project folder. Is it possible to continue developing while running the project in a Docker container?

Turns out it is. Enter volume mounting. Imagine that a Docker image is run using docker-compose. If a .yml file for docker-compose contains the following instruction:

```
volumes:
 - <name of the directory>
```
then the container will have an access to this directory on the host file system.

Consider the following scenario:

We develop a node app that uses MongoDB in a Docker container. We build a image of our app using Dockerfile that, among other instructions, includes the following: `ADD . /app`. This instruction adds the contents of the project folder to the folder `/app` of the container. When run independently, this container will be self-sufficient and will serve our app.

Now what if we run this image using docker-compose and the following yml file:

```
app:
  build: .
  ports:
   - "5000:4568"
  volumes:
   - .:/app
  links:
   - mongo

mongo:
  image: mongo:latest
```

The app will run (and will be accessible on port 5000 of the host). Importantly, the `volumes` instruction of the yml file used for docker-compose will tell the container to treat the root folder of the project on the host file system *as if it were the /app folder inside of this container*. This means that now developers can edit files in the project folder, and the container will immediately see these changes. And they will immediately appear in the browser, on port 5000.

And that is super cool!
