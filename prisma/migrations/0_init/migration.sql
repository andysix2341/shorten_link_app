-- CreateTable
CREATE TABLE "link" (
    "id" BIGINT NOT NULL,
    "original_link" VARCHAR(500),
    "shorten_link" VARCHAR(7),

    CONSTRAINT "link_pkey" PRIMARY KEY ("id")
);

