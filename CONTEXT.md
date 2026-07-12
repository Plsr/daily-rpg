# Daily RPG

Turns the user's self-defined real-life tasks into an RPG progression loop: complete a Quest, earn XP, level up a Character.

## Language

**User**:
A person authenticated via Google OAuth. Owns exactly one Character.
_Avoid_: Account, Player

**Character**:
The entity that accumulates XP and levels up on a User's behalf. Owned 1:1 by a User, identified by its own stable ID independent of the User's identity — this allows renaming or, later, multiple Characters per User without a migration.
_Avoid_: Player, Avatar, Profile

**Quest**:
A one-off task the user defines, worth a fixed amount of XP, completed exactly once.
_Avoid_: Task, To-do, Chore

**XP**:
The unit of progress a Character earns by completing a Quest.
_Avoid_: Points, Score

**Level**:
A Character's current progression tier, derived from its cumulative XP.
_Avoid_: Rank, Tier
