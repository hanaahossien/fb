
facebook doc
https://documenter.getpostman.com/view/34864279/2sA3kXF1FM

simple Facebook application to  handle users, posts, and comments by Sequelize

Requirements:

1- Define a Sequelize model for users with the following fields:
username, email, and password.
2- Define a Sequelize model for posts with the following fields:
title, content, and author (linked to the User model).
3- Define a Sequelize model for comments with the following
fields: content, postId (linked to the post model), and userId
(linked to the User model).
4- Implement routes and controllers for user registration, login,
and logout. (email must be unique)
5- Implement routes and controllers for creating, reading,
updating, and deleting posts.
6- Implement routes and controllers for creating, reading,
updating, and deleting comments.
7- Ensure that users can only edit or delete (soft delete) their
posts.
8- Use bcrypt.js to securely hash and store user passwords.
9- Special endpoint to get a specific user with a specific post and
post’s comments.
10- Get a specific post with the author.


WARNNING:

Test your application thoroughly to ensure that all features work as
expected.
Deploy Backend on render and database on clever-cloud.com.
Postman collection (documentation) with assignment.
