---
title: 'UniStay'
shortDescription: 'A Flutter student-housing application with Firebase workflows and face verification.'
month: 09
year: 2025
technologies:
  - Flutter
  - Dart
  - Firebase
  - Python
  - FastAPI
  - DeepFace
  - Docker
  - OpenCV
logo: '/images/projects/unistay/logo.png'
github: 'https://github.com/Algath/SS2-UniStay'
---

## Overview

### Description

UniStay is a Flutter application for student housing in Switzerland. It provides separate workflows for students searching for and booking accommodation and homeowners managing property listings and booking requests. The application uses Firebase for authentication, Firestore data, and media storage, and integrates mapping, weather, routing, and face-verification services.

### Status

The project was completed as an academic project and made available for internal testing through Google Play. Android is the tested platform; Windows support is partial and no long-term maintenance is planned.

### My role

I contributed to the application foundation, authentication, identity-verification workflow, platform configuration, and project documentation.

## My Works

### Application foundation and platform setup

The application needed a working cross-platform foundation while validation focused primarily on Android. Platform configuration and generated build files also needed to stay aligned with the Flutter project as features were added.

I created the initial Flutter project base and platform scaffolding for Android, iOS, macOS, Linux, Windows, and web. I updated Android Gradle configuration, corrected Windows build configuration, and adjusted dependencies and application settings required by the implemented features.

This provided the base application structure and the platform configuration needed to build and test the project.

### Firebase authentication

UniStay required separate account workflows for students and homeowners, with authentication connected to the application’s routing and profile flow.

I implemented registration and login screens, connected the flows to Firebase Authentication, integrated authentication-related routing, and updated the profile and login flow to support the later face-verification step.

The application could therefore support authenticated user entry points for its housing workflows and continue into identity verification where required.

### Face-verification service

Face verification crossed several boundaries: image capture in Flutter, a Python API, face detection and comparison, Firebase credentials, and authenticated application state. The service also needed clear behavior for invalid images and API failures.

I built a Python FastAPI service with `/verify` and `/health` endpoints, Docker configuration, and dependencies for DeepFace, OpenCV, NumPy, and MTCNN. The service decodes base64 images, validates the number of faces, compares the images with DeepFace, and creates a Firebase custom token after a successful match with verification metadata.

I also implemented the Flutter client service that loads the API URL from Firestore, sends the two images, parses the result, handles timeouts and API errors, and returns the verification status to the application. I refined the verification screens and corrected the route used by the verification flow.

This produced an end-to-end verification path between the Flutter client, the Dockerized API, and Firebase authentication.

### Documentation and delivery

The project involved a mobile application, Firebase configuration, a local face-verification API, Docker, and ngrok. Without clear instructions, developers and testers would have difficulty reproducing the setup or understanding the data and authentication flows.

I wrote and updated the technical guide, user guide, and README. I documented Firebase setup, the Docker and ngrok workflow for the face API, authentication, Firestore collections, deployment steps, and known limitations. I also added screenshots for the user guide.

The documentation made the project easier for contributors and testers to configure, run, and understand.

## Results

The project delivered a Flutter student-housing application with Firebase-backed account flows and an integrated face-verification path. Students and homeowners have separate registration and login workflows, while the verification backend can run as a Dockerized FastAPI service connected through a URL configured in Firestore.

The final project included an Android build suitable for internal testing, additional multiplatform configuration, a DeepFace-based verification service, Firebase custom-token handling, and technical and user documentation. The work enabled authenticated housing workflows and an additional identity-verification method for the application.

## Retrospective

The most difficult part of UniStay was not running the face-verification service on its own, but making the complete workflow communicate reliably. The application had to connect an Android device to the Flutter client, Firebase, the verification server, and the other parts of the system. If the project had only needed to run on a single PC, development would have been much simpler.

I struggled with this integration because Flutter, ngrok, and Firebase were all technologies I had not used before. Problems could occur at several boundaries: the mobile client had to reach the server, the server had to process and return the request correctly, and the application had to connect the result to Firebase authentication. This made debugging more difficult because an apparent application error could originate from the network configuration, the server, or the authentication flow.

The project taught me that distributed application development requires understanding the communication between components, not only the components themselves. If I approached a similar project again, I would first document the data flow and validate each connection independently before integrating the complete workflow. I would also spend more time learning the chosen platform and deployment tools before building features on top of them.
