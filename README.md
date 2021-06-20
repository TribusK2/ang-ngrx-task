# Interview Task
This application contains boilerplate code for interview task. 

Ngrx and Bootstrap are already 
configured.

There's also existing module for user loading and switching.
## Task description
### Modify existing User module
Users list is hardcoded in the default state object. 
Modify existing code:
 - users data should be loaded from JSON file via HTTP. Integrate it with Ngrx store using Effects feature.
 - default selected user value should also be taken from store
### List module
Create list component that presents items created by given user. Each item contains: 
``` 
id: number;
title: string;
content;
```
List component should provide:
- a way to add new item through appropriate form
- basic sorting
- a separate set of items for each user - when user is changed a list should be updated to only his items

List module should use services, mocked API (JSON file is fine) and Ngrx.

## Requirements
1. Use Bootstrap for styling
1. UX design is on your side
1. Items should be stored in Ngrx
1. Try to follow existing approach on architecture and modularity
1. Api calls can be mocked
1. Clean and extensible code
1. Persist data in local storage - OPTIONAL
1. Fix existing unit test environment and provide unit tests for list module items - OPTIONAL
1. Commit your progress using some accessible repository


###In case of any questons feel free to ask.
##GOOD LUCK!
