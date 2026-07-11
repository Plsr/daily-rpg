# Character is a separate entity from User

Quest completion needs to award XP to *something* that levels up. The minimal design would store XP/Level directly on the User. Instead, we introduce a separate Character entity, owned 1:1 by a User with its own stable ID — even though the MVP only ever auto-creates one Character per User, with no character creation/switching UI.

We chose this because we anticipate supporting multiple Characters per User later (e.g. separate progression per life area — work, home, fitness). Splitting the entity now costs one extra table and a foreign key; merging them now and splitting later would require a breaking schema migration and data backfill.

Quest and XP data reference Character, not User, directly.
