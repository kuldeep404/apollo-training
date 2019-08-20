# apollo-training

1.What is GraphQL?

-GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.For example, a GraphQL service that tells us who the logged in user is (me) as well as that user's name might look something like this:

				type Query {
				  me: User
				}

				type User {
				  id: ID
				  name: String
				}

Once a GraphQL service is running (typically at a URL on a web service), it can be sent GraphQL queries to validate and execute. A received query is first checked to ensure it only refers to the types and fields defined, then runs the provided functions to produce a result.

For example the query:

				{
				  me {
				    name
				  }
				}
Could produce the JSON result:

				{
				  "me": {
				    "name": "Luke Skywalker"
				  }
				}

2.GraphQL Schema -


A GraphQL schema is at the core of any GraphQL server implementation. It describes the functionality available to the client applications that connect to it. We can use any programming language to create a GraphQL schema and build an interface around it.

The GraphQL runtime defines a generic graph-based schema to publish the capabilities of the data service it represents. Client applications can query the schema within its capabilities. This approach decouples clients from servers and allows both to evolve and scale independently.

->Create a schema-

				type Query {
				   greeting:String
				   students:[Student]
				}

				type Student {
				   id:ID!
				   firstName:String
				   lastName:String
				   password:String
				   collegeId:String
				}

3. Resolvers (Query, Mutation, and Subscription)

Resolvers provide the instructions for turning a GraphQL operation (a query, mutation, or subscription) into data. They either return the same type of data we specify in our schema or a promise for that data.

Before we can start writing resolvers, we need to learn more about what a resolver function looks like. Resolver functions accept four arguments:

			fieldName: (parent, args, context, info) => data;

1. Query Type-

A GraphQL query is for fetching data and compares to the GET verb in REST-based APIs.
In order to define what queries are possible on a server, the Query type is used within the SDL. The Query type is one of many root-level types which defines functionality (it doesn't actually trigger a query) for clients and acts as an entry-point to other more specific types within the schema.

			Ex:type Query {
			 getBooks: [Book]
			 getAuthors: [Author]
			}


2. Mutation type-

Mutations are operations sent to the server to create, update or delete data. These are comparable to the PUT, POST, PATCH and DELETE verbs on REST-based APIs.
Much like how the Query type defines the entry-points for data-fetching operations on a GraphQL server, the root-level Mutation type specifies the entry points for data-manipulation operations


3. Subscription type-

Adding GraphQL subscriptions to your GraphQL schema is simple, since Subscription is just another GraphQL operation type like Query and Mutation.

You specify operation type, then the operation name and you can customize the publication data with a selection set and arguments.

You need to create a root schema definition and a root resolver for your  Subscription root, just like with Query and Mutation

			Ex:type Comment {
			 id: String
			 content: String
			}

			type Subscription {
			 commentAdded(repoFullName: String!): Comment
			}

			schema {
			 query: Query
			 mutation: Mutation
			 subscription: Subscription
			}
Create a resolver just like queries and mutations, but instead of function, pass an Object with subscribe field and a subscription resolver method.










