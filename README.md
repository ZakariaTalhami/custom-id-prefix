# Monggo DB custom ID prefixes

## Goal
 
Demonstrate the implementation of auto-generating database record IDs with a prefix for easy readability.

## What is included

- User model with `user_` as ID prefix
- Task model with `task_` as ID prefix
- Todo List model with `todo_` as ID prefix
- CRUD operation for each model
- Query API that would accept any model ID and fetch the model from the collection depending the ID prefix.


## Implementation

### Generating the IDs

For Each model schema a prefix string is defined as a constant:
```ts
//db-constants.ts

export const DB_USER_ID_PREFIX = "user";
export const DB_TODO_LIST_ID_PREFIX = "todo";
export const DB_TASK_ID_PREFIX = "task";
```

These constants will be used to generate a default ID for documents once they are created.  To achieve this the default monogDB definition of `_id` is overwritten to add the prefix:
```ts
const taskSchema = new Schema<ITaskDoc>(
  {
    _id: {
      type: String,
      default: () => {
        return `${DB_TASK_ID_PREFIX}_${new Types.ObjectId()}`
      }
    },
    ...
  },
  ...
);
```

Example IDs:
```
user_62dd512c8840750013cb2f21
task_62dd512e8840750013cb2f7b
todo_62dd512f8840750013cb2fb3
```

This will generate a new ObjectId and prefix it with the approprate ID prefix.

Note: Document ID prefixes should be short, informative and readable.

### Query by ID API

The query API is used to fetch models for any ID from the system. The API will accept any ID, depending on the prefix of the ID the respective model is found.

To achieve this, a map between the ID prefixes and the respective DB model is needed

```ts
const PREFIX_TO_MODEL_MAP: Record<string, Model<any>> = {
  [DB_USER_ID_PREFIX]: Users,
  [DB_TODO_LIST_ID_PREFIX]: TodoLists,
  [DB_TASK_ID_PREFIX]: Tasks,
};
```

This map will be used to get the model after the prefix is extracted from the ID:

```ts
const [prefix] = id.split("_");

const model = PREFIX_TO_MODEL_MAP[prefix];
```

After the model is found, the document ID is used to query the colletion for the document data, then the API will return the resulting data object.

## Areas for improvements

* Reusable Schema with the `_id` definition, that way we dont have to added that logic for each model.

## Resources
- [Designing APIs for humans: Object IDs](https://dev.to/stripe/designing-apis-for-humans-object-ids-3o5a)
