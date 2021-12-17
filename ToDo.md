-using router file separation
-!!! acces is given by adding the note to a user or studygroup
Nick
GET
1.get all notes of a user N \* COMPLETE
2.get all tags of a note N \* COMPLETE
3.get all users of a studygroup U \* COMPLETE
4.get all notes of a studygroup N
5.get a note by name N
6.get a note by id N
7.get all resources of a note N \*COMPLETE

POST
1.post user \*, studygroup \* U N COMPLETE
2.post a user in a group U COMPLETE
3.post a note for a user by Id U COMPLETE
4.post a tag for a note N COMPLETE
5.post a resource for a note N COMPLETE

Andrada
PUT
1.put user, note, studygroup,resource,tag U N
2.put a user in a group U
3.put a note for a user N
4.put a tag for a note N
5.put a resource for a note N

DELETE
1.delete user, note, studygroup,resource,tag U N
2.delete a user in a group U
3.delete a note for a user N
4.delete a tag for a note N
5.delete a resource for a note N

Both
SEARCH WIP
1.get notes by any parameter (activitydate, creator, tag, subject, activity type and name , using && not ||)

POSTMAN COMMANDS:
https://www.getpostman.com/collections/f40202c9ea38f9e4e83b
