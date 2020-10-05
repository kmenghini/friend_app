-- Users
INSERT INTO `users` (`first_name`, `last_name`, `email`, `password`) VALUES
('Kaitlyn', 'Menghini', 'kaitlyn.menghini@gmail.com', 'kaitlyn')
;

-- Friends
INSERT INTO `friends` (`first_name`, `last_name`, `user_id`) VALUES
('Anthony', 'Au', 1)
;

-- Reminders
INSERT INTO `reminders` (`friend_id`) VALUES
(1)
;
UPDATE `reminders`
SET `status` = 20
WHERE `id` = 1
;