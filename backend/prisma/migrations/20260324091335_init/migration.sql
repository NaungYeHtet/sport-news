-- CreateTable
CREATE TABLE "demo_requests" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "demo_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "demo_requests_email_idx" ON "demo_requests"("email");

-- CreateIndex
CREATE INDEX "demo_requests_created_at_idx" ON "demo_requests"("created_at");
