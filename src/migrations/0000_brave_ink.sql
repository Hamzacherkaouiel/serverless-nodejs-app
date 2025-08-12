CREATE TABLE "leads" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"description" text DEFAULT 'this is the description',
	"createdat" timestamp DEFAULT now()
);
