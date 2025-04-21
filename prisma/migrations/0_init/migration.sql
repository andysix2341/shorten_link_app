-- CreateTable
CREATE TABLE `link` (
    `id` BIGINT NOT NULL,
    `original_link` VARCHAR(100) NOT NULL,
    `shorten_link` VARCHAR(7) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

